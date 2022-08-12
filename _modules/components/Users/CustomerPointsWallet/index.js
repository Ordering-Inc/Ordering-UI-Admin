"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerPointsWallet = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _CustomerWalletEvents = require("../CustomerWalletEvents");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var CustomerPointsWalletUI = function CustomerPointsWalletUI(props) {
  var _walletState$wallet, _user$loyalty_level$i, _user$loyalty_level, _user$loyalty_level2;

  var walletState = props.walletState,
      user = props.user;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)('points_wallet'),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('POINTS_WALLET', 'Points wallet')), /*#__PURE__*/_react.default.createElement(_styles.Tabs, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: showOption === 'points_wallet',
    onClick: function onClick() {
      return setShowOption('points_wallet');
    }
  }, t('POINTS_WALLET', 'Points wallet')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: showOption === 'history',
    onClick: function onClick() {
      return setShowOption('history');
    }
  }, t('TRANSACTION_HISTORY', 'Transaction history'))), showOption === 'points_wallet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, walletState !== null && walletState !== void 0 && walletState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PointsWalletContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PointsWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30,
    height: 15
  }))), /*#__PURE__*/_react.default.createElement(_styles.LoyaltyLevel, null, /*#__PURE__*/_react.default.createElement("h2", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_styles.LoyaltyLevelContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 23
  })))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PointsWalletContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PointsWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, ((_walletState$wallet = walletState.wallet) === null || _walletState$wallet === void 0 ? void 0 : _walletState$wallet.balance) || 0), /*#__PURE__*/_react.default.createElement("p", null, t('POINTS', 'Points'))), (user === null || user === void 0 ? void 0 : user.loyalty_level) && /*#__PURE__*/_react.default.createElement(_styles.LoyaltyLevel, null, /*#__PURE__*/_react.default.createElement("h2", null, t('LEVEL', 'Level')), /*#__PURE__*/_react.default.createElement(_styles.LoyaltyLevelContent, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_user$loyalty_level$i = user === null || user === void 0 ? void 0 : (_user$loyalty_level = user.loyalty_level) === null || _user$loyalty_level === void 0 ? void 0 : _user$loyalty_level.image) !== null && _user$loyalty_level$i !== void 0 ? _user$loyalty_level$i : theme.images.general.level,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, user === null || user === void 0 ? void 0 : (_user$loyalty_level2 = user.loyalty_level) === null || _user$loyalty_level2 === void 0 ? void 0 : _user$loyalty_level2.name)))))), showOption === 'history' && /*#__PURE__*/_react.default.createElement(_CustomerWalletEvents.CustomerWalletEvents, props));
};

var CustomerPointsWallet = function CustomerPointsWallet(props) {
  var customerPointsWalletProps = _objectSpread(_objectSpread({}, props), {}, {
    walletType: 'credit_point',
    UIComponent: CustomerPointsWalletUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserWallet, customerPointsWalletProps);
};

exports.CustomerPointsWallet = CustomerPointsWallet;