"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsStatusFilterBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnalyticsStatusFilterBar = exports.AnalyticsStatusFilterBar = function AnalyticsStatusFilterBar(props) {
  var filterList = props.filterList,
    handleChangeFilterList = props.handleChangeFilterList;
  var changeSelectedAnalyticsStatus = function changeSelectedAnalyticsStatus(orderStatus) {
    window.scrollTo(0, 0);
    handleChangeFilterList && handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      lapse: orderStatus
    }));
  };
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusFilterContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: (filterList === null || filterList === void 0 ? void 0 : filterList.lapse) === 'today',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('today');
    }
  }, t('TODAY', 'Today')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: (filterList === null || filterList === void 0 ? void 0 : filterList.lapse) === 'yesterday',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('yesterday');
    }
  }, t('YESTERDAY', 'Yesterday')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: (filterList === null || filterList === void 0 ? void 0 : filterList.lapse) === 'last_7_days',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('last_7_days');
    }
  }, t('LAST_7_DAYS', 'Last 7 days')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: (filterList === null || filterList === void 0 ? void 0 : filterList.lapse) === 'last_30_days',
    onClick: function onClick() {
      return changeSelectedAnalyticsStatus('last_30_days');
    }
  }, t('LAST_30_DAYS', 'Last 30 days')))));
};