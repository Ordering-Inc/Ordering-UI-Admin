"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversLocation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _googleMapReact = _interopRequireWildcard(require("google-map-react"));

var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversLocation = function DriversLocation(props) {
  var _configState$configs, _configState$configs$;

  var driversIsOnline = props.driversIsOnline,
      onlineDrivers = props.onlineDrivers,
      offlineDrivers = props.offlineDrivers,
      selectedDriver = props.selectedDriver;

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var googleMapsApiKey = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.google_maps_api_key) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;

  var _useState = (0, _react.useState)({
    lat: 19.4326,
    lng: -99.1332
  }),
      _useState2 = _slicedToArray(_useState, 2),
      mapCenter = _useState2[0],
      setMapCenter = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = _slicedToArray(_useState3, 2),
      mapZoom = _useState4[0],
      setMapZoom = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      mapLoaded = _useState6[0],
      setMapLoaded = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mapFitted = _useState8[0],
      setMapFitted = _useState8[1];

  var defaultCenter = {
    lat: 19.4326,
    lng: -99.1332
  };
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      showDrivers = _useState10[0],
      setShowDrivers = _useState10[1];

  var mapFit = function mapFit() {
    var bounds = new window.google.maps.LatLngBounds();

    if (showDrivers.length === 1) {
      setMapCenter(showDrivers[0].location !== null && _typeof(showDrivers[0].location) === 'object' ? showDrivers[0].location : defaultCenter);
      setMapZoom(mapZoom);
      return;
    }

    var _iterator = _createForOfIteratorHelper(showDrivers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var driver = _step.value;
        var marker = driver.location !== null && _typeof(driver.location) === 'object' ? driver.location : defaultCenter;
        var newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
        bounds.extend(newPoint);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
  }; // Fit bounds on mount, and when the markers change


  (0, _react.useEffect)(function () {
    if (showDrivers.length === 0 || mapLoaded) return;

    if (!mapFitted) {
      mapFit();
    }
  }, [showDrivers, mapLoaded, mapFitted]);
  (0, _react.useEffect)(function () {
    if (selectedDriver) {
      setShowDrivers([selectedDriver]);
    } else {
      if (driversIsOnline) {
        setShowDrivers(onlineDrivers);
      } else {
        setShowDrivers(offlineDrivers);
      }
    }
  }, [onlineDrivers, offlineDrivers, driversIsOnline, selectedDriver]);

  var handleMapChange = function handleMapChange(data) {
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };

  (0, _react.useEffect)(function () {
    if (!(selectedDriver !== null && selectedDriver !== void 0 && selectedDriver.id)) return;
    setMapFitted(false);
  }, [selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id]);
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    ref: mapRef,
    className: "drivers-location"
  }, googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: googleMapsApiKey
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
  }, showDrivers.length !== 0 && showDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null && _typeof(driver.location) === 'object' ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null && _typeof(driver.location) === 'object' ? driver.location.lng : defaultCenter.lng
    });
  })));
};

exports.DriversLocation = DriversLocation;