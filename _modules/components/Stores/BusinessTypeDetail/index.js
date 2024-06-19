"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTypeDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _reactHookForm = require("react-hook-form");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
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
var BusinessTypeDetailUI = function BusinessTypeDetailUI(props) {
  var _ref, _typeFormState$change, _typeFormState$change2, _businessTypeState$bu, _typeFormState$change3, _businessTypeState$bu2, _businessTypeState$bu3, _typeFormState$change4, _typeFormState$change5, _ref2, _typeFormState$change6, _typeFormState$change7, _businessTypeState$bu4;
  var businessTypeState = props.businessTypeState,
    typeFormState = props.typeFormState,
    handlechangeImage = props.handlechangeImage,
    handleChangeInput = props.handleChangeInput,
    handleUpdateProductType = props.handleUpdateProductType,
    handleDeleteProductType = props.handleDeleteProductType,
    handleAddProductType = props.handleAddProductType,
    handleChangeItem = props.handleChangeItem;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var formMethods = (0, _reactHookForm.useForm)();
  var tagImageRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    cropState = _useState6[0],
    setCropState = _useState6[1];
  var onSubmit = function onSubmit() {
    if (businessTypeState !== null && businessTypeState !== void 0 && businessTypeState.businessType) {
      handleUpdateProductType();
    } else {
      handleAddProductType();
    }
  };
  var handleClickImage = function handleClickImage() {
    tagImageRef.current.click();
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
          name: 'image',
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
  var handleDeleteClick = function handleDeleteClick() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CATEGORY', 'Are you sure that you want to delete this category?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteProductType();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  (0, _react.useEffect)(function () {
    if (!(typeFormState !== null && typeFormState !== void 0 && typeFormState.error)) return;
    setAlertState({
      open: true,
      content: typeFormState === null || typeFormState === void 0 ? void 0 : typeFormState.error
    });
  }, [typeFormState === null || typeFormState === void 0 ? void 0 : typeFormState.error]);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, businessTypeState !== null && businessTypeState !== void 0 && businessTypeState.businessType ? (_ref = (_typeFormState$change = (_typeFormState$change2 = typeFormState.changes) === null || _typeFormState$change2 === void 0 ? void 0 : _typeFormState$change2.name) !== null && _typeFormState$change !== void 0 ? _typeFormState$change : businessTypeState === null || businessTypeState === void 0 || (_businessTypeState$bu = businessTypeState.businessType) === null || _businessTypeState$bu === void 0 ? void 0 : _businessTypeState$bu.name) !== null && _ref !== void 0 ? _ref : '' : t(t('ADD_NEW_BUSINESS_CATEGORY', 'Add new business category'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteClick();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.ProductTagImage, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      tagImageRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: typeFormState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: typeFormState.loading
  }, !((_typeFormState$change3 = typeFormState.changes) !== null && _typeFormState$change3 !== void 0 && _typeFormState$change3.image) || typeFormState.error ? (businessTypeState === null || businessTypeState === void 0 || (_businessTypeState$bu2 = businessTypeState.businessType) === null || _businessTypeState$bu2 === void 0 ? void 0 : _businessTypeState$bu2.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(businessTypeState === null || businessTypeState === void 0 || (_businessTypeState$bu3 = businessTypeState.businessType) === null || _businessTypeState$bu3 === void 0 ? void 0 : _businessTypeState$bu3.image, 'h_200,c_limit'),
    alt: "tag image",
    loading: "lazy"
  }) : (typeFormState === null || typeFormState === void 0 || (_typeFormState$change4 = typeFormState.changes) === null || _typeFormState$change4 === void 0 ? void 0 : _typeFormState$change4.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: typeFormState === null || typeFormState === void 0 || (_typeFormState$change5 = typeFormState.changes) === null || _typeFormState$change5 === void 0 ? void 0 : _typeFormState$change5.image,
    alt: "tag image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (_ref2 = (_typeFormState$change6 = (_typeFormState$change7 = typeFormState.changes) === null || _typeFormState$change7 === void 0 ? void 0 : _typeFormState$change7.name) !== null && _typeFormState$change6 !== void 0 ? _typeFormState$change6 : businessTypeState === null || businessTypeState === void 0 || (_businessTypeState$bu4 = businessTypeState.businessType) === null || _businessTypeState$bu4 === void 0 ? void 0 : _businessTypeState$bu4.name) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))
    }),
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: typeFormState.loading || Object.keys(typeFormState.changes).length === 0
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    width: "700px",
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
    }
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};
var BusinessTypeDetail = exports.BusinessTypeDetail = function BusinessTypeDetail(props) {
  var businessTypeDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessTypeDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessTypeDetail, businessTypeDetailProps);
};