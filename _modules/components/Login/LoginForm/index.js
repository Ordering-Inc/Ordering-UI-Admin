"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigFileContext = require("../../../contexts/ConfigFileContext");
var _reactHookForm = require("react-hook-form");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useCountdownTimer3 = require("../../../hooks/useCountdownTimer");
var _Shared = require("../../Shared");
var _BsArrowRightShort = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRightShort"));
var _MdExitToApp = _interopRequireDefault(require("@meronex/icons/md/MdExitToApp"));
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _HiOutlineMail = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineMail"));
var _RiLockPasswordLine = _interopRequireDefault(require("@meronex/icons/ri/RiLockPasswordLine"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LoginFormUI = function LoginFormUI(props) {
  var _configs$dashboard_lo, _theme$images, _configs$dashboard_lo2, _theme$images2;
  var useLoginOtpEmail = props.useLoginOtpEmail,
    useLoginOptCellphone = props.useLoginOptCellphone,
    useLoginByCellphone = props.useLoginByCellphone,
    handleChangeInput = props.handleChangeInput,
    handleButtonLoginClick = props.handleButtonLoginClick,
    elementLinkToSignup = props.elementLinkToSignup,
    elementLinkToForgotPassword = props.elementLinkToForgotPassword,
    formState = props.formState,
    loginTab = props.loginTab,
    isPopup = props.isPopup,
    isReCaptchaEnable = props.isReCaptchaEnable,
    handleReCaptcha = props.handleReCaptcha,
    useProjectDomain = props.useProjectDomain,
    checkPhoneCodeState = props.checkPhoneCodeState,
    otpType = props.otpType,
    setOtpType = props.setOtpType,
    handleChangeTab = props.handleChangeTab,
    generateOtpCode = props.generateOtpCode,
    otpState = props.otpState,
    setOtpState = props.setOtpState,
    useLoginByEmail = props.useLoginByEmail,
    handleChangeCredentials = props.handleChangeCredentials,
    credentials = props.credentials;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    control = _useForm.control;
  var _useContext = (0, _react.useContext)(_ConfigFileContext.ConfigFileContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    configFile = _useContext2[0],
    setConfigFile = _useContext2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      version: 'v3',
      siteKey: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    reCaptchaVersion = _useState4[0],
    setRecaptchaVersion = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    submitted = _useState6[0],
    setSubmitted = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    passwordSee = _useState8[0],
    setPasswordSee = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    loginWithOtpState = _useState10[0],
    setLoginWithOtpState = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    willVerifyOtpState = _useState12[0],
    setWillVerifyOtpState = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    timer = _useState14[0],
    setTimer = _useState14[1];
  var numOtpInputs = loginTab === 'otp' ? 6 : 4;
  var otpPlaceholder = _toConsumableArray(Array(numOtpInputs)).fill(0).join('');
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    resetOtpLeftTime = _useCountdownTimer2[2];
  var isOtpEmail = loginTab === 'otp' && otpType === 'email';
  var isOptCellphone = loginTab === 'otp' && otpType === 'cellphone';
  var onSubmit = function onSubmit() {
    if (useLoginOptCellphone && loginTab === 'otp' && otpType === 'cellphone' && !(credentials !== null && credentials !== void 0 && credentials.country_phone_code) && !(credentials !== null && credentials !== void 0 && credentials.cellphone)) {
      setAlertState({
        open: true,
        content: [t('PHONE_NUMBER_IS_NOT_VALID', 'Phone number is not valid')]
      });
      return;
    }
    setSubmitted(true);
  };
  var hanldeChangeProject = function hanldeChangeProject(project) {
    clearTimeout(timer);
    setSubmitted(false);
    var _timer = setTimeout(function () {
      setConfigFile(_objectSpread(_objectSpread({}, configFile), {}, {
        project: project
      }));
    }, 750);
    setTimer(_timer);
  };
  var handleChangeOtpType = function handleChangeOtpType(type) {
    handleChangeTab('otp');
    setOtpType(type);
  };
  var handleSendOtp = function handleSendOtp() {
    if (willVerifyOtpState) {
      setOtpState('');
      resetOtpLeftTime();
      if (loginTab === 'otp') {
        generateOtpCode();
        setWillVerifyOtpState(true);
      }
    }
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    var phoneNumberParser = null;
    var values = {
      country_phone_code: '',
      cellphone: ''
    };
    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }
    if (phoneNumberParser) {
      values = {
        country_phone_code: phoneNumberParser.countryCallingCode,
        cellphone: phoneNumberParser.nationalNumber
      };
    }
    handleChangeCredentials(values);
  };
  (0, _react.useEffect)(function () {
    if (ordering.project === null || !submitted) return;
    if (loginTab === 'otp') {
      generateOtpCode();
      setWillVerifyOtpState(true);
    } else {
      handleButtonLoginClick();
    }
  }, [ordering, submitted]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2, _formState$result3;
      if (((_formState$result2 = formState.result) === null || _formState$result2 === void 0 || (_formState$result2 = _formState$result2.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2[0]) === 'ERROR_AUTH_VERIFICATION_CODE') {
        var _configs$security_rec;
        setRecaptchaVersion({
          version: 'v2',
          siteKey: configs === null || configs === void 0 || (_configs$security_rec = configs.security_recaptcha_site_key) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value
        });
        setAlertState({
          open: true,
          content: [t('TRY_AGAIN', 'Please try again')]
        });
        setSubmitted(false);
        return;
      }
      setAlertState({
        open: true,
        content: ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) || [t('ERROR')]
      });
      setSubmitted(false);
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
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setOtpState('');
  };
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      if (loginTab === 'otp') {
        handleButtonLoginClick();
      }
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$, _checkPhoneCodeState$3;
    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error) {
      var _checkPhoneCodeState$2;
      setAlertState({
        open: true,
        content: (checkPhoneCodeState === null || checkPhoneCodeState === void 0 || (_checkPhoneCodeState$2 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$2 === void 0 ? void 0 : _checkPhoneCodeState$2.result) || [t('ERROR', 'Error')]
      });
    } else if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$3 = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$3 !== void 0 && _checkPhoneCodeState$3.result) {
      setAlertState({
        open: true,
        content: t('CODE_SENT', 'The code has been sent')
      });
      resetOtpLeftTime();
    }
  }, [checkPhoneCodeState]);
  (0, _react.useEffect)(function () {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      });
    }
  }, [otpLeftTime]);
  (0, _react.useEffect)(function () {
    var _configs$security_rec2;
    if (configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 || (_configs$security_rec2 = configs.security_recaptcha_auth) === null || _configs$security_rec2 === void 0 ? void 0 : _configs$security_rec2.value) === '1') {
      var _configs$security_rec3, _configs$security_rec4, _configs$security_rec5, _configs$security_rec7;
      if ((configs === null || configs === void 0 || (_configs$security_rec3 = configs.security_recaptcha_type) === null || _configs$security_rec3 === void 0 ? void 0 : _configs$security_rec3.value) === 'v3' && (configs === null || configs === void 0 || (_configs$security_rec4 = configs.security_recaptcha_score_v3) === null || _configs$security_rec4 === void 0 ? void 0 : _configs$security_rec4.value) > 0 && configs !== null && configs !== void 0 && (_configs$security_rec5 = configs.security_recaptcha_site_key_v3) !== null && _configs$security_rec5 !== void 0 && _configs$security_rec5.value) {
        var _configs$security_rec6;
        setRecaptchaVersion({
          version: 'v3',
          siteKey: configs === null || configs === void 0 || (_configs$security_rec6 = configs.security_recaptcha_site_key_v3) === null || _configs$security_rec6 === void 0 ? void 0 : _configs$security_rec6.value
        });
        return;
      }
      if (configs !== null && configs !== void 0 && (_configs$security_rec7 = configs.security_recaptcha_site_key) !== null && _configs$security_rec7 !== void 0 && _configs$security_rec7.value) {
        var _configs$security_rec8;
        setRecaptchaVersion({
          version: 'v2',
          siteKey: configs === null || configs === void 0 || (_configs$security_rec8 = configs.security_recaptcha_site_key) === null || _configs$security_rec8 === void 0 ? void 0 : _configs$security_rec8.value
        });
      }
    }
  }, [configs]);
  return /*#__PURE__*/_react.default.createElement(_styles2.LoginContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles2.LoginHeroContainer, {
    bgimage: (configs === null || configs === void 0 || (_configs$dashboard_lo = configs.dashboard_login_background) === null || _configs$dashboard_lo === void 0 ? void 0 : _configs$dashboard_lo.value) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.loginHero)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (configs === null || configs === void 0 || (_configs$dashboard_lo2 = configs.dashboard_logo) === null || _configs$dashboard_lo2 === void 0 ? void 0 : _configs$dashboard_lo2.value) || (theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.logotypeInvert),
    alt: "Logo login"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles2.TitleFormSide, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WELCOME', 'Welcome!')), /*#__PURE__*/_react.default.createElement("p", null, t('SUBTITLE_ADMIN_LOGIN', 'Let’s start to admin your business now'))), (ordering === null || ordering === void 0 ? void 0 : ordering.project) && /*#__PURE__*/_react.default.createElement(_styles2.LoginWith, null, /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, useLoginByEmail && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    onClick: function onClick() {
      return handleChangeTab('email');
    },
    active: loginTab === 'email'
  }, t('LOGIN_WITH_EMAIL', 'Login with Email')), useLoginOtpEmail && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    onClick: function onClick() {
      return handleChangeOtpType('email');
    },
    active: isOtpEmail
  }, t('BY_OTP_EMAIL', 'by Otp Email')), useLoginOptCellphone && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    onClick: function onClick() {
      return handleChangeOtpType('cellphone');
    },
    active: isOptCellphone
  }, t('BY_OTP_PHONE', 'by Otp Phone')), useLoginByCellphone && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    onClick: function onClick() {
      return handleChangeTab('cellphone');
    },
    active: loginTab === 'cellphone'
  }, t('LOGIN_WITH_PHONE', 'Login with phone')))), /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    onSubmit: handleSubmit(onSubmit)
  }, !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles2.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "project",
    control: control,
    rules: {
      required: t('VALIDATION_ERROR_REQUIRED', 'Project is required').replace('_attribute_', t('PROJECT', 'Project'))
    },
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        type: "text",
        placeholder: t('PROJECT', 'Project'),
        value: value,
        onChange: function onChange(e) {
          var project = e.target.value.replace(/\s/g, '');
          _onChange(project);
          hanldeChangeProject(project);
        },
        autoComplete: "off",
        autoCapitalize: "off"
      });
    },
    defaultValue: ""
  }), /*#__PURE__*/_react.default.createElement(_MdExitToApp.default, null)), !willVerifyOtpState && (loginTab === 'email' || loginTab === 'otp' && otpType === 'email') && /*#__PURE__*/_react.default.createElement(_styles2.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "email",
    name: "email",
    "aria-label": "email",
    placeholder: t('EMAIL'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Email is required').replace('_attribute_', t('EMAIL', 'Email')),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    autoComplete: "off",
    autoCapitalize: "off"
  }), /*#__PURE__*/_react.default.createElement(_HiOutlineMail.default, null)), useLoginByCellphone && loginTab === 'cellphone' && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles2.InputWithIcon, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "tel",
    name: "cellphone",
    "aria-label": "cellphone",
    placeholder: "Cellphone",
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Cellphone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone'))
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Phone, null)), !willVerifyOtpState && useLoginOptCellphone && loginTab === 'otp' && otpType === 'cellphone' && /*#__PURE__*/_react.default.createElement(_styles2.PhoneNumberWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.InputPhoneNumber, {
    setValue: handleChangePhoneNumber
  })), loginTab !== 'otp' && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPassword, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    "aria-label": "password",
    placeholder: t('PASSWORD'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Password is required').replace('_attribute_', t('PASSWORD', 'Password')),
      minLength: {
        value: 5,
        message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    autoComplete: "off",
    autoCapitalize: "off"
  }), /*#__PURE__*/_react.default.createElement(_RiLockPasswordLine.default, null), /*#__PURE__*/_react.default.createElement(_styles2.TogglePassword, {
    onClick: function onClick() {
      return setPasswordSee(!passwordSee);
    }
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Eye, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.EyeSlash, null))), isReCaptchaEnable && /*#__PURE__*/_react.default.createElement(_styles2.ReCAPTCHAWrapper, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ReCaptcha, {
    handleReCaptcha: handleReCaptcha,
    reCaptchaVersion: reCaptchaVersion
  })), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('LOADING') + '...' : loginWithOtpState || loginTab === 'otp' ? t('GET_VERIFY_CODE', 'Get verify code') : t('LOGIN', 'Login'), /*#__PURE__*/_react.default.createElement(_BsArrowRightShort.default, null)), willVerifyOtpState && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles2.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: otpPlaceholder,
    isInputNum: true,
    shouldAutoFocus: true,
    isDisabled: otpLeftTime === 0
  })), /*#__PURE__*/_react.default.createElement(_styles2.ResendCode, {
    disabled: otpLeftTime > 520,
    onClick: handleSendOtp
  }, t('RESEND_AGAIN', 'Resend again'), "?"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    type: "button",
    color: "primary",
    disabled: formState.loading,
    onClick: function onClick() {
      setLoginWithOtpState(false);
      setWillVerifyOtpState(false);
    }
  }, t('CANCEL', 'Cancel'))), loginTab !== 'otp' && /*#__PURE__*/_react.default.createElement(_styles2.RedirectLink, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')), elementLinkToForgotPassword)), elementLinkToSignup && /*#__PURE__*/_react.default.createElement(_styles2.RedirectLink, {
    register: true,
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('NEW_ON_PLATFORM', 'New on Ordering?')), elementLinkToSignup)), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('LOGIN'),
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
var LoginForm = function LoginForm(props) {
  var _useContext3 = (0, _react.useContext)(_ConfigFileContext.ConfigFileContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    configFile = _useContext4[0],
    setConfigFile = _useContext4[1];
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LoginFormUI,
    allowedLevels: [0, 2, 5, 8],
    configFile: configFile,
    setConfigFile: setConfigFile
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.LoginForm, loginControllerProps);
};
exports.LoginForm = LoginForm;