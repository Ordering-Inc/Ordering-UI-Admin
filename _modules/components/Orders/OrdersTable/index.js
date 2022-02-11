"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _DriverSelector = require("../DriverSelector");

var _Shared = require("../../Shared");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersTable = function OrdersTable(props) {
  var isSelectedOrders = props.isSelectedOrders,
      orderList = props.orderList,
      driversList = props.driversList,
      pagination = props.pagination,
      selectedOrderIds = props.selectedOrderIds,
      orderDetailId = props.orderDetailId,
      getPageOrders = props.getPageOrders,
      handleSelectedOrderIds = props.handleSelectedOrderIds,
      handleOpenOrderDetail = props.handleOpenOrderDetail,
      setSelectedOrderIds = props.setSelectedOrderIds,
      currentTourStep = props.currentTourStep,
      isTourOpen = props.isTourOpen,
      handleOpenTour = props.handleOpenTour;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAllChecked = _useState2[0],
      setIsAllChecked = _useState2[1];

  var handleChangePage = function handleChangePage(page) {
    getPageOrders(pagination.pageSize, page);
  };

  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageOrders(pageSize, expectedPage);
  };

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openPopover = _useState4[0],
      setOpenPopover = _useState4[1];

  var _useState5 = (0, _react.useState)({
    status: true,
    orderNumber: true,
    dateTime: true,
    business: true,
    customer: true,
    driver: true,
    advanced: true,
    total: true
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      allowColumns = _useState6[0],
      setAllowColumns = _useState6[1];

  var optionsDefault = [{
    value: 'status',
    content: t('STATUS', 'Status')
  }, {
    value: 'orderNumber',
    content: t('INVOICE_ORDER_NO', 'Order No.')
  }, {
    value: 'dateTime',
    content: t('DATE_TIME', 'Date and time')
  }, {
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'customer',
    content: t('CUSTOMER', 'Customer')
  }, {
    value: 'driver',
    content: t('DRIVER', 'Driver')
  }, {
    value: 'advanced',
    content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
  }, {
    value: 'total',
    content: t('EXPORT_TOTAL', 'Total')
  }];

  var getLogisticTag = function getLogisticTag(status) {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending');

      case 1:
        return t('IN_PROGRESS', 'In progress');

      case 2:
        return t('IN_QUEUE', 'In queue');

      case 3:
        return t('EXPIRED', 'Expired');

      case 4:
        return t('RESOLVED', 'Resolved');

      default:
        return t('UNKNOWN', 'Unknown');
    }
  };

  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');

      case 0:
        return t('NORMAL', 'Normal');

      case 1:
        return t('HIGH', 'High');

      case 2:
        return t('URGENT', 'Urgent');

      default:
        return t('UNKNOWN', 'Unknown');
    }
  };

  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22;

    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED_BY_ADMIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed by admin')
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected')
    }, {
      key: 3,
      value: t('ORDER_STATUS_IN_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver arrived to business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver')
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder')
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready')
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer')
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer')
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer')
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business')
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer')
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business')
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };

  var handleClickOrder = function handleClickOrder(order, e) {
    var inValid = !isSelectedOrders && (e.target.closest('.orderCheckBox') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'));
    if (inValid) return;
    handleOpenOrderDetail(order);
  };

  var handleSelecteAllOrder = function handleSelecteAllOrder() {
    var orderIds = orderList.orders.reduce(function (ids, order) {
      return [].concat(_toConsumableArray(ids), [order.id]);
    }, []);

    if (!isAllChecked) {
      setSelectedOrderIds([].concat(_toConsumableArray(selectedOrderIds), _toConsumableArray(orderIds)));
    } else {
      var orderIdsToDeleteSet = new Set(orderIds);
      var updatedSelectedOrderIds = selectedOrderIds.filter(function (name) {
        return !orderIdsToDeleteSet.has(name);
      });
      setSelectedOrderIds(updatedSelectedOrderIds);
    }
  };

  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    var orderIds = orderList.orders.reduce(function (ids, order) {
      return [].concat(_toConsumableArray(ids), [order.id]);
    }, []);

    var _isAllChecked = orderIds.every(function (elem) {
      return selectedOrderIds.includes(elem);
    });

    setIsAllChecked(_isAllChecked);
  }, [orderList.orders, selectedOrderIds]);

  var handleChangeKeyboard = function handleChangeKeyboard(evt) {
    if (evt.keyCode === 37 && currentTourStep === 1) handleOpenTour();
    if (evt.keyCode === 37 && currentTourStep === 4) handleOpenOrderDetail(orderList === null || orderList === void 0 ? void 0 : orderList.orders[0], true);
    if (evt.keyCode === 39 && currentTourStep === 0) handleOpenOrderDetail(orderList === null || orderList === void 0 ? void 0 : orderList.orders[0]);
  };

  (0, _react.useEffect)(function () {
    if (!isTourOpen) return;
    document.addEventListener('keydown', handleChangeKeyboard);
    return function () {
      return document.removeEventListener('keydown', handleChangeKeyboard);
    };
  }, [isTourOpen, currentTourStep]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    id: "orderTable",
    isSelectedOrders: isSelectedOrders,
    noScroll: isTourOpen && currentTourStep === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Table, {
    className: "orders_table",
    isSelectedOrders: isSelectedOrders
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: !(allowColumns !== null && allowColumns !== void 0 && allowColumns.orderNumber || allowColumns !== null && allowColumns !== void 0 && allowColumns.dateTime) ? 'orderNo small' : 'orderNo'
  }, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
    isChecked: !orderList.loading && isAllChecked,
    onClick: function onClick() {
      return handleSelecteAllOrder();
    },
    className: "orderCheckBox"
  }, !orderList.loading && isAllChecked ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), t('ORDER', 'Order')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("th", {
    className: "statusInfo"
  }, t('STATUS', 'Status')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", {
    className: "businessInfo"
  }, t('BUSINESS', 'Business')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("th", {
    className: "customerInfo"
  }, t('CUSTOMER', 'Customer')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.driver) && /*#__PURE__*/_react.default.createElement("th", {
    className: "driverInfo"
  }, t('DRIVER', 'Driver')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 3,
    className: "advanced"
  }, t('ADVANCED_LOGISTICS', 'Advanced logistics')), /*#__PURE__*/_react.default.createElement("th", {
    className: "orderPrice"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    open: openPopover,
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    onClick: function onClick() {
      return setOpenPopover(!openPopover);
    },
    onClose: function onClose() {
      return setOpenPopover(false);
    },
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), orderList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: !(allowColumns !== null && allowColumns !== void 0 && allowColumns.orderNumber || allowColumns !== null && allowColumns !== void 0 && allowColumns.dateTime) ? 'orderNo small' : 'orderNo'
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 25,
      style: {
        margin: '10px'
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.driver) && /*#__PURE__*/_react.default.createElement("td", {
      className: "driverInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.DriversInfo, {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      style: {
        margin: '10px'
      }
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.deliveryType) && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderType"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 35,
      height: 35
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "logistic"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "attempts"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "priority"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), /*#__PURE__*/_react.default.createElement("td", {
      className: "orderPrice"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.total) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))));
  }) : orderList.orders.map(function (order, i) {
    var _getOrderStatus, _order$business, _theme$images, _theme$images$dummies, _order$business2, _order$business3, _order$business3$city, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$summary;

    return /*#__PURE__*/_react.default.createElement(_styles.OrderTbody, {
      key: i,
      className: parseInt(orderDetailId) === order.id ? 'active' : '',
      isCustomStyle: isSelectedOrders,
      onClick: function onClick(e) {
        return handleClickOrder(order, e);
      },
      "data-tour": i === 0 ? 'tour_start' : ''
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      className: !(allowColumns !== null && allowColumns !== void 0 && allowColumns.orderNumber || allowColumns !== null && allowColumns !== void 0 && allowColumns.dateTime) ? 'small' : ''
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
      isChecked: selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id),
      onClick: function onClick() {
        return handleSelectedOrderIds(order.id);
      },
      className: "orderCheckBox"
    }, selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.orderNumber) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('INVOICE_ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.dateTime) && /*#__PURE__*/_react.default.createElement("p", {
      className: "date"
    }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    }))))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.status) && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : (_order$business3$city = _order$business3.city) === null || _order$business3$city === void 0 ? void 0 : _order$business3$city.name)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.customer) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.cellphone)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.driver) && /*#__PURE__*/_react.default.createElement("td", null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.DriversInfo, {
      className: "driverInfo",
      noClick: isTourOpen && currentTourStep === 0
    }, /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
      orderView: true,
      padding: "5px 0",
      defaultValue: order !== null && order !== void 0 && order.driver_id ? order.driver_id : 'default',
      drivers: driversList.drivers,
      order: order
    }))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "logistic"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status)))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "attempts"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.advanced) && /*#__PURE__*/_react.default.createElement("td", {
      className: "priority"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority)))), /*#__PURE__*/_react.default.createElement("td", {
      className: "orderPrice"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.total) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total)), !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement(TimgeAgo, {
      order: order
    })))));
  }))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
};

exports.OrdersTable = OrdersTable;

var TimgeAgo = function TimgeAgo(props) {
  var order = props.order;

  var _useUtils3 = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils4 = _slicedToArray(_useUtils3, 1),
      getTimeAgo = _useUtils4[0].getTimeAgo;

  var _useState7 = (0, _react.useState)(order !== null && order !== void 0 && order.delivery_datetime_utc ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })),
      _useState8 = _slicedToArray(_useState7, 2),
      diffTime = _useState8[0],
      setDiffTime = _useState8[1];

  (0, _react.useEffect)(function () {
    var deActive = (order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12;
    if (deActive) return;
    var timer = setInterval(function () {
      var diff = order !== null && order !== void 0 && order.delivery_datetime_utc ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
        utc: false
      });
      setDiffTime(diff);
    }, 60 * 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("p", null, diffTime);
};