"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerPointsWallet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _CustomerWalletEvents = require("../CustomerWalletEvents");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomerPointsWalletUI = function CustomerPointsWalletUI(props) {
  var _walletState$wallet, _user$loyalty_level$i, _user$loyalty_level, _user$loyalty_level2;
  var walletState = props.walletState,
    user = props.user,
    handleChangeInput = props.handleChangeInput,
    actionState = props.actionState,
    addWalletState = props.addWalletState,
    reduceWalletState = props.reduceWalletState,
    handleAddWalletMoney = props.handleAddWalletMoney,
    handleReduceWalletMoney = props.handleReduceWalletMoney;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)('points_wallet'),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setShowOption(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(showOption);
    }
  }, []);
  var onAddWalletMoney = function onAddWalletMoney() {
    if (!(addWalletState !== null && addWalletState !== void 0 && addWalletState.amount)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      });
      return;
    }
    handleAddWalletMoney();
  };
  var onReduceWalletMoney = function onReduceWalletMoney() {
    if (!(reduceWalletState !== null && reduceWalletState !== void 0 && reduceWalletState.amount)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      });
      return;
    }
    handleReduceWalletMoney();
  };
  (0, _react.useEffect)(function () {
    if (actionState.loading || !actionState.error) return;
    setAlertState({
      open: true,
      content: actionState.error
    });
  }, [actionState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('POINTS_WALLET', 'Points wallet')), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'points_wallet',
    onClick: function onClick() {
      return handleTabClick('points_wallet');
    }
  }, t('POINTS_WALLET', 'Points wallet')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'history',
    onClick: function onClick() {
      return handleTabClick('history');
    }
  }, t('TRANSACTION_HISTORY', 'Transaction history'))), showOption === 'points_wallet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, walletState !== null && walletState !== void 0 && walletState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsWalletContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30,
    height: 15
  }))), /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyLevel, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyLevelContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 23
  })))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsWalletContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, ((_walletState$wallet = walletState.wallet) === null || _walletState$wallet === void 0 ? void 0 : _walletState$wallet.balance) || 0), /*#__PURE__*/_react.default.createElement("p", null, t('POINTS', 'Points'))), (user === null || user === void 0 ? void 0 : user.loyalty_level) && /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyLevel, null, /*#__PURE__*/_react.default.createElement("h2", null, t('LEVEL', 'Level')), /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyLevelContent, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_user$loyalty_level$i = user === null || user === void 0 || (_user$loyalty_level = user.loyalty_level) === null || _user$loyalty_level === void 0 ? void 0 : _user$loyalty_level.image) !== null && _user$loyalty_level$i !== void 0 ? _user$loyalty_level$i : theme.images.general.level,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, user === null || user === void 0 || (_user$loyalty_level2 = user.loyalty_level) === null || _user$loyalty_level2 === void 0 ? void 0 : _user$loyalty_level2.name))), /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ADD_WALLET_MONEY', 'Add wallet money')), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('INDICATE_THE_AMOUNT_TO_ADD', 'Indicate the amount to add')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "amount",
    placeholder: t('POINTS', 'Points'),
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (addWalletState === null || addWalletState === void 0 ? void 0 : addWalletState.amount) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 3,
    value: (addWalletState === null || addWalletState === void 0 ? void 0 : addWalletState.description) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    },
    placeholder: t('WRITE_SHORT_COMMENT', 'Write a short comment')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onAddWalletMoney();
    },
    disabled: actionState.loading || Object.keys(addWalletState).length === 0
  }, t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('REDUCE_WALLET_MONEY', 'Reduce wallet money')), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('INDICATE_THE_AMOUNT_TO_REDUCE', 'Indicate the amount to reduce')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "amount",
    placeholder: t('POINTS', 'Points'),
    value: (reduceWalletState === null || reduceWalletState === void 0 ? void 0 : reduceWalletState.amount) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 3,
    name: "description",
    value: (reduceWalletState === null || reduceWalletState === void 0 ? void 0 : reduceWalletState.description) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    },
    placeholder: t('WRITE_SHORT_COMMENT', 'Write a short comment')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "black",
    onClick: function onClick() {
      return onReduceWalletMoney();
    },
    disabled: actionState.loading || Object.keys(reduceWalletState).length === 0
  }, t('REDUCE', 'Reduce')))))), showOption === 'history' && /*#__PURE__*/_react.default.createElement(_CustomerWalletEvents.CustomerWalletEvents, props), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "800px",
    title: t('LOGIN'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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
var CustomerPointsWallet = function CustomerPointsWallet(props) {
  var customerPointsWalletProps = _objectSpread(_objectSpread({}, props), {}, {
    walletType: 'credit_point',
    UIComponent: CustomerPointsWalletUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserWallet, customerPointsWalletProps);
};
exports.CustomerPointsWallet = CustomerPointsWallet;