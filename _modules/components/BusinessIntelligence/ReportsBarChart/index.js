"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsBarChart = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactChartjs = require("react-chartjs-2");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var ReportsBarChart = exports.ReportsBarChart = function ReportsBarChart(props) {
  var _chartData$datasets, _chartData$datasets2;
  var chartDataList = props.chartDataList,
    chartData = props.chartData,
    title = props.title,
    suggestedMax = props.suggestedMax,
    yUnit = props.yUnit,
    isLegend = props.isLegend;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var barChartRef = (0, _react.useRef)(null);
  var options = {
    responsive: true,
    maintainAspectRatio: false,
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
      y: _objectSpread({
        grid: {
          drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            color: '#B1BCCC'
          },
          callback: function callback(label) {
            return yUnit ? "".concat(label, " ").concat(yUnit) : label;
          }
        }
      }, suggestedMax && {
        suggestedMax: suggestedMax
      })
    },
    plugins: {
      legend: {
        display: isLegend !== null && isLegend !== void 0 ? isLegend : false,
        position: 'bottom',
        align: 'start',
        borderRadius: 7,
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          font: {
            size: 12,
            color: '#909BA9'
          }
        }
      }
    },
    pointRadius: 0
  };
  var downloadChart = function downloadChart() {
    var _barChartRef$current;
    if (!(barChartRef !== null && barChartRef !== void 0 && barChartRef.current)) return;
    var a = document.createElement('a');
    a.href = barChartRef === null || barChartRef === void 0 || (_barChartRef$current = barChartRef.current) === null || _barChartRef$current === void 0 ? void 0 : _barChartRef$current.toBase64Image();
    a.download = "".concat(title, ".png");
    // Trigger the download
    a.click();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.ReportsBarChartContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TitleBlock, {
    active: (chartData === null || chartData === void 0 || (_chartData$datasets = chartData.datasets) === null || _chartData$datasets === void 0 ? void 0 : _chartData$datasets.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, title), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadChart();
    }
  })), chartDataList !== null && chartDataList !== void 0 && chartDataList.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _toConsumableArray(Array(12).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i,
      className: "col-md-1 col-sm-1 col-1",
      style: {
        transform: 'rotateX(180deg)'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: Math.random() * 300
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (chartData === null || chartData === void 0 || (_chartData$datasets2 = chartData.datasets) === null || _chartData$datasets2 === void 0 ? void 0 : _chartData$datasets2.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.ChartWrapper, null, /*#__PURE__*/_react.default.createElement(_reactChartjs.Bar, {
    data: chartData,
    options: options,
    ref: barChartRef
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data'))));
};