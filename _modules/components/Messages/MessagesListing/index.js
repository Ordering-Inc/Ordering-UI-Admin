"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Orders = require("../../Orders");

var _Buttons = require("../../../styles/Buttons");

var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));

var _ChatContactList = require("../ChatContactList");

var _ChatBusinessesList = require("../ChatBusinessesList");

var _Shared = require("../../Shared");

var _useWindowSize2 = require("../../../hooks/useWindowSize");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      handleChangeFilterValues = props.handleChangeFilterValues;

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

  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    setDetailsOrder(order);
    setOrderDetailId(order.id);
    setIsOpenOrderDetail(true);
  };

  var handleOrderCardClick = function handleOrderCardClick(order) {
    setSelectedOrder(_objectSpread({}, order));
  };

  (0, _react.useEffect)(function () {
    if (width >= 768) return;
    document.body.style.overflow = isOpenOrderDetail ? 'hidden' : 'auto';
  }, [width, isOpenOrderDetail]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessagesListingContainer, null, /*#__PURE__*/_react.default.createElement(_Orders.OrdersContentHeader, {
    isDisableControl: true,
    title: t('MESSAGES', 'Messages'),
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    filterValues: filterValues,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues
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
    handleOrderCardClick: handleOrderCardClick
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
    driversList: driversList,
    onClose: function onClose() {
      return setIsOpenOrderDetail(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_Orders.OrderNotification, null));
};

var MessagesListing = function MessagesListing(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MessagesListingUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.OrdersManage, OrdersListControlProps);
};

exports.MessagesListing = MessagesListing;