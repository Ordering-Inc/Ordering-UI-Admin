"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetailsUI = exports.BusinessDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _BusinessSummary = require("../BusinessSummary");
var _BusinessSupport = require("../BusinessSupport");
var _BusinessDetail = require("../BusinessDetail");
var _BusinessSchedule = require("../BusinessSchedule");
var _BusinessMenu = require("../BusinessMenu");
var _BusinessDeliveryPickupMore = require("../BusinessDeliveryPickupMore");
var _BusinessPaymentMethods = require("../BusinessPaymentMethods");
var _BusinessPreorderDetails = require("../BusinessPreorderDetails");
var _BusinessTaxAndFees = require("../BusinessTaxAndFees");
var _BusinessPromotionList = require("../BusinessPromotionList");
var _BusinessCustomFields = require("../BusinessCustomFields");
var _BusinessWebhooks = require("../BusinessWebhooks");
var _BusinessNotifications = require("../BusinessNotifications");
var _BusinessOrderingChannels = require("../BusinessOrderingChannels");
var _BusinessFrontLayout = require("../BusinessFrontLayout");
var _BusinessPlaceGroupList = require("../BusinessPlaceGroupList");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessDetailsUI = function BusinessDetailsUI(props) {
  var _businessState$busine, _businessState$busine2, _businessState$busine3, _businessState$busine4;
  var open = props.open,
    businessId = props.businessId,
    businessState = props.businessState,
    handleChangeActiveBusiness = props.handleChangeActiveBusiness,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    handleDeleteBusinessOwner = props.handleDeleteBusinessOwner,
    handleAddBusinessOwner = props.handleAddBusinessOwner,
    businessTypes = props.businessTypes,
    formState = props.formState,
    setFormState = props.setFormState,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick,
    setBusinessTypes = props.setBusinessTypes,
    handleSuccessAddBusinessItem = props.handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem = props.handleSuccessDeleteBusinessItem,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleDuplicateBusiness = props.handleDuplicateBusiness,
    handleDeleteBusiness = props.handleDeleteBusiness,
    actionStatus = props.actionStatus;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    extraOpen = _useState4[0],
    setExtraOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isExtendExtraOpen = _useState6[0],
    setIsExtendExtraOpen = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var isAdmin = (user === null || user === void 0 ? void 0 : user.level) === 0;
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedItem = _useState10[0],
    setSelectedItem = _useState10[1];
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    if (!value) {
      props.onClose();
    }
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('business_details_bar').style.width = '100vw';
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('business_details_bar').style.width = '1000px';
        } else {
          document.getElementById('business_details_bar').style.width = '500px';
        }
      }
    }
  };
  var handleSelectedItem = function handleSelectedItem(item) {
    setIsExtendExtraOpen(false);
    setSelectedItem(item);
    setExtraOpen(true);
  };
  var handleCloseExtraOpen = function handleCloseExtraOpen() {
    setIsExtendExtraOpen(false);
    setExtraOpen(false);
    setSelectedItem(null);
  };
  (0, _react.useEffect)(function () {
    if (width > 1000) {
      setIsExtendExtraOpen(false);
    }
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;
    if (extraOpen) {
      document.getElementById('business_details_bar').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraOpen]);
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
    setIsExtendExtraOpen(false);
  }, [businessId]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.error)) return;
    setAlertState({
      open: true,
      content: actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error
    });
  }, [actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error]);
  return /*#__PURE__*/_react.default.createElement(_styles.BarContainer, {
    id: "business_details_bar"
  }, (!isExtendExtraOpen || width < 1000) && /*#__PURE__*/_react.default.createElement(_BusinessSummary.BusinessSummary, {
    isAdmin: isAdmin,
    businessState: businessState,
    handleChangeActiveBusiness: handleChangeActiveBusiness,
    actionSidebar: actionSidebar,
    selectedItem: selectedItem,
    handleSelectedItem: handleSelectedItem,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleDuplicateBusiness: handleDuplicateBusiness,
    handleDeleteBusiness: handleDeleteBusiness
  }), extraOpen && /*#__PURE__*/_react.default.createElement(_Shared.MoreSidebarLayout, {
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: handleCloseExtraOpen
  }, selectedItem === 'support' && /*#__PURE__*/_react.default.createElement(_BusinessSupport.BusinessSupport, {
    businessState: businessState
  }), selectedItem === 'store_details' && /*#__PURE__*/_react.default.createElement(_BusinessDetail.BusinessDetail, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    formState: formState,
    setFormState: setFormState,
    businessTypes: businessTypes || (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.types),
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    setBusinessTypes: setBusinessTypes,
    handleSuccessAddBusinessItem: handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem: handleSuccessDeleteBusinessItem,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    isExtendExtraOpen: isExtendExtraOpen,
    handleUpdateBusinessState: handleUpdateBusinessState
  }), selectedItem === 'schedule' && /*#__PURE__*/_react.default.createElement(_BusinessSchedule.BusinessSchedule, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'menu' && /*#__PURE__*/_react.default.createElement(_BusinessMenu.BusinessMenu, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessBusinessMenu: handleUpdateBusinessState,
    setIsExtendExtraOpen: setIsExtendExtraOpen
  }), selectedItem === 'delivery_pickup_more' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryPickupMore.BusinessDeliveryPickupMore, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleUpdateBusinessState: handleUpdateBusinessState
  }), selectedItem === 'notifications' && /*#__PURE__*/_react.default.createElement(_BusinessNotifications.BusinessNotifications, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    formState: formState,
    setFormState: setFormState
  }), selectedItem === 'payment_methods' && /*#__PURE__*/_react.default.createElement(_BusinessPaymentMethods.BusinessPaymentMethods, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'tax_fees' && /*#__PURE__*/_react.default.createElement(_BusinessTaxAndFees.BusinessTaxAndFees, {
    formState: formState,
    setFormState: setFormState,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleUpdateBusinessClick: handleUpdateBusinessClick
  }), selectedItem === 'promotions' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionList.BusinessPromotionList, {
    promotions: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.offers,
    businessId: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'preorder' && /*#__PURE__*/_react.default.createElement(_BusinessPreorderDetails.BusinessPreorderDetails, {
    formState: formState,
    setFormState: setFormState,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleUpdateBusinessClick: handleUpdateBusinessClick
  }), selectedItem === 'custom_fields' && /*#__PURE__*/_react.default.createElement(_BusinessCustomFields.BusinessCustomFields, {
    businessId: businessState === null || businessState === void 0 ? void 0 : businessState.business.id,
    metafields: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.metafields,
    handleSuccessAddMetaFields: function handleSuccessAddMetaFields(result) {
      return handleSuccessAddBusinessItem('metafields', result);
    },
    handleSuccessDeleteBusinessMetaFields: function handleSuccessDeleteBusinessMetaFields(id) {
      return handleSuccessDeleteBusinessItem('metafields', id);
    }
  }), selectedItem === 'personalization' && /*#__PURE__*/_react.default.createElement(_Shared.Personalization, {
    isShowTitle: true
  }), selectedItem === 'ordering_channels' && /*#__PURE__*/_react.default.createElement(_BusinessOrderingChannels.BusinessOrderingChannels, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    formState: formState,
    setFormState: setFormState
  }), selectedItem === 'layout' && /*#__PURE__*/_react.default.createElement(_BusinessFrontLayout.BusinessFrontLayout, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    formState: formState,
    setFormState: setFormState
  }), selectedItem === 'webhooks' && /*#__PURE__*/_react.default.createElement(_BusinessWebhooks.BusinessWebhooks, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'places' && /*#__PURE__*/_react.default.createElement(_BusinessPlaceGroupList.BusinessPlaceGroupList, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessUpdate: handleUpdateBusinessState,
    setIsExtendExtraOpen: setIsExtendExtraOpen
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
exports.BusinessDetailsUI = BusinessDetailsUI;
var BusinessDetails = function BusinessDetails(props) {
  var businessDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: BusinessDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDetails, businessDetailsProps);
};
exports.BusinessDetails = BusinessDetails;