"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrderListing = require("../OrderListing");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var OrdersDashboardList = function OrdersDashboardList(props) {
  var orderListView = props.orderListView,
    searchValue = props.searchValue,
    filterValues = props.filterValues,
    selectedOrderIds = props.selectedOrderIds,
    deletedOrderId = props.deletedOrderId,
    driversList = props.driversList,
    ordersStatusGroup = props.ordersStatusGroup,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    activeSwitch = props.activeSwitch,
    handleOpenOrderDetail = props.handleOpenOrderDetail;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var OrdersCommonControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: _OrderListing.OrderListing,
    useDefualtSessionManager: true,
    orderBy: 'id',
    orderDirection: 'desc',
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deletedOrderId: deletedOrderId,
    handleSelectedOrderIds: handleSelectedOrderIds,
    selectedOrderIds: selectedOrderIds,
    activeSwitch: activeSwitch,
    driversList: driversList,
    orderListView: orderListView,
    handleOpenOrderDetail: handleOpenOrderDetail
  });

  // pending section
  var PendingOrdersControlProps = {
    orderStatus: [0],
    orderStatusTitle: t('PENDING', 'Pendig')
  };
  var PreOrdersControlProps = {
    orderStatus: [13],
    orderStatusTitle: t('PREORDER', 'Preorder')
  };

  // in progress section
  var AcceptedByBusinessOrdersControlProps = {
    orderStatus: [7],
    orderStatusTitle: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')
  };
  var AcceptedByDriverOrdersControlProps = {
    orderStatus: [8],
    orderStatusTitle: t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')
  };
  var ReadyForPickupOrdersControlProps = {
    orderStatus: [4],
    orderStatusTitle: t('READY_FOR_PICKUP', 'Ready for pickup')
  };
  var PickupCompletedByDriverOrdersControlProps = {
    orderStatus: [9],
    orderStatusTitle: t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')
  };
  var DriverArrivedByBusinessOrdersControlProps = {
    orderStatus: [3],
    orderStatusTitle: t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
  };
  var OrderNotReadyOrdersControlprops = {
    orderStatus: [14],
    orderStatusTitle: t('ORDER_NOT_READY', 'Order not ready')
  };
  var DriverAlmostArrivedToBusinessOrdersControlProps = {
    orderStatus: [18],
    orderStatusTitle: t('DRIVER_ALMOST_ARRIVED_TO_BUSINESS', 'Driver almost arrived to business')
  };
  var DriverAlmostArrivedToCustomerOrdersProps = {
    orderStatus: [19],
    orderStatusTitle: t('DRIVER_ALMOST_ARRIVED_TO_CUSTOMER', 'Driver almost arrived to customer')
  };
  var CustomerAlmostArrivedToBusinessOrdersProps = {
    orderStatus: [20],
    orderStatusTitle: t('CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS', 'Customer almost arrived to business')
  };
  var CustomerArrivedToBusinessOrdersProps = {
    orderStatus: [21],
    orderStatusTitle: t('CUSTOMER_ARRIVED_TO_BUSINESS', 'Customer arrived to business')
  };

  // completed section
  var CompletedByAdminOrdersControlProps = {
    orderStatus: [1],
    orderStatusTitle: t('COMPLETED_BY_ADMIN', 'Completed by admin')
  };
  var DeliveryCompletedByDriverOrdersControlProps = {
    orderStatus: [11],
    orderStatusTitle: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  };
  var PickupCompletedByCustomerOrdersControlProps = {
    orderStatus: [15],
    orderStatusTitle: t('PICKUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')
  };

  // cancelled section
  var RejectByAdminOrdersControlProps = {
    orderStatus: [2],
    orderStatusTitle: t('REJECTED_BY_ADMIN', 'Rejected by admin')
  };
  var RejectByBusinessOrdersControlProps = {
    orderStatus: [5],
    orderStatusTitle: t('REJECT_BY_BUSINESS', 'Reject by business')
  };
  var RejectByDriverOrdersControlProps = {
    orderStatus: [6],
    orderStatusTitle: t('REJECT_BY_DRIVER', 'Reject by driver')
  };
  var PickupFailedByDriverOrdersControlProps = {
    orderStatus: [10],
    orderStatusTitle: t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')
  };
  var DeliveryFailedByDriverOrdersControlProps = {
    orderStatus: [12],
    orderStatusTitle: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')
  };
  var CancelledByCustomerOrdersControlProps = {
    orderStatus: [16],
    orderStatusTitle: t('CANCELLED_BY_CUSTOMER', 'Cancelled by customer')
  };
  var NotPickedByCustomerOrdersControlProps = {
    orderStatus: [17],
    orderStatusTitle: t('NOT_PICKED_BY_CUSTOMER', 'Not picked by customer')
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    inProgressOrdersLoaded = _useState2[0],
    setInProgressOrdersLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    completedOrdersLoaded = _useState4[0],
    setCompletedOrdersLoaded = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    cancelledOrdersLoaded = _useState6[0],
    setCancelledOrdersLoaded = _useState6[1];
  (0, _react.useEffect)(function () {
    if (!(activeSwitch !== null && activeSwitch !== void 0 && activeSwitch.orders)) return;
    if (ordersStatusGroup === 'inProgress') setInProgressOrdersLoaded(true);
    if (ordersStatusGroup === 'completed') setCompletedOrdersLoaded(true);
    if (ordersStatusGroup === 'cancelled') setCancelledOrdersLoaded(true);
  }, [ordersStatusGroup, activeSwitch]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    style: {
      display: "".concat(ordersStatusGroup === 'pending' || searchValue !== '' && searchValue !== null ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, PendingOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, PreOrdersControlProps))), (inProgressOrdersLoaded || searchValue !== '' && searchValue !== null) && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    style: {
      display: "".concat(ordersStatusGroup === 'inProgress' || searchValue !== '' && searchValue !== null ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, AcceptedByBusinessOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, ReadyForPickupOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, AcceptedByDriverOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, DriverArrivedByBusinessOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, PickupCompletedByDriverOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, OrderNotReadyOrdersControlprops)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, DriverAlmostArrivedToBusinessOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, DriverAlmostArrivedToCustomerOrdersProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, CustomerAlmostArrivedToBusinessOrdersProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, CustomerArrivedToBusinessOrdersProps))), (completedOrdersLoaded || searchValue !== '' && searchValue !== null) && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    style: {
      display: "".concat(ordersStatusGroup === 'completed' || searchValue !== '' && searchValue !== null ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, CompletedByAdminOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, DeliveryCompletedByDriverOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, PickupCompletedByCustomerOrdersControlProps))), (cancelledOrdersLoaded || searchValue !== '' && searchValue !== null) && /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    style: {
      display: "".concat(ordersStatusGroup === 'cancelled' || searchValue !== '' && searchValue !== null ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, RejectByAdminOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, RejectByBusinessOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, RejectByDriverOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, PickupFailedByDriverOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, DeliveryFailedByDriverOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, CancelledByCustomerOrdersControlProps)), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardOrdersList, _extends({}, OrdersCommonControlProps, NotPickedByCustomerOrdersControlProps))));
};
exports.OrdersDashboardList = OrdersDashboardList;