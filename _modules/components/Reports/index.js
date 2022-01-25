"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reports = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InfoShareContext = require("../../contexts/InfoShareContext");

var _Buttons = require("../../styles/Buttons");

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SettingItemUI = require("../SettingItemUI");

var _SideBar = require("../SideBar");

var _ReportsBusinessDistance = require("../ReportsBusinessDistance");

var _styles = require("./styles");

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

var _ReportsAverageSales = require("../ReportsAverageSales");

var _ReportsGeneralSales = require("../ReportsGeneralSales");

var _ReportsSaleAndCategory = require("../ReportsSaleAndCategory");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Reports = function Reports(props) {
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
  }];

  var handleCloseSidebar = function handleCloseSidebar() {
    setIsOpen(false);
    setSelectedReport(0);
  };

  var handleOpenSlider = function handleOpenSlider(index) {
    setSelectedReport(index);
    setIsOpen(true);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ReportsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('ADVANCED_REPORTS', 'Advanced Reports'))), /*#__PURE__*/_react.default.createElement(_styles.ReportsList, {
    className: "row"
  }, advancedReportsList && advancedReportsList.map(function (report, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      className: "col-md-6 col-lg-4",
      onClick: function onClick() {
        return handleOpenSlider(report.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_SettingItemUI.SettingItemUI, {
      title: report.name // description={t('DISTANCE_DESC')}
      ,
      description: report.description,
      icon: report.icon,
      active: selectedReport === report.id
    }));
  })), isOpen && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    sidebarId: "brand-details",
    defaultSideBarWidth: width - sidebarWidth,
    open: isOpen,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, selectedReport === 1 && /*#__PURE__*/_react.default.createElement(_ReportsBusinessDistance.ReportsBusinessDistance, null), selectedReport === 2 && /*#__PURE__*/_react.default.createElement(_ReportsOrderDistance.ReportsOrderDistance, null), selectedReport === 3 && /*#__PURE__*/_react.default.createElement(_ReportsBusinessSpend.ReportsBusinessSpend, null), selectedReport === 4 && /*#__PURE__*/_react.default.createElement(_ReportsDriverOrderTime.ReportsDriverOrderTime, null), selectedReport === 5 && /*#__PURE__*/_react.default.createElement(_ReportsDriverSpend.ReportsDriverSpend, null), selectedReport === 6 && /*#__PURE__*/_react.default.createElement(_ReportsDriverOrder.ReportsDriverOrder, null), selectedReport === 7 && /*#__PURE__*/_react.default.createElement(_ReportsDriverSchedule.ReportsDriverSchedule, null), selectedReport === 8 && /*#__PURE__*/_react.default.createElement(_ReportsOrderStatus.ReportsOrderStatus, null), selectedReport === 9 && /*#__PURE__*/_react.default.createElement(_ReportsHeatMap.ReportsHeatMap, null), selectedReport === 10 && /*#__PURE__*/_react.default.createElement(_ReportsDriverDistance.ReportsDriverDistance, null), selectedReport === 11 && /*#__PURE__*/_react.default.createElement(_ReportsSpentTime.ReportsSpentTime, null), selectedReport === 12 && /*#__PURE__*/_react.default.createElement(_ReportsTopDrivers.ReportsTopDrivers, null), selectedReport === 13 && /*#__PURE__*/_react.default.createElement(_ReportsOrders.ReportsOrders, null), selectedReport === 14 && /*#__PURE__*/_react.default.createElement(_ReportsSales.ReportsSales, null), selectedReport === 15 && /*#__PURE__*/_react.default.createElement(_ReportsUsers.ReportsUsers, null), selectedReport === 16 && /*#__PURE__*/_react.default.createElement(_ReportsCustomer.ReportsCustomer, null), selectedReport === 17 && /*#__PURE__*/_react.default.createElement(_ReportsPaymethodSales.ReportsPaymethodSales, null), selectedReport === 18 && /*#__PURE__*/_react.default.createElement(_ReportsAverageSales.ReportsAverageSales, null), selectedReport === 19 && /*#__PURE__*/_react.default.createElement(_ReportsGeneralSales.ReportsGeneralSales, null), selectedReport === 20 && /*#__PURE__*/_react.default.createElement(_ReportsSaleAndCategory.ReportsSaleAndCategory, null)));
};

exports.Reports = Reports;