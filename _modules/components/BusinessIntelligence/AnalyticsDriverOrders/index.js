"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsDriverOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
require("chartjs-adapter-moment");
var _polished = require("polished");
var _BsArrowsAngleExpand = _interopRequireDefault(require("@meronex/icons/bs/BsArrowsAngleExpand"));
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactChartjs = require("react-chartjs-2");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _GraphLoadingMessage = require("../GraphLoadingMessage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsDriverOrders = function AnalyticsDriverOrders(props) {
  var _ref, _chartDataList$data15, _chartDataList$data16, _ref2, _chartDataList$data17, _chartDataList$data18;
  var isOrders = props.isOrders,
    chartDataList = props.chartDataList,
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
  var generateData = function generateData() {
    if (!isOrders) {
      var values = chartDataList.data.dataset.dataset.map(function (item, index) {
        var _item$data;
        var list = [];
        if ((item === null || item === void 0 || (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data.length) > 0) {
          var _iterator = _createForOfIteratorHelper(item === null || item === void 0 ? void 0 : item.data),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;
              list.push(value.y);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return {
          label: item.label,
          data: [].concat(list),
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: (0, _polished.lighten)(index / 10, '#2C7BE5'),
          tension: 0.4,
          borderWidth: 3
        };
      });
      return values;
    } else {
      var _chartDataList$data$d, _chartDataList$data$d3;
      var list = [];
      if (((_chartDataList$data$d = chartDataList.data.dataset.dataset) === null || _chartDataList$data$d === void 0 || (_chartDataList$data$d = _chartDataList$data$d.data) === null || _chartDataList$data$d === void 0 ? void 0 : _chartDataList$data$d.length) > 0) {
        var _chartDataList$data$d2;
        var _iterator2 = _createForOfIteratorHelper((_chartDataList$data$d2 = chartDataList.data.dataset.dataset) === null || _chartDataList$data$d2 === void 0 ? void 0 : _chartDataList$data$d2.data),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var value = _step2.value;
            list.push(value.y);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return [{
        label: (_chartDataList$data$d3 = chartDataList.data.dataset) === null || _chartDataList$data$d3 === void 0 || (_chartDataList$data$d3 = _chartDataList$data$d3.dataset) === null || _chartDataList$data$d3 === void 0 ? void 0 : _chartDataList$data$d3.label,
        data: [].concat(list),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#2C7BE5',
        tension: 0.4,
        borderWidth: 3
      }];
    }
  };
  var generateLabel = function generateLabel() {
    var _chartDataList$data, _chartDataList$data2;
    var values = [];
    var chartData = isOrders ? chartDataList === null || chartDataList === void 0 || (_chartDataList$data = chartDataList.data) === null || _chartDataList$data === void 0 || (_chartDataList$data = _chartDataList$data.dataset) === null || _chartDataList$data === void 0 || (_chartDataList$data = _chartDataList$data.dataset) === null || _chartDataList$data === void 0 ? void 0 : _chartDataList$data.data : chartDataList === null || chartDataList === void 0 || (_chartDataList$data2 = chartDataList.data) === null || _chartDataList$data2 === void 0 || (_chartDataList$data2 = _chartDataList$data2.dataset) === null || _chartDataList$data2 === void 0 || (_chartDataList$data2 = _chartDataList$data2.dataset) === null || _chartDataList$data2 === void 0 || (_chartDataList$data2 = _chartDataList$data2[0]) === null || _chartDataList$data2 === void 0 ? void 0 : _chartDataList$data2.data;
    chartData && chartData.forEach(function (data) {
      values.push(data.x);
    });
    return values;
  };
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
    var _chartDataList$data3, _chartDataList$data4, _chartDataList$data5;
    var orders = 0;
    if (!(chartDataList !== null && chartDataList !== void 0 && (_chartDataList$data3 = chartDataList.data) !== null && _chartDataList$data3 !== void 0 && (_chartDataList$data3 = _chartDataList$data3.dataset) !== null && _chartDataList$data3 !== void 0 && (_chartDataList$data3 = _chartDataList$data3.dataset) !== null && _chartDataList$data3 !== void 0 && _chartDataList$data3.data) || (chartDataList === null || chartDataList === void 0 || (_chartDataList$data4 = chartDataList.data) === null || _chartDataList$data4 === void 0 || (_chartDataList$data4 = _chartDataList$data4.dataset) === null || _chartDataList$data4 === void 0 || (_chartDataList$data4 = _chartDataList$data4.dataset) === null || _chartDataList$data4 === void 0 ? void 0 : _chartDataList$data4.data.length) === 0) return orders;
    var _iterator3 = _createForOfIteratorHelper(chartDataList === null || chartDataList === void 0 || (_chartDataList$data5 = chartDataList.data) === null || _chartDataList$data5 === void 0 || (_chartDataList$data5 = _chartDataList$data5.dataset) === null || _chartDataList$data5 === void 0 || (_chartDataList$data5 = _chartDataList$data5.dataset) === null || _chartDataList$data5 === void 0 ? void 0 : _chartDataList$data5.data),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var data = _step3.value;
        orders += data.y;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return orders;
  };
  var TotalSales = function TotalSales() {
    var _chartDataList$data6, _chartDataList$data7, _chartDataList$data8;
    var sales = 0;
    if (!(chartDataList !== null && chartDataList !== void 0 && (_chartDataList$data6 = chartDataList.data) !== null && _chartDataList$data6 !== void 0 && (_chartDataList$data6 = _chartDataList$data6.dataset) !== null && _chartDataList$data6 !== void 0 && (_chartDataList$data6 = _chartDataList$data6.dataset[0]) !== null && _chartDataList$data6 !== void 0 && _chartDataList$data6.data) || (chartDataList === null || chartDataList === void 0 || (_chartDataList$data7 = chartDataList.data) === null || _chartDataList$data7 === void 0 || (_chartDataList$data7 = _chartDataList$data7.dataset) === null || _chartDataList$data7 === void 0 || (_chartDataList$data7 = _chartDataList$data7.dataset[0]) === null || _chartDataList$data7 === void 0 ? void 0 : _chartDataList$data7.data.length) === 0) return getFormattedValue(sales, countryCode);
    var _iterator4 = _createForOfIteratorHelper(chartDataList === null || chartDataList === void 0 || (_chartDataList$data8 = chartDataList.data) === null || _chartDataList$data8 === void 0 || (_chartDataList$data8 = _chartDataList$data8.dataset) === null || _chartDataList$data8 === void 0 || (_chartDataList$data8 = _chartDataList$data8.dataset[0]) === null || _chartDataList$data8 === void 0 ? void 0 : _chartDataList$data8.data),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var data = _step4.value;
        sales += data.y;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return getFormattedValue(sales, countryCode);
  };
  var getFormattedValue = function getFormattedValue(value, flag) {
    var formattedValue = flag ? parsePrice(value.toFixed(2), {
      separator: '.'
    }) : value.toFixed(2);
    return formattedValue;
  };
  var downloadCSV = function downloadCSV() {
    var _chartDataList$data9, _chartDataList$data10;
    var csv = "".concat(t('TIME', 'Time'), ", ").concat(isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales'), "\n");
    var chartData = isOrders ? chartDataList === null || chartDataList === void 0 || (_chartDataList$data9 = chartDataList.data) === null || _chartDataList$data9 === void 0 || (_chartDataList$data9 = _chartDataList$data9.dataset) === null || _chartDataList$data9 === void 0 || (_chartDataList$data9 = _chartDataList$data9.dataset) === null || _chartDataList$data9 === void 0 ? void 0 : _chartDataList$data9.data : chartDataList === null || chartDataList === void 0 || (_chartDataList$data10 = chartDataList.data) === null || _chartDataList$data10 === void 0 || (_chartDataList$data10 = _chartDataList$data10.dataset) === null || _chartDataList$data10 === void 0 || (_chartDataList$data10 = _chartDataList$data10.dataset[0]) === null || _chartDataList$data10 === void 0 ? void 0 : _chartDataList$data10.data;
    var _iterator5 = _createForOfIteratorHelper(chartData),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var row = _step5.value;
        csv += "".concat(row.x, ",");
        csv += "".concat(row.y, ",");
        csv += '\n';
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var downloadLink = document.createElement('a');
    var blob = new Blob(["\uFEFF", csv]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    var fileSuffix = new Date().getTime();
    var exportName = isOrders ? 'orders' : 'sales';
    downloadLink.download = "".concat(exportName, "_").concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  var previewChart = function previewChart() {
    var _chartDataList$data11, _chartDataList$data12;
    var chartData = isOrders ? chartDataList === null || chartDataList === void 0 || (_chartDataList$data11 = chartDataList.data) === null || _chartDataList$data11 === void 0 || (_chartDataList$data11 = _chartDataList$data11.dataset) === null || _chartDataList$data11 === void 0 || (_chartDataList$data11 = _chartDataList$data11.dataset) === null || _chartDataList$data11 === void 0 ? void 0 : _chartDataList$data11.data : chartDataList === null || chartDataList === void 0 || (_chartDataList$data12 = chartDataList.data) === null || _chartDataList$data12 === void 0 || (_chartDataList$data12 = _chartDataList$data12.dataset) === null || _chartDataList$data12 === void 0 || (_chartDataList$data12 = _chartDataList$data12.dataset[0]) === null || _chartDataList$data12 === void 0 ? void 0 : _chartDataList$data12.data;
    if (chartData.length === 0) return;
    setIsShowPreview(true);
  };
  (0, _react.useEffect)(function () {
    var _chartDataList$data13, _chartDataList$data14;
    var chartData = isOrders ? chartDataList === null || chartDataList === void 0 || (_chartDataList$data13 = chartDataList.data) === null || _chartDataList$data13 === void 0 || (_chartDataList$data13 = _chartDataList$data13.dataset) === null || _chartDataList$data13 === void 0 || (_chartDataList$data13 = _chartDataList$data13.dataset) === null || _chartDataList$data13 === void 0 ? void 0 : _chartDataList$data13.data : chartDataList === null || chartDataList === void 0 || (_chartDataList$data14 = chartDataList.data) === null || _chartDataList$data14 === void 0 || (_chartDataList$data14 = _chartDataList$data14.dataset) === null || _chartDataList$data14 === void 0 || (_chartDataList$data14 = _chartDataList$data14.dataset[0]) === null || _chartDataList$data14 === void 0 ? void 0 : _chartDataList$data14.data;
    if (chartData && (chartData === null || chartData === void 0 ? void 0 : chartData.length) > 0) {
      var defaultData = {
        labels: generateLabel(),
        datasets: generateData()
      };
      setDataOptions(defaultData);
    }
  }, [chartDataList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ChartHeaderContainer, null, /*#__PURE__*/_react.default.createElement("p", null, isOrders ? t('ORDERS', 'Orders') : t('SALES', 'Sales')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: !((_ref = isOrders ? chartDataList === null || chartDataList === void 0 || (_chartDataList$data15 = chartDataList.data) === null || _chartDataList$data15 === void 0 || (_chartDataList$data15 = _chartDataList$data15.dataset) === null || _chartDataList$data15 === void 0 || (_chartDataList$data15 = _chartDataList$data15.dataset) === null || _chartDataList$data15 === void 0 ? void 0 : _chartDataList$data15.data : chartDataList === null || chartDataList === void 0 || (_chartDataList$data16 = chartDataList.data) === null || _chartDataList$data16 === void 0 || (_chartDataList$data16 = _chartDataList$data16.dataset) === null || _chartDataList$data16 === void 0 || (_chartDataList$data16 = _chartDataList$data16.dataset[0]) === null || _chartDataList$data16 === void 0 ? void 0 : _chartDataList$data16.data) !== null && _ref !== void 0 && _ref.length)
  }, /*#__PURE__*/_react.default.createElement(_BsArrowsAngleExpand.default, {
    onClick: previewChart
  }), /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    className: "download-view",
    onClick: downloadCSV
  }))), /*#__PURE__*/_react.default.createElement(_styles.ChartContentWrapper, null, chartDataList !== null && chartDataList !== void 0 && chartDataList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : ((_ref2 = isOrders ? chartDataList === null || chartDataList === void 0 || (_chartDataList$data17 = chartDataList.data) === null || _chartDataList$data17 === void 0 || (_chartDataList$data17 = _chartDataList$data17.dataset) === null || _chartDataList$data17 === void 0 || (_chartDataList$data17 = _chartDataList$data17.dataset) === null || _chartDataList$data17 === void 0 ? void 0 : _chartDataList$data17.data : chartDataList === null || chartDataList === void 0 || (_chartDataList$data18 = chartDataList.data) === null || _chartDataList$data18 === void 0 || (_chartDataList$data18 = _chartDataList$data18.dataset) === null || _chartDataList$data18 === void 0 || (_chartDataList$data18 = _chartDataList$data18.dataset[0]) === null || _chartDataList$data18 === void 0 ? void 0 : _chartDataList$data18.data) === null || _ref2 === void 0 ? void 0 : _ref2.length) > 0 && dataOptions ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
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
  }, /*#__PURE__*/_react.default.createElement(_styles.ChartContentWrapper, null, dataOptions && /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: dataOptions,
    options: options
  }))));
};
exports.AnalyticsDriverOrders = AnalyticsDriverOrders;