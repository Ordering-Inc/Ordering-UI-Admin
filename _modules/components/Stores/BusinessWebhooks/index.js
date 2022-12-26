"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
  }];
  var timeList = [{
    value: '',
    content: t('SELECT_DELAY', 'Select a delay')
  }, {
    value: '0',
    content: t('IMMEDIATELY', 'Immediately')
  }, {
    value: 'delivery_time',
    content: t('DELIVERY_TIME', 'Delivery time')
  }, {
    value: 'pickup_time',
    content: t('PICKUP_TIME', 'Pickup time')
  }, {
    value: '300',
    content: "5 ".concat(t('MINUTES', 'Minutes'))
  }, {
    value: '600',
    content: "10 ".concat(t('MINUTES', 'Minutes'))
  }, {
    value: '900',
    content: "15 ".concat(t('MINUTES', 'Minutes'))
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
        content: hookFormState === null || hookFormState === void 0 ? void 0 : (_hookFormState$result = hookFormState.result) === null || _hookFormState$result === void 0 ? void 0 : _hookFormState$result.result
      });
    }
  }, [hookFormState === null || hookFormState === void 0 ? void 0 : hookFormState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WebhooksContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('WEBHOOKS', 'WEbhooks')), (business === null || business === void 0 ? void 0 : (_business$webhooks = business.webhooks) === null || _business$webhooks === void 0 ? void 0 : _business$webhooks.length) > 0 && (business === null || business === void 0 ? void 0 : business.webhooks.map(function (webhook) {
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
    defaultValue: (hookFormState === null || hookFormState === void 0 ? void 0 : (_hookFormState$change = hookFormState.changes) === null || _hookFormState$change === void 0 ? void 0 : _hookFormState$change.hook) || '',
    options: webhookList,
    onChange: function onChange(value) {
      return handleChangeSelect(value, 'hook');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.UrlInputWrapper, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "url",
    value: (hookFormState === null || hookFormState === void 0 ? void 0 : (_hookFormState$change2 = hookFormState.changes) === null || _hookFormState$change2 === void 0 ? void 0 : _hookFormState$change2.url) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('URL', 'Url'))
    }),
    placeholder: t('URL', 'Url')
  })), /*#__PURE__*/_react.default.createElement(_styles2.DelaySelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: (hookFormState === null || hookFormState === void 0 ? void 0 : (_hookFormState$change3 = hookFormState.changes) === null || _hookFormState$change3 === void 0 ? void 0 : _hookFormState$change3.delay) || '',
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
var BusinessWebhooks = function BusinessWebhooks(props) {
  var businessWebhooksProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: BusinessWebhooksUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessWebhooks, businessWebhooksProps);
};
exports.BusinessWebhooks = BusinessWebhooks;