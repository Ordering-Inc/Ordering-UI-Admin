"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverAnalytics = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _AnalyticsDriversFilter = require("../AnalyticsDriversFilter");

var _AnalyticsCalendar = require("../AnalyticsCalendar");

var _Buttons = require("../../styles/Buttons");

var _Modal = require("../Modal");

var _AnalyticsStatusFilterBar = require("../AnalyticsStatusFilterBar");

var _AnalyticsMap = require("../AnalyticsMap");

var _AnalyticsOrdersOrSales = require("../AnalyticsOrdersOrSales");

var _AnalyticsProductCategories = require("../AnalyticsProductCategories");

var _AnalyticsOrdersStatus = require("../AnalyticsOrdersStatus");

var _AnalyticsCustomerSatisfaction = require("../AnalyticsCustomerSatisfaction");

var _AnalyticsOrdersAcceptSpend = require("../AnalyticsOrdersAcceptSpend");

var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");

var _AnalyticsTopOrders = require("../AnalyticsTopOrders");

var _AnalyticsSpendTimes = require("../AnalyticsSpendTimes");

var _AnalyticsAvailableTimes = require("../AnalyticsAvailableTimes");

var _AnalyticsBusyTimes = require("../AnalyticsBusyTimes");

var _AnalyticsSpendList = require("../AnalyticsSpendList");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriverAnalyticsUI = function DriverAnalyticsUI(props) {
  var filterList = props.filterList,
      ordersList = props.ordersList,
      salesList = props.salesList,
      topProductList = props.topProductList,
      topCategoryList = props.topCategoryList,
      orderStatusList = props.orderStatusList,
      topOrdersList = props.topOrdersList,
      customerSatisfactionList = props.customerSatisfactionList,
      ordersAcceptSpendList = props.ordersAcceptSpendList,
      arrivedPickUpSpendList = props.arrivedPickUpSpendList,
      orderLocationList = props.orderLocationList,
      availableTimesList = props.availableTimesList,
      spendTimesList = props.spendTimesList,
      busyTimesList = props.busyTimesList,
      completeSpendList = props.completeSpendList,
      pickUpSpendList = props.pickUpSpendList,
      deliverySpendList = props.deliverySpendList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      driversFilterModal = _useState2[0],
      setDriversFilterModal = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.BusinessAnalyticsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessAnalyticsHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVERS_ANALYTICS', 'Drivers analytics')), /*#__PURE__*/_react.default.createElement(_styles.HeaderFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return setDriversFilterModal(true);
    }
  }, t('DRIVERS', 'DRIVERS'), " (", (filterList === null || filterList === void 0 ? void 0 : filterList.userIds) ? filterList === null || filterList === void 0 ? void 0 : filterList.userIds.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles.AnalyticsTimeZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsFilterTimeZone.AnalyticsFilterTimeZone, props)), /*#__PURE__*/_react.default.createElement(_styles.BusinessCalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, props)))), /*#__PURE__*/_react.default.createElement(_AnalyticsStatusFilterBar.AnalyticsStatusFilterBar, props), /*#__PURE__*/_react.default.createElement(_styles.MapWrraper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsMap.AnalyticsMap, {
    locationList: orderLocationList
  })), /*#__PURE__*/_react.default.createElement(_styles.AnalyticsContentWrapper, {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersOrSales.AnalyticsOrdersOrSales, {
    isOrders: true,
    filterList: filterList,
    chartDataList: ordersList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersOrSales.AnalyticsOrdersOrSales, {
    filterList: filterList,
    chartDataList: salesList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsProductCategories.AnalyticsProductCategories, {
    filterList: filterList,
    productCategoryList: topProductList,
    isProducts: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsProductCategories.AnalyticsProductCategories, {
    filterList: filterList,
    productCategoryList: topCategoryList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsTopOrders.AnalyticsTopOrders, {
    dataList: topOrdersList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsCustomerSatisfaction.AnalyticsCustomerSatisfaction, {
    dataList: customerSatisfactionList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersStatus.AnalyticsOrdersStatus, {
    filterList: filterList,
    orderStatusList: orderStatusList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendTimes.AnalyticsSpendTimes, {
    chartDataList: spendTimesList,
    filterList: filterList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsAvailableTimes.AnalyticsAvailableTimes, {
    filterList: filterList,
    availableTimesList: availableTimesList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsBusyTimes.AnalyticsBusyTimes, {
    filterList: filterList,
    busyTimesList: busyTimesList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersAcceptSpend.AnalyticsOrdersAcceptSpend, {
    dataList: ordersAcceptSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('TIME_SPENT_IN_BUSINESS_WAITING_FOR_ORDER', 'Time spent in business waiting for order'),
    dataList: completeSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('TIME_SPENT_TO_PICKUP_ORDER', 'Time spent to pickup order'),
    dataList: pickUpSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('TIME_SPENT_TO_DELIVER_ORDER', 'Time spent to deliver order'),
    dataList: deliverySpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('TIME_SPENT_SINCE_ORDER_ACCEPTED_TO_PICKUP_AND_DELIVER_THE_ORDER', 'Time spent since order accepted to pickup and deliver the order'),
    dataList: arrivedPickUpSpendList
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "40%",
    height: "80vh",
    padding: "30px",
    title: t('DRIVERS', 'Drivers'),
    open: driversFilterModal,
    onClose: function onClose() {
      return setDriversFilterModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsDriversFilter.AnalyticsDriversFilter, _extends({}, props, {
    onClose: function onClose() {
      return setDriversFilterModal(false);
    }
  }))));
};

var DriverAnalytics = function DriverAnalytics(props) {
  var driverAnalyticsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverAnalyticsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriverAnalytics, driverAnalyticsProps);
};

exports.DriverAnalytics = DriverAnalytics;