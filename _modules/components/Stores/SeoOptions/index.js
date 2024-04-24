"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeoOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SeoOptions = exports.SeoOptions = function SeoOptions(props) {
  var _formState$changes3, _formState$result, _formState$changes4, _formState$changes5, _formState$changes6, _formState$result2, _formState$result3, _ref, _formState$changes$se, _formState$changes7, _formState$result4, _formState$result5, _ref2, _formState$changes$se2, _formState$changes8, _formState$result6, _formState$result7, _ref3, _formState$changes$se3, _formState$changes9, _formState$result8, _formState$result9, _ref4, _formState$changes$sl, _formState$changes10;
  var data = props.data,
    formState = props.formState,
    setFormState = props.setFormState,
    handleUpdateClick = props.handleUpdateClick,
    handleProductCategoryChangeInput = props.handleProductCategoryChangeInput,
    handlechangeImageProductCategory = props.handlechangeImageProductCategory,
    isBusinessSeo = props.isBusinessSeo,
    isProductSeo = props.isProductSeo,
    isCategorySeo = props.isCategorySeo,
    cleanFormState = props.cleanFormState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var productImageInputRef = (0, _react.useRef)(null);
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
  var titleRef = (0, _react.useRef)(null);
  var descriptionRef = (0, _react.useRef)(null);
  var handleClickImage = function handleClickImage() {
    productImageInputRef.current.click();
  };
  var handlechangeImage = function handlechangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          seo_image: optimizeImage(reader.result, 'h_200,c_limit')
        })
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
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
          name: 'seo_image',
          data: reader.result,
          open: true
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
      if (isBusinessSeo) handlechangeImage(files[0]);else handlechangeImageProductCategory(files[0], 'seo_image');
    }
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    if (isBusinessSeo) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg))
      }));
    } else {
      setFormState(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg));
    }
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleUseSameInfo = function handleUseSameInfo() {
    if (isBusinessSeo) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          seo_title: data === null || data === void 0 ? void 0 : data.name,
          seo_description: data === null || data === void 0 ? void 0 : data.description
        }
      }));
    } else {
      setFormState({
        seo_title: data === null || data === void 0 ? void 0 : data.name,
        seo_description: data === null || data === void 0 ? void 0 : data.description
      });
    }
    titleRef.current.value = data === null || data === void 0 ? void 0 : data.name;
    descriptionRef.current.value = data === null || data === void 0 ? void 0 : data.description;
  };
  var onUpdateClick = function onUpdateClick() {
    var _formState$changes;
    if (formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.slug) {
      var _formState$changes2;
      var format = /[ `!@#$%^&*()+\-=[\]{};':"\\|,.<>/?~]/;
      if (format.test(formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.slug)) {
        setAlertState({
          open: true,
          content: [t('SLUG_NOT_ALLOWED_SPECIAL_CHARACTERS', 'The slug is not allowed special characters.')]
        });
        return;
      }
    }
    handleUpdateClick();
  };
  (0, _react.useEffect)(function () {
    var _data$seo_title, _data$seo_description;
    titleRef.current.value = (_data$seo_title = data === null || data === void 0 ? void 0 : data.seo_title) !== null && _data$seo_title !== void 0 ? _data$seo_title : '';
    descriptionRef.current.value = (_data$seo_description = data === null || data === void 0 ? void 0 : data.seo_description) !== null && _data$seo_description !== void 0 ? _data$seo_description : '';
  }, [data]);
  (0, _react.useEffect)(function () {
    return function () {
      cleanFormState && cleanFormState({
        changes: {}
      });
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_IMAGE', 'SEO Image')), /*#__PURE__*/_react.default.createElement(_styles2.SEOImage, {
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.seo_image) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? (data === null || data === void 0 ? void 0 : data.seo_image) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(data === null || data === void 0 ? void 0 : data.seo_image, 'h_200,c_limit'),
    alt: "business image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.seo_image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.seo_image,
    alt: "business image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    isImage: (formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.seo_image) || (data === null || data === void 0 ? void 0 : data.seo_image)
  }, /*#__PURE__*/_react.default.createElement(_styles2.CameraWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Camera, null)), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP', 'Drag and Drop')))))))), /*#__PURE__*/_react.default.createElement(_styles2.UseSameInfoWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleUseSameInfo
  }, t('USE_SAME_PRODUCT_INFORMATION', 'Use the same as main product information'))), /*#__PURE__*/_react.default.createElement(_styles2.WrapperShortDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_TITLE', 'SEO Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "seo_title",
    ref: titleRef,
    defaultValue: formState !== null && formState !== void 0 && (_formState$result2 = formState.result) !== null && _formState$result2 !== void 0 && _formState$result2.result ? formState === null || formState === void 0 || (_formState$result3 = formState.result) === null || _formState$result3 === void 0 || (_formState$result3 = _formState$result3.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.seo_title : (_ref = (_formState$changes$se = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.seo_title) !== null && _formState$changes$se !== void 0 ? _formState$changes$se : data === null || data === void 0 ? void 0 : data.seo_title) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      if (isBusinessSeo) handleChangeInput(e);
      if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e);
    },
    placeholder: t('SEO_TITLE', 'SEO Title')
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_DESCRIPTION', 'SEO Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "seo_description",
    ref: descriptionRef,
    rows: 4,
    defaultValue: formState !== null && formState !== void 0 && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.result ? formState === null || formState === void 0 || (_formState$result5 = formState.result) === null || _formState$result5 === void 0 || (_formState$result5 = _formState$result5.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.seo_description : (_ref2 = (_formState$changes$se2 = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.seo_description) !== null && _formState$changes$se2 !== void 0 ? _formState$changes$se2 : data === null || data === void 0 ? void 0 : data.seo_description) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      if (isBusinessSeo) handleChangeInput(e);
      if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e);
    },
    placeholder: t('SEO_DESCRIPTION', 'SEO Description')
  })), isProductSeo && /*#__PURE__*/_react.default.createElement(_styles2.WrapperDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_KEYWORDS', 'SEO Keywords')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "seo_keywords",
    defaultValue: formState !== null && formState !== void 0 && (_formState$result6 = formState.result) !== null && _formState$result6 !== void 0 && _formState$result6.result ? formState === null || formState === void 0 || (_formState$result7 = formState.result) === null || _formState$result7 === void 0 || (_formState$result7 = _formState$result7.result) === null || _formState$result7 === void 0 ? void 0 : _formState$result7.seo_keywords : (_ref3 = (_formState$changes$se3 = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.seo_keywords) !== null && _formState$changes$se3 !== void 0 ? _formState$changes$se3 : data === null || data === void 0 ? void 0 : data.seo_keywords) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      if (isBusinessSeo) handleChangeInput(e);
      if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e);
    },
    placeholder: t('SEO_KEYWORDS', 'SEO Keywords')
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "slug",
    placeholder: t('SLUG', 'Slug'),
    defaultValue: formState !== null && formState !== void 0 && (_formState$result8 = formState.result) !== null && _formState$result8 !== void 0 && _formState$result8.result ? formState === null || formState === void 0 || (_formState$result9 = formState.result) === null || _formState$result9 === void 0 || (_formState$result9 = _formState$result9.result) === null || _formState$result9 === void 0 ? void 0 : _formState$result9.slug : (_ref4 = (_formState$changes$sl = formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.slug) !== null && _formState$changes$sl !== void 0 ? _formState$changes$sl : data === null || data === void 0 ? void 0 : data.slug) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: function onChange(e) {
      if (isBusinessSeo) handleChangeInput(e);
      if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtons, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "5px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: function onClick() {
      return onUpdateClick();
    }
  }, formState.loading ? t('UPDATING', 'Updating') : t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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