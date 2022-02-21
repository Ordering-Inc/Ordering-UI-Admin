"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBrandGENDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Shared = require("../../Shared");

var _utils = require("../../../utils");

var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));

var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));

var _styles = require("../../../styles");

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

var BusinessBrandGENDetailUI = function BusinessBrandGENDetailUI(props) {
  var _brandFormState$chang, _brandFormState$resul3, _brandFormState$resul4, _brandFormState$chang2, _brandFormState$chang3, _brandFormState$resul5, _brandFormState$resul6, _brandFormState$resul7, _brand$name, _brandFormState$chang4;

  var brandFormState = props.brandFormState,
      brand = props.brand,
      handlechangeImage = props.handlechangeImage,
      handleChangeInput = props.handleChangeInput,
      handleUpdateClick = props.handleUpdateClick;

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

  var brandImageInputRef = (0, _react.useRef)(null);

  var handleClickImage = function handleClickImage() {
    brandImageInputRef.current.click();
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
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

      handlechangeImage(files[0], name);
    }
  };

  (0, _react.useEffect)(function () {
    var _brandFormState$resul;

    if (brandFormState !== null && brandFormState !== void 0 && (_brandFormState$resul = brandFormState.result) !== null && _brandFormState$resul !== void 0 && _brandFormState$resul.error) {
      var _brandFormState$resul2;

      setAlertState({
        open: true,
        content: [brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$resul2 = brandFormState.result) === null || _brandFormState$resul2 === void 0 ? void 0 : _brandFormState$resul2.result]
      });
    }
  }, [brandFormState === null || brandFormState === void 0 ? void 0 : brandFormState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandGeneralDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandLogo, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files, 'logo');
    },
    childRef: function childRef(e) {
      brandImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: brandFormState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files, 'logo');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: brandFormState.loading
  }, brandFormState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_brandFormState$chang = brandFormState.changes) !== null && _brandFormState$chang !== void 0 && _brandFormState$chang.logo) || ((_brandFormState$resul3 = brandFormState.result) === null || _brandFormState$resul3 === void 0 ? void 0 : _brandFormState$resul3.result) === 'Network Error' || (_brandFormState$resul4 = brandFormState.result) !== null && _brandFormState$resul4 !== void 0 && _brandFormState$resul4.error ? (brand === null || brand === void 0 ? void 0 : brand.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: brand === null || brand === void 0 ? void 0 : brand.logo,
    alt: "business brand logo",
    loading: "lazy"
  }) : (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang2 = brandFormState.changes) === null || _brandFormState$chang2 === void 0 ? void 0 : _brandFormState$chang2.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang3 = brandFormState.changes) === null || _brandFormState$chang3 === void 0 ? void 0 : _brandFormState$chang3.logo,
    alt: "business brand logo",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))), /*#__PURE__*/_react.default.createElement(_styles2.CameraIconContainer, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    defaultValue: brandFormState !== null && brandFormState !== void 0 && (_brandFormState$resul5 = brandFormState.result) !== null && _brandFormState$resul5 !== void 0 && _brandFormState$resul5.result ? brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$resul6 = brandFormState.result) === null || _brandFormState$resul6 === void 0 ? void 0 : (_brandFormState$resul7 = _brandFormState$resul6.result) === null || _brandFormState$resul7 === void 0 ? void 0 : _brandFormState$resul7.name : (_brand$name = brand === null || brand === void 0 ? void 0 : brand.name) !== null && _brand$name !== void 0 ? _brand$name : brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang4 = brandFormState.changes) === null || _brandFormState$chang4 === void 0 ? void 0 : _brandFormState$chang4.name,
    onChange: handleChangeInput,
    disabled: brandFormState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: brandFormState.loading,
    onClick: handleUpdateClick
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS_BRAND', 'Business Brand'),
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
  }));
};

var BusinessBrandGENDetail = function BusinessBrandGENDetail(props) {
  var businessBrandGENDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandGENDetailUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrandGENDetail, businessBrandGENDetailProps);
};

exports.BusinessBrandGENDetail = BusinessBrandGENDetail;