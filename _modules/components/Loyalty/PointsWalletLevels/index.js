"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletLevels = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../../styles");

var _reactHookForm = require("react-hook-form");

var _Shared = require("../../Shared");

var _utils = require("../../../utils");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles2 = require("./styles");

var _SingleLoyaltyLevel = require("../SingleLoyaltyLevel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PointsWalletLevelsUI = function PointsWalletLevelsUI(props) {
  var _levelList$levels, _formState$changes, _formState$changes2, _formState$changes3, _formState$changes4, _formState$changes5;

  var formState = props.formState,
      handleUpdateAddClick = props.handleUpdateAddClick,
      handleChangeInput = props.handleChangeInput,
      levelList = props.levelList,
      handleChangeItem = props.handleChangeItem,
      handleDeleteLevelList = props.handleDeleteLevelList,
      handleUpdateLevelList = props.handleUpdateLevelList;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      addSubOption = _useState2[0],
      setAddSubOption = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    name: null,
    data: null,
    open: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      cropState = _useState6[0],
      setCropState = _useState6[1];

  var containerRef = (0, _react.useRef)(null);
  var imageRef = (0, _react.useRef)(null);

  var onSubmit = function onSubmit() {
    if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0) {
      handleUpdateAddClick();
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

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
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
          name: 'image',
          data: reader.result,
          open: true
        });
        handleChangeItem({
          image: reader.result
        });
      };

      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };

  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);

  var closeLevelAddForm = function closeLevelAddForm(e) {
    var _containerRef$current;

    var outsideDropdown = !((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target));
    if (outsideDropdown && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 && !e.target.closest('.sub-option')) setAddSubOption(false);
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', closeLevelAddForm);
    return function () {
      return document.removeEventListener('click', closeLevelAddForm);
    };
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0) setAddSubOption(false);
  }, [formState === null || formState === void 0 ? void 0 : formState.changes]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('LEVELS', 'Levels')), /*#__PURE__*/_react.default.createElement(_styles2.LevelContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LevelWrapper, {
    isTitle: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.OriginalImageWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('IMAGE', 'Image'))), /*#__PURE__*/_react.default.createElement(_styles2.LevelNameWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('NAME', 'Name'))), /*#__PURE__*/_react.default.createElement(_styles2.LastWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('IN_THE_LAST', 'In the last'))), /*#__PURE__*/_react.default.createElement(_styles2.PointsWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('POINTS', 'Points'))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null)), levelList !== null && levelList !== void 0 && levelList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleLoyaltyLevel.SingleLoyaltyLevel, {
      key: i,
      isSkeleton: true
    });
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, levelList === null || levelList === void 0 ? void 0 : (_levelList$levels = levelList.levels) === null || _levelList$levels === void 0 ? void 0 : _levelList$levels.map(function (level, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleLoyaltyLevel.SingleLoyaltyLevel, {
      key: i,
      level: level,
      handleDeleteLevelList: handleDeleteLevelList,
      handleUpdateLevelList: handleUpdateLevelList
    });
  })), addSubOption ? /*#__PURE__*/_react.default.createElement(_styles2.LevelWrapper, {
    onSubmit: handleSubmit(onSubmit),
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, {
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
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.image,
    alt: "header image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))), /*#__PURE__*/_react.default.createElement(_styles2.LevelNameWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    autoComplete: "off",
    placeholder: t('NAME', 'name'),
    defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.name) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.LastWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "accumulation_rate",
    autoComplete: "off",
    defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.accumulation_rate) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: "0 days",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.PointsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "minimum_points",
    autoComplete: "off",
    defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.minimum_points) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    placeholder: "0 points",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, null)))) : /*#__PURE__*/_react.default.createElement(_styles2.AddSubOption, {
    onClick: function onClick() {
      return setAddSubOption(true);
    },
    className: "sub-option"
  }, t('ADD_SUBOPTION', 'Add suboption'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('LEVELS', 'Levels'),
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

var PointsWalletLevels = function PointsWalletLevels(props) {
  var pointsWalletLevelsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PointsWalletLevelsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PointsWalletLevels, pointsWalletLevelsProps);
};

exports.PointsWalletLevels = PointsWalletLevels;