"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionSquare = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _styles2 = require("../BusinessMenu/styles");
var _styles3 = require("../PaymentOptionStripeDirect/styles");
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _SiSquare = _interopRequireDefault(require("@meronex/icons/si/SiSquare"));
var _utils = require("../../../utils");
var _styles4 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var PaymentOptionSquareUI = function PaymentOptionSquareUI(props) {
  var _businessPaymethod$pa2, _businessPaymethod$pa3, _sitesState$sites, _ref2, _squareData$sandbox, _ref3, _squareData$data$appl, _squareData$data, _businessPaymethod$da, _ref4, _squareData$data$loca, _squareData$data2, _businessPaymethod$da2, _ref5, _squareData$data$clie, _squareData$data3, _businessPaymethod$da3, _ref6, _squareData$data_sand, _squareData$data_sand2, _businessPaymethod$da4, _ref7, _squareData$data_sand3, _squareData$data_sand4, _businessPaymethod$da5, _ref8, _squareData$data_sand5, _squareData$data_sand6, _businessPaymethod$da6, _sitesState$sites2, _deviceState$devices, _deviceState$devices2;
  var open = props.open,
    onClose = props.onClose,
    businessPaymethod = props.businessPaymethod,
    handleDeletePaymethod = props.handleDeletePaymethod,
    sitesState = props.sitesState,
    changesState = props.changesState,
    orderTypes = props.orderTypes,
    handleChangeBusinessPaymentState = props.handleChangeBusinessPaymentState,
    actionState = props.actionState,
    handleConnectSquare = props.handleConnectSquare,
    squareData = props.squareData,
    handleSavePaymethod = props.handleSavePaymethod,
    handleChangeDataInput = props.handleChangeDataInput,
    handleChangeSanboxDataInput = props.handleChangeSanboxDataInput,
    handleChangeSandbox = props.handleChangeSandbox,
    deviceState = props.deviceState,
    EmptyMessage = props.EmptyMessage;
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
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    paymentTabs = _useState8[0],
    setPaymentTabs = _useState8[1];
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }
    setIsMenuOpen(value);
  };
  var setPaymethodInfo = function setPaymethodInfo(values) {
    var _ref, _changesState$values$, _businessPaymethod$va;
    var data = {};
    var array = (_ref = (_changesState$values$ = changesState === null || changesState === void 0 ? void 0 : changesState[values.key]) !== null && _changesState$values$ !== void 0 ? _changesState$values$ : values.key === 'allowed_order_types' ? businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod[values.key] : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$va = businessPaymethod[values.key]) === null || _businessPaymethod$va === void 0 ? void 0 : _businessPaymethod$va.map(function (i) {
      return i.id;
    })) !== null && _ref !== void 0 ? _ref : [];
    array = _toConsumableArray(new Set(array.includes(values.value) ? array.filter(function (item) {
      return item !== values.value;
    }) : [].concat(_toConsumableArray(array), [values.value])));
    data[values.key] = array.length > 0 ? array : [];
    handleChangeBusinessPaymentState(data);
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
        document.getElementById('payment_method_square').style.width = '100%';
      } else {
        document.getElementById('payment_method_square').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles4.Container, {
    id: "payment_method_square"
  }, /*#__PURE__*/_react.default.createElement(_styles4.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t(businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$pa2 = businessPaymethod.paymethod) === null || _businessPaymethod$pa2 === void 0 || (_businessPaymethod$pa2 = _businessPaymethod$pa2.gateway) === null || _businessPaymethod$pa2 === void 0 ? void 0 : _businessPaymethod$pa2.toUpperCase(), businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$pa3 = businessPaymethod.paymethod) === null || _businessPaymethod$pa3 === void 0 ? void 0 : _businessPaymethod$pa3.name)), /*#__PURE__*/_react.default.createElement(_styles4.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeletePaymethod();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles4.CloseButton, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: paymentTabs === 0,
    onClick: function onClick() {
      return handleTabClick(0);
    }
  }, t('GENERAL', 'General')), (sitesState === null || sitesState === void 0 || (_sitesState$sites = sitesState.sites) === null || _sitesState$sites === void 0 ? void 0 : _sitesState$sites.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: paymentTabs === 1,
    onClick: function onClick() {
      return handleTabClick(1);
    }
  }, t('CHANNELS', 'Channels')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: paymentTabs === 2,
    onClick: function onClick() {
      return handleTabClick(2);
    }
  }, t('ORDER_TYPE', 'Order type')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: paymentTabs === 3,
    onClick: function onClick() {
      return handleTabClick(3);
    }
  }, t('DEVICES', 'Devices'))), paymentTabs === 0 && /*#__PURE__*/_react.default.createElement(_styles4.SquareInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles4.SquareButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: handleConnectSquare
  }, /*#__PURE__*/_react.default.createElement(_SiSquare.default, null), t('CONNECT_WITH_SQUARE', 'Connect with Square'))), /*#__PURE__*/_react.default.createElement(_styles4.FormContainer, null, /*#__PURE__*/_react.default.createElement(_styles4.SandboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_ref2 = (_squareData$sandbox = squareData === null || squareData === void 0 ? void 0 : squareData.sandbox) !== null && _squareData$sandbox !== void 0 ? _squareData$sandbox : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox) !== null && _ref2 !== void 0 ? _ref2 : false,
    onChange: function onChange(e) {
      return handleChangeSandbox(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('SANDBOX', 'Sandbox'))), /*#__PURE__*/_react.default.createElement(_styles4.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('APPLICATION_ID', 'Application Id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "application_id",
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading,
    value: (_ref3 = (_squareData$data$appl = squareData === null || squareData === void 0 || (_squareData$data = squareData.data) === null || _squareData$data === void 0 ? void 0 : _squareData$data.application_id) !== null && _squareData$data$appl !== void 0 ? _squareData$data$appl : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da = businessPaymethod.data) === null || _businessPaymethod$da === void 0 ? void 0 : _businessPaymethod$da.application_id) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeDataInput
  })), /*#__PURE__*/_react.default.createElement(_styles4.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('LOCATION_ID', 'Location Id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "location_id",
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading,
    value: (_ref4 = (_squareData$data$loca = squareData === null || squareData === void 0 || (_squareData$data2 = squareData.data) === null || _squareData$data2 === void 0 ? void 0 : _squareData$data2.location_id) !== null && _squareData$data$loca !== void 0 ? _squareData$data$loca : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da2 = businessPaymethod.data) === null || _businessPaymethod$da2 === void 0 ? void 0 : _businessPaymethod$da2.location_id) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: handleChangeDataInput
  })), /*#__PURE__*/_react.default.createElement(_styles4.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('CLIENT_SECRET', 'Client secret')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "client_secret",
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading,
    value: (_ref5 = (_squareData$data$clie = squareData === null || squareData === void 0 || (_squareData$data3 = squareData.data) === null || _squareData$data3 === void 0 ? void 0 : _squareData$data3.client_secret) !== null && _squareData$data$clie !== void 0 ? _squareData$data$clie : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da3 = businessPaymethod.data) === null || _businessPaymethod$da3 === void 0 ? void 0 : _businessPaymethod$da3.client_secret) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: handleChangeDataInput
  })), /*#__PURE__*/_react.default.createElement(_styles4.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('APPLICATION_ID', 'Application Id'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "application_id",
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading,
    value: (_ref6 = (_squareData$data_sand = squareData === null || squareData === void 0 || (_squareData$data_sand2 = squareData.data_sandbox) === null || _squareData$data_sand2 === void 0 ? void 0 : _squareData$data_sand2.application_id) !== null && _squareData$data_sand !== void 0 ? _squareData$data_sand : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da4 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da4 === void 0 ? void 0 : _businessPaymethod$da4.application_id) !== null && _ref6 !== void 0 ? _ref6 : '',
    onChange: handleChangeSanboxDataInput
  })), /*#__PURE__*/_react.default.createElement(_styles4.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('LOCATION_ID', 'Location Id'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "location_id",
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading,
    value: (_ref7 = (_squareData$data_sand3 = squareData === null || squareData === void 0 || (_squareData$data_sand4 = squareData.data_sandbox) === null || _squareData$data_sand4 === void 0 ? void 0 : _squareData$data_sand4.location_id) !== null && _squareData$data_sand3 !== void 0 ? _squareData$data_sand3 : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da5 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da5 === void 0 ? void 0 : _businessPaymethod$da5.location_id) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: handleChangeSanboxDataInput
  })), /*#__PURE__*/_react.default.createElement(_styles4.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('CLIENT_SECRET', 'Client secret'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "client_secret",
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading,
    value: (_ref8 = (_squareData$data_sand5 = squareData === null || squareData === void 0 || (_squareData$data_sand6 = squareData.data_sandbox) === null || _squareData$data_sand6 === void 0 ? void 0 : _squareData$data_sand6.client_secret) !== null && _squareData$data_sand5 !== void 0 ? _squareData$data_sand5 : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$da6 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da6 === void 0 ? void 0 : _businessPaymethod$da6.client_secret) !== null && _ref8 !== void 0 ? _ref8 : '',
    onChange: handleChangeSanboxDataInput
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleSavePaymethod(businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.id);
    }
  }, t('SAVE', 'Save')))), paymentTabs === 1 && (sitesState === null || sitesState === void 0 || (_sitesState$sites2 = sitesState.sites) === null || _sitesState$sites2 === void 0 ? void 0 : _sitesState$sites2.length) > 0 && (sitesState === null || sitesState === void 0 ? void 0 : sitesState.sites.map(function (site) {
    var _ref9, _changesState$sites, _businessPaymethod$si;
    return /*#__PURE__*/_react.default.createElement(_styles3.TabOption, {
      key: site.id,
      onClick: function onClick() {
        return setPaymethodInfo({
          key: 'sites',
          value: site.id
        });
      }
    }, (_ref9 = (_changesState$sites = changesState === null || changesState === void 0 ? void 0 : changesState.sites) !== null && _changesState$sites !== void 0 ? _changesState$sites : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$si = businessPaymethod.sites) === null || _businessPaymethod$si === void 0 ? void 0 : _businessPaymethod$si.map(function (s) {
      return s.id;
    })) !== null && _ref9 !== void 0 && _ref9.includes(site.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles3.TabOptionName, null, site.name));
  })), paymentTabs === 2 && orderTypes.map(function (type) {
    var _ref10, _changesState$allowed;
    return /*#__PURE__*/_react.default.createElement(_styles3.TabOption, {
      key: type.value,
      onClick: function onClick() {
        return setPaymethodInfo({
          key: 'allowed_order_types',
          value: type.value
        });
      }
    }, (_ref10 = (_changesState$allowed = changesState === null || changesState === void 0 ? void 0 : changesState.allowed_order_types) !== null && _changesState$allowed !== void 0 ? _changesState$allowed : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.allowed_order_types) !== null && _ref10 !== void 0 && _ref10.includes(type.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles3.TabOptionName, null, type.text));
  }), paymentTabs === 3 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (deviceState === null || deviceState === void 0 || (_deviceState$devices = deviceState.devices) === null || _deviceState$devices === void 0 ? void 0 : _deviceState$devices.length) > 0 && (deviceState === null || deviceState === void 0 ? void 0 : deviceState.devices.map(function (device) {
    var _ref11, _changesState$devices, _businessPaymethod$de;
    return /*#__PURE__*/_react.default.createElement(_styles3.TabOption, {
      key: device.id,
      onClick: function onClick() {
        return setPaymethodInfo({
          key: 'devices',
          value: device.id
        });
      }
    }, (_ref11 = (_changesState$devices = changesState === null || changesState === void 0 ? void 0 : changesState.devices) !== null && _changesState$devices !== void 0 ? _changesState$devices : businessPaymethod === null || businessPaymethod === void 0 || (_businessPaymethod$de = businessPaymethod.devices) === null || _businessPaymethod$de === void 0 ? void 0 : _businessPaymethod$de.map(function (s) {
      return s.id;
    })) !== null && _ref11 !== void 0 && _ref11.includes(device.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles3.TabOptionName, null, device.name));
  })), (deviceState === null || deviceState === void 0 || (_deviceState$devices2 = deviceState.devices) === null || _deviceState$devices2 === void 0 ? void 0 : _deviceState$devices2.length) === 0 && /*#__PURE__*/_react.default.createElement(EmptyMessage, null, t('NO_ASSIGNED_DEVICES', 'There are no assigned devices'))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  })));
};
var PaymentOptionSquare = function PaymentOptionSquare(props) {
  var paymentOptionSquareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionSquareUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PaymentOptionSquare, paymentOptionSquareProps);
};
exports.PaymentOptionSquare = PaymentOptionSquare;