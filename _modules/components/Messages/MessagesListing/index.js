"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Orders = require("../../Orders");
var _Buttons = require("../../../styles/Buttons");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _ChatContactList = require("../ChatContactList");
var _ChatBusinessesList = require("../ChatBusinessesList");
var _Shared = require("../../Shared");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var MessagesListingUI = function MessagesListingUI(props) {
  var searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    filterValues = props.filterValues,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeFilterValues = props.handleChangeFilterValues,
    isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)('orders'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var _useState3 = (0, _react.useState)('last_direct_message_at'),
    _useState4 = _slicedToArray(_useState3, 2),
    orderByOption = _useState4[0],
    setOrderByOption = _useState4[1];
  var _useState5 = (0, _react.useState)('drivers'),
    _useState6 = _slicedToArray(_useState5, 2),
    contactsOption = _useState6[0],
    setContactsOption = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpenOrderDetail = _useState8[0],
    setIsOpenOrderDetail = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    orderDetailId = _useState10[0],
    setOrderDetailId = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    detailsOrder = _useState12[0],
    setDetailsOrder = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedOrder = _useState14[0],
    setSelectedOrder = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    orderIdForUnreadCountUpdate = _useState16[0],
    setOrderIdForUnreadCountUpdate = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    filterModalOpen = _useState18[0],
    setFilterModalOpen = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    timeStatus = _useState20[0],
    setTimeStatus = _useState20[1];
  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    setDetailsOrder(order);
    setOrderDetailId(order.id);
    setIsOpenOrderDetail(true);
    if (isUseQuery) {
      (0, _utils.addQueryToUrl)({
        id: order.id
      });
    }
  };
  var handleCloseOrderDetail = function handleCloseOrderDetail() {
    setIsOpenOrderDetail(false);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  var handleOrderCardClick = function handleOrderCardClick(order) {
    setSelectedOrder(_objectSpread({}, order));
  };
  (0, _react.useEffect)(function () {
    if (width >= 768) return;
    document.body.style.overflow = isOpenOrderDetail ? 'hidden' : 'auto';
  }, [width, isOpenOrderDetail]);
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      setOrderDetailId(id);
      setIsOpenOrderDetail(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesListingContainer, {
    id: "deliveryDashboard"
  }, /*#__PURE__*/_react.default.createElement(_Orders.OrdersContentHeader, {
    isDisableControl: true,
    title: t('MESSAGES', 'Messages'),
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
    setTimeStatus: setTimeStatus
  }), /*#__PURE__*/_react.default.createElement(_styles.MessagesContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesOptionTabs, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedOption === 'orders',
    onClick: function onClick() {
      return setSelectedOption('orders');
    }
  }, t('ORDERS', 'Orders'))), selectedOption === 'orders' && /*#__PURE__*/_react.default.createElement(_styles.OrdersOrderByOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerTabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true,
    scrollId: "orderByOption"
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: orderByOption === 'last_direct_message_at' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setOrderByOption('last_direct_message_at');
    }
  }, t('NEWEST', 'Newest'), orderByOption === 'last_direct_message_at' && /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: orderByOption === 'id' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setOrderByOption('id');
    }
  }, t('ORDER_NUMBER', 'Order number'), orderByOption === 'id' && /*#__PURE__*/_react.default.createElement(_MdClose.default, null))))), selectedOption === 'contacts' && /*#__PURE__*/_react.default.createElement(_styles.ContactsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerTabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true,
    scrollId: "contactOption"
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: contactsOption === 'drivers' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setContactsOption('drivers');
    }
  }, t('DRIVERS', 'Drivers'), contactsOption === 'drivers' && /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: contactsOption === 'businesses' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setContactsOption('businesses');
    }
  }, t('BUSINESSES', 'Businesses'), contactsOption === 'businesses' && /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: contactsOption === 'customers' ? 'primary' : 'secundaryDark',
    onClick: function onClick() {
      return setContactsOption('customers');
    }
  }, t('CUSTOMERS', 'Customers'), contactsOption === 'customers' && /*#__PURE__*/_react.default.createElement(_MdClose.default, null)))))), selectedOption === 'orders' && /*#__PURE__*/_react.default.createElement(_Orders.OrdersDashboardList, {
    isMessagesView: true,
    searchValue: searchValue,
    filterValues: filterValues,
    driversList: driversList,
    orderByOption: orderByOption,
    selectedOrderCard: selectedOrder,
    selectedSubOrderStatus: selectedSubOrderStatus,
    orderIdForUnreadCountUpdate: orderIdForUnreadCountUpdate,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleOrderCardClick: handleOrderCardClick,
    timeStatus: timeStatus,
    isUseQuery: isUseQuery,
    franchisesList: props.franchisesList
  }), selectedOption === 'contacts' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, contactsOption === 'drivers' && /*#__PURE__*/_react.default.createElement(_ChatContactList.ChatContactList, {
    isDriver: true
  }), contactsOption === 'customers' && /*#__PURE__*/_react.default.createElement(_ChatContactList.ChatContactList, {
    isCustomer: true
  }), contactsOption === 'businesses' && /*#__PURE__*/_react.default.createElement(_ChatBusinessesList.ChatBusinessesList, null))), /*#__PURE__*/_react.default.createElement(_styles.MessageContainer, null, selectedOrder && /*#__PURE__*/_react.default.createElement(_Orders.Messages, {
    isChat: true,
    orderId: selectedOrder === null || selectedOrder === void 0 ? void 0 : selectedOrder.id,
    order: selectedOrder,
    handleUpdateOrderForUnreadCount: function handleUpdateOrderForUnreadCount(orderId) {
      return setOrderIdForUnreadCountUpdate(orderId);
    }
  })))), isOpenOrderDetail && /*#__PURE__*/_react.default.createElement(_Orders.OrderDetails, {
    open: isOpenOrderDetail,
    order: detailsOrder,
    orderId: orderDetailId,
    drivers: driversList.drivers,
    onClose: function onClose() {
      return handleCloseOrderDetail();
    }
  }), /*#__PURE__*/_react.default.createElement(_Orders.OrderNotification, null));
};
var MessagesListing = exports.MessagesListing = function MessagesListing(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MessagesListingUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersManage, OrdersListControlProps);
};