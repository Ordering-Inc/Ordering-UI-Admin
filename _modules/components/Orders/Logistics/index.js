"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logistics = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrap = require("react-bootstrap");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var LogisticsUI = function LogisticsUI(props) {
  var logisticList = props.logisticList,
    parseLog = props.parseLog,
    getLogistics = props.getLogistics;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    getTimeAgo = _useUtils2$.getTimeAgo,
    parseDate = _useUtils2$.parseDate;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 50,
      style: {
        marginBottom: '20px'
      }
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 50,
      style: {
        marginBottom: '20px'
      }
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 50,
      style: {
        marginBottom: '20px'
      }
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 50,
      style: {
        marginBottom: '20px'
      }
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 50,
      style: {
        marginBottom: '20px'
      }
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.WraaperLogs, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    rectangle: true,
    color: "primary",
    onClick: function onClick() {
      return getLogistics();
    }
  }, t('RELOAD', 'Reload')), logisticList.logs.map(function (log) {
    var _log$data;
    return /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, {
      key: log.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: parseLog(log)
      }
    }), log.event === 'logistic_expired' && /*#__PURE__*/_react.default.createElement(_styles2.Reason, null, t('REASON', 'Reason'), ": ", log === null || log === void 0 || (_log$data = log.data) === null || _log$data === void 0 ? void 0 : _log$data.reason), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      placement: "top",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, parseDate(log.updated_at))
    }, /*#__PURE__*/_react.default.createElement(_styles2.TimeofSent, null, getTimeAgo(log.updated_at))));
  })));
};
var Logistics = exports.Logistics = function Logistics(props) {
  var logisticsProps = _objectSpread(_objectSpread({}, props), {}, {
    orderId: props.orderId,
    UIComponent: LogisticsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.Logistics, logisticsProps);
};