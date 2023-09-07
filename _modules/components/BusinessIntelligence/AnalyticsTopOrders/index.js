"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsTopOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _BsDownload = _interopRequireDefault(require("@meronex/icons/bs/BsDownload"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _GraphLoadingMessage = require("../GraphLoadingMessage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AnalyticsTopOrders = function AnalyticsTopOrders(props) {
  var dataList = props.dataList;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var downloadElementRef = (0, _react.useRef)(null);
  var downloadCSV = function downloadCSV() {
    var csv = "".concat(t('NAME', 'Name'), ", ").concat(t('ORDERS', 'Orders'), "\n");
    var _iterator = _createForOfIteratorHelper(dataList === null || dataList === void 0 ? void 0 : dataList.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        csv += row.name + ',';
        csv += "".concat(row.orders_count, ",");
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
    downloadLink.download = "top_orders_".concat(fileSuffix, ".csv");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.AnalyticsTopOrdersHeader, null, /*#__PURE__*/_react.default.createElement("p", null, t('TOP_ORDERS', 'Top Orders')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, {
    disabled: (dataList === null || dataList === void 0 ? void 0 : dataList.data.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_BsDownload.default, {
    onClick: downloadCSV
  }))), dataList !== null && dataList !== void 0 && dataList.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainerWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 30
    }));
  }), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : /*#__PURE__*/_react.default.createElement(_styles.TopOrdersContainerWrapper, null, (dataList === null || dataList === void 0 ? void 0 : dataList.data.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.ProductCategoryContainer, {
    ref: downloadElementRef
  }, dataList === null || dataList === void 0 ? void 0 : dataList.data.map(function (item, i) {
    var _parseFloat;
    return /*#__PURE__*/_react.default.createElement(_styles.TopOrdersContent, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.name), /*#__PURE__*/_react.default.createElement(_styles.ValueWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ValueContainer, {
      percent: item === null || item === void 0 ? void 0 : item.orders_percentage
    }, item === null || item === void 0 ? void 0 : item.orders_count), /*#__PURE__*/_react.default.createElement(_styles.PercentContainer, {
      percent: item === null || item === void 0 ? void 0 : item.orders_percentage
    }, (_parseFloat = parseFloat(item === null || item === void 0 ? void 0 : item.orders_percentage)) === null || _parseFloat === void 0 ? void 0 : _parseFloat.toFixed(2), "%")));
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data'))));
};
exports.AnalyticsTopOrders = AnalyticsTopOrders;