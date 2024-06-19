"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebhooksForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../../styles");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WebhooksForm = exports.WebhooksForm = function WebhooksForm(props) {
  var _changesState$webhook, _changesState$webhook2, _changesState$webhook3;
  var changesState = props.changesState,
    handleChangesState = props.handleChangesState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useFormContext = (0, _reactHookForm.useFormContext)(),
    register = _useFormContext.register;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('WEBHOOKS', 'Webhooks')), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBHOOK_NEW_ORDER', 'Webhook new order')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "webhook_new_order",
    defaultValue: (_changesState$webhook = changesState === null || changesState === void 0 ? void 0 : changesState.webhook_new_order) !== null && _changesState$webhook !== void 0 ? _changesState$webhook : '',
    onChange: function onChange(e) {
      return handleChangesState('webhook_new_order', e.target.value);
    },
    placeholder: t('WEBHOOK_NEW_ORDER', 'Webhook new order'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('WEBHOOK_NEW_ORDER', 'Webhook new order'))
    }),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "webhook_cancel_request",
    defaultValue: (_changesState$webhook2 = changesState === null || changesState === void 0 ? void 0 : changesState.webhook_cancel_request) !== null && _changesState$webhook2 !== void 0 ? _changesState$webhook2 : '',
    onChange: function onChange(e) {
      return handleChangesState('webhook_cancel_request', e.target.value);
    },
    placeholder: t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('WEBHOOK_CANCEL_REQUEST', 'Webhook cancel request'))
    }),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "webhook_order_status_changed",
    defaultValue: (_changesState$webhook3 = changesState === null || changesState === void 0 ? void 0 : changesState.webhook_order_status_changed) !== null && _changesState$webhook3 !== void 0 ? _changesState$webhook3 : '',
    onChange: function onChange(e) {
      return handleChangesState('webhook_order_status_changed', e.target.value);
    },
    placeholder: t('WEBHOOK_ORDER_STATUS_CHANGED', 'Webhook order status changed'),
    autoComplete: "off"
  }))));
};