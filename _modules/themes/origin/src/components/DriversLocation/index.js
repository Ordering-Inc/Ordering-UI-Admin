"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");
var _InterActOrderMarker = require("../InterActOrderMarker");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _AutoScroll = require("../../components/AutoScroll");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversLocation = function DriversLocation(props) {
  var _configState$configs, _interActionMapOrder$6, _interActionMapOrder$7, _interActionMapOrder$8, _interActionMapOrder$9, _interActionMapOrder$10, _interActionMapOrder$11, _interActionMapOrder$12, _interActionMapOrder$13, _interActionMapOrder$14;
  var driversList = props.driversList,
    driverAvailable = props.driverAvailable,
    interActionMapOrder = props.interActionMapOrder;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
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
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    onlineDrivers = _useState6[0],
    setOnlineDrivers = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    offlineDrivers = _useState8[0],
    setOfflineDrivers = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    mapLoaded = _useState10[0],
    setMapLoaded = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    interActionOrderDriverLocation = _useState12[0],
    setInterActionOrderDriverLocation = _useState12[1];
  var defaultCenter = {
    lat: 19.4326,
    lng: -99.1332
  };
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);
  var mapFit = function mapFit() {
    var _bounds$getNorthEast, _bounds$getNorthEast$, _bounds$getNorthEast2, _bounds$getNorthEast3, _bounds$getSouthWest, _bounds$getSouthWest$, _bounds$getSouthWest2, _bounds$getSouthWest3;
    var _onlineDrivers = driversList.drivers.filter(function (driver) {
      return driver.enabled && driver.available && !driver.busy;
    });
    setOnlineDrivers(_onlineDrivers);
    var _offlineDrivers = driversList.drivers.filter(function (driver) {
      return !(driver.enabled && driver.available && !driver.busy);
    });
    setOfflineDrivers(_offlineDrivers);
    var bounds = new window.google.maps.LatLngBounds();
    if (interActionMapOrder === null && driverAvailable === 'all') {
      if (driversList.drivers.length === 1) {
        setMapCenter(driversList.drivers[0].location);
        setMapZoom(defaultZoom);
        return;
      }
      var _iterator = _createForOfIteratorHelper(driversList.drivers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var driver = _step.value;
          var marker = driver.location !== null ? driver.location : defaultCenter;
          var newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
          bounds.extend(newPoint);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (driverAvailable === 'online' || interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null) {
      var _iterator2 = _createForOfIteratorHelper(_onlineDrivers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _driver = _step2.value;
          var _marker = _driver.location !== null ? _driver.location : defaultCenter;
          var _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
          bounds.extend(_newPoint);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    if (driverAvailable === 'online') {
      if (_onlineDrivers.length === 0) return;
      if (_onlineDrivers.length === 1) {
        setMapCenter(_onlineDrivers[0].location);
        setMapZoom(defaultZoom);
        return;
      }
    }
    if (!(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null) {
      var _interActionMapOrder$, _interActionMapOrder$2, _interActionMapOrder$3;
      var _marker2, _newPoint2;
      _marker2 = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$ = interActionMapOrder.business) === null || _interActionMapOrder$ === void 0 ? void 0 : _interActionMapOrder$.location) !== null ? interActionMapOrder.business.location : defaultCenter;
      _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
      bounds.extend(_newPoint2);
      _marker2 = (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$2 = interActionMapOrder.customer) === null || _interActionMapOrder$2 === void 0 ? void 0 : _interActionMapOrder$2.location) !== null && interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$3 = interActionMapOrder.customer) !== null && _interActionMapOrder$3 !== void 0 && (_interActionMapOrder$3 = _interActionMapOrder$3.location) !== null && _interActionMapOrder$3 !== void 0 && _interActionMapOrder$3.lat ? interActionMapOrder.customer.location : defaultCenter;
      _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
      bounds.extend(_newPoint2);
      if (interActionMapOrder.driver !== null && interActionOrderDriverLocation) {
        _marker2 = interActionOrderDriverLocation !== null ? interActionOrderDriverLocation : defaultCenter;
        _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
        bounds.extend(_newPoint2);
      }
    }
    if (driverAvailable === 'offline') {
      if (_offlineDrivers.length === 0) {
        return;
      } else {
        var checkLocation = false;
        var _iterator3 = _createForOfIteratorHelper(_offlineDrivers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _driver2 = _step3.value;
            if (_driver2.location !== null) {
              checkLocation = true;
            }
            var _marker3 = _driver2.location !== null ? _driver2.location : defaultCenter;
            var _newPoint3 = new window.google.maps.LatLng(_marker3.lat, _marker3.lng);
            bounds.extend(_newPoint3);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        if (!checkLocation) {
          setMapCenter(defaultCenter);
          setMapZoom(defaultZoom);
          return;
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
  };

  // Fit bounds on mount, and when the markers change
  (0, _react.useEffect)(function () {
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return;
    if (interActionMapOrder !== null) {
      var _iterator4 = _createForOfIteratorHelper(driversList.drivers),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _interActionMapOrder$4;
          var driver = _step4.value;
          if (driver.id === (interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$4 = interActionMapOrder.driver) === null || _interActionMapOrder$4 === void 0 ? void 0 : _interActionMapOrder$4.id)) {
            setInterActionOrderDriverLocation(driver.location);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    } else {
      mapFit();
    }
  }, [driversList, driverAvailable, interActionMapOrder, mapLoaded]);
  (0, _react.useEffect)(function () {
    var _interActionMapOrder$5;
    if (mapLoaded || interActionMapOrder === null) return;
    if (driverAvailable === 'online' || driverAvailable === 'offline') return;
    setInterActionOrderDriverLocation(interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$5 = interActionMapOrder.driver) === null || _interActionMapOrder$5 === void 0 ? void 0 : _interActionMapOrder$5.location);
    mapFit();
  }, [interActionMapOrder, mapLoaded]);
  (0, _react.useEffect)(function () {
    if (mapLoaded || interActionOrderDriverLocation === null) return;
    mapFit();
  }, [interActionOrderDriverLocation, mapLoaded]);
  var handleMapChange = function handleMapChange(data) {
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    ref: mapRef,
    className: "drivers-location"
  }, /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
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
      fullscreenControl: false
    },
    className: "map",
    onChange: function onChange(data) {
      return handleMapChange(data);
    },
    yesIWantToUseGoogleMapApiInternals: true
  }, interActionMapOrder === null && driverAvailable === 'all' && driversList.drivers.length !== 0 && driversList.drivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), (driverAvailable === 'online' || interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null) && onlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), driverAvailable === 'offline' && offlineDrivers.length > 0 && offlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.business,
    lat: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$6 = interActionMapOrder.business) === null || _interActionMapOrder$6 === void 0 || (_interActionMapOrder$6 = _interActionMapOrder$6.location) === null || _interActionMapOrder$6 === void 0 ? void 0 : _interActionMapOrder$6.lat,
    lng: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$7 = interActionMapOrder.business) === null || _interActionMapOrder$7 === void 0 || (_interActionMapOrder$7 = _interActionMapOrder$7.location) === null || _interActionMapOrder$7 === void 0 ? void 0 : _interActionMapOrder$7.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$8 = interActionMapOrder.business) === null || _interActionMapOrder$8 === void 0 ? void 0 : _interActionMapOrder$8.logo
  }), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.customer,
    lat: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$9 = interActionMapOrder.customer) !== null && _interActionMapOrder$9 !== void 0 && (_interActionMapOrder$9 = _interActionMapOrder$9.location) !== null && _interActionMapOrder$9 !== void 0 && _interActionMapOrder$9.lat ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$10 = interActionMapOrder.customer) === null || _interActionMapOrder$10 === void 0 || (_interActionMapOrder$10 = _interActionMapOrder$10.location) === null || _interActionMapOrder$10 === void 0 ? void 0 : _interActionMapOrder$10.lat : defaultCenter.lat,
    lng: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$11 = interActionMapOrder.customer) !== null && _interActionMapOrder$11 !== void 0 && (_interActionMapOrder$11 = _interActionMapOrder$11.location) !== null && _interActionMapOrder$11 !== void 0 && _interActionMapOrder$11.lng ? interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$12 = interActionMapOrder.customer) === null || _interActionMapOrder$12 === void 0 || (_interActionMapOrder$12 = _interActionMapOrder$12.location) === null || _interActionMapOrder$12 === void 0 ? void 0 : _interActionMapOrder$12.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$13 = interActionMapOrder.customer) === null || _interActionMapOrder$13 === void 0 ? void 0 : _interActionMapOrder$13.photo
  }), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    driver: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver,
    lat: interActionOrderDriverLocation ? interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.lat : defaultCenter.lat,
    lng: interActionOrderDriverLocation ? interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 || (_interActionMapOrder$14 = interActionMapOrder.driver) === null || _interActionMapOrder$14 === void 0 ? void 0 : _interActionMapOrder$14.photo
  })), !(driverAvailable === 'online' || driverAvailable === 'offline') && interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && /*#__PURE__*/_react.default.createElement(_styles.WrapperOnlineDrivers, null, /*#__PURE__*/_react.default.createElement("p", null, t('ACTIVE_DRIVERS', 'Drivers online')), /*#__PURE__*/_react.default.createElement(_styles.OnlineDrivers, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    innerScroll: true
  }, onlineDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, onlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_styles.WrapDriverInfo, {
      key: driver.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, driver !== null && driver !== void 0 && driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
      bgimage: driver === null || driver === void 0 ? void 0 : driver.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("p", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))));
  }))))));
};
exports.DriversLocation = DriversLocation;