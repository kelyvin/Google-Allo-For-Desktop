# Google Allo Desktop Webapps
Nativefier desktop webapps for Google Allo. Google Allo requires supported by electron version `^1.7.6`.

Both the mac and windows apps can be downloaded from the [latest release](https://github.com/kelyvin/Google-Allo-Desktop-App/releases).

## Purpose
The purpose of this project is to build dedicated desktop apps for Google Allo and leverage your OS's built in notification system.

This desktop app and project is not an official product of Google and I am not affiliated with Google in any way.

## Rebuilding the app
Requires `node 4.* || node 6.*`

### Install nativefier
```
npm install -g nativefier
```

### Mac
```
nativefier --platform "mac" --icon allo-logo.icns --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.6
```

### Windows
```
nativefier --platform "windows" --icon allo-logo.png --name "Google Allo" "https://allo.google.com/web" --honest --disable-dev-tools --single-instance --electron-version 1.7.6
```
