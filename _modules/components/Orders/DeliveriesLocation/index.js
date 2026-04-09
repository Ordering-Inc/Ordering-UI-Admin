"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveriesLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _InterActOrderMarker = require("../InterActOrderMarker");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DeliveriesLocation = exports.DeliveriesLocation = function DeliveriesLocation(props) {
  var _configState$configs, _configState$configs2, _configState$configs3, _interActionMapOrder$2, _interActionMapOrder$7, _interActionMapOrder$8, _interActionMapOrder$9, _interActionMapOrder$0, _interActionMapOrder$1, _interActionMapOrder$10, _interActionMapOrder$11, _interActionMapOrder$12, _interActionMapOrder$13;
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
    _useState0 = _slicedToArray(_useState9, 2),
    mapFitted = _useState0[0],
    setMapFitted = _useState0[1];
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);
  var interActionOrderDriverLocation = (0, _react.useMemo)(function () {
    var _driversList$drivers, _driversList$drivers$;
    return (driversList === null || driversList === void 0 || (_driversList$drivers = driversList.drivers) === null || _driversList$drivers === void 0 || (_driversList$drivers$ = _driversList$drivers.find) === null || _driversList$drivers$ === void 0 || (_driversList$drivers$ = _driversList$drivers$.call(_driversList$drivers, function (driver) {
      var _interActionMapOrder$;
      return (driver === null || driver === void 0 ? void 0 : driver.id) === (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$ = interActionMapOrder.driver) === null || _interActionMapOrder$ === void 0 ? void 0 : _interActionMapOrder$.id);
    })) === null || _driversList$drivers$ === void 0 ? void 0 : _driversList$drivers$.location) || null;
  }, [JSON.stringify(driversList === null || driversList === void 0 ? void 0 : driversList.drivers), interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$2 = interActionMapOrder.driver) === null || _interActionMapOrder$2 === void 0 ? void 0 : _interActionMapOrder$2.id]);
  var mapFit = function mapFit() {
    var _bounds$getNorthEast, _bounds$getNorthEast$, _bounds$getNorthEast2, _bounds$getNorthEast3, _bounds$getSouthWest, _bounds$getSouthWest$, _bounds$getSouthWest2, _bounds$getSouthWest3;
    var bounds = new window.google.maps.LatLngBounds();
    if (interActionMapOrder === null) {
      if (driversList.drivers.length === 1) {
        var _driversList$drivers$2, _driversList$drivers$3, _driversList$drivers$4, _driversList$drivers$5;
        setMapCenter(driversList.drivers[0].location !== null && _typeof(driversList.drivers[0].location) === 'object' && (_driversList$drivers$2 = driversList.drivers[0].location) !== null && _driversList$drivers$2 !== void 0 && _driversList$drivers$2.lat && (_driversList$drivers$3 = driversList.drivers[0].location) !== null && _driversList$drivers$3 !== void 0 && _driversList$drivers$3.lng ? driversList.drivers[0].location : typeof driversList.drivers[0].location === 'string' ? {
          lat: parseFloat((_driversList$drivers$4 = driversList.drivers[0]) === null || _driversList$drivers$4 === void 0 || (_driversList$drivers$4 = _driversList$drivers$4.location) === null || _driversList$drivers$4 === void 0 ? void 0 : _driversList$drivers$4.split(',')[0].replace(/[^-.0-9]/g, '')),
          lng: parseFloat((_driversList$drivers$5 = driversList.drivers[0]) === null || _driversList$drivers$5 === void 0 || (_driversList$drivers$5 = _driversList$drivers$5.location) === null || _driversList$drivers$5 === void 0 ? void 0 : _driversList$drivers$5.split(',')[1].replace(/[^-.0-9]/g, ''))
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
      var _interActionMapOrder$3, _interActionMapOrder$4, _interActionMapOrder$5, _interActionMapOrder$6;
      var _marker, _newPoint;
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$3 = interActionMapOrder.business) === null || _interActionMapOrder$3 === void 0 ? void 0 : _interActionMapOrder$3.location) !== null ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$4 = interActionMapOrder.business) === null || _interActionMapOrder$4 === void 0 ? void 0 : _interActionMapOrder$4.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$5 = interActionMapOrder.customer) === null || _interActionMapOrder$5 === void 0 ? void 0 : _interActionMapOrder$5.location) !== null && interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$6 = interActionMapOrder.customer) !== null && _interActionMapOrder$6 !== void 0 && (_interActionMapOrder$6 = _interActionMapOrder$6.location) !== null && _interActionMapOrder$6 !== void 0 && _interActionMapOrder$6.lat ? interActionMapOrder.customer.location : defaultCenter;
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
        lat: (_bounds$getNorthEast = bounds.getNorthEast()) === null || _bounds$getNorthEast === void 0 || (_bounds$getNorthEast$ = _bounds$getNorthEast.lat) === null || _bounds$getNorthEast$ === void 0 ? void 0 : _bounds$getNorthEast$.call(_bounds$getNorthEast),
        lng: (_bounds$getNorthEast2 = bounds.getNorthEast()) === null || _bounds$getNorthEast2 === void 0 || (_bounds$getNorthEast3 = _bounds$getNorthEast2.lng) === null || _bounds$getNorthEast3 === void 0 ? void 0 : _bounds$getNorthEast3.call(_bounds$getNorthEast2)
      },
      sw: {
        lat: (_bounds$getSouthWest = bounds.getSouthWest()) === null || _bounds$getSouthWest === void 0 || (_bounds$getSouthWest$ = _bounds$getSouthWest.lat) === null || _bounds$getSouthWest$ === void 0 ? void 0 : _bounds$getSouthWest$.call(_bounds$getSouthWest),
        lng: (_bounds$getSouthWest2 = bounds.getSouthWest()) === null || _bounds$getSouthWest2 === void 0 || (_bounds$getSouthWest3 = _bounds$getSouthWest2.lng) === null || _bounds$getSouthWest3 === void 0 ? void 0 : _bounds$getSouthWest3.call(_bounds$getSouthWest2)
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
    if (!mapFitted) {
      mapFit();
    }
  }, [interActionMapOrder, mapLoaded, driversList, mapFitted]);
  (0, _react.useEffect)(function () {
    if (!interActionMapOrder || interActionMapOrder !== null && interActionMapOrder !== void 0 && interActionMapOrder.driver) return;
    var getControls = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(order) {
        var _yield$ordering$setAc, _yield$ordering$setAc2, errorResponse, response, error, result, driversControls, _result$drivers;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).controls(order === null || order === void 0 ? void 0 : order.id).get();
            case 1:
              _yield$ordering$setAc = _context.v;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              errorResponse = _yield$ordering$setAc2.error;
              response = _yield$ordering$setAc2.result;
              _context.n = 2;
              return errorResponse;
            case 2:
              error = _context.v;
              _context.n = 3;
              return response;
            case 3:
              result = _context.v;
              if (error) {
                _context.n = 4;
                break;
              }
              driversControls = [];
              if (Array.isArray(result === null || result === void 0 ? void 0 : result.drivers) && (result === null || result === void 0 ? void 0 : result.drivers.length) > 0) {
                driversControls = result === null || result === void 0 || (_result$drivers = result.drivers) === null || _result$drivers === void 0 ? void 0 : _result$drivers.filter(function (driver) {
                  return driver.available && !driver.busy;
                });
              }
              return _context.a(2, driversControls);
            case 4:
              return _context.a(2, error);
          }
        }, _callee);
      }));
      return function getControls(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var driversControls;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(interActionMapOrder !== null)) {
                _context2.n = 2;
                break;
              }
              setActiveDrivers([]);
              _context2.n = 1;
              return getControls(interActionMapOrder);
            case 1:
              driversControls = _context2.v;
              setActiveDrivers(driversControls);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchData();
  }, [interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id]);
  (0, _react.useEffect)(function () {
    if (activeDrivers.length === 0 && interActionMapOrder) return;
    var _driverAvailableList = driversList.drivers.filter(function (driver) {
      return driver.enabled && driver.available && !driver.busy;
    });
    if (!interActionMapOrder) {
      setActiveDrivers(_driverAvailableList);
      return;
    }
    var _onlineDrivers = activeDrivers.map(function (controlDriver) {
      var matchingDriver = _driverAvailableList.find(function (driver) {
        return driver.id === controlDriver.id;
      });
      if (matchingDriver !== null && matchingDriver !== void 0 && matchingDriver.location) {
        return _objectSpread(_objectSpread({}, controlDriver), {}, {
          location: matchingDriver === null || matchingDriver === void 0 ? void 0 : matchingDriver.location
        });
      } else {
        return controlDriver;
      }
    });
    setActiveDrivers(_onlineDrivers);
  }, [driversList]);
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
    lat: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$7 = interActionMapOrder.business) === null || _interActionMapOrder$7 === void 0 || (_interActionMapOrder$7 = _interActionMapOrder$7.location) === null || _interActionMapOrder$7 === void 0 ? void 0 : _interActionMapOrder$7.lat,
    lng: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$8 = interActionMapOrder.business) === null || _interActionMapOrder$8 === void 0 || (_interActionMapOrder$8 = _interActionMapOrder$8.location) === null || _interActionMapOrder$8 === void 0 ? void 0 : _interActionMapOrder$8.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$9 = interActionMapOrder.business) === null || _interActionMapOrder$9 === void 0 ? void 0 : _interActionMapOrder$9.logo
  }), interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.customer,
    lat: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$0 = interActionMapOrder.customer) !== null && _interActionMapOrder$0 !== void 0 && (_interActionMapOrder$0 = _interActionMapOrder$0.location) !== null && _interActionMapOrder$0 !== void 0 && _interActionMapOrder$0.lat ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$1 = interActionMapOrder.customer) === null || _interActionMapOrder$1 === void 0 || (_interActionMapOrder$1 = _interActionMapOrder$1.location) === null || _interActionMapOrder$1 === void 0 ? void 0 : _interActionMapOrder$1.lat : defaultCenter.lat,
    lng: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$10 = interActionMapOrder.customer) !== null && _interActionMapOrder$10 !== void 0 && (_interActionMapOrder$10 = _interActionMapOrder$10.location) !== null && _interActionMapOrder$10 !== void 0 && _interActionMapOrder$10.lng ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$11 = interActionMapOrder.customer) === null || _interActionMapOrder$11 === void 0 || (_interActionMapOrder$11 = _interActionMapOrder$11.location) === null || _interActionMapOrder$11 === void 0 ? void 0 : _interActionMapOrder$11.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$12 = interActionMapOrder.customer) === null || _interActionMapOrder$12 === void 0 ? void 0 : _interActionMapOrder$12.photo
  }), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    driver: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver,
    timeStatus: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.time_status,
    lat: interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lat ? interActionOrderDriverLocation.lat : typeof interActionOrderDriverLocation === 'string' ? parseFloat(interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
    lng: interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lng ? interActionOrderDriverLocation.lng : typeof interActionOrderDriverLocation === 'string' ? parseFloat(interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$13 = interActionMapOrder.driver) === null || _interActionMapOrder$13 === void 0 ? void 0 : _interActionMapOrder$13.photo
  }), interActionMapOrder === null && activeDrivers.length > 0 && activeDrivers.map(function (driver) {
    var _driver$location5, _driver$location6, _driver$location7, _driver$location8;
    return /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
      key: driver.id,
      driver: driver,
      timeStatus: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.time_status,
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