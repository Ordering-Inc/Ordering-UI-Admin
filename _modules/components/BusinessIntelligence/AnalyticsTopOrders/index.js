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
var AnalyticsTopOrders = exports.AnalyticsTopOrders = function AnalyticsTopOrders(props) {
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