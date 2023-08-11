"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsOrdersOrSales = void 0;
var _react = _interopRequireWildcard(require("react"));
require("chartjs-adapter-moment");
var _styles = require("./styles");
var _BsArrowsAngleExpand = _interopRequireDefault(require("@meronex/icons/bs/BsArrowsAngleExpand"));
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactChartjs = require("react-chartjs-2");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _GraphLoadingMessage = require("../GraphLoadingMessage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsOrdersOrSales = function AnalyticsOrdersOrSales(props) {
  var isOrders = props.isOrders,
    chartDataList = props.chartDataList,
    filterList = props.filterList,
    countryCode = props.countryCode;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var chartRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowPreview = _useState2[0],
    setIsShowPreview = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dataOptions = _useState4[0],
    setDataOptions = _useState4[1];
  var options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#CED4DA'
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    pointRadius: 0
  };
  var TotalOrders = function TotalOrders() {
    var orders = 0;
    var _iterator = _createForOfIteratorHelper(chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var data = _step.value;
        orders += data.orders;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return orders;
  };
  var TotalSales = function TotalSales() {
    var sales = 0;
    var _iterator2 = _createForOfIteratorHelper(chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var data = _step2.value;
        sales += data.sales;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var totalSales = countryCode ? parsePrice(sales.toFixed(2), {
      separator: '.'
    }) : sales.toFixed(2);
    return totalSales;
  };
  var downloadCSV = function downloadCSV() {
    var csv = "".concat(t('TIME', 'Time'), ", ").concat(isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'), "\n");
    var _iterator3 = _createForOfIteratorHelper(chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var row = _step3.value;
        csv += "".concat(row.time, ",");
        csv += "".concat(isOrders ? row.orders : row.sales, ",");
        csv += '\n';
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var link = document.createElement('a');
    var fileSuffix = new Date().getTime();
    var exportName = isOrders ? 'orders' : 'sales';
    link.download = "".concat(exportName, "_").concat(fileSuffix, ".csv");
    var blob = new Blob(["\uFEFF", csv], {
      type: 'text/csv'
    });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function () {
      link.href = reader.result;
      link.click();
    };
  };
  var previewChart = function previewChart() {
    if ((chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data.length) === 0) return;
    setIsShowPreview(true);
  };
  var generateLabel = function generateLabel() {
    var values = [];
    (chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data) && chartDataList.data.forEach(function (data) {
      values.push(data.time);
    });
    return values;
  };
  var generateData = function generateData() {
    var values = chartDataList.data.map(function (item) {
      return isOrders ? item.orders : item.sales;
    });
    return [{
      label: isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'),
      data: _toConsumableArray(values),
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    }];
  };
  (0, _react.useEffect)(function () {
    var _chartDataList$data;
    if (chartDataList !== null && chartDataList !== void 0 && chartDataList.data && (chartDataList === null || chartDataList === void 0 ? void 0 : (_chartDataList$data = chartDataList.data) === null || _chartDataList$data === void 0 ? void 0 : _chartDataList$data.length) > 0) {
      var defaultData = {
        labels: generateLabel(),
        datasets: generateData()
      };
      setDataOptions(defaultData);
    }
  }, [chartDataList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsArrowsAngleExpand.default, {
    onClick: previewChart
  }), /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    className: "download-view",
    onClick: downloadCSV
  }))), /*#__PURE__*/_react.default.createElement(_styles.ChartContentWrapper, null, chartDataList !== null && chartDataList !== void 0 && chartDataList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : (chartDataList === null || chartDataList === void 0 ? void 0 : chartDataList.data.length) > 0 && dataOptions ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: dataOptions,
    options: options,
    ref: chartRef
  }) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data'))), /*#__PURE__*/_react.default.createElement(_styles.ChartFooterContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, chartDataList !== null && chartDataList !== void 0 && chartDataList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  }) : isOrders ? /*#__PURE__*/_react.default.createElement(TotalOrders, null) : /*#__PURE__*/_react.default.createElement(TotalSales, null)), chartDataList !== null && chartDataList !== void 0 && chartDataList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : /*#__PURE__*/_react.default.createElement("p", null, isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'), " ", t('TOTALS', 'totals')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "80vh",
    padding: "30px",
    title: isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'),
    open: isShowPreview,
    onClose: function onClose() {
      return setIsShowPreview(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ChartContentWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: dataOptions,
    options: options
  }))));
};
exports.AnalyticsOrdersOrSales = AnalyticsOrdersOrSales;