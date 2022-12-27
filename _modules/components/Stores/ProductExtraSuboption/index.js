"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraSuboption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _utils = require("../../../utils");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _reactHookForm = require("react-hook-form");
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
var ProductExtraSuboption = function ProductExtraSuboption(props) {
  var _theme$images$icons, _changesState$result, _changesState$result2, _changesState$changes, _changesState$changes2, _settingChangeState$c, _settingChangeState$c2, _optionState$option, _settingChangeState$c3, _settingChangeState$c4, _optionState$option2;
  var subOption = props.subOption,
    optionState = props.optionState,
    editSubOptionId = props.editSubOptionId,
    settingChangeState = props.settingChangeState,
    changesState = props.changesState,
    setSelectedSubOptionId = props.setSelectedSubOptionId,
    openModal = props.openModal,
    setOpenModal = props.setOpenModal,
    handleChangeDefaultSuboption = props.handleChangeDefaultSuboption,
    handleDeteteSubOption = props.handleDeteteSubOption,
    handleUpdateSubOption = props.handleUpdateSubOption,
    isLastSubOption = props.isLastSubOption,
    dragoverSubOptionId = props.dragoverSubOptionId,
    isSubOptionsBottom = props.isSubOptionsBottom,
    handleDragStart = props.handleDragStart,
    hanldeDragOver = props.hanldeDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors,
    control = _useForm.control;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    timer = _useState2[0],
    setTimer = _useState2[1];
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
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    formState = _useState10[0],
    setFormState = _useState10[1];
  var handleClickSubOptionImage = function handleClickSubOptionImage(id) {
    document.getElementById(id).click();
  };
  var handleSubOptionFiles = function handleSubOptionFiles(files, subOptionId) {
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
          open: true,
          id: subOptionId
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };
  var handleDeteteClick = function handleDeteteClick(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteSubOption(id);
      }
    });
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      image: croppedImg
    }));
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var onSubmit = function onSubmit() {
    handleUpdateSubOption(_objectSpread({
      id: subOption.id
    }, formState));
  };
  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (!Object.keys(formState).length) return;
    clearTimeout(timer);
    var _timer = setTimeout(function () {
      onSubmit();
    }, 500);
    setTimer(_timer);
  }, [formState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.SubOptionContainer, {
    onSubmit: handleSubmit(onSubmit),
    isDragOver: dragoverSubOptionId === subOption.id,
    isBorderBottom: isSubOptionsBottom && isLastSubOption,
    onDragOver: function onDragOver(e) {
      return hanldeDragOver(e, subOption, isLastSubOption);
    },
    onDrop: function onDrop(e) {
      return handleDrop(e, subOption);
    },
    onDragEnd: handleDragEnd,
    className: "draggable-suboption"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LeftSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
    alt: "six dots",
    draggable: true,
    onDragStart: function onDragStart(e) {
      return handleDragStart(e, subOption);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SubOptionImage, {
    onClick: function onClick() {
      return handleClickSubOptionImage("suboption_image_".concat(subOption.id));
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleSubOptionFiles(files, subOption.id);
    },
    childId: "suboption_image_".concat(subOption.id),
    accept: "image/png, image/jpeg, image/jpg",
    disabled: optionState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleSubOptionFiles(dataTransfer.files, subOption.id);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: optionState.loading
  }, changesState !== null && changesState !== void 0 && (_changesState$result = changesState.result) !== null && _changesState$result !== void 0 && _changesState$result.image && editSubOptionId === subOption.id ? /*#__PURE__*/_react.default.createElement("img", {
    src: changesState === null || changesState === void 0 ? void 0 : (_changesState$result2 = changesState.result) === null || _changesState$result2 === void 0 ? void 0 : _changesState$result2.image,
    alt: "sub option image",
    loading: "lazy"
  }) : changesState !== null && changesState !== void 0 && (_changesState$changes = changesState.changes) !== null && _changesState$changes !== void 0 && _changesState$changes.image && editSubOptionId === subOption.id ? /*#__PURE__*/_react.default.createElement("img", {
    src: changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.image,
    alt: "sub option image",
    loading: "lazy"
  }) : (subOption === null || subOption === void 0 ? void 0 : subOption.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: subOption === null || subOption === void 0 ? void 0 : subOption.image,
    alt: "sub option image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "name",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "name",
        autoComplete: "off",
        value: value,
        onChange: function onChange(e) {
          _onChange(e.target.vaue);
          handleChangeInput(e);
        }
      });
    },
    defaultValue: subOption.name,
    rules: {
      required: t('NAME_REQUIRED', 'The name is required.')
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.RightSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "price",
    control: control,
    render: function render(_ref2) {
      var _onChange2 = _ref2.onChange,
        value = _ref2.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "price",
        autoComplete: "off",
        value: value,
        onChange: function onChange(e) {
          _onChange2(e.target.value);
          handleChangeInput(e);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        }
      });
    },
    defaultValue: subOption === null || subOption === void 0 ? void 0 : subOption.price,
    rules: {
      required: t('PRICE_REQUIRED', 'The price is required.')
    }
  })), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c = settingChangeState.changes) === null || _settingChangeState$c === void 0 ? void 0 : _settingChangeState$c.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c2 = settingChangeState.changes) === null || _settingChangeState$c2 === void 0 ? void 0 : _settingChangeState$c2.with_half_option : optionState === null || optionState === void 0 ? void 0 : (_optionState$option = optionState.option) === null || _optionState$option === void 0 ? void 0 : _optionState$option.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "half_price",
    control: control,
    render: function render(_ref3) {
      var _onChange3 = _ref3.onChange,
        value = _ref3.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "half_price",
        value: value,
        onChange: function onChange(e) {
          _onChange3(e.target.value);
          handleChangeInput(e);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        }
      });
    },
    defaultValue: subOption === null || subOption === void 0 ? void 0 : subOption.half_price
  })), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c3 = settingChangeState.changes) === null || _settingChangeState$c3 === void 0 ? void 0 : _settingChangeState$c3.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c4 = settingChangeState.changes) === null || _settingChangeState$c4 === void 0 ? void 0 : _settingChangeState$c4.allow_suboption_quantity : optionState === null || optionState === void 0 ? void 0 : (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 ? void 0 : _optionState$option2.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "half_price",
    control: control,
    render: function render(_ref4) {
      var _onChange4 = _ref4.onChange,
        value = _ref4.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "max",
        value: value,
        onChange: function onChange(e) {
          _onChange4(e.target.value);
          handleChangeInput(e);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        }
      });
    },
    defaultValue: subOption === null || subOption === void 0 ? void 0 : subOption.max
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    maxHeight: true,
    disabled: optionState === null || optionState === void 0 ? void 0 : optionState.loading
  }, /*#__PURE__*/_react.default.createElement("div", {
    name: "preselected",
    className: subOption !== null && subOption !== void 0 && subOption.preselected ? 'checked default' : 'default'
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "radio",
    onClick: function onClick(e) {
      return handleChangeDefaultSuboption(subOption.id);
    }
  }, subOption !== null && subOption !== void 0 && subOption.preselected ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: subOption === null || subOption === void 0 ? void 0 : subOption.enabled,
    onChange: function onChange(enabled) {
      return setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        enabled: enabled
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      setSelectedSubOptionId(subOption === null || subOption === void 0 ? void 0 : subOption.id);
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        subOptionMetaFields: true
      }));
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeteteClick(subOption.id);
    }
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: false
      }));
    },
    onAccept: function onAccept() {
      return setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: false
      }));
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "600px",
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
    onClose: function onClose() {
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
exports.ProductExtraSuboption = ProductExtraSuboption;