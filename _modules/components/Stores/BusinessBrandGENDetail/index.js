"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _reactBootstrapIcons = require("react-bootstrap-icons");
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
var BusinessBrandGENDetailUI = function BusinessBrandGENDetailUI(props) {
  var _brandFormState$chang4, _brandFormState$resul3, _brandFormState$resul4, _brandFormState$chang5, _brandFormState$chang6, _ref, _brandFormState$chang7, _brandFormState$chang8, _ref2, _brandFormState$chang9, _brandFormState$chang10, _brand$ribbon2, _brandFormState$chang11, _brandFormState$chang12, _brand$ribbon3, _brandFormState$chang13, _brandFormState$chang14, _brand$ribbon4, _brandFormState$chang15, _brandFormState$chang16, _brand$ribbon5;
  var brandFormState = props.brandFormState,
    brand = props.brand,
    handleChangeInput = props.handleChangeInput,
    handleUpdateClick = props.handleUpdateClick,
    handleChangeItem = props.handleChangeItem,
    handleChangeRibbon = props.handleChangeRibbon;
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
  var handleChangeEnable = function handleChangeEnable(value) {
    if (!(brand !== null && brand !== void 0 && brand.ribbon) && !value) {
      var ribbonChanges = _objectSpread({}, _utils.ribbonValues);
      handleChangeItem({
        ribbon: ribbonChanges
      });
      return;
    }
    handleChangeRibbon({
      enabled: value
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

      // handlechangeImage(files[0], name)
    }
  };

  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var handleSubmit = function handleSubmit() {
    var _brandFormState$chang, _brandFormState$chang2, _brand$ribbon, _brandFormState$chang3;
    if ((typeof (brandFormState === null || brandFormState === void 0 || (_brandFormState$chang = brandFormState.changes) === null || _brandFormState$chang === void 0 || (_brandFormState$chang = _brandFormState$chang.ribbon) === null || _brandFormState$chang === void 0 ? void 0 : _brandFormState$chang.enabled) !== 'undefined' ? brandFormState === null || brandFormState === void 0 || (_brandFormState$chang2 = brandFormState.changes) === null || _brandFormState$chang2 === void 0 || (_brandFormState$chang2 = _brandFormState$chang2.ribbon) === null || _brandFormState$chang2 === void 0 ? void 0 : _brandFormState$chang2.enabled : brand === null || brand === void 0 || (_brand$ribbon = brand.ribbon) === null || _brand$ribbon === void 0 ? void 0 : _brand$ribbon.enabled) && (brandFormState === null || brandFormState === void 0 || (_brandFormState$chang3 = brandFormState.changes) === null || _brandFormState$chang3 === void 0 || (_brandFormState$chang3 = _brandFormState$chang3.ribbon) === null || _brandFormState$chang3 === void 0 ? void 0 : _brandFormState$chang3.text) === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'The Ribbon text field is required').replace('_attribute_', t('Ribbon_Text', 'Ribbon text'))
      });
      return;
    }
    handleUpdateClick && handleUpdateClick();
  };
  (0, _react.useEffect)(function () {
    var _brandFormState$resul;
    if (brandFormState !== null && brandFormState !== void 0 && (_brandFormState$resul = brandFormState.result) !== null && _brandFormState$resul !== void 0 && _brandFormState$resul.error) {
      var _brandFormState$resul2;
      setAlertState({
        open: true,
        content: brandFormState === null || brandFormState === void 0 || (_brandFormState$resul2 = brandFormState.result) === null || _brandFormState$resul2 === void 0 ? void 0 : _brandFormState$resul2.result
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
  }, brandFormState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_brandFormState$chang4 = brandFormState.changes) !== null && _brandFormState$chang4 !== void 0 && _brandFormState$chang4.logo) || ((_brandFormState$resul3 = brandFormState.result) === null || _brandFormState$resul3 === void 0 ? void 0 : _brandFormState$resul3.result) === 'Network Error' || (_brandFormState$resul4 = brandFormState.result) !== null && _brandFormState$resul4 !== void 0 && _brandFormState$resul4.error ? (brand === null || brand === void 0 ? void 0 : brand.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: brand === null || brand === void 0 ? void 0 : brand.logo,
    alt: "business brand logo",
    loading: "lazy"
  }) : (brandFormState === null || brandFormState === void 0 || (_brandFormState$chang5 = brandFormState.changes) === null || _brandFormState$chang5 === void 0 ? void 0 : _brandFormState$chang5.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: brandFormState === null || brandFormState === void 0 || (_brandFormState$chang6 = brandFormState.changes) === null || _brandFormState$chang6 === void 0 ? void 0 : _brandFormState$chang6.logo,
    alt: "business brand logo",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))), /*#__PURE__*/_react.default.createElement(_styles2.CameraIconContainer, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))))), brand && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('ID', 'ID')), /*#__PURE__*/_react.default.createElement("input", {
    value: brand === null || brand === void 0 ? void 0 : brand.id,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    value: (_ref = (_brandFormState$chang7 = brandFormState === null || brandFormState === void 0 || (_brandFormState$chang8 = brandFormState.changes) === null || _brandFormState$chang8 === void 0 ? void 0 : _brandFormState$chang8.name) !== null && _brandFormState$chang7 !== void 0 ? _brandFormState$chang7 : brand === null || brand === void 0 ? void 0 : brand.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeItem({
        name: e.target.value,
        slug: (0, _utils.stringToSlug)(e.target.value)
      });
    },
    disabled: brandFormState.loading,
    autoComplete: "off"
  })), brand && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement("input", {
    name: "slug",
    placeholder: t('WRITE_A_SLUG', 'Write a slug'),
    value: (_ref2 = (_brandFormState$chang9 = brandFormState === null || brandFormState === void 0 || (_brandFormState$chang10 = brandFormState.changes) === null || _brandFormState$chang10 === void 0 ? void 0 : _brandFormState$chang10.slug) !== null && _brandFormState$chang9 !== void 0 ? _brandFormState$chang9 : brand === null || brand === void 0 ? void 0 : brand.slug) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    disabled: brandFormState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (e.which === 32) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (brand === null || brand === void 0 || (_brand$ribbon2 = brand.ribbon) === null || _brand$ribbon2 === void 0 ? void 0 : _brand$ribbon2.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeEnable(val);
    }
  })), (typeof (brandFormState === null || brandFormState === void 0 || (_brandFormState$chang11 = brandFormState.changes) === null || _brandFormState$chang11 === void 0 || (_brandFormState$chang11 = _brandFormState$chang11.ribbon) === null || _brandFormState$chang11 === void 0 ? void 0 : _brandFormState$chang11.enabled) !== 'undefined' ? brandFormState === null || brandFormState === void 0 || (_brandFormState$chang12 = brandFormState.changes) === null || _brandFormState$chang12 === void 0 || (_brandFormState$chang12 = _brandFormState$chang12.ribbon) === null || _brandFormState$chang12 === void 0 ? void 0 : _brandFormState$chang12.enabled : brand === null || brand === void 0 || (_brand$ribbon3 = brand.ribbon) === null || _brand$ribbon3 === void 0 ? void 0 : _brand$ribbon3.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement("input", {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    value: (_brandFormState$chang13 = brandFormState === null || brandFormState === void 0 || (_brandFormState$chang14 = brandFormState.changes) === null || _brandFormState$chang14 === void 0 || (_brandFormState$chang14 = _brandFormState$chang14.ribbon) === null || _brandFormState$chang14 === void 0 ? void 0 : _brandFormState$chang14.text) !== null && _brandFormState$chang13 !== void 0 ? _brandFormState$chang13 : brand === null || brand === void 0 || (_brand$ribbon4 = brand.ribbon) === null || _brand$ribbon4 === void 0 ? void 0 : _brand$ribbon4.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: brandFormState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: (_brandFormState$chang15 = brandFormState === null || brandFormState === void 0 || (_brandFormState$chang16 = brandFormState.changes) === null || _brandFormState$chang16 === void 0 || (_brandFormState$chang16 = _brandFormState$chang16.ribbon) === null || _brandFormState$chang16 === void 0 ? void 0 : _brandFormState$chang16.color) !== null && _brandFormState$chang15 !== void 0 ? _brandFormState$chang15 : brand === null || brand === void 0 || (_brand$ribbon5 = brand.ribbon) === null || _brand$ribbon5 === void 0 ? void 0 : _brand$ribbon5.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShapeContentWrapper, null, _utils.shape && Object.keys(_utils.shape).map(function (key, i) {
    var _brandFormState$chang17, _brandFormState$chang18, _brand$ribbon6, _brandFormState$chang19, _brandFormState$chang20, _brand$ribbon7;
    return /*#__PURE__*/_react.default.createElement(_styles2.ShapeBoxWrapper, {
      key: i,
      shapeRect: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      round: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape),
      active: brandFormState !== null && brandFormState !== void 0 && (_brandFormState$chang17 = brandFormState.changes) !== null && _brandFormState$chang17 !== void 0 && (_brandFormState$chang17 = _brandFormState$chang17.ribbon) !== null && _brandFormState$chang17 !== void 0 && _brandFormState$chang17.shape ? (brandFormState === null || brandFormState === void 0 || (_brandFormState$chang18 = brandFormState.changes) === null || _brandFormState$chang18 === void 0 || (_brandFormState$chang18 = _brandFormState$chang18.ribbon) === null || _brandFormState$chang18 === void 0 ? void 0 : _brandFormState$chang18.shape) === _utils.shape[key] : (brand === null || brand === void 0 || (_brand$ribbon6 = brand.ribbon) === null || _brand$ribbon6 === void 0 ? void 0 : _brand$ribbon6.shape) === _utils.shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: _utils.shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (brandFormState !== null && brandFormState !== void 0 && (_brandFormState$chang19 = brandFormState.changes) !== null && _brandFormState$chang19 !== void 0 && (_brandFormState$chang19 = _brandFormState$chang19.ribbon) !== null && _brandFormState$chang19 !== void 0 && _brandFormState$chang19.shape ? (brandFormState === null || brandFormState === void 0 || (_brandFormState$chang20 = brandFormState.changes) === null || _brandFormState$chang20 === void 0 || (_brandFormState$chang20 = _brandFormState$chang20.ribbon) === null || _brandFormState$chang20 === void 0 ? void 0 : _brandFormState$chang20.shape) === _utils.shape[key] : (brand === null || brand === void 0 || (_brand$ribbon7 = brand.ribbon) === null || _brand$ribbon7 === void 0 ? void 0 : _brand$ribbon7.shape) === _utils.shape[key]) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null));
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.SaveBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    disabled: brandFormState.loading,
    onClick: handleSubmit
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
var BusinessBrandGENDetail = function BusinessBrandGENDetail(props) {
  var businessBrandGENDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandGENDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrandGENDetail, businessBrandGENDetailProps);
};
exports.BusinessBrandGENDetail = BusinessBrandGENDetail;