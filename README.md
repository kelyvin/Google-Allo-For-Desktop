# Google Allo for Desktop

![Allo Home Page](http://i.imgur.com/5g1VU3S.png)

A desktop app for [Google Allo](https://www.allofordesktop.com/). This desktop app is supported by both [Nativefier](https://github.com/jiahaog/nativefier) and [Electron](https://github.com/electron/electron) version `^1.7.6`.

The Mac, Windows, and Linux apps can be downloaded from the [latest release](https://github.com/kelyvin/Google-Allo-Desktop-App/releases).

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
nativefier --platform "mac" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.13
```

### Windows
```
nativefier --platform "windows" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --tray --electron-version 1.7.13
```

### Linux
```
nativefier --platform "linux" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.13
```
