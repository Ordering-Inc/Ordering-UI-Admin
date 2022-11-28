"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverAnalytics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _AnalyticsDriversFilter = require("../AnalyticsDriversFilter");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _AnalyticsStatusFilterBar = require("../AnalyticsStatusFilterBar");
var _AnalyticsMap = require("../AnalyticsMap");
var _AnalyticsOrdersStatus = require("../AnalyticsOrdersStatus");
var _AnalyticsCustomerSatisfaction = require("../AnalyticsCustomerSatisfaction");
var _AnalyticsOrdersAcceptSpend = require("../AnalyticsOrdersAcceptSpend");
var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");
var _AnalyticsTopOrders = require("../AnalyticsTopOrders");
var _AnalyticsSpendTimes = require("../AnalyticsSpendTimes");
var _AnalyticsAvailableTimes = require("../AnalyticsAvailableTimes");
var _AnalyticsBusyTimes = require("../AnalyticsBusyTimes");
var _AnalyticsSpendList = require("../AnalyticsSpendList");
var _AnalyticsStatusSubFilter = require("../AnalyticsStatusSubFilter");
var _ReportsDriverGroupFilter = require("../ReportsDriverGroupFilter");
var _styles2 = require("./styles");
var _AnalyticsDriverOrders = require("../AnalyticsDriverOrders");
var _ReportsBrandFilter = require("../ReportsBrandFilter");
var _CountryFilter = require("../CountryFilter");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverAnalyticsUI = function DriverAnalyticsUI(props) {
  var handleChangeFilterList = props.handleChangeFilterList,
    filterList = props.filterList,
    ordersList = props.ordersList,
    salesList = props.salesList,
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
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      lapse: "".concat(date1, ",").concat(date2)
    }));
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    driversFilterModal = _useState2[0],
    setDriversFilterModal = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    driverGroupModal = _useState4[0],
    setDriverGroupModal = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isBrandFilter = _useState6[0],
    setIsBrandFilter = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    openCountryFilter = _useState8[0],
    setOpenCountryFilter = _useState8[1];
  return /*#__PURE__*/_react.default.createElement(_styles2.BusinessAnalyticsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessAnalyticsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVERS_ANALYTICS', 'Drivers analytics'))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setOpenCountryFilter(true);
    }
  }, t('COUNTRY', 'Country'))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBrandFilter(true);
    }
  }, t('BRAND', 'Brand'), " (", filterList !== null && filterList !== void 0 && filterList.franchises_id ? filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setDriverGroupModal(true);
    }
  }, t('DRIVER_GROUP', 'Driver group'), " (", filterList !== null && filterList !== void 0 && filterList.driver_groups_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.driver_groups_ids.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setDriversFilterModal(true);
    }
  }, t('DRIVERS', 'Drivers'), " (", filterList !== null && filterList !== void 0 && filterList.userIds ? filterList === null || filterList === void 0 ? void 0 : filterList.userIds.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsTimeZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsFilterTimeZone.AnalyticsFilterTimeZone, props)), /*#__PURE__*/_react.default.createElement(_styles2.BusinessCalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, _extends({}, props, {
    handleChangeDate: handleChangeDate
  }))))), /*#__PURE__*/_react.default.createElement(_AnalyticsStatusFilterBar.AnalyticsStatusFilterBar, props), /*#__PURE__*/_react.default.createElement(_AnalyticsStatusSubFilter.AnalyticsStatusSubFilter, props), /*#__PURE__*/_react.default.createElement(_styles2.MapWrraper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsMap.AnalyticsMap, {
    locationList: orderLocationList
  })), /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsContentWrapper, {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsDriverOrders.AnalyticsDriverOrders, {
    isOrders: true,
    filterList: filterList,
    chartDataList: ordersList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsDriverOrders.AnalyticsDriverOrders, {
    filterList: filterList,
    chartDataList: salesList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsTopOrders.AnalyticsTopOrders, {
    dataList: topOrdersList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsCustomerSatisfaction.AnalyticsCustomerSatisfaction, {
    dataList: customerSatisfactionList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersStatus.AnalyticsOrdersStatus, {
    filterList: filterList,
    orderStatusList: orderStatusList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendTimes.AnalyticsSpendTimes, {
    chartDataList: spendTimesList,
    filterList: filterList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsAvailableTimes.AnalyticsAvailableTimes, {
    filterList: filterList,
    availableTimesList: availableTimesList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsBusyTimes.AnalyticsBusyTimes, {
    filterList: filterList,
    busyTimesList: busyTimesList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersAcceptSpend.AnalyticsOrdersAcceptSpend, {
    dataList: ordersAcceptSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('ORDER_INBUSINESS_PICKUP_SPEND', 'Time spent in business waiting for order'),
    dataList: completeSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('ORDER_PICKUP_SPEND', 'Time spent to pickup order'),
    dataList: pickUpSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('ORDER_DELIVERY_SPEND', 'Time spent to deliver order'),
    dataList: deliverySpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    title: t('ORDER_COMPLETE_SPEND', 'Time spent since order accepted to pickup and deliver the order'),
    dataList: arrivedPickUpSpendList
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('DRIVER_GROUP', 'Driver group'),
    open: driverGroupModal,
    onClose: function onClose() {
      return setDriverGroupModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsDriverGroupFilter.ReportsDriverGroupFilter, _extends({}, props, {
    onClose: function onClose() {
      return setDriverGroupModal(false);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('BRAND', 'Brand'),
    open: isBrandFilter,
    onClose: function onClose() {
      return setIsBrandFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsBrandFilter.ReportsBrandFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsBrandFilter(false);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "450px",
    height: "650px",
    padding: "25px",
    open: openCountryFilter,
    onClose: function onClose() {
      return setOpenCountryFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, _extends({}, props, {
    onClose: function onClose() {
      return setOpenCountryFilter(false);
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