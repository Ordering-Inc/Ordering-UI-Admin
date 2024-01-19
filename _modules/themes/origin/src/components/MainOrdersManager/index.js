"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainOrdersManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _OrderStatusFilterBar = require("../OrderStatusFilterBar");
var _OrderContentHeader = require("../OrderContentHeader");
var _OrderDetails = require("../OrderDetails");
var _Modal = require("../Modal");
var _Buttons = require("../../styles/Buttons");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _OrdersDashboard = require("../OrdersDashboard");
var _DeliveryDashboard = require("../DeliveryDashboard");
var _MessagesDashbaord = require("../MessagesDashbaord");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_reactToastify.toast.configure();
var MainOrdersManagerUI = function MainOrdersManagerUI(props) {
  var searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
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
    selectedOrderIds = props.selectedOrderIds;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    deliveryDashboardLoaded = _useState2[0],
    setDeliveryDashboardLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    messagesDashboardLoaded = _useState4[0],
    setMessagesDashboardLoaded = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenOrderDetail = _useState6[0],
    setIsOpenOrderDetail = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    orderDetailId = _useState8[0],
    setOrderDetailId = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    orderIdForUnreadCountUpdate = _useState10[0],
    setOrderIdForUnreadCountUpdate = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    totalSelectedOrder = _useState12[0],
    setTotalSelectedOrder = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    notificationModalOpen = _useState14[0],
    setNotificationModalOpen = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    registerOrderIds = _useState16[0],
    setRegisterOrderIds = _useState16[1];
  var _useState17 = (0, _react.useState)({
      orders: true,
      deliveries: false,
      messages: false
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    activeSwitch = _useState18[0],
    setActiveSwitch = _useState18[1];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenOrderDetail(false);
    history.push('/orders-deliveries');
  };
  var handleOpenOrderDetail = function handleOpenOrderDetail(id) {
    setOrderDetailId(id);
    setIsOpenOrderDetail(true);
  };
  var handleNotification = function handleNotification(orderId) {
    var _registerOrderIds = _toConsumableArray(registerOrderIds);
    if (!_registerOrderIds.includes(orderId)) {
      var _configState$configs;
      _registerOrderIds.push(orderId);
      setRegisterOrderIds(_registerOrderIds);
      if ((configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.notification_toast) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === 'true') {
        toastNotify(orderId);
      } else {
        setNotificationModalOpen(true);
      }
    }
  };
  var handleCloseNotificationModal = function handleCloseNotificationModal() {
    setNotificationModalOpen(false);
    setRegisterOrderIds([]);
  };
  var handleSwitch = function handleSwitch(switchType) {
    switch (switchType) {
      case 'orders':
        setActiveSwitch({
          orders: true,
          deliveries: false,
          messages: false
        });
        break;
      case 'deliveries':
        setActiveSwitch({
          orders: false,
          deliveries: true,
          messages: false
        });
        break;
      case 'messages':
        setActiveSwitch({
          orders: false,
          deliveries: false,
          messages: true
        });
        break;
    }
  };
  var toastNotify = function toastNotify(orderId) {
    var toastConfigure = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    };
    var content = "Order #".concat(orderId, " has been ordered.");
    _reactToastify.toast.dark(content, toastConfigure);
    var sound = document.getElementById('notification-sound');
    sound.muted = false;
    sound.play();
    setRegisterOrderIds([]);
  };
  var closeOrderDetailModal = function closeOrderDetailModal(e) {
    if (e.code === 'Escape' && width >= 1000) {
      handleBackRedirect();
    }
  };
  var closeNotificationModal = function closeNotificationModal(e) {
    if (e.code === 'Escape' && width >= 1000) {
      handleCloseNotificationModal();
    }
  };
  var handleUpdateOrderForUnreadCount = function handleUpdateOrderForUnreadCount(orderId) {
    setOrderIdForUnreadCountUpdate(orderId);
  };
  (0, _react.useEffect)(function () {
    if (registerOrderIds.length > 0) return;
    setNotificationModalOpen(false);
  }, [registerOrderIds]);
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
    var id = query.get('id');
    if (id === null) setIsOpenOrderDetail(false);else {
      setOrderDetailId(id);
      setIsOpenOrderDetail(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var sound = document.getElementById('notification-sound');
    var interval = setInterval(function () {
      if (notificationModalOpen) {
        sound.muted = false;
        sound.play();
      }
    }, 3000);
    if (!notificationModalOpen) {
      clearInterval(interval);
      return;
    }
    return function () {
      return clearInterval(interval);
    };
  }, [notificationModalOpen]);
  (0, _react.useEffect)(function () {
    if (!isOpenOrderDetail) return;
    document.addEventListener('keydown', closeOrderDetailModal);
    return function () {
      return document.removeEventListener('keydown', closeOrderDetailModal);
    };
  }, [isOpenOrderDetail]);
  (0, _react.useEffect)(function () {
    if (!notificationModalOpen) return;
    document.addEventListener('keydown', closeNotificationModal);
    return function () {
      return document.removeEventListener('keydown', closeNotificationModal);
    };
  }, [notificationModalOpen]);
  (0, _react.useEffect)(function () {
    if (deliveryDashboardLoaded && messagesDashboardLoaded) return;
    if (activeSwitch.deliveries) {
      setDeliveryDashboardLoaded(true);
    }
    if (activeSwitch.messages) {
      setMessagesDashboardLoaded(true);
    }
  }, [activeSwitch]);
  (0, _react.useEffect)(function () {
    if (configState.loading) return;
    events.on('order_added', handleNotification);
    return function () {
      events.off('order_added', handleNotification);
    };
  }, [configState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersListContainer, {
    deliveryAndMessageUI: activeSwitch.deliveries || activeSwitch.messages
  }, !activeSwitch.messages && /*#__PURE__*/_react.default.createElement(_OrderStatusFilterBar.OrderStatusFilterBar, {
    selectedOrderStatus: ordersStatusGroup,
    changeOrderStatus: handleOrdersStatusGroupFilter
  }), /*#__PURE__*/_react.default.createElement(_styles.OrdersContent, {
    messageUI: activeSwitch.messages
  }, /*#__PURE__*/_react.default.createElement(_styles.OrdersInnerContent, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_OrderContentHeader.OrderContentHeader, {
    activeSwitch: activeSwitch,
    handleSwitch: handleSwitch,
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    filterValues: filterValues,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, {
    style: {
      display: "".concat(activeSwitch.orders ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_OrdersDashboard.OrdersDashboard, {
    searchValue: searchValue,
    filterValues: filterValues,
    selectedOrderIds: selectedOrderIds,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    ordersStatusGroup: ordersStatusGroup,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    handleOpenOrderDetail: handleOpenOrderDetail,
    activeSwitch: activeSwitch
  })), deliveryDashboardLoaded && /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, {
    style: {
      display: "".concat(activeSwitch.deliveries ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_DeliveryDashboard.DeliveryDashboard, {
    searchValue: searchValue,
    filterValues: filterValues,
    driversList: driversList,
    deletedOrderId: deletedOrderId,
    ordersStatusGroup: ordersStatusGroup,
    handleSelectedOrderIds: handleSelectedOrderIds,
    activeSwitch: activeSwitch,
    handleOpenOrderDetail: handleOpenOrderDetail
  })), messagesDashboardLoaded && /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, {
    style: {
      display: "".concat(activeSwitch.messages ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_MessagesDashbaord.MessagesDashbaord, {
    searchValue: searchValue,
    filterValues: filterValues,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    activeSwitch: activeSwitch,
    handleOpenOrderDetail: handleOpenOrderDetail,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount
  }))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "90%",
    height: "90vh",
    open: isOpenOrderDetail,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    orderId: orderDetailId,
    driversList: driversList,
    handleUpdateOrderForUnreadCount: handleUpdateOrderForUnreadCount
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "50%",
    hideCloseDefault: true,
    open: notificationModalOpen
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderNotification, null, /*#__PURE__*/_react.default.createElement("p", null, t('WEB_APPNAME', 'Ordering')), registerOrderIds.map(function (orderId) {
    return /*#__PURE__*/_react.default.createElement("p", {
      key: orderId
    }, "Order ", /*#__PURE__*/_react.default.createElement("span", null, "#", orderId), " has been ordered.");
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "darkBlue",
    onClick: function onClick() {
      return handleCloseNotificationModal();
    }
  }, t('OK', 'OK')))), /*#__PURE__*/_react.default.createElement("audio", {
    id: "notification-sound",
    muted: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: theme.sounds.notificationOgg,
    type: "audio/ogg"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: theme.sounds.notificationMp3,
    type: "audio/mpeg"
  })), totalSelectedOrder > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperIndicator, null, selectedOrderIds.length, "/", totalSelectedOrder));
};
var MainOrdersManager = exports.MainOrdersManager = function MainOrdersManager(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MainOrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersManage, OrdersListControlProps);
};