"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reports = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _SettingItemUI = require("../SettingItemUI");
var _ReportsBusinessDistance = require("../ReportsBusinessDistance");
var _ReportsOrderDistance = require("../ReportsOrderDistance");
var _ReportsBusinessSpend = require("../ReportsBusinessSpend");
var _ReportsDriverSpend = require("../ReportsDriverSpend");
var _ReportsDriverOrder = require("../ReportsDriverOrder");
var _ReportsDriverOrderTime = require("../ReportsDriverOrderTime");
var _ReportsDriverSchedule = require("../ReportsDriverSchedule");
var _ReportsOrderStatus = require("../ReportsOrderStatus");
var _ReportsHeatMap = require("../ReportsHeatMap");
var _ReportsDriverDistance = require("../ReportsDriverDistance");
var _ReportsSpentTime = require("../ReportsSpentTime");
var _ReportsTopDrivers = require("../ReportsTopDrivers");
var _ReportsOrders = require("../ReportsOrders");
var _ReportsSales = require("../ReportsSales");
var _ReportsUsers = require("../ReportsUsers");
var _ReportsCustomer = require("../ReportsCustomer");
var _ReportsPaymethodSales = require("../ReportsPaymethodSales");
var _ReportsSaleAndCategory = require("../ReportsSaleAndCategory");
var _ReportsAverageSales = require("../ReportsAverageSales");
var _ReportsGeneralSales = require("../ReportsGeneralSales");
var _ReportsSlaOrders = require("./ReportsSlaOrders");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Reports = exports.Reports = function Reports(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedReport = _useState4[0],
    setSelectedReport = _useState4[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var sidebarWidth = 240;
  var advancedReportsList = [{
    id: 1,
    name: t('DISTANCE', 'Distance'),
    description: t('DISTANCE_DESC', 'Distance'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Rulers, null)
  }, {
    id: 2,
    name: t('DISTANCE_STORE_CUSTOMER', 'Distance in KM from the store to customer'),
    description: t('DISTANCE_STORE_CUSTOMER_DESC', 'Distance in KM from the store to customer'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Map, null)
  }, {
    id: 3,
    name: t('DISTANCE_STORE_CUSTOMER_RANGE_KM', 'Distance in KM from the store to customer (Range KM)'),
    description: t('DISTANCE_STORE_CUSTOMER_RANGE_KM_DESC', 'Distance in KM from the store to customer (Range KM)'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.MapFill, null)
  }, {
    id: 4,
    name: t('SERVICE_TIMES', 'Service Times'),
    description: t('SERVICE_TIMES_DESCRIPTION', 'Service Times'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ClockHistory, null)
  }, {
    id: 5,
    name: t('DETAIL_COMPLETED_ORDERS', 'Detail of the completed orders of each delivery agency'),
    description: t('DETAIL_COMPLETED_ORDERS_DESC', 'Detail of the completed orders of each delivery agency'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileRuled, null)
  }, {
    id: 6,
    name: t('NUMBER_ORDERS_SPECIFIC_RANGE', 'Number of orders within a specific range'),
    description: t('NUMBER_ORDERS_SPECIFIC_RANGE_DESC', 'Number of orders within a specific range'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileEarmarkRuled, null)
  }, {
    id: 7,
    name: t('DRIVER_SCHEDULE', 'Driver schedule'),
    description: t('DRIVER_SCHEDULE_DESC', 'Driver schedule description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CalendarCheck, null)
  }, {
    id: 8,
    name: t('ORDER_STATUS_TEXT', 'Order status'),
    description: t('ORDER_STATUS_DESC', 'Order status description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart4, null)
  }, {
    id: 9,
    name: t('HEAT_MAP_WITH', 'Heat map with'),
    description: t('HEAT_MAP_WITH_DESC', 'Heat map with description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAltFill, null)
  }, {
    id: 10,
    name: t('DRIVER_DISTANCE', 'Driver distance'),
    description: t('DRIVER_DISTANCE_DESC', 'Driver distance description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Vr, null)
  }, {
    id: 11,
    name: t('DRIVER_TIME', 'Driver Time'),
    description: t('DRIVER_TIME_DESC', 'Driver time description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Alarm, null)
  }, {
    id: 12,
    name: t('TOP_DRIVERS', 'Top drivers'),
    description: t('TOP_DRIVERS_DESC', 'Top drivers description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Truck, null)
  }, {
    id: 13,
    name: t('ORDERS', 'Orders'),
    description: t('ORDERS_DESC', 'Orders description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null)
  }, {
    id: 14,
    name: t('SALES', 'Sales'),
    description: t('SALES_DESC', 'Sales description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null)
  }, {
    id: 15,
    name: t('REGISTER_USERS', 'Register users'),
    description: t('REGISTER_USERS_DESC', 'Register users description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonCheck, null)
  }, {
    id: 16,
    name: t('CUSTOMER_SATISFACTION', 'Customer safisfaction'),
    description: t('CUSTOMER_SATISFACTION_DESC', 'Customer safisfaction description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Star, null)
  }, {
    id: 17,
    name: t('PAYMETHOD_SALES', 'Paymethod sales'),
    description: t('PAYMETHOD_SALES_DESC', 'Paymethod sales description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CreditCard, null)
  }, {
    id: 18,
    name: t('AVERAGE_SALES', 'Average sales'),
    description: t('AVERAGE_SALES_DESC', 'Average sales description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ShopWindow, null)
  }, {
    id: 19,
    name: t('GENERAL_SALES', 'General sales'),
    description: t('GENERAL_SALES_DESC', 'General sales description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Bag, null)
  }, {
    id: 20,
    name: t('TOP_SELLING_AND_CATEOGRY', 'Top selling and category'),
    description: t('TOP_SELLING_AND_CATEOGRY_DESC', 'Top selling and category description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tag, null)
  }, {
    id: 21,
    name: t('SLA_ORDERS', 'SLA orders'),
    description: t('SLA_ORDERS_DESC', 'SLA orders description'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListTask, null)
  }];
  var handleCloseSidebar = function handleCloseSidebar() {
    setIsOpen(false);
    setSelectedReport(0);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  var handleOpenSlider = function handleOpenSlider(index, isInitialRender) {
    setSelectedReport(index);
    setIsOpen(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: index
      });
    }
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      handleOpenSlider(Number(id), true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.ReportsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('ENTERPRISE_REPORTS', 'Enterprise reports'))), /*#__PURE__*/_react.default.createElement(_styles2.ReportsList, {
    className: "row"
  }, advancedReportsList && advancedReportsList.map(function (report, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      className: "col-md-6 col-lg-4",
      onClick: function onClick() {
        return handleOpenSlider(report.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
      title: report.name
      // description={t('DISTANCE_DESC')}
      ,
      description: report.description,
      icon: report.icon,
      active: selectedReport === report.id
    }));
  })), isOpen && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "brand-details",
    defaultSideBarWidth: width - sidebarWidth,
    open: isOpen,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, selectedReport === 1 && /*#__PURE__*/_react.default.createElement(_ReportsBusinessDistance.ReportsBusinessDistance, null), selectedReport === 2 && /*#__PURE__*/_react.default.createElement(_ReportsOrderDistance.ReportsOrderDistance, null), selectedReport === 3 && /*#__PURE__*/_react.default.createElement(_ReportsBusinessSpend.ReportsBusinessSpend, null), selectedReport === 4 && /*#__PURE__*/_react.default.createElement(_ReportsDriverOrderTime.ReportsDriverOrderTime, null), selectedReport === 5 && /*#__PURE__*/_react.default.createElement(_ReportsDriverSpend.ReportsDriverSpend, null), selectedReport === 6 && /*#__PURE__*/_react.default.createElement(_ReportsDriverOrder.ReportsDriverOrder, null), selectedReport === 7 && /*#__PURE__*/_react.default.createElement(_ReportsDriverSchedule.ReportsDriverSchedule, null), selectedReport === 8 && /*#__PURE__*/_react.default.createElement(_ReportsOrderStatus.ReportsOrderStatus, null), selectedReport === 9 && /*#__PURE__*/_react.default.createElement(_ReportsHeatMap.ReportsHeatMap, null), selectedReport === 10 && /*#__PURE__*/_react.default.createElement(_ReportsDriverDistance.ReportsDriverDistance, null), selectedReport === 11 && /*#__PURE__*/_react.default.createElement(_ReportsSpentTime.ReportsSpentTime, null), selectedReport === 12 && /*#__PURE__*/_react.default.createElement(_ReportsTopDrivers.ReportsTopDrivers, null), selectedReport === 13 && /*#__PURE__*/_react.default.createElement(_ReportsOrders.ReportsOrders, null), selectedReport === 14 && /*#__PURE__*/_react.default.createElement(_ReportsSales.ReportsSales, null), selectedReport === 15 && /*#__PURE__*/_react.default.createElement(_ReportsUsers.ReportsUsers, null), selectedReport === 16 && /*#__PURE__*/_react.default.createElement(_ReportsCustomer.ReportsCustomer, null), selectedReport === 17 && /*#__PURE__*/_react.default.createElement(_ReportsPaymethodSales.ReportsPaymethodSales, null), selectedReport === 18 && /*#__PURE__*/_react.default.createElement(_ReportsAverageSales.ReportsAverageSales, null), selectedReport === 19 && /*#__PURE__*/_react.default.createElement(_ReportsGeneralSales.ReportsGeneralSales, null), selectedReport === 20 && /*#__PURE__*/_react.default.createElement(_ReportsSaleAndCategory.ReportsSaleAndCategory, null), selectedReport === 21 && /*#__PURE__*/_react.default.createElement(_ReportsSlaOrders.ReportsSlaOrders, null)));
};