"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");
var _InterActOrderMarker = require("../InterActOrderMarker");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversLocationPropsAreEqual = function DriversLocationPropsAreEqual(prevProps, nextProps) {
  var _prevProps$onlineDriv, _nextProps$onlineDriv, _prevProps$offlineDri, _nextProps$offlineDri;
  return JSON.stringify(prevProps.selectedDriver) === JSON.stringify(nextProps.selectedDriver) && JSON.stringify(prevProps.assignedOrders) === JSON.stringify(nextProps.assignedOrders) && prevProps.driversIsOnline === nextProps.driversIsOnline && ((_prevProps$onlineDriv = prevProps.onlineDrivers) === null || _prevProps$onlineDriv === void 0 ? void 0 : _prevProps$onlineDriv.length) === ((_nextProps$onlineDriv = nextProps.onlineDrivers) === null || _nextProps$onlineDriv === void 0 ? void 0 : _nextProps$onlineDriv.length) && ((_prevProps$offlineDri = prevProps.offlineDrivers) === null || _prevProps$offlineDri === void 0 ? void 0 : _prevProps$offlineDri.length) === ((_nextProps$offlineDri = nextProps.offlineDrivers) === null || _nextProps$offlineDri === void 0 ? void 0 : _nextProps$offlineDri.length) && JSON.stringify(prevProps.selectedOrder) === JSON.stringify(nextProps.selectedOrder);
};
var DriversLocation = /*#__PURE__*/_react.default.memo(function (props) {
  var _configState$configs, _configState$configs2, _configState$configs3, _selectedOrder$custom3, _selectedOrder$custom4, _selectedOrder$custom5, _selectedOrder$custom6, _selectedOrder$custom7, _selectedOrder$busine3, _selectedOrder$busine4, _selectedOrder$busine5, _selectedOrder$driver3, _selectedOrder$driver4, _selectedOrder$driver5, _selectedOrder$driver6, _selectedOrder$driver7, _selectedOrder$driver8, _selectedOrder$driver9, _selectedOrder$driver10, _selectedOrder$driver11, _selectedOrder$driver12, _selectedOrder$driver13, _selectedOrder$driver14, _assignedOrders$order4, _assignedOrders$order5;
  var driversIsOnline = props.driversIsOnline,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    selectedDriver = props.selectedDriver,
    selectedOrder = props.selectedOrder,
    assignedOrders = props.assignedOrders;
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
  var defaultZoom = 10;
  var _useState = (0, _react.useState)(defaultCenter),
    _useState2 = _slicedToArray(_useState, 2),
    mapCenter = _useState2[0],
    setMapCenter = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultZoom),
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
  var mapRef = (0, _react.useRef)(null);
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    showDrivers = _useState10[0],
    setShowDrivers = _useState10[1];
  var mapFit = function mapFit() {
    var _assignedOrders$order2;
    var bounds = new window.google.maps.LatLngBounds();
    if (!selectedOrder) {
      var _assignedOrders$order;
      if (showDrivers.length === 1 && !selectedOrder && !(assignedOrders !== null && assignedOrders !== void 0 && (_assignedOrders$order = assignedOrders.orders) !== null && _assignedOrders$order !== void 0 && _assignedOrders$order.length)) {
        var _showDrivers$0$locati, _showDrivers$0$locati2, _showDrivers$, _showDrivers$2;
        setMapCenter(showDrivers[0].location !== null && _typeof(showDrivers[0].location) === 'object' && (_showDrivers$0$locati = showDrivers[0].location) !== null && _showDrivers$0$locati !== void 0 && _showDrivers$0$locati.lat && (_showDrivers$0$locati2 = showDrivers[0].location) !== null && _showDrivers$0$locati2 !== void 0 && _showDrivers$0$locati2.lng ? showDrivers[0].location : typeof showDrivers[0].location === 'string' ? {
          lat: parseFloat((_showDrivers$ = showDrivers[0]) === null || _showDrivers$ === void 0 || (_showDrivers$ = _showDrivers$.location) === null || _showDrivers$ === void 0 ? void 0 : _showDrivers$.split(',')[0].replace(/[^-.0-9]/g, '')),
          lng: parseFloat((_showDrivers$2 = showDrivers[0]) === null || _showDrivers$2 === void 0 || (_showDrivers$2 = _showDrivers$2.location) === null || _showDrivers$2 === void 0 ? void 0 : _showDrivers$2.split(',')[1].replace(/[^-.0-9]/g, ''))
        } : defaultCenter);
        setMapZoom(mapZoom);
        return;
      }
      var _iterator = _createForOfIteratorHelper(showDrivers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _driver$location, _driver$location2, _driver$location3, _driver$location4;
          var driver = _step.value;
          var _marker = driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location = driver.location) !== null && _driver$location !== void 0 && _driver$location.lat && (_driver$location2 = driver.location) !== null && _driver$location2 !== void 0 && _driver$location2.lng ? driver.location : typeof (driver === null || driver === void 0 ? void 0 : driver.location) === 'string' ? {
            lat: parseFloat(driver === null || driver === void 0 || (_driver$location3 = driver.location) === null || _driver$location3 === void 0 ? void 0 : _driver$location3.split(',')[0].replace(/[^-.0-9]/g, '')),
            lng: parseFloat(driver === null || driver === void 0 || (_driver$location4 = driver.location) === null || _driver$location4 === void 0 ? void 0 : _driver$location4.split(',')[1].replace(/[^-.0-9]/g, ''))
          } : defaultCenter;
          var _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
          bounds.extend(_newPoint);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    var marker, newPoint;
    if (selectedOrder) {
      var _selectedOrder$busine, _selectedOrder$busine2, _selectedOrder$custom, _selectedOrder$custom2;
      marker = (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$busine = selectedOrder.business) === null || _selectedOrder$busine === void 0 ? void 0 : _selectedOrder$busine.location) !== null ? selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$busine2 = selectedOrder.business) === null || _selectedOrder$busine2 === void 0 ? void 0 : _selectedOrder$busine2.location : defaultCenter;
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(newPoint);
      marker = (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$custom = selectedOrder.customer) === null || _selectedOrder$custom === void 0 ? void 0 : _selectedOrder$custom.location) !== null && selectedOrder !== null && selectedOrder !== void 0 && (_selectedOrder$custom2 = selectedOrder.customer) !== null && _selectedOrder$custom2 !== void 0 && (_selectedOrder$custom2 = _selectedOrder$custom2.location) !== null && _selectedOrder$custom2 !== void 0 && _selectedOrder$custom2.lat ? selectedOrder.customer.location : defaultCenter;
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(newPoint);
    }
    if (selectedOrder !== null && selectedOrder !== void 0 && selectedOrder.driver) {
      var _selectedOrder$driver, _selectedOrder$driver2;
      marker = (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver = selectedOrder.driver) === null || _selectedOrder$driver === void 0 ? void 0 : _selectedOrder$driver.location) !== null && selectedOrder !== null && selectedOrder !== void 0 && (_selectedOrder$driver2 = selectedOrder.driver) !== null && _selectedOrder$driver2 !== void 0 && (_selectedOrder$driver2 = _selectedOrder$driver2.location) !== null && _selectedOrder$driver2 !== void 0 && _selectedOrder$driver2.lat ? selectedOrder.driver.location : defaultCenter;
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(newPoint);
    }
    if (selectedDriver && assignedOrders !== null && assignedOrders !== void 0 && (_assignedOrders$order2 = assignedOrders.orders) !== null && _assignedOrders$order2 !== void 0 && _assignedOrders$order2.length && !selectedOrder) {
      assignedOrders.orders.forEach(function (order) {
        var _order$business, _order$business2, _order$customer, _order$customer2;
        marker = (order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location) !== null ? order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.location : defaultCenter;
        newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
        bounds.extend(newPoint);
        marker = (order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location) !== null && order !== null && order !== void 0 && (_order$customer2 = order.customer) !== null && _order$customer2 !== void 0 && (_order$customer2 = _order$customer2.location) !== null && _order$customer2 !== void 0 && _order$customer2.lat ? order.customer.location : defaultCenter;
        newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
        bounds.extend(newPoint);
      });
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
    var _assignedOrders$order3;
    if (mapLoaded) return;
    if (showDrivers.length === 0) {
      setMapZoom(defaultZoom);
      setMapCenter(defaultCenter);
      setMapFitted(false);
      return;
    }
    if (selectedOrder && selectedDriver || selectedDriver && assignedOrders !== null && assignedOrders !== void 0 && (_assignedOrders$order3 = assignedOrders.orders) !== null && _assignedOrders$order3 !== void 0 && _assignedOrders$order3.length) {
      mapFit();
      return;
    }
    if (!mapFitted) {
      mapFit();
    }
  }, [showDrivers, mapLoaded, mapFitted, selectedOrder, assignedOrders === null || assignedOrders === void 0 ? void 0 : assignedOrders.orders]);
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
    setMapFitted(false);
  }, [selectedOrder]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedDriver && (assignedOrders === null || assignedOrders === void 0 ? void 0 : assignedOrders.loading) && /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, {
    primary: true
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
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
  }, !selectedOrder && showDrivers.length !== 0 && showDrivers.map(function (driver) {
    var _driver$location5, _driver$location6, _driver$location7, _driver$location8;
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      timeStatus: selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.time_status,
      lat: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location5 = driver.location) !== null && _driver$location5 !== void 0 && _driver$location5.lat ? driver.location.lat : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 || (_driver$location6 = driver.location) === null || _driver$location6 === void 0 ? void 0 : _driver$location6.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
      lng: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location7 = driver.location) !== null && _driver$location7 !== void 0 && _driver$location7.lng ? driver.location.lng : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 || (_driver$location8 = driver.location) === null || _driver$location8 === void 0 ? void 0 : _driver$location8.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng
    });
  }), selectedOrder && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.customer,
    lat: selectedOrder !== null && selectedOrder !== void 0 && (_selectedOrder$custom3 = selectedOrder.customer) !== null && _selectedOrder$custom3 !== void 0 && (_selectedOrder$custom3 = _selectedOrder$custom3.location) !== null && _selectedOrder$custom3 !== void 0 && _selectedOrder$custom3.lat ? selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$custom4 = selectedOrder.customer) === null || _selectedOrder$custom4 === void 0 || (_selectedOrder$custom4 = _selectedOrder$custom4.location) === null || _selectedOrder$custom4 === void 0 ? void 0 : _selectedOrder$custom4.lat : defaultCenter.lat,
    lng: selectedOrder !== null && selectedOrder !== void 0 && (_selectedOrder$custom5 = selectedOrder.customer) !== null && _selectedOrder$custom5 !== void 0 && (_selectedOrder$custom5 = _selectedOrder$custom5.location) !== null && _selectedOrder$custom5 !== void 0 && _selectedOrder$custom5.lng ? selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$custom6 = selectedOrder.customer) === null || _selectedOrder$custom6 === void 0 || (_selectedOrder$custom6 = _selectedOrder$custom6.location) === null || _selectedOrder$custom6 === void 0 ? void 0 : _selectedOrder$custom6.lng : defaultCenter.lng,
    image: selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$custom7 = selectedOrder.customer) === null || _selectedOrder$custom7 === void 0 ? void 0 : _selectedOrder$custom7.photo
  }), selectedOrder && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.business,
    lat: selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$busine3 = selectedOrder.business) === null || _selectedOrder$busine3 === void 0 || (_selectedOrder$busine3 = _selectedOrder$busine3.location) === null || _selectedOrder$busine3 === void 0 ? void 0 : _selectedOrder$busine3.lat,
    lng: selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$busine4 = selectedOrder.business) === null || _selectedOrder$busine4 === void 0 || (_selectedOrder$busine4 = _selectedOrder$busine4.location) === null || _selectedOrder$busine4 === void 0 ? void 0 : _selectedOrder$busine4.lng,
    image: selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$busine5 = selectedOrder.business) === null || _selectedOrder$busine5 === void 0 ? void 0 : _selectedOrder$busine5.logo
  }), (selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.driver) && /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
    driver: selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.driver,
    timeStatus: selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.time_status,
    lat: (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver3 = selectedOrder.driver) === null || _selectedOrder$driver3 === void 0 ? void 0 : _selectedOrder$driver3.location) !== null && _typeof(selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver4 = selectedOrder.driver) === null || _selectedOrder$driver4 === void 0 ? void 0 : _selectedOrder$driver4.location) === 'object' && selectedOrder !== null && selectedOrder !== void 0 && (_selectedOrder$driver5 = selectedOrder.driver) !== null && _selectedOrder$driver5 !== void 0 && (_selectedOrder$driver5 = _selectedOrder$driver5.location) !== null && _selectedOrder$driver5 !== void 0 && _selectedOrder$driver5.lat ? selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver6 = selectedOrder.driver) === null || _selectedOrder$driver6 === void 0 ? void 0 : _selectedOrder$driver6.location.lat : typeof (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver7 = selectedOrder.driver) === null || _selectedOrder$driver7 === void 0 ? void 0 : _selectedOrder$driver7.location) === 'string' ? parseFloat(selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver8 = selectedOrder.driver) === null || _selectedOrder$driver8 === void 0 || (_selectedOrder$driver8 = _selectedOrder$driver8.location) === null || _selectedOrder$driver8 === void 0 ? void 0 : _selectedOrder$driver8.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
    lng: (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver9 = selectedOrder.driver) === null || _selectedOrder$driver9 === void 0 ? void 0 : _selectedOrder$driver9.location) !== null && _typeof(selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver10 = selectedOrder.driver) === null || _selectedOrder$driver10 === void 0 ? void 0 : _selectedOrder$driver10.location) === 'object' && selectedOrder !== null && selectedOrder !== void 0 && (_selectedOrder$driver11 = selectedOrder.driver) !== null && _selectedOrder$driver11 !== void 0 && (_selectedOrder$driver11 = _selectedOrder$driver11.location) !== null && _selectedOrder$driver11 !== void 0 && _selectedOrder$driver11.lng ? selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver12 = selectedOrder.driver) === null || _selectedOrder$driver12 === void 0 ? void 0 : _selectedOrder$driver12.location.lng : typeof (selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver13 = selectedOrder.driver) === null || _selectedOrder$driver13 === void 0 ? void 0 : _selectedOrder$driver13.location) === 'string' ? parseFloat(selectedOrder === null || selectedOrder === void 0 || (_selectedOrder$driver14 = selectedOrder.driver) === null || _selectedOrder$driver14 === void 0 || (_selectedOrder$driver14 = _selectedOrder$driver14.location) === null || _selectedOrder$driver14 === void 0 ? void 0 : _selectedOrder$driver14.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng
  }), selectedDriver && (assignedOrders === null || assignedOrders === void 0 || (_assignedOrders$order4 = assignedOrders.orders) === null || _assignedOrders$order4 === void 0 ? void 0 : _assignedOrders$order4.length) > 0 && !selectedOrder && assignedOrders.orders.map(function (order) {
    var _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7;
    return /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
      key: order.id,
      customer: order === null || order === void 0 ? void 0 : order.customer,
      lat: order !== null && order !== void 0 && (_order$customer3 = order.customer) !== null && _order$customer3 !== void 0 && (_order$customer3 = _order$customer3.location) !== null && _order$customer3 !== void 0 && _order$customer3.lat ? order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 || (_order$customer4 = _order$customer4.location) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.lat : defaultCenter.lat,
      lng: order !== null && order !== void 0 && (_order$customer5 = order.customer) !== null && _order$customer5 !== void 0 && (_order$customer5 = _order$customer5.location) !== null && _order$customer5 !== void 0 && _order$customer5.lng ? order === null || order === void 0 || (_order$customer6 = order.customer) === null || _order$customer6 === void 0 || (_order$customer6 = _order$customer6.location) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lng : defaultCenter.lng,
      image: order === null || order === void 0 || (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.photo
    });
  }), selectedDriver && (assignedOrders === null || assignedOrders === void 0 || (_assignedOrders$order5 = assignedOrders.orders) === null || _assignedOrders$order5 === void 0 ? void 0 : _assignedOrders$order5.length) > 0 && !selectedOrder && assignedOrders.orders.map(function (order) {
    var _order$business3, _order$business4, _order$business5;
    return /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
      key: order.id,
      business: order === null || order === void 0 ? void 0 : order.business,
      lat: order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 || (_order$business3 = _order$business3.location) === null || _order$business3 === void 0 ? void 0 : _order$business3.lat,
      lng: order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 || (_order$business4 = _order$business4.location) === null || _order$business4 === void 0 ? void 0 : _order$business4.lng,
      image: order === null || order === void 0 || (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo
    });
  }))));
}, DriversLocationPropsAreEqual);
exports.DriversLocation = DriversLocation;