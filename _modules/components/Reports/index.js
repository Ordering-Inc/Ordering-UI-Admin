"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reports = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InfoShareContext = require("../../contexts/InfoShareContext");

var _Buttons = require("../../styles/Buttons");

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

  var advancedReportsList = [{
    id: 1,
    name: t('DISTANCE', 'Distance'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Rulers, null)
  }, {
    id: 2,
    name: t('DISTANCE_STORE_CUSTOMER', 'Distance in KM from the store to customer'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Map, null)
  }, {
    id: 3,
    name: t('DISTANCE_STORE_CUSTOMER_RANGE_KM', 'Distance in KM from the store to customer (Range KM)'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.MapFill, null)
  }, {
    id: 4,
    name: t('SERVICE_TIMES', 'Service Times'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ClockHistory, null)
  }, {
    id: 5,
    name: t('DETAIL_COMPLETED_ORDERS', 'Detail of the completed orders of each delivery agency'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileRuled, null)
  }, {
    id: 6,
    name: t('NUMBER_ORDERS_SPECIFIC_RANGE', 'Number of orders within a specific range'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.FileEarmarkRuled, null)
  }];

  var handleCloseSidebar = function handleCloseSidebar() {
    setIsOpen(false);
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
      icon: report.icon // active={isOpenSettingDetails === 'checkout'}

    }));
  })), isOpen && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    sidebarId: "brand-details",
    defaultSideBarWidth: 700,
    open: isOpen,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, selectedReport === 1 && /*#__PURE__*/_react.default.createElement(_ReportsBusinessDistance.ReportsBusinessDistance, null), selectedReport === 2 && /*#__PURE__*/_react.default.createElement(_ReportsOrderDistance.ReportsOrderDistance, null), selectedReport === 3 && /*#__PURE__*/_react.default.createElement(_ReportsBusinessSpend.ReportsBusinessSpend, null), selectedReport === 4 && /*#__PURE__*/_react.default.createElement(_ReportsDriverOrderTime.ReportsDriverOrderTime, null), selectedReport === 5 && /*#__PURE__*/_react.default.createElement(_ReportsDriverSpend.ReportsDriverSpend, null), selectedReport === 6 && /*#__PURE__*/_react.default.createElement(_ReportsDriverOrder.ReportsDriverOrder, null)));
};

exports.Reports = Reports;