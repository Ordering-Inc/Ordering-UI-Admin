"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalAddForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _utils = require("../../../utils");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProfessionalAddFormUI = function ProfessionalAddFormUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _formState$changes2, _formState$changes3, _formState$changes4, _validationFields$fie5, _props$afterMidElemen, _props$afterMidCompon, _formState$result9, _formState$result10, _formState$result10$r, _formState$changes$bi, _formState$changes5;

  var formState = props.formState,
      showField = props.showField,
      cleanFormState = props.cleanFormState,
      isRequiredField = props.isRequiredField,
      validationFields = props.validationFields,
      handleChangeInput = props.handleChangeInput,
      handleButtonAddClick = props.handleButtonAddClick,
      isCheckout = props.isCheckout,
      handlechangeImage = props.handlechangeImage,
      handleChangeSwtich = props.handleChangeSwtich,
      onClose = props.onClose,
      isService = props.isService;
  var formMethods = (0, _reactHookForm.useForm)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      isValidPhoneNumber = _useState2[0],
      setIsValidPhoneNumber = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userPhoneNumber = _useState4[0],
      setUserPhoneNumber = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var emailInput = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null);

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };

  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;

  var onSubmit = function onSubmit() {
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!isPhoneNumberValid && userPhoneNumber) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      });
      return;
    }

    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      handleButtonAddClick();
    }
  };

  var handleClickImage = function handleClickImage() {
    inputRef.current.click();
  };

  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;

      var type = files[0].type.split('/')[0];

      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }

      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }

      handlechangeImage(files[0]);
    }
  };

  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };

    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }

    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      };
    }

    handleChangeInput(phoneNumber, true);
  };

  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    var _e$target$value, _e$target$value2, _e$target$value3;

    handleChangeInput({
      target: {
        name: 'email',
        value: (_e$target$value = e.target.value) === null || _e$target$value === void 0 ? void 0 : _e$target$value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', (_e$target$value2 = e.target.value) === null || _e$target$value2 === void 0 ? void 0 : _e$target$value2.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    emailInput.current.value = (_e$target$value3 = e.target.value) === null || _e$target$value3 === void 0 ? void 0 : _e$target$value3.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });

      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }

      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result3, _formState$result4, _formState$result4$re, _formState$changes$em, _formState$changes;

      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.email : (_formState$changes$em = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  return /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout,
    "data-tour": "tour_fill"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_PROFESSIONAL', 'New professional')), isService && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement(_styles2.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo) && !formState.result.error
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: handleFiles,
    childRef: function childRef(e) {
      inputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.photo,
    alt: "user image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))))), !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.checkout
  }).map(function (field) {
    var _formState$result5, _formState$result6, _formState$changes$fi, _formState$result7, _formState$result8, _formState$changes$fi2;

    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
      className: "email-input"
    }, /*#__PURE__*/_react.default.createElement("label", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? formState === null || formState === void 0 ? void 0 : (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result[field.code] : (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    })) : /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_styles.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.result ? formState === null || formState === void 0 ? void 0 : (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result[field.code] : (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    })));
  }), !isCheckout && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PASSWORD', 'Password')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "password",
    name: "password",
    className: "form",
    placeholder: t('FRONT_VISUALS_PASSWORD', 'Password'),
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  })), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement(_Shared.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DATE_OF_BIRTH', 'Date of birth')), /*#__PURE__*/_react.default.createElement(_Shared.RangeCalendar, {
    isLeft: true,
    isSingleDate: true,
    defaultValue: formState !== null && formState !== void 0 && (_formState$result9 = formState.result) !== null && _formState$result9 !== void 0 && _formState$result9.result ? formState === null || formState === void 0 ? void 0 : (_formState$result10 = formState.result) === null || _formState$result10 === void 0 ? void 0 : (_formState$result10$r = _formState$result10.result) === null || _formState$result10$r === void 0 ? void 0 : _formState$result10$r.birthdate : (_formState$changes$bi = formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.birthdate) !== null && _formState$changes$bi !== void 0 ? _formState$changes$bi : '',
    handleChangeDate: function handleChangeDate(date) {
      return handleChangeSwtich('birthdate', date);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    type: "submit",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 || formState.loading
  }, formState.loading ? t('LOADING', 'Loading') : t('ADD', 'Add')))) : /*#__PURE__*/_react.default.createElement(_styles2.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('PROFILE', 'Profile'),
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

var ProfessionalAddForm = function ProfessionalAddForm(props) {
  var UserAddProps = _objectSpread(_objectSpread({}, props), {}, {
    useSessionUser: false,
    useValidationFields: true,
    isProfessional: true,
    UIComponent: ProfessionalAddFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserFormDetails, UserAddProps);
};

exports.ProfessionalAddForm = ProfessionalAddForm;