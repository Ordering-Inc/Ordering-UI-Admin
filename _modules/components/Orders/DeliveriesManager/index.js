"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveriesManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrdersContentHeader = require("../OrdersContentHeader");
var _OrderDetails = require("../OrderDetails");
var _OrderNotification = require("../OrderNotification");
var _DeliveryDashboard = require("../DeliveryDashboard");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DeliveriesManagerUI = function DeliveriesManagerUI(props) {
  var _configState$configs;
  var searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    ordersStatusGroup = props.ordersStatusGroup,
    filterValues = props.filterValues,
    deletedOrderId = props.deletedOrderId,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleOrdersStatusGroupFilter = props.handleOrdersStatusGroupFilter,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    handleSelectedSubOrderStatus = props.handleSelectedSubOrderStatus,
    onOrderRedirect = props.onOrderRedirect,
    numberOfOrdersBySubstatus = props.numberOfOrdersBySubstatus,
    timeStatus = props.timeStatus,
    setTimeStatus = props.setTimeStatus,
    isUseQuery = props.isUseQuery,
    adminsList = props.adminsList,
    assignableDriverGroupList = props.assignableDriverGroupList,
    detailsOrder = props.detailsOrder,
    setDetailsOrder = props.setDetailsOrder;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenOrderDetail = _useState2[0],
    setIsOpenOrderDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    orderDetailId = _useState4[0],
    setOrderDetailId = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    filterModalOpen = _useState6[0],
    setFilterModalOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(60000),
    _useState8 = _slicedToArray(_useState7, 2),
    slaSettingTime = _useState8[0],
    setSlaSettingTime = _useState8[1];
  var _useState9 = (0, _react.useState)({
      pending: null,
      inProgress: null,
      completed: null,
      cancelled: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    ordersAmountByStatus = _useState10[0],
    setOrdersAmountByStatus = _useState10[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenOrderDetail(false);
    onOrderRedirect();
  };
  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    var _configState$configs2, _configState$configs3;
    (!(configState !== null && configState !== void 0 && (_configState$configs2 = configState.configs) !== null && _configState$configs2 !== void 0 && _configState$configs2.optimize_order_data) || (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.optimize_order_data) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '0') && setDetailsOrder(order);
    setOrderDetailId(order.id);
    onOrderRedirect(order.id);
    setIsOpenOrderDetail(true);
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setIsOpenOrderDetail(false);else {
      setOrderDetailId(id);
      setIsOpenOrderDetail(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveriesContainer, {
    id: "deliveryDashboard"
  }, /*#__PURE__*/_react.default.createElement(_OrdersContentHeader.OrdersContentHeader, {
    isDisableControl: true,
    title: t('DELIVERY_DASHBOARD', 'Delivery dashboard'),
    isShowMapsKeySettingButton: !googleMapsApiKey,
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    filterValues: filterValues,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    filterModalOpen: filterModalOpen,
    setFilterModalOpen: setFilterModalOpen,
    setTimeStatus: setTimeStatus,
    setSlaSettingTime: setSlaSettingTime,
    adminsList: adminsList,
    assignableDriverGroupList: assignableDriverGroupList
  }), /*#__PURE__*/_react.default.createElement(_styles.OrdersContent, null, /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, null, /*#__PURE__*/_react.default.createElement(_DeliveryDashboard.DeliveryDashboard, {
    searchValue: searchValue,
    filterValues: filterValues,
    driversList: driversList,
    deletedOrderId: deletedOrderId,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleOrdersStatusGroupFilter: handleOrdersStatusGroupFilter,
    handleSelectedSubOrderStatus: handleSelectedSubOrderStatus,
    isOnlyDelivery: true,
    setFilterModalOpen: setFilterModalOpen,
    slaSettingTime: slaSettingTime,
    timeStatus: timeStatus,
    ordersAmountByStatus: ordersAmountByStatus,
    setOrdersAmountByStatus: setOrdersAmountByStatus,
    numberOfOrdersBySubstatus: numberOfOrdersBySubstatus,
    isUseQuery: isUseQuery,
    franchisesList: props.franchisesList,
    driverGroupList: driverGroupList,
    handleChangeFilterValues: handleChangeFilterValues,
    handleChangeSearch: handleChangeSearch
  })))), isOpenOrderDetail && /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    open: isOpenOrderDetail,
    order: detailsOrder,
    orderId: orderDetailId,
    drivers: driversList.drivers,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), /*#__PURE__*/_react.default.createElement(_OrderNotification.OrderNotification, {
    isOnlyDelivery: true
  }));
};
var DeliveriesManager = exports.DeliveriesManager = function DeliveriesManager(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    isOnlyDelivery: true,
    UIComponent: DeliveriesManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups.name', 'driver_groups.id', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersManage, OrdersListControlProps);
};