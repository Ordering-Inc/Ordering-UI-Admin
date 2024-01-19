"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDetatilsInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var ProductDetatilsInformation = exports.ProductDetatilsInformation = function ProductDetatilsInformation(props) {
  var _formState$changes3, _formState$changes5, _formState$changes6, _formState$result3, _formState$changes7, _formState$changes8, _formState$changes9, _formState$changes10, _formState$changes11, _formState$changes12, _formState$changes$in, _formState$changes13, _formState$changes14, _formState$changes15, _product$ribbon, _formState$changes16, _formState$changes17, _product$ribbon2, _formState$changes$ri, _formState$changes18, _product$ribbon3, _formState$changes19, _formState$changes20, _product$ribbon4, _formState$changes$ri2, _formState$changes21, _product$ribbon5;
  var product = props.product,
    formState = props.formState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleChangeFormState = props.handleChangeFormState,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    onCancel = props.onCancel,
    handleChangeRibbon = props.handleChangeRibbon;
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
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    minimumRegualrPrice = _useState4[0],
    setMinimumRegualrPrice = _useState4[1];
  var _useState5 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    cropState = _useState6[0],
    setCropState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      isAutoGenerate: false,
      autoCodeText: product === null || product === void 0 ? void 0 : product.slug
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    autoGenerateCode = _useState8[0],
    setAutoGenerate = _useState8[1];
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
      handleButtonUpdateClick();
    }
  };
  var handleChangeRegularPrice = function handleChangeRegularPrice(e) {
    if (e.target.value === '') {
      handleChangeInput({
        target: {
          name: 'offer_price',
          value: null
        }
      });
    } else {
      handleChangeInput(e);
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
  var handleChangeEnable = function handleChangeEnable(value) {
    if (!(product !== null && product !== void 0 && product.ribbon) && !value) {
      var ribbonChanges = _objectSpread({}, _utils.ribbonValues);
      handleChangeFormState({
        ribbon: ribbonChanges
      });
      return;
    }
    handleChangeRibbon({
      enabled: value
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
    var _formState$changes;
    if (typeof (formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.price) !== 'undefined') {
      var _formState$changes2;
      setMinimumRegualrPrice(parseFloat(formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.price) + 0.01);
      return;
    }
    if (product !== null && product !== void 0 && product.price) {
      setMinimumRegualrPrice(parseFloat(product === null || product === void 0 ? void 0 : product.price) + 0.01);
    }
  }, [product === null || product === void 0 ? void 0 : product.price, formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.price]);
  (0, _react.useEffect)(function () {
    var _formState$changes4;
    if (typeof (formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name) === 'undefined') return;
    var generateCode = {
      target: {
        name: 'slug',
        value: stringToSlug(formState.changes.name)
      }
    };
    handleChangeInput(generateCode);
  }, [formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes6 = formState.changes) !== null && _formState$changes6 !== void 0 && _formState$changes6.images) || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' || formState.result.error ? (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(product === null || product === void 0 ? void 0 : product.images, 'h_200,c_limit'),
    alt: "product image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.images) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.images,
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
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldRow, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", {
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
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.RegularWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('REGULAR_PRICE', 'Regular Price')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.in_offer) && (product === null || product === void 0 ? void 0 : product.offer_price) || false,
    onChange: function onChange(val) {
      return handleChangeFormState({
        in_offer: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "offer_price",
    placeholder: parsePrice(0),
    defaultValue: product === null || product === void 0 ? void 0 : product.offer_price,
    ref: formMethods.register({
      min: (typeof (formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.in_offer) === 'undefined' && (product === null || product === void 0 ? void 0 : product.in_offer) || (formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.in_offer)) && minimumRegualrPrice,
      required: typeof (formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.in_offer) === 'undefined' && product !== null && product !== void 0 && product.in_offer || formState !== null && formState !== void 0 && (_formState$changes12 = formState.changes) !== null && _formState$changes12 !== void 0 && _formState$changes12.in_offer ? t('VALIDATION_ERROR_REQUIRED', 'The Regular Price field is required').replace('_attribute_', t('REGULAR_PRICE', 'Regular Price')) : false
    }),
    onChange: handleChangeRegularPrice,
    disabled: formState.loading || !((_formState$changes$in = formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.in_offer) !== null && _formState$changes$in !== void 0 ? _formState$changes$in : product === null || product === void 0 ? void 0 : product.in_offer),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    name: "description",
    placeholder: t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description'),
    defaultValue: product === null || product === void 0 ? void 0 : product.description,
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InventoryWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('INVENTORY', 'Inventory')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 ? void 0 : product.inventoried) || false,
    onChange: function onChange(val) {
      return handleChangeFormState({
        inventoried: val
      });
    }
  })), (typeof (formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.inventoried) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.inventoried : product === null || product === void 0 ? void 0 : product.inventoried) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('QUANTITY', 'Quantity')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "quantity",
    placeholder: t('QUANTITY', 'Quantity'),
    defaultValue: product === null || product === void 0 ? void 0 : product.quantity,
    onChange: function onChange(e) {
      return handleChangeFormState({
        quantity: parseInt(e.target.value)
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InventoryWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (product === null || product === void 0 || (_product$ribbon = product.ribbon) === null || _product$ribbon === void 0 ? void 0 : _product$ribbon.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeEnable(val);
    }
  })), (typeof (formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 || (_formState$changes16 = _formState$changes16.ribbon) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.enabled) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 || (_formState$changes17 = _formState$changes17.ribbon) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.enabled : product === null || product === void 0 || (_product$ribbon2 = product.ribbon) === null || _product$ribbon2 === void 0 ? void 0 : _product$ribbon2.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    defaultValue: (_formState$changes$ri = formState === null || formState === void 0 || (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 || (_formState$changes18 = _formState$changes18.ribbon) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.text) !== null && _formState$changes$ri !== void 0 ? _formState$changes$ri : product === null || product === void 0 || (_product$ribbon3 = product.ribbon) === null || _product$ribbon3 === void 0 ? void 0 : _product$ribbon3.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: formState.loading,
    autoComplete: "off",
    ref: formMethods.register({
      required: product !== null && product !== void 0 && product.ribbon && (typeof (formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 || (_formState$changes19 = _formState$changes19.ribbon) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.enabled) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 || (_formState$changes20 = _formState$changes20.ribbon) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.enabled : product === null || product === void 0 || (_product$ribbon4 = product.ribbon) === null || _product$ribbon4 === void 0 ? void 0 : _product$ribbon4.enabled) ? t('VALIDATION_ERROR_REQUIRED', 'The Ribbon text field is required').replace('_attribute_', t('Ribbon_Text', 'Ribbon text')) : false
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: (_formState$changes$ri2 = formState === null || formState === void 0 || (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 || (_formState$changes21 = _formState$changes21.ribbon) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.color) !== null && _formState$changes$ri2 !== void 0 ? _formState$changes$ri2 : product === null || product === void 0 || (_product$ribbon5 = product.ribbon) === null || _product$ribbon5 === void 0 ? void 0 : _product$ribbon5.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShapeContentWrapper, null, _utils.shape && Object.keys(_utils.shape).map(function (key, i) {
    var _formState$changes22, _formState$changes23, _product$ribbon6, _formState$changes24, _formState$changes25, _product$ribbon7;
    return /*#__PURE__*/_react.default.createElement(_styles2.ShapeBoxWrapper, {
      key: i,
      shapeRect: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      round: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape),
      active: formState !== null && formState !== void 0 && (_formState$changes22 = formState.changes) !== null && _formState$changes22 !== void 0 && (_formState$changes22 = _formState$changes22.ribbon) !== null && _formState$changes22 !== void 0 && _formState$changes22.shape ? (formState === null || formState === void 0 || (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 || (_formState$changes23 = _formState$changes23.ribbon) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.shape) === _utils.shape[key] : (product === null || product === void 0 || (_product$ribbon6 = product.ribbon) === null || _product$ribbon6 === void 0 ? void 0 : _product$ribbon6.shape) === _utils.shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: _utils.shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (product !== null && product !== void 0 && product.ribbon && formState !== null && formState !== void 0 && (_formState$changes24 = formState.changes) !== null && _formState$changes24 !== void 0 && (_formState$changes24 = _formState$changes24.ribbon) !== null && _formState$changes24 !== void 0 && _formState$changes24.shape ? (formState === null || formState === void 0 || (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 || (_formState$changes25 = _formState$changes25.ribbon) === null || _formState$changes25 === void 0 ? void 0 : _formState$changes25.shape) === _utils.shape[key] : (product === null || product === void 0 || (_product$ribbon7 = product.ribbon) === null || _product$ribbon7 === void 0 ? void 0 : _product$ribbon7.shape) === _utils.shape[key]) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null));
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, onCancel && /*#__PURE__*/_react.default.createElement(_styles.Button, {
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
  }, formState !== null && formState !== void 0 && formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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