"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSyncStoreDetail = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessSyncStoreDetail = exports.BusinessSyncStoreDetail = function BusinessSyncStoreDetail(props) {
  var business = props.business;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var link = {
    order_status_update: 'https://integrator.com/orderstatusUpdate',
    receive_menus: 'https://integrator.com/menuUpdate',
    snooze: 'https://integrator.com/snoozeUnsnooze',
    busy_mode: 'https://integrator.com/busyMode',
    preparation_time: 'https://integrator.com/updatePrepTimeURL'
  };
  var LinkItem = function LinkItem(props) {
    var name = props.name,
      URL = props.URL;
    return /*#__PURE__*/_react.default.createElement(_styles.LinkItemWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, name), /*#__PURE__*/_react.default.createElement(_styles.LinkWrapper, null, /*#__PURE__*/_react.default.createElement("a", {
      href: URL
    }, URL), /*#__PURE__*/_react.default.createElement(_styles2.IconButton, {
      onClick: function onClick() {
        return navigator.clipboard.writeText(URL);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Files, null))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name)), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(LinkItem, {
    name: t('RECEIVE_ORDER_STATUS_UPDATES', 'Receive order status updates'),
    URL: link.order_status_update
  }), /*#__PURE__*/_react.default.createElement(LinkItem, {
    name: t('RECEIVE_MENUS', 'Receive menus'),
    URL: link.receive_menus
  }), /*#__PURE__*/_react.default.createElement(LinkItem, {
    name: t('SNOOZE_OR_UNSNOOZE', 'Snooze or unsnooze'),
    URL: link.snooze
  }), /*#__PURE__*/_react.default.createElement(LinkItem, {
    name: t('ENABLE_OR_DISABLE_BUSY_MODE', 'Enable or Disable busy mode'),
    URL: link.busy_mode
  }), /*#__PURE__*/_react.default.createElement(LinkItem, {
    name: t('UPDATE_PREPARATION_TIME', 'Update preparation time'),
    URL: link.preparation_time
  })));
};