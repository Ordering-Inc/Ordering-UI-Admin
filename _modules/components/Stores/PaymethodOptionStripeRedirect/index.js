"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymethodOptionStripeRedirect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _styles = require("../../../styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _styles3 = require("../BusinessMenu/styles");
var _styles4 = require("../PaymentOptionStripeDirect/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PaymethodOptionStripeRedirect = exports.PaymethodOptionStripeRedirect = function PaymethodOptionStripeRedirect(props) {
  var _localState$sites, _businessPaymethod$si, _sitesState$sites2, _ref2, _changesState$sandbox, _changesState$data, _changesState$data2, _businessPaymethod$da, _changesState$data3, _changesState$data4, _businessPaymethod$da2, _changesState$data_sa, _changesState$data_sa2, _businessPaymethod$da3, _changesState$data_sa3, _changesState$data_sa4, _businessPaymethod$da4, _sitesState$sites3;
  var open = props.open,
    onClose = props.onClose,
    changesState = props.changesState,
    cleanChangesState = props.cleanChangesState,
    actionState = props.actionState,
    sitesState = props.sitesState,
    handleChangeSandbox = props.handleChangeSandbox,
    handleChangeInput = props.handleChangeInput,
    handleSaveClick = props.handleSaveClick,
    businessPaymethod = props.businessPaymethod,
    orderTypes = props.orderTypes,
    handleChangeBusinessPaymentState = props.handleChangeBusinessPaymentState,
    handleDeletePaymethod = props.handleDeletePaymethod;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
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
  var _useState3 = (0, _react.useState)(0),
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
  var _useState7 = (0, _react.useState)({
      allowed_order_types: businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types,
      sites: businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sites
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    localState = _useState8[0],
    setLocalState = _useState8[1];
  var filteredOptions = (_localState$sites = localState === null || localState === void 0 ? void 0 : localState.sites) !== null && _localState$sites !== void 0 ? _localState$sites : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$si = businessPaymethod.sites) === null || _businessPaymethod$si === void 0 ? void 0 : _businessPaymethod$si.filter(function (a) {
    var _sitesState$sites;
    return sitesState === null || sitesState === void 0 || (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.find(function (b) {
      return a.id === b.id;
    });
  });
  var _useState9 = (0, _react.useState)(!(filteredOptions !== null && filteredOptions !== void 0 && filteredOptions.length)),
    _useState10 = _slicedToArray(_useState9, 2),
    all = _useState10[0],
    setAll = _useState10[1];
  var setPaymethodInfo = function setPaymethodInfo(values) {
    var data = {};
    if ((values === null || values === void 0 ? void 0 : values.value) === 'All') {
      data[values.key] = [];
      setAll(!all);
    } else {
      var _ref, _changesState$values$, _businessPaymethod$va;
      var array = (_ref = (_changesState$values$ = changesState === null || changesState === void 0 ? void 0 : changesState[values.key]) !== null && _changesState$values$ !== void 0 ? _changesState$values$ : values.key === 'allowed_order_types' ? businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod[values.key] : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$va = businessPaymethod[values.key]) === null || _businessPaymethod$va === void 0 ? void 0 : _businessPaymethod$va.map(function (i) {
        return i.id;
      })) !== null && _ref !== void 0 ? _ref : [];
      array = _toConsumableArray(new Set(array.includes(values.value) ? array.filter(function (item) {
        return item !== values.value;
      }) : [].concat(_toConsumableArray(array), [values.value])));
      data[values.key] = array.length > 0 ? array : [];
      if (values.key === 'sites') {
        var _data$sites;
        setAll(!(data !== null && data !== void 0 && (_data$sites = data.sites) !== null && _data$sites !== void 0 && _data$sites.length));
      }
    }
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
        handleDeletePaymethod(businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$pa = businessPaymethod.paymethod) === null || _businessPaymethod$pa === void 0 ? void 0 : _businessPaymethod$pa.id);
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('stripe_redirect').style.width = '100%';
      } else {
        document.getElementById('stripe_redirect').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    var initState = {
      sandbox: businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox,
      allowed_order_types: (businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types) || [1, 2, 3, 4, 5]
    };
    if (businessPaymethod !== null && businessPaymethod !== void 0 && businessPaymethod.data) {
      initState.data = businessPaymethod.data;
    }
    if (businessPaymethod !== null && businessPaymethod !== void 0 && businessPaymethod.data_sandbox) {
      initState.data_sandbox = businessPaymethod.data_sandbox;
    }
    cleanChangesState(initState);
  }, []);
  (0, _react.useEffect)(function () {
    var changes = {};
    if (changesState !== null && changesState !== void 0 && changesState.allowed_order_types) changes.allowed_order_types = changesState === null || changesState === void 0 ? void 0 : changesState.allowed_order_types;
    if (changesState !== null && changesState !== void 0 && changesState.sites) changes.sites = changesState === null || changesState === void 0 ? void 0 : changesState.sites;
    if (Object.keys(changes).length > 0) setLocalState(JSON.parse(JSON.stringify(changes)));
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.sites, changesState === null || changesState === void 0 ? void 0 : changesState.allowed_order_types]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setPaymentTabs(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        payemthod_tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var payemthodTab = query.get('payemthod_tab');
    if (payemthodTab) {
      handleTabClick(Number(payemthodTab), true);
    } else {
      handleTabClick(0);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "stripe_redirect"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('STRIPE_REDIRECT', 'Stripe redirect')), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeletePaymethod();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles2.CloseButton, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles3.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_styles3.Tab, {
    active: paymentTabs === 0,
    onClick: function onClick() {
      return handleTabClick(0);
    }
  }, t('GENERAL', 'General')), (sitesState === null || sitesState === void 0 || (_sitesState$sites2 = sitesState.sites) === null || _sitesState$sites2 === void 0 ? void 0 : _sitesState$sites2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles3.Tab, {
    active: paymentTabs === 1,
    onClick: function onClick() {
      return handleTabClick(1);
    }
  }, t('CHANNELS', 'Channels')), /*#__PURE__*/_react.default.createElement(_styles3.Tab, {
    active: paymentTabs === 2,
    onClick: function onClick() {
      return handleTabClick(2);
    }
  }, t('ORDER_TYPE', 'Order type'))), paymentTabs === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SandboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_ref2 = (_changesState$sandbox = changesState === null || changesState === void 0 ? void 0 : changesState.sandbox) !== null && _changesState$sandbox !== void 0 ? _changesState$sandbox : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox) !== null && _ref2 !== void 0 ? _ref2 : false,
    onChange: function onChange(e) {
      return handleChangeSandbox(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('SANDBOX', 'Sandbox'))), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('PUBLISHABLE_KEY', 'Publishable key')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "publishable",
    defaultValue: changesState !== null && changesState !== void 0 && (_changesState$data = changesState.data) !== null && _changesState$data !== void 0 && _changesState$data.publishable ? changesState === null || changesState === void 0 || (_changesState$data2 = changesState.data) === null || _changesState$data2 === void 0 ? void 0 : _changesState$data2.publishable : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da = businessPaymethod.data) === null || _businessPaymethod$da === void 0 ? void 0 : _businessPaymethod$da.publishable,
    placeholder: t('PUBLISHABLE_KEY', 'Publishable key'),
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('SECRET_KEY', 'Secret key')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "secret",
    defaultValue: changesState !== null && changesState !== void 0 && (_changesState$data3 = changesState.data) !== null && _changesState$data3 !== void 0 && _changesState$data3.secret ? changesState === null || changesState === void 0 || (_changesState$data4 = changesState.data) === null || _changesState$data4 === void 0 ? void 0 : _changesState$data4.secret : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da2 = businessPaymethod.data) === null || _businessPaymethod$da2 === void 0 ? void 0 : _businessPaymethod$da2.secret,
    placeholder: t('SECRET_KEY', 'Secret key'),
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('PUBLISHABLE_KEY', 'Publishable key'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "publishable",
    defaultValue: changesState !== null && changesState !== void 0 && (_changesState$data_sa = changesState.data_sandbox) !== null && _changesState$data_sa !== void 0 && _changesState$data_sa.publishable ? changesState === null || changesState === void 0 || (_changesState$data_sa2 = changesState.data_sandbox) === null || _changesState$data_sa2 === void 0 ? void 0 : _changesState$data_sa2.publishable : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da3 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da3 === void 0 ? void 0 : _businessPaymethod$da3.publishable,
    placeholder: "".concat(t('PUBLISHABLE_KEY', 'Publishable key'), " (").concat(t('SANDBOX', 'Sandbox'), ")"),
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.FieldName, null, t('SECRECT_KEY', 'Secret key'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "secret",
    defaultValue: changesState !== null && changesState !== void 0 && (_changesState$data_sa3 = changesState.data_sandbox) !== null && _changesState$data_sa3 !== void 0 && _changesState$data_sa3.secret ? changesState === null || changesState === void 0 || (_changesState$data_sa4 = changesState.data_sandbox) === null || _changesState$data_sa4 === void 0 ? void 0 : _changesState$data_sa4.secret : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da4 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da4 === void 0 ? void 0 : _businessPaymethod$da4.secret,
    placeholder: "".concat(t('SECRECT_KEY', 'Secret key'), " (").concat(t('SANDBOX', 'Sandbox'), ")"),
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  })), paymentTabs === 1 && (sitesState === null || sitesState === void 0 || (_sitesState$sites3 = sitesState.sites) === null || _sitesState$sites3 === void 0 ? void 0 : _sitesState$sites3.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles4.TabOption, {
    key: "all",
    onClick: function onClick() {
      return setPaymethodInfo({
        key: 'sites',
        value: 'All'
      });
    }
  }, all ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles4.TabOptionName, null, t('ALL', 'All'))), !all && (sitesState === null || sitesState === void 0 ? void 0 : sitesState.sites.map(function (site) {
    var _ref3, _localState$sites2, _businessPaymethod$si2;
    return /*#__PURE__*/_react.default.createElement(_styles4.TabOption, {
      key: site.id,
      onClick: function onClick() {
        return setPaymethodInfo({
          key: 'sites',
          value: site.id
        });
      }
    }, (_ref3 = (_localState$sites2 = localState === null || localState === void 0 ? void 0 : localState.sites) !== null && _localState$sites2 !== void 0 ? _localState$sites2 : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$si2 = businessPaymethod.sites) === null || _businessPaymethod$si2 === void 0 ? void 0 : _businessPaymethod$si2.map(function (s) {
      return s.id;
    })) !== null && _ref3 !== void 0 && _ref3.includes(site.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles4.TabOptionName, null, site.name));
  }))), paymentTabs === 2 && orderTypes.map(function (type) {
    var _ref4, _localState$allowed_o;
    return /*#__PURE__*/_react.default.createElement(_styles4.TabOption, {
      key: type.value,
      onClick: function onClick() {
        return setPaymethodInfo({
          key: 'allowed_order_types',
          value: type.value
        });
      }
    }, (_ref4 = (_localState$allowed_o = localState === null || localState === void 0 ? void 0 : localState.allowed_order_types) !== null && _localState$allowed_o !== void 0 ? _localState$allowed_o : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types) !== null && _ref4 !== void 0 && _ref4.includes(type.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles4.TabOptionName, null, type.text));
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