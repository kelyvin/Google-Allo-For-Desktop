# DEPRECATED
### With Google's latest announcement that allo is [shutting down in March](https://www.cnet.com/g00/news/google-allo-to-shut-down-in-march-of-2019/?i10c.ua=1&i10c.encReferrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3d&i10c.dv=11), this project will also be ending and moving to "archive" mode. I would like to thank everyone for the downloads and support and for helping to validate a user need. You can check out the [Android Messages for Desktop](https://github.com/kelyvin/Android-Messages-For-Desktop) project instead. 

# Google Allo for Desktop

![Allo Home Page](http://i.imgur.com/5g1VU3S.png)

A desktop app for [Google Allo](https://www.allofordesktop.com/). This desktop app is supported by both [Nativefier](https://github.com/jiahaog/nativefier) and [Electron](https://github.com/electron/electron) version `^1.7.6`.

The Mac, Windows, and Linux apps can be downloaded from the [latest release](https://github.com/kelyvin/Google-Allo-Desktop-App/releases). The latest release includes both a light and dark theme version of the app.

## Purpose
The purpose of this project is to build dedicated desktop apps for Google Allo and leverage your OS's built in notification system.

This desktop app and project is not an official product of Google and I am not affiliated with Google in any way. You can read more about the purpose of this project here:
https://www.caffeinecoding.com/validating-a-customer-need-with-rapid-experimentation/

## Rebuilding the app
Requires `nodejs`

### Nativefier
Install nativefier and make sure to have your [optional dependencies](https://github.com/jiahaog/nativefier#optional-dependencies) set up to replace the icon.
```
npm install -g nativefier
```

### Mac
```
nativefier --platform "mac" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --inject dark-theme.css --honest --disable-dev-tools --single-instance --tray
```

### Windows
```
nativefier --platform "windows" --icon allo-logo.ico --name "Google Allo" "https://allo.google.com/web" --inject dark-theme.css --honest --disable-dev-tools --single-instance --tray
```

### Linux
```
nativefier --platform "linux" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --inject dark-theme.css --honest --disable-dev-tools --single-instance
```


## Notifications on Windows
To receive notifications on Windows, you'll need to do the following: 

1. Add a shortcut of this app to the Start Menu folder
2. In the "Windows Settings" app, check if the setting for "Show notifications in action center" is on (It might be off by default)


### For developers
These instructions were the result of an active issue with electron + Windows 8/10 and is resolved by setting `app.setAppUserModelId(process.execPath)` within `resources/app/lib/main.js` during electron initialization:

Example:

```javascript
const {app, shell} = electron;

app.setAppUserModelId(process.execPath);  // Include this line

function getFilenameFromMime(name, mime) {
  const exts = extName.mime(mime);
  ...
```

