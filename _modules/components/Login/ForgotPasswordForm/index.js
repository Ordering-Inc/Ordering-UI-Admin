"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForgotPasswordForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigFileContext = require("../../../contexts/ConfigFileContext");
var _MdExitToApp = _interopRequireDefault(require("@meronex/icons/md/MdExitToApp"));
var _HiOutlineMail = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineMail"));
var _reactHookForm = require("react-hook-form");
var _Shared = require("../../Shared");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _styles2 = require("../../../styles");
var _styledComponents = require("styled-components");
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
var ForgotPasswordUI = function ForgotPasswordUI(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$logos;
  var hanldeChangeInput = props.hanldeChangeInput,
    handleButtonForgotPasswordClick = props.handleButtonForgotPasswordClick,
    formState = props.formState,
    formData = props.formData,
    elementLinkToLogin = props.elementLinkToLogin,
    isPopup = props.isPopup,
    isReCaptchaEnable = props.isReCaptchaEnable,
    handleReCaptcha = props.handleReCaptcha;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      title: '',
      content: [],
      success: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useContext = (0, _react.useContext)(_ConfigFileContext.ConfigFileContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    configFile = _useContext2[0],
    setConfigFile = _useContext2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    submitted = _useState4[0],
    setSubmitted = _useState4[1];
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      }));
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      }));
    }
    if (!formState.loading && !((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && alertState.success) {
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: true,
        title: t('LINK_SEND_SUCCESSFULLY', 'Link Sent Successfully'),
        content: t('IF_ACCOUNT_EXIST_EMAIL_SEND_PASSWORD', 'If an account exists with this email a password will be sent')
      }));
    }
  }, [formState.loading]);
  (0, _react.useEffect)(function () {
    var _formState$result4;
    if (!formState.loading && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.error) {
      var _formState$result5;
      setAlertState({
        open: true,
        content: ((_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result) || [t('ERROR', 'Error')]
      });
      setSubmitted(false);
    }
  }, [formState]);
  var onSubmit = function onSubmit() {
    // const _configFile = { ...configFile }
    // _configFile.project = projectName
    // setConfigFile(_configFile)
    // localStorage.setItem('project', projectName)
    setSubmitted(true);
  };
  var closeAlert = function closeAlert() {
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      open: false,
      content: []
    }));
  };
  var timeout = null;
  var handleChangeProject = function handleChangeProject(e) {
    e.persist();
    clearTimeout(timeout);
    setSubmitted(false);
    timeout = setTimeout(function () {
      setConfigFile(_objectSpread(_objectSpread({}, configFile), {}, {
        project: e.target.value
      }));
    }, 750);
  };
  (0, _react.useEffect)(function () {
    if (ordering.project === '' || !submitted) return;
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      success: true
    }));
    handleButtonForgotPasswordClick();
  }, [ordering, submitted]);
  (0, _react.useEffect)(function () {
    setConfigFile(_objectSpread(_objectSpread({}, configFile), {}, {
      project: window.localStorage.getItem('project') || null
    }));
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.ForgotPasswordContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.loginHero
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotypeInvert,
    alt: "Logo login"
  })), /*#__PURE__*/_react.default.createElement(_styles.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleFormSide, null, /*#__PURE__*/_react.default.createElement("h1", null, t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')), /*#__PURE__*/_react.default.createElement("p", null, t('SUBTITLE_FORGOT_PASSWORD', 'Enter your email addres and we\'ll send you a link to reset your password.'))), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    type: "text",
    name: "project",
    "aria-label": "project",
    placeholder: t('PROJECT', 'Project'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'The project field is required').replace('_attribute_', t('PROJECT', 'Project'))
    }),
    onChange: function onChange(e) {
      return handleChangeProject(e);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_MdExitToApp.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    type: "text",
    name: "email",
    "aria-label": "email",
    spellcheck: "false",
    placeholder: t('EMAIL', 'Email'),
    onChange: function onChange(e) {
      return hanldeChangeInput(e);
    },
    ref: register({
      required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    }),
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_HiOutlineMail.default, null)), isReCaptchaEnable && /*#__PURE__*/_react.default.createElement(_styles.ReCAPTCHAWrapper, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ReCaptcha, {
    handleReCaptcha: handleReCaptcha
  })), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: formState.loading || alertState.success
  }, formState.loading ? t('LOADING', 'Loading...') : alertState.success && formState.result.result ? t('LINK_SEND_FORGOT_PASSWORD', 'Link Sent') : t('FRONT_RECOVER_PASSWORD', 'Recover Password')), elementLinkToLogin && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    register: true,
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('SIGN_IN_MESSAGE', 'Do you want to sign in?')), elementLinkToLogin))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: alertState.title || t('TITLE_FORGOT_PASSWORD', 'Forgot your password?'),
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
  }));
};
var ForgotPasswordForm = function ForgotPasswordForm(props) {
  var ForgotPasswordProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ForgotPasswordUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ForgotPasswordForm, ForgotPasswordProps);
};
exports.ForgotPasswordForm = ForgotPasswordForm;