"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllInOne = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrderStatusFilterBar = require("../OrderStatusFilterBar");
var _OrdersContentHeader = require("../OrdersContentHeader");
var _OrderDetails = require("../OrderDetails");
var _OrdersDashboardControls = require("../OrdersDashboardControls");
var _Shared = require("../../Shared");
var _DriversManager = require("./DriversManager");
var _DriversLocation = require("../DriversLocation");
var _styles = require("./styles");
var _OrdersDashboard = require("../OrdersDashboard");
var _OrderStatusSubFilter = require("../OrderStatusSubFilter");
var _OrderNotification = require("../OrderNotification");
var _WizardOrders = require("../WizardOrders");
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
var OrdersManagerUI = function OrdersManagerUI(props) {
  var isSelectedOrders = props.isSelectedOrders,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    ordersStatusGroup = props.ordersStatusGroup,
    filterValues = props.filterValues,
    deletedOrderId = props.deletedOrderId,
    startMulitOrderStatusChange = props.startMulitOrderStatusChange,
    startMulitOrderDelete = props.startMulitOrderDelete,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleOrdersStatusGroupFilter = props.handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders = props.handleDeleteMultiOrders,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    selectedOrderIds = props.selectedOrderIds,
    onOrderRedirect = props.onOrderRedirect,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    handleSelectedSubOrderStatus = props.handleSelectedSubOrderStatus,
    handleCustomOrderDetail = props.handleCustomOrderDetail,
    setSelectedOrderIds = props.setSelectedOrderIds,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenOrderDetail = _useState2[0],
    setIsOpenOrderDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    orderDetailId = _useState4[0],
    setOrderDetailId = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    detailsOrder = _useState6[0],
    setDetailsOrder = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    filterModalOpen = _useState8[0],
    setFilterModalOpen = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      error: null,
      orders: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    assignedOrders = _useState10[0],
    setAssignedOrders = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isTourOpen = _useState12[0],
    setIsTourOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    currentTourStep = _useState14[0],
    setCurrentTourStep = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isTourFlag = _useState16[0],
    setIsTourFlag = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    alertState = _useState18[0],
    setAlertState = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    timeStatus = _useState20[0],
    setTimeStatus = _useState20[1];
  var _useState21 = (0, _react.useState)(60000),
    _useState22 = _slicedToArray(_useState21, 2),
    slaSettingTime = _useState22[0],
    setSlaSettingTime = _useState22[1];
  var _useState23 = (0, _react.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalSelectedOrder = _useState24[0],
    setTotalSelectedOrder = _useState24[1];
  var _useState25 = (0, _react.useState)({
      pending: null,
      inProgress: null,
      completed: null,
      cancelled: null
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    ordersAmountByStatus = _useState26[0],
    setOrdersAmountByStatus = _useState26[1];
  var _useState27 = (0, _react.useState)({
      driversIsOnline: true,
      onlineDrivers: [],
      offlineDrivers: [],
      selectedDriver: null
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    mapsData = _useState28[0],
    setMapsData = _useState28[1];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenOrderDetail(false);
    setDetailsOrder(null);
    setOrderDetailId(null);
    if (!isSelectedOrders) {
      onOrderRedirect();
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(false);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    var isKeydown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (isTourOpen && currentTourStep === 4 && !isKeydown) {
      setIsTourOpen(false);
      return;
    }
    setDetailsOrder(order);
    setOrderDetailId(order.id);
    setIsOpenOrderDetail(true);
    if (!isSelectedOrders) {
      onOrderRedirect(order.id);
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(true);
    }
    if (isTourOpen && currentTourStep === 4) {
      setIsTourFlag(true);
    }
    if (isTourOpen && currentTourStep === 0) {
      setTimeout(function () {
        setCurrentTourStep(1);
      }, 1);
    }
  };
  var _handleOpenTour = function handleOpenTour() {
    var tourElement = document.querySelector('[data-tour="tour_start"]');
    if (!tourElement) {
      setAlertState({
        open: true,
        content: t('ONE_ORDER_IS_REQUIRED', 'One order is required')
      });
      return;
    }
    var orderElement = document.getElementById('orderTable');
    if (orderElement) orderElement.scrollTo(0, 0);
    setCurrentTourStep(0);
    setIsTourOpen(true);
    handleBackRedirect();
  };
  var handleUpdateAssignedOrders = function handleUpdateAssignedOrders(_assignedOrders) {
    setAssignedOrders(_assignedOrders);
  };
  (0, _react.useEffect)(function () {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedOrderIds.length);
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete]);
  (0, _react.useEffect)(function () {
    if (selectedOrderIds.length === 0) {
      setTimeout(function () {
        setTotalSelectedOrder(0);
      }, 500);
    }
  }, [selectedOrderIds]);
  (0, _react.useEffect)(function () {
    if (isSelectedOrders) return;
    var id = query.get('id');
    if (id === null) setIsOpenOrderDetail(false);else {
      if ((user === null || user === void 0 ? void 0 : user.level) === 5) {
        handleBackRedirect();
      } else {
        setOrderDetailId(id);
        setIsOpenOrderDetail(true);
      }
    }
  }, [user]);
  (0, _react.useEffect)(function () {
    if (isTourOpen) return;
    setIsTourFlag(false);
  }, [isTourOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersListContainer, {
    isSelectedOrders: isSelectedOrders
  }, /*#__PURE__*/_react.default.createElement(_OrdersContentHeader.OrdersContentHeader, {
    isDisableTitle: isSelectedOrders,
    isDisableControl: isSelectedOrders,
    title: t('ORDER_MANAGER', 'Orders manager'),
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    citiesList: citiesList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    selectedOrderIds: selectedOrderIds,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleOpenTour: function handleOpenTour() {
      return _handleOpenTour();
    },
    filterModalOpen: filterModalOpen,
    setFilterModalOpen: setFilterModalOpen,
    setTimeStatus: setTimeStatus,
    setSlaSettingTime: setSlaSettingTime
  }), /*#__PURE__*/_react.default.createElement(_styles.MainContentContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TopContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, null, /*#__PURE__*/_react.default.createElement(_DriversManager.DriversManager, {
    setMapsData: setMapsData,
    handleUpdateAssignedOrders: handleUpdateAssignedOrders
  })), /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, null, /*#__PURE__*/_react.default.createElement(_OrderStatusFilterBar.OrderStatusFilterBar, {
    isUseQuery: isUseQuery,
    selectedOrderStatus: ordersStatusGroup,
    changeOrderStatus: handleOrdersStatusGroupFilter,
    ordersAmountByStatus: ordersAmountByStatus
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderSubFilterControls, {
    isColumn: selectedOrderIds === null || selectedOrderIds === void 0 ? void 0 : selectedOrderIds.length
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusSubFilterWrapper, {
    isColumn: selectedOrderIds === null || selectedOrderIds === void 0 ? void 0 : selectedOrderIds.length
  }, /*#__PURE__*/_react.default.createElement(_OrderStatusSubFilter.OrderStatusSubFilter, {
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedSubOrderStatus: handleSelectedSubOrderStatus
  })), !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_OrdersDashboardControls.OrdersDashboardControls, {
    selectedOrderNumber: selectedOrderIds === null || selectedOrderIds === void 0 ? void 0 : selectedOrderIds.length,
    filterValues: filterValues,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders
  })), /*#__PURE__*/_react.default.createElement(_styles.OrdersContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersInnerContent, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboard.OrdersDashboard, {
    hidePhoto: true,
    isSelectedOrders: isSelectedOrders,
    driverId: props.driverId,
    customerId: props.customerId,
    businessId: props.businessId,
    searchValue: searchValue,
    filterValues: filterValues,
    selectedOrderIds: selectedOrderIds,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    orderDetailId: orderDetailId,
    handleOpenOrderDetail: handleOpenOrderDetail,
    setSelectedOrderIds: setSelectedOrderIds,
    currentTourStep: currentTourStep,
    handleOpenTour: _handleOpenTour,
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    setFilterModalOpen: setFilterModalOpen,
    timeStatus: timeStatus,
    slaSettingTime: slaSettingTime,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    setOrdersAmountByStatus: setOrdersAmountByStatus,
    isUseQuery: isUseQuery
  })))))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversLocation, null, /*#__PURE__*/_react.default.createElement(_DriversLocation.DriversLocation, {
    driversIsOnline: mapsData.driversIsOnline,
    selectedDriver: mapsData.selectedDriver,
    onlineDrivers: mapsData.onlineDrivers,
    offlineDrivers: mapsData.offlineDrivers,
    selectedOrder: detailsOrder,
    assignedOrders: assignedOrders
  })))), isOpenOrderDetail && /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    isSelectedOrders: isSelectedOrders,
    open: isOpenOrderDetail,
    order: detailsOrder,
    orderId: orderDetailId,
    isTourOpen: isTourOpen,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    setCurrentTourStep: setCurrentTourStep,
    currentTourStep: currentTourStep,
    isTourFlag: isTourFlag,
    setIsTourFlag: setIsTourFlag,
    setIsTourOpen: setIsTourOpen,
    drivers: driversList.drivers
  }), /*#__PURE__*/_react.default.createElement(_OrderNotification.OrderNotification, {
    customerId: props.customerId
  }), totalSelectedOrder > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperIndicator, null, selectedOrderIds.length, "/", totalSelectedOrder), /*#__PURE__*/_react.default.createElement(_WizardOrders.WizardOrders, {
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    currentStep: currentTourStep,
    detailsOrder: detailsOrder
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERS_MANAGER', 'Orders manager'),
    content: alertState.content,
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERS_MANAGER', 'Orders manager'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var AllInOne = function AllInOne(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersManage, OrdersListControlProps);
};
exports.AllInOne = AllInOne;