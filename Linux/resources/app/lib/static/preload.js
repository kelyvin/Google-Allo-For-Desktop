'use strict';

var _electron = require('electron');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INJECT_JS_PATH = _path2.default.join(__dirname, '../../', 'inject/inject.js');

/**
 * Patches window.Notification to set a callback on a new Notification
 * @param callback
 */
/**
 Preload file that will be executed in the renderer process
 */
function setNotificationCallback(callback) {
  var OldNotify = window.Notification;
  var newNotify = function newNotify(title, opt) {
    callback(title, opt);
    return new OldNotify(title, opt);
  };
  newNotify.requestPermission = OldNotify.requestPermission.bind(OldNotify);
  Object.defineProperty(newNotify, 'permission', {
    get: function get() {
      return OldNotify.permission;
    }
  });

  window.Notification = newNotify;
}

function clickSelector(element) {
  var mouseEvent = new MouseEvent('click');
  element.dispatchEvent(mouseEvent);
}

function injectScripts() {
  var needToInject = _fs2.default.existsSync(INJECT_JS_PATH);
  if (!needToInject) {
    return;
  }
  // Dynamically require scripts
  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(INJECT_JS_PATH);
}

setNotificationCallback(function (title, opt) {
  _electron.ipcRenderer.send('notification', title, opt);
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    var targetElement = event.srcElement;

    // the clicked element is the deepest in the DOM, and may not be the <a> bearing the href
    // for example, <a href="..."><span>Google</span></a>
    while (!targetElement.href && targetElement.parentElement) {
      targetElement = targetElement.parentElement;
    }
    var targetHref = targetElement.href;

    if (!targetHref) {
      _electron.ipcRenderer.once('contextMenuClosed', function () {
        clickSelector(event.target);
        _electron.ipcRenderer.send('cancelNewWindowOverride');
      });
    }

    _electron.ipcRenderer.send('contextMenuOpened', targetHref);
  }, false);

  injectScripts();
});

_electron.ipcRenderer.on('params', function (event, message) {
  var appArgs = JSON.parse(message);
  console.log('nativefier.json', appArgs);
});

_electron.ipcRenderer.on('debug', function (event, message) {
  // eslint-disable-next-line no-console
  console.log('debug:', message);
});

_electron.ipcRenderer.on('change-zoom', function (event, message) {
  _electron.webFrame.setZoomFactor(message);
});
//# sourceMappingURL=preload.js.map
