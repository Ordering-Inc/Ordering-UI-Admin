"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _UserFormDetails = require("../UserFormDetails");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserProfileFormUI = function UserProfileFormUI(props) {
  var _formState$changes2, _userState$result, _userState$result$res, _formState$changes3, _formState$changes4, _formState$changes4$r, _formState$result, _userState$result2, _userState$result2$re, _userState$result3, _userState$result3$re, _formState$changes5, _formState$changes6, _userState$result4;
  var handleButtonUpdateClick = props.handleButtonUpdateClick,
    handlechangeImage = props.handlechangeImage,
    formState = props.formState,
    isHiddenAddress = props.isHiddenAddress,
    userState = props.userState,
    handleChangeSwtich = props.handleChangeSwtich,
    isService = props.isService;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
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
  var inputRef = (0, _react.useRef)(null);
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
  var handleClickImage = function handleClickImage() {
    inputRef.current.click();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeSwtich(cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  (0, _react.useEffect)(function () {
    var _formState$changes;
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isCalcHeight: !isService
  }, /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, {
    mbottom: isHiddenAddress && 25
  }, /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: (userState === null || userState === void 0 ? void 0 : (_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : (_userState$result$res = _userState$result.result) === null || _userState$result$res === void 0 ? void 0 : _userState$result$res.photo) || (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo) && !formState.result.error
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
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && (_formState$changes4$r = _formState$changes4.result) !== null && _formState$changes4$r !== void 0 && _formState$changes4$r.photo) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? userState !== null && userState !== void 0 && (_userState$result2 = userState.result) !== null && _userState$result2 !== void 0 && (_userState$result2$re = _userState$result2.result) !== null && _userState$result2$re !== void 0 && _userState$result2$re.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: userState === null || userState === void 0 ? void 0 : (_userState$result3 = userState.result) === null || _userState$result3 === void 0 ? void 0 : (_userState$result3$re = _userState$result3.result) === null || _userState$result3$re === void 0 ? void 0 : _userState$result3$re.photo,
    alt: "user image",
    width: "90px",
    height: "90px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)) : (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.photo,
    alt: "user image",
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Camera, null))))), /*#__PURE__*/_react.default.createElement(_styles.WrapperForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    userData: userState === null || userState === void 0 ? void 0 : (_userState$result4 = userState.result) === null || _userState$result4 === void 0 ? void 0 : _userState$result4.result,
    isHiddenAddress: isHiddenAddress
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
var UserProfileForm = function UserProfileForm(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    useSessionUser: false,
    UIComponent: UserProfileFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserFormDetails, UserProfileProps);
};
exports.UserProfileForm = UserProfileForm;