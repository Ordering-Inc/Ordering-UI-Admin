"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesDashbaord = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));
var _FaRegTimesCircle = _interopRequireDefault(require("@meronex/icons/fa/FaRegTimesCircle"));
var _OpenAndCloseOrderSelector = require("../OpenAndCloseOrderSelector");
var _OrderBySelector = require("../OrderBySelector");
var _MessagesDashboardOrdersList = require("../MessagesDashboardOrdersList");
var _Messages = require("../Messages");
var _OrderDetails = require("../OrderDetails");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MessagesDashbaord = exports.MessagesDashbaord = function MessagesDashbaord(props) {
  var searchValue = props.searchValue,
    filterValues = props.filterValues,
    deletedOrderId = props.deletedOrderId,
    driversList = props.driversList,
    activeSwitch = props.activeSwitch,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate,
    handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('all'),
    _useState2 = _slicedToArray(_useState, 2),
    openOrclosedOrderView = _useState2[0],
    setOpenOrclosedOrderView = _useState2[1];
  var _useState3 = (0, _react.useState)('last_direct_message_at'),
    _useState4 = _slicedToArray(_useState3, 2),
    orderBy = _useState4[0],
    setOrderBy = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    openOrderAndUser = _useState6[0],
    setOpenOrderAndUser = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    messageType = _useState8[0],
    setMessageType = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    messageOrder = _useState10[0],
    setMessageOrder = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openMessageOrderDetail = _useState12[0],
    setOpenMessageOrderDetail = _useState12[1];
  var handleOpenMessage = function handleOpenMessage(order, messageType) {
    setMessageType(messageType);
    setMessageOrder(order);
  };
  var handleSetMessageType = function handleSetMessageType(messageType) {
    setMessageType(messageType);
  };
  var handleMessageOrderDetail = function handleMessageOrderDetail(state) {
    setOpenMessageOrderDetail(state);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.MessagesManagerContainer, null, !openOrderAndUser ? /*#__PURE__*/_react.default.createElement(_styles.OrdersOpenButton, {
    onClick: function onClick() {
      return setOpenOrderAndUser(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_AiFillPlusCircle.default, null)) : /*#__PURE__*/_react.default.createElement(_styles.OrdersCloseButton, {
    onClick: function onClick() {
      return setOpenOrderAndUser(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_FaRegTimesCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrdersAndUser, {
    style: {
      display: "".concat(openOrderAndUser ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperTab, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: true
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSortContainer, null, /*#__PURE__*/_react.default.createElement(_OpenAndCloseOrderSelector.OpenAndCloseOrderSelector, {
    defaultValue: openOrclosedOrderView,
    setOpenOrclosedOrderView: setOpenOrclosedOrderView
  }), /*#__PURE__*/_react.default.createElement(_OrderBySelector.OrderBySelector, {
    defaultValue: orderBy,
    setOrderBy: setOrderBy
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderAndUserListContainer, null, /*#__PURE__*/_react.default.createElement(_MessagesDashboardOrdersList.MessagesDashboardOrdersList, {
    orderListView: "small",
    orderBy: orderBy,
    openOrclosedOrderView: openOrclosedOrderView,
    searchValue: searchValue,
    filterValues: filterValues,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    activeSwitch: activeSwitch,
    messageType: messageType,
    messageOrder: messageOrder,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleOpenMessage: handleOpenMessage
  }))), messageOrder && /*#__PURE__*/_react.default.createElement(_styles.WrapperMessage, null, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    messageDashboardView: true,
    orderId: messageOrder === null || messageOrder === void 0 ? void 0 : messageOrder.id,
    order: messageOrder,
    customer: messageType === 'customer',
    business: messageType === 'business',
    driver: messageType === 'driver',
    handleMessageOrderDetail: handleMessageOrderDetail,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount,
    handleSetMessageType: handleSetMessageType
  })), messageOrder && /*#__PURE__*/_react.default.createElement(_styles.MessageOrderDetailContainer, {
    style: {
      display: "".concat(openMessageOrderDetail ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    messageDashboardView: true,
    orderId: messageOrder === null || messageOrder === void 0 ? void 0 : messageOrder.id,
    driversList: driversList,
    messageType: messageType,
    handleOpenMessage: handleOpenMessage,
    handleMessageOrderDetail: handleMessageOrderDetail,
    handleOpenOrderDetail: handleOpenOrderDetail
  })));
};