"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConvertInput = exports.BusinessInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessInformationUI = function BusinessInformationUI(props) {
  var _formState$changes5, _formState$result3, _businessState$busine2, _businessState$busine3, _formState$changes6, _formState$changes7, _formState$changes8, _formState$result4, _businessState$busine4, _businessState$busine5, _formState$changes9, _formState$changes10, _formState$changes$na, _formState$changes11, _businessState$busine6, _formState$changes$ex, _formState$changes12, _businessState$busine7, _formState$changes$de, _formState$changes13, _businessState$busine8, _formState$changes$ph, _formState$changes14, _businessState$busine9, _formState$changes$ce, _formState$changes15, _businessState$busine10, _businessState$busine11, _businessState$busine12, _businessState$busine13, _formState$changes16, _formState$changes16$, _formState$changes17, _formState$changes17$, _businessState$busine14, _businessState$busine15, _formState$changes$ri, _formState$changes18, _formState$changes18$, _businessState$busine16, _businessState$busine17, _businessState$busine18, _formState$changes19, _formState$changes19$, _formState$changes20, _formState$changes20$, _businessState$busine19, _businessState$busine20, _formState$changes$ri2, _formState$changes21, _formState$changes21$, _businessState$busine21, _businessState$busine22, _formState$changes$fa, _formState$changes28, _businessState$busine29, _formState$changes$in, _formState$changes29, _businessState$busine30, _formState$changes$ti, _formState$changes30, _businessState$busine31, _formState$changes$pi, _formState$changes31, _businessState$busine32, _formState$changes$wh, _formState$changes32, _businessState$busine33, _formState$changes$sn, _formState$changes33, _businessState$busine34;
  var formState = props.formState,
    businessState = props.businessState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    handleChangeSwtich = props.handleChangeSwtich,
    handleChangeRibbon = props.handleChangeRibbon;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var headerImageInputRef = (0, _react.useRef)(null);
  var logoImageInputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    cropState = _useState4[0],
    setCropState = _useState4[1];
  var priceList = [{
    key: '1',
    value: '$'
  }, {
    key: '2',
    value: '$$'
  }, {
    key: '3',
    value: '$$$'
  }, {
    key: '4',
    value: '$$$$'
  }, {
    key: '5',
    value: '$$$$$'
  }];
  var socialOriginalURL = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
    snap_chat: 'https://www.snapchat.com/add/',
    pinterest: 'https://www.pinterest.com/',
    whatsapp: 'https://wa.me/'
  };
  var handleClickImage = function handleClickImage(type) {
    if (type === 'header') {
      headerImageInputRef.current.click();
    }
    if (type === 'logo') {
      logoImageInputRef.current.click();
    }
  };
  var handleFiles = function handleFiles(files, name) {
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
          name: name,
          data: reader.result,
          open: true
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
      handlechangeImage(files[0], name);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0) {
      var _formState$changes, _formState$changes2, _formState$changes3, _formState$changes4;
      if (formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.whatsapp_number && (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.whatsapp_number.search(/^https:\/\/wa\.me\/\+?\d+$/)) === -1) {
        setAlertState({
          open: true,
          content: t('WHATS_APP_NUMBER_NOT_VALID', 'Whatsapp number is not valid')
        });
        return;
      }
      if (formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.tiktok_profile && (formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.tiktok_profile.search(/^https:\/\/www\.tiktok\.com\/@.+$/)) === -1) {
        setAlertState({
          open: true,
          content: t('TIKTOK_USERNAME_NOT_VALID', 'TikTok user name is not valid')
        });
        return;
      }
      handleButtonUpdateClick();
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
  var handleChangeEnable = function handleChangeEnable(value) {
    var _businessState$busine;
    if (!(businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.ribbon) && !value) {
      var ribbonChanges = _objectSpread({}, _utils.ribbonValues);
      handleChangeSwtich('ribbon', ribbonChanges);
      return;
    }
    handleChangeRibbon({
      enabled: value
    });
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderImage, {
    onClick: function onClick() {
      return handleClickImage('header');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'header');
    },
    childRef: function childRef(e) {
      headerImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'header');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.header) || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState.result.error ? (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.header,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.header,
    alt: "header image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))))))), /*#__PURE__*/_react.default.createElement(_styles2.LogoImage, {
    onClick: function onClick() {
      return handleClickImage('logo');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'logo');
    },
    childRef: function childRef(e) {
      logoImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'logo');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.logo) || ((_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result) === 'Network Error' || formState.result.error ? (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.logo,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.logo,
    alt: "logo image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('Name', 'name'),
    defaultValue: (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.name,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('BUSINESS_NAME_REQUIRED', 'Business name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External Id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_id",
    placeholder: t('EXTERNAL_ID', 'External Id'),
    defaultValue: (_formState$changes$ex = formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.external_id) !== null && _formState$changes$ex !== void 0 ? _formState$changes$ex : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.external_id,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHORT_DESCRIPTION', 'Short description')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "description",
    placeholder: t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description'),
    defaultValue: (_formState$changes$de = formState === null || formState === void 0 ? void 0 : (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.description,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.PhoneWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE_NUMBER', 'Phone number')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "phone",
    placeholder: "(000) 0000 000",
    defaultValue: (_formState$changes$ph = formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.phone) !== null && _formState$changes$ph !== void 0 ? _formState$changes$ph : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.phone,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MOBILE_NUMBER', 'Mobile number'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('OPTIONAL', 'Optional'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "cellphone",
    placeholder: "(000) 0000 000",
    defaultValue: (_formState$changes$ce = formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.cellphone) !== null && _formState$changes$ce !== void 0 ? _formState$changes$ce : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.cellphone,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine11 = businessState.business) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.featured) || false,
    onChange: function onChange(val) {
      return handleChangeSwtich('featured', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RibbonSwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : (_businessState$busine13 = _businessState$busine12.ribbon) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeEnable(val);
    }
  })), (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : (_formState$changes16$ = _formState$changes16.ribbon) === null || _formState$changes16$ === void 0 ? void 0 : _formState$changes16$.enabled) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : (_formState$changes17$ = _formState$changes17.ribbon) === null || _formState$changes17$ === void 0 ? void 0 : _formState$changes17$.enabled : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 ? void 0 : (_businessState$busine15 = _businessState$busine14.ribbon) === null || _businessState$busine15 === void 0 ? void 0 : _businessState$busine15.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    defaultValue: (_formState$changes$ri = formState === null || formState === void 0 ? void 0 : (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : (_formState$changes18$ = _formState$changes18.ribbon) === null || _formState$changes18$ === void 0 ? void 0 : _formState$changes18$.text) !== null && _formState$changes$ri !== void 0 ? _formState$changes$ri : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine16 = businessState.business) === null || _businessState$busine16 === void 0 ? void 0 : (_businessState$busine17 = _businessState$busine16.ribbon) === null || _businessState$busine17 === void 0 ? void 0 : _businessState$busine17.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    ref: formMethods.register({
      required: businessState !== null && businessState !== void 0 && (_businessState$busine18 = businessState.business) !== null && _businessState$busine18 !== void 0 && _businessState$busine18.ribbon && (typeof (formState === null || formState === void 0 ? void 0 : (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : (_formState$changes19$ = _formState$changes19.ribbon) === null || _formState$changes19$ === void 0 ? void 0 : _formState$changes19$.enabled) !== 'undefined' ? formState === null || formState === void 0 ? void 0 : (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 ? void 0 : (_formState$changes20$ = _formState$changes20.ribbon) === null || _formState$changes20$ === void 0 ? void 0 : _formState$changes20$.enabled : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine19 = businessState.business) === null || _businessState$busine19 === void 0 ? void 0 : (_businessState$busine20 = _businessState$busine19.ribbon) === null || _businessState$busine20 === void 0 ? void 0 : _businessState$busine20.enabled) ? t('VALIDATION_ERROR_REQUIRED', 'The Ribbon text field is required').replace('_attribute_', t('Ribbon_Text', 'Ribbon text')) : false
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: (_formState$changes$ri2 = formState === null || formState === void 0 ? void 0 : (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : (_formState$changes21$ = _formState$changes21.ribbon) === null || _formState$changes21$ === void 0 ? void 0 : _formState$changes21$.color) !== null && _formState$changes$ri2 !== void 0 ? _formState$changes$ri2 : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine21 = businessState.business) === null || _businessState$busine21 === void 0 ? void 0 : (_businessState$busine22 = _businessState$busine21.ribbon) === null || _businessState$busine22 === void 0 ? void 0 : _businessState$busine22.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShapeContentWrapper, null, _utils.shape && Object.keys(_utils.shape).map(function (key, i) {
    var _formState$changes22, _formState$changes22$, _formState$changes23, _formState$changes23$, _businessState$busine23, _businessState$busine24, _formState$changes24, _formState$changes24$, _formState$changes25, _formState$changes25$, _businessState$busine25, _businessState$busine26;
    return /*#__PURE__*/_react.default.createElement(_styles2.ShapeBoxWrapper, {
      key: i,
      shapeRect: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      round: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape),
      active: formState !== null && formState !== void 0 && (_formState$changes22 = formState.changes) !== null && _formState$changes22 !== void 0 && (_formState$changes22$ = _formState$changes22.ribbon) !== null && _formState$changes22$ !== void 0 && _formState$changes22$.shape ? (formState === null || formState === void 0 ? void 0 : (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : (_formState$changes23$ = _formState$changes23.ribbon) === null || _formState$changes23$ === void 0 ? void 0 : _formState$changes23$.shape) === _utils.shape[key] : (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine23 = businessState.business) === null || _businessState$busine23 === void 0 ? void 0 : (_businessState$busine24 = _businessState$busine23.ribbon) === null || _businessState$busine24 === void 0 ? void 0 : _businessState$busine24.shape) === _utils.shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: _utils.shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (formState !== null && formState !== void 0 && (_formState$changes24 = formState.changes) !== null && _formState$changes24 !== void 0 && (_formState$changes24$ = _formState$changes24.ribbon) !== null && _formState$changes24$ !== void 0 && _formState$changes24$.shape ? (formState === null || formState === void 0 ? void 0 : (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 ? void 0 : (_formState$changes25$ = _formState$changes25.ribbon) === null || _formState$changes25$ === void 0 ? void 0 : _formState$changes25$.shape) === _utils.shape[key] : (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine25 = businessState.business) === null || _businessState$busine25 === void 0 ? void 0 : (_businessState$busine26 = _businessState$busine25.ribbon) === null || _businessState$busine26 === void 0 ? void 0 : _businessState$busine26.shape) === _utils.shape[key]) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null));
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.PriceFilterWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE_FILTER', 'Price filter')), /*#__PURE__*/_react.default.createElement(_styles2.PriceFilterListWrapper, null, priceList.map(function (item, i) {
    var _formState$changes$pr, _formState$changes26, _businessState$busine27, _formState$changes$pr2, _formState$changes27, _businessState$busine28;
    return /*#__PURE__*/_react.default.createElement(_styles2.PriceFilterItem, {
      key: i,
      onClick: function onClick() {
        return handleChangeSwtich('price_level', item.key);
      },
      active: ((_formState$changes$pr = formState === null || formState === void 0 ? void 0 : (_formState$changes26 = formState.changes) === null || _formState$changes26 === void 0 ? void 0 : _formState$changes26.price_level) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine27 = businessState.business) === null || _businessState$busine27 === void 0 ? void 0 : _businessState$busine27.price_level) === item.key
    }, ((_formState$changes$pr2 = formState === null || formState === void 0 ? void 0 : (_formState$changes27 = formState.changes) === null || _formState$changes27 === void 0 ? void 0 : _formState$changes27.price_level) !== null && _formState$changes$pr2 !== void 0 ? _formState$changes$pr2 : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine28 = businessState.business) === null || _businessState$busine28 === void 0 ? void 0 : _businessState$busine28.price_level) === item.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, item.value));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SOCIAL_NETWORKS', 'Social networks')), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Facebook, null)), /*#__PURE__*/_react.default.createElement("span", null, t('FACEBOOK', 'Facebook'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$fa = formState === null || formState === void 0 ? void 0 : (_formState$changes28 = formState.changes) === null || _formState$changes28 === void 0 ? void 0 : _formState$changes28.facebook_profile) !== null && _formState$changes$fa !== void 0 ? _formState$changes$fa : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine29 = businessState.business) === null || _businessState$busine29 === void 0 ? void 0 : _businessState$busine29.facebook_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('facebook_profile', val);
    },
    originalURL: socialOriginalURL.facebook,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "facebook_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Instagram, null)), /*#__PURE__*/_react.default.createElement("span", null, t('INSTAGRAM', 'Instagram'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$in = formState === null || formState === void 0 ? void 0 : (_formState$changes29 = formState.changes) === null || _formState$changes29 === void 0 ? void 0 : _formState$changes29.instagram_profile) !== null && _formState$changes$in !== void 0 ? _formState$changes$in : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine30 = businessState.business) === null || _businessState$busine30 === void 0 ? void 0 : _businessState$busine30.instagram_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('instagram_profile', val);
    },
    originalURL: socialOriginalURL.instagram,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "instagram_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tiktok, null)), /*#__PURE__*/_react.default.createElement("span", null, t('TIK_TOK', 'Tik tok'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$ti = formState === null || formState === void 0 ? void 0 : (_formState$changes30 = formState.changes) === null || _formState$changes30 === void 0 ? void 0 : _formState$changes30.tiktok_profile) !== null && _formState$changes$ti !== void 0 ? _formState$changes$ti : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine31 = businessState.business) === null || _businessState$busine31 === void 0 ? void 0 : _businessState$busine31.tiktok_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('tiktok_profile', val);
    },
    originalURL: socialOriginalURL.tiktok,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "tiktok_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pinterest, null)), /*#__PURE__*/_react.default.createElement("span", null, t('PINTEREST', 'Pinterest'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$pi = formState === null || formState === void 0 ? void 0 : (_formState$changes31 = formState.changes) === null || _formState$changes31 === void 0 ? void 0 : _formState$changes31.pinterest_profile) !== null && _formState$changes$pi !== void 0 ? _formState$changes$pi : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine32 = businessState.business) === null || _businessState$busine32 === void 0 ? void 0 : _businessState$busine32.pinterest_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('pinterest_profile', val);
    },
    originalURL: socialOriginalURL.pinterest,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "pinterest_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Whatsapp, null)), /*#__PURE__*/_react.default.createElement("span", null, t('WHATSAPP', 'Whatsapp'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$wh = formState === null || formState === void 0 ? void 0 : (_formState$changes32 = formState.changes) === null || _formState$changes32 === void 0 ? void 0 : _formState$changes32.whatsapp_number) !== null && _formState$changes$wh !== void 0 ? _formState$changes$wh : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine33 = businessState.business) === null || _businessState$busine33 === void 0 ? void 0 : _businessState$busine33.whatsapp_number,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('whatsapp_number', val);
    },
    originalURL: socialOriginalURL.whatsapp,
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    name: "whatsapp_number"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Snapchat, null)), /*#__PURE__*/_react.default.createElement("span", null, t('SNAPCHAT', 'Snapchat'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$sn = formState === null || formState === void 0 ? void 0 : (_formState$changes33 = formState.changes) === null || _formState$changes33 === void 0 ? void 0 : _formState$changes33.snapchat_profile) !== null && _formState$changes$sn !== void 0 ? _formState$changes$sn : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine34 = businessState.business) === null || _businessState$busine34 === void 0 ? void 0 : _businessState$busine34.snapchat_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('snapchat_profile', val);
    },
    originalURL: socialOriginalURL.snap_chat,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "snapchat_profile"
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "8px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS', 'Business'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    height: "80vh",
    padding: "30px",
    title: t('IMAGE_CROP', 'Image crop'),
    open: cropState === null || cropState === void 0 ? void 0 : cropState.open,
    onClose: function onClose() {
      return setCropState(_objectSpread(_objectSpread({}, cropState), {}, {
        open: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};
var BusinessInformation = function BusinessInformation(props) {
  var businessInformationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessInformationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessFormDetails, businessInformationProps);
};
exports.BusinessInformation = BusinessInformation;
var ConvertInput = function ConvertInput(props) {
  var value = props.value,
    handleChangeValue = props.handleChangeValue,
    originalURL = props.originalURL,
    placeholder = props.placeholder,
    name = props.name;
  var inputRef = (0, _react.useRef)();
  var timeout1 = null;
  var handleChangeConvert = function handleChangeConvert(e) {
    clearTimeout(timeout1);
    var inputValue = convertValue(e.target.value);
    var update = inputValue ? originalURL + inputValue : '';
    timeout1 = setTimeout(function () {
      handleChangeValue(update);
      inputRef.current.value = inputValue;
    }, 750);
  };
  var convertValue = function convertValue(value) {
    if (!value) return '';
    var splitValue = value.split('/');
    var updatedValue = splitValue[splitValue.length - 1] === '' ? splitValue[splitValue.length - 2] : splitValue[splitValue.length - 1];
    return updatedValue;
  };
  var checkKeyDown = function checkKeyDown(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 8 || keyCode === 46) {
      setTimeout(function () {
        if (inputRef.current.value === '') handleChangeValue('');
      }, 1);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: name,
    ref: inputRef,
    placeholder: placeholder,
    defaultValue: convertValue(value),
    onKeyDown: checkKeyDown,
    onChange: handleChangeConvert,
    autoComplete: "off"
  });
};
exports.ConvertInput = ConvertInput;