"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAdd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BusinessDetails = require("./BusinessDetails");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Images = require("./Images");
var _Schedule = require("./Schedule");
var _Photos = require("./Photos");
var _OrderTypePriceLevel = require("./OrderTypePriceLevel");
var _PaymentMethods = require("./PaymentMethods");
var _ReceiveOrders = require("./ReceiveOrders");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _DeliveryZone = require("./DeliveryZone");
var _reactRouterDom = require("react-router-dom");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessAddUI = function BusinessAddUI(props) {
  var _formState$changes2, _orderStatus$options, _configs$google_maps_, _configs$google_maps_2, _formState$result5, _formState$changes3;
  var formState = props.formState,
    handleChangeAddress = props.handleChangeAddress,
    handleChangeInput = props.handleChangeInput,
    handleChangeCenter = props.handleChangeCenter,
    handleChangeSwtich = props.handleChangeSwtich,
    handleChangeGallery = props.handleChangeGallery,
    changeFormState = props.changeFormState,
    paymethodsList = props.paymethodsList,
    handleAddBusiness = props.handleAddBusiness,
    kmlData = props.kmlData,
    handleUploadKmlFiles = props.handleUploadKmlFiles,
    zoneState = props.zoneState,
    handleChangeZoneState = props.handleChangeZoneState,
    gallery = props.gallery,
    handleChangePaymethodIds = props.handleChangePaymethodIds,
    paymethodIds = props.paymethodIds,
    handleChangeSchedule = props.handleChangeSchedule,
    placeId = props.placeId,
    setDetails = props.setDetails;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderStatus = _useOrder2[0];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSlugEdit = _useState4[0],
    setIsSlugEdit = _useState4[1];
  var handleSubmit = function handleSubmit() {
    var _formState$changes;
    if ((paymethodIds === null || paymethodIds === void 0 ? void 0 : paymethodIds.length) === 0) {
      setAlertState({
        open: true,
        content: t('AT_LEAST_A_PAYMENT_METHOD_REQUIRED', 'At least a payment method is required')
      });
      return;
    }
    if (!(formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.slug)) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Slug is required').replace('_attribute_', t('SLUG', 'Slug'))
      });
      return;
    }
    isSlugEdit && setIsSlugEdit(false);
    handleAddBusiness();
  };
  var handleGoToBusinessList = function handleGoToBusinessList() {
    events.emit('go_to_page', {
      page: 'businesses'
    });
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2, _formState$result3, _formState$result4;
      if ((formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 || (_formState$result2 = _formState$result2.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.length) === 0 && formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result[0].toLowerCase().includes(t('SLUG', 'Slug').toLowerCase())) setIsSlugEdit(true);else setAlertState({
        open: true,
        content: formState === null || formState === void 0 || (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);
  var changeSchedule = (0, _react.useCallback)(function (e) {
    return handleChangeSchedule(e);
  }, []);
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };
  var defaultPosition = {
    lat: 40.77473399999999,
    lng: -73.9653844
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewBusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_BUSINESS', 'New business'))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    formState: formState,
    handleChangeAddress: handleChangeAddress,
    handleChangeInput: handleChangeInput,
    handleChangeCenter: handleChangeCenter,
    placeId: placeId
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_Images.Images, {
    formState: formState,
    handleChangeSwtich: handleChangeSwtich
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_Schedule.Schedule, {
    handleChangeSchedule: changeSchedule,
    schedule: formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.schedule
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_Photos.Photos, {
    gallery: gallery,
    handleChangeGallery: handleChangeGallery
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_OrderTypePriceLevel.OrderTypePriceLevel, {
    formState: formState,
    changeFormState: changeFormState
  })), (orderStatus === null || orderStatus === void 0 || (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === 1 && /*#__PURE__*/_react.default.createElement(_DeliveryZone.DeliveryZone, {
    kmlData: kmlData,
    zoneState: zoneState,
    formState: formState,
    handleChangeZoneState: handleChangeZoneState,
    handleUploadKmlFiles: handleUploadKmlFiles
  }), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_PaymentMethods.PaymentMethods, {
    handleChangePaymethodIds: handleChangePaymethodIds,
    paymethodIds: paymethodIds,
    paymethodsList: paymethodsList
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_ReceiveOrders.ReceiveOrders, {
    formState: formState,
    handleChangeInput: handleChangeInput,
    changeFormState: changeFormState
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    onClick: handleGoToBusinessList
  }, t('Cancel', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit,
    disabled: formState === null || formState === void 0 ? void 0 : formState.loading
  }, t('CONFIRM', 'Confirm'))), /*#__PURE__*/_react.default.createElement(_styles2.MapWrapper, null, placeId && (configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value) && /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value,
    location: defaultPosition,
    mapControls: googleMapsControls,
    isFitCenter: true,
    setDetails: setDetails,
    placeId: placeId
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    title: t('WEB_APPNAME', 'Ordering'),
    open: isSlugEdit,
    onClose: function onClose() {
      return setIsSlugEdit(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.SlugEditWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, formState === null || formState === void 0 || (_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result), /*#__PURE__*/_react.default.createElement(_styles2.SlugFormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "slug",
    placeholder: t('SLUG', 'Slug'),
    value: formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.slug,
    onChange: handleChangeInput
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: handleSubmit
  }, t('ACCEPT', 'Accept')))));
};
var BusinessAdd = exports.BusinessAdd = function BusinessAdd(props) {
  var history = (0, _reactRouterDom.useHistory)();
  var addNewBusinessProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessAddUI,
    handleOpenCategory: function handleOpenCategory(slug) {
      return history.push("/stores/products/".concat(slug));
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessAdd, addNewBusinessProps);
};