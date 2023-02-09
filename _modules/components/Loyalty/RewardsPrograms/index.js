"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardsPrograms = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _Wallet = require("../Wallet");
var _PointsWalletLevels = require("../PointsWalletLevels");
var _GiftCards = require("../GiftCards");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RewardsPrograms = function RewardsPrograms() {
  var _walletList$find;
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
  };
  var handleCloseLevel = function handleCloseLevel() {
    setLevelMoveDistance(0);
    setShowOption(null);
  };
  var handleCloseGiftCard = function handleCloseGiftCard() {
    setGiftCardMoveDistance(0);
    setShowOption(null);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('LOYALTY_AUTOMATION', 'Loyalty automation'))), /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyListContainer, null, walletList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyItemWrapper, {
      key: item.key,
      onClick: function onClick() {
        return setShowOption(item.key);
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
exports.RewardsPrograms = RewardsPrograms;