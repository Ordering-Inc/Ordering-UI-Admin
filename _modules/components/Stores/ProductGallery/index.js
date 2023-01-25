"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductGallery = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductGalleryUI = function ProductGalleryUI(props) {
  var _changesState$changes3, _changesState$changes4;
  var productGalleryState = props.productGalleryState,
    changesState = props.changesState,
    handleChangeImage = props.handleChangeImage,
    handleChangeInput = props.handleChangeInput,
    handleAddGalleryProduct = props.handleAddGalleryProduct,
    handleDeteteProductGalleryItem = props.handleDeteteProductGalleryItem,
    handleChangeItem = props.handleChangeItem;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    inputRef = _useState2[0],
    setInputRef = _useState2[1];
  var inputAddRef = (0, _react.useRef)();
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    cropState = _useState8[0],
    setCropState = _useState8[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleClickImage = function handleClickImage(idName) {
    document.getElementById(idName).click();
  };
  var handleFiles = function handleFiles(files, optionId) {
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
          name: 'file',
          data: reader.result,
          open: true,
          id: optionId
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
      handleChangeImage(files[0], optionId);
    }
    if (!optionId && inputRef !== null && inputRef !== void 0 && inputRef.value) inputRef.value = null;
  };
  var handleDeleteClick = function handleDeleteClick(itemId, type) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_IMAGE', 'Are you sure that you want to delete this image?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteProductGalleryItem(itemId, type);
      }
    });
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg), cropState === null || cropState === void 0 ? void 0 : cropState.id);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  (0, _react.useEffect)(function () {
    if (!(changesState !== null && changesState !== void 0 && changesState.error)) return;
    setAlertState({
      open: true,
      content: changesState === null || changesState === void 0 ? void 0 : changesState.error
    });
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.error]);
  (0, _react.useEffect)(function () {
    if (Object.entries(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0 && inputAddRef !== null && inputAddRef !== void 0 && inputAddRef.current) inputAddRef.current.value = '';
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.changes]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ProdcutGalleryContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_IMAGES', 'Product images')), /*#__PURE__*/_react.default.createElement(_styles2.GalleryImagesContainer, null, productGalleryState !== null && productGalleryState !== void 0 && productGalleryState.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.GalleryItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.GalleryImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 130,
      height: 130,
      style: {
        bordeRadius: '8px'
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.GalleryItemBottom, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 90
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 10
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, productGalleryState === null || productGalleryState === void 0 ? void 0 : productGalleryState.photos.map(function (photo) {
    var _changesState$changes, _changesState$changes2;
    return /*#__PURE__*/_react.default.createElement(_styles2.GalleryItem, {
      key: photo.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.GalleryImage, {
      onClick: function onClick() {
        return handleClickImage("gallery_image_".concat(photo.id));
      }
    }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
      onFiles: function onFiles(files) {
        return handleFiles(files, photo.id);
      },
      childId: "gallery_image_".concat(photo.id),
      accept: "image/png, image/jpeg, image/jpg",
      disabled: changesState.loading || productGalleryState.loading
    }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
      onDrop: function onDrop(dataTransfer) {
        return handleFiles(dataTransfer.files, photo.id);
      },
      accept: "image/png, image/jpeg, image/jpg",
      disabled: changesState.loading || productGalleryState.loading
    }, changesState !== null && changesState !== void 0 && (_changesState$changes = changesState.changes) !== null && _changesState$changes !== void 0 && _changesState$changes.file && (changesState === null || changesState === void 0 ? void 0 : changesState.itemId) === photo.id ? /*#__PURE__*/_react.default.createElement("img", {
      src: changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.file,
      alt: "option image",
      loading: "lazy"
    }) : (photo === null || photo === void 0 ? void 0 : photo.file) && /*#__PURE__*/_react.default.createElement("img", {
      src: photo === null || photo === void 0 ? void 0 : photo.file,
      alt: "option image",
      loading: "lazy"
    }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), /*#__PURE__*/_react.default.createElement("p", null, t('DRAG_AND_DROP', 'Drag and drop')))))), /*#__PURE__*/_react.default.createElement(_styles2.GalleryItemBottom, null, /*#__PURE__*/_react.default.createElement("input", {
      name: "title",
      defaultValue: (photo === null || photo === void 0 ? void 0 : photo.title) || '',
      onChange: function onChange(e) {
        return handleChangeInput(e, photo.id);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.DropDownWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDotsVertical, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteClick(photo.id, photo.type);
      }
    }, t('DELETE', 'Delete'))))));
  }), /*#__PURE__*/_react.default.createElement(_styles2.GalleryItem, null, /*#__PURE__*/_react.default.createElement(_styles2.GalleryImage, {
    onClick: function onClick() {
      return handleClickImage('gallery_image_add');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, null);
    },
    childId: "gallery_image_add",
    accept: "image/png, image/jpeg, image/jpg",
    disabled: changesState.loading || productGalleryState.loading,
    childRef: function childRef(e) {
      return setInputRef(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, null);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: changesState.loading || productGalleryState.loading
  }, (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes3 = changesState.changes) === null || _changesState$changes3 === void 0 ? void 0 : _changesState$changes3.file) && (changesState === null || changesState === void 0 ? void 0 : changesState.itemId) === null && /*#__PURE__*/_react.default.createElement("img", {
    src: changesState === null || changesState === void 0 ? void 0 : (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.file,
    alt: "option image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null), /*#__PURE__*/_react.default.createElement("p", null, t('DRAG_AND_DROP', 'Drag and drop')))))), /*#__PURE__*/_react.default.createElement(_styles2.GalleryItemBottom, {
    isAdd: true
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "title",
    ref: inputAddRef,
    placeholder: t('TITLE', 'Title'),
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleAddGalleryProduct(1);
    },
    disabled: changesState.loading || productGalleryState.loading
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null))))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
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
    },
    className: "ordering-img-crop"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};
var ProductGallery = function ProductGallery(props) {
  var productGalleryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductGalleryUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductGallery, productGalleryProps);
};
exports.ProductGallery = ProductGallery;