"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsSaleAndCategory = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactChartjs = require("react-chartjs-2");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _AnalyticsBusinessFilter = require("../AnalyticsBusinessFilter");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _ReportsBrandFilter = require("../ReportsBrandFilter");
var _CountryFilter = require("../CountryFilter");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReportsSaleAndCategoryUI = function ReportsSaleAndCategoryUI(props) {
  var _filterList$franchise, _reportData$content3, _reportData$content3$, _reportData$content3$2, _reportData$content3$3, _reportData$content4, _reportData$content4$, _reportData$content4$2, _reportData$content4$3, _reportData1$content, _reportData1$content$, _reportData1$content$2, _reportData1$content$3, _reportData1$content2, _reportData1$content3, _reportData1$content4, _reportData1$content5;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    reportData = props.reportData,
    reportData1 = props.reportData1;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBusinessFilter = _useState2[0],
    setIsBusinessFilter = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isBrandFilter = _useState4[0],
    setIsBrandFilter = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    openCountryFilter = _useState6[0],
    setOpenCountryFilter = _useState6[1];
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };
  var downloadCSV = function downloadCSV(isProduct) {
    var _reportData$content, _reportData$content$d, _reportData$content$d2, _reportData$content2, _reportData$content2$, _reportData$content2$2;
    if (!(reportData !== null && reportData !== void 0 && (_reportData$content = reportData.content) !== null && _reportData$content !== void 0 && (_reportData$content$d = _reportData$content.dataset) !== null && _reportData$content$d !== void 0 && (_reportData$content$d2 = _reportData$content$d.dataset) !== null && _reportData$content$d2 !== void 0 && _reportData$content$d2.data)) return;
    var csv = "".concat(isProduct ? t('PRODUCTS', 'Products') : t('CATEGORIES', 'Categories'), ", ").concat(t('ORDERS', 'Orders'), "\n");
    var _iterator = _createForOfIteratorHelper(reportData === null || reportData === void 0 ? void 0 : (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 ? void 0 : (_reportData$content2$ = _reportData$content2.dataset) === null || _reportData$content2$ === void 0 ? void 0 : (_reportData$content2$2 = _reportData$content2$.dataset) === null || _reportData$content2$2 === void 0 ? void 0 : _reportData$content2$2.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        csv += row.y + ',';
        csv += "".concat(row.x, ",");
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
    downloadLink.download = "top_".concat(isProduct ? 'selling' : 'cagegory', "_").concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  var generateData = function generateData(chartData) {
    var _chartData$content, _chartData$content$da, _chartData$content$da2;
    var datasets = [];
    if (chartData !== null && chartData !== void 0 && (_chartData$content = chartData.content) !== null && _chartData$content !== void 0 && (_chartData$content$da = _chartData$content.dataset) !== null && _chartData$content$da !== void 0 && (_chartData$content$da2 = _chartData$content$da.dataset) !== null && _chartData$content$da2 !== void 0 && _chartData$content$da2.data) {
      var _chartData$content2, _chartData$content2$d, _chartData$content2$d2;
      var _iterator2 = _createForOfIteratorHelper(chartData === null || chartData === void 0 ? void 0 : (_chartData$content2 = chartData.content) === null || _chartData$content2 === void 0 ? void 0 : (_chartData$content2$d = _chartData$content2.dataset) === null || _chartData$content2$d === void 0 ? void 0 : (_chartData$content2$d2 = _chartData$content2$d.dataset) === null || _chartData$content2$d2 === void 0 ? void 0 : _chartData$content2$d2.data),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _data = _step2.value;
          datasets.push(_data.x);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return datasets;
  };
  var generateLabels = function generateLabels(chartData) {
    var _chartData$content3, _chartData$content3$d, _chartData$content3$d2;
    var labels = [];
    if (chartData !== null && chartData !== void 0 && (_chartData$content3 = chartData.content) !== null && _chartData$content3 !== void 0 && (_chartData$content3$d = _chartData$content3.dataset) !== null && _chartData$content3$d !== void 0 && (_chartData$content3$d2 = _chartData$content3$d.dataset) !== null && _chartData$content3$d2 !== void 0 && _chartData$content3$d2.data) {
      var _chartData$content4, _chartData$content4$d, _chartData$content4$d2;
      var _iterator3 = _createForOfIteratorHelper(chartData === null || chartData === void 0 ? void 0 : (_chartData$content4 = chartData.content) === null || _chartData$content4 === void 0 ? void 0 : (_chartData$content4$d = _chartData$content4.dataset) === null || _chartData$content4$d === void 0 ? void 0 : (_chartData$content4$d2 = _chartData$content4$d.dataset) === null || _chartData$content4$d2 === void 0 ? void 0 : _chartData$content4$d2.data),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var label = _step3.value;
          labels.push(label.y);
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
    labels: generateLabels(reportData),
    datasets: [{
      label: t('ORDERS', 'Orders'),
      data: generateData(reportData),
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
  var data1 = {
    labels: generateLabels(reportData1),
    datasets: [{
      label: t('ORDERS', 'Orders'),
      data: generateData(reportData1),
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
  return /*#__PURE__*/_react.default.createElement(_styles2.ReportsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('TOP_SELLING_AND_CATEOGRY', 'Top selling and category')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBrandFilter(true);
    }
  }, t('BRAND', 'Brand'), " (", filterList !== null && filterList !== void 0 && filterList.franchises_id ? filterList === null || filterList === void 0 ? void 0 : (_filterList$franchise = filterList.franchises_id) === null || _filterList$franchise === void 0 ? void 0 : _filterList$franchise.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBusinessFilter(true);
    }
  }, t('BUSINESS', 'Business'), " (", filterList !== null && filterList !== void 0 && filterList.businessIds ? filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setOpenCountryFilter(true);
    }
  }, t('COUNTRY', 'Country'))), /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ChartListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ChartBlockWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ChartTitleBlock, {
    active: (reportData === null || reportData === void 0 ? void 0 : (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 ? void 0 : (_reportData$content3$ = _reportData$content3.dataset) === null || _reportData$content3$ === void 0 ? void 0 : (_reportData$content3$2 = _reportData$content3$.dataset) === null || _reportData$content3$2 === void 0 ? void 0 : (_reportData$content3$3 = _reportData$content3$2.data) === null || _reportData$content3$3 === void 0 ? void 0 : _reportData$content3$3.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('TOP_SELLINGS', 'Top sellings')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV(true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ChartWrapper, null, reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 320
  }) : (reportData === null || reportData === void 0 ? void 0 : (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 ? void 0 : (_reportData$content4$ = _reportData$content4.dataset) === null || _reportData$content4$ === void 0 ? void 0 : (_reportData$content4$2 = _reportData$content4$.dataset) === null || _reportData$content4$2 === void 0 ? void 0 : (_reportData$content4$3 = _reportData$content4$2.data) === null || _reportData$content4$3 === void 0 ? void 0 : _reportData$content4$3.length) > 0 ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options
  }) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_styles2.ChartBlockWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ChartTitleBlock, {
    active: (reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content = reportData1.content) === null || _reportData1$content === void 0 ? void 0 : (_reportData1$content$ = _reportData1$content.dataset) === null || _reportData1$content$ === void 0 ? void 0 : (_reportData1$content$2 = _reportData1$content$.dataset) === null || _reportData1$content$2 === void 0 ? void 0 : (_reportData1$content$3 = _reportData1$content$2.data) === null || _reportData1$content$3 === void 0 ? void 0 : _reportData1$content$3.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('TOP_CATEGORIES', 'Top categories')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV();
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ChartWrapper, null, reportData1 !== null && reportData1 !== void 0 && reportData1.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 320
  }) : (reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content2 = reportData1.content) === null || _reportData1$content2 === void 0 ? void 0 : (_reportData1$content3 = _reportData1$content2.dataset) === null || _reportData1$content3 === void 0 ? void 0 : (_reportData1$content4 = _reportData1$content3.dataset) === null || _reportData1$content4 === void 0 ? void 0 : (_reportData1$content5 = _reportData1$content4.data) === null || _reportData1$content5 === void 0 ? void 0 : _reportData1$content5.length) > 0 ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data1,
    options: options
  }) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data'))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('BUSINESSES', 'Businesses'),
    open: isBusinessFilter,
    onClose: function onClose() {
      return setIsBusinessFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsBusinessFilter.AnalyticsBusinessFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsBusinessFilter(false);
    },
    isFranchise: true
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
var ReportsSaleAndCategory = function ReportsSaleAndCategory(props) {
  var reportsSaleAndCategoryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsSaleAndCategoryUI,
    endpoint: 'top_selling_v2',
    endpoint1: 'top_categories_v2'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsSaleAndCategoryProps);
};
exports.ReportsSaleAndCategory = ReportsSaleAndCategory;