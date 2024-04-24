"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardsPrograms = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _Wallet = require("../Wallet");
var _PointsWalletLevels = require("../PointsWalletLevels");
var _GiftCards = require("../GiftCards");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RewardsPrograms = exports.RewardsPrograms = function RewardsPrograms() {
  var _walletList$find;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    moveDistance = _useState4[0],
    setMoveDistance = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    levelMoveDistance = _useState6[0],
    setLevelMoveDistance = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    giftCardMoveDistance = _useState8[0],
    setGiftCardMoveDistance = _useState8[1];
  var walletList = [{
    key: 'credit_point',
    name: t('POINTS_WALLET', 'Points wallet'),
    description: t('POINTS_WALLET_DESCRIPTION', 'Points wallet general and per business setup.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Wallet, null)
  }, {
    key: 'levels',
    name: t('LEVELS', 'Levels'),
    description: t('LEVELS_DESCRIPTION', 'Setup different loyalty levels for your users.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartSteps, null)
  }, {
    key: 'gift_card',
    name: t('GIFT_CARD', 'Gift Card'),
    description: t('GIFT_CARD_DESCRIPTION', 'Setup different gift cards for your customers.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Gift, null)
  }, {
    key: 'cashback',
    name: t('CASH_WALLET', 'Cash wallet'),
    description: t('CASH_WALLET_DESCRIPTION', 'Cash wallet general and per business setup.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Wallet, null)
  }];
  var hanldeClosePointsWallet = function hanldeClosePointsWallet() {
    setMoveDistance(0);
    setShowOption(null);
    history.replace("".concat(location.pathname));
  };
  var handleCloseLevel = function handleCloseLevel() {
    setLevelMoveDistance(0);
    setShowOption(null);
    history.replace("".concat(location.pathname));
  };
  var handleCloseGiftCard = function handleCloseGiftCard() {
    setGiftCardMoveDistance(0);
    setShowOption(null);
    history.replace("".concat(location.pathname));
  };
  var handleOptionClick = function handleOptionClick(key, isInitialRender) {
    setShowOption(key);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?id=").concat(key));
    }
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      handleOptionClick(id, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('LOYALTY_AUTOMATION', 'Loyalty automation')), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, t('LOYALTY_AUTOMATION_DESCRIPTION', 'Configure the available loyalty plans to allow your users to receive rewards per order in your website and app. This can be done in general and customized per business.')))), /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyListContainer, null, walletList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyItemWrapper, {
      key: item.key,
      onClick: function onClick() {
        return handleOptionClick(item.key);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, item.icon), /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, item.name), /*#__PURE__*/_react.default.createElement("p", null, item.description)));
  }))), (showOption === 'credit_point' || showOption === 'cashback') && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "loyaltyWallet",
    open: showOption === 'credit_point' || showOption === 'cashback',
    onClose: hanldeClosePointsWallet,
    defaultSideBarWidth: 550 + moveDistance,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_Wallet.Wallet, {
    type: showOption,
    title: (_walletList$find = walletList.find(function (item) {
      return item.key === showOption;
    })) === null || _walletList$find === void 0 ? void 0 : _walletList$find.name,
    moveDistance: moveDistance,
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    }
  })), showOption === 'levels' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "loyaltyLevels",
    open: showOption === 'levels',
    onClose: function onClose() {
      return handleCloseLevel();
    },
    defaultSideBarWidth: 550 + levelMoveDistance,
    moveDistance: levelMoveDistance,
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_PointsWalletLevels.PointsWalletLevels, {
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setLevelMoveDistance(val);
    }
  })), showOption === 'gift_card' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: showOption === 'gift_card',
    onClose: function onClose() {
      return handleCloseGiftCard();
    },
    defaultSideBarWidth: 550 + giftCardMoveDistance,
    moveDistance: giftCardMoveDistance,
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_GiftCards.GiftCards, {
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setGiftCardMoveDistance(val);
    }
  })));
};