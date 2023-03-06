"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
      var _formState$result2, _formState$result2$re, _formState$result3, _formState$result4;
      if ((formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : (_formState$result2$re = _formState$result2.result) === null || _formState$result2$re === void 0 ? void 0 : _formState$result2$re.length) === 0 && formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result[0].toLowerCase().includes(t('SLUG', 'Slug').toLowerCase())) setIsSlugEdit(true);else setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result
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
    schedule: formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.schedule
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_Photos.Photos, {
    gallery: gallery,
    handleChangeGallery: handleChangeGallery
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement(_OrderTypePriceLevel.OrderTypePriceLevel, {
    formState: formState,
    changeFormState: changeFormState
  })), (orderStatus === null || orderStatus === void 0 ? void 0 : (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === 1 && /*#__PURE__*/_react.default.createElement(_DeliveryZone.DeliveryZone, {
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
  }, t('CONFIRM', 'Confirm'))), /*#__PURE__*/_react.default.createElement(_styles2.MapWrapper, null, placeId && (configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value) && /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value,
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
  }, /*#__PURE__*/_react.default.createElement(_styles2.SlugEditWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, formState === null || formState === void 0 ? void 0 : (_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result), /*#__PURE__*/_react.default.createElement(_styles2.SlugFormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "slug",
    placeholder: t('SLUG', 'Slug'),
    value: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.slug,
    onChange: handleChangeInput
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: handleSubmit
  }, t('ACCEPT', 'Accept')))));
};
var BusinessAdd = function BusinessAdd(props) {
  var history = (0, _reactRouterDom.useHistory)();
  var addNewBusinessProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessAddUI,
    handleOpenCategory: function handleOpenCategory(slug) {
      return history.push("/stores/products/".concat(slug));
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessAdd, addNewBusinessProps);
};
exports.BusinessAdd = BusinessAdd;