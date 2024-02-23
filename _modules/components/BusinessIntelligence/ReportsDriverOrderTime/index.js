"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsDriverOrderTime = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _Shared = require("../../Shared");
var _AnalyticsBusinessFilter = require("../AnalyticsBusinessFilter");
var _ReportsBrandFilter = require("../ReportsBrandFilter");
var _CountryFilter = require("../CountryFilter");
var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import { ReportsOrderTypeFilter } from '../ReportsOrderTypeFilter'

var ReportsDriverOrderTimeUI = function ReportsDriverOrderTimeUI(props) {
  var _filterList$franchise, _reportData$content2, _reportData$content3, _reportData$content4, _reportData$content5, _reportData$content6, _reportData$content7, _reportData$content8;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    reportData = props.reportData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOneMoreCountry = _useState2[0],
    setIsOneMoreCountry = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isBusinessFilter = _useState4[0],
    setIsBusinessFilter = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isBrandFilter = _useState6[0],
    setIsBrandFilter = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    openCountryFilter = _useState8[0],
    setOpenCountryFilter = _useState8[1];
  // const [isOrderTypeFilter, setIsOrderTypeFilter] = useState(false)

  var tableRef = (0, _react.useRef)(null);
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };
  var downloadCSV = function downloadCSV() {
    var _reportData$content;
    if ((reportData === null || reportData === void 0 || (_reportData$content = reportData.content) === null || _reportData$content === void 0 || (_reportData$content = _reportData$content.body) === null || _reportData$content === void 0 || (_reportData$content = _reportData$content.rows) === null || _reportData$content === void 0 ? void 0 : _reportData$content.length) === 0) return;
    var csv = '';
    reportData.content.header.rows.forEach(function (tr) {
      tr.forEach(function (th) {
        csv += "".concat(th.value, ",");
        for (var i = 1; i < th.colspan; i++) {
          csv += ' ,';
        }
      });
      csv += '\n';
    });
    csv += '\n';
    reportData.content.body.rows.forEach(function (tr) {
      tr.forEach(function (th) {
        csv += "".concat(th.value, ",");
        for (var i = 1; i < th.colspan; i++) {
          csv += ' ,';
        }
      });
      csv += '\n';
    });
    csv += '\n';
    reportData.content.footer.rows.forEach(function (tr) {
      tr.forEach(function (th) {
        csv += "".concat(th.value, ",");
        for (var i = 1; i < th.colspan; i++) {
          csv += ' ,';
        }
      });
      csv += '\n';
    });
    csv += '\n';
    var downloadLink = document.createElement('a');
    var blob = new Blob(["\uFEFF", csv]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    var fileSuffix = new Date().getTime();
    downloadLink.download = "service_times_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  var convertHMS = function convertHMS(value) {
    var sec = parseInt(value, 10); // convert value to number if it's string
    var hours = Math.floor(sec / 3600); // get hours
    var minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    var seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.ReportsBusinessSpendContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('SERVICE_TIMES', 'Service Times')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
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
  })))), /*#__PURE__*/_react.default.createElement(_styles2.DistancePerBrandWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DistanceTitleBlock, {
    active: (reportData === null || reportData === void 0 || (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.body) === null || _reportData$content2 === void 0 || (_reportData$content2 = _reportData$content2.rows) === null || _reportData$content2 === void 0 ? void 0 : _reportData$content2.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('SERVICE_TIMES', 'Service Times')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV();
    }
  })), reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _toConsumableArray(Array(20).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-3 col-sm-3 col-3",
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, (reportData === null || reportData === void 0 || (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 || (_reportData$content3 = _reportData$content3.body) === null || _reportData$content3 === void 0 || (_reportData$content3 = _reportData$content3.rows) === null || _reportData$content3 === void 0 ? void 0 : _reportData$content3.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.DistanceTable, {
    ref: tableRef
  }, (reportData === null || reportData === void 0 || (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 || (_reportData$content4 = _reportData$content4.header) === null || _reportData$content4 === void 0 ? void 0 : _reportData$content4.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Thead, null, reportData === null || reportData === void 0 || (_reportData$content5 = reportData.content) === null || _reportData$content5 === void 0 || (_reportData$content5 = _reportData$content5.header) === null || _reportData$content5 === void 0 ? void 0 : _reportData$content5.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (th, j) {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: j,
        colSpan: th.colspan
      }, th.value);
    }));
  })), reportData === null || reportData === void 0 || (_reportData$content6 = reportData.content) === null || _reportData$content6 === void 0 || (_reportData$content6 = _reportData$content6.body) === null || _reportData$content6 === void 0 ? void 0 : _reportData$content6.rows.map(function (tbody, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, tbody.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value_unit === 'seconds' && td.value ? convertHMS(td.value) : td.value);
    })));
  }), (reportData === null || reportData === void 0 || (_reportData$content7 = reportData.content) === null || _reportData$content7 === void 0 || (_reportData$content7 = _reportData$content7.footer) === null || _reportData$content7 === void 0 ? void 0 : _reportData$content7.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tfoot, null, reportData === null || reportData === void 0 || (_reportData$content8 = reportData.content) === null || _reportData$content8 === void 0 || (_reportData$content8 = _reportData$content8.footer) === null || _reportData$content8 === void 0 ? void 0 : _reportData$content8.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value);
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
var ReportsDriverOrderTime = exports.ReportsDriverOrderTime = function ReportsDriverOrderTime(props) {
  var reportsDriverOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsDriverOrderTimeUI,
    endpoint: 'driver_companies_order_time_ranges'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsDriverOrderProps);
};