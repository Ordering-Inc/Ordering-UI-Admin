"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsUsers = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
require("chartjs-adapter-moment");
var _reactChartjs = require("react-chartjs-2");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _ReportsAppIdFilter = require("../ReportsAppIdFilter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReportsUsersUI = function ReportsUsersUI(props) {
  var _reportData$content7, _reportData$content7$, _reportData$content7$2, _reportData$content7$3;
  var reportData = props.reportData,
    filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    dataOptions = _useState2[0],
    setDataOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAppIdFilter = _useState4[0],
    setIsAppIdFilter = _useState4[1];
  var getRgb = function getRgb() {
    return Math.floor(Math.random() * 256);
  };
  var rgbToHex = function rgbToHex(r, g, b) {
    var color = '#' + [r, g, b].map(function (x) {
      var hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    return color;
  };
  var handleGenerate = function handleGenerate() {
    var color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb()
    };
    return rgbToHex(color.r, color.g, color.b);
  };
  var generateData = function generateData() {
    var _reportData$content, _reportData$content$d, _reportData$content$d2;
    var values = [];
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content = reportData.content) === null || _reportData$content === void 0 ? void 0 : (_reportData$content$d = _reportData$content.dataset) === null || _reportData$content$d === void 0 ? void 0 : (_reportData$content$d2 = _reportData$content$d.dataset) === null || _reportData$content$d2 === void 0 ? void 0 : _reportData$content$d2.length) > 0) {
      var _reportData$content2, _reportData$content2$, _reportData$content2$2;
      values = reportData === null || reportData === void 0 ? void 0 : (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 ? void 0 : (_reportData$content2$ = _reportData$content2.dataset) === null || _reportData$content2$ === void 0 ? void 0 : (_reportData$content2$2 = _reportData$content2$.dataset) === null || _reportData$content2$2 === void 0 ? void 0 : _reportData$content2$2.map(function (item, index) {
        var list = [];
        reportData.content.dataset.x.labels.forEach(function (label) {
          var _item$data;
          var count = 0;
          if (item !== null && item !== void 0 && (_item$data = item.data) !== null && _item$data !== void 0 && _item$data.isArray) {
            (item === null || item === void 0 ? void 0 : item.data) && item.data.forEach(function (value) {
              if (label === value.x) count = value.y;
            });
          } else {
            Object.keys(item.data).forEach(function (key) {
              if (label === item.data[key].x) count = item.data[key].y;
            });
          }
          list.push(count);
        });
        var bgColor = index === 0 ? '#2C7BE5' : handleGenerate();
        return {
          label: item.label,
          data: [0].concat(list),
          fill: false,
          borderColor: bgColor,
          tension: 0.4,
          borderWidth: 3
        };
      });
    }
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
    var _reportData$content3, _reportData$content3$, _reportData$content3$2, _reportData$content3$3;
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 ? void 0 : (_reportData$content3$ = _reportData$content3.dataset) === null || _reportData$content3$ === void 0 ? void 0 : (_reportData$content3$2 = _reportData$content3$.dataset[0]) === null || _reportData$content3$2 === void 0 ? void 0 : (_reportData$content3$3 = _reportData$content3$2.data) === null || _reportData$content3$3 === void 0 ? void 0 : _reportData$content3$3.length) > 0) {
      var _reportData$content4, _reportData$content4$, _reportData$content4$2;
      var csv = "".concat(t('TIME', 'Time'), ", ").concat(t('USERS', 'Users'), "\n");
      var _iterator = _createForOfIteratorHelper(reportData === null || reportData === void 0 ? void 0 : (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 ? void 0 : (_reportData$content4$ = _reportData$content4.dataset) === null || _reportData$content4$ === void 0 ? void 0 : (_reportData$content4$2 = _reportData$content4$.dataset[0]) === null || _reportData$content4$2 === void 0 ? void 0 : _reportData$content4$2.data),
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
      downloadLink.download = "registers_users_".concat(fileSuffix, ".csv");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  (0, _react.useEffect)(function () {
    var _reportData$content5, _reportData$content5$, _reportData$content5$2;
    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content5 = reportData.content) === null || _reportData$content5 === void 0 ? void 0 : (_reportData$content5$ = _reportData$content5.dataset) === null || _reportData$content5$ === void 0 ? void 0 : (_reportData$content5$2 = _reportData$content5$.x) === null || _reportData$content5$2 === void 0 ? void 0 : _reportData$content5$2.labels.length) > 0) {
      var _reportData$content6, _reportData$content6$, _reportData$content6$2;
      var defaultData = {
        labels: [''].concat(_toConsumableArray(reportData === null || reportData === void 0 ? void 0 : (_reportData$content6 = reportData.content) === null || _reportData$content6 === void 0 ? void 0 : (_reportData$content6$ = _reportData$content6.dataset) === null || _reportData$content6$ === void 0 ? void 0 : (_reportData$content6$2 = _reportData$content6$.x) === null || _reportData$content6$2 === void 0 ? void 0 : _reportData$content6$2.labels)),
        datasets: generateData()
      };
      setDataOptions(defaultData);
    }
  }, [reportData === null || reportData === void 0 ? void 0 : reportData.content]);
  (0, _react.useEffect)(function () {
    if (reportData !== null && reportData !== void 0 && reportData.loading) setDataOptions(null);
  }, [reportData === null || reportData === void 0 ? void 0 : reportData.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.ReportsUsersContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('REGISTER_USERS', 'Register users')), /*#__PURE__*/_react.default.createElement(_styles.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    onClick: function onClick() {
      return setIsAppIdFilter(true);
    }
  }, t('APP_ID', 'App id'), " (", filterList !== null && filterList !== void 0 && filterList.app_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.app_ids.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList
  }))), /*#__PURE__*/_react.default.createElement(_styles.ChartBlockWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ChartTitleBlock, {
    active: (reportData === null || reportData === void 0 ? void 0 : (_reportData$content7 = reportData.content) === null || _reportData$content7 === void 0 ? void 0 : (_reportData$content7$ = _reportData$content7.dataset) === null || _reportData$content7$ === void 0 ? void 0 : (_reportData$content7$2 = _reportData$content7$.dataset[0]) === null || _reportData$content7$2 === void 0 ? void 0 : (_reportData$content7$3 = _reportData$content7$2.data) === null || _reportData$content7$3 === void 0 ? void 0 : _reportData$content7$3.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('REGISTER_USERS', 'Register users')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV();
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ChartWrapper, null, reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 350
  }) : dataOptions ? /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
    data: dataOptions,
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
var ReportsUsers = function ReportsUsers(props) {
  var reportsUsersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsUsersUI,
    endpoint: 'users_v2'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsUsersProps);
};
exports.ReportsUsers = ReportsUsers;