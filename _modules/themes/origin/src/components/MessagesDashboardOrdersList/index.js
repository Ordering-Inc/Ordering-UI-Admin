"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesDashboardOrdersList = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrderListing = require("../OrderListing");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MessagesDashboardOrdersList = function MessagesDashboardOrdersList(props) {
  var orderListView = props.orderListView,
    searchValue = props.searchValue,
    filterValues = props.filterValues,
    deletedOrderId = props.deletedOrderId,
    driversList = props.driversList,
    activeSwitch = props.activeSwitch,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    handleOpenMessage = props.handleOpenMessage,
    openOrclosedOrderView = props.openOrclosedOrderView,
    orderBy = props.orderBy,
    messageType = props.messageType,
    messageOrder = props.messageOrder,
    orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate;
  var OrdersCommonControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: _OrderListing.OrderListing,
    useDefualtSessionManager: true,
    orderBy: orderBy,
    orderDirection: orderBy === 'id' ? 'desc' : 'asc',
    initialPageSize: 50,
    loadMorePageSize: 10,
    asDashboard: true,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deletedOrderId: deletedOrderId,
    activeSwitch: activeSwitch,
    driversList: driversList,
    orderListView: orderListView,
    messageType: messageType,
    messageOrder: messageOrder,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenMessage: handleOpenMessage,
    handleOpenOrderDetail: handleOpenOrderDetail
  });
  var allOrdersControlProps = {
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  };
  var openOrdersControlProps = {
    orderStatus: [0, 7, 8, 3, 4, 9, 13, 14, 18, 19, 20, 21]
  };
  var closedOrdersControlProps = {
    orderStatus: [1, 11, 2, 5, 6, 10, 12, 15, 16, 17]
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openOrclosedOrderView === 'all' && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({
    messageListView: true
  }, OrdersCommonControlProps, allOrdersControlProps))), openOrclosedOrderView === 'open' && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({
    messageListView: true
  }, OrdersCommonControlProps, openOrdersControlProps))), openOrclosedOrderView === 'close' && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({
    messageListView: true
  }, OrdersCommonControlProps, closedOrdersControlProps))));
};
exports.MessagesDashboardOrdersList = MessagesDashboardOrdersList;