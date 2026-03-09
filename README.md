# Iron-Log
IRON·LOG — Deploy to iPhone
Quick Setup (5 minutes)
1. Create a GitHub repo
	∙	Go to github.com → New Repository
	∙	Name it ironlog (or whatever you want)
	∙	Make it Public
	∙	Click “Create repository”
2. Upload the 3 files
	∙	Click “uploading an existing file”
	∙	Drag in: index.html, manifest.json, sw.js
	∙	Click “Commit changes”
3. Enable GitHub Pages
	∙	Go to repo → Settings → Pages
	∙	Source: “Deploy from a branch”
	∙	Branch: main, folder: / (root)
	∙	Click Save
	∙	Wait ~60 seconds for deployment
4. Add to iPhone Home Screen
	∙	Open Safari on your iPhone
	∙	Go to https://YOUR-USERNAME.github.io/ironlog/
	∙	Tap the Share button (box with arrow)
	∙	Tap “Add to Home Screen”
	∙	Name it “IronLog”
	∙	Tap “Add”
Done
You now have a native-feeling app on your home screen with:
	∙	Full offline support
	∙	localStorage persistence (survives closing/reopening)
	∙	No browser chrome
	∙	Instant launch
Data Management
	∙	Data persists in Safari’s localStorage on your device
	∙	Use ⚙️ → Export to backup as JSON
	∙	Use ⚙️ → Import to restore from backup
	∙	Clearing Safari data will clear app data (export first!)
