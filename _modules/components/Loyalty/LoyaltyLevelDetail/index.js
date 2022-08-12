"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoyaltyLevelDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _reactHookForm = require("react-hook-form");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _utils = require("../../../utils");

var _styles2 = require("./styles");

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

var LoyaltyLevelDetailUI = function LoyaltyLevelDetailUI(props) {
  var _formState$changes$na, _formState$changes4, _formState$changes5, _formState$changes6, _formState$changes7, _ref, _formState$changes$na2, _formState$changes8, _ref2, _formState$changes$ac, _formState$changes9, _ref3, _formState$changes$mi, _formState$changes10, _ref4, _formState$changes$ma, _formState$changes11;

  var level = props.level,
      handleDeleteLevel = props.handleDeleteLevel,
      formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleChangeItem = props.handleChangeItem,
      addLevel = props.addLevel,
      updateLevel = props.updateLevel,
      handlechangeImage = props.handlechangeImage;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit;

  var _useState = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirm = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      expiration = _useState6[0],
      setExpiration = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      maxValue = _useState8[0],
      setMaxValue = _useState8[1];

  var _useState9 = (0, _react.useState)({
    name: null,
    data: null,
    open: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      cropState = _useState10[0],
      setCropState = _useState10[1];

  var imageRef = (0, _react.useRef)();

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onClickDeleteLevel = function onClickDeleteLevel() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('LEVEL', 'Level')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteLevel();
      }
    });
  };

  var handleChangeMaxValue = function handleChangeMaxValue(e) {
    var value = e.target.value;
    setMaxValue(value);
    if (value) handleChangeItem({
      expire_after_minutes: value * 24 * 60
    });else handleChangeItem({
      expire_after_minutes: null
    });
  };

  var handleChangeExpirtation = function handleChangeExpirtation(index) {
    if (index) {
      setExpiration(index);
      return;
    }

    setExpiration(null);
    handleChangeItem({
      expire_after_minutes: null
    });
    setMaxValue('');
  };

  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };

  var onSubmit = function onSubmit() {
    var _formState$changes, _formState$changes2, _formState$changes3;

    if ((formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'name')
      });
      return;
    }

    if ((formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.accumulation_rate) === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'accumulation_rate')
      });
      return;
    }

    if ((formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.minimum_points) === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'points_required')
      });
      return;
    }

    if (level !== null && level !== void 0 && level.id) updateLevel();else addLevel();
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
      };

      reader.onerror = function (error) {
        return console.log(error);
      };

      handlechangeImage(files[0]);
    }
  };

  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  (0, _react.useEffect)(function () {
    if (level !== null && level !== void 0 && level.expire_after_minutes) {
      setMaxValue((level === null || level === void 0 ? void 0 : level.expire_after_minutes) / (24 * 60));
      setExpiration('days');
    } else {
      setExpiration(null);
      setMaxValue('');
    }
  }, [level === null || level === void 0 ? void 0 : level.expire_after_minutes]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.LevelName, null, level !== null && level !== void 0 && level.id ? (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : level === null || level === void 0 ? void 0 : level.name : t('NEW_LEVEL', 'New level'))), (level === null || level === void 0 ? void 0 : level.id) && /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: onClickDeleteLevel
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_styles2.Content, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.LoyaltyImage, {
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
  }, !((_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.image) || formState.error ? (level === null || level === void 0 ? void 0 : level.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(level === null || level === void 0 ? void 0 : level.image, 'h_200,c_limit'),
    alt: "tag image",
    loading: "lazy"
  }) : (formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.image,
    alt: "tag image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    placeholder: t('Name', 'name'),
    value: (_ref = (_formState$changes$na2 = formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.name) !== null && _formState$changes$na2 !== void 0 ? _formState$changes$na2 : level === null || level === void 0 ? void 0 : level.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('ACCUMULATION_RATE', 'Accumulation rate')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "accumulation_rate",
    placeholder: t('ACCUMULATION_RATE', 'Accumulation rate'),
    value: (_ref2 = (_formState$changes$ac = formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.accumulation_rate) !== null && _formState$changes$ac !== void 0 ? _formState$changes$ac : level === null || level === void 0 ? void 0 : level.accumulation_rate) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('POINTS_REQUIRED', 'Points required')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "minimum_points",
    placeholder: t('POINTS_REQUIRED', 'Points required'),
    value: (_ref3 = (_formState$changes$mi = formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.minimum_points) !== null && _formState$changes$mi !== void 0 ? _formState$changes$mi : level === null || level === void 0 ? void 0 : level.minimum_points) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('MAXIMUM_OF_POINTS', 'Maximum of points')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "maximum_accumulation_fixed",
    placeholder: t('MAXIMUM_OF_POINTS', 'Maximum of points'),
    value: (_ref4 = (_formState$changes$ma = formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.maximum_accumulation_fixed) !== null && _formState$changes$ma !== void 0 ? _formState$changes$ma : level === null || level === void 0 ? void 0 : level.maximum_accumulation_fixed) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ExPirationWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXPIRATION', 'Expiration')), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleChangeExpirtation(null);
    }
  }, !expiration ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('NO', 'No'))), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleChangeExpirtation('days');
    }
  }, expiration ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('EXPIRATION_IN_DAYS', 'Expiration in days'))), expiration && /*#__PURE__*/_react.default.createElement(_styles2.OptionInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "0 ".concat(t('DAYS', 'days')),
    name: "expire_after_minutes",
    value: maxValue,
    onChange: handleChangeMaxValue,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, level !== null && level !== void 0 && level.id ? ('SAVE', 'Save') : ('ADD', 'Add'))))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('LEVEL', 'Level'),
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

var LoyaltyLevelDetail = function LoyaltyLevelDetail(props) {
  var loyaltyLevelDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LoyaltyLevelDetailUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.LoyaltyLevelDetail, loyaltyLevelDetailProps);
};

exports.LoyaltyLevelDetail = LoyaltyLevelDetail;