const CACHE = 'ironlog-v8';
// Same-origin app shell — cached atomically on install (all must succeed).
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png',
  './icon-maskable.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return; // let the browser handle non-GET natively

  // Navigations: network-first so a fresh deploy is picked up; fall back to the cached shell offline.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const net = await fetch(req);
        if (net && net.ok) {
          const copy = net.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return net;
        }
      } catch (_) { /* offline — fall through to cache */ }
      return (await caches.match(req)) || (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
    })());
    return;
  }

  // Everything else (manifest, icons, the lazy-loaded SheetJS CDN): stale-while-revalidate.
  e.respondWith((async () => {
    const cached = await caches.match(req);
    const net = fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => cached || Response.error());
    return cached || net;
  })());
});
