"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ServiceDetail = function ServiceDetail(props) {
  var _formState$changes, _formState$result3, _formState$changes2, _formState$changes3, _formState$changes$ty, _formState$changes4, _formState$changes$du, _formState$changes5;
  var product = props.product,
    formState = props.formState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleUpdateClick = props.handleUpdateClick,
    onCancel = props.onCancel,
    isExtendExtraOpen = props.isExtendExtraOpen;
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var productImageInputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    hours = _useState2[0],
    setHours = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    minutes = _useState4[0],
    setMinutes = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    cropState = _useState8[0],
    setCropState = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    curPreorderTime = _useState10[0],
    setCurPreorderTime = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCustom = _useState12[0],
    setIsCustom = _useState12[1];
  var _useState13 = (0, _react.useState)({
      isAutoGenerate: false,
      autoCodeText: product === null || product === void 0 ? void 0 : product.slug
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    autoGenerateCode = _useState14[0],
    setAutoGenerate = _useState14[1];
  var durationList = [{
    value: 15,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "15 ", /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'minutes')))
  }, {
    value: 30,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "30 ", /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'minutes')))
  }, {
    value: 45,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "45 ", /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'minutes')))
  }, {
    value: 60,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "1 ", /*#__PURE__*/_react.default.createElement("span", null, ('HOUR', 'hour')))
  }, {
    value: 'custom',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("span", null, ('CUSTOME', 'custom')))
  }];
  var setTimeList = function setTimeList() {
    var _hours = [];
    var _minutes = [];
    for (var i = 0; i < 24; i++) {
      var text = (i < 10 ? '0' : ' ') + i;
      _hours.push({
        text: text,
        hour: i
      });
    }
    for (var _i = 0; _i < 60; _i++) {
      var _text = (_i < 10 ? '0' : '') + _i;
      _minutes.push({
        text: _text,
        minute: _i
      });
    }
    setHours(_hours);
    setMinutes(_minutes);
  };
  var handleClickImage = function handleClickImage() {
    productImageInputRef.current.click();
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
          name: 'images',
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
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var stringToSlug = function stringToSlug(str) {
    var _str;
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = (_str = str) === null || _str === void 0 ? void 0 : _str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '_') // collapse whitespace and replace by _
    .replace(/-+/g, '_') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text

    return str;
  };
  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0) {
      handleUpdateClick();
    }
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeFormState(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var handleChangePreorderTime = function handleChangePreorderTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurPreorderTime(_objectSpread(_objectSpread({}, curPreorderTime), {}, _defineProperty({}, type, value)));
    var preorderTime = 0;
    if (type === 'hour') preorderTime = parseInt(value) * 60 + parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute);else preorderTime = parseInt(curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour) * 60 + parseInt(value);
    handleChangeFormState({
      duration: preorderTime
    });
  };
  var handleChangeSelect = function handleChangeSelect(value) {
    if (value === 'custom') {
      setIsCustom(true);
      handleChangeFormState({
        duration: null
      });
      return;
    }
    setCurPreorderTime({
      hour: '0',
      minute: '0'
    });
    setIsCustom(false);
    handleChangeFormState({
      duration: value
    });
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        if (error.type === 'min') return t('REGULAR_PRICE_MUST_BIGGER_PRICE', 'This regular price must be bigger than price');else return error.message;
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
  (0, _react.useEffect)(function () {
    if (autoGenerateCode.isAutoGenerate) {
      var generateCode = {
        target: {
          name: 'slug',
          value: formState.changes.name ? stringToSlug(formState.changes.name) : stringToSlug(product.name)
        }
      };
      setAutoGenerate(_objectSpread(_objectSpread({}, autoGenerateCode), {}, {
        autoCodeText: generateCode.target.value
      }));
      handleChangeInput(generateCode);
      setAutoGenerate(_objectSpread(_objectSpread({}, autoGenerateCode), {}, {
        isAutoGenerate: false
      }));
    }
  }, [autoGenerateCode]);
  (0, _react.useEffect)(function () {
    setTimeList();
    setCurPreorderTime({
      hour: product !== null && product !== void 0 && product.duration ? parseInt((product === null || product === void 0 ? void 0 : product.duration) / 60) : '0',
      minute: product !== null && product !== void 0 && product.duration ? parseInt(product === null || product === void 0 ? void 0 : product.duration) % 60 : '0'
    });
    if (!(product !== null && product !== void 0 && product.duration)) return;
    if (parseInt(product === null || product === void 0 ? void 0 : product.duration) === 15 || parseInt(product === null || product === void 0 ? void 0 : product.duration) === 30 || parseInt(product === null || product === void 0 ? void 0 : product.duration) === 45 || parseInt(product === null || product === void 0 ? void 0 : product.duration) === 60) {
      setIsCustom(false);
    } else {
      setIsCustom(true);
    }
  }, [product]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    maxLimit: isExtendExtraOpen
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('SERVICE_DETAILS', 'Service details')), /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductImage, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      productImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.images) || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState.result.error ? (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_200,c_limit'),
    alt: "product image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.images,
    alt: "product image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('Name_V2', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('Name', 'name'),
    defaultValue: product === null || product === void 0 ? void 0 : product.name,
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('NAME_REQUIRED', 'The name is required')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), ((_formState$changes$ty = formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.type) !== null && _formState$changes$ty !== void 0 ? _formState$changes$ty : product === null || product === void 0 ? void 0 : product.type) === 'service' && /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DURATION', 'Duration')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: durationList,
    className: "select",
    defaultValue: isCustom ? 'custom' : (_formState$changes$du = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.duration) !== null && _formState$changes$du !== void 0 ? _formState$changes$du : product === null || product === void 0 ? void 0 : product.duration,
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeSelect(value);
    }
  })), isCustom && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CUSTOM_DURATION', 'Custom duration')), /*#__PURE__*/_react.default.createElement(_styles2.TimeContent, null, /*#__PURE__*/_react.default.createElement(_styles2.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.hour,
    name: "hour",
    onChange: handleChangePreorderTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement("select", {
    value: curPreorderTime === null || curPreorderTime === void 0 ? void 0 : curPreorderTime.minute,
    name: "minute",
    onChange: handleChangePreorderTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", {
    className: "space-between"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('PRICE', 'Price'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "price",
    placeholder: parsePrice(0),
    defaultValue: product === null || product === void 0 ? void 0 : product.price,
    onChange: function onChange(e) {
      return handleChangeFormState({
        price: Number(e.target.value)
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    name: "description",
    placeholder: t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description'),
    defaultValue: product === null || product === void 0 ? void 0 : product.description,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOptionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.featured) || false,
    onChange: function onChange(val) {
      return handleChangeFormState({
        featured: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PropertyOption, null, /*#__PURE__*/_react.default.createElement("label", null, t('UPSELLING', 'Upselling')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.upselling) || false,
    onChange: function onChange(val) {
      return handleChangeFormState({
        upselling: val
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, onCancel && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    borderRadius: "7.6px",
    type: "button",
    onClick: function onClick() {
      return onCancel(false);
    },
    disabled: formState.loading
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "7.6px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save'))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
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
exports.ServiceDetail = ServiceDetail;