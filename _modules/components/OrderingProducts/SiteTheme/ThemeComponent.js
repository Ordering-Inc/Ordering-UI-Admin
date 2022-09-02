"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _ThemeOption = require("./ThemeOption");

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));

var _utils = require("../../../utils");

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

var ThemeComponent = function ThemeComponent(props) {
  var name = props.name,
      valueObject = props.valueObject,
      componentObject = props.componentObject,
      path = props.path,
      themeValues = props.themeValues,
      setThemeValues = props.setThemeValues,
      handleAddThemeGallery = props.handleAddThemeGallery;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var imageRef = (0, _react.useRef)(null);

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

  var getTitle = function getTitle(key) {
    return t(key.toUpperCase, key.replace(/_/g, ' '));
  };

  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');

    while (stack.length > 1) {
      object = object[stack.shift()];
    }

    object[stack.shift()] = newValue;
  };

  var handleChangeValue = function handleChangeValue(value) {
    var _themeValues = _objectSpread({}, themeValues);

    updateObject(_themeValues, value, path);
    setThemeValues(_themeValues);
  };

  var handleClickImage = function handleClickImage() {
    imageRef.current.click();
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
          name: 'photo',
          data: reader.result,
          open: true
        });
      };

      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };

  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    setCropState({
      name: null,
      data: null,
      open: false
    }); // handleAddThemeGallery(croppedImg)

    handleChangeValue(croppedImg);
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.ComponentContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ComponentHeader, null, (componentObject === null || componentObject === void 0 ? void 0 : componentObject.value_type) === 'boolean' && /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: valueObject,
    onChange: function onChange(e) {
      return handleChangeValue(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("h4", null, getTitle(name))), name === 'image' && (componentObject === null || componentObject === void 0 ? void 0 : componentObject.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_styles2.ComponentImage, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleFiles(files);
    },
    childRef: function childRef(e) {
      imageRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg"
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg"
  }, valueObject && /*#__PURE__*/_react.default.createElement("img", {
    src: valueObject,
    alt: "image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop'))))))), Object.keys(componentObject).filter(function (option) {
    return option !== 'components' && option !== 'value_type';
  }).map(function (option) {
    var optionObject = componentObject[option];
    return /*#__PURE__*/_react.default.createElement(_ThemeOption.ThemeOption, {
      key: option,
      name: option,
      optionObject: optionObject,
      valueObject: valueObject[option],
      path: path + '.' + option,
      themeValues: themeValues,
      setThemeValues: setThemeValues
    });
  }), (componentObject === null || componentObject === void 0 ? void 0 : componentObject.components) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(componentObject === null || componentObject === void 0 ? void 0 : componentObject.components).filter(function (subComponent) {
    return subComponent !== 'value_type';
  }).map(function (subComponent) {
    var subComponentObject = componentObject === null || componentObject === void 0 ? void 0 : componentObject.components[subComponent];
    return /*#__PURE__*/_react.default.createElement(ThemeComponent, {
      key: subComponent,
      name: subComponent,
      componentObject: subComponentObject,
      valueObject: valueObject === null || valueObject === void 0 ? void 0 : valueObject.components[subComponent],
      path: path + '.components.' + subComponent,
      themeValues: themeValues,
      setThemeValues: setThemeValues
    });
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING_PRODUCTS', 'Ordering products'),
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

exports.ThemeComponent = ThemeComponent;