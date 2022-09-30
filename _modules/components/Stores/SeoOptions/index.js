"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var SeoOptions = function SeoOptions(props) {
  var _formState$changes, _formState$result, _formState$changes2, _formState$changes3, _formState$changes4, _formState$result2, _formState$result3, _formState$result3$re, _ref, _formState$changes$se, _formState$changes5, _formState$result4, _formState$result5, _formState$result5$re, _ref2, _formState$changes$se2, _formState$changes6, _formState$result6, _formState$result7, _formState$result7$re, _ref3, _formState$changes$se3, _formState$changes7;

  var data = props.data,
      formState = props.formState,
      setFormState = props.setFormState,
      handleUpdateClick = props.handleUpdateClick,
      handleProductCategoryChangeInput = props.handleProductCategoryChangeInput,
      handlechangeImageProductCategory = props.handlechangeImageProductCategory,
      isBusinessSeo = props.isBusinessSeo,
      isProductSeo = props.isProductSeo,
      isCategorySeo = props.isCategorySeo;

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

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSameInfo = _useState6[0],
      setIsSameInfo = _useState6[1];

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

  (0, _react.useEffect)(function () {
    if (!isSameInfo || !isProductSeo) return;
    setFormState({
      seo_title: data === null || data === void 0 ? void 0 : data.name,
      seo_description: data === null || data === void 0 ? void 0 : data.description
    });
    titleRef.current.value = data === null || data === void 0 ? void 0 : data.name;
    descriptionRef.current.value = data === null || data === void 0 ? void 0 : data.description;
  }, [isSameInfo, isProductSeo]);
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.seo_image) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? (data === null || data === void 0 ? void 0 : data.seo_image) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(data === null || data === void 0 ? void 0 : data.seo_image, 'h_200,c_limit'),
    alt: "business image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.seo_image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.seo_image,
    alt: "business image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, {
    isImage: (formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.seo_image) || data.seo_image
  }, /*#__PURE__*/_react.default.createElement(_styles2.CameraWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Camera, null)), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP', 'Drag and Drop')))))))), isProductSeo && /*#__PURE__*/_react.default.createElement(_styles2.UseSameInfoWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('USE_SAME_PRODUCT_INFORMATION', 'Use the same as main product information')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isSameInfo || false,
    onChange: function onChange(val) {
      return setIsSameInfo(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperShortDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_TITLE', 'SEO Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "seo_title",
    ref: titleRef,
    defaultValue: formState !== null && formState !== void 0 && (_formState$result2 = formState.result) !== null && _formState$result2 !== void 0 && _formState$result2.result ? formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : (_formState$result3$re = _formState$result3.result) === null || _formState$result3$re === void 0 ? void 0 : _formState$result3$re.seo_title : (_ref = (_formState$changes$se = formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.seo_title) !== null && _formState$changes$se !== void 0 ? _formState$changes$se : data === null || data === void 0 ? void 0 : data.seo_title) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      if (isBusinessSeo) handleChangeInput(e);
      if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e);
    },
    placeholder: t('SEO_TITLE', 'SEO Title')
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_DESCRIPTION', 'SEO Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "seo_description",
    ref: descriptionRef,
    rows: 4,
    defaultValue: formState !== null && formState !== void 0 && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.result ? formState === null || formState === void 0 ? void 0 : (_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : (_formState$result5$re = _formState$result5.result) === null || _formState$result5$re === void 0 ? void 0 : _formState$result5$re.seo_description : (_ref2 = (_formState$changes$se2 = formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.seo_description) !== null && _formState$changes$se2 !== void 0 ? _formState$changes$se2 : data === null || data === void 0 ? void 0 : data.seo_description) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      if (isBusinessSeo) handleChangeInput(e);
      if (isProductSeo || isCategorySeo) handleProductCategoryChangeInput(e);
    },
    placeholder: t('SEO_DESCRIPTION', 'SEO Description')
  })), isProductSeo && /*#__PURE__*/_react.default.createElement(_styles2.WrapperDescription, null, /*#__PURE__*/_react.default.createElement("label", null, t('SEO_KEYWORDS', 'SEO Keywords')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "seo_keywords",
    defaultValue: formState !== null && formState !== void 0 && (_formState$result6 = formState.result) !== null && _formState$result6 !== void 0 && _formState$result6.result ? formState === null || formState === void 0 ? void 0 : (_formState$result7 = formState.result) === null || _formState$result7 === void 0 ? void 0 : (_formState$result7$re = _formState$result7.result) === null || _formState$result7$re === void 0 ? void 0 : _formState$result7$re.seo_keywords : (_ref3 = (_formState$changes$se3 = formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.seo_keywords) !== null && _formState$changes$se3 !== void 0 ? _formState$changes$se3 : data === null || data === void 0 ? void 0 : data.seo_keywords) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: function onChange(e) {
      return handleProductCategoryChangeInput(e);
    },
    placeholder: t('SEO_KEYWORDS', 'SEO Keywords')
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtons, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "5px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: function onClick() {
      return handleUpdateClick();
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

exports.SeoOptions = SeoOptions;