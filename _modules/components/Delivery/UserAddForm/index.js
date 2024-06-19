"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserAddForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _constants = require("../../../config/constants");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserAddFormUI = function UserAddFormUI(props) {
  var _validationFields$fie, _validationFields$fie2, _formState$changes2, _formState$changes3, _formState$changes4, _validationFields$fie3, _formState$result10, _formState$result11, _formState$changes$ex, _formState$changes5, _formState$changes6, _props$afterMidElemen, _props$afterMidCompon, _session$user;
  var formState = props.formState,
    showField = props.showField,
    cleanFormState = props.cleanFormState,
    isRequiredField = props.isRequiredField,
    validationFields = props.validationFields,
    handleChangeInput = props.handleChangeInput,
    handleButtonAddClick = props.handleButtonAddClick,
    isCheckout = props.isCheckout,
    handlechangeImage = props.handlechangeImage,
    isDriversPage = props.isDriversPage,
    isDriversManagersPage = props.isDriversManagersPage,
    handleChangeSwtich = props.handleChangeSwtich,
    isTourOpen = props.isTourOpen,
    driversGroupsState = props.driversGroupsState,
    selectedDriverGroupIds = props.selectedDriverGroupIds,
    handleDriverGroupClick = props.handleDriverGroupClick,
    setCellphoneStartZero = props.setCellphoneStartZero;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
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
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isSuccessSubmitted = _useState8[0],
    setIsSuccessSubmitted = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    timezonesOptions = _useState10[0],
    setTimezonesOptions = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    timezoneSearchValue = _useState12[0],
    setTimezoneSearchValue = _useState12[1];
  var _useState13 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    cropState = _useState14[0],
    setCropState = _useState14[1];
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
  (0, _react.useEffect)(function () {
    var _timezonesOptions = _constants.timezones.filter(function (timezone) {
      return timezone.toLocaleLowerCase().includes(timezoneSearchValue.toLocaleLowerCase());
    }).map(function (timezone) {
      return {
        value: timezone,
        content: timezone
      };
    });
    setTimezonesOptions(_timezonesOptions);
  }, [timezoneSearchValue]);
  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.cellphone) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;
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
      if (isTourOpen) {
        setIsSuccessSubmitted(true);
      }
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
      var reader = new window.FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function () {
        setCropState({
          name: 'photo',
          data: reader.result,
          open: true
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
      handlechangeImage(files[0]);
    }
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeSwtich(cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid, rawNumber) {
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
    setCellphoneStartZero && setCellphoneStartZero(rawNumber !== null && rawNumber !== void 0 && rawNumber.number && rawNumber !== null && rawNumber !== void 0 && rawNumber.countryCallingCode ? rawNumber === null || rawNumber === void 0 ? void 0 : rawNumber.number : null);
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
      setIsSuccessSubmitted(false);
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (isDriversPage) {
      cleanFormState && cleanFormState({
        changes: {
          level: 4
        }
      });
    } else if (isDriversManagersPage) {
      cleanFormState && cleanFormState({
        changes: {
          level: 5
        }
      });
    } else {
      cleanFormState && cleanFormState({
        changes: {
          level: 3
        }
      });
    }
  }, [isDriversPage, isDriversManagersPage]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result3, _formState$result4, _formState$changes$em, _formState$changes;
      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 || (_formState$result4 = formState.result) === null || _formState$result4 === void 0 || (_formState$result4 = _formState$result4.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.email : (_formState$changes$em = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    formMethods.register('email', {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    var _formState$result5;
    if (!isTourOpen || !isSuccessSubmitted || formState !== null && formState !== void 0 && formState.loading || formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.error) return;
    if (isDriversPage) {
      (0, _utils.setStorageItem)('isFromDeliveryDrivers', true);
      events.emit('go_to_page', {
        page: 'drivers_managers'
      });
    }
    if (isDriversManagersPage) {
      (0, _utils.setStorageItem)('isFromDeliveryDriversGroup', true);
      events.emit('go_to_page', {
        page: 'drivers_groups'
      });
    }
  }, [isTourOpen, isSuccessSubmitted, formState === null || formState === void 0 ? void 0 : formState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout,
    "data-tour": width > 768 ? 'tour_fill' : ''
  }, /*#__PURE__*/_react.default.createElement("h1", null, isDriversPage ? t('NEW_DRIVER', 'New driver') : isDriversManagersPage ? t('NEW_DRIVER_MANAGER', 'New driver manager') : t('USERS_REGISTER', 'New user')), /*#__PURE__*/_react.default.createElement(_styles2.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo) && !formState.result.error
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : (formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.photo,
    alt: "user image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))))), /*#__PURE__*/_react.default.createElement(_styles2.MainInformationContainer, {
    "data-tour": width <= 768 ? 'tour_fill' : ''
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 || (_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.checkout
  }).map(function (field) {
    var _formState$result6, _formState$result7, _formState$changes$fi, _formState$result8, _formState$result9, _formState$changes$fi2;
    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_styles.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result6 = formState.result) !== null && _formState$result6 !== void 0 && _formState$result6.result ? formState === null || formState === void 0 || (_formState$result7 = formState.result) === null || _formState$result7 === void 0 ? void 0 : _formState$result7.result[field.code] : (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    }) : /*#__PURE__*/_react.default.createElement(_styles.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result8 = formState.result) !== null && _formState$result8 !== void 0 && _formState$result8.result ? formState === null || formState === void 0 || (_formState$result9 = formState.result) === null || _formState$result9 === void 0 ? void 0 : _formState$result9.result[field.code] : (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    }));
  }), isDriversPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_id",
    className: "form",
    placeholder: t('EXTERNAL_ID', 'External Id'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$result10 = formState.result) !== null && _formState$result10 !== void 0 && _formState$result10.result ? formState === null || formState === void 0 || (_formState$result11 = formState.result) === null || _formState$result11 === void 0 || (_formState$result11 = _formState$result11.result) === null || _formState$result11 === void 0 ? void 0 : _formState$result11.external_id : (_formState$changes$ex = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.external_id) !== null && _formState$changes$ex !== void 0 ? _formState$changes$ex : '',
    onChange: handleChangeInput,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_TIMEZONE', 'Select a timezone'),
    defaultValue: formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.timezone,
    options: timezonesOptions,
    onChange: function onChange(val) {
      return handleChangeSwtich('timezone', val);
    },
    optionInnerMaxHeight: "300px",
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: timezoneSearchValue,
    handleChangeSearch: setTimezoneSearchValue
  }))), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_Shared.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }), !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.Input, {
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
  }), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), isDriversPage && (session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 5 && /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupListContainer, null, driversGroupsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }));
  }) : driversGroupsState.groups.map(function (group) {
    return /*#__PURE__*/_react.default.createElement(_styles2.DriverGroupItem, {
      key: group.id,
      onClick: function onClick() {
        return handleDriverGroupClick(group.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      active: selectedDriverGroupIds.includes(group.id)
    }, selectedDriverGroupIds.includes(group.id) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), /*#__PURE__*/_react.default.createElement("span", null, group === null || group === void 0 ? void 0 : group.name));
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    type: "submit",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 || formState.loading
  }, formState.loading ? t('LOADING', 'Loading') : t('ADD', 'Add')))) : /*#__PURE__*/_react.default.createElement(_styles2.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  })))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('IMAGE_CROP', 'Image crop'),
    open: cropState === null || cropState === void 0 ? void 0 : cropState.open,
    onRemove: function onRemove() {
      return setCropState(_objectSpread(_objectSpread({}, cropState), {}, {
        open: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};
var UserAddForm = exports.UserAddForm = function UserAddForm(props) {
  var UserAddProps = _objectSpread(_objectSpread({}, props), {}, {
    useSessionUser: false,
    useValidationFields: true,
    UIComponent: UserAddFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserFormDetails, UserAddProps);
};