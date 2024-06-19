"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AnalyticsOrdersOrSales = exports.AnalyticsOrdersOrSales = function AnalyticsOrdersOrSales(props) {
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
    if (chartDataList !== null && chartDataList !== void 0 && chartDataList.data && (chartDataList === null || chartDataList === void 0 || (_chartDataList$data = chartDataList.data) === null || _chartDataList$data === void 0 ? void 0 : _chartDataList$data.length) > 0) {
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