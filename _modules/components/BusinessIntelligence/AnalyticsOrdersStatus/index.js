"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsOrdersStatus = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactChartjs = require("react-chartjs-2");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _GraphLoadingMessage = require("../GraphLoadingMessage");
var _utils = require("../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsOrdersStatus = exports.AnalyticsOrdersStatus = function AnalyticsOrdersStatus(props) {
  var orderStatusList = props.orderStatusList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var chartRef = (0, _react.useRef)(null);
  var generateLabels = function generateLabels() {
    var labels = [t('ALL', 'All')];
    var _iterator = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _orderStatus$label$st;
        var label = _step.value;
        labels.push(_utils.orderStatus === null || _utils.orderStatus === void 0 || (_orderStatus$label$st = _utils.orderStatus[label.status]) === null || _orderStatus$label$st === void 0 ? void 0 : _orderStatus$label$st.value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return labels;
  };
  var generateData = function generateData() {
    var todalValue = TotalOrders();
    var datasets = [todalValue];
    var _iterator2 = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _data = _step2.value;
        datasets.push(_data.orders);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return datasets;
  };
  var TotalOrders = function TotalOrders() {
    var value = 0;
    var _iterator3 = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _data2 = _step3.value;
        value = value + _data2.orders;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return value;
  };
  var downloadCSV = function downloadCSV() {
    var csv = "".concat(t('STATUS', 'Status'), ", ").concat(t('ORDERS', 'Orders'), "\n");
    var _iterator4 = _createForOfIteratorHelper(orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data),
      _step4;
    try {
      var _loop = function _loop() {
        var row = _step4.value;
        var selectedStatus = _utils.orderStatus.find(function (order) {
          return order.key === row.status;
        });
        csv += selectedStatus.value + ',';
        csv += "".concat(row.orders, ",");
        csv += '\n';
      };
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var link = document.createElement('a');
    var fileSuffix = new Date().getTime();
    link.download = "orders_status_".concat(fileSuffix, ".csv");
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
  var data = {
    labels: generateLabels(),
    datasets: [{
      label: t('ORDERS', 'Orders'),
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
        display: false
      }
    },
    pointRadius: 0
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDERS_STATUS', 'ORDERS STATUS')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    onClick: downloadCSV
  }))), orderStatusList !== null && orderStatusList !== void 0 && orderStatusList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : (orderStatusList === null || orderStatusList === void 0 ? void 0 : orderStatusList.data.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.BarChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: data,
    options: options,
    ref: chartRef
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFooter, null, /*#__PURE__*/_react.default.createElement("h2", null, orderStatusList !== null && orderStatusList !== void 0 && orderStatusList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  }) : /*#__PURE__*/_react.default.createElement(TotalOrders, null)), orderStatusList !== null && orderStatusList !== void 0 && orderStatusList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('ORDERS', 'Orders'), " ", t('TOTALS', 'totals'))));
};