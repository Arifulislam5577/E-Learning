// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var _flowbite = require("flowbite");
var _phosphorIcons = require("phosphor-icons");

},{"flowbite":"ka8Lx","phosphor-icons":"kD0cd"}],"ka8Lx":[function(require,module,exports) {
/******/ (()=>{
    /******/ "use strict";
    var __webpack_exports__ = {};
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var Default = {
        alwaysOpen: false,
        activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
        inactiveClasses: "text-gray-500 dark:text-gray-400",
        onOpen: function onOpen() {},
        onClose: function onClose() {},
        onToggle: function onToggle() {}
    };
    var Accordion1 = /*#__PURE__*/ function() {
        function Accordion() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            _classCallCheck(this, Accordion);
            this._items = items;
            this._options = _objectSpread(_objectSpread({}, Default), options);
            this._init();
        }
        _createClass(Accordion, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    if (this._items.length) // show accordion item based on click
                    this._items.map(function(item) {
                        if (item.active) _this.open(item.id);
                        item.triggerEl.addEventListener("click", function() {
                            _this.toggle(item.id);
                        });
                    });
                }
            },
            {
                key: "getItem",
                value: function getItem(id) {
                    return this._items.filter(function(item) {
                        return item.id === id;
                    })[0];
                }
            },
            {
                key: "open",
                value: function open(id) {
                    var _this2 = this, _item$triggerEl$class, _item$triggerEl$class2;
                    var item = this.getItem(id); // don't hide other accordions if always open
                    if (!this._options.alwaysOpen) this._items.map(function(i) {
                        if (i !== item) {
                            var _i$triggerEl$classLis, _i$triggerEl$classLis2;
                            (_i$triggerEl$classLis = i.triggerEl.classList).remove.apply(_i$triggerEl$classLis, _toConsumableArray(_this2._options.activeClasses.split(" ")));
                            (_i$triggerEl$classLis2 = i.triggerEl.classList).add.apply(_i$triggerEl$classLis2, _toConsumableArray(_this2._options.inactiveClasses.split(" ")));
                            i.targetEl.classList.add("hidden");
                            i.triggerEl.setAttribute("aria-expanded", false);
                            i.active = false; // rotate icon if set
                            if (i.iconEl) i.iconEl.classList.remove("rotate-180");
                        }
                    });
                     // show active item
                    (_item$triggerEl$class = item.triggerEl.classList).add.apply(_item$triggerEl$class, _toConsumableArray(this._options.activeClasses.split(" ")));
                    (_item$triggerEl$class2 = item.triggerEl.classList).remove.apply(_item$triggerEl$class2, _toConsumableArray(this._options.inactiveClasses.split(" ")));
                    item.triggerEl.setAttribute("aria-expanded", true);
                    item.targetEl.classList.remove("hidden");
                    item.active = true; // rotate icon if set
                    if (item.iconEl) item.iconEl.classList.add("rotate-180");
                     // callback function
                    this._options.onOpen(this, item);
                }
            },
            {
                key: "toggle",
                value: function toggle(id) {
                    var item = this.getItem(id);
                    if (item.active) this.close(id);
                    else this.open(id);
                     // callback function
                    this._options.onToggle(this, item);
                }
            },
            {
                key: "close",
                value: function close(id) {
                    var _item$triggerEl$class3, _item$triggerEl$class4;
                    var item = this.getItem(id);
                    (_item$triggerEl$class3 = item.triggerEl.classList).remove.apply(_item$triggerEl$class3, _toConsumableArray(this._options.activeClasses.split(" ")));
                    (_item$triggerEl$class4 = item.triggerEl.classList).add.apply(_item$triggerEl$class4, _toConsumableArray(this._options.inactiveClasses.split(" ")));
                    item.targetEl.classList.add("hidden");
                    item.triggerEl.setAttribute("aria-expanded", false);
                    item.active = false; // rotate icon if set
                    if (item.iconEl) item.iconEl.classList.remove("rotate-180");
                     // callback function
                    this._options.onClose(this, item);
                }
            }
        ]);
        return Accordion;
    }();
    window.Accordion = Accordion1;
    function initAccordion() {
        document.querySelectorAll("[data-accordion]").forEach(function(accordionEl) {
            var alwaysOpen = accordionEl.getAttribute("data-accordion");
            var activeClasses = accordionEl.getAttribute("data-active-classes");
            var inactiveClasses = accordionEl.getAttribute("data-inactive-classes");
            var items = [];
            accordionEl.querySelectorAll("[data-accordion-target]").forEach(function(el) {
                var item = {
                    id: el.getAttribute("data-accordion-target"),
                    triggerEl: el,
                    targetEl: document.querySelector(el.getAttribute("data-accordion-target")),
                    iconEl: el.querySelector("[data-accordion-icon]"),
                    active: el.getAttribute("aria-expanded") === "true" ? true : false
                };
                items.push(item);
            });
            new Accordion1(items, {
                alwaysOpen: alwaysOpen === "open" ? true : false,
                activeClasses: activeClasses ? activeClasses : Default.activeClasses,
                inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initAccordion();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initAccordion);
    /* harmony default export */ const accordion = Accordion1;
    function collapse_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function collapse_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? collapse_ownKeys(Object(source), !0).forEach(function(key) {
                collapse_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : collapse_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function collapse_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function collapse_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function collapse_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function collapse_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) collapse_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) collapse_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var collapse_Default = {
        triggerEl: null,
        onCollapse: function onCollapse() {},
        onExpand: function onExpand() {},
        onToggle: function onToggle() {}
    };
    var Collapse1 = /*#__PURE__*/ function() {
        function Collapse() {
            var targetEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 ? arguments[1] : undefined;
            collapse_classCallCheck(this, Collapse);
            this._targetEl = targetEl;
            this._triggerEl = options ? options.triggerEl : collapse_Default.triggerEl;
            this._options = collapse_objectSpread(collapse_objectSpread({}, collapse_Default), options);
            this._visible = false;
            this._init();
        }
        collapse_createClass(Collapse, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    if (this._triggerEl) {
                        if (this._triggerEl.hasAttribute("aria-expanded")) this._visible = this._triggerEl.getAttribute("aria-expanded") === "true" ? true : false;
                        else // fix until v2 not to break previous single collapses which became dismiss
                        this._visible = this._targetEl.classList.contains("hidden") ? false : true;
                        this._triggerEl.addEventListener("click", function() {
                            _this._visible ? _this.collapse() : _this.expand();
                        });
                    }
                }
            },
            {
                key: "collapse",
                value: function collapse() {
                    this._targetEl.classList.add("hidden");
                    if (this._triggerEl) this._triggerEl.setAttribute("aria-expanded", "false");
                    this._visible = false; // callback function
                    this._options.onCollapse(this);
                }
            },
            {
                key: "expand",
                value: function expand() {
                    this._targetEl.classList.remove("hidden");
                    if (this._triggerEl) this._triggerEl.setAttribute("aria-expanded", "true");
                    this._visible = true; // callback function
                    this._options.onExpand(this);
                }
            },
            {
                key: "toggle",
                value: function toggle() {
                    if (this._visible) this.collapse();
                    else this.expand();
                }
            }
        ]);
        return Collapse;
    }();
    window.Collapse = Collapse1;
    function initCollapse() {
        document.querySelectorAll("[data-collapse-toggle]").forEach(function(triggerEl) {
            var targetEl = document.getElementById(triggerEl.getAttribute("data-collapse-toggle"));
            new Collapse1(targetEl, {
                triggerEl: triggerEl
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initCollapse();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initCollapse);
    /* harmony default export */ const collapse = Collapse1;
    function carousel_toConsumableArray(arr) {
        return carousel_arrayWithoutHoles(arr) || carousel_iterableToArray(arr) || carousel_unsupportedIterableToArray(arr) || carousel_nonIterableSpread();
    }
    function carousel_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function carousel_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return carousel_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return carousel_arrayLikeToArray(o, minLen);
    }
    function carousel_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function carousel_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return carousel_arrayLikeToArray(arr);
    }
    function carousel_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function carousel_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function carousel_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? carousel_ownKeys(Object(source), !0).forEach(function(key) {
                carousel_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : carousel_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function carousel_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function carousel_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function carousel_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function carousel_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) carousel_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) carousel_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var carousel_Default = {
        defaultPosition: 0,
        indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        },
        interval: 3000,
        onNext: function onNext() {},
        onPrev: function onPrev() {},
        onChange: function onChange() {}
    };
    var Carousel1 = /*#__PURE__*/ function() {
        function Carousel() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            carousel_classCallCheck(this, Carousel);
            this._items = items;
            this._options = carousel_objectSpread(carousel_objectSpread(carousel_objectSpread({}, carousel_Default), options), {}, {
                indicators: carousel_objectSpread(carousel_objectSpread({}, carousel_Default.indicators), options.indicators)
            });
            this._activeItem = this.getItem(this._options.defaultPosition);
            this._indicators = this._options.indicators.items;
            this._interval = null;
            this._init();
        }
        /**
   * Initialise carousel and items based on active one
   */ carousel_createClass(Carousel, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    this._items.map(function(item) {
                        item.el.classList.add("absolute", "inset-0", "transition-all", "transform");
                    }); // if no active item is set then first position is default
                    if (this._getActiveItem()) this.slideTo(this._getActiveItem().position);
                    else this.slideTo(0);
                    this._indicators.map(function(indicator, position) {
                        indicator.el.addEventListener("click", function() {
                            _this.slideTo(position);
                        });
                    });
                }
            },
            {
                key: "getItem",
                value: function getItem(position) {
                    return this._items[position];
                }
            },
            {
                key: "slideTo",
                value: function slideTo(position) {
                    var nextItem = this._items[position];
                    var rotationItems = {
                        "left": nextItem.position === 0 ? this._items[this._items.length - 1] : this._items[nextItem.position - 1],
                        "middle": nextItem,
                        "right": nextItem.position === this._items.length - 1 ? this._items[0] : this._items[nextItem.position + 1]
                    };
                    this._rotate(rotationItems);
                    this._setActiveItem(nextItem.position);
                    if (this._interval) {
                        this.pause();
                        this.cycle();
                    }
                    this._options.onChange(this);
                }
            },
            {
                key: "next",
                value: function next() {
                    var activeItem = this._getActiveItem();
                    var nextItem = null; // check if last item
                    if (activeItem.position === this._items.length - 1) nextItem = this._items[0];
                    else nextItem = this._items[activeItem.position + 1];
                    this.slideTo(nextItem.position); // callback function
                    this._options.onNext(this);
                }
            },
            {
                key: "prev",
                value: function prev() {
                    var activeItem = this._getActiveItem();
                    var prevItem = null; // check if first item
                    if (activeItem.position === 0) prevItem = this._items[this._items.length - 1];
                    else prevItem = this._items[activeItem.position - 1];
                    this.slideTo(prevItem.position); // callback function
                    this._options.onPrev(this);
                }
            },
            {
                key: "_rotate",
                value: function _rotate(rotationItems) {
                    // reset
                    this._items.map(function(item) {
                        item.el.classList.add("hidden");
                    }); // left item (previously active)
                    rotationItems.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
                    rotationItems.left.el.classList.add("-translate-x-full", "z-10"); // currently active item
                    rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
                    rotationItems.middle.el.classList.add("translate-x-0", "z-20"); // right item (upcoming active)
                    rotationItems.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
                    rotationItems.right.el.classList.add("translate-x-full", "z-10");
                }
            },
            {
                key: "cycle",
                value: function cycle() {
                    var _this2 = this;
                    this._interval = setInterval(function() {
                        _this2.next();
                    }, this._options.interval);
                }
            },
            {
                key: "pause",
                value: function pause() {
                    clearInterval(this._interval);
                }
            },
            {
                key: "_getActiveItem",
                value: function _getActiveItem() {
                    return this._activeItem;
                }
            },
            {
                key: "_setActiveItem",
                value: function _setActiveItem(position) {
                    var _this3 = this;
                    this._activeItem = this._items[position]; // update the indicators if available
                    if (this._indicators.length) {
                        var _this$_indicators$pos, _this$_indicators$pos2;
                        this._indicators.map(function(indicator) {
                            var _indicator$el$classLi, _indicator$el$classLi2;
                            indicator.el.setAttribute("aria-current", "false");
                            (_indicator$el$classLi = indicator.el.classList).remove.apply(_indicator$el$classLi, carousel_toConsumableArray(_this3._options.indicators.activeClasses.split(" ")));
                            (_indicator$el$classLi2 = indicator.el.classList).add.apply(_indicator$el$classLi2, carousel_toConsumableArray(_this3._options.indicators.inactiveClasses.split(" ")));
                        });
                        (_this$_indicators$pos = this._indicators[position].el.classList).add.apply(_this$_indicators$pos, carousel_toConsumableArray(this._options.indicators.activeClasses.split(" ")));
                        (_this$_indicators$pos2 = this._indicators[position].el.classList).remove.apply(_this$_indicators$pos2, carousel_toConsumableArray(this._options.indicators.inactiveClasses.split(" ")));
                        this._indicators[position].el.setAttribute("aria-current", "true");
                    }
                }
            }
        ]);
        return Carousel;
    }();
    window.Carousel = Carousel1;
    function initCarousel() {
        document.querySelectorAll("[data-carousel]").forEach(function(carouselEl) {
            var interval = carouselEl.getAttribute("data-carousel-interval");
            var slide = carouselEl.getAttribute("data-carousel") === "slide" ? true : false;
            var items = [];
            var defaultPosition = 0;
            if (carouselEl.querySelectorAll("[data-carousel-item]").length) carousel_toConsumableArray(carouselEl.querySelectorAll("[data-carousel-item]")).map(function(carouselItemEl, position) {
                items.push({
                    position: position,
                    el: carouselItemEl
                });
                if (carouselItemEl.getAttribute("data-carousel-item") === "active") defaultPosition = position;
            });
            var indicators = [];
            if (carouselEl.querySelectorAll("[data-carousel-slide-to]").length) carousel_toConsumableArray(carouselEl.querySelectorAll("[data-carousel-slide-to]")).map(function(indicatorEl) {
                indicators.push({
                    position: indicatorEl.getAttribute("data-carousel-slide-to"),
                    el: indicatorEl
                });
            });
            var carousel = new Carousel1(items, {
                defaultPosition: defaultPosition,
                indicators: {
                    items: indicators
                },
                interval: interval ? interval : carousel_Default.interval
            });
            if (slide) carousel.cycle();
             // check for controls
            var carouselNextEl = carouselEl.querySelector("[data-carousel-next]");
            var carouselPrevEl = carouselEl.querySelector("[data-carousel-prev]");
            if (carouselNextEl) carouselNextEl.addEventListener("click", function() {
                carousel.next();
            });
            if (carouselPrevEl) carouselPrevEl.addEventListener("click", function() {
                carousel.prev();
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initCarousel();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initCarousel);
    /* harmony default export */ const carousel1 = Carousel1;
    function dismiss_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function dismiss_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? dismiss_ownKeys(Object(source), !0).forEach(function(key) {
                dismiss_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dismiss_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function dismiss_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function dismiss_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function dismiss_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function dismiss_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) dismiss_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) dismiss_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var dismiss_Default = {
        triggerEl: null,
        transition: "transition-opacity",
        duration: 300,
        timing: "ease-out",
        onHide: function onHide() {}
    };
    var Dismiss1 = /*#__PURE__*/ function() {
        function Dismiss() {
            var targetEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            dismiss_classCallCheck(this, Dismiss);
            this._targetEl = targetEl;
            this._triggerEl = options ? options.triggerEl : dismiss_Default.triggerEl;
            this._options = dismiss_objectSpread(dismiss_objectSpread({}, dismiss_Default), options);
            this._init();
        }
        dismiss_createClass(Dismiss, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    if (this._triggerEl) this._triggerEl.addEventListener("click", function() {
                        _this.hide();
                    });
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this2 = this;
                    this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0");
                    setTimeout(function() {
                        _this2._targetEl.classList.add("hidden");
                    }, this._options.duration); // callback function
                    this._options.onHide(this, this._targetEl);
                }
            }
        ]);
        return Dismiss;
    }();
    window.Dismiss = Dismiss1;
    function initDismiss() {
        document.querySelectorAll("[data-dismiss-target]").forEach(function(triggerEl) {
            var targetEl = document.querySelector(triggerEl.getAttribute("data-dismiss-target"));
            new Dismiss1(targetEl, {
                triggerEl: triggerEl
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDismiss();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initDismiss);
    /* harmony default export */ const dismiss = Dismiss1;
    function getWindow(node) {
        if (node == null) return window;
        if (node.toString() !== "[object Window]") {
            var ownerDocument = node.ownerDocument;
            return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
    }
    function isElement(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
    }
    function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function isShadowRoot(node) {
        // IE 11 has no ShadowRoot
        if (typeof ShadowRoot === "undefined") return false;
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
    }
    var math_max = Math.max;
    var math_min = Math.min;
    var round = Math.round;
    function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) includeScale = false;
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
            var offsetHeight = element.offsetHeight;
            var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
            // Fallback to 1 in case both values are `0`
            if (offsetWidth > 0) scaleX = round(rect.width) / offsetWidth || 1;
            if (offsetHeight > 0) scaleY = round(rect.height) / offsetHeight || 1;
        }
        return {
            width: rect.width / scaleX,
            height: rect.height / scaleY,
            top: rect.top / scaleY,
            right: rect.right / scaleX,
            bottom: rect.bottom / scaleY,
            left: rect.left / scaleX,
            x: rect.left / scaleX,
            y: rect.top / scaleY
        };
    }
    function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
            scrollLeft: scrollLeft,
            scrollTop: scrollTop
        };
    }
    function getHTMLElementScroll(element) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node);
        else return getHTMLElementScroll(node);
    }
    function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
    }
    function getDocumentElement(element) {
        // $FlowFixMe[incompatible-return]: assume body is always available
        return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }
    function getWindowScrollBarX(element) {
        // If <html> has a CSS width greater than the viewport, then this will be
        // incorrect for RTL.
        // Popper 1 is broken in this case and never had a bug report so let's assume
        // it's not an issue. I don't think anyone ever specifies width on <html>
        // anyway.
        // Browsers where the left scrollbar doesn't cause an issue report `0` for
        // this (e.g. Edge 2019, IE11, Safari)
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    function getComputedStyle(element) {
        return getWindow(element).getComputedStyle(element);
    }
    function isScrollParent(element) {
        // Firefox wants us to check `-x` and `-y` variations as well
        var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }
    function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
    } // Returns the composite rect of an element relative to its offsetParent.
    // Composite means it takes into account transforms as well as layout.
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) isFixed = false;
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
            scrollLeft: 0,
            scrollTop: 0
        };
        var offsets = {
            x: 0,
            y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
            if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
            if (isHTMLElement(offsetParent)) {
                offsets = getBoundingClientRect(offsetParent, true);
                offsets.x += offsetParent.clientLeft;
                offsets.y += offsetParent.clientTop;
            } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
        }
        return {
            x: rect.left + scroll.scrollLeft - offsets.x,
            y: rect.top + scroll.scrollTop - offsets.y,
            width: rect.width,
            height: rect.height
        };
    }
    // Returns the layout rect of an element relative to its offsetParent. Layout
    // means it doesn't take into account transforms.
    function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
        // Fixes https://github.com/popperjs/popper-core/issues/1223
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
        if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
        return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: width,
            height: height
        };
    }
    function getParentNode(element) {
        if (getNodeName(element) === "html") return element;
        return(// $FlowFixMe[incompatible-return]
        // $FlowFixMe[prop-missing]
        element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
        getDocumentElement(element) // fallback
        );
    }
    function getScrollParent(node) {
        if ([
            "html",
            "body",
            "#document"
        ].indexOf(getNodeName(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
        return node.ownerDocument.body;
        if (isHTMLElement(node) && isScrollParent(node)) return node;
        return getScrollParent(getParentNode(node));
    }
    /*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/ function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) list = [];
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [
            win
        ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
    }
    function isTableElement(element) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(getNodeName(element)) >= 0;
    }
    function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
        return element.offsetParent;
    } // `.offsetParent` reports `null` for fixed elements, while absolute elements
    // return the containing block
    function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
            // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
            var elementCss = getComputedStyle(element);
            if (elementCss.position === "fixed") return null;
        }
        var currentNode = getParentNode(element);
        while(isHTMLElement(currentNode) && [
            "html",
            "body"
        ].indexOf(getNodeName(currentNode)) < 0){
            var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
            // create a containing block.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
            if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
                "transform",
                "perspective"
            ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
            else currentNode = currentNode.parentNode;
        }
        return null;
    } // Gets the closest ancestor positioned element. Handles some edge cases,
    // such as table ancestors and cross browser bugs.
    function getOffsetParent(element) {
        var window = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while(offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) return window;
        return offsetParent || getContainingBlock(element) || window;
    }
    var enums_top = "top";
    var bottom = "bottom";
    var right = "right";
    var left = "left";
    var auto = "auto";
    var basePlacements = [
        enums_top,
        bottom,
        right,
        left
    ];
    var start = "start";
    var end = "end";
    var clippingParents1 = "clippingParents";
    var viewport = "viewport";
    var popper1 = "popper";
    var reference1 = "reference";
    var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
        return acc.concat([
            placement + "-" + start,
            placement + "-" + end
        ]);
    }, []);
    var enums_placements = /*#__PURE__*/ [].concat(basePlacements, [
        auto
    ]).reduce(function(acc, placement) {
        return acc.concat([
            placement,
            placement + "-" + start,
            placement + "-" + end
        ]);
    }, []); // modifiers that need to read the DOM
    var beforeRead = "beforeRead";
    var read = "read";
    var afterRead = "afterRead"; // pure-logic modifiers
    var beforeMain = "beforeMain";
    var main = "main";
    var afterMain = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
    var beforeWrite = "beforeWrite";
    var write = "write";
    var afterWrite = "afterWrite";
    var modifierPhases = [
        beforeRead,
        read,
        afterRead,
        beforeMain,
        main,
        afterMain,
        beforeWrite,
        write,
        afterWrite
    ];
    // source: https://stackoverflow.com/questions/49875255
    function order(modifiers) {
        var map = new Map();
        var visited = new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
            map.set(modifier.name, modifier);
        }); // On visiting object, check for its dependencies and visit them recursively
        function sort(modifier) {
            visited.add(modifier.name);
            var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
            requires.forEach(function(dep) {
                if (!visited.has(dep)) {
                    var depModifier = map.get(dep);
                    if (depModifier) sort(depModifier);
                }
            });
            result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
            if (!visited.has(modifier.name)) // check for visited object
            sort(modifier);
        });
        return result;
    }
    function orderModifiers(modifiers) {
        // order based on dependencies
        var orderedModifiers = order(modifiers); // order based on phase
        return modifierPhases.reduce(function(acc, phase) {
            return acc.concat(orderedModifiers.filter(function(modifier) {
                return modifier.phase === phase;
            }));
        }, []);
    }
    function debounce(fn) {
        var pending;
        return function() {
            if (!pending) pending = new Promise(function(resolve) {
                Promise.resolve().then(function() {
                    pending = undefined;
                    resolve(fn());
                });
            });
            return pending;
        };
    }
    function mergeByName(modifiers) {
        var merged1 = modifiers.reduce(function(merged, current) {
            var existing = merged[current.name];
            merged[current.name] = existing ? Object.assign({}, existing, current, {
                options: Object.assign({}, existing.options, current.options),
                data: Object.assign({}, existing.data, current.data)
            }) : current;
            return merged;
        }, {}); // IE11 does not support Object.values
        return Object.keys(merged1).map(function(key) {
            return merged1[key];
        });
    }
    var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
    var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
    var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function areValidElements() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return !args.some(function(element) {
            return !(element && typeof element.getBoundingClientRect === "function");
        });
    }
    function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) generatorOptions = {};
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper(reference2, popper2, options1) {
            if (options1 === void 0) options1 = defaultOptions;
            var state1 = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                modifiersData: {},
                elements: {
                    reference: reference2,
                    popper: popper2
                },
                attributes: {},
                styles: {}
            };
            var effectCleanupFns = [];
            var isDestroyed = false;
            var instance = {
                state: state1,
                setOptions: function setOptions(setOptionsAction) {
                    var options = typeof setOptionsAction === "function" ? setOptionsAction(state1.options) : setOptionsAction;
                    cleanupModifierEffects();
                    state1.options = Object.assign({}, defaultOptions, state1.options, options);
                    state1.scrollParents = {
                        reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                        popper: listScrollParents(popper2)
                    }; // Orders the modifiers based on their dependencies and `phase`
                    // properties
                    var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                    state1.orderedModifiers = orderedModifiers.filter(function(m) {
                        return m.enabled;
                    }); // Validate the provided modifiers so that the consumer will get warned
                    var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers;
                    runModifierEffects();
                    return instance.update();
                },
                // Sync update – it will always be executed, even if not necessary. This
                // is useful for low frequency updates where sync behavior simplifies the
                // logic.
                // For high frequency updates (e.g. `resize` and `scroll` events), always
                // prefer the async Popper#update method
                forceUpdate: function forceUpdate() {
                    if (isDestroyed) return;
                    var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                    // anymore
                    if (!areValidElements(reference, popper)) return;
                     // Store the reference and popper rects to be read by modifiers
                    state1.rects = {
                        reference: getCompositeRect(reference, getOffsetParent(popper), state1.options.strategy === "fixed"),
                        popper: getLayoutRect(popper)
                    }; // Modifiers have the ability to reset the current update cycle. The
                    // most common use case for this is the `flip` modifier changing the
                    // placement, which then needs to re-run all the modifiers, because the
                    // logic was previously ran for the previous placement and is therefore
                    // stale/incorrect
                    state1.reset = false;
                    state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                    // is filled with the initial data specified by the modifier. This means
                    // it doesn't persist and is fresh on each update.
                    // To ensure persistent data, use `${name}#persistent`
                    state1.orderedModifiers.forEach(function(modifier) {
                        return state1.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                    });
                    var __debug_loops__ = 0;
                    for(var index = 0; index < state1.orderedModifiers.length; index++){
                        if (state1.reset === true) {
                            state1.reset = false;
                            index = -1;
                            continue;
                        }
                        var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                        if (typeof fn === "function") state1 = fn({
                            state: state1,
                            options: _options,
                            name: name,
                            instance: instance
                        }) || state1;
                    }
                },
                // Async and optimistically optimized update – it will not be executed if
                // not necessary (debounced to run at most once-per-tick)
                update: debounce(function() {
                    return new Promise(function(resolve) {
                        instance.forceUpdate();
                        resolve(state1);
                    });
                }),
                destroy: function destroy() {
                    cleanupModifierEffects();
                    isDestroyed = true;
                }
            };
            if (!areValidElements(reference2, popper2)) return instance;
            instance.setOptions(options1).then(function(state) {
                if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
            }); // Modifiers have the ability to execute arbitrary code before the first
            // update cycle runs. They will be executed in the same order as the update
            // cycle. This is useful when a modifier adds some persistent data that
            // other modifiers need to use, but the modifier is run after the dependent
            // one.
            function runModifierEffects() {
                state1.orderedModifiers.forEach(function(_ref3) {
                    var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                    if (typeof effect === "function") {
                        var cleanupFn = effect({
                            state: state1,
                            name: name,
                            instance: instance,
                            options: options
                        });
                        var noopFn = function noopFn() {};
                        effectCleanupFns.push(cleanupFn || noopFn);
                    }
                });
            }
            function cleanupModifierEffects() {
                effectCleanupFns.forEach(function(fn) {
                    return fn();
                });
                effectCleanupFns = [];
            }
            return instance;
        };
    }
    var createPopper = /* unused pure expression or super */ null; // eslint-disable-next-line import/no-unused-modules
    // eslint-disable-next-line import/no-unused-modules
    var passive = {
        passive: true
    };
    function effect1(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
        });
        if (resize) window.addEventListener("resize", instance.update, passive);
        return function() {
            if (scroll) scrollParents.forEach(function(scrollParent) {
                scrollParent.removeEventListener("scroll", instance.update, passive);
            });
            if (resize) window.removeEventListener("resize", instance.update, passive);
        };
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {},
        effect: effect1,
        data: {}
    };
    function getBasePlacement(placement) {
        return placement.split("-")[0];
    }
    function getVariation(placement) {
        return placement.split("-")[1];
    }
    function getMainAxisFromPlacement(placement) {
        return [
            "top",
            "bottom"
        ].indexOf(placement) >= 0 ? "x" : "y";
    }
    function computeOffsets(_ref) {
        var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference.x + reference.width / 2 - element.width / 2;
        var commonY = reference.y + reference.height / 2 - element.height / 2;
        var offsets;
        switch(basePlacement){
            case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;
            case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;
            case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;
            case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;
            default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
            var len = mainAxis === "y" ? "height" : "width";
            switch(variation){
                case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;
                case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;
                default:
            }
        }
        return offsets;
    }
    function popperOffsets1(_ref) {
        var state = _ref.state, name = _ref.name;
        // Offsets are the actual position the popper needs to have to be
        // properly positioned near its reference element
        // This is the most basic placement, and will be adjusted by
        // the modifiers in the next step
        state.modifiersData[name] = computeOffsets({
            reference: state.rects.reference,
            element: state.rects.popper,
            strategy: "absolute",
            placement: state.placement
        });
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_popperOffsets = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets1,
        data: {}
    };
    // eslint-disable-next-line import/no-unused-modules
    var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    }; // Round the offsets to the nearest suitable subpixel based on the DPR.
    // Zooming can change the DPR, but it seems to report a value that will
    // cleanly divide the values into the appropriate subpixels.
    function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
            x: round(x * dpr) / dpr || 0,
            y: round(y * dpr) / dpr || 0
        };
    }
    function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
        var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
            x: x,
            y: y
        }) : {
            x: x,
            y: y
        };
        x = _ref3.x;
        y = _ref3.y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = enums_top;
        var win = window;
        if (adaptive) {
            var offsetParent = getOffsetParent(popper);
            var heightProp = "clientHeight";
            var widthProp = "clientWidth";
            if (offsetParent === getWindow(popper)) {
                offsetParent = getDocumentElement(popper);
                if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                    heightProp = "scrollHeight";
                    widthProp = "scrollWidth";
                }
            } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
            offsetParent;
            if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                sideY = bottom;
                var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                y -= offsetY - popperRect.height;
                y *= gpuAcceleration ? 1 : -1;
            }
            if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                sideX = right;
                var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                x -= offsetX - popperRect.width;
                x *= gpuAcceleration ? 1 : -1;
            }
        }
        var commonStyles = Object.assign({
            position: position
        }, adaptive && unsetSides);
        var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
            x: x,
            y: y
        }) : {
            x: x,
            y: y
        };
        x = _ref4.x;
        y = _ref4.y;
        if (gpuAcceleration) {
            var _Object$assign;
            return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
    }
    function computeStyles(_ref5) {
        var state = _ref5.state, options = _ref5.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        var transitionProperty;
        var commonStyles = {
            placement: getBasePlacement(state.placement),
            variation: getVariation(state.placement),
            popper: state.elements.popper,
            popperRect: state.rects.popper,
            gpuAcceleration: gpuAcceleration,
            isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive: adaptive,
            roundOffsets: roundOffsets
        })));
        if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets: roundOffsets
        })));
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
            "data-popper-placement": state.placement
        });
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_computeStyles = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
    };
    // This modifier takes the styles prepared by the `computeStyles` modifier
    // and applies them to the HTMLElements such as popper and arrow
    function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name1) {
            var style = state.styles[name1] || {};
            var attributes = state.attributes[name1] || {};
            var element = state.elements[name1]; // arrow is optional + virtual elements
            if (!isHTMLElement(element) || !getNodeName(element)) return;
             // Flow doesn't support to extend this property, but it's the most
            // effective way to apply styles to an HTMLElement
            // $FlowFixMe[cannot-write]
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(name) {
                var value = attributes[name];
                if (value === false) element.removeAttribute(name);
                else element.setAttribute(name, value === true ? "" : value);
            });
        });
    }
    function applyStyles_effect(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
        return function() {
            Object.keys(state.elements).forEach(function(name) {
                var element = state.elements[name];
                var attributes = state.attributes[name] || {};
                var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
                var style1 = styleProperties.reduce(function(style, property) {
                    style[property] = "";
                    return style;
                }, {}); // arrow is optional + virtual elements
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style1);
                Object.keys(attributes).forEach(function(attribute) {
                    element.removeAttribute(attribute);
                });
            });
        };
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_applyStyles = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: applyStyles_effect,
        requires: [
            "computeStyles"
        ]
    };
    // eslint-disable-next-line import/no-unused-modules
    function distanceAndSkiddingToXY(placement, rects, offset) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [
            left,
            enums_top
        ].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
            placement: placement
        })) : offset, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [
            left,
            right
        ].indexOf(basePlacement) >= 0 ? {
            x: distance,
            y: skidding
        } : {
            x: skidding,
            y: distance
        };
    }
    function offset1(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset = _options$offset === void 0 ? [
            0,
            0
        ] : _options$offset;
        var data = enums_placements.reduce(function(acc, placement) {
            acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
            return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
            state.modifiersData.popperOffsets.x += x;
            state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_offset = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: offset1
    };
    var hash = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
            return hash[matched];
        });
    }
    var getOppositeVariationPlacement_hash = {
        start: "end",
        end: "start"
    };
    function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
            return getOppositeVariationPlacement_hash[matched];
        });
    }
    function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
        // can be obscured underneath it.
        // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
        // if it isn't open, so if this isn't available, the popper will be detected
        // to overflow the bottom of the screen too early.
        if (visualViewport) {
            width = visualViewport.width;
            height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
            // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
            // errors due to floating point numbers, so we need to check precision.
            // Safari returns a number <= 0, usually < -1 when pinch-zoomed
            // Feature detection fails in mobile emulation mode in Chrome.
            // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
            // 0.001
            // Fallback here: "Not Safari" userAgent
            if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                x = visualViewport.offsetLeft;
                y = visualViewport.offsetTop;
            }
        }
        return {
            width: width,
            height: height,
            x: x + getWindowScrollBarX(element),
            y: y
        };
    }
    // Gets the entire size of the scrollable document area, even extending outside
    // of the `<html>` and `<body>` rect bounds if horizontally scrollable
    function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
        return {
            width: width,
            height: height,
            x: x,
            y: y
        };
    }
    function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
        if (parent.contains(child)) return true;
        else if (rootNode && isShadowRoot(rootNode)) {
            var next = child;
            do {
                if (next && parent.isSameNode(next)) return true;
                 // $FlowFixMe[prop-missing]: need a better way to handle this...
                next = next.parentNode || next.host;
            }while (next);
        } // Give up, the result is false
        return false;
    }
    function rectToClientRect(rect) {
        return Object.assign({}, rect, {
            left: rect.x,
            top: rect.y,
            right: rect.x + rect.width,
            bottom: rect.y + rect.height
        });
    }
    function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
    }
    function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    } // A "clipping parent" is an overflowable container with the characteristic of
    // clipping (or hiding) overflowing elements with a position different from
    // `initial`
    function getClippingParents(element) {
        var clippingParents = listScrollParents(getParentNode(element));
        var canEscapeClipping = [
            "absolute",
            "fixed"
        ].indexOf(getComputedStyle(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement(clipperElement)) return [];
         // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
        return clippingParents.filter(function(clippingParent) {
            return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
        });
    } // Gets the maximum area that the element is visible in due to any number of
    // clipping parents
    function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents = [].concat(mainClippingParents, [
            rootBoundary
        ]);
        var firstClippingParent = clippingParents[0];
        var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
            var rect = getClientRectFromMixedType(element, clippingParent);
            accRect.top = math_max(rect.top, accRect.top);
            accRect.right = math_min(rect.right, accRect.right);
            accRect.bottom = math_min(rect.bottom, accRect.bottom);
            accRect.left = math_max(rect.left, accRect.left);
            return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
    }
    function getFreshSideObject() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
    function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
    }
    function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
            hashMap[key] = value;
            return hashMap;
        }, {});
    }
    // eslint-disable-next-line import/no-unused-modules
    function detectOverflow(state, options) {
        if (options === void 0) options = {};
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents1 : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper1 : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper1 ? reference1 : popper1;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets = computeOffsets({
            reference: referenceClientRect,
            element: popperRect,
            strategy: "absolute",
            placement: placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
        var elementClientRect = elementContext === popper1 ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
        // 0 or negative = within the clipping rect
        var overflowOffsets = {
            top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
            bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
            left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
            right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
        if (elementContext === popper1 && offsetData) {
            var offset = offsetData[placement];
            Object.keys(overflowOffsets).forEach(function(key) {
                var multiply = [
                    right,
                    bottom
                ].indexOf(key) >= 0 ? 1 : -1;
                var axis = [
                    enums_top,
                    bottom
                ].indexOf(key) >= 0 ? "y" : "x";
                overflowOffsets[key] += offset[axis] * multiply;
            });
        }
        return overflowOffsets;
    }
    function computeAutoPlacement(state, options) {
        if (options === void 0) options = {};
        var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
        var variation = getVariation(placement1);
        var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement) {
            return getVariation(placement) === variation;
        }) : basePlacements;
        var allowedPlacements = placements.filter(function(placement) {
            return allowedAutoPlacements.indexOf(placement) >= 0;
        });
        if (allowedPlacements.length === 0) allowedPlacements = placements;
         // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
        var overflows = allowedPlacements.reduce(function(acc, placement) {
            acc[placement] = detectOverflow(state, {
                placement: placement,
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding
            })[getBasePlacement(placement)];
            return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
            return overflows[a] - overflows[b];
        });
    }
    // eslint-disable-next-line import/no-unused-modules
    function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) return [];
        var oppositePlacement = getOppositePlacement(placement);
        return [
            getOppositeVariationPlacement(placement),
            oppositePlacement,
            getOppositeVariationPlacement(oppositePlacement)
        ];
    }
    function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) return;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
            getOppositePlacement(preferredPlacement)
        ] : getExpandedFallbackPlacements(preferredPlacement));
        var placements = [
            preferredPlacement
        ].concat(fallbackPlacements).reduce(function(acc, placement) {
            return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                placement: placement,
                boundary: boundary,
                rootBoundary: rootBoundary,
                padding: padding,
                flipVariations: flipVariations,
                allowedAutoPlacements: allowedAutoPlacements
            }) : placement);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements[0];
        for(var i = 0; i < placements.length; i++){
            var placement2 = placements[i];
            var _basePlacement = getBasePlacement(placement2);
            var isStartVariation = getVariation(placement2) === start;
            var isVertical = [
                enums_top,
                bottom
            ].indexOf(_basePlacement) >= 0;
            var len = isVertical ? "width" : "height";
            var overflow = detectOverflow(state, {
                placement: placement2,
                boundary: boundary,
                rootBoundary: rootBoundary,
                altBoundary: altBoundary,
                padding: padding
            });
            var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
            if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
            var altVariationSide = getOppositePlacement(mainVariationSide);
            var checks = [];
            if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
            if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
            if (checks.every(function(check) {
                return check;
            })) {
                firstFittingPlacement = placement2;
                makeFallbackChecks = false;
                break;
            }
            checksMap.set(placement2, checks);
        }
        if (makeFallbackChecks) {
            // `2` may be desired in some cases – research later
            var numberOfChecks = flipVariations ? 3 : 1;
            var _loop = function _loop(_i) {
                var fittingPlacement = placements.find(function(placement) {
                    var checks = checksMap.get(placement);
                    if (checks) return checks.slice(0, _i).every(function(check) {
                        return check;
                    });
                });
                if (fittingPlacement) {
                    firstFittingPlacement = fittingPlacement;
                    return "break";
                }
            };
            for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
                var _ret = _loop(_i1);
                if (_ret === "break") break;
            }
        }
        if (state.placement !== firstFittingPlacement) {
            state.modifiersData[name]._skip = true;
            state.placement = firstFittingPlacement;
            state.reset = true;
        }
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_flip = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: false
        }
    };
    function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
    }
    function within(min, value, max) {
        return math_max(min, math_min(value, max));
    }
    function withinMaxClamp(min, value, max) {
        var v = within(min, value, max);
        return v > max ? max : v;
    }
    function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            altBoundary: altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
            placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
            mainAxis: tetherOffsetValue,
            altAxis: tetherOffsetValue
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
            x: 0,
            y: 0
        };
        if (!popperOffsets) return;
        if (checkMainAxis) {
            var _offsetModifierState$;
            var mainSide = mainAxis === "y" ? enums_top : left;
            var altSide = mainAxis === "y" ? bottom : right;
            var len = mainAxis === "y" ? "height" : "width";
            var offset = popperOffsets[mainAxis];
            var min = offset + overflow[mainSide];
            var max = offset - overflow[altSide];
            var additive = tether ? -popperRect[len] / 2 : 0;
            var minLen = variation === start ? referenceRect[len] : popperRect[len];
            var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
            // outside the reference bounds
            var arrowElement = state.elements.arrow;
            var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                width: 0,
                height: 0
            };
            var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
            var arrowPaddingMin = arrowPaddingObject[mainSide];
            var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
            // to include its full size in the calculation. If the reference is small
            // and near the edge of a boundary, the popper can overflow even if the
            // reference is not overflowing as well (e.g. virtual elements with no
            // width or height)
            var arrowLen = within(0, referenceRect[len], arrowRect[len]);
            var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
            var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
            var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
            var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
            var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
            var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
            var tetherMax = offset + maxOffset - offsetModifierValue;
            var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
            popperOffsets[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset;
        }
        if (checkAltAxis) {
            var _offsetModifierState$2;
            var _mainSide = mainAxis === "x" ? enums_top : left;
            var _altSide = mainAxis === "x" ? bottom : right;
            var _offset = popperOffsets[altAxis];
            var _len = altAxis === "y" ? "height" : "width";
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var isOriginSide = [
                enums_top,
                left
            ].indexOf(basePlacement) !== -1;
            var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
            var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
            var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
            var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
            popperOffsets[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_preventOverflow = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: [
            "offset"
        ]
    };
    // eslint-disable-next-line import/no-unused-modules
    var toPaddingObject = function toPaddingObject(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
            placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    };
    function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [
            left,
            right
        ].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets) return;
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? enums_top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
        var startDiff = popperOffsets[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
        // outside of the popper bounds
        var min = paddingObject[minProp];
        var max = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset = within(min, center, max); // Prevents breaking syntax highlighting...
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
    }
    function arrow_effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) return;
         // CSS selector
        if (typeof arrowElement === "string") {
            arrowElement = state.elements.popper.querySelector(arrowElement);
            if (!arrowElement) return;
        }
        if (!contains(state.elements.popper, arrowElement)) return;
        state.elements.arrow = arrowElement;
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_arrow = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect: arrow_effect,
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) preventedOffsets = {
            x: 0,
            y: 0
        };
        return {
            top: overflow.top - rect.height - preventedOffsets.y,
            right: overflow.right - rect.width + preventedOffsets.x,
            bottom: overflow.bottom - rect.height + preventedOffsets.y,
            left: overflow.left - rect.width - preventedOffsets.x
        };
    }
    function isAnySideFullyClipped(overflow) {
        return [
            enums_top,
            right,
            bottom,
            left
        ].some(function(side) {
            return overflow[side] >= 0;
        });
    }
    function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
            elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
            altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
            referenceClippingOffsets: referenceClippingOffsets,
            popperEscapeOffsets: popperEscapeOffsets,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
            "data-popper-reference-hidden": isReferenceHidden,
            "data-popper-escaped": hasPopperEscaped
        });
    } // eslint-disable-next-line import/no-unused-modules
    /* harmony default export */ const modifiers_hide = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: hide
    };
    var defaultModifiers1 = [
        eventListeners,
        modifiers_popperOffsets,
        modifiers_computeStyles,
        modifiers_applyStyles,
        modifiers_offset,
        modifiers_flip,
        modifiers_preventOverflow,
        modifiers_arrow,
        modifiers_hide
    ];
    var popper_createPopper = /*#__PURE__*/ popperGenerator({
        defaultModifiers: defaultModifiers1
    }); // eslint-disable-next-line import/no-unused-modules
    function dropdown_toConsumableArray(arr) {
        return dropdown_arrayWithoutHoles(arr) || dropdown_iterableToArray(arr) || dropdown_unsupportedIterableToArray(arr) || dropdown_nonIterableSpread();
    }
    function dropdown_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function dropdown_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return dropdown_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dropdown_arrayLikeToArray(o, minLen);
    }
    function dropdown_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function dropdown_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return dropdown_arrayLikeToArray(arr);
    }
    function dropdown_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function dropdown_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function dropdown_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? dropdown_ownKeys(Object(source), !0).forEach(function(key) {
                dropdown_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dropdown_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function dropdown_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function dropdown_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function dropdown_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function dropdown_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) dropdown_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var dropdown_Default = {
        placement: "bottom",
        triggerType: "click",
        onShow: function onShow() {},
        onHide: function onHide() {}
    };
    var Dropdown1 = /*#__PURE__*/ function() {
        function Dropdown() {
            var targetElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var triggerElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            dropdown_classCallCheck(this, Dropdown);
            this._targetEl = targetElement;
            this._triggerEl = triggerElement;
            this._options = dropdown_objectSpread(dropdown_objectSpread({}, dropdown_Default), options);
            this._popperInstance = this._createPopperInstace();
            this._visible = false;
            this._init();
        }
        dropdown_createClass(Dropdown, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    if (this._triggerEl) this._triggerEl.addEventListener("click", function() {
                        _this.toggle();
                    });
                }
            },
            {
                key: "_createPopperInstace",
                value: function _createPopperInstace() {
                    return popper_createPopper(this._triggerEl, this._targetEl, {
                        placement: this._options.placement,
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [
                                        0,
                                        10
                                    ]
                                }
                            }
                        ]
                    });
                }
            },
            {
                key: "_handleClickOutside",
                value: function _handleClickOutside(ev, targetEl) {
                    var clickedEl = ev.target;
                    if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this._visible) this.hide();
                    document.body.removeEventListener("click", this._handleClickOutside, true);
                }
            },
            {
                key: "toggle",
                value: function toggle() {
                    if (this._visible) {
                        this.hide();
                        document.body.removeEventListener("click", this._handleClickOutside, true);
                    } else this.show();
                }
            },
            {
                key: "show",
                value: function show() {
                    var _this2 = this;
                    this._targetEl.classList.remove("hidden");
                    this._targetEl.classList.add("block"); // Enable the event listeners
                    this._popperInstance.setOptions(function(options) {
                        return dropdown_objectSpread(dropdown_objectSpread({}, options), {}, {
                            modifiers: [].concat(dropdown_toConsumableArray(options.modifiers), [
                                {
                                    name: "eventListeners",
                                    enabled: true
                                }
                            ])
                        });
                    });
                    document.body.addEventListener("click", function(ev) {
                        _this2._handleClickOutside(ev, _this2._targetEl);
                    }, true); // Update its position
                    this._popperInstance.update();
                    this._visible = true; // callback function
                    this._options.onShow(this);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    this._targetEl.classList.remove("block");
                    this._targetEl.classList.add("hidden"); // Disable the event listeners
                    this._popperInstance.setOptions(function(options) {
                        return dropdown_objectSpread(dropdown_objectSpread({}, options), {}, {
                            modifiers: [].concat(dropdown_toConsumableArray(options.modifiers), [
                                {
                                    name: "eventListeners",
                                    enabled: false
                                }
                            ])
                        });
                    });
                    this._visible = false; // callback function
                    this._options.onHide(this);
                }
            }
        ]);
        return Dropdown;
    }();
    window.Dropdown = Dropdown1;
    function initDropdown() {
        document.querySelectorAll("[data-dropdown-toggle]").forEach(function(triggerEl) {
            var targetEl = document.getElementById(triggerEl.getAttribute("data-dropdown-toggle"));
            var placement = triggerEl.getAttribute("data-dropdown-placement");
            new Dropdown1(targetEl, triggerEl, {
                placement: placement ? placement : dropdown_Default.placement
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDropdown();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initDropdown);
    /* harmony default export */ const dropdown = Dropdown1;
    function modal_toConsumableArray(arr) {
        return modal_arrayWithoutHoles(arr) || modal_iterableToArray(arr) || modal_unsupportedIterableToArray(arr) || modal_nonIterableSpread();
    }
    function modal_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function modal_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return modal_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return modal_arrayLikeToArray(o, minLen);
    }
    function modal_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function modal_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return modal_arrayLikeToArray(arr);
    }
    function modal_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function modal_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function modal_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? modal_ownKeys(Object(source), !0).forEach(function(key) {
                modal_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : modal_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function modal_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function modal_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function modal_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function modal_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) modal_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) modal_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var modal_Default = {
        placement: "center",
        backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        onHide: function onHide() {},
        onShow: function onShow() {},
        onToggle: function onToggle() {}
    };
    var Modal1 = /*#__PURE__*/ function() {
        function Modal() {
            var targetEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            modal_classCallCheck(this, Modal);
            this._targetEl = targetEl;
            this._options = modal_objectSpread(modal_objectSpread({}, modal_Default), options);
            this._isHidden = true;
            this._init();
        }
        modal_createClass(Modal, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    this._getPlacementClasses().map(function(c) {
                        _this._targetEl.classList.add(c);
                    });
                }
            },
            {
                key: "_createBackdrop",
                value: function _createBackdrop() {
                    if (this._isHidden) {
                        var _backdropEl$classList;
                        var backdropEl = document.createElement("div");
                        backdropEl.setAttribute("modal-backdrop", "");
                        (_backdropEl$classList = backdropEl.classList).add.apply(_backdropEl$classList, modal_toConsumableArray(this._options.backdropClasses.split(" ")));
                        document.querySelector("body").append(backdropEl);
                    }
                }
            },
            {
                key: "_destroyBackdropEl",
                value: function _destroyBackdropEl() {
                    if (!this._isHidden) document.querySelector("[modal-backdrop]").remove();
                }
            },
            {
                key: "_getPlacementClasses",
                value: function _getPlacementClasses() {
                    switch(this._options.placement){
                        // top
                        case "top-left":
                            return [
                                "justify-start",
                                "items-start"
                            ];
                        case "top-center":
                            return [
                                "justify-center",
                                "items-start"
                            ];
                        case "top-right":
                            return [
                                "justify-end",
                                "items-start"
                            ];
                        // center
                        case "center-left":
                            return [
                                "justify-start",
                                "items-center"
                            ];
                        case "center":
                            return [
                                "justify-center",
                                "items-center"
                            ];
                        case "center-right":
                            return [
                                "justify-end",
                                "items-center"
                            ];
                        // bottom
                        case "bottom-left":
                            return [
                                "justify-start",
                                "items-end"
                            ];
                        case "bottom-center":
                            return [
                                "justify-center",
                                "items-end"
                            ];
                        case "bottom-right":
                            return [
                                "justify-end",
                                "items-end"
                            ];
                        default:
                            return [
                                "justify-center",
                                "items-center"
                            ];
                    }
                }
            },
            {
                key: "toggle",
                value: function toggle() {
                    if (this._isHidden) this.show();
                    else this.hide();
                     // callback function
                    this._options.onToggle(this);
                }
            },
            {
                key: "show",
                value: function show() {
                    this._targetEl.classList.add("flex");
                    this._targetEl.classList.remove("hidden");
                    this._targetEl.setAttribute("aria-modal", "true");
                    this._targetEl.setAttribute("role", "dialog");
                    this._targetEl.removeAttribute("aria-hidden");
                    this._createBackdrop();
                    this._isHidden = false; // callback function
                    this._options.onShow(this);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    this._targetEl.classList.add("hidden");
                    this._targetEl.classList.remove("flex");
                    this._targetEl.setAttribute("aria-hidden", "true");
                    this._targetEl.removeAttribute("aria-modal");
                    this._targetEl.removeAttribute("role");
                    this._destroyBackdropEl();
                    this._isHidden = true; // callback function
                    this._options.onHide(this);
                }
            }
        ]);
        return Modal;
    }();
    window.Modal = Modal1;
    var getModalInstance = function getModalInstance(id, instances) {
        if (instances.some(function(modalInstance) {
            return modalInstance.id === id;
        })) return instances.find(function(modalInstance) {
            return modalInstance.id === id;
        });
        return false;
    };
    function initModal() {
        var modalInstances = [];
        document.querySelectorAll("[data-modal-toggle]").forEach(function(el) {
            var modalId = el.getAttribute("data-modal-toggle");
            var modalEl = document.getElementById(modalId);
            var placement = modalEl.getAttribute("data-modal-placement");
            if (modalEl) {
                if (!modalEl.hasAttribute("aria-hidden") && !modalEl.hasAttribute("aria-modal")) modalEl.setAttribute("aria-hidden", "true");
            }
            var modal = null;
            if (getModalInstance(modalId, modalInstances)) {
                modal = getModalInstance(modalId, modalInstances);
                modal = modal.object;
            } else {
                modal = new Modal1(modalEl, {
                    placement: placement ? placement : modal_Default.placement
                });
                modalInstances.push({
                    id: modalId,
                    object: modal
                });
            }
            if (modalEl.hasAttribute("data-modal-show") && modalEl.getAttribute("data-modal-show") === "true") modal.show();
            el.addEventListener("click", function() {
                modal.toggle();
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initModal();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initModal);
    /* harmony default export */ const modal1 = Modal1;
    function drawer_toConsumableArray(arr) {
        return drawer_arrayWithoutHoles(arr) || drawer_iterableToArray(arr) || drawer_unsupportedIterableToArray(arr) || drawer_nonIterableSpread();
    }
    function drawer_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function drawer_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return drawer_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return drawer_arrayLikeToArray(o, minLen);
    }
    function drawer_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function drawer_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return drawer_arrayLikeToArray(arr);
    }
    function drawer_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function drawer_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function drawer_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? drawer_ownKeys(Object(source), !0).forEach(function(key) {
                drawer_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : drawer_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function drawer_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function drawer_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function drawer_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function drawer_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) drawer_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) drawer_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var drawer_Default = {
        placement: "left",
        bodyScrolling: false,
        backdrop: true,
        edge: false,
        edgeOffset: "bottom-[60px]",
        backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
        onShow: function onShow() {},
        onHide: function onHide() {},
        onToggle: function onToggle() {}
    };
    var Drawer1 = /*#__PURE__*/ function() {
        function Drawer() {
            var targetEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 ? arguments[1] : undefined;
            drawer_classCallCheck(this, Drawer);
            this._targetEl = targetEl;
            this._options = drawer_objectSpread(drawer_objectSpread({}, drawer_Default), options);
            this._visible = false;
            this._init();
        }
        drawer_createClass(Drawer, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    // set initial accessibility attributes
                    if (this._targetEl) {
                        this._targetEl.setAttribute("aria-hidden", "true");
                        this._targetEl.classList.add("transition-transform");
                    } // set base placement classes
                    this._getPlacementClasses(this._options.placement).base.map(function(c) {
                        _this._targetEl.classList.add(c);
                    }); // hide by default
                    this.hide();
                }
            },
            {
                key: "isVisible",
                value: function isVisible() {
                    return this._visible;
                }
            },
            {
                key: "hide",
                value: function hide() {
                    var _this2 = this;
                    // based on the edge option show placement classes
                    if (this._options.edge) {
                        this._getPlacementClasses(this._options.placement + "-edge").active.map(function(c) {
                            _this2._targetEl.classList.remove(c);
                        });
                        this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(c) {
                            _this2._targetEl.classList.add(c);
                        });
                    } else {
                        this._getPlacementClasses(this._options.placement).active.map(function(c) {
                            _this2._targetEl.classList.remove(c);
                        });
                        this._getPlacementClasses(this._options.placement).inactive.map(function(c) {
                            _this2._targetEl.classList.add(c);
                        });
                    } // set accessibility attributes
                    this._targetEl.setAttribute("aria-hidden", "true");
                    this._targetEl.removeAttribute("aria-modal");
                    this._targetEl.removeAttribute("role"); // enable body scroll
                    if (!this._options.bodyScrolling) document.body.classList.remove("overflow-hidden");
                     // destroy backdrop
                    if (this._options.backdrop) this._destroyBackdropEl();
                    this._visible = false; // callback function
                    this._options.onHide(this);
                }
            },
            {
                key: "show",
                value: function show() {
                    var _this3 = this;
                    if (this._options.edge) {
                        this._getPlacementClasses(this._options.placement + "-edge").active.map(function(c) {
                            _this3._targetEl.classList.add(c);
                        });
                        this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(c) {
                            _this3._targetEl.classList.remove(c);
                        });
                    } else {
                        this._getPlacementClasses(this._options.placement).active.map(function(c) {
                            _this3._targetEl.classList.add(c);
                        });
                        this._getPlacementClasses(this._options.placement).inactive.map(function(c) {
                            _this3._targetEl.classList.remove(c);
                        });
                    } // set accessibility attributes
                    this._targetEl.setAttribute("aria-modal", "true");
                    this._targetEl.setAttribute("role", "dialog");
                    this._targetEl.removeAttribute("aria-hidden"); // disable body scroll
                    if (!this._options.bodyScrolling) document.body.classList.add("overflow-hidden");
                     // show backdrop
                    if (this._options.backdrop) this._createBackdrop();
                    this._visible = true; // callback function
                    this._options.onShow(this);
                }
            },
            {
                key: "toggle",
                value: function toggle() {
                    if (this.isVisible()) this.hide();
                    else this.show();
                }
            },
            {
                key: "_createBackdrop",
                value: function _createBackdrop() {
                    var _this4 = this;
                    if (!this._visible) {
                        var _backdropEl$classList;
                        var backdropEl = document.createElement("div");
                        backdropEl.setAttribute("drawer-backdrop", "");
                        (_backdropEl$classList = backdropEl.classList).add.apply(_backdropEl$classList, drawer_toConsumableArray(this._options.backdropClasses.split(" ")));
                        document.querySelector("body").append(backdropEl);
                        backdropEl.addEventListener("click", function() {
                            _this4.hide();
                        });
                    }
                }
            },
            {
                key: "_destroyBackdropEl",
                value: function _destroyBackdropEl() {
                    if (this._visible) document.querySelector("[drawer-backdrop]").remove();
                }
            },
            {
                key: "_getPlacementClasses",
                value: function _getPlacementClasses(placement) {
                    switch(placement){
                        case "top":
                            return {
                                base: [
                                    "top-0",
                                    "left-0",
                                    "right-0"
                                ],
                                active: [
                                    "transform-none"
                                ],
                                inactive: [
                                    "-translate-y-full"
                                ]
                            };
                        case "right":
                            return {
                                base: [
                                    "right-0",
                                    "top-0"
                                ],
                                active: [
                                    "transform-none"
                                ],
                                inactive: [
                                    "translate-x-full"
                                ]
                            };
                        case "bottom":
                            return {
                                base: [
                                    "bottom-0",
                                    "left-0",
                                    "right-0"
                                ],
                                active: [
                                    "transform-none"
                                ],
                                inactive: [
                                    "translate-y-full"
                                ]
                            };
                        case "left":
                            return {
                                base: [
                                    "left-0",
                                    "top-0"
                                ],
                                active: [
                                    "transform-none"
                                ],
                                inactive: [
                                    "-translate-x-full"
                                ]
                            };
                        case "bottom-edge":
                            return {
                                base: [
                                    "left-0",
                                    "top-0"
                                ],
                                active: [
                                    "transform-none"
                                ],
                                inactive: [
                                    "translate-y-full",
                                    this._options.edgeOffset
                                ]
                            };
                        default:
                            return {
                                base: [
                                    "left-0",
                                    "top-0"
                                ],
                                active: [
                                    "transform-none"
                                ],
                                inactive: [
                                    "-translate-x-full"
                                ]
                            };
                    }
                }
            }
        ]);
        return Drawer;
    }();
    window.Drawer = Drawer1;
    var getDrawerInstance = function getDrawerInstance(id, instances) {
        if (instances.some(function(drawerInstance) {
            return drawerInstance.id === id;
        })) return instances.find(function(drawerInstance) {
            return drawerInstance.id === id;
        });
        return false;
    };
    function initDrawer() {
        var drawerInstances = [];
        document.querySelectorAll("[data-drawer-target]").forEach(function(triggerEl) {
            // mandatory
            var targetEl = document.getElementById(triggerEl.getAttribute("data-drawer-target"));
            var drawerId = targetEl.id; // optional
            var placement = triggerEl.getAttribute("data-drawer-placement");
            var bodyScrolling = triggerEl.getAttribute("data-drawer-body-scrolling");
            var backdrop = triggerEl.getAttribute("data-drawer-backdrop");
            var edge = triggerEl.getAttribute("data-drawer-edge");
            var edgeOffset = triggerEl.getAttribute("data-drawer-edge-offset");
            var drawer = null;
            if (getDrawerInstance(drawerId, drawerInstances)) {
                drawer = getDrawerInstance(drawerId, drawerInstances);
                drawer = drawer.object;
            } else {
                drawer = new Drawer1(targetEl, {
                    placement: placement ? placement : drawer_Default.placement,
                    bodyScrolling: bodyScrolling ? bodyScrolling === "true" ? true : false : drawer_Default.bodyScrolling,
                    backdrop: backdrop ? backdrop === "true" ? true : false : drawer_Default.backdrop,
                    edge: edge ? edge === "true" ? true : false : drawer_Default.edge,
                    edgeOffset: edgeOffset ? edgeOffset : drawer_Default.edgeOffset
                });
                drawerInstances.push({
                    id: drawerId,
                    object: drawer
                });
            }
        });
        document.querySelectorAll("[data-drawer-toggle]").forEach(function(triggerEl) {
            var targetEl = document.getElementById(triggerEl.getAttribute("data-drawer-toggle"));
            var drawerId = targetEl.id;
            var drawer = getDrawerInstance(drawerId, drawerInstances);
            triggerEl.addEventListener("click", function() {
                if (drawer.object.isVisible()) drawer.object.hide();
                else drawer.object.show();
            });
        });
        document.querySelectorAll("[data-drawer-dismiss]").forEach(function(triggerEl) {
            var targetEl = document.getElementById(triggerEl.getAttribute("data-drawer-dismiss"));
            var drawerId = targetEl.id;
            var drawer = getDrawerInstance(drawerId, drawerInstances);
            triggerEl.addEventListener("click", function() {
                drawer.object.hide();
            });
        });
        document.querySelectorAll("[data-drawer-show]").forEach(function(triggerEl) {
            var targetEl = document.getElementById(triggerEl.getAttribute("data-drawer-show"));
            var drawerId = targetEl.id;
            var drawer = getDrawerInstance(drawerId, drawerInstances);
            triggerEl.addEventListener("click", function() {
                drawer.object.show();
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDrawer();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initDrawer);
    /* harmony default export */ const drawer1 = Drawer1;
    function tabs_toConsumableArray(arr) {
        return tabs_arrayWithoutHoles(arr) || tabs_iterableToArray(arr) || tabs_unsupportedIterableToArray(arr) || tabs_nonIterableSpread();
    }
    function tabs_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function tabs_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return tabs_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tabs_arrayLikeToArray(o, minLen);
    }
    function tabs_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function tabs_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return tabs_arrayLikeToArray(arr);
    }
    function tabs_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function tabs_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function tabs_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? tabs_ownKeys(Object(source), !0).forEach(function(key) {
                tabs_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tabs_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function tabs_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function tabs_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function tabs_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function tabs_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) tabs_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) tabs_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var tabs_Default = {
        defaultTabId: null,
        activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
        inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
        onShow: function onShow() {}
    };
    var Tabs1 = /*#__PURE__*/ function() {
        function Tabs() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            tabs_classCallCheck(this, Tabs);
            this._items = items;
            this._activeTab = options ? this.getTab(options.defaultTabId) : null;
            this._options = tabs_objectSpread(tabs_objectSpread({}, tabs_Default), options);
            this._init();
        }
        tabs_createClass(Tabs, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    if (this._items.length) {
                        // set the first tab as active if not set by explicitly
                        if (!this._activeTab) this._setActiveTab(this._items[0]);
                         // force show the first default tab
                        this.show(this._activeTab.id, true); // show tab content based on click
                        this._items.map(function(tab) {
                            tab.triggerEl.addEventListener("click", function() {
                                _this.show(tab.id);
                            });
                        });
                    }
                }
            },
            {
                key: "getActiveTab",
                value: function getActiveTab() {
                    return this._activeTab;
                }
            },
            {
                key: "_setActiveTab",
                value: function _setActiveTab(tab) {
                    this._activeTab = tab;
                }
            },
            {
                key: "getTab",
                value: function getTab(id) {
                    return this._items.filter(function(t) {
                        return t.id === id;
                    })[0];
                }
            },
            {
                key: "show",
                value: function show(id) {
                    var _this2 = this, _tab$triggerEl$classL, _tab$triggerEl$classL2;
                    var forceShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var tab = this.getTab(id); // don't do anything if already active
                    if (tab === this._activeTab && !forceShow) return;
                     // hide other tabs
                    this._items.map(function(t) {
                        if (t !== tab) {
                            var _t$triggerEl$classLis, _t$triggerEl$classLis2;
                            (_t$triggerEl$classLis = t.triggerEl.classList).remove.apply(_t$triggerEl$classLis, tabs_toConsumableArray(_this2._options.activeClasses.split(" ")));
                            (_t$triggerEl$classLis2 = t.triggerEl.classList).add.apply(_t$triggerEl$classLis2, tabs_toConsumableArray(_this2._options.inactiveClasses.split(" ")));
                            t.targetEl.classList.add("hidden");
                            t.triggerEl.setAttribute("aria-selected", false);
                        }
                    }); // show active tab
                    (_tab$triggerEl$classL = tab.triggerEl.classList).add.apply(_tab$triggerEl$classL, tabs_toConsumableArray(this._options.activeClasses.split(" ")));
                    (_tab$triggerEl$classL2 = tab.triggerEl.classList).remove.apply(_tab$triggerEl$classL2, tabs_toConsumableArray(this._options.inactiveClasses.split(" ")));
                    tab.triggerEl.setAttribute("aria-selected", true);
                    tab.targetEl.classList.remove("hidden");
                    this._setActiveTab(tab); // callback function
                    this._options.onShow(this, tab);
                }
            }
        ]);
        return Tabs;
    }();
    window.Tabs = Tabs1;
    function initTabs() {
        document.querySelectorAll("[data-tabs-toggle]").forEach(function(triggerEl) {
            var tabElements = [];
            var defaultTabId = null;
            triggerEl.querySelectorAll('[role="tab"]').forEach(function(el) {
                var isActive = el.getAttribute("aria-selected") === "true";
                var tab = {
                    id: el.getAttribute("data-tabs-target"),
                    triggerEl: el,
                    targetEl: document.querySelector(el.getAttribute("data-tabs-target"))
                };
                tabElements.push(tab);
                if (isActive) defaultTabId = tab.id;
            });
            new Tabs1(tabElements, {
                defaultTabId: defaultTabId
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initTabs();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initTabs);
    /* harmony default export */ const tabs = Tabs1;
    function tooltip_toConsumableArray(arr) {
        return tooltip_arrayWithoutHoles(arr) || tooltip_iterableToArray(arr) || tooltip_unsupportedIterableToArray(arr) || tooltip_nonIterableSpread();
    }
    function tooltip_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function tooltip_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return tooltip_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return tooltip_arrayLikeToArray(o, minLen);
    }
    function tooltip_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function tooltip_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return tooltip_arrayLikeToArray(arr);
    }
    function tooltip_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function tooltip_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function tooltip_objectSpread(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? tooltip_ownKeys(Object(source), !0).forEach(function(key) {
                tooltip_defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tooltip_ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    function tooltip_defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function tooltip_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function tooltip_defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function tooltip_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) tooltip_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) tooltip_defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }
    var tooltip_Default = {
        placement: "top",
        triggerType: "hover",
        onShow: function onShow() {},
        onHide: function onHide() {}
    };
    var Tooltip1 = /*#__PURE__*/ function() {
        function Tooltip() {
            var targetEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var triggerEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            tooltip_classCallCheck(this, Tooltip);
            this._targetEl = targetEl;
            this._triggerEl = triggerEl;
            this._options = tooltip_objectSpread(tooltip_objectSpread({}, tooltip_Default), options);
            this._popperInstance = this._createPopperInstace();
            this._init();
        }
        tooltip_createClass(Tooltip, [
            {
                key: "_init",
                value: function _init() {
                    var _this = this;
                    if (this._triggerEl) {
                        var triggerEvents = this._getTriggerEvents();
                        triggerEvents.showEvents.forEach(function(ev) {
                            _this._triggerEl.addEventListener(ev, function() {
                                _this.show();
                            });
                        });
                        triggerEvents.hideEvents.forEach(function(ev) {
                            _this._triggerEl.addEventListener(ev, function() {
                                _this.hide();
                            });
                        });
                    }
                }
            },
            {
                key: "_createPopperInstace",
                value: function _createPopperInstace() {
                    return popper_createPopper(this._triggerEl, this._targetEl, {
                        placement: this._options.placement,
                        modifiers: [
                            {
                                name: "offset",
                                options: {
                                    offset: [
                                        0,
                                        8
                                    ]
                                }
                            }
                        ]
                    });
                }
            },
            {
                key: "_getTriggerEvents",
                value: function _getTriggerEvents() {
                    switch(this._options.triggerType){
                        case "hover":
                            return {
                                showEvents: [
                                    "mouseenter",
                                    "focus"
                                ],
                                hideEvents: [
                                    "mouseleave",
                                    "blur"
                                ]
                            };
                        case "click":
                            return {
                                showEvents: [
                                    "click",
                                    "focus"
                                ],
                                hideEvents: [
                                    "focusout",
                                    "blur"
                                ]
                            };
                        default:
                            return {
                                showEvents: [
                                    "mouseenter",
                                    "focus"
                                ],
                                hideEvents: [
                                    "mouseleave",
                                    "blur"
                                ]
                            };
                    }
                }
            },
            {
                key: "show",
                value: function show() {
                    this._targetEl.classList.remove("opacity-0", "invisible");
                    this._targetEl.classList.add("opacity-100", "visible"); // Enable the event listeners
                    this._popperInstance.setOptions(function(options) {
                        return tooltip_objectSpread(tooltip_objectSpread({}, options), {}, {
                            modifiers: [].concat(tooltip_toConsumableArray(options.modifiers), [
                                {
                                    name: "eventListeners",
                                    enabled: true
                                }
                            ])
                        });
                    }); // Update its position
                    this._popperInstance.update(); // callback function
                    this._options.onShow(this);
                }
            },
            {
                key: "hide",
                value: function hide() {
                    this._targetEl.classList.remove("opacity-100", "visible");
                    this._targetEl.classList.add("opacity-0", "invisible"); // Disable the event listeners
                    this._popperInstance.setOptions(function(options) {
                        return tooltip_objectSpread(tooltip_objectSpread({}, options), {}, {
                            modifiers: [].concat(tooltip_toConsumableArray(options.modifiers), [
                                {
                                    name: "eventListeners",
                                    enabled: false
                                }
                            ])
                        });
                    }); // callback function
                    this._options.onHide(this);
                }
            }
        ]);
        return Tooltip;
    }();
    window.Tooltip = Tooltip1;
    function initTooltip() {
        document.querySelectorAll("[data-tooltip-target]").forEach(function(triggerEl) {
            var targetEl = document.getElementById(triggerEl.getAttribute("data-tooltip-target"));
            var triggerType = triggerEl.getAttribute("data-tooltip-trigger");
            var placement = triggerEl.getAttribute("data-tooltip-placement");
            new Tooltip1(targetEl, triggerEl, {
                placement: placement ? placement : tooltip_Default.placement,
                triggerType: triggerType ? triggerType : tooltip_Default.triggerType
            });
        });
    }
    if (document.readyState !== "loading") // DOMContentLoaded event were already fired. Perform explicit initialization now
    initTooltip();
    else // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener("DOMContentLoaded", initTooltip);
    /* harmony default export */ const tooltip = Tooltip1;
    // core components
    /* harmony default export */ const flowbite = {
        Accordion: accordion,
        Collapse: collapse,
        Carousel: carousel1,
        Dismiss: dismiss,
        Dropdown: dropdown,
        Modal: modal1,
        Drawer: drawer1,
        Tabs: tabs,
        Tooltip: tooltip
    };
/******/ })();

},{}],"kD0cd":[function(require,module,exports) {
var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://unpkg.com/phosphor-icons@1.4.2/src/css/icons.css";
head.appendChild(link);

},{}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire8582")

//# sourceMappingURL=index.59a40e7a.js.map
