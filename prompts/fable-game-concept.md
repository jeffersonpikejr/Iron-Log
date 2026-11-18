# Prompt: Fable → Iron Log game concept

*Paste everything below the line into Claude Fable. It is self-contained, so Fable needs no repo access. If it does have the repo, also point it at `index.html` and `PROTOCOL.md`.*

---

I want an original video game concept that grows out of a training app I've already built. Give me one concept I'd be excited to build and play, not a list of gamification features. Write it as a design pitch I could build from.

## What exists today: Iron Log (v29)

Iron Log is an offline-first PWA for a hybrid athlete. It's a single static `index.html` (vanilla JS, a tiny `h()` hyperscript helper, no build step, no backend), plus a service worker. All data lives in `localStorage` on the device, and the user can export it to `.xlsx` or `.json`. It's live on GitHub Pages and used daily.

**What it records**
- **Strength sets:** exercise, weight, reps, RIR. PRs are ranked by estimated 1RM (Epley: `w·(1+reps/30)`), with reps breaking ties, so adding a rep at the same load counts as progress.
- **Cardio:** duration, speed or pace, elevation. The 4×4 VO₂max intervals progress by pace or watts, not heart rate.
- **Mobility and prehab:** tracked, but they aren't scored working sets.
- **Muscle-group volume:** about 60 exercises map to Chest, Back, Delts, Traps, Arms, Quads, Hamstrings, Glutes, Calves and Core. Volume is rolled up per routine cycle.
- **Sessions are filed by local date.** Each session has a **Finish workout** action that checks it off for the current cycle.

**How training is structured (the "3+3 Protocol," the active program)**
- **Rotation:** Lower → Zone 2 → Upper A → VO₂max 4×4 → Upper B → Saturday (Threshold *or* Endurance) → Rest.
- **Days aren't tied to weekdays.** The app tracks the rotation, and the user taps **Start new cycle** when it's done.
- **≤45 minutes** for every required session.
- **Bonus work:** an optional "bonus round" that leftover time earns. It's hidden automatically in deloads, the taper, and recovery days.
- **12-week periodization in 6 blocks:** Establish → Deload → Build → Deload → Peak → Taper. Volume runs 100 → ~50 → 100 → ~50 → 100 → ~50.
- **Double progression:** add reps across the range, then add load and drop back to the bottom of the range. Big compounds stay off failure.
- **Under-recovered toggle:** flagging a day as rough cuts lifts to one working set, swaps hard intervals for easy Zone 2, and drops the bonus round and explosive work. That day still counts, and the user doesn't make it up later.
- **Guardrails:**
  - Shoulder: neutral grips, a landmine-press swap, dips stay shallow.
  - Low back: Good Mornings are never taken to failure.
- **Program values, stated explicitly:**
  - "Bonus work is gravy, not debt."
  - "Never make up skipped work."
  - "Deloads are honest."

**Other programs in the app:** two older VO₂max + low-volume lifting splits, a builder for custom workouts and exercises, and reorderable exercise lists.

## The player

- A hybrid athlete balancing VO₂max, strength, and healthspan around a demanding job.
- Fluent in programming variables: volume, intensity, RPE/RIR, progressive overload, periodization.
- Plays tabletop RPGs (5e) and chess, and leans Stoic.
- Will see through shallow gamification immediately: streaks, confetti, XP for logging.

## The design problem

Most fitness gamification rewards **more**: more sessions, more streaks, more volume. That directly contradicts this program, where the right move is often **less**: take the deload, flag the bad-sleep day, skip the bonus, don't chase a missed session. The game's core loop has to reward **good training judgment**, not raw output.

If your concept would push a player to skip a deload or train through a rough night to protect a streak or win a fight, it has failed.

## Requirements

- **Real training data drives the game.** The inputs are the signals Iron Log already captures: e1RM PRs, double-progression steps, per-muscle volume, cycle completion, phase (Establish, Deload, Build, Peak, Taper), recovery-day flags, interval pace or watts, and bonus work done or skipped. Say exactly which signals move which mechanics.
- **Playable in short sessions** (2–10 min) outside the gym. It should be worth opening on a rest day.
- **Buildable by one person inside the existing app.**
  - Vanilla JS in the same single-file PWA, reading the same `localStorage` data.
  - Offline, no server, no accounts, no external assets I'd need to license.
  - Canvas/SVG or DOM rendering is fine.
  - A first version I could ship in a few weekends.
- **An original world, mechanics, and art direction.** You can draw on genres and mechanics (roguelite, tactics, base-builder, deckbuilder, idle, narrative), but don't recreate or reskin an existing game.
- **Honest to physiology.** Fatigue, supercompensation, and tapering should be literal mechanics, not just flavor text.

## What to send back

Aim for roughly 1,500–2,500 words in Markdown.

1. **Title and one-line pitch.**
2. **Fantasy and world:** who the player is, what they're building or defending, and why that fits the theme of training.
3. **Core loop:** what happens in one play session, and what happens across one 12-week block. Map each step to training signals in a table: *signal → mechanic → why it encourages good judgment*.
4. **How it handles less:** how deloads, recovery days, skipped bonus work, and the taper each become satisfying or strategically valuable rather than punishing.
5. **Progression and long-term hook:** what carries over between 12-week blocks, and why someone would still care in month six.
6. **Exploit check:** the three most likely ways a player would game the system with fake or junk logging or overtraining, and how the design neutralizes each.
7. **Art and feel:** visual style, UI tone, and how it sits beside the app's existing dark, minimal style.
8. **MVP scope:** the smallest version that delivers the core loop, a rough data model reading from the existing log, and what to save for v2.
9. **Two alternate directions** in 2–3 sentences each, so I can see what you weighed and rejected.

Pick the strongest concept and commit to it. Where you're unsure about something specific to the app, state your assumption and keep going.
