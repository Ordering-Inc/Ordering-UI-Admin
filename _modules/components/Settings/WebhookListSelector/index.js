"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebhookListSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Select = require("../../../styles/Select");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WebhookListSelector = exports.WebhookListSelector = function WebhookListSelector(props) {
  var defaultValue = props.defaultValue,
    handleChangeHook = props.handleChangeHook;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var hookOptions = [{
    value: 'users_register',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('USERS_REGISTER', 'New user'))
  }, {
    value: 'orders_register',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('NOTIFICATION_NEW_ORDER', 'New order'))
  }, {
    value: 'orders_status_updated',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_STATUS_UPDATED', 'Order status update'))
  }, {
    value: 'orders_update_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_UPDATE_DRIVER', 'Order update by driver'))
  }, {
    value: 'orders_pending',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_PENDING', 'Order pending'))
  }, {
    value: 'orders_completed',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('TUTORIAL_ORDER_COMPLETED', 'Order completed'))
  }, {
    value: 'orders_rejected',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_REJECTED', 'Order rejected'))
  }, {
    value: 'orders_rejected_business',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_REJECTED_BUSINESS', 'Order rejected by business'))
  }, {
    value: 'orders_rejected_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_REJECTED_DRIVER', 'Order rejected by driver'))
  }, {
    value: 'orders_accepted_business',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_ACCEPTED_BUSINESS', 'Order accepted by business'))
  }, {
    value: 'orders_accepted_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_ACCEPTED_DRIVER', 'Order accepted by driver'))
  }, {
    value: 'orders_pickup_completed_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_PICKUP_COMPLETED_DRIVER', 'Order pickup completed by driver'))
  }, {
    value: 'orders_pickup_failed_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_PICKUP_FAILED_DRIVER', 'Order pickup failed by driver'))
  }, {
    value: 'orders_delivery_completed_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_DELIVERY_COMPLETED_DRIVER', 'Order delivery completed by driver'))
  }, {
    value: 'orders_delivery_failed_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_DELIVERY_FAILED_DRIVER', 'Order delivery failed by driver'))
  }, {
    value: 'orders_unassigned_driver',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ORDERS_UNASSIGNED_DRIVER', 'Order unassigned driver'))
  }, {
    value: 'preorder_updated',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PREORDER_UPDATED', 'Preorder updated'))
  }, {
    value: 'drivers_changes',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('DRIVERS_CHANGES', 'Driver changes'))
  }];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SELECT_HOOK', 'Select a hook'));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: placeholder,
    defaultValue: defaultValue,
    options: hookOptions,
    onChange: function onChange(hook) {
      return handleChangeHook(hook);
    }
  }));
};