"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessWalletsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _utils = require("../../../utils");
var _styles = require("./styles");
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
var BusinessWalletsListUI = function BusinessWalletsListUI(props) {
  var _configs$wallet_cash_, _configs$wallet_credi;
  var loyaltyPlanState = props.loyaltyPlanState,
    walletsListState = props.walletsListState,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    setIsOpenWalletDetails = props.setIsOpenWalletDetails,
    isClose = props.isClose,
    handleClosePaymethodDetails = props.handleClosePaymethodDetails,
    handleUpdateWallet = props.handleUpdateWallet;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenDetails = _useState2[0],
    setIsOpenDetails = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentConfig = _useState4[0],
    setCurrentConfig = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    options = _useState6[0],
    setOptions = _useState6[1];
  var isWalletCashEnabled = (configs === null || configs === void 0 || (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1';
  var isWalletPointsEnabled = (configs === null || configs === void 0 || (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1';
  var walletsEnabled = {
    wallet_cash_enabled: isWalletCashEnabled,
    wallet_credit_point_enabled: isWalletPointsEnabled && loyaltyPlanState.created
  };
  var walletsLangs = {
    wallet_cash_enabled: t('WALLET_CASH_ENABLED', 'Wallet cash enabled'),
    wallet_credit_point_enabled: t('WALLET_CREDIT_POINT_ENABLED', 'Wallet credit point enabled')
  };
  var handleOpenWallet = function handleOpenWallet(config, isInitialRender) {
    setIsOpenWalletDetails(true);
    handleClosePaymethodDetails();
    setCurrentConfig(config);
    setIsExtendExtraOpen(true);
    setIsOpenDetails(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        wallet: config.id
      });
    }
  };
  var handleCloseWallet = function handleCloseWallet() {
    setIsOpenWalletDetails(false);
    setIsOpenDetails(false);
    setIsExtendExtraOpen(false);
    setCurrentConfig(null);
    (0, _utils.removeQueryToUrl)(['wallet']);
  };
  (0, _react.useEffect)(function () {
    var _currentConfig$option;
    if (!isOpenDetails || !(currentConfig !== null && currentConfig !== void 0 && currentConfig.options)) return;
    var selectedTypes = (_currentConfig$option = currentConfig.options) === null || _currentConfig$option === void 0 ? void 0 : _currentConfig$option.map(function (item) {
      return {
        value: item.value,
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t(item.text.toUpperCase()))
      };
    });
    setOptions(selectedTypes);
  }, [currentConfig, isOpenDetails]);
  (0, _react.useEffect)(function () {
    if (!isClose) return;
    setIsOpenWalletDetails(false);
    setIsOpenDetails(false);
    setCurrentConfig(null);
  }, [isClose]);
  (0, _react.useEffect)(function () {
    if (loyaltyPlanState.loading || walletsListState.loading) return;
    var walletId = query.get('wallet');
    if (walletId) {
      var initWallet = walletsListState.wallets.find(function (wallet) {
        return wallet.id === Number(walletId);
      });
      if (initWallet) {
        handleOpenWallet(initWallet, true);
      }
    }
  }, [loyaltyPlanState.loading, walletsListState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loyaltyPlanState.loading || walletsListState.loading ? /*#__PURE__*/_react.default.createElement(_styles.WalletsListContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, walletsListState.wallets.length > 0 && (walletsEnabled.wallet_cash_enabled || walletsEnabled.wallet_credit_point_enabled) && /*#__PURE__*/_react.default.createElement(_styles.WalletsListContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('WALLETS', 'Wallets')), walletsListState.wallets.filter(function (config) {
    return walletsEnabled[config.key];
  }).map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles.WalletOption, {
      key: config.id,
      active: config.id === (currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.id),
      onClick: function onClick() {
        return handleOpenWallet(config);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.WalletName, null, walletsLangs[config.key]), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }))), isOpenDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: isOpenDetails,
    onClose: handleCloseWallet
  }, /*#__PURE__*/_react.default.createElement(_styles.DetailsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.name), (currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.type) === 2 && options && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.value,
    options: options,
    onChange: function onChange(typeValue) {
      return handleUpdateWallet(currentConfig === null || currentConfig === void 0 ? void 0 : currentConfig.id, {
        value: typeValue
      });
    },
    placeholder: t('SELECT_A_OPTION', 'Select a option')
  }))));
};
var BusinessWalletsList = function BusinessWalletsList(props) {
  var businessWalletsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessWalletsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessWalletsList, businessWalletsListProps);
};
exports.BusinessWalletsList = BusinessWalletsList;