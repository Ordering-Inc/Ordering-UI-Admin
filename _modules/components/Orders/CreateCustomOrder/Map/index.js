"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _InterActOrderMarker = require("../../InterActOrderMarker");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Map = function Map(props) {
  var _configs$location_def, _configs$location_def2, _business$location, _business$location2;
  var business = props.business,
    customer = props.customer,
    customerLocation = props.customerLocation;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var mapRef = (0, _react.useRef)(null);
  var googleMapsApiKey = (0, _react.useMemo)(function () {
    var _configs$google_maps_;
    return configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  }, [configs]);
  var deliveryType = (0, _react.useMemo)(function () {
    var _orderState$options;
    return orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type;
  }, [orderState]);
  var defaultLatitude = Number(configs === null || configs === void 0 || (_configs$location_def = configs.location_default_latitude) === null || _configs$location_def === void 0 ? void 0 : _configs$location_def.value);
  var defaultLongitude = Number(configs === null || configs === void 0 || (_configs$location_def2 = configs.location_default_longitude) === null || _configs$location_def2 === void 0 ? void 0 : _configs$location_def2.value);
  var isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
  var defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  };
  var greenFillStyle = {
    fillColor: '#008000',
    fillOpacity: 0.3,
    strokeColor: '#008000',
    strokeOpacity: 0.8,
    strokeWeight: 2
  };
  var units = {
    mi: 1609,
    km: 1000
  };
  var defaultZoom = 10;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    mapLoaded = _useState2[0],
    setMapLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultCenter),
    _useState4 = _slicedToArray(_useState3, 2),
    mapCenter = _useState4[0],
    setMapCenter = _useState4[1];
  var _useState5 = (0, _react.useState)(10),
    _useState6 = _slicedToArray(_useState5, 2),
    mapZoom = _useState6[0],
    setMapZoom = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    map = _useState8[0],
    setMap = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    maps = _useState10[0],
    setMaps = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    circleZones = _useState12[0],
    setCircleZones = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    polygonZones = _useState14[0],
    setPolygonZones = _useState14[1];
  var handleMapChange = function handleMapChange(data) {
    if (!(data !== null && data !== void 0 && data.zoom)) return;
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };
  var mapFit = function mapFit() {
    var _bounds$getNorthEast, _bounds$getNorthEast$, _bounds$getNorthEast2, _bounds$getNorthEast3, _bounds$getSouthWest, _bounds$getSouthWest$, _bounds$getSouthWest2, _bounds$getSouthWest3;
    var bounds = new window.google.maps.LatLngBounds();
    if (!(business !== null && business !== void 0 && business.location)) {
      setMapCenter(customerLocation);
      setMapZoom(defaultZoom);
      return;
    }
    var marker, newPoint;
    marker = business === null || business === void 0 ? void 0 : business.location;
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
    bounds.extend(newPoint);
    marker = customerLocation;
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
    bounds.extend(newPoint);

    // drwa delivery zones
    circleZones.forEach(function (circle) {
      return circle.setMap(null);
    });
    polygonZones.forEach(function (polygon) {
      return polygon.setMap(null);
    });
    var _circleZones = [];
    var _polygonZones = [];
    if (map && maps && business !== null && business !== void 0 && business.zones && deliveryType === 1) {
      var _center = business === null || business === void 0 ? void 0 : business.location;
      var _iterator = _createForOfIteratorHelper(business.zones),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _deliveryZone$data, _deliveryZone$data2, _deliveryZone$data3;
          var deliveryZone = _step.value;
          if (deliveryZone.type === 1 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data = deliveryZone.data) !== null && _deliveryZone$data !== void 0 && _deliveryZone$data.center && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data2 = deliveryZone.data) !== null && _deliveryZone$data2 !== void 0 && _deliveryZone$data2.radio) {
            var newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
              editable: false,
              center: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.center,
              radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.radio) * 1000
            }));
            newCircleZone.setMap(map);
            bounds.union(newCircleZone.getBounds());
            map.fitBounds(bounds);
            _circleZones.push(newCircleZone);
          }
          if (deliveryZone.type === 5 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data3 = deliveryZone.data) !== null && _deliveryZone$data3 !== void 0 && _deliveryZone$data3.distance) {
            var _deliveryZone$data4;
            var _newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
              editable: false,
              center: _center,
              radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.distance) * units[deliveryZone === null || deliveryZone === void 0 || (_deliveryZone$data4 = deliveryZone.data) === null || _deliveryZone$data4 === void 0 ? void 0 : _deliveryZone$data4.unit]
            }));
            _newCircleZone.setMap(map);
            bounds.union(_newCircleZone.getBounds());
            map.fitBounds(bounds);
            _circleZones.push(_newCircleZone);
          }
          if ((deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.type) === 2 && Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
            var newPolygonZone = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, greenFillStyle), {}, {
              editable: false,
              paths: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data
            }));
            newPolygonZone.setMap(map);
            if (Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
              var _iterator2 = _createForOfIteratorHelper(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var position = _step2.value;
                  bounds.extend(position);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              map.fitBounds(bounds);
            }
            _polygonZones.push(newPolygonZone);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setCircleZones(_circleZones);
    setPolygonZones(_polygonZones);

    // fit map center and zoone
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
  (0, _react.useEffect)(function () {
    if (mapLoaded) return;
    mapFit();
  }, [customerLocation, business === null || business === void 0 ? void 0 : business.location, mapLoaded, map, maps, business === null || business === void 0 ? void 0 : business.zones, deliveryType]);
  var onMapLoaded = function onMapLoaded(map, maps) {
    setMapLoaded(false);
    setMap(map);
    setMaps(maps);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    ref: mapRef
  }, googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
      libraries: ['places', 'geometry', 'drawing', 'visualization']
    },
    onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
      var map = _ref.map,
        maps = _ref.maps;
      return onMapLoaded(map, maps);
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
  }, (business === null || business === void 0 ? void 0 : business.location) && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: business,
    lat: business === null || business === void 0 || (_business$location = business.location) === null || _business$location === void 0 ? void 0 : _business$location.lat,
    lng: business === null || business === void 0 || (_business$location2 = business.location) === null || _business$location2 === void 0 ? void 0 : _business$location2.lng,
    image: business === null || business === void 0 ? void 0 : business.logo
  }), /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: customer,
    lat: customerLocation === null || customerLocation === void 0 ? void 0 : customerLocation.lat,
    lng: customerLocation === null || customerLocation === void 0 ? void 0 : customerLocation.lng,
    image: customer === null || customer === void 0 ? void 0 : customer.photo
  })));
};
exports.Map = Map;