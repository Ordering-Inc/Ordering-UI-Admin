"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryZone = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../../styles/Select/FirstSelect");
var _styles = require("../../../../styles");
var _Shared = require("../../../Shared");
var _styles2 = require("./styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DeliveryZone = function DeliveryZone(props) {
  var _zoneState$name, _zoneState$minimum, _zoneState$price, _configState$configs2, _zoneState$data$dista, _zoneState$data, _formState$changes, _configState$configs4, _zoneState$data2, _configState$configs5;
  var formState = props.formState,
    zoneState = props.zoneState,
    handleChangeZoneState = props.handleChangeZoneState,
    kmlData = props.kmlData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseNumber = _useUtils2[0].parseNumber;
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    clearState = _useState2[0],
    setClearState = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    infoContentString = _useState4[0],
    setInfoContentString = _useState4[1];
  var _useState5 = (0, _react.useState)(2),
    _useState6 = _slicedToArray(_useState5, 2),
    zoneType = _useState6[0],
    setZoneType = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    zoneData = _useState8[0],
    setZoneData = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isShowMap = _useState12[0],
    setIsShowMap = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    hasContent = _useState14[0],
    setHasContent = _useState14[1];
  // const kmlRef = useRef(null)

  var typeOptions = [{
    value: 1,
    content: t('CIRCLE', 'Circle')
  }, {
    value: 2,
    content: t('POLYGON', 'Polygon')
  }, {
    value: 4,
    content: t('EVERYWHERE', 'Everywhere')
  }, {
    value: 5,
    content: t('DISTANCE_BASED', 'Distance based')
  }];
  var googleMapsControls = {
    defaultZoom: 8,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false,
    defaultPosition: {
      lat: 40.77473399999999,
      lng: -73.9653844
    }
  };
  var fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: true
  };
  var greenFillStyle = {
    fillColor: '#008000',
    fillOpacity: 0.3,
    strokeColor: '#008000',
    strokeOpacity: 0.8,
    strokeWeight: 2
  };
  var handleChangeType = function handleChangeType(type) {
    handleChangeZoneState({
      type: type
    }, true);
    setClearState(true);
    setZoneType(type);
  };
  var handleZoneData = function handleZoneData(data) {
    setZoneData(data);
    handleChangeZoneState({
      data: data
    }, true);
  };

  // const onSubmit = () => {
  //   if (zoneState.changes?.data || zoneType === 4) {
  //     handleAddBusinessDeliveryZone()
  //   } else {
  //     setAlertState({
  //       open: true,
  //       content: t('REQUIRED_POLYGON_CIRCLE', 'Add a distance based or draw a polygon or circle.')
  //     })
  //   }
  // }

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    if (clearState) {
      handleZoneData(null);
    }
  }, [clearState]);
  (0, _react.useEffect)(function () {
    var _configState$configs;
    if (zoneType === 2 || zoneType === 4) return;
    var content = '<div style="width: 90px; height: 30px">' + '<span>Radius: </span>';
    content += parseNumber((zoneData === null || zoneData === void 0 ? void 0 : zoneData.radio) || (zoneData === null || zoneData === void 0 ? void 0 : zoneData.distance));
    content += "<span>".concat(zoneType === 5 ? configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.distance_unit) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value : 'km', "</span>") + '</div>';
    setInfoContentString(content);
  }, [zoneData, zoneType]);
  (0, _react.useEffect)(function () {
    if (zoneType === 4) setIsShowMap(false);else setIsShowMap(true);
  }, [zoneType]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DeliveryZoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, {
    onClick: function onClick() {
      return setHasContent(function (prev) {
        return !prev;
      });
    }
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('LETS_CREATE_YOUR_FIRST_DELIVERY_ZONE', 'Let’s create your first Delivery Zone')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, null)), hasContent && /*#__PURE__*/_react.default.createElement(_styles2.DeliveryZoneInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    name: "name",
    value: (_zoneState$name = zoneState === null || zoneState === void 0 ? void 0 : zoneState.name) !== null && _zoneState$name !== void 0 ? _zoneState$name : '',
    onChange: function onChange(e) {
      return handleChangeZoneState(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: parseInt((zoneState === null || zoneState === void 0 ? void 0 : zoneState.type) || zoneType),
    options: typeOptions,
    onChange: handleChangeType
  })))), /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUN_PURCHASED', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "minimum",
    value: (_zoneState$minimum = zoneState === null || zoneState === void 0 ? void 0 : zoneState.minimum) !== null && _zoneState$minimum !== void 0 ? _zoneState$minimum : '',
    onChange: function onChange(e) {
      return handleChangeZoneState(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DELIVERY_FEE', 'Delivery fee')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "price",
    value: (_zoneState$price = zoneState === null || zoneState === void 0 ? void 0 : zoneState.price) !== null && _zoneState$price !== void 0 ? _zoneState$price : '',
    onChange: function onChange(e) {
      return handleChangeZoneState(e);
    }
  }))), zoneType === 5 && /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DISTANCE_FROM_STORE', 'Distance from store')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "1 - 99 ".concat(configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.distance_unit) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value),
    name: "distance",
    maxLength: 2,
    value: (_zoneState$data$dista = zoneState === null || zoneState === void 0 || (_zoneState$data = zoneState.data) === null || _zoneState$data === void 0 ? void 0 : _zoneState$data.distance) !== null && _zoneState$data$dista !== void 0 ? _zoneState$data$dista : '',
    onInput: function onInput(e) {
      e.target.value = e.target.value.match("^[".concat(e.target.value === '0' ? '1' : '0', "-9]{1,2}$"));
    },
    onChange: function onChange(e) {
      var _configState$configs3;
      return handleChangeZoneState(e, false, configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.distance_unit) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('BUSINESS_ADDRESS', 'Business address')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "address",
    defaultValue: formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.address,
    disabled: true
  })), zoneType !== 4 && isShowMap && (configState !== null && configState !== void 0 && (_configState$configs4 = configState.configs) !== null && _configState$configs4 !== void 0 && (_configState$configs4 = _configState$configs4.google_maps_api_key) !== null && _configState$configs4 !== void 0 && _configState$configs4.value ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, zoneType !== 5 && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setClearState(true);
    }
  }, t('CLEAR', 'Clear')), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessZoneGoogleMaps, {
    distance: zoneState === null || zoneState === void 0 || (_zoneState$data2 = zoneState.data) === null || _zoneState$data2 === void 0 ? void 0 : _zoneState$data2.distance,
    disabled: true,
    apiKey: configState === null || configState === void 0 || (_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.google_maps_api_key) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value,
    mapControls: googleMapsControls,
    clearState: clearState,
    setClearState: setClearState,
    type: zoneType,
    data: (zoneState === null || zoneState === void 0 ? void 0 : zoneState.data) || zoneData,
    handleData: handleZoneData,
    fillStyle: fillStyle,
    infoContentString: infoContentString,
    greenFillStyle: greenFillStyle,
    kmlData: kmlData
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ErrorText, null, t('REQUIRED_GOOGLE_MAP_API_KEY', 'Google Maps api key is required'))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
exports.DeliveryZone = DeliveryZone;