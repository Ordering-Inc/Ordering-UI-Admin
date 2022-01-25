"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _OrdersTable = require("../OrdersTable");

var _OrdersCards = require("../OrdersCards");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OrdersListing = function OrdersListing(props) {
  var _theme$images, _theme$images$dummies;

  var isSelectedOrders = props.isSelectedOrders,
      orderList = props.orderList,
      driversList = props.driversList,
      selectedOrderIds = props.selectedOrderIds,
      orderListView = props.orderListView,
      handleUpdateOrderStatus = props.handleUpdateOrderStatus,
      handleSelectedOrderIds = props.handleSelectedOrderIds,
      pagination = props.pagination,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      handleOpenMessage = props.handleOpenMessage,
      handleOrderCardClick = props.handleOrderCardClick,
      handleUpdateDriverLocation = props.handleUpdateDriverLocation,
      messageOrder = props.messageOrder,
      selectedOrderCard = props.selectedOrderCard,
      messageListView = props.messageListView,
      messageType = props.messageType,
      loadMoreOrders = props.loadMoreOrders,
      getPageOrders = props.getPageOrders,
      ordersStatusGroup = props.ordersStatusGroup,
      groupStatus = props.groupStatus,
      orderDetailId = props.orderDetailId,
      isMessagesView = props.isMessagesView,
      setSelectedOrderIds = props.setSelectedOrderIds;
  var theme = (0, _styledComponents.useTheme)();
  (0, _react.useEffect)(function () {
    if (orderList.loading || !messageListView) return;
    if (orderList.orders.length === 0 || messageOrder) return;
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType);
  }, [orderList.loading, messageListView]);
  (0, _react.useEffect)(function () {
    if (!isMessagesView || orderList.loading || selectedOrderCard) return;

    if ((orderList === null || orderList === void 0 ? void 0 : orderList.orders.length) > 0) {
      handleOrderCardClick(orderList.orders[0]);
    }
  }, [isMessagesView, orderList, selectedOrderCard]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (ordersStatusGroup === groupStatus || isMessagesView) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !orderList.loading && orderList.orders.length === 0 ? /*#__PURE__*/_react.default.createElement(_styles.WrapperNoneOrders, {
    small: orderListView === 'small'
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerNoneOrdersContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.nonOrders,
    alt: "none"
  }))) : /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderListContent, {
    maxHeight: orderListView !== 'table'
  }, orderListView === 'table' ? /*#__PURE__*/_react.default.createElement(_OrdersTable.OrdersTable, {
    setSelectedOrderIds: setSelectedOrderIds,
    isSelectedOrders: isSelectedOrders,
    orderList: orderList,
    driversList: driversList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    orderDetailId: orderDetailId,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail
  }) : /*#__PURE__*/_react.default.createElement(_OrdersCards.OrdersCards, {
    isMessagesView: isMessagesView,
    orderList: orderList,
    driversList: driversList,
    pagination: pagination,
    selectedOrderIds: selectedOrderIds,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail,
    selectedOrderCard: selectedOrderCard,
    handleOrderCardClick: handleOrderCardClick,
    handleUpdateDriverLocation: handleUpdateDriverLocation
  }))));
};

exports.OrdersListing = OrdersListing;