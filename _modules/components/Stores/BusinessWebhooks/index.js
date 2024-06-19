"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessWebhooks = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _Select = require("../../../styles/Select");
var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessWebhooksUI = function BusinessWebhooksUI(props) {
  var _business$webhooks, _hookFormState$change, _hookFormState$change2, _hookFormState$change3;
  var business = props.business,
    handleChangeSelect = props.handleChangeSelect,
    handleChangeInput = props.handleChangeInput,
    hookFormState = props.hookFormState,
    handleUpdateAddClick = props.handleUpdateAddClick,
    handleDeleteWebhook = props.handleDeleteWebhook,
    handleChangeDelay = props.handleChangeDelay;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var webhookList = [{
    value: '',
    content: t('SELECT_HOOK', 'Select a hook')
  }, {
    value: 'orders_register',
    content: t('ORDERS_REGISTER')
  }, {
    value: 'orders_status_updated',
    content: t('ORDERS_STATUS_UPDATED')
  }, {
    value: 'orders_update_driver',
    content: t('ORDERS_UPDATE_DRIVER')
  }, {
    value: 'orders_pending',
    content: t('ORDERS_PENDING')
  }, {
    value: 'orders_completed',
    content: t('ORDERS_COMPLETED')
  }, {
    value: 'orders_rejected',
    content: t('ORDERS_REJECTED')
  }, {
    value: 'orders_rejected_business',
    content: t('ORDERS_REJECTED_BUSINESS')
  }, {
    value: 'orders_rejected_driver',
    content: t('ORDERS_REJECTED_DRIVER')
  }, {
    value: 'orders_accepted_business',
    content: t('ORDERS_ACCEPTED_BUSINESS')
  }, {
    value: 'orders_accepted_driver',
    content: t('ORDERS_ACCEPTED_DRIVER')
  }, {
    value: 'orders_pickup_completed_driver',
    content: t('ORDERS_PICKUP_COMPLETED_DRIVER')
  }, {
    value: 'orders_pickup_failed_driver',
    content: t('ORDERS_PICKUP_FAILED_DRIVER')
  }, {
    value: 'orders_delivery_completed_driver',
    content: t('ORDERS_DELIVERY_COMPLETED_DRIVER')
  }, {
    value: 'orders_delivery_failed_driver',
    content: t('ORDERS_DELIVERY_FAILED_DRIVER')
  }, {
    value: 'orders_unassigned_driver',
    content: t('ORDERS_UNASSIGNED_DRIVER', 'Order unassigned driver')
  }, {
    value: 'preorder_updated',
    content: t('PREORDER_UPDATED', 'Preorder updated')
  }, {
    value: 'drivers_changes',
    content: t('DRIVERS_CHANGES', 'Driver changes')
  }];
  var timeList = [{
    value: '',
    content: t('SELECT_DELAY', 'Select a delay')
  }, {
    value: '0',
    content: t('IMMEDIATELY', 'Immediately')
  }, {
    value: '300',
    content: "5 ".concat(t('MINUTES', 'Minutes'))
  }, {
    value: '600',
    content: "10 ".concat(t('MINUTES', 'Minutes'))
  }, {
    value: '900',
    content: "15 ".concat(t('MINUTES', 'Minutes'))
  }, {
    value: 'delivery_time',
    content: t('DELIVERY_TIME', 'Delivery time')
  }, {
    value: 'pickup_time',
    content: t('PICKUP_TIME', 'Pickup time')
  }, {
    value: 'preparation_time',
    content: t('PREPARATION_TIME', 'Preparation time')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onSubmit = function onSubmit() {
    if (Object.keys(hookFormState === null || hookFormState === void 0 ? void 0 : hookFormState.changes).length > 0) {
      handleUpdateAddClick();
    }
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (hookFormState !== null && hookFormState !== void 0 && hookFormState.result.error) {
      var _hookFormState$result;
      setAlertState({
        open: true,
        content: hookFormState === null || hookFormState === void 0 || (_hookFormState$result = hookFormState.result) === null || _hookFormState$result === void 0 ? void 0 : _hookFormState$result.result
      });
    }
  }, [hookFormState === null || hookFormState === void 0 ? void 0 : hookFormState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WebhooksContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('WEBHOOKS', 'WEbhooks')), (business === null || business === void 0 || (_business$webhooks = business.webhooks) === null || _business$webhooks === void 0 ? void 0 : _business$webhooks.length) > 0 && (business === null || business === void 0 ? void 0 : business.webhooks.map(function (webhook) {
    var _webhook$delay;
    return /*#__PURE__*/_react.default.createElement(_styles2.WebhookAddContainer, {
      key: webhook.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.HookSelectWrapper, {
      inActive: true
    }, /*#__PURE__*/_react.default.createElement(_Select.Select, {
      defaultValue: webhook === null || webhook === void 0 ? void 0 : webhook.hook,
      options: webhookList,
      onChange: function onChange(value) {
        return handleChangeSelect(value, 'hook');
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.UrlInputWrapper, {
      inActive: true
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      name: "url",
      defaultValue: (webhook === null || webhook === void 0 ? void 0 : webhook.url) || ''
    })), /*#__PURE__*/_react.default.createElement(_styles2.DelaySelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
      defaultValue: (_webhook$delay = webhook === null || webhook === void 0 ? void 0 : webhook.delay) !== null && _webhook$delay !== void 0 ? _webhook$delay : '',
      options: timeList,
      onChange: function onChange(value) {
        return handleChangeDelay(value, webhook);
      },
      notAsync: true
    })), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleDeleteWebhook(webhook.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, null)));
  })), /*#__PURE__*/_react.default.createElement(_styles2.WebhookAddForm, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.WebhookAddContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HookSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: (hookFormState === null || hookFormState === void 0 || (_hookFormState$change = hookFormState.changes) === null || _hookFormState$change === void 0 ? void 0 : _hookFormState$change.hook) || '',
    options: webhookList,
    onChange: function onChange(value) {
      return handleChangeSelect(value, 'hook');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.UrlInputWrapper, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "url",
    value: (hookFormState === null || hookFormState === void 0 || (_hookFormState$change2 = hookFormState.changes) === null || _hookFormState$change2 === void 0 ? void 0 : _hookFormState$change2.url) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('URL', 'Url'))
    }),
    placeholder: t('URL', 'Url')
  })), /*#__PURE__*/_react.default.createElement(_styles2.DelaySelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: (hookFormState === null || hookFormState === void 0 || (_hookFormState$change3 = hookFormState.changes) === null || _hookFormState$change3 === void 0 ? void 0 : _hookFormState$change3.delay) || '',
    options: timeList,
    onChange: function onChange(value) {
      return handleChangeSelect(value, 'delay');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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
var BusinessWebhooks = exports.BusinessWebhooks = function BusinessWebhooks(props) {
  var businessWebhooksProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: BusinessWebhooksUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessWebhooks, businessWebhooksProps);
};