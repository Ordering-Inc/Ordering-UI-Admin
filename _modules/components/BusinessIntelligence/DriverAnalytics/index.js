"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    deliverySpendList = props.deliverySpendList,
    countryCode = props.countryCode;
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
    chartDataList: ordersList,
    countryCode: countryCode
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsDriverOrders.AnalyticsDriverOrders, {
    filterList: filterList,
    chartDataList: salesList,
    countryCode: countryCode
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
    title: t('ARRIVED_PICKUP_SPEND', 'Time spend since the driver in business until he picks up the order'),
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
  }))), /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, _extends({}, props, {
    openCountryFilter: openCountryFilter,
    setOpenCountryFilter: setOpenCountryFilter
  })));
};
var DriverAnalytics = exports.DriverAnalytics = function DriverAnalytics(props) {
  var driverAnalyticsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverAnalyticsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriverAnalytics, driverAnalyticsProps);
};