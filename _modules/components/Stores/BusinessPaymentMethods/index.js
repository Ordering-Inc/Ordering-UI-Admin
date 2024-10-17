"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPaymentMethods = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _PaymentOptionStripeDirect = require("../PaymentOptionStripeDirect");
var _PaymentOptionStripeLink = require("../PaymentOptionStripeLink");
var _PaymentOption = require("../PaymentOption");
var _PaymethodOptionPaypalExpress = require("../PaymethodOptionPaypalExpress");
var _PaymethodOptionStripeRedirect = require("../PaymethodOptionStripeRedirect");
var _PaymethodOptionStripeConnect = require("../PaymethodOptionStripeConnect");
var _PaymentOptionPaypal = require("../PaymentOptionPaypal");
var _PaymentOptionSquare = require("../PaymentOptionSquare");
var _PaymentOptionMethods = require("../PaymentOptionMethods");
var _PaymentOptionCredomatic = require("../PaymentOptionCredomatic");
var _BusinessWalletsList = require("../BusinessWalletsList");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessPaymentMethodsUI = function BusinessPaymentMethodsUI(props) {
  var _configs$wallet_enabl;
  var business = props.business,
    businessPaymethodsState = props.businessPaymethodsState,
    paymethodsList = props.paymethodsList,
    handleClickPayment = props.handleClickPayment,
    handleSelectAllPaymethods = props.handleSelectAllPaymethods,
    handleDeleteBusinessPaymethodOption = props.handleDeleteBusinessPaymethodOption,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    actionState = props.actionState,
    changesState = props.changesState,
    sitesState = props.sitesState,
    deviceState = props.deviceState,
    stripeConnectData = props.stripeConnectData,
    handleChangeBusinessPaymentState = props.handleChangeBusinessPaymentState,
    handleChangeStripeConnectData = props.handleChangeStripeConnectData,
    cleanChangesState = props.cleanChangesState,
    handleChangeSandbox = props.handleChangeSandbox,
    handleChangeInput = props.handleChangeInput,
    handleSaveClick = props.handleSaveClick,
    handleStripeConnect = props.handleStripeConnect,
    handleChangeStripeInput = props.handleChangeStripeInput,
    handleStripeSave = props.handleStripeSave,
    isSuccessDeleted = props.isSuccessDeleted,
    setIsSuccessDeleted = props.setIsSuccessDeleted,
    handleSuccessPaymethodUpdate = props.handleSuccessPaymethodUpdate,
    handleSuccessUpdate = props.handleSuccessUpdate,
    isTutorialMode = props.isTutorialMode,
    handleTutorialContinue = props.handleTutorialContinue;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEdit = _useState2[0],
    setIsEdit = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusinessPaymethod = _useState4[0],
    setSelectedBusinessPaymethod = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPaymethodGateway = _useState6[0],
    setSelectedPaymethodGateway = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpenWalletDetails = _useState12[0],
    setIsOpenWalletDetails = _useState12[1];
  var isWalletCashEnabled = (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1';
  var orderTypes = [{
    value: 1,
    text: t('DELIVERY', 'Delivery')
  }, {
    value: 2,
    text: t('PICKUP', 'Pickup')
  }, {
    value: 3,
    text: t('EATIN', 'Eatin')
  }, {
    value: 4,
    text: t('CURBSIDE', 'Curbside')
  }, {
    value: 5,
    text: t('DRIVER_THRU', 'Driver thru')
  }, {
    value: 7,
    text: t('CATERING_DELIVERY', 'Catering delivery')
  }, {
    value: 8,
    text: t('CATERING_PICKUP', 'Catering pickup')
  }];
  var methodsPay = ['google_pay', 'apple_pay'];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === id;
    });
    var valid = false;
    if (found) {
      valid = found.enabled;
    }
    return valid;
  };
  var isCheckFoundBusinessPaymethod = function isCheckFoundBusinessPaymethod(id) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === id;
    });
    return found;
  };
  var handleOpenEdit = function handleOpenEdit(e, paymethodId, paymethodGateway, isInitialRender) {
    var _e$target;
    var inValid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.paymethod-checkbox');
    if (inValid) return true;
    if (!isTutorialMode && isCheckFoundBusinessPaymethod(paymethodId)) {
      setSelectedPaymethodGateway(paymethodGateway);
      var businessPaymethod = businessPaymethodsState.paymethods.find(function (paymethod) {
        return paymethod.paymethod_id === paymethodId;
      });
      setSelectedBusinessPaymethod(businessPaymethod);
      setIsEdit(true);
      setIsExtendExtraOpen(true);
    }
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        paymethod: paymethodId
      });
    }
  };
  var handleClickCheckBox = function handleClickCheckBox(id) {
    var i = 0;
    paymethodsList.paymethods.forEach(function (paymethod) {
      if (isCheckEnableSate(paymethod.id)) {
        i += 1;
      }
    });
    if (isCheckEnableSate(id) && i < 2) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_MIN_ARRAY', 'The _attribute_ must have at least _min_ items.').replace('_attribute_', t('PAYMETHODS', 'Payment methods')).replace('_min_', t('ONE', 'one'))
      });
      return;
    }
    handleClickPayment && handleClickPayment(id);
  };
  var handleCloseEdit = function handleCloseEdit() {
    setIsExtendExtraOpen(false);
    setIsEdit(false);
    setSelectedBusinessPaymethod(null);
    setIsSuccessDeleted(false);
    (0, _utils.removeQueryToUrl)(['paymethod']);
  };
  (0, _react.useEffect)(function () {
    if (!isSuccessDeleted) return;
    handleCloseEdit();
  }, [isSuccessDeleted]);
  (0, _react.useEffect)(function () {
    if (!selectedBusinessPaymethod) return;
    var updatedPaymethod = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === selectedBusinessPaymethod.paymethod_id;
    });
    setSelectedBusinessPaymethod(updatedPaymethod);
  }, [businessPaymethodsState === null || businessPaymethodsState === void 0 ? void 0 : businessPaymethodsState.paymethods, selectedBusinessPaymethod]);
  (0, _react.useEffect)(function () {
    if (paymethodsList.loading || businessPaymethodsState.loading) return;
    var paymethodId = query.get('paymethod');
    if (paymethodId) {
      var initPaymethod = paymethodsList.paymethods.find(function (paymethod) {
        return paymethod.id === Number(paymethodId);
      });
      if (initPaymethod) {
        handleOpenEdit(null, initPaymethod.id, initPaymethod.gateway, true);
      }
    }
  }, [paymethodsList.loading, businessPaymethodsState.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PaymentMethodsContainer, {
    isOpenWalletDetails: isOpenWalletDetails
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMETHODS', 'Payment methods')), /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllPaymethods();
    },
    disabled: paymethodsList.loading || businessPaymethodsState.loading
  }, t('SELECT_ALL', 'Select all'))), paymethodsList.loading || businessPaymethodsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.PaymethodOptionContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.PaymethodOption, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_styles2.PaymethodName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    }))));
  }) : /*#__PURE__*/_react.default.createElement(_styles2.PaymethodListWrapper, null, paymethodsList.paymethods.filter(function (paymethod) {
    var _paymethod$name;
    return paymethod === null || paymethod === void 0 || (_paymethod$name = paymethod.name) === null || _paymethod$name === void 0 ? void 0 : _paymethod$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
  }).map(function (paymethod) {
    var _paymethod$gateway;
    return /*#__PURE__*/_react.default.createElement(_styles2.PaymethodOptionContainer, {
      key: paymethod.id,
      onClick: function onClick(e) {
        return handleOpenEdit(e, paymethod.id, paymethod.gateway);
      },
      active: paymethod.id === (selectedBusinessPaymethod === null || selectedBusinessPaymethod === void 0 ? void 0 : selectedBusinessPaymethod.paymethod_id),
      disabled: isTutorialMode || !isCheckFoundBusinessPaymethod(paymethod.id)
    }, /*#__PURE__*/_react.default.createElement(_styles2.PaymethodOption, {
      className: "paymethod-checkbox",
      onClick: function onClick() {
        return handleClickCheckBox(paymethod.id);
      }
    }, isCheckEnableSate(paymethod.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.PaymethodName, null, t(paymethod === null || paymethod === void 0 || (_paymethod$gateway = paymethod.gateway) === null || _paymethod$gateway === void 0 ? void 0 : _paymethod$gateway.toUpperCase(), paymethod === null || paymethod === void 0 ? void 0 : paymethod.name)), !isTutorialMode && isCheckFoundBusinessPaymethod(paymethod.id) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }), isWalletCashEnabled && /*#__PURE__*/_react.default.createElement(_BusinessWalletsList.BusinessWalletsList, {
    business: business,
    setIsOpenWalletDetails: setIsOpenWalletDetails,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    isClose: isEdit,
    handleClosePaymethodDetails: handleCloseEdit,
    handleSuccessUpdate: handleSuccessUpdate
  })), isTutorialMode && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleTutorialContinue();
    }
  }, t('CONTINUE', 'Continue'))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEdit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !['stripe_direct', 'stripe_link', 'paypal', 'paypal_express', 'stripe_redirect', 'stripe_connect', 'square', 'credomatic'].concat(methodsPay).includes(selectedPaymethodGateway) && /*#__PURE__*/_react.default.createElement(_PaymentOption.PaymentOption, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption,
    deviceState: deviceState,
    selectedPaymethodGateway: selectedPaymethodGateway
  }), selectedPaymethodGateway === 'apple_pay' && /*#__PURE__*/_react.default.createElement(_PaymentOptionMethods.PaymentOptionMethods, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption,
    id: selectedPaymethodGateway,
    title: "Apple pay"
  }), selectedPaymethodGateway === 'google_pay' && /*#__PURE__*/_react.default.createElement(_PaymentOptionMethods.PaymentOptionMethods, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption,
    id: selectedPaymethodGateway,
    title: "Google pay"
  }), selectedPaymethodGateway === 'stripe_direct' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeDirect.PaymentOptionStripeDirect, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_link' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeLink.PaymentOptionStripeLink, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'paypal' && /*#__PURE__*/_react.default.createElement(_PaymentOptionPaypal.PaymentOptionPaypal, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'paypal_express' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionPaypalExpress.PaymethodOptionPaypalExpress, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_redirect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeRedirect.PaymethodOptionStripeRedirect, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeConnect.PaymethodOptionStripeConnect, {
    open: isEdit,
    sitesState: sitesState,
    business: business,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: stripeConnectData,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeStripeConnectData,
    actionState: actionState,
    handleStripeConnect: handleStripeConnect,
    handleChangeStripeInput: handleChangeStripeInput,
    handleStripeSave: handleStripeSave,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'square' && /*#__PURE__*/_react.default.createElement(_PaymentOptionSquare.PaymentOptionSquare, {
    open: isEdit,
    sitesState: sitesState,
    business: business,
    changesState: changesState,
    orderTypes: orderTypes,
    deviceState: deviceState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    businessPaymethods: businessPaymethodsState === null || businessPaymethodsState === void 0 ? void 0 : businessPaymethodsState.paymethods,
    handleSuccessPaymethodUpdate: handleSuccessPaymethodUpdate
  }), selectedPaymethodGateway === 'credomatic' && /*#__PURE__*/_react.default.createElement(_PaymentOptionCredomatic.PaymentOptionCredomatic, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEdit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    }
  }, !['stripe_direct', 'stripe_link', 'paypal', 'paypal_express', 'stripe_redirect', 'stripe_connect', 'square', 'credomatic'].includes(selectedPaymethodGateway) && /*#__PURE__*/_react.default.createElement(_PaymentOption.PaymentOption, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_direct' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeDirect.PaymentOptionStripeDirect, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_link' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeLink.PaymentOptionStripeLink, {
    sitesState: sitesState,
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'paypal' && /*#__PURE__*/_react.default.createElement(_PaymentOptionPaypal.PaymentOptionPaypal, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'paypal_express' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionPaypalExpress.PaymethodOptionPaypalExpress, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_redirect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeRedirect.PaymethodOptionStripeRedirect, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeConnect.PaymethodOptionStripeConnect, {
    open: isEdit,
    sitesState: sitesState,
    business: business,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleStripeConnect: handleStripeConnect,
    handleChangeStripeInput: handleChangeStripeInput,
    handleStripeSave: handleStripeSave,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  }), selectedPaymethodGateway === 'square' && /*#__PURE__*/_react.default.createElement(_PaymentOptionSquare.PaymentOptionSquare, {
    open: isEdit,
    sitesState: sitesState,
    business: business,
    changesState: changesState,
    orderTypes: orderTypes,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    businessPaymethods: businessPaymethodsState === null || businessPaymethodsState === void 0 ? void 0 : businessPaymethodsState.paymethods,
    handleSuccessPaymethodUpdate: handleSuccessPaymethodUpdate
  }), selectedPaymethodGateway === 'credomatic' && /*#__PURE__*/_react.default.createElement(_PaymentOptionCredomatic.PaymentOptionCredomatic, {
    open: isEdit,
    sitesState: sitesState,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    orderTypes: orderTypes,
    handleChangeBusinessPaymentState: handleChangeBusinessPaymentState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick,
    handleDeletePaymethod: handleDeleteBusinessPaymethodOption
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('PAYMETHODS', 'Payment methods'),
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
var BusinessPaymentMethods = exports.BusinessPaymentMethods = function BusinessPaymentMethods(props) {
  var businessPaymethodProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPaymentMethodsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPaymethods, businessPaymethodProps);
};