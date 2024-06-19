"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsSales = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AnalyticsCalendar = require("../AnalyticsCalendar");
require("chartjs-adapter-moment");
var _reactChartjs = require("react-chartjs-2");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _CountryFilter = require("../CountryFilter");
var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");
var _styles2 = require("./styles");
var _AnalyticsBusinessFilter = require("../AnalyticsBusinessFilter");
var _ReportsBrandFilter = require("../ReportsBrandFilter");
var _Shared = require("../../Shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ReportsSalesUI = function ReportsSalesUI(props) {
  var _filterList$franchise, _reportData$content11, _reportData$content12;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    reportData = props.reportData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOneMoreCountry = _useState2[0],
    setIsOneMoreCountry = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dataOptions = _useState4[0],
    setDataOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isBusinessFilter = _useState6[0],
    setIsBusinessFilter = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isBrandFilter = _useState8[0],
    setIsBrandFilter = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    openCountryFilter = _useState10[0],
    setOpenCountryFilter = _useState10[1];
  var generateData = function generateData() {
    var _reportData$content, _reportData$content3;
    var list = [];
    var newData = [];
    if ((reportData === null || reportData === void 0 || (_reportData$content = reportData.content) === null || _reportData$content === void 0 || (_reportData$content = _reportData$content.dataset) === null || _reportData$content === void 0 || (_reportData$content = _reportData$content.dataset) === null || _reportData$content === void 0 || (_reportData$content = _reportData$content.data) === null || _reportData$content === void 0 ? void 0 : _reportData$content.length) > 0) {
      var _reportData$content2;
      var _iterator = _createForOfIteratorHelper(reportData === null || reportData === void 0 || (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.dataset) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.dataset) === null || _reportData$content2 === void 0 ? void 0 : _reportData$content2.data),
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
    var values = {
      label: reportData === null || reportData === void 0 || (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 || (_reportData$content3 = _reportData$content3.dataset) === null || _reportData$content3 === void 0 ? void 0 : _reportData$content3.dataset.label,
      data: list,
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: '#2C7BE5',
      tension: 0.4,
      borderWidth: 3
    };
    newData.push(values);
    return newData;
  };
  var generateLabel = function generateLabel() {
    var _reportData$content4;
    var values = [];
    (reportData === null || reportData === void 0 || (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 || (_reportData$content4 = _reportData$content4.dataset) === null || _reportData$content4 === void 0 || (_reportData$content4 = _reportData$content4.dataset) === null || _reportData$content4 === void 0 ? void 0 : _reportData$content4.data) && reportData.content.dataset.dataset.data.forEach(function (data) {
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
        display: true
      }
    },
    pointRadius: 0
  };
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };
  var downloadCSV = function downloadCSV() {
    var _reportData$content5, _reportData$content6;
    if (reportData !== null && reportData !== void 0 && (_reportData$content5 = reportData.content) !== null && _reportData$content5 !== void 0 && (_reportData$content5 = _reportData$content5.dataset) !== null && _reportData$content5 !== void 0 && (_reportData$content5 = _reportData$content5.dataset) !== null && _reportData$content5 !== void 0 && _reportData$content5.data && (reportData === null || reportData === void 0 || (_reportData$content6 = reportData.content) === null || _reportData$content6 === void 0 || (_reportData$content6 = _reportData$content6.dataset) === null || _reportData$content6 === void 0 || (_reportData$content6 = _reportData$content6.dataset) === null || _reportData$content6 === void 0 || (_reportData$content6 = _reportData$content6.data) === null || _reportData$content6 === void 0 ? void 0 : _reportData$content6.length) > 0) {
      var _reportData$content7;
      var csv = "".concat(t('TIME', 'Time'), ", ").concat(t('SALES', 'Sales'), "\n");
      var _iterator2 = _createForOfIteratorHelper(reportData === null || reportData === void 0 || (_reportData$content7 = reportData.content) === null || _reportData$content7 === void 0 || (_reportData$content7 = _reportData$content7.dataset) === null || _reportData$content7 === void 0 || (_reportData$content7 = _reportData$content7.dataset) === null || _reportData$content7 === void 0 ? void 0 : _reportData$content7.data),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          csv += row.x + ',';
          csv += "".concat(row.y, ",");
          csv += '\n';
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var downloadLink = document.createElement('a');
      var blob = new Blob(["\uFEFF", csv]);
      var url = URL.createObjectURL(blob);
      downloadLink.href = url;
      var fileSuffix = new Date().getTime();
      downloadLink.download = "sales_".concat(fileSuffix, ".csv");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  var TotalSales = function TotalSales() {
    var _reportData$content8;
    var sales = 0;
    (reportData === null || reportData === void 0 || (_reportData$content8 = reportData.content) === null || _reportData$content8 === void 0 || (_reportData$content8 = _reportData$content8.dataset) === null || _reportData$content8 === void 0 || (_reportData$content8 = _reportData$content8.dataset) === null || _reportData$content8 === void 0 ? void 0 : _reportData$content8.data) && reportData.content.dataset.dataset.data.forEach(function (data) {
      sales += data.y;
    });
    return parsePrice(sales.toFixed(2), {
      separator: '.'
    });
  };
  (0, _react.useEffect)(function () {
    var _reportData$content9, _reportData$content10;
    if (reportData !== null && reportData !== void 0 && (_reportData$content9 = reportData.content) !== null && _reportData$content9 !== void 0 && (_reportData$content9 = _reportData$content9.dataset) !== null && _reportData$content9 !== void 0 && (_reportData$content9 = _reportData$content9.dataset) !== null && _reportData$content9 !== void 0 && _reportData$content9.data && (reportData === null || reportData === void 0 || (_reportData$content10 = reportData.content) === null || _reportData$content10 === void 0 || (_reportData$content10 = _reportData$content10.dataset) === null || _reportData$content10 === void 0 || (_reportData$content10 = _reportData$content10.dataset) === null || _reportData$content10 === void 0 || (_reportData$content10 = _reportData$content10.data) === null || _reportData$content10 === void 0 ? void 0 : _reportData$content10.length) > 0) {
      var defaultData = {
        labels: generateLabel(),
        datasets: generateData()
      };
      setDataOptions(defaultData);
    }
  }, [reportData === null || reportData === void 0 ? void 0 : reportData.content]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ReportsOrdersContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('SALES', 'Sales')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBrandFilter(true);
    }
  }, t('BRAND', 'Brand'), " (", filterList !== null && filterList !== void 0 && filterList.franchises_id ? filterList === null || filterList === void 0 || (_filterList$franchise = filterList.franchises_id) === null || _filterList$franchise === void 0 ? void 0 : _filterList$franchise.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBusinessFilter(true);
    }
  }, t('BUSINESS', 'Business'), " (", filterList !== null && filterList !== void 0 && filterList.businessIds ? filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length : t('ALL', 'All'), ")"), isOneMoreCountry && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setOpenCountryFilter(true);
    }
  }, t('COUNTRY', 'Country'))), /*#__PURE__*/_react.default.createElement(_styles2.TimeZoneAndCalendar, null, /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsTimeZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsFilterTimeZone.AnalyticsFilterTimeZone, props)), /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ChartBlockWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ChartTitleBlock, {
    active: (reportData === null || reportData === void 0 || (_reportData$content11 = reportData.content) === null || _reportData$content11 === void 0 || (_reportData$content11 = _reportData$content11.dataset) === null || _reportData$content11 === void 0 || (_reportData$content11 = _reportData$content11.dataset) === null || _reportData$content11 === void 0 || (_reportData$content11 = _reportData$content11.data) === null || _reportData$content11 === void 0 ? void 0 : _reportData$content11.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('SALES', 'Sales')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV();
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ChartWrapper, null, reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 350
  }) : (reportData === null || reportData === void 0 || (_reportData$content12 = reportData.content) === null || _reportData$content12 === void 0 || (_reportData$content12 = _reportData$content12.dataset) === null || _reportData$content12 === void 0 || (_reportData$content12 = _reportData$content12.dataset) === null || _reportData$content12 === void 0 || (_reportData$content12 = _reportData$content12.data) === null || _reportData$content12 === void 0 ? void 0 : _reportData$content12.length) > 0 && dataOptions ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: dataOptions,
    options: options
  }) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data'))), /*#__PURE__*/_react.default.createElement(_styles2.ChartFooterContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  }) : /*#__PURE__*/_react.default.createElement(TotalSales, null)), reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('SALES', 'Sales'), " ", t('TOTALS', 'totals')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
  }))), /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, _extends({}, props, {
    setIsOneMoreCountry: setIsOneMoreCountry,
    openCountryFilter: openCountryFilter,
    setOpenCountryFilter: setOpenCountryFilter
  })));
};
var ReportsSales = exports.ReportsSales = function ReportsSales(props) {
  var reportOrdersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsSalesUI,
    endpoint: 'sales_v2'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportOrdersProps);
};