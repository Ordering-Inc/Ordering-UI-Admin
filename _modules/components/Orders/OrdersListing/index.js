"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _OrdersTable = require("../OrdersTable");

var _OrdersCards = require("../OrdersCards");

var _utils = require("../../../utils");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      setSelectedOrderIds = props.setSelectedOrderIds,
      handleOpenTour = props.handleOpenTour,
      currentTourStep = props.currentTourStep,
      isTourOpen = props.isTourOpen;
  var theme = (0, _styledComponents.useTheme)();

  var handleSetStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var preVisited, visited;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.getStorageItem)('visited', true);

            case 2:
              preVisited = _context.sent;

              if (preVisited !== null && preVisited !== void 0 && preVisited.orders_page) {
                _context.next = 8;
                break;
              }

              visited = _objectSpread(_objectSpread({}, preVisited), {}, {
                orders_page: true
              });
              _context.next = 7;
              return (0, _utils.setStorageItem)('visited', visited, true);

            case 7:
              handleOpenTour();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSetStorage() {
      return _ref.apply(this, arguments);
    };
  }();

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
  (0, _react.useEffect)(function () {
    var _orderList$orders;

    if (orderList.loading || (orderList === null || orderList === void 0 ? void 0 : (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.length) === 0) return;
    handleOpenTour && handleSetStorage();
  }, [orderList.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (ordersStatusGroup === groupStatus || isMessagesView) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !orderList.loading && (pagination === null || pagination === void 0 ? void 0 : pagination.total) === 0 ? /*#__PURE__*/_react.default.createElement(_styles.WrapperNoneOrders, null, /*#__PURE__*/_react.default.createElement(_styles.InnerNoneOrdersContainer, {
    small: orderListView === 'small'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.noOrders,
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
    handleOpenOrderDetail: handleOpenOrderDetail,
    currentTourStep: currentTourStep,
    isTourOpen: isTourOpen,
    handleOpenTour: handleOpenTour
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