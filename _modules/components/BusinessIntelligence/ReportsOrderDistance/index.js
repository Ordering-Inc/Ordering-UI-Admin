"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsOrderDistance = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _polished = require("polished");
var _Shared = require("../../Shared");
var _AnalyticsBusinessFilter = require("../AnalyticsBusinessFilter");
var _ReportsBrandFilter = require("../ReportsBrandFilter");
var _ReportsBarChart = require("../ReportsBarChart");
var _CountryFilter = require("../CountryFilter");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReportsOrderDistanceUI = function ReportsOrderDistanceUI(props) {
  var _filterList$franchise, _reportData$content8, _reportData$content8$, _reportData$content8$2, _reportData$content9, _reportData$content9$, _reportData$content9$2, _reportData$content10, _reportData$content11, _reportData$content12, _reportData$content13, _reportData$content14, _reportData$content15, _reportData$content16, _reportData$content17, _reportData$content18, _reportData$content19;
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList,
    reportData = props.reportData;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var tableRef = (0, _react.useRef)(null);
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
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    chartData = _useState8[0],
    setChartData = _useState8[1];
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };
  var generateChartValues = function generateChartValues() {
    var _reportData$content, _reportData$content$h, _reportData$content$h2;
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content = reportData.content) === null || _reportData$content === void 0 ? void 0 : (_reportData$content$h = _reportData$content.header) === null || _reportData$content$h === void 0 ? void 0 : (_reportData$content$h2 = _reportData$content$h.rows[0]) === null || _reportData$content$h2 === void 0 ? void 0 : _reportData$content$h2.length) > 1) {
      var chartValues = [];
      var _loop = function _loop(i) {
        var _reportData$content3, _reportData$content3$, _reportData$content3$2;
        var values = reportData === null || reportData === void 0 ? void 0 : (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 ? void 0 : (_reportData$content3$ = _reportData$content3.body) === null || _reportData$content3$ === void 0 ? void 0 : (_reportData$content3$2 = _reportData$content3$.rows) === null || _reportData$content3$2 === void 0 ? void 0 : _reportData$content3$2.reduce(function (prev, cur) {
          return [].concat(_toConsumableArray(prev), [cur[i * 2].value]);
        }, []);
        chartValues.push(_toConsumableArray(values));
      };
      for (var i = 1; i < (reportData === null || reportData === void 0 ? void 0 : (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 ? void 0 : (_reportData$content2$ = _reportData$content2.header) === null || _reportData$content2$ === void 0 ? void 0 : (_reportData$content2$2 = _reportData$content2$.rows[0]) === null || _reportData$content2$2 === void 0 ? void 0 : _reportData$content2$2.length); i++) {
        var _reportData$content2, _reportData$content2$, _reportData$content2$2;
        _loop(i);
      }
      return chartValues;
    }
  };
  var generateChartLabels = function generateChartLabels() {
    var _reportData$content4, _reportData$content4$, _reportData$content4$2;
    var labels = [];
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 ? void 0 : (_reportData$content4$ = _reportData$content4.header) === null || _reportData$content4$ === void 0 ? void 0 : (_reportData$content4$2 = _reportData$content4$.rows[0]) === null || _reportData$content4$2 === void 0 ? void 0 : _reportData$content4$2.length) > 1) {
      var _reportData$content5, _reportData$content5$, _reportData$content5$2;
      labels = _toConsumableArray(reportData === null || reportData === void 0 ? void 0 : (_reportData$content5 = reportData.content) === null || _reportData$content5 === void 0 ? void 0 : (_reportData$content5$ = _reportData$content5.body) === null || _reportData$content5$ === void 0 ? void 0 : (_reportData$content5$2 = _reportData$content5$.rows) === null || _reportData$content5$2 === void 0 ? void 0 : _reportData$content5$2.reduce(function (prev, cur) {
        return [].concat(_toConsumableArray(prev), [cur[0].value]);
      }, []));
    }
    return labels;
  };
  var generateDataSets = function generateDataSets() {
    var chartValues = generateChartValues();
    var chartData = [];
    chartValues && chartValues.forEach(function (value, i) {
      var _reportData$content$h3, _reportData$content6, _reportData$content6$;
      chartData.push({
        label: (_reportData$content$h3 = reportData === null || reportData === void 0 ? void 0 : (_reportData$content6 = reportData.content) === null || _reportData$content6 === void 0 ? void 0 : (_reportData$content6$ = _reportData$content6.header) === null || _reportData$content6$ === void 0 ? void 0 : _reportData$content6$.rows[0][i + 1].value) !== null && _reportData$content$h3 !== void 0 ? _reportData$content$h3 : '',
        data: value,
        fill: true,
        borderColor: (0, _polished.lighten)(i / 10, '#2C7BE5'),
        backgroundColor: (0, _polished.lighten)(i / 10, '#2C7BE5'),
        borderWidth: 2,
        borderRadius: 16,
        borderSkipped: false
      });
    });
    return chartData;
  };
  var downloadCSV = function downloadCSV() {
    var _reportData$content7, _reportData$content7$, _reportData$content7$2;
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content7 = reportData.content) === null || _reportData$content7 === void 0 ? void 0 : (_reportData$content7$ = _reportData$content7.body) === null || _reportData$content7$ === void 0 ? void 0 : (_reportData$content7$2 = _reportData$content7$.rows) === null || _reportData$content7$2 === void 0 ? void 0 : _reportData$content7$2.length) === 0) return;
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
    downloadLink.download = "order_delivery_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  (0, _react.useEffect)(function () {
    var data = {
      labels: generateChartLabels(),
      datasets: generateDataSets()
    };
    setChartData(_objectSpread({}, data));
  }, [reportData]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ReportsDistanceContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('DISTANCE_STORE_CUSTOMER', 'Distance in KM from the store to customer')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
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
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DistancePerBrandWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DistanceTitleBlock, {
    active: (reportData === null || reportData === void 0 ? void 0 : (_reportData$content8 = reportData.content) === null || _reportData$content8 === void 0 ? void 0 : (_reportData$content8$ = _reportData$content8.body) === null || _reportData$content8$ === void 0 ? void 0 : (_reportData$content8$2 = _reportData$content8$.rows) === null || _reportData$content8$2 === void 0 ? void 0 : _reportData$content8$2.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDERS_DELIVERY', 'Orders delivery')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
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
  })) : /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, (reportData === null || reportData === void 0 ? void 0 : (_reportData$content9 = reportData.content) === null || _reportData$content9 === void 0 ? void 0 : (_reportData$content9$ = _reportData$content9.body) === null || _reportData$content9$ === void 0 ? void 0 : (_reportData$content9$2 = _reportData$content9$.rows) === null || _reportData$content9$2 === void 0 ? void 0 : _reportData$content9$2.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.DistanceTable, {
    ref: tableRef
  }, (reportData === null || reportData === void 0 ? void 0 : (_reportData$content10 = reportData.content) === null || _reportData$content10 === void 0 ? void 0 : (_reportData$content11 = _reportData$content10.header) === null || _reportData$content11 === void 0 ? void 0 : _reportData$content11.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Thead, null, reportData === null || reportData === void 0 ? void 0 : (_reportData$content12 = reportData.content) === null || _reportData$content12 === void 0 ? void 0 : (_reportData$content13 = _reportData$content12.header) === null || _reportData$content13 === void 0 ? void 0 : _reportData$content13.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (th, j) {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: j,
        colSpan: th.colspan
      }, i === 0 && j === 0 ? '' : th.value);
    }));
  })), reportData === null || reportData === void 0 ? void 0 : (_reportData$content14 = reportData.content) === null || _reportData$content14 === void 0 ? void 0 : (_reportData$content15 = _reportData$content14.body) === null || _reportData$content15 === void 0 ? void 0 : _reportData$content15.rows.map(function (tbody, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, tbody.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value, j !== 0 && j % 2 === 0 && '%');
    })));
  }), (reportData === null || reportData === void 0 ? void 0 : (_reportData$content16 = reportData.content) === null || _reportData$content16 === void 0 ? void 0 : (_reportData$content17 = _reportData$content16.footer) === null || _reportData$content17 === void 0 ? void 0 : _reportData$content17.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tfoot, null, reportData === null || reportData === void 0 ? void 0 : (_reportData$content18 = reportData.content) === null || _reportData$content18 === void 0 ? void 0 : (_reportData$content19 = _reportData$content18.footer) === null || _reportData$content19 === void 0 ? void 0 : _reportData$content19.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value);
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_styles2.DistancePerBrandWrapper, null, /*#__PURE__*/_react.default.createElement(_ReportsBarChart.ReportsBarChart, {
    chartDataList: reportData,
    chartData: chartData,
    title: t('ORDERS_DELIVERY', 'Orders delivery'),
    suggestedMax: 10,
    isLegend: true
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
var ReportsOrderDistance = function ReportsOrderDistance(props) {
  var reportsOrderDistanceProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsOrderDistanceUI,
    endpoint: 'order_distance_ranges'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsOrderDistanceProps);
};
exports.ReportsOrderDistance = ReportsOrderDistance;