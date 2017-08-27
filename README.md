# Google Allo for Desktop

![Allo Home Page](http://i.imgur.com/5g1VU3S.png)

A native desktop app for Google Allo. This desktop app Allo is supported by both [Nativefier](https://github.com/jiahaog/nativefier) and [Electron](https://github.com/electron/electron) version `^1.7.6`.

Both the mac and windows apps can be downloaded from the [latest release](https://github.com/kelyvin/Google-Allo-Desktop-App/releases).

## Purpose
The purpose of this project is to build dedicated desktop apps for Google Allo and leverage your OS's built in notification system.

This desktop app and project is not an official product of Google and I am not affiliated with Google in any way.

## Rebuilding the app
Requires `node 4.* || node 6.*`

### Nativefier
Install nativefier and make sure to have your [optional dependencies](https://github.com/jiahaog/nativefier#optional-dependencies) set up to replace the icon.
```
npm install -g nativefier
```

### Mac
```
nativefier --platform "mac" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.6
```

### Windows
```
nativefier --platform "windows" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.6
```

### Linux
```
nativefier --platform "linux" --icon allo-logo.png --name "GoogleAllo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.6
```
