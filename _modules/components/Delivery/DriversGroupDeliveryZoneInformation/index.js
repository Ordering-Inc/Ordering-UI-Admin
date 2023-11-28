"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverGroupDeliveryZoneInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverGroupDeliveryZoneInformation = exports.DriverGroupDeliveryZoneInformation = function DriverGroupDeliveryZoneInformation(props) {
  var _ref, _formState$changes$na, _formState$changes2, _formState$changes3, _ref2, _formState$changes$mi, _formState$changes4, _ref3, _formState$changes$pr, _formState$changes5, _configState$configs2, _ref4, _formState$changes$da, _formState$changes6, _zone$data, _configState$configs4, _formState$changes7, _configState$configs5, _formState$changes8, _Object$keys2;
  var zone = props.zone,
    driverGroupsZones = props.driverGroupsZones,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleUpdateDriverGroupDeliveryZone = props.handleUpdateDriverGroupDeliveryZone,
    handleAddDriverGroupDeliveryZone = props.handleAddDriverGroupDeliveryZone,
    handleUploadKmlFiles = props.handleUploadKmlFiles,
    kmlData = props.kmlData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
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
  var _useState5 = (0, _react.useState)((zone === null || zone === void 0 ? void 0 : zone.type) || 2),
    _useState6 = _slicedToArray(_useState5, 2),
    zoneType = _useState6[0],
    setZoneType = _useState6[1];
  var _useState7 = (0, _react.useState)(zone === null || zone === void 0 ? void 0 : zone.data),
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
  var kmlRef = (0, _react.useRef)(null);
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
    handleChangeFormState({
      type: type
    });
    setClearState(true);
    setZoneType(type);
  };
  var handleZoneData = function handleZoneData(data) {
    setZoneData(data);
    handleChangeFormState({
      data: data
    });
  };
  var onSubmit = function onSubmit() {
    var _formState$changes;
    if (formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.data || zoneType === 4) {
      if (!zone) handleAddDriverGroupDeliveryZone();else handleUpdateDriverGroupDeliveryZone();
    } else {
      setAlertState({
        open: true,
        content: t('REQUIRED_POLYGON_CIRCLE', 'Add a distance based or draw a polygon or circle.')
      });
    }
  };
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
    setClearState(false);
    setZoneType((zone === null || zone === void 0 ? void 0 : zone.type) || 2);
    setZoneData(zone === null || zone === void 0 ? void 0 : zone.data);
    setIsShowMap(false);
    setTimeout(function () {
      setIsShowMap(true);
    }, [100]);
  }, [zone === null || zone === void 0 ? void 0 : zone.id]);
  (0, _react.useEffect)(function () {
    var _Object$keys;
    if ((Object === null || Object === void 0 || (_Object$keys = Object.keys(errors)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      var _Object$values;
      setAlertState({
        open: true,
        content: Object === null || Object === void 0 || (_Object$values = Object.values(errors)) === null || _Object$values === void 0 ? void 0 : _Object$values.map(function (error) {
          return error === null || error === void 0 ? void 0 : error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (formState !== null && formState !== void 0 && formState.error) {
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : formState.error
      });
    }
  }, [formState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "off"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    name: "name",
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : zone === null || zone === void 0 ? void 0 : zone.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('NAME_REQUIRED', 'The name is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles2.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: parseInt((formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.type) || zoneType),
    options: typeOptions,
    onChange: handleChangeType
  })))), /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUN_PURCHASED', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "minimum",
    value: (_ref2 = (_formState$changes$mi = formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.minimum) !== null && _formState$changes$mi !== void 0 ? _formState$changes$mi : zone === null || zone === void 0 ? void 0 : zone.minimum) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DELIVERY_FEE', 'Delivery fee')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "$0.00",
    name: "price",
    value: (_ref3 = (_formState$changes$pr = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.price) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : zone === null || zone === void 0 ? void 0 : zone.price) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.')
    })
  }))), zoneType === 5 && /*#__PURE__*/_react.default.createElement(_styles2.Row, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DISTANCE_FROM_STORE', 'Distance from store')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "1 - 99 ".concat(configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.distance_unit) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value),
    name: "distance",
    maxLength: 2,
    value: (_ref4 = (_formState$changes$da = (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 || (_formState$changes6 = _formState$changes6.data) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.distance) !== null && _formState$changes$da !== void 0 ? _formState$changes$da : zone === null || zone === void 0 || (_zone$data = zone.data) === null || _zone$data === void 0 ? void 0 : _zone$data.distance) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      var _configState$configs3;
      return handleChangeInput(e, configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.distance_unit) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value);
    },
    ref: register({
      required: t('DISTANCE_FROM_STORE', 'Distance from store')
    }),
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), zoneType !== 4 && zoneType !== 5 && isShowMap && (configState !== null && configState !== void 0 && (_configState$configs4 = configState.configs) !== null && _configState$configs4 !== void 0 && (_configState$configs4 = _configState$configs4.google_maps_api_key) !== null && _configState$configs4 !== void 0 && _configState$configs4.value ? /*#__PURE__*/_react.default.createElement(_styles2.WrapperMap, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setClearState(true);
    }
  }, t('CLEAR', 'Clear')), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessZoneGoogleMaps, {
    distance: formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 || (_formState$changes7 = _formState$changes7.data) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.distance,
    apiKey: configState === null || configState === void 0 || (_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.google_maps_api_key) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value,
    mapControls: googleMapsControls,
    clearState: clearState,
    setClearState: setClearState,
    type: zoneType,
    data: (formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.data) || zoneData,
    handleData: handleZoneData,
    fillStyle: fillStyle,
    infoContentString: infoContentString,
    greenFillStyle: greenFillStyle,
    isAddMode: !zone,
    businessZones: driverGroupsZones,
    kmlData: kmlData,
    isDriverGroup: true
  })) : /*#__PURE__*/_react.default.createElement(_styles2.ErrorText, null, t('REQUIRED_GOOGLE_MAP_API_KEY', 'Google Maps api key is required'))), !zone && zoneType !== 5 && /*#__PURE__*/_react.default.createElement(_styles2.KmlButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    type: "button",
    onClick: function onClick() {
      return kmlRef.current.click();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleUploadKmlFiles(files);
    },
    childRef: function childRef(e) {
      kmlRef.current = e;
    },
    accept: ".kml,.kmz"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('UPLOAD_KML', 'Upload KML'))))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    type: "submit",
    disabled: (formState === null || formState === void 0 ? void 0 : formState.loading) || (Object === null || Object === void 0 || (_Object$keys2 = Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.length) === 0
  }, !zone ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState === null || alertState === void 0 ? void 0 : alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState === null || alertState === void 0 ? void 0 : alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};