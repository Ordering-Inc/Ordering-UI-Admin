"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsOrderStatus = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("../../../styles");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _AnalyticsCalendar = require("../AnalyticsCalendar");

var _Shared = require("../../Shared");

var _AnalyticsBusinessFilter = require("../AnalyticsBusinessFilter");

var _ReportsOrderTypeFilter = require("../ReportsOrderTypeFilter");

var _ReportsBrandFilter = require("../ReportsBrandFilter");

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

var ReportsOrderStatusUI = function ReportsOrderStatusUI(props) {
  var _filterList$franchise, _reportData$content2, _reportData$content2$, _reportData$content2$2, _reportData$content3, _reportData$content3$, _reportData$content3$2, _reportData$content4, _reportData$content4$, _reportData$content5, _reportData$content5$, _reportData$content6, _reportData$content6$, _reportData$content7, _reportData$content7$, _reportData$content8, _reportData$content8$, _reportData1$content, _reportData1$content$, _reportData1$content$2, _reportData1$content2, _reportData1$content3, _reportData1$content4, _reportData$content9, _reportData$content9$, _reportData1$content5, _reportData1$content6, _reportData1$content7, _reportData1$content8, _reportData1$content9, _reportData1$content10, _reportData1$content11, _reportData1$content12;

  var filterList = props.filterList,
      handleChangeFilterList = props.handleChangeFilterList,
      reportData = props.reportData,
      reportData1 = props.reportData1;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isBusinessFilter = _useState2[0],
      setIsBusinessFilter = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isBrandFilter = _useState4[0],
      setIsBrandFilter = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isOrderTypeFilter = _useState6[0],
      setIsOrderTypeFilter = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      alertState = _useState8[0],
      setAlertState = _useState8[1];

  var tableRef = (0, _react.useRef)(null);

  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      from: date1,
      to: date2
    }));
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var downloadCSV = function downloadCSV(name) {
    var _reportData$content, _reportData$content$b, _reportData$content$b2;

    if ((reportData === null || reportData === void 0 ? void 0 : (_reportData$content = reportData.content) === null || _reportData$content === void 0 ? void 0 : (_reportData$content$b = _reportData$content.body) === null || _reportData$content$b === void 0 ? void 0 : (_reportData$content$b2 = _reportData$content$b.rows) === null || _reportData$content$b2 === void 0 ? void 0 : _reportData$content$b2.length) === 0) return;
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
        if (th.value_unit === 'currency') csv += "".concat(th.value, "$,");else csv += "".concat(th.value, ",");

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
    downloadLink.download = "".concat(name, "_").concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  (0, _react.useEffect)(function () {
    if (reportData !== null && reportData !== void 0 && reportData.error) {
      setAlertState({
        open: true,
        content: reportData === null || reportData === void 0 ? void 0 : reportData.error
      });
    }
  }, [reportData === null || reportData === void 0 ? void 0 : reportData.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('ORDER_STATUS_TEXT', 'Order status')), /*#__PURE__*/_react.default.createElement(_styles2.ButtonActionList, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBrandFilter(true);
    }
  }, t('BRAND', 'Brand'), " (", filterList !== null && filterList !== void 0 && filterList.franchises_id ? filterList === null || filterList === void 0 ? void 0 : (_filterList$franchise = filterList.franchises_id) === null || _filterList$franchise === void 0 ? void 0 : _filterList$franchise.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBusinessFilter(true);
    }
  }, t('BUSINESS', 'Business'), " (", filterList !== null && filterList !== void 0 && filterList.businessIds ? filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length : t('ALL', 'All'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsOrderTypeFilter(true);
    }
  }, t('ORDER_TYPE', 'Order type'), " (", filterList !== null && filterList !== void 0 && filterList.delivery_types_ids ? filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, {
    handleChangeDate: handleChangeDate,
    defaultValue: filterList
  }))), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DistanceTitleBlock, {
    active: (reportData === null || reportData === void 0 ? void 0 : (_reportData$content2 = reportData.content) === null || _reportData$content2 === void 0 ? void 0 : (_reportData$content2$ = _reportData$content2.body) === null || _reportData$content2$ === void 0 ? void 0 : (_reportData$content2$2 = _reportData$content2$.rows) === null || _reportData$content2$2 === void 0 ? void 0 : _reportData$content2$2.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_ORDERS_COUNT_SALES', 'Business orders count sales')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV('business_orders_count_sales');
    }
  })), reportData !== null && reportData !== void 0 && reportData.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _toConsumableArray(Array(20).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-3 col-sm-3 col-3",
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, (reportData === null || reportData === void 0 ? void 0 : (_reportData$content3 = reportData.content) === null || _reportData$content3 === void 0 ? void 0 : (_reportData$content3$ = _reportData$content3.body) === null || _reportData$content3$ === void 0 ? void 0 : (_reportData$content3$2 = _reportData$content3$.rows) === null || _reportData$content3$2 === void 0 ? void 0 : _reportData$content3$2.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.DistanceTable, {
    ref: tableRef
  }, (reportData === null || reportData === void 0 ? void 0 : (_reportData$content4 = reportData.content) === null || _reportData$content4 === void 0 ? void 0 : (_reportData$content4$ = _reportData$content4.header) === null || _reportData$content4$ === void 0 ? void 0 : _reportData$content4$.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Thead, null, reportData === null || reportData === void 0 ? void 0 : (_reportData$content5 = reportData.content) === null || _reportData$content5 === void 0 ? void 0 : (_reportData$content5$ = _reportData$content5.header) === null || _reportData$content5$ === void 0 ? void 0 : _reportData$content5$.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (th, j) {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: j,
        colSpan: th.colspan
      }, th.value);
    }));
  })), reportData === null || reportData === void 0 ? void 0 : (_reportData$content6 = reportData.content) === null || _reportData$content6 === void 0 ? void 0 : (_reportData$content6$ = _reportData$content6.body) === null || _reportData$content6$ === void 0 ? void 0 : _reportData$content6$.rows.map(function (tbody, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, tbody.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value_unit === 'currency' ? parsePrice(td.value) : td.value);
    })));
  }), (reportData === null || reportData === void 0 ? void 0 : (_reportData$content7 = reportData.content) === null || _reportData$content7 === void 0 ? void 0 : (_reportData$content7$ = _reportData$content7.footer) === null || _reportData$content7$ === void 0 ? void 0 : _reportData$content7$.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tfoot, null, reportData === null || reportData === void 0 ? void 0 : (_reportData$content8 = reportData.content) === null || _reportData$content8 === void 0 ? void 0 : (_reportData$content8$ = _reportData$content8.footer) === null || _reportData$content8$ === void 0 ? void 0 : _reportData$content8$.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value);
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.EmptyContent, null, t('NO_DATA', 'No Data')))), /*#__PURE__*/_react.default.createElement(_styles2.OrderStatusTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.DistanceTitleBlock, {
    active: (reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content = reportData1.content) === null || _reportData1$content === void 0 ? void 0 : (_reportData1$content$ = _reportData1$content.body) === null || _reportData1$content$ === void 0 ? void 0 : (_reportData1$content$2 = _reportData1$content$.rows) === null || _reportData1$content$2 === void 0 ? void 0 : _reportData1$content$2.length) > 0
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('FRANCHISE_ORDERS_COUNT_SALES', 'Franchise orders count sales')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Download, {
    onClick: function onClick() {
      return downloadCSV('franchise_orders_count_sales');
    }
  })), reportData1 !== null && reportData1 !== void 0 && reportData1.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _toConsumableArray(Array(20).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-3 col-sm-3 col-3",
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, (reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content2 = reportData1.content) === null || _reportData1$content2 === void 0 ? void 0 : (_reportData1$content3 = _reportData1$content2.body) === null || _reportData1$content3 === void 0 ? void 0 : (_reportData1$content4 = _reportData1$content3.rows) === null || _reportData1$content4 === void 0 ? void 0 : _reportData1$content4.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.DistanceTable, {
    ref: tableRef
  }, (reportData === null || reportData === void 0 ? void 0 : (_reportData$content9 = reportData.content) === null || _reportData$content9 === void 0 ? void 0 : (_reportData$content9$ = _reportData$content9.header) === null || _reportData$content9$ === void 0 ? void 0 : _reportData$content9$.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Thead, null, reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content5 = reportData1.content) === null || _reportData1$content5 === void 0 ? void 0 : (_reportData1$content6 = _reportData1$content5.header) === null || _reportData1$content6 === void 0 ? void 0 : _reportData1$content6.rows.map(function (tr, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, tr === null || tr === void 0 ? void 0 : tr.map(function (th, j) {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: j,
        colSpan: th.colspan
      }, th.value);
    }));
  })), reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content7 = reportData1.content) === null || _reportData1$content7 === void 0 ? void 0 : (_reportData1$content8 = _reportData1$content7.body) === null || _reportData1$content8 === void 0 ? void 0 : _reportData1$content8.rows.map(function (tbody, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, tbody.map(function (td, j) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: j,
        colSpan: td.colspan
      }, td.value_unit === 'currency' ? parsePrice(td.value) : td.value);
    })));
  }), (reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content9 = reportData1.content) === null || _reportData1$content9 === void 0 ? void 0 : (_reportData1$content10 = _reportData1$content9.footer) === null || _reportData1$content10 === void 0 ? void 0 : _reportData1$content10.rows.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Tfoot, null, reportData1 === null || reportData1 === void 0 ? void 0 : (_reportData1$content11 = reportData1.content) === null || _reportData1$content11 === void 0 ? void 0 : (_reportData1$content12 = _reportData1$content11.footer) === null || _reportData1$content12 === void 0 ? void 0 : _reportData1$content12.rows.map(function (tr, i) {
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
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('ORDER_TYPE', 'Order type'),
    open: isOrderTypeFilter,
    onClose: function onClose() {
      return setIsOrderTypeFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsOrderTypeFilter.ReportsOrderTypeFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsOrderTypeFilter(false);
    }
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('DRIVER_SCHEDULE', 'Driver schedule'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

var ReportsOrderStatus = function ReportsOrderStatus(props) {
  var reportsDriverScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReportsOrderStatusUI,
    endpoint: 'business_orders_count_sales',
    endpoint1: 'franchise_orders_count_sales'
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdvancedReports, reportsDriverScheduleProps);
};

exports.ReportsOrderStatus = ReportsOrderStatus;