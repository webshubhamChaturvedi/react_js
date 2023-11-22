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
})({"e5VXe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "15ea8b8bf19e8117";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
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
        console.log("[parcel] ✨ Error resolved");
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"cviho":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1c2f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1c2f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _simmer = require("../../common/SimmerUI/Simmer");
var _simmerDefault = parcelHelpers.interopDefault(_simmer);
var _reactRouterDom = require("react-router-dom");
var _useResturentMenu = require("../../../utils/useResturentMenu");
var _useResturentMenuDefault = parcelHelpers.interopDefault(_useResturentMenu);
var _resturenReccomndedCard = require("./ResturenReccomndedCard");
var _resturenReccomndedCardDefault = parcelHelpers.interopDefault(_resturenReccomndedCard);
var _s = $RefreshSig$();
function ResturentDetail() {
    _s();
    // const [resData, setResData] = useState(null);
    // const [add, setAdd] = useState(false);
    // useEffect(() => {
    //   // alert("useeffect");
    //   resApi();
    // }, []);
    const { resid } = (0, _reactRouterDom.useParams)();
    const resData = (0, _useResturentMenuDefault.default)(resid); //custom hook for fetching data
    const [openAccor, setOpenAcc] = (0, _react.useState)(0); //Accrodian of menu
    // console.log(useParams());
    // const resApi = async function () {
    //   const data = await fetch(`${RES_DETAIL}${resid}`);
    //   const output = await data.json();
    //   setResData(output.data);
    // };
    if (resData === null) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "resdetail w-2/4",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _simmerDefault.default), {}, void 0, false, {
            fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
            lineNumber: 29,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
        lineNumber: 28,
        columnNumber: 7
    }, this);
    const { name, cuisines, avgRating, costForTwo, costForTwoMessage, totalRatingsString, sla } = resData?.cards[0]?.card?.card?.info || {};
    const { gridElements } = resData?.cards[1]?.card?.card || {};
    const itemCards = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const recommendedCard = itemCards[1]?.card?.card?.itemCards;
    const getCatData = itemCards.filter((cat)=>cat.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //Filterout the data based on itemCaterory
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "resdetail w-2/4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "orderHeading",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                        className: "resname",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                                        className: "cusions",
                                        children: cuisines?.join(",")
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "orderdeatilHeading",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        className: "rating",
                                        style: {
                                            color: avgRating < 4 ? avgRating < 3 ? "#ef3232" : "#db7c38" : "#48c479"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                className: "fa fa-star"
                                            }, void 0, false, {
                                                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            avgRating
                                        ]
                                    }, void 0, true, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                        children: totalRatingsString
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "timimg",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                        className: "fa fa-clock"
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    sla?.deliveryTime,
                                    " Mins"
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                        className: "fa fa-coins"
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    costForTwoMessage
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "offerSection",
                        children: gridElements?.infoWithStyle?.offers.map((item, ind)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "offerCommonSec",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: "offerbtn",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "resOfferTop",
                                            children: [
                                                " ",
                                                item?.info?.header,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "resofferBottom",
                                            children: [
                                                item?.info?.couponCode,
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                    children: item?.info?.description
                                                }, void 0, false, {
                                                    fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, ind, false, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            getCatData.map((catList, index)=>{
                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _resturenReccomndedCardDefault.default), {
                    getCatData: catList,
                    showItem: index === openAccor ? true : false,
                    setOpenAcc: ()=>setOpenAcc(index)
                }, catList.card.card.title, false, {
                    fileName: "scr/components/Resturent/ResturentDetails/ResturentDetail.js",
                    lineNumber: 123,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true);
}
_s(ResturentDetail, "ueyYeUjrl95EnE+vfF6pRc+nDMg=", false, function() {
    return [
        (0, _reactRouterDom.useParams),
        (0, _useResturentMenuDefault.default)
    ];
});
_c = ResturentDetail;
exports.default = ResturentDetail;
var _c;
$RefreshReg$(_c, "ResturentDetail");

  $parcel$ReactRefreshHelpers$1c2f.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../common/SimmerUI/Simmer":"9I5Ko","react-router-dom":"9xmpe","../../../utils/useResturentMenu":"iVLsG","./ResturenReccomndedCard":"7q4Qa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iVLsG":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$fe8e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$fe8e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _constant = require("./constant");
var _s = $RefreshSig$();
const useResturentMenu = (resId)=>{
    _s();
    const [resInfo, setresInfo] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async function() {
        try {
            const data = await fetch(`${(0, _constant.RES_DETAIL)}${resId}`);
            const json = await data.json();
            setresInfo(json.data);
        } catch (error) {
            console.error(error);
        }
    };
    return resInfo;
};
_s(useResturentMenu, "Rxgv/XyQ3eKglEUR7o+rJaQf7kE=");
exports.default = useResturentMenu;

  $parcel$ReactRefreshHelpers$fe8e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","./constant":"cxf2R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7q4Qa":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$6223 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$6223.prelude(module);

try {
// import { CDN_URL } from "../../../utils/constant";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _categoryList = require("../CategoryList");
var _categoryListDefault = parcelHelpers.interopDefault(_categoryList);
var _context = require("../../../utils/Context");
var _authContext = require("../../Auth/AuthContext");
var _s = $RefreshSig$();
const ResturentRecommCard = ({ getCatData, showItem, setOpenAcc })=>{
    _s();
    const scrollToRef = (0, _react.useRef)(null);
    // useEffect(() => {
    //   scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    // }, [scrollToRef]);
    const handleAccordian = ()=>{
        setOpenAcc();
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({
                behavior: "smooth"
            });
            console.log(scrollToRef.current);
        }
    };
    const mycontext = (0, _react.useContext)((0, _context.Newcontext));
    const themeChnage = (0, _react.useContext)((0, _authContext.ThemeContext));
    const themeData = themeChnage.theme;
    //   useEffect(() => {
    //     console.log(mycontext);
    //   }, []);
    //   console.log(getCatData);
    // console.log(themeData);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _authContext.ThemeContext).Provider, {
            value: themeChnage,
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _context.Newcontext).Provider, {
                value: getCatData,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: " border-b-black pb-3  m-auto  w-2/4",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "mb-4 pb-6  ",
                        id: getCatData?.card?.card?.title,
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: `${themeData ? "bg-slate-200" : " bg-gray-500"} px-4 py-2  rounded-md flex  align-middle  justify-between shadow-lg cursor-pointer`,
                                onClick: handleAccordian,
                                ref: scrollToRef,
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        className: "text-xl ",
                                        children: [
                                            getCatData?.card?.card?.title,
                                            " (",
                                            getCatData?.card?.card?.itemCards.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: showItem ? "-" : "+"
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                                lineNumber: 42,
                                columnNumber: 15
                            }, undefined),
                            showItem && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _categoryListDefault.default), {
                                getCatData: getCatData,
                                theme: themeData
                            }, void 0, false, {
                                fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                                lineNumber: 56,
                                columnNumber: 17
                            }, undefined)
                        ]
                    }, getCatData?.card?.card?.title, true, {
                        fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                        lineNumber: 37,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                    lineNumber: 36,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
                lineNumber: 35,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "scr/components/Resturent/ResturentDetails/ResturenReccomndedCard.js",
            lineNumber: 34,
            columnNumber: 7
        }, undefined)
    }, void 0, false);
};
_s(ResturentRecommCard, "fnEdgn+HclixKSDbyex3c33JmB8=");
_c = ResturentRecommCard;
exports.default = ResturentRecommCard;
var _c;
$RefreshReg$(_c, "ResturentRecommCard");

  $parcel$ReactRefreshHelpers$6223.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../CategoryList":"d9xlS","../../../utils/Context":"1wtjc","../../Auth/AuthContext":"lMsgB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"d9xlS":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$aacf = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$aacf.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _constant = require("../../utils/constant");
var _reactRedux = require("react-redux");
var _cardSlice = require("../../redux/CardSlice");
var _s = $RefreshSig$();
function CategoryList({ getCatData, theme }) {
    _s();
    //Add Item handler
    const dispatch = (0, _reactRedux.useDispatch)();
    const handleAddItem = (catdata)=>{
        dispatch((0, _cardSlice.addItem)(catdata));
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: getCatData?.card?.card?.itemCards.map((catdata)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: `flex align-middle justify-between w-full border-b-2 mb-3 pb-2 mt-6 px-4`,
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                className: ` foodtype ${catdata.card.info.isVeg ? "veg" : "nonveg"}`
                            }, void 0, false, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            catdata?.card?.info?.isBestseller ?? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                className: " ml-2   text-green-500 text-sm align-top",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                        className: "fa fa-star  text-xs"
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/CategoryList.js",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    " BestSeller"
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                className: " text-md",
                                children: catdata?.card?.info?.name
                            }, void 0, false, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h5", {
                                className: " text-sm mt-1",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: " mr-1",
                                        children: " ₹"
                                    }, void 0, false, {
                                        fileName: "scr/components/Resturent/CategoryList.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    Number(catdata?.card?.info?.price || catdata?.card?.info?.defaultPrice) / 100
                                ]
                            }, void 0, true, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("small", {
                                className: `${theme ? "text-gray-600" : " text-white"}  w-1/3`,
                                children: catdata?.card?.info?.description
                            }, void 0, false, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "scr/components/Resturent/CategoryList.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: " text-center",
                        children: [
                            catdata.card.info.imageId && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                src: `${(0, _constant.CDN_URL)}/${catdata.card.info.imageId}`,
                                alt: catdata?.card?.info?.imageId,
                                className: " h-20 rounded-md  w-24"
                            }, void 0, false, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `${theme ? "bg-sky-200" : " bg-gray-600"} rounded-md py-2 px-3 text-sm  font-bold  w-24 mt-2 `,
                                onClick: ()=>handleAddItem(catdata),
                                children: "Add"
                            }, void 0, false, {
                                fileName: "scr/components/Resturent/CategoryList.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "scr/components/Resturent/CategoryList.js",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, catdata.card.info.id, true, {
                fileName: "scr/components/Resturent/CategoryList.js",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "scr/components/Resturent/CategoryList.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CategoryList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        (0, _reactRedux.useDispatch)
    ];
});
_c = CategoryList;
exports.default = CategoryList;
var _c;
$RefreshReg$(_c, "CategoryList");

  $parcel$ReactRefreshHelpers$aacf.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../../utils/constant":"cxf2R","react-redux":"bdVon","../../redux/CardSlice":"dAKFf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"1wtjc":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d0eb = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d0eb.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Newcontext", ()=>Newcontext);
var _react = require("react");
const Newcontext = /*#__PURE__*/ (0, _react.createContext)("Hello");

  $parcel$ReactRefreshHelpers$d0eb.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["e5VXe","1xC6H"], null, "parcelRequire164e")

//# sourceMappingURL=ResturentDetail.f19e8117.js.map
