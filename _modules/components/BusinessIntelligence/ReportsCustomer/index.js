"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsCustomer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactChartjs = require("react-chartjs-2");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _Shared = require("../../Shared");
var _ReportsAppIdFilter = require("../ReportsAppIdFilter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
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
var ReportsCustomerUI = function ReportsCustomerUI(props) {
  var _reportData$content7, _reportData$content8, _reportData$content9;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    reportData = props.reportData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAppIdFilter = _useState2[0],
    setIsAppIdFilter = _useState2[1];
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };
  var downloadCSV = function downloadCSV() {
    var _reportData$content, _reportData$content2;
    if (!(reportData !== null && reportData !== void 0 && (_reportData$content = reportData.content) !== null && _reportData$content !== void 0 && (_reportData$content = _reportData$content.dataset) !== null && _reportData$content !== void 0 && (_reportData$content = _reportData$content.dataset) !== null && _reportData$content !== void 0 && _reportData$content.data)) return;
    var csv = "".concat(t('CATEGORY', 'Category'), ", ").concat(t('MARK', 'Mark'), "\n");
    var _iterator = _createForOfIteratorHelper(reportData === null || reportData === void 0 || (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.dataset) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.dataset[0]) === null || _reportData$content2 === void 0 ? void 0 : _reportData$content2.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        csv += row.x + ',';
        csv += "".concat(row.y, ",");
        csv += '\n';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var downloadLink = document.createElement('a');
    var blob = new Blob(["\uFEFF", csv]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    var fileSuffix = new Date().getTime();
    downloadLink.download = "customer_satisfaction_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  var generateData = function generateData() {
    var _reportData$content3;
    var datasets = [];
    if (reportData !== null && reportData !== void 0 && (_reportData$content3 = reportData.content) !== null && _reportData$content3 !== void 0 && (_reportData$content3 = _reportData$content3.dataset) !== null && _reportData$content3 !== void 0 && (_reportData$content3 = _reportData$content3.dataset[0]) !== null && _reportData$content3 !== void 0 && _reportData$content3.data) {
      var _reportData$content4;
      var _iterator2 = _createForOfIteratorHelper(reportData === null || reportData === void 0 || (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 || (_reportData$content4 = _reportData$content4.dataset) === null || _reportData$content4 === void 0 || (_reportData$content4 = _reportData$content4.dataset[0]) === null || _reportData$content4 === void 0 ? void 0 : _reportData$content4.data),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _data = _step2.value;
          datasets.push(_data.y);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return datasets;
  };
  var generateLabels = function generateLabels() {
    var _reportData$content5;
    var labels = [];
    if (reportData !== null && reportData !== void 0 && (_reportData$content5 = reportData.content) !== null && _reportData$content5 !== void 0 && (_reportData$content5 = _reportData$content5.dataset) !== null && _reportData$content5 !== void 0 && (_reportData$content5 = _reportData$content5.dataset[0]) !== null && _reportData$content5 !== void 0 && _reportData$content5.data) {
      var _reportData$content6;
      var _iterator3 = _createForOfIteratorHelper(reportData === null || reportData === void 0 || (_reportData$content6 = reportData.content) === null || _reportData$content6 === void 0 || (_reportData$content6 = _reportData$content6.dataset) === null || _reportData$content6 === void 0 || (_reportData$content6 = _reportData$content6.dataset[0]) === null || _reportData$content6 === void 0 ? void 0 : _reportData$content6.data),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var label = _step3.value;
          labels.push(label.x);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return labels;
  };
  var data = {
    labels: generateLabels(),
    datasets: [{
      label: t(reportData === null || reportData === void 0 || (_reportData$content7 = reportData.content) === null || _reportData$content7 === void 0 || (_reportData$content7 = _reportData$content7.dataset) === null || _reportData$content7 === void 0 || (_reportData$content7 = _reportData$content7.dataset[0]) === null || _reportData$content7 === void 0 || (_reportData$content7 = _reportData$content7.label) === null || _reportData$content7 === void 0 ? void 0 : _reportData$content7.toUpperCase(), 'Report header qualification'),
      data: generateData(),
      fill: true,
      borderColor: '#2C7BE5',
      backgroundColor: '#2C7BE5',
      borderWidth: 2,
      borderRadius: 50,
      borderSkipped: true,
      barThickness: 13,
      maxBarThickness: 25
    }]
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        }
      },
      y: {
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          }
        },
        height: 10
      }
    },
    plugins: {
      legend: {
        display: true
      }
    },
    pointRadius: 0
  };
  return /*#__PURE__*/_react.default.createElement(_styles.ReportsTopDriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('CUSTOMER_SATISFACTION', 'Customer safisfaction')), /*#__PURE__*/_react.default.createElement(_styles.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    onClick: function onClick() {
      return setIsAppIdFilter(true);
    }
  }, t('APP_ID', 'App id'), " (", filterList !== null && filterList !== void 0 && filterList.app_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.app_ids.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles.TimeZoneAndCalendar, null, /*#__PURE__*/_react.default.createElement(_styles.AnalyticsTimeZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsFilterTimeZone.AnalyticsFilterTimeZone, props)), /*#__PURE__*/_react.default.createElement(_styles.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList
  })))), /*#__PURE__*/_react.default.createElement(_styles.ChartBlockWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ChartTitleBlock, {
    active: (reportData === null || reportData === void 0 || (_reportData$content8 = reportData.content) === null || _reportData$content8 === void 0 || (_reportData$content8 = _reportData$content8.dataset) === null || _reportData$content8 === void 0 || (_reportData$content8 = _reportData$content8.dataset) === null || _reportData$content8 === void 0 || (_reportData$content8 = _reportData$content8.data) === null || _reportData$content8 === void 0 ? void 0 : _reportData$content8.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('CUSTOMER_SATISFACTION', 'Customer safisfaction')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV();
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ChartWrapper, null, reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 350
  }) : (reportData === null || reportData === void 0 || (_reportData$content9 = reportData.content) === null || _reportData$content9 === void 0 || (_reportData$content9 = _reportData$content9.dataset) === null || _reportData$content9 === void 0 || (_reportData$content9 = _reportData$content9.dataset[0]) === null || _reportData$content9 === void 0 || (_reportData$content9 = _reportData$content9.data) === null || _reportData$content9 === void 0 ? void 0 : _reportData$content9.length) > 0 ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options
  }) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('APP_ID', 'App id'),
    open: isAppIdFilter,
    onClose: function onClose() {
      return setIsAppIdFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsAppIdFilter.ReportsAppIdFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsAppIdFilter(false);
    }
  }))));
};
var ReportsCustomer = function ReportsCustomer(props) {
  var reportsCustomerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsCustomerUI,
    endpoint: 'customer_satisfaction_v2'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsCustomerProps);
};
exports.ReportsCustomer = ReportsCustomer;