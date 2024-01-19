"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleRecoveryNotification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Select = require("../../../styles/Select");
var _Shared = require("../../Shared");
var _reactHookForm = require("react-hook-form");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleRecoveryNotificationUI = function SingleRecoveryNotificationUI(props) {
  var _formState$changes2, _formState$changes3, _notification$title, _formState$changes4, _formState$changes5, _notification$channel, _formState$changes6, _formState$changes7, _formState$changes8, _notification$body, _formState$changes9, _formState$changes10, _notification$body2;
  var notification = props.notification,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleChangeSelect = props.handleChangeSelect,
    handleUpdateClick = props.handleUpdateClick,
    handleDeleteClick = props.handleDeleteClick,
    isAdd = props.isAdd,
    handleClickAddBtn = props.handleClickAddBtn,
    handleChangeItems = props.handleChangeItems;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors,
    setValue = _useForm.setValue;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var channelList = [{
    value: 'email',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('EMAIL', 'Email'))
  }, {
    value: 'sms',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SMS', 'SMS'))
  }, {
    value: 'notification',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PUSH_NOTIFICATION', 'Push notification'))
  }];
  var handleClickDeleteBtn = function handleClickDeleteBtn(id) {
    handleDeleteClick && handleDeleteClick(id);
  };
  var handleClickUpdateBtn = function handleClickUpdateBtn(id) {
    handleUpdateClick && handleUpdateClick(id, formState === null || formState === void 0 ? void 0 : formState.changes);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onClickDeleteNotification = function onClickDeleteNotification(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('NOTIFICATION', 'Notification')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleClickDeleteBtn(id);
      }
    });
  };
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_CHANNEL', 'Select a channel'));
  (0, _react.useEffect)(function () {
    if (!(formState !== null && formState !== void 0 && formState.error) || formState.loading) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
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
  var onSubmit = function onSubmit() {
    var _formState$changes;
    if (!((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.channel) && !(notification !== null && notification !== void 0 && notification.channel)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED').replace('_attribute_', t('CHANNEL', 'Channel'))]
      });
      return;
    }
    if (isAdd) {
      handleClickAddBtn();
    } else {
      handleClickUpdateBtn(notification === null || notification === void 0 ? void 0 : notification.id);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE', 'Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "title",
    placeholder: t('TITLE', 'Title'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.title ? formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.title : (_notification$title = notification === null || notification === void 0 ? void 0 : notification.title) !== null && _notification$title !== void 0 ? _notification$title : '',
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED').replace('_attribute_', t('TITLE', 'Title'))
    }),
    onChange: handleChangeInput
  })), isAdd && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CHANNEL', 'Channel')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: placeholder,
    defaultValue: formState !== null && formState !== void 0 && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.channel ? formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.channel : (_notification$channel = notification === null || notification === void 0 ? void 0 : notification.channel) !== null && _notification$channel !== void 0 ? _notification$channel : '',
    options: channelList,
    onChange: function onChange(val) {
      setValue('body', '');
      handleChangeItems({
        channel: val,
        body: ''
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MESSAGE', 'Message')), (formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.channel) === 'email' || (notification === null || notification === void 0 ? void 0 : notification.channel) === 'email' ? /*#__PURE__*/_react.default.createElement(_Shared.HtmlEditor, {
    body: formState !== null && formState !== void 0 && (_formState$changes7 = formState.changes) !== null && _formState$changes7 !== void 0 && _formState$changes7.body ? formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.body : (_notification$body = notification === null || notification === void 0 ? void 0 : notification.body) !== null && _notification$body !== void 0 ? _notification$body : '',
    handleChangeBody: function handleChangeBody(val) {
      return handleChangeSelect('body', val);
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "body",
    placeholder: t('WRITE_MESSAGE', 'Write a message'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$changes9 = formState.changes) !== null && _formState$changes9 !== void 0 && _formState$changes9.body ? formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.body : (_notification$body2 = notification === null || notification === void 0 ? void 0 : notification.body) !== null && _notification$body2 !== void 0 ? _notification$body2 : '',
    onChange: handleChangeInput,
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED').replace('_attribute_', t('MESSAGE', 'Message'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, isAdd ? /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit",
    borderRadius: "8px",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 || (formState === null || formState === void 0 ? void 0 : formState.loading)
  }, t('ADD', 'Add')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit",
    borderRadius: "8px",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 || (formState === null || formState === void 0 ? void 0 : formState.loading)
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundary",
    borderRadius: "8px",
    onClick: function onClick() {
      return onClickDeleteNotification(notification === null || notification === void 0 ? void 0 : notification.id);
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('RECOVERY_ACTIONS', 'Recovery actions'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var SingleRecoveryNotification = exports.SingleRecoveryNotification = function SingleRecoveryNotification(props) {
  var singleRecoveryNotificationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleRecoveryNotificationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleRecoveryNotification, singleRecoveryNotificationProps);
};