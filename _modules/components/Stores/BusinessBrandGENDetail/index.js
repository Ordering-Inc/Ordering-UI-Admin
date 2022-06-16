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

var BusinessBrandGENDetailUI = function BusinessBrandGENDetailUI(props) {
  var _brandFormState$chang7, _brandFormState$resul3, _brandFormState$resul4, _brandFormState$chang8, _brandFormState$chang9, _ref, _brandFormState$chang10, _brandFormState$chang11, _ref2, _brandFormState$chang12, _brandFormState$chang13, _brand$ribbon2, _brandFormState$chang14, _brandFormState$chang15, _brandFormState$chang16, _brandFormState$chang17, _brand$ribbon3, _brandFormState$chang18, _brandFormState$chang19, _brandFormState$chang20, _brand$ribbon4, _brandFormState$chang21, _brandFormState$chang22, _brandFormState$chang23, _brand$ribbon5;

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
      }; // handlechangeImage(files[0], name)

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
    var _brandFormState$chang, _brandFormState$chang2, _brandFormState$chang3, _brandFormState$chang4, _brand$ribbon, _brandFormState$chang5, _brandFormState$chang6;

    if ((typeof (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang = brandFormState.changes) === null || _brandFormState$chang === void 0 ? void 0 : (_brandFormState$chang2 = _brandFormState$chang.ribbon) === null || _brandFormState$chang2 === void 0 ? void 0 : _brandFormState$chang2.enabled) !== 'undefined' ? brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang3 = brandFormState.changes) === null || _brandFormState$chang3 === void 0 ? void 0 : (_brandFormState$chang4 = _brandFormState$chang3.ribbon) === null || _brandFormState$chang4 === void 0 ? void 0 : _brandFormState$chang4.enabled : brand === null || brand === void 0 ? void 0 : (_brand$ribbon = brand.ribbon) === null || _brand$ribbon === void 0 ? void 0 : _brand$ribbon.enabled) && (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang5 = brandFormState.changes) === null || _brandFormState$chang5 === void 0 ? void 0 : (_brandFormState$chang6 = _brandFormState$chang5.ribbon) === null || _brandFormState$chang6 === void 0 ? void 0 : _brandFormState$chang6.text) === '') {
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
        content: brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$resul2 = brandFormState.result) === null || _brandFormState$resul2 === void 0 ? void 0 : _brandFormState$resul2.result
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
  }, brandFormState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_brandFormState$chang7 = brandFormState.changes) !== null && _brandFormState$chang7 !== void 0 && _brandFormState$chang7.logo) || ((_brandFormState$resul3 = brandFormState.result) === null || _brandFormState$resul3 === void 0 ? void 0 : _brandFormState$resul3.result) === 'Network Error' || (_brandFormState$resul4 = brandFormState.result) !== null && _brandFormState$resul4 !== void 0 && _brandFormState$resul4.error ? (brand === null || brand === void 0 ? void 0 : brand.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: brand === null || brand === void 0 ? void 0 : brand.logo,
    alt: "business brand logo",
    loading: "lazy"
  }) : (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang8 = brandFormState.changes) === null || _brandFormState$chang8 === void 0 ? void 0 : _brandFormState$chang8.logo) && /*#__PURE__*/_react.default.createElement("img", {
    src: brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang9 = brandFormState.changes) === null || _brandFormState$chang9 === void 0 ? void 0 : _brandFormState$chang9.logo,
    alt: "business brand logo",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))), /*#__PURE__*/_react.default.createElement(_styles2.CameraIconContainer, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))))), brand && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('ID', 'ID')), /*#__PURE__*/_react.default.createElement("input", {
    value: brand === null || brand === void 0 ? void 0 : brand.id,
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    value: (_ref = (_brandFormState$chang10 = brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang11 = brandFormState.changes) === null || _brandFormState$chang11 === void 0 ? void 0 : _brandFormState$chang11.name) !== null && _brandFormState$chang10 !== void 0 ? _brandFormState$chang10 : brand === null || brand === void 0 ? void 0 : brand.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    disabled: brandFormState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SLUG', 'Slug')), /*#__PURE__*/_react.default.createElement("input", {
    name: "slug",
    placeholder: t('WRITE_A_SLUG', 'Write a slug'),
    value: (_ref2 = (_brandFormState$chang12 = brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang13 = brandFormState.changes) === null || _brandFormState$chang13 === void 0 ? void 0 : _brandFormState$chang13.slug) !== null && _brandFormState$chang12 !== void 0 ? _brandFormState$chang12 : brand === null || brand === void 0 ? void 0 : brand.slug) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    disabled: brandFormState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (e.which === 32) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('RIBBON', 'Ribbon')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (brand === null || brand === void 0 ? void 0 : (_brand$ribbon2 = brand.ribbon) === null || _brand$ribbon2 === void 0 ? void 0 : _brand$ribbon2.enabled) || false,
    onChange: function onChange(val) {
      return handleChangeEnable(val);
    }
  })), (typeof (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang14 = brandFormState.changes) === null || _brandFormState$chang14 === void 0 ? void 0 : (_brandFormState$chang15 = _brandFormState$chang14.ribbon) === null || _brandFormState$chang15 === void 0 ? void 0 : _brandFormState$chang15.enabled) !== 'undefined' ? brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang16 = brandFormState.changes) === null || _brandFormState$chang16 === void 0 ? void 0 : (_brandFormState$chang17 = _brandFormState$chang16.ribbon) === null || _brandFormState$chang17 === void 0 ? void 0 : _brandFormState$chang17.enabled : brand === null || brand === void 0 ? void 0 : (_brand$ribbon3 = brand.ribbon) === null || _brand$ribbon3 === void 0 ? void 0 : _brand$ribbon3.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TEXT', 'Text')), /*#__PURE__*/_react.default.createElement("input", {
    name: "text",
    placeholder: t('TEXT', 'Text'),
    value: (_brandFormState$chang18 = brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang19 = brandFormState.changes) === null || _brandFormState$chang19 === void 0 ? void 0 : (_brandFormState$chang20 = _brandFormState$chang19.ribbon) === null || _brandFormState$chang20 === void 0 ? void 0 : _brandFormState$chang20.text) !== null && _brandFormState$chang18 !== void 0 ? _brandFormState$chang18 : brand === null || brand === void 0 ? void 0 : (_brand$ribbon4 = brand.ribbon) === null || _brand$ribbon4 === void 0 ? void 0 : _brand$ribbon4.text,
    onChange: function onChange(e) {
      return handleChangeRibbon({
        text: e.target.value
      });
    },
    disabled: brandFormState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ColorShapeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ColorWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('COLOR', 'Color')), /*#__PURE__*/_react.default.createElement(_Shared.ColorPicker, {
    defaultColor: (_brandFormState$chang21 = brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang22 = brandFormState.changes) === null || _brandFormState$chang22 === void 0 ? void 0 : (_brandFormState$chang23 = _brandFormState$chang22.ribbon) === null || _brandFormState$chang23 === void 0 ? void 0 : _brandFormState$chang23.color) !== null && _brandFormState$chang21 !== void 0 ? _brandFormState$chang21 : brand === null || brand === void 0 ? void 0 : (_brand$ribbon5 = brand.ribbon) === null || _brand$ribbon5 === void 0 ? void 0 : _brand$ribbon5.color,
    onChangeColor: function onChangeColor(color) {
      return handleChangeRibbon({
        color: color
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ShapeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('SHAPE', 'Shape')), /*#__PURE__*/_react.default.createElement(_styles2.ShapeContentWrapper, null, _utils.shape && Object.keys(_utils.shape).map(function (key, i) {
    var _brandFormState$chang24, _brandFormState$chang25, _brandFormState$chang26, _brandFormState$chang27, _brand$ribbon6, _brandFormState$chang28, _brandFormState$chang29, _brandFormState$chang30, _brandFormState$chang31, _brand$ribbon7;

    return /*#__PURE__*/_react.default.createElement(_styles2.ShapeBoxWrapper, {
      key: i,
      shapeRect: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      round: _utils.shape[key] === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape),
      active: brandFormState !== null && brandFormState !== void 0 && (_brandFormState$chang24 = brandFormState.changes) !== null && _brandFormState$chang24 !== void 0 && (_brandFormState$chang25 = _brandFormState$chang24.ribbon) !== null && _brandFormState$chang25 !== void 0 && _brandFormState$chang25.shape ? (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang26 = brandFormState.changes) === null || _brandFormState$chang26 === void 0 ? void 0 : (_brandFormState$chang27 = _brandFormState$chang26.ribbon) === null || _brandFormState$chang27 === void 0 ? void 0 : _brandFormState$chang27.shape) === _utils.shape[key] : (brand === null || brand === void 0 ? void 0 : (_brand$ribbon6 = brand.ribbon) === null || _brand$ribbon6 === void 0 ? void 0 : _brand$ribbon6.shape) === _utils.shape[key],
      onClick: function onClick() {
        return handleChangeRibbon({
          shape: _utils.shape[key]
        });
      }
    }, /*#__PURE__*/_react.default.createElement("div", null), (brandFormState !== null && brandFormState !== void 0 && (_brandFormState$chang28 = brandFormState.changes) !== null && _brandFormState$chang28 !== void 0 && (_brandFormState$chang29 = _brandFormState$chang28.ribbon) !== null && _brandFormState$chang29 !== void 0 && _brandFormState$chang29.shape ? (brandFormState === null || brandFormState === void 0 ? void 0 : (_brandFormState$chang30 = brandFormState.changes) === null || _brandFormState$chang30 === void 0 ? void 0 : (_brandFormState$chang31 = _brandFormState$chang30.ribbon) === null || _brandFormState$chang31 === void 0 ? void 0 : _brandFormState$chang31.shape) === _utils.shape[key] : (brand === null || brand === void 0 ? void 0 : (_brand$ribbon7 = brand.ribbon) === null || _brand$ribbon7 === void 0 ? void 0 : _brand$ribbon7.shape) === _utils.shape[key]) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null));
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

var BusinessBrandGENDetail = function BusinessBrandGENDetail(props) {
  var businessBrandGENDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandGENDetailUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrandGENDetail, businessBrandGENDetailProps);
};

exports.BusinessBrandGENDetail = BusinessBrandGENDetail;