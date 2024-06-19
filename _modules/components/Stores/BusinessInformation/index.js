"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var BusinessInformationUI = function BusinessInformationUI(props) {
  var _configs$format_numbe, _formState$changes5, _formState$result3, _businessState$busine2, _businessState$busine3, _formState$changes6, _formState$changes7, _formState$changes8, _formState$result4, _businessState$busine4, _businessState$busine5, _formState$changes9, _formState$changes10, _formState$changes$na, _formState$changes11, _businessState$busine6, _formState$changes$ex, _formState$changes12, _businessState$busine7, _formState$changes$de, _formState$changes13, _businessState$busine8, _formState$changes$ph, _formState$changes14, _businessState$busine9, _formState$changes$ce, _formState$changes15, _businessState$busine10, _businessState$busine11, _businessState$busine12, _formState$changes16, _formState$changes17, _businessState$busine13, _formState$changes$ri, _formState$changes18, _businessState$busine14, _businessState$busine15, _formState$changes19, _formState$changes20, _businessState$busine16, _formState$changes$ri2, _formState$changes21, _businessState$busine17, _businessState$busine20, _ref, _formState$changes$di, _formState$changes26, _businessState$busine21, _formState$changes$fa, _formState$changes29, _businessState$busine24, _formState$changes$in, _formState$changes30, _businessState$busine25, _formState$changes$ti, _formState$changes31, _businessState$busine26, _formState$changes$pi, _formState$changes32, _businessState$busine27, _formState$changes$wh, _formState$changes33, _businessState$busine28, _formState$changes$sn, _formState$changes34, _businessState$busine29;
  var formState = props.formState,
    businessState = props.businessState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    handleChangeSwtich = props.handleChangeSwtich,
    handleChangeRibbon = props.handleChangeRibbon,
    handleChangeSelectedOption = props.handleChangeSelectedOption;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
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
  var priceSymbol = configs === null || configs === void 0 || (_configs$format_numbe = configs.format_number_currency) === null || _configs$format_numbe === void 0 || (_configs$format_numbe = _configs$format_numbe.value) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.trim();
  var disableReasonDictionary = (0, _utils.disableReasons)();
  var priceList = [{
    key: '1',
    value: "".concat(priceSymbol)
  }, {
    key: '2',
    value: "".concat(Array(2).fill(priceSymbol).join(''))
  }, {
    key: '3',
    value: "".concat(Array(3).fill(priceSymbol).join(''))
  }, {
    key: '4',
    value: "".concat(Array(4).fill(priceSymbol).join(''))
  }, {
    key: '5',
    value: "".concat(Array(5).fill(priceSymbol).join(''))
  }];
  var reasonOptionList = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('SELECT_OPTION', 'Select option'))),
    color: 'primary',
    disabled: true,
    showDisable: true
  }, {
    value: disableReasonDictionary.SALE_DIVIATION,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.SALE_DIVIATION)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.MOTORCYCLE_FAILURE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.MOTORCYCLE_FAILURE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.NO_DRIVERS,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.NO_DRIVERS)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.EXCESS_ORDERS,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.EXCESS_ORDERS)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.OVEN_FAILURE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.OVEN_FAILURE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.NO_ELECTRIC_POWER,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.NO_ELECTRIC_POWER)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.NO_GAS,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.NO_GAS)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.CONECTION_FAILURE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.CONECTION_FAILURE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.NO_WATER,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.NO_WATER)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.SYSTEM_FAILURE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.SYSTEM_FAILURE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.STREETS_CLOSED,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.STREETS_CLOSED)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.NO_SERVICE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.NO_SERVICE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.UNSAFETY,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.UNSAFETY)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.MAINTENANCE_IN_STORE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.MAINTENANCE_IN_STORE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.RAINING,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.RAINING)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.STORE_EVENT,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.STORE_EVENT)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.PROBLEM_WITH_POWER,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.PROBLEM_WITH_POWER)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.DRIVER_ACCIDENT,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.DRIVER_ACCIDENT)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.MAINTENANCE_SYSTEM_IN_STORE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.MAINTENANCE_SYSTEM_IN_STORE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.PROBLEM_WITH_GAS,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.PROBLEM_WITH_GAS)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.ROLLER_FAILURE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.ROLLER_FAILURE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.WEATHER,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.WEATHER)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.GAS_LEAK,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.GAS_LEAK)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.MANIFESTATION,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.MANIFESTATION)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.LACK_OF_STAFF,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.LACK_OF_STAFF)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.MIXER_FAILURE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.MIXER_FAILURE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.AUTOMATICS,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.AUTOMATICS)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.PRODUCT_SHORTAGE,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.PRODUCT_SHORTAGE)),
    color: 'primary'
  }, {
    value: disableReasonDictionary.TERMINAL_FAILURES,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      padding: "0px"
    }, /*#__PURE__*/_react.default.createElement("span", null, disableReasonDictionary.TERMINAL_FAILURES)),
    color: 'primary'
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
      if (formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.whatsapp_number && (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.whatsapp_number.search(/^https:\/\/wa\.me\/\+?\d+$/)) === -1) {
        setAlertState({
          open: true,
          content: t('WHATS_APP_NUMBER_NOT_VALID', 'Whatsapp number is not valid')
        });
        return;
      }
      if (formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.tiktok_profile && (formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.tiktok_profile.search(/^https:\/\/www\.tiktok\.com\/@.+$/)) === -1) {
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
        content: formState === null || formState === void 0 || (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.header) || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState.result.error ? (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.header,
    alt: "header image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.header) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.header,
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.logo) || ((_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.result) === 'Network Error' || formState.result.error ? (businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.logo,
    alt: "logo image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.logo,
    alt: "logo image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('Name', 'name'),
    defaultValue: (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.name,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('BUSINESS_NAME_REQUIRED', 'Business name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External Id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "external_id",
    placeholder: t('EXTERNAL_ID', 'External Id'),
    defaultValue: (_formState$changes$ex = formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.external_id) !== null && _formState$changes$ex !== void 0 ? _formState$changes$ex : businessState === null || businessState === void 0 || (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.external_id,
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
    defaultValue: (_formState$changes$de = formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : businessState === null || businessState === void 0 || (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.description,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.PhoneWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE_NUMBER', 'Phone number')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "phone",
    placeholder: "(000) 0000 000",
    defaultValue: (_formState$changes$ph = formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.phone) !== null && _formState$changes$ph !== void 0 ? _formState$changes$ph : businessState === null || businessState === void 0 || (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.phone,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('MOBILE_NUMBER', 'Mobile number'), " ", /*#__PURE__*/_react.default.createElement("span", null, t('OPTIONAL', 'Optional'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "cellphone",
    placeholder: "(000) 0000 000",
    defaultValue: (_formState$changes$ce = formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.cellphone) !== null && _formState$changes$ce !== void 0 ? _formState$changes$ce : businessState === null || businessState === void 0 || (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.cellphone,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (businessState === null || businessState === void 0 || (_businessState$busine11 = businessState.business) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.featured) || false,
    onChange: function onChange(val) {
      return handleChangeSwtich('featured', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RibbonSwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (businessState === null || businessState === void 0 || (_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 || (_businessState$busine12 = _businessState$busine12.ribbon) === null || _businessState$busine12 === void 0 ? void 0 : _businessState$busine12.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeEnable(val);
    }
  })), (typeof (formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 || (_formState$changes16 = _formState$changes16.ribbon) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.enabled) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 || (_formState$changes17 = _formState$changes17.ribbon) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.enabled : businessState === null || businessState === void 0 || (_businessState$busine13 = businessState.business) === null || _businessState$busine13 === void 0 || (_businessState$busine13 = _businessState$busine13.ribbon) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    defaultValue: (_formState$changes$ri = formState === null || formState === void 0 || (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 || (_formState$changes18 = _formState$changes18.ribbon) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.text) !== null && _formState$changes$ri !== void 0 ? _formState$changes$ri : businessState === null || businessState === void 0 || (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 || (_businessState$busine14 = _businessState$busine14.ribbon) === null || _businessState$busine14 === void 0 ? void 0 : _businessState$busine14.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    ref: formMethods.register({
      required: businessState !== null && businessState !== void 0 && (_businessState$busine15 = businessState.business) !== null && _businessState$busine15 !== void 0 && _businessState$busine15.ribbon && (typeof (formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 || (_formState$changes19 = _formState$changes19.ribbon) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.enabled) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 || (_formState$changes20 = _formState$changes20.ribbon) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.enabled : businessState === null || businessState === void 0 || (_businessState$busine16 = businessState.business) === null || _businessState$busine16 === void 0 || (_businessState$busine16 = _businessState$busine16.ribbon) === null || _businessState$busine16 === void 0 ? void 0 : _businessState$busine16.enabled) ? t('VALIDATION_ERROR_REQUIRED', 'The Ribbon text field is required').replace('_attribute_', t('Ribbon_Text', 'Ribbon text')) : false
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: (_formState$changes$ri2 = formState === null || formState === void 0 || (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 || (_formState$changes21 = _formState$changes21.ribbon) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.color) !== null && _formState$changes$ri2 !== void 0 ? _formState$changes$ri2 : businessState === null || businessState === void 0 || (_businessState$busine17 = businessState.business) === null || _businessState$busine17 === void 0 || (_businessState$busine17 = _businessState$busine17.ribbon) === null || _businessState$busine17 === void 0 ? void 0 : _businessState$busine17.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShapeContentWrapper, null, _utils.shape && Object.keys(_utils.shape).map(function (key, i) {
    var _formState$changes22, _formState$changes23, _businessState$busine18, _formState$changes24, _formState$changes25, _businessState$busine19;
    return /*#__PURE__*/_react.default.createElement(_styles2.ShapeBoxWrapper, {
      key: i,
      shapeRect: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      round: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape),
      active: formState !== null && formState !== void 0 && (_formState$changes22 = formState.changes) !== null && _formState$changes22 !== void 0 && (_formState$changes22 = _formState$changes22.ribbon) !== null && _formState$changes22 !== void 0 && _formState$changes22.shape ? (formState === null || formState === void 0 || (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 || (_formState$changes23 = _formState$changes23.ribbon) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.shape) === _utils.shape[key] : (businessState === null || businessState === void 0 || (_businessState$busine18 = businessState.business) === null || _businessState$busine18 === void 0 || (_businessState$busine18 = _businessState$busine18.ribbon) === null || _businessState$busine18 === void 0 ? void 0 : _businessState$busine18.shape) === _utils.shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: _utils.shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (formState !== null && formState !== void 0 && (_formState$changes24 = formState.changes) !== null && _formState$changes24 !== void 0 && (_formState$changes24 = _formState$changes24.ribbon) !== null && _formState$changes24 !== void 0 && _formState$changes24.shape ? (formState === null || formState === void 0 || (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 || (_formState$changes25 = _formState$changes25.ribbon) === null || _formState$changes25 === void 0 ? void 0 : _formState$changes25.shape) === _utils.shape[key] : (businessState === null || businessState === void 0 || (_businessState$busine19 = businessState.business) === null || _businessState$busine19 === void 0 || (_businessState$busine19 = _businessState$busine19.ribbon) === null || _businessState$busine19 === void 0 ? void 0 : _businessState$busine19.shape) === _utils.shape[key]) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null));
  }))))), (businessState === null || businessState === void 0 || (_businessState$busine20 = businessState.business) === null || _businessState$busine20 === void 0 ? void 0 : _businessState$busine20.enabled) === false && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DISABLED_REASON', 'Disabled reason')), /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    defaultValue: (_ref = (_formState$changes$di = formState === null || formState === void 0 || (_formState$changes26 = formState.changes) === null || _formState$changes26 === void 0 ? void 0 : _formState$changes26.disabled_reason) !== null && _formState$changes$di !== void 0 ? _formState$changes$di : businessState === null || businessState === void 0 || (_businessState$busine21 = businessState.business) === null || _businessState$busine21 === void 0 ? void 0 : _businessState$busine21.disabled_reason) !== null && _ref !== void 0 ? _ref : 'default',
    options: reasonOptionList,
    optionInnerMaxHeight: "200px",
    onChange: function onChange(value) {
      return handleChangeSelectedOption('disabled_reason', value);
    }
    // isShowSearchBar
    // searchBarPlaceholder={t('SEARCH', 'Search')}
    // searchValue={searchValue}
    // handleChangeSearch={handleSearch}
  })), /*#__PURE__*/_react.default.createElement(_styles2.PriceFilterWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE_FILTER', 'Price filter')), /*#__PURE__*/_react.default.createElement(_styles2.PriceFilterListWrapper, null, priceList.map(function (item, i) {
    var _formState$changes$pr, _formState$changes27, _businessState$busine22, _formState$changes$pr2, _formState$changes28, _businessState$busine23;
    return /*#__PURE__*/_react.default.createElement(_styles2.PriceFilterItem, {
      key: i,
      onClick: function onClick() {
        return handleChangeSwtich('price_level', item.key);
      },
      active: ((_formState$changes$pr = formState === null || formState === void 0 || (_formState$changes27 = formState.changes) === null || _formState$changes27 === void 0 ? void 0 : _formState$changes27.price_level) !== null && _formState$changes$pr !== void 0 ? _formState$changes$pr : businessState === null || businessState === void 0 || (_businessState$busine22 = businessState.business) === null || _businessState$busine22 === void 0 ? void 0 : _businessState$busine22.price_level) === item.key
    }, ((_formState$changes$pr2 = formState === null || formState === void 0 || (_formState$changes28 = formState.changes) === null || _formState$changes28 === void 0 ? void 0 : _formState$changes28.price_level) !== null && _formState$changes$pr2 !== void 0 ? _formState$changes$pr2 : businessState === null || businessState === void 0 || (_businessState$busine23 = businessState.business) === null || _businessState$busine23 === void 0 ? void 0 : _businessState$busine23.price_level) === item.key ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, item.value));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SOCIAL_NETWORKS', 'Social networks')), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Facebook, null)), /*#__PURE__*/_react.default.createElement("span", null, t('FACEBOOK', 'Facebook'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$fa = formState === null || formState === void 0 || (_formState$changes29 = formState.changes) === null || _formState$changes29 === void 0 ? void 0 : _formState$changes29.facebook_profile) !== null && _formState$changes$fa !== void 0 ? _formState$changes$fa : businessState === null || businessState === void 0 || (_businessState$busine24 = businessState.business) === null || _businessState$busine24 === void 0 ? void 0 : _businessState$busine24.facebook_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('facebook_profile', val);
    },
    originalURL: socialOriginalURL.facebook,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "facebook_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Instagram, null)), /*#__PURE__*/_react.default.createElement("span", null, t('INSTAGRAM', 'Instagram'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$in = formState === null || formState === void 0 || (_formState$changes30 = formState.changes) === null || _formState$changes30 === void 0 ? void 0 : _formState$changes30.instagram_profile) !== null && _formState$changes$in !== void 0 ? _formState$changes$in : businessState === null || businessState === void 0 || (_businessState$busine25 = businessState.business) === null || _businessState$busine25 === void 0 ? void 0 : _businessState$busine25.instagram_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('instagram_profile', val);
    },
    originalURL: socialOriginalURL.instagram,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "instagram_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tiktok, null)), /*#__PURE__*/_react.default.createElement("span", null, t('TIK_TOK', 'Tik tok'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$ti = formState === null || formState === void 0 || (_formState$changes31 = formState.changes) === null || _formState$changes31 === void 0 ? void 0 : _formState$changes31.tiktok_profile) !== null && _formState$changes$ti !== void 0 ? _formState$changes$ti : businessState === null || businessState === void 0 || (_businessState$busine26 = businessState.business) === null || _businessState$busine26 === void 0 ? void 0 : _businessState$busine26.tiktok_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('tiktok_profile', val);
    },
    originalURL: socialOriginalURL.tiktok,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "tiktok_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pinterest, null)), /*#__PURE__*/_react.default.createElement("span", null, t('PINTEREST', 'Pinterest'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$pi = formState === null || formState === void 0 || (_formState$changes32 = formState.changes) === null || _formState$changes32 === void 0 ? void 0 : _formState$changes32.pinterest_profile) !== null && _formState$changes$pi !== void 0 ? _formState$changes$pi : businessState === null || businessState === void 0 || (_businessState$busine27 = businessState.business) === null || _businessState$busine27 === void 0 ? void 0 : _businessState$busine27.pinterest_profile,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('pinterest_profile', val);
    },
    originalURL: socialOriginalURL.pinterest,
    placeholder: t('USER_OR_URL', 'User or url'),
    name: "pinterest_profile"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Whatsapp, null)), /*#__PURE__*/_react.default.createElement("span", null, t('WHATSAPP', 'Whatsapp'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$wh = formState === null || formState === void 0 || (_formState$changes33 = formState.changes) === null || _formState$changes33 === void 0 ? void 0 : _formState$changes33.whatsapp_number) !== null && _formState$changes$wh !== void 0 ? _formState$changes$wh : businessState === null || businessState === void 0 || (_businessState$busine28 = businessState.business) === null || _businessState$busine28 === void 0 ? void 0 : _businessState$busine28.whatsapp_number,
    handleChangeValue: function handleChangeValue(val) {
      return handleChangeSwtich('whatsapp_number', val);
    },
    originalURL: socialOriginalURL.whatsapp,
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    name: "whatsapp_number"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SocialItemHeader, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Snapchat, null)), /*#__PURE__*/_react.default.createElement("span", null, t('SNAPCHAT', 'Snapchat'))), /*#__PURE__*/_react.default.createElement(_styles2.SocialItemContent, null, /*#__PURE__*/_react.default.createElement(ConvertInput, {
    value: (_formState$changes$sn = formState === null || formState === void 0 || (_formState$changes34 = formState.changes) === null || _formState$changes34 === void 0 ? void 0 : _formState$changes34.snapchat_profile) !== null && _formState$changes$sn !== void 0 ? _formState$changes$sn : businessState === null || businessState === void 0 || (_businessState$busine29 = businessState.business) === null || _businessState$busine29 === void 0 ? void 0 : _businessState$busine29.snapchat_profile,
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
var BusinessInformation = exports.BusinessInformation = function BusinessInformation(props) {
  var businessInformationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessInformationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessFormDetails, businessInformationProps);
};
var ConvertInput = exports.ConvertInput = function ConvertInput(props) {
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