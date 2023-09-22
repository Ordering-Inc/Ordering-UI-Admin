"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveriesLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");
var _InterActOrderMarker = require("../InterActOrderMarker");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DeliveriesLocation = function DeliveriesLocation(props) {
  var _configState$configs, _configState$configs2, _configState$configs3, _interActionMapOrder$6, _interActionMapOrder$7, _interActionMapOrder$8, _interActionMapOrder$9, _interActionMapOrder$10, _interActionMapOrder$11, _interActionMapOrder$12, _interActionMapOrder$13, _interActionMapOrder$14;
  var driversList = props.driversList,
    interActionMapOrder = props.interActionMapOrder;
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var defaultLatitude = Number(configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.location_default_latitude) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value);
  var defaultLongitude = Number(configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.location_default_longitude) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value);
  var isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
  var defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  };
  var _useState = (0, _react.useState)(defaultCenter),
    _useState2 = _slicedToArray(_useState, 2),
    mapCenter = _useState2[0],
    setMapCenter = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    mapZoom = _useState4[0],
    setMapZoom = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    activeDrivers = _useState6[0],
    setActiveDrivers = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    mapLoaded = _useState8[0],
    setMapLoaded = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    mapFitted = _useState10[0],
    setMapFitted = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    interActionOrderDriverLocation = _useState12[0],
    setInterActionOrderDriverLocation = _useState12[1];
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);
  var mapFit = function mapFit() {
    var bounds = new window.google.maps.LatLngBounds();
    if (interActionMapOrder === null) {
      if (driversList.drivers.length === 1) {
        var _driversList$drivers$, _driversList$drivers$2, _driversList$drivers$3, _driversList$drivers$4;
        setMapCenter(driversList.drivers[0].location !== null && _typeof(driversList.drivers[0].location) === 'object' && (_driversList$drivers$ = driversList.drivers[0].location) !== null && _driversList$drivers$ !== void 0 && _driversList$drivers$.lat && (_driversList$drivers$2 = driversList.drivers[0].location) !== null && _driversList$drivers$2 !== void 0 && _driversList$drivers$2.lng ? driversList.drivers[0].location : typeof driversList.drivers[0].location === 'string' ? {
          lat: parseFloat((_driversList$drivers$3 = driversList.drivers[0]) === null || _driversList$drivers$3 === void 0 || (_driversList$drivers$3 = _driversList$drivers$3.location) === null || _driversList$drivers$3 === void 0 ? void 0 : _driversList$drivers$3.split(',')[0].replace(/[^-.0-9]/g, '')),
          lng: parseFloat((_driversList$drivers$4 = driversList.drivers[0]) === null || _driversList$drivers$4 === void 0 || (_driversList$drivers$4 = _driversList$drivers$4.location) === null || _driversList$drivers$4 === void 0 ? void 0 : _driversList$drivers$4.split(',')[1].replace(/[^-.0-9]/g, ''))
        } : defaultCenter);
        setMapZoom(defaultZoom);
        return;
      }
      var _iterator = _createForOfIteratorHelper(driversList.drivers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _driver$location, _driver$location2, _driver$location3, _driver$location4;
          var driver = _step.value;
          var marker = driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location = driver.location) !== null && _driver$location !== void 0 && _driver$location.lat && (_driver$location2 = driver.location) !== null && _driver$location2 !== void 0 && _driver$location2.lng ? driver.location : typeof (driver === null || driver === void 0 ? void 0 : driver.location) === 'string' ? {
            lat: parseFloat(driver === null || driver === void 0 || (_driver$location3 = driver.location) === null || _driver$location3 === void 0 ? void 0 : _driver$location3.split(',')[0].replace(/[^-.0-9]/g, '')),
            lng: parseFloat(driver === null || driver === void 0 || (_driver$location4 = driver.location) === null || _driver$location4 === void 0 ? void 0 : _driver$location4.split(',')[1].replace(/[^-.0-9]/g, ''))
          } : defaultCenter;
          var newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
          bounds.extend(newPoint);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (interActionMapOrder !== null) {
      var _interActionMapOrder$, _interActionMapOrder$2, _interActionMapOrder$3, _interActionMapOrder$4;
      var _marker, _newPoint;
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$ = interActionMapOrder.business) === null || _interActionMapOrder$ === void 0 ? void 0 : _interActionMapOrder$.location) !== null ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$2 = interActionMapOrder.business) === null || _interActionMapOrder$2 === void 0 ? void 0 : _interActionMapOrder$2.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$3 = interActionMapOrder.customer) === null || _interActionMapOrder$3 === void 0 ? void 0 : _interActionMapOrder$3.location) !== null && interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$4 = interActionMapOrder.customer) !== null && _interActionMapOrder$4 !== void 0 && (_interActionMapOrder$4 = _interActionMapOrder$4.location) !== null && _interActionMapOrder$4 !== void 0 && _interActionMapOrder$4.lat ? interActionMapOrder.customer.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);
      if (interActionMapOrder.driver !== null) {
        _marker = interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lat && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lng ? interActionOrderDriverLocation : defaultCenter;
        _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
        bounds.extend(_newPoint);
      } else {
        var _iterator2 = _createForOfIteratorHelper(activeDrivers),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _activeDriver$locatio, _activeDriver$locatio2;
            var activeDriver = _step2.value;
            var _marker2 = activeDriver.location !== null && _typeof(activeDriver.location) === 'object' && (_activeDriver$locatio = activeDriver.location) !== null && _activeDriver$locatio !== void 0 && _activeDriver$locatio.lat && (_activeDriver$locatio2 = activeDriver.location) !== null && _activeDriver$locatio2 !== void 0 && _activeDriver$locatio2.lng ? activeDriver.location : defaultCenter;
            var _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
            bounds.extend(_newPoint2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    var newBounds = {
      ne: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng()
      },
      sw: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
      }
    };
    var mapSize = {
      width: mapRef.current.clientWidth,
      height: mapRef.current.clientHeight
    };
    var _fitBounds = (0, _googleMapReact.fitBounds)(newBounds, mapSize),
      center = _fitBounds.center,
      zoom = _fitBounds.zoom;
    setMapZoom(zoom);
    setMapCenter(center);
    setMapFitted(true);
  };

  // Fit bounds on mount, and when the markers change
  (0, _react.useEffect)(function () {
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return;
    if (interActionMapOrder !== null) {
      var _iterator3 = _createForOfIteratorHelper(driversList.drivers),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _interActionMapOrder$5;
          var driver = _step3.value;
          if (driver.id === (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$5 = interActionMapOrder.driver) === null || _interActionMapOrder$5 === void 0 ? void 0 : _interActionMapOrder$5.id)) {
            setInterActionOrderDriverLocation(driver.location);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    if (!mapFitted) {
      mapFit();
    }
  }, [interActionMapOrder, mapLoaded, driversList, mapFitted]);
  (0, _react.useEffect)(function () {
    var _ref, _ref2;
    if (!interActionMapOrder || interActionMapOrder !== null && interActionMapOrder !== void 0 && interActionMapOrder.driver) return;
    var getControls = function getControls(_x) {
      return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(order) {
        var _yield$ordering$setAc, _yield$ordering$setAc2, errorResponse, response, error, result, driversControls, _result$drivers;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).controls(order === null || order === void 0 ? void 0 : order.id).get();
            case 2:
              _yield$ordering$setAc = _context.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              errorResponse = _yield$ordering$setAc2.error;
              response = _yield$ordering$setAc2.result;
              _context.next = 8;
              return errorResponse;
            case 8:
              error = _context.sent;
              _context.next = 11;
              return response;
            case 11:
              result = _context.sent;
              if (error) {
                _context.next = 16;
                break;
              }
              driversControls = [];
              if (Array.isArray(result === null || result === void 0 ? void 0 : result.drivers) && (result === null || result === void 0 ? void 0 : result.drivers.length) > 0) {
                driversControls = result === null || result === void 0 || (_result$drivers = result.drivers) === null || _result$drivers === void 0 ? void 0 : _result$drivers.filter(function (driver) {
                  return driver.available && !driver.busy;
                });
              }
              return _context.abrupt("return", driversControls);
            case 16:
              return _context.abrupt("return", error);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))).apply(this, arguments);
    };
    var fetchData = function fetchData() {
      return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var driversControls;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(interActionMapOrder !== null)) {
                _context2.next = 6;
                break;
              }
              setActiveDrivers([]);
              _context2.next = 4;
              return getControls(interActionMapOrder);
            case 4:
              driversControls = _context2.sent;
              setActiveDrivers(driversControls);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))).apply(this, arguments);
    };
    fetchData();
  }, [interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id]);
  (0, _react.useEffect)(function () {
    setMapFitted(false);
  }, [interActionMapOrder]);
  var handleMapChange = function handleMapChange(data) {
    if (!(data !== null && data !== void 0 && data.zoom)) return;
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    ref: mapRef,
    className: "drivers-location"
  }, googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
      libraries: ['places', 'geometry', 'drawing', 'visualization']
    },
    onGoogleApiLoaded: function onGoogleApiLoaded() {
      return setMapLoaded(false);
    },
    defaultCenter: defaultCenter,
    center: mapCenter,
    defaultZoom: defaultZoom,
    zoom: mapZoom,
    options: {
      fullscreenControl: true
    },
    className: "map",
    onChange: function onChange(data) {
      return handleMapChange(data);
    },
    yesIWantToUseGoogleMapApiInternals: true
  }, interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.business,
    lat: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$6 = interActionMapOrder.business) === null || _interActionMapOrder$6 === void 0 || (_interActionMapOrder$6 = _interActionMapOrder$6.location) === null || _interActionMapOrder$6 === void 0 ? void 0 : _interActionMapOrder$6.lat,
    lng: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$7 = interActionMapOrder.business) === null || _interActionMapOrder$7 === void 0 || (_interActionMapOrder$7 = _interActionMapOrder$7.location) === null || _interActionMapOrder$7 === void 0 ? void 0 : _interActionMapOrder$7.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$8 = interActionMapOrder.business) === null || _interActionMapOrder$8 === void 0 ? void 0 : _interActionMapOrder$8.logo
  }), interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.customer,
    lat: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$9 = interActionMapOrder.customer) !== null && _interActionMapOrder$9 !== void 0 && (_interActionMapOrder$9 = _interActionMapOrder$9.location) !== null && _interActionMapOrder$9 !== void 0 && _interActionMapOrder$9.lat ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$10 = interActionMapOrder.customer) === null || _interActionMapOrder$10 === void 0 || (_interActionMapOrder$10 = _interActionMapOrder$10.location) === null || _interActionMapOrder$10 === void 0 ? void 0 : _interActionMapOrder$10.lat : defaultCenter.lat,
    lng: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$11 = interActionMapOrder.customer) !== null && _interActionMapOrder$11 !== void 0 && (_interActionMapOrder$11 = _interActionMapOrder$11.location) !== null && _interActionMapOrder$11 !== void 0 && _interActionMapOrder$11.lng ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$12 = interActionMapOrder.customer) === null || _interActionMapOrder$12 === void 0 || (_interActionMapOrder$12 = _interActionMapOrder$12.location) === null || _interActionMapOrder$12 === void 0 ? void 0 : _interActionMapOrder$12.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$13 = interActionMapOrder.customer) === null || _interActionMapOrder$13 === void 0 ? void 0 : _interActionMapOrder$13.photo
  }), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    driver: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver,
    lat: interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lat ? interActionOrderDriverLocation.lat : typeof interActionOrderDriverLocation === 'string' ? parseFloat(interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
    lng: interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lng ? interActionOrderDriverLocation.lng : typeof interActionOrderDriverLocation === 'string' ? parseFloat(interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$14 = interActionMapOrder.driver) === null || _interActionMapOrder$14 === void 0 ? void 0 : _interActionMapOrder$14.photo
  }), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && activeDrivers.length > 0 && activeDrivers.map(function (driver) {
    var _driver$location5, _driver$location6, _driver$location7, _driver$location8;
    return /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location5 = driver.location) !== null && _driver$location5 !== void 0 && _driver$location5.lat ? driver.location.lat : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 || (_driver$location6 = driver.location) === null || _driver$location6 === void 0 ? void 0 : _driver$location6.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
      lng: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location7 = driver.location) !== null && _driver$location7 !== void 0 && _driver$location7.lng ? driver.location.lng : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 || (_driver$location8 = driver.location) === null || _driver$location8 === void 0 ? void 0 : _driver$location8.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng,
      image: driver === null || driver === void 0 ? void 0 : driver.photo
    });
  })), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && activeDrivers.length >= 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperOnlineDrivers, null, /*#__PURE__*/_react.default.createElement("p", null, activeDrivers.length === 0 ? t('NO_DRIVERS_AVAILABLE_FOR_ORDER', 'No Drivers Available for Order') : t('ACTIVE_DRIVERS', 'Drivers online')), activeDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.OnlineDrivers, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true
  }, activeDrivers.map(function (driver) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.WrapDriverInfo, {
      key: driver.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
      bgimage: (driver === null || driver === void 0 ? void 0 : driver.photo) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver)
    })), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("p", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))));
  })))));
};
exports.DeliveriesLocation = DeliveriesLocation;