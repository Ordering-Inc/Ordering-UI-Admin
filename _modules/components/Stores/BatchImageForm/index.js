"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchImageForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
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
var BatchImageFormUI = function BatchImageFormUI(props) {
  var onClose = props.onClose,
    formState = props.formState,
    handleUploadImages = props.handleUploadImages,
    cleanFormState = props.cleanFormState,
    products = props.products,
    updateProduct = props.updateProduct;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var inputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    productIds = _useState4[0],
    setProductIds = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    invalidImages = _useState6[0],
    setInvalidImages = _useState6[1];
  var uploadConditions = [t('BATCH_IMAGE_UPLOAD_CONDITION_1', 'The images must have a valid PNG or JPG format.'), t('BATCH_IMAGE_UPLOAD_CONDITION_2', 'The name of the image must be the product ID.'), t('BATCH_IMAGE_UPLOAD_CONDITION_3', 'You can see the product ID in the spreadsheet mode.'), t('BATCH_IMAGE_UPLOAD_CONDITION_4', 'Don’t close or refresh the page.')];
  var handleClick = function handleClick(e) {
    inputRef.current.click();
  };
  var validImages = function validImages(files) {
    var invalidfileNames = [];
    var validfiles = [];
    if (files && files.length > 0) {
      Object.values(files).forEach(function (f) {
        var type = f.type.split('/')[0];
        if (type !== 'image') {
          setAlertState({
            open: true,
            content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
          });
          invalidfileNames.push(f === null || f === void 0 ? void 0 : f.name);
          return;
        }
        if ((0, _utils.bytesConverter)(f.size) > 2048) {
          setAlertState({
            open: true,
            content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
          });
          invalidfileNames.push(f === null || f === void 0 ? void 0 : f.name);
          return;
        }
        var nameWithoutExtension = f === null || f === void 0 ? void 0 : f.name.split('.')[0];
        if (productIds.indexOf(parseInt(nameWithoutExtension)) > -1) {
          validfiles.push(f);
        } else {
          invalidfileNames.push(f === null || f === void 0 ? void 0 : f.name);
        }
      });
    }
    setInvalidImages(invalidfileNames);
    return validfiles;
  };
  var handleFiles = function handleFiles(files) {
    var readyFiles = validImages(files);
    handleUploadImages(readyFiles);
  };
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
  var handleImageChange = function handleImageChange(e) {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.target.files);
  };
  var handleSubmit = function handleSubmit() {
    event.preventDefault();
    if ((formState === null || formState === void 0 ? void 0 : formState.photos.length) > 0 && updateProduct) {
      updateProduct();
    }
  };
  (0, _react.useEffect)(function () {
    if (products && products.length > 0) {
      var _productIds = [];
      products.map(function (p) {
        _productIds.push(p === null || p === void 0 ? void 0 : p.id);
      });
      setProductIds(_productIds);
    }
  }, [products]);
  (0, _react.useEffect)(function () {
    if (formState !== null && formState !== void 0 && formState.endPoint) {
      onClose();
    }
  }, [formState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BATCH_UPLOADE_FORM_TITLE', 'Upload images in batch'))), /*#__PURE__*/_react.default.createElement(_styles2.UploadConditions, null, /*#__PURE__*/_react.default.createElement(_styles2.ConditionTitle, null, /*#__PURE__*/_react.default.createElement("b", null, t('BATCH_UPLOAD_CONDITION_TITLE', 'Here you can upload multiple product images.'))), /*#__PURE__*/_react.default.createElement(_styles2.Conditions, null, uploadConditions && uploadConditions.length > 0 && uploadConditions.map(function (list, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, list);
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BatchUploadForm, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageInput, null, /*#__PURE__*/_react.default.createElement(_styles2.BatchImages, {
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    multiple: true,
    name: "imagesArray",
    ref: function ref(e) {
      inputRef.current = e;
    },
    onChange: function onChange(e) {
      return handleImageChange(e);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading,
    id: "batch-images",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading,
    className: "multiple-image-uploader"
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  })), /*#__PURE__*/_react.default.createElement("p", null, t('UPLODING', 'Uploading'), '...')) : /*#__PURE__*/_react.default.createElement(_styles2.UploadedImages, null, (formState === null || formState === void 0 ? void 0 : formState.photos) && (formState === null || formState === void 0 ? void 0 : formState.photos.length) > 0 && (formState === null || formState === void 0 ? void 0 : formState.photos.map(function (photo) {
    return /*#__PURE__*/_react.default.createElement("img", {
      key: photo === null || photo === void 0 ? void 0 : photo.name,
      src: photo === null || photo === void 0 ? void 0 : photo.base64,
      alt: "",
      loading: "lazy"
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, !formState.loading && (formState === null || formState === void 0 ? void 0 : formState.photos.length) === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('DRAG_AND_DROP', 'Drag and drop')))))))), /*#__PURE__*/_react.default.createElement(_styles2.Action, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: (formState === null || formState === void 0 ? void 0 : formState.photos.length) === 0 || (formState === null || formState === void 0 ? void 0 : formState.loading),
    onClick: function onClick() {
      return handleSubmit();
    }
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_styles2.ImageIssue, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("b", null, "Issues with images:")), invalidImages.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.IssueBoard, null, /*#__PURE__*/_react.default.createElement("ul", null, invalidImages.map(function (invalidImage, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, invalidImage);
  }))) : /*#__PURE__*/_react.default.createElement(_styles2.IssueBoard, {
    emptyboard: true
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
  })));
};
var BatchImageForm = function BatchImageForm(props) {
  var batchImageFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BatchImageFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BatchImageForm, batchImageFormProps);
};
exports.BatchImageForm = BatchImageForm;