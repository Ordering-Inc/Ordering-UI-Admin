"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPassword = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigFileContext = require("../../../contexts/ConfigFileContext");
var _reactHookForm = require("react-hook-form");
var _RiLockPasswordLine = _interopRequireDefault(require("@meronex/icons/ri/RiLockPasswordLine"));
var _MdExitToApp = _interopRequireDefault(require("@meronex/icons/md/MdExitToApp"));
var _Shared = require("../../Shared");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _Inputs = require("../../../styles/Inputs");
var _Buttons = require("../../../styles/Buttons");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var ResetPasswordUI = function ResetPasswordUI(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images2, _props$afterComponent, _props$afterElements;
  var code = props.code,
    random = props.random,
    project = props.project,
    formState = props.formState,
    resetPasswordData = props.resetPasswordData,
    handleResetPassword = props.handleResetPassword,
    handleChangeInput = props.handleChangeInput,
    redirectResetPassword = props.redirectResetPassword,
    onPasswordReset = props.onPasswordReset,
    isSuccessfulReset = props.isSuccessfulReset,
    elementLinkToLogin = props.elementLinkToLogin;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    watch = _useForm.watch,
    reset = _useForm.reset;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useContext = (0, _react.useContext)(_ConfigFileContext.ConfigFileContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    configFile = _useContext2[0],
    setConfigFile = _useContext2[1];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var password = (0, _react.useRef)({});
  password.current = watch('password', '');
  var onSubmit = function onSubmit() {
    if (code && random) {
      handleResetPassword();
    } else {
      redirectResetPassword && redirectResetPassword(resetPasswordData);
      reset({
        project: '',
        password: ''
      });
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var timeout = null;
  var handleChangeProject = function handleChangeProject(e) {
    e.persist();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setConfigFile(_objectSpread(_objectSpread({}, configFile), {}, {
        project: e.target.value
      }));
    }, 750);
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    } else if (!formState.loading && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && (_formState$result3 = _formState$result3.result) !== null && _formState$result3 !== void 0 && _formState$result3.length) {
      var _formState$result4, _formState$result5;
      setAlertState({
        open: true,
        content: ((_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result) === 'OK' ? t('PASSWORD_RESET_SUCCESS', 'Password changed successfully') : t((_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result, 'Password changed successfully')
      });
    }
  }, [formState]);
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
    if (project) {
      setConfigFile(_objectSpread(_objectSpread({}, configFile), {}, {
        project: project
      }));
    }
    return function () {
      return closeAlert();
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ResetPasswordContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.loginHero
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.logotypeInvert,
    alt: "Logo login"
  })), code && random ? /*#__PURE__*/_react.default.createElement(_styles.FormSide, null, /*#__PURE__*/_react.default.createElement(_styles.TitleFormSide, null, /*#__PURE__*/_react.default.createElement("h1", null, t('TITLE_RESET_PASSWORD', 'Reset password')), /*#__PURE__*/_react.default.createElement("p", null, t('SUBTITLE_RESET_PASSWORD', 'Reset your password'))), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    onSubmit: handleSubmit(onSubmit)
  }, !project && /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "project",
    "aria-label": "project",
    spellcheck: "false",
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Project is required').replace('_attribute_', t('PROJECT', 'Project')),
      minLength: {
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    }),
    placeholder: t('PROJECT', 'Project'),
    onChange: function onChange(e) {
      return handleChangeProject(e);
    },
    autoComplete: "new-password",
    autoCapitalize: "off"
  }), /*#__PURE__*/_react.default.createElement(_MdExitToApp.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    "aria-label": "password",
    spellcheck: "false",
    ref: register({
      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field password is required'),
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    }),
    placeholder: t('NEW_PASSWORD', 'New passowrd'),
    onChange: handleChangeInput,
    autoComplete: "new-password"
  }), /*#__PURE__*/_react.default.createElement(_RiLockPasswordLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "confirm-password",
    "aria-label": "confirm-password",
    spellcheck: "false",
    ref: register({
      required: t('VALIDATION_ERROR_PASSWORD_CONFIRM_REQUIRED', 'The field password confirm is required'),
      validate: function validate(value) {
        return value === password.current || t('VALIDATION_ERROR_PASSWORDS_MATCH', 'The passwords do not match');
      }
    }),
    placeholder: t('CONFIRM_PASSWORD', 'Confirm Password'),
    onChange: handleChangeInput,
    autoComplete: "new-password"
  }), /*#__PURE__*/_react.default.createElement(_RiLockPasswordLine.default, null)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: formState.loading ? 'secondary' : 'primary',
    disabled: formState.loading
  }, !formState.loading ? t('CHANGE_PASSWORD', 'Change password') : t('LOADING', 'Loading')), elementLinkToLogin && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    register: true
  }, /*#__PURE__*/_react.default.createElement("span", null, t('SIGN_IN_MESSAGE', 'Do you want to sign in?')), elementLinkToLogin))) : /*#__PURE__*/_react.default.createElement(_styles.FormSide, null, /*#__PURE__*/_react.default.createElement(_styles.TitleFormSide, null, /*#__PURE__*/_react.default.createElement("h1", null, t('TITLE_RESET_PASSWORD', 'Reset password')), /*#__PURE__*/_react.default.createElement("p", null, t('RESET_PASSWORD_CODES_TITLE', 'Please insert the codes'))), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    onSubmit: handleSubmit(onSubmit)
  }, !code && /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "code",
    "aria-label": "code",
    ref: register({
      required: t('RESET_PASSWORD_CODE_REQUIRED', 'The field code is required')
    }),
    placeholder: t('CODE', 'Code'),
    onChange: handleChangeInput,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_MdExitToApp.default, null)), !random && /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "random",
    "aria-label": "random",
    ref: register({
      required: t('RESET_PASSWORD_RANDOM_REQUIRED', 'The field random is required')
    }),
    placeholder: t('RAMDON', 'Random'),
    onChange: handleChangeInput,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_MdExitToApp.default, null)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary"
  }, t('SUBMIT_CODES', 'Submit codes')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('RESET_PASSWORD', 'Reset Password'),
    content: alertState === null || alertState === void 0 ? void 0 : alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return isSuccessfulReset ? onPasswordReset() : closeAlert();
    },
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ResetPassword = exports.ResetPassword = function ResetPassword(props) {
  var resetPasswordProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ResetPasswordUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ResetPassword, resetPasswordProps);
};