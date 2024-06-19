"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerWalletEvents = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var CustomerWalletEvents = exports.CustomerWalletEvents = function CustomerWalletEvents(props) {
  var walletType = props.walletType,
    walletEventsState = props.walletEventsState,
    parseEvent = props.parseEvent;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parsePrice = _useUtils2$.parsePrice;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.HistoriesWrapper, {
    isLoading: walletEventsState.loading
  }, walletEventsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.HistoryItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null));
  }) : walletEventsState.events.map(function (event) {
    var _event$wallet_event, _event$wallet_event2;
    return /*#__PURE__*/_react.default.createElement(_styles.HistoryItem, {
      key: event.id
    }, /*#__PURE__*/_react.default.createElement(_styles.TransactionHeader, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CircleFill, null), /*#__PURE__*/_react.default.createElement("span", {
      className: "date"
    }, parseDate(event === null || event === void 0 ? void 0 : event.created_at, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement(_styles.Amount, {
      negative: Math.sign(event.amount) === -1
    }, walletType === 'cash' ? parsePrice(event.amount) : event.amount)), /*#__PURE__*/_react.default.createElement(_styles.Transaction, {
      dangerouslySetInnerHTML: {
        __html: parseEvent(event)
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.TransactionDescription, null, event.description), (event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.order_id) && /*#__PURE__*/_react.default.createElement(_styles.TransactionDescription, null, /*#__PURE__*/_react.default.createElement("strong", null, t('INVOICE_ORDER_NO', 'Order No')), " ", event === null || event === void 0 || (_event$wallet_event2 = event.wallet_event) === null || _event$wallet_event2 === void 0 ? void 0 : _event$wallet_event2.order_id), /*#__PURE__*/_react.default.createElement(_styles.TransactionCode, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, t('CODE', 'Code'), ":"), " ", event === null || event === void 0 ? void 0 : event.code)));
  })));
};