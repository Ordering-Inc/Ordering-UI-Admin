"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductStep = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _ProductStartGuide = require("../ProductStartGuide");
var _RestaurantSelectGuide = require("../RestaurantSelectGuide");
var _UploadMenuGuide = require("../UploadMenuGuide");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _SelectPosGuide = require("../SelectPosGuide");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductStepUI = function ProductStepUI(props) {
  var _actionState$content, _actionState$content2;
  var onClose = props.onClose,
    businessListState = props.businessListState,
    setBusiness = props.setBusiness,
    actionState = props.actionState,
    handleImport = props.handleImport,
    handleChangeAddress = props.handleChangeAddress,
    business = props.business,
    orderingBusiness = props.orderingBusiness,
    countriesState = props.countriesState,
    handleOpenCategoryDetails = props.handleOpenCategoryDetails;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    option = _useState4[0],
    setOption = _useState4[1];
  var handleCheckMenu = function handleCheckMenu() {
    events.emit('go_to_page', {
      page: 'store',
      params: {
        store: business === null || business === void 0 ? void 0 : business._id
      }
    });
    onClose();
  };
  var handleAddManuallyProduct = function handleAddManuallyProduct() {
    onClose();
    handleOpenCategoryDetails();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, step === 1 && /*#__PURE__*/_react.default.createElement(_ProductStartGuide.ProductStartGuide, {
    onClose: onClose,
    setStep: setStep,
    setOption: setOption,
    countriesState: countriesState
  }), step === 2 && option === 2 && /*#__PURE__*/_react.default.createElement(_RestaurantSelectGuide.RestaurantSelectGuide, {
    setBusiness: setBusiness,
    setStep: setStep,
    onClose: onClose,
    businessListState: businessListState,
    handleImport: handleImport,
    handleChangeAddress: handleChangeAddress,
    orderingBusiness: orderingBusiness,
    business: business
  }), step === 3 && option === 2 && (actionState === null || actionState === void 0 ? void 0 : actionState.loading) && /*#__PURE__*/_react.default.createElement(_styles2.ImportMenuContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('WE_ARE_IMPORTING_YOUR_MENU', 'We are importing your menu.')), /*#__PURE__*/_react.default.createElement(_styles2.ImageContent, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.importMenu,
    alt: ""
  }))), step === 3 && option === 2 && !(actionState !== null && actionState !== void 0 && actionState.loading) && (actionState === null || actionState === void 0 || (_actionState$content = actionState.content) === null || _actionState$content === void 0 ? void 0 : _actionState$content.products) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.ImportMenuContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('YOUR_MENU_HAS_BEEN_IMPORTED', 'Your menu has been imported')), /*#__PURE__*/_react.default.createElement(_styles2.ImageContent, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.importedMenu,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleCheckMenu();
    }
  }, t('CHECK_MENU', 'Check menu')))), step === 3 && option === 2 && !(actionState !== null && actionState !== void 0 && actionState.loading) && (actionState === null || actionState === void 0 || (_actionState$content2 = actionState.content) === null || _actionState$content2 === void 0 ? void 0 : _actionState$content2.products) === 0 && /*#__PURE__*/_react.default.createElement(_styles2.ImportMenuContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('YOUR_MENU_COULDNT__BE_IMPORTED', 'Your menu couldn\'t be imported')), /*#__PURE__*/_react.default.createElement(_styles2.ImageContent, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.importMenu,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleAddManuallyProduct
  }, t('ADD_PRODUCTS_MANUALLY', 'Add products manually')))), step === 3 && option === 2 && !(actionState !== null && actionState !== void 0 && actionState.loading) && (actionState === null || actionState === void 0 ? void 0 : actionState.error) && /*#__PURE__*/_react.default.createElement(_styles2.ImportMenuContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ERROR', 'Error')), actionState.error && typeof actionState.error === 'string' && actionState.error, actionState.error && _typeof(actionState.error) === 'object' && Array.isArray(actionState.error) && /*#__PURE__*/_react.default.createElement("ul", null, actionState.error.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, Array.isArray(item) ? item.map(function (err, index) {
      return typeof err === 'string' && /*#__PURE__*/_react.default.createElement("li", {
        key: index
      }, t(err.toUpperCase(), err));
    }) : typeof item === 'string' && /*#__PURE__*/_react.default.createElement("li", null, t(item.toUpperCase(), item)));
  }))), step === 2 && option === 3 && /*#__PURE__*/_react.default.createElement(_UploadMenuGuide.UploadMenuGuide, {
    handleBack: function handleBack() {
      return setStep(1);
    },
    onClose: onClose,
    handleSuccess: function handleSuccess() {
      return setStep(3);
    }
  }), step === 3 && option === 3 && /*#__PURE__*/_react.default.createElement(_styles2.ImportMenuContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDERING', 'Ordering')), /*#__PURE__*/_react.default.createElement("p", null, t('WE_ARE_IMPORTING_YOUR_PRODUCTS', 'we are importing your products'))), step === 2 && option === 4 && /*#__PURE__*/_react.default.createElement(_SelectPosGuide.SelectPosGuide, {
    setStep: setStep,
    handleSuccess: function handleSuccess() {
      return setStep(3);
    }
  }), step === 3 && option === 4 && /*#__PURE__*/_react.default.createElement(_styles2.ImportMenuContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDERING', 'Ordering')), /*#__PURE__*/_react.default.createElement("p", null, t('WE_WILL_CONTACT_YOU_ASAP', 'we will contact you As soon as possible'))));
};
var ProductStep = function ProductStep(props) {
  var productStepProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductStepUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductStep, productStepProps);
};
exports.ProductStep = ProductStep;