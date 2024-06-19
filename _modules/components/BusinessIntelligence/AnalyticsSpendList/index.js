"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsSpendList = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _GiAlarmClock = _interopRequireDefault(require("@meronex/icons/gi/GiAlarmClock"));
var _styles = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _utils = require("../../../utils");
var _GraphLoadingMessage = require("../GraphLoadingMessage");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AnalyticsSpendList = exports.AnalyticsSpendList = function AnalyticsSpendList(props) {
  var dataList = props.dataList,
    title = props.title;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.AnalyticsSpendListHeader, null, /*#__PURE__*/_react.default.createElement("p", null, title)), dataList !== null && dataList !== void 0 && dataList.loading ? /*#__PURE__*/_react.default.createElement(_styles.AnalyticsSpendListContent, null, /*#__PURE__*/_react.default.createElement(_styles.TimeContentWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 40
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_styles.ReviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 80
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_GraphLoadingMessage.GraphLoadingMessage, null)) : dataList !== null && dataList !== void 0 && dataList.data ? /*#__PURE__*/_react.default.createElement(_styles.AnalyticsSpendListContent, null, /*#__PURE__*/_react.default.createElement(_styles.TimeContentWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, (0, _utils.convertHMS)((dataList === null || dataList === void 0 ? void 0 : dataList.data) * 1))), /*#__PURE__*/_react.default.createElement(_styles.ReviewContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBlock, null, /*#__PURE__*/_react.default.createElement(_GiAlarmClock.default, null)), /*#__PURE__*/_react.default.createElement("p", null, t('REGULAR', 'Regular')))) : /*#__PURE__*/_react.default.createElement(_styles.EmptyContent, null, t('NO_DATA', 'No Data')));
};