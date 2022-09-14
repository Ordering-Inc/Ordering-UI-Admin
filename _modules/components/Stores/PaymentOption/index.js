"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _styles = require("../../../styles");

var _useWindowSize2 = require("../../../hooks/useWindowSize");

var _styles2 = require("../BusinessMenu/styles");

var _styledComponents = require("styled-components");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactBootstrap = require("react-bootstrap");

var _Shared = require("../../Shared");

var _styles3 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PaymentOption = function PaymentOption(props) {
  var _sitesState$sites, _businessPaymethod$pa2, _sitesState$sites3, _sitesState$sites4;

  var open = props.open,
      onClose = props.onClose,
      orderTypes = props.orderTypes,
      sitesState = props.sitesState,
      changesState = props.changesState,
      handleChangeBusinessPaymentState = props.handleChangeBusinessPaymentState,
      cleanChangesState = props.cleanChangesState,
      actionState = props.actionState,
      handleSaveClick = props.handleSaveClick,
      businessPaymethod = props.businessPaymethod,
      handleDeletePaymethod = props.handleDeletePaymethod,
      isDisabledPaymentsAdvanced = props.isDisabledPaymentsAdvanced;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)((sitesState === null || sitesState === void 0 ? void 0 : (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.length) > 0 ? 0 : 1),
      _useState4 = _slicedToArray(_useState3, 2),
      paymentTabs = _useState4[0],
      setPaymentTabs = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      confirm = _useState6[0],
      setConfirm = _useState6[1];

  var setPaymethodInfo = function setPaymethodInfo(values) {
    var _ref, _changesState$values$, _businessPaymethod$va;

    var data = {};
    var array = (_ref = (_changesState$values$ = changesState === null || changesState === void 0 ? void 0 : changesState[values.key]) !== null && _changesState$values$ !== void 0 ? _changesState$values$ : values.key === 'allowed_order_types' ? businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod[values.key] : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$va = businessPaymethod[values.key]) === null || _businessPaymethod$va === void 0 ? void 0 : _businessPaymethod$va.map(function (i) {
      return i.id;
    })) !== null && _ref !== void 0 ? _ref : [];
    array = _toConsumableArray(new Set(array.includes(values.value) ? array.filter(function (item) {
      return item !== values.value;
    }) : [].concat(_toConsumableArray(array), [values.value])));
    data[values.key] = array.length > 0 ? array : [];
    handleChangeBusinessPaymentState(data);
  };

  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }

    setIsMenuOpen(value);
  };

  var onClickDeletePaymethod = function onClickDeletePaymethod() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PAYMETHOD_ID', 'Paymethod')),
      handleOnAccept: function handleOnAccept() {
        var _businessPaymethod$pa;

        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePaymethod(businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$pa = businessPaymethod.paymethod) === null || _businessPaymethod$pa === void 0 ? void 0 : _businessPaymethod$pa.id);
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('payment_method_option').style.width = '100%';
      } else {
        document.getElementById('payment_method_option').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    var _sitesState$sites2;

    setPaymentTabs((sitesState === null || sitesState === void 0 ? void 0 : (_sitesState$sites2 = sitesState.sites) === null || _sitesState$sites2 === void 0 ? void 0 : _sitesState$sites2.length) > 0 ? 0 : 1);
  }, [sitesState]);
  (0, _react.useEffect)(function () {
    cleanChangesState({
      sandbox: businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox,
      allowed_order_types: (businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types) || [1, 2, 3, 4, 5]
    });
  }, [businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.id, businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox, businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles3.Container, {
    id: "payment_method_option"
  }, /*#__PURE__*/_react.default.createElement(_styles3.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$pa2 = businessPaymethod.paymethod) === null || _businessPaymethod$pa2 === void 0 ? void 0 : _businessPaymethod$pa2.name), /*#__PURE__*/_react.default.createElement(_styles3.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeletePaymethod();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles3.CloseButton, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, (sitesState === null || sitesState === void 0 ? void 0 : (_sitesState$sites3 = sitesState.sites) === null || _sitesState$sites3 === void 0 ? void 0 : _sitesState$sites3.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: paymentTabs === 0,
    onClick: function onClick() {
      return !isDisabledPaymentsAdvanced && setPaymentTabs(0);
    },
    disabledFeature: isDisabledPaymentsAdvanced,
    title: isDisabledPaymentsAdvanced ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''
  }, t('CHANNELS', 'Channels')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: paymentTabs === 1,
    onClick: function onClick() {
      return !isDisabledPaymentsAdvanced && setPaymentTabs(1);
    },
    disabledFeature: isDisabledPaymentsAdvanced,
    title: isDisabledPaymentsAdvanced ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''
  }, t('ORDER_TYPE', 'Order type'))), paymentTabs === 0 && (sitesState === null || sitesState === void 0 ? void 0 : (_sitesState$sites4 = sitesState.sites) === null || _sitesState$sites4 === void 0 ? void 0 : _sitesState$sites4.length) > 0 && (sitesState === null || sitesState === void 0 ? void 0 : sitesState.sites.map(function (site) {
    var _ref2, _changesState$sites, _businessPaymethod$si;

    return /*#__PURE__*/_react.default.createElement(_styles3.TabOption, {
      key: site.id,
      disabledFeature: isDisabledPaymentsAdvanced,
      onClick: function onClick() {
        return !isDisabledPaymentsAdvanced && setPaymethodInfo({
          key: 'sites',
          value: site.id
        });
      }
    }, (_ref2 = (_changesState$sites = changesState === null || changesState === void 0 ? void 0 : changesState.sites) !== null && _changesState$sites !== void 0 ? _changesState$sites : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$si = businessPaymethod.sites) === null || _businessPaymethod$si === void 0 ? void 0 : _businessPaymethod$si.map(function (s) {
      return s.id;
    })) !== null && _ref2 !== void 0 && _ref2.includes(site.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles3.TabOptionName, null, site.name));
  })), paymentTabs === 1 && orderTypes.map(function (type) {
    var _ref3, _changesState$allowed;

    return /*#__PURE__*/_react.default.createElement(_styles3.TabOption, {
      key: type.value,
      onClick: function onClick() {
        return setPaymethodInfo({
          key: 'allowed_order_types',
          value: type.value
        });
      }
    }, (_ref3 = (_changesState$allowed = changesState === null || changesState === void 0 ? void 0 : changesState.allowed_order_types) !== null && _changesState$allowed !== void 0 ? _changesState$allowed : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types) !== null && _ref3 !== void 0 && _ref3.includes(type.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles3.TabOptionName, null, type.text));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "5px",
    color: "primary",
    disabled: actionState.loading || Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return handleSaveClick(businessPaymethod.id);
    }
  }, actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};

exports.PaymentOption = PaymentOption;