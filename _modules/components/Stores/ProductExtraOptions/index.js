"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _ProductExtraMetaFields = require("../ProductExtraMetaFields");
var _ProductExtraOptionDetails = require("../ProductExtraOptionDetails");
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
var ProductExtraOptionsUI = function ProductExtraOptionsUI(props) {
  var _extraState$extra, _extraState$extra3, _extraState$extra4, _extraState$extra5;
  var open = props.open,
    onClose = props.onClose,
    extraState = props.extraState,
    changesState = props.changesState,
    handleChangeInput = props.handleChangeInput,
    handleChangeOptionEnable = props.handleChangeOptionEnable,
    handleChangeAddOption = props.handleChangeAddOption,
    addChangesState = props.addChangesState,
    handleAddOption = props.handleAddOption,
    business = props.business,
    editOptionId = props.editOptionId,
    handleDeleteExtra = props.handleDeleteExtra,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleSucccessDeleteOption = props.handleSucccessDeleteOption,
    curOption = props.curOption,
    openModal = props.openModal,
    setCurOption = props.setCurOption,
    setOpenModal = props.setOpenModal,
    handleOpenModal = props.handleOpenModal,
    handleChangeExtraName = props.handleChangeExtraName,
    handleChangeItem = props.handleChangeItem,
    dragoverOptionId = props.dragoverOptionId,
    isOptionsBottom = props.isOptionsBottom,
    handleDragStart = props.handleDragStart,
    hanldeDragOver = props.hanldeDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useForm = (0, _reactHookForm.useForm)({
      defaultValues: addChangesState
    }),
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors,
    setValue = _useForm.setValue;
  var _useState = (0, _react.useState)(((_extraState$extra = extraState.extra) === null || _extraState$extra === void 0 ? void 0 : _extraState$extra.name) || ''),
    _useState2 = _slicedToArray(_useState, 2),
    extraName = _useState2[0],
    setExtraName = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    timer = _useState4[0],
    setTimer = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMenuOpen = _useState6[0],
    setIsMenuOpen = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    confirm = _useState10[0],
    setConfirm = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isMaxError = _useState12[0],
    setIsMaxError = _useState12[1];
  var _useState13 = (0, _react.useState)({
      name: null,
      data: null,
      open: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    cropState = _useState14[0],
    setCropState = _useState14[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangeAddOptionInput = function handleChangeAddOptionInput(e, min) {
    if (min) {
      if (parseInt(e.target.value) > parseInt(addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max)) return;
    } else {
      if (parseInt(e.target.value) < parseInt(addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min)) return;
    }
    handleChangeAddOption(e);
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
          name: 'image',
          data: reader.result,
          open: true,
          id: optionId
        });
      };
      reader.onerror = function (error) {
        return console.log(error);
      };
    }
  };
  var handleChangePhoto = function handleChangePhoto(croppedImg) {
    handleChangeItem(_defineProperty({}, cropState === null || cropState === void 0 ? void 0 : cropState.name, croppedImg), cropState === null || cropState === void 0 ? void 0 : cropState.id);
    setCropState({
      name: null,
      data: null,
      open: false
    });
  };
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      onClose();
    }
    setIsMenuOpen(value);
  };
  var onSubmit = function onSubmit() {
    handleAddOption();
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
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('extra_options').style.width = '100%';
      } else {
        document.getElementById('extra_options').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  var handleDeleteExtraClick = function handleDeleteExtraClick() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_EXTRA', 'Are you sure that you want to delete this extra?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteExtra();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var onChangeExtraName = function onChangeExtraName(e) {
    e.persist();
    clearTimeout(timer);
    setExtraName(e.target.value);
    var _timer = setTimeout(function () {
      handleChangeExtraName(e, extraState.extra.id);
    }, 750);
    setTimer(_timer);
  };
  (0, _react.useEffect)(function () {
    if (!(addChangesState !== null && addChangesState !== void 0 && addChangesState.name) && (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min) === 1 && (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max) === 1) {
      setValue('name', (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.name) || '');
      setValue('min', (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min) || '');
      setValue('max', (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max) || '');
    }
  }, [addChangesState]);
  (0, _react.useEffect)(function () {
    var _extraState$extra2;
    setExtraName((_extraState$extra2 = extraState.extra) === null || _extraState$extra2 === void 0 ? void 0 : _extraState$extra2.name);
  }, [(_extraState$extra3 = extraState.extra) === null || _extraState$extra3 === void 0 ? void 0 : _extraState$extra3.name]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, {
    id: "extra_options"
  }, /*#__PURE__*/_react.default.createElement(_styles2.OptionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('NAME', ''),
    value: extraName,
    onChange: function onChange(e) {
      return onChangeExtraName(e);
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        metaField: true
      }));
    }
  }, t('CUSTOM_FIELDS', 'Custom Fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteExtraClick();
    }
  }, t('DELETE', 'Delete')))), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.OptionsList, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.OptionNameContainer, {
    isHeader: true
  }, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles2.MinimumPurchase, {
    isHeader: true
  }, t('MINIMUM', 'Min')), /*#__PURE__*/_react.default.createElement(_styles2.MaxPurchase, {
    isHeader: true
  }, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_styles2.ArrowWrpper, null)), ((_extraState$extra4 = extraState.extra) === null || _extraState$extra4 === void 0 ? void 0 : _extraState$extra4.options) && ((_extraState$extra5 = extraState.extra) === null || _extraState$extra5 === void 0 ? void 0 : _extraState$extra5.options.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (option, index) {
    var _extraState$extra6, _theme$images$icons;
    var isLastOption = index === ((_extraState$extra6 = extraState.extra) === null || _extraState$extra6 === void 0 ? void 0 : _extraState$extra6.options.length) - 1;
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
      key: option.id,
      active: option.id === (curOption === null || curOption === void 0 ? void 0 : curOption.id),
      onClick: function onClick() {
        return handleOpenModal(option, 'edit');
      },
      isDragOver: dragoverOptionId === option.id,
      isBorderBottom: isOptionsBottom && isLastOption,
      onDragOver: function onDragOver(e) {
        return hanldeDragOver(e, option, isLastOption);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, option);
      },
      onDragEnd: handleDragEnd,
      className: "draggable-option"
    }, /*#__PURE__*/_react.default.createElement(_styles2.OptionNameContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: true,
      onDragStart: function onDragStart(e) {
        return handleDragStart(e, option);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.OptionImage, null, option !== null && option !== void 0 && option.image ? /*#__PURE__*/_react.default.createElement("img", {
      src: option === null || option === void 0 ? void 0 : option.image,
      alt: "option image",
      loading: "lazy"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null)), /*#__PURE__*/_react.default.createElement("span", null, option.name)), /*#__PURE__*/_react.default.createElement(_styles2.MinimumPurchase, null, option === null || option === void 0 ? void 0 : option.min), /*#__PURE__*/_react.default.createElement(_styles2.MaxPurchase, null, option === null || option === void 0 ? void 0 : option.max), /*#__PURE__*/_react.default.createElement(_styles2.ArrowWrpper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.AddOptionForm, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.OptionNameContainer, null, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "name",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement("input", {
        name: "name",
        placeholder: t('WRITE_A_NAME', 'Write a name'),
        value: value,
        onChange: function onChange(e) {
          _onChange(e);
          handleChangeAddOption(e);
        },
        autoComplete: "off"
      });
    },
    rules: {
      required: t('NAME_REQUIRED', 'The name is required.')
    }
  })), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "min",
    control: control,
    render: function render(_ref2) {
      var _onChange2 = _ref2.onChange,
        value = _ref2.value;
      return /*#__PURE__*/_react.default.createElement("input", {
        name: "min",
        value: value,
        onChange: function onChange(e) {
          _onChange2(e);
          handleChangeAddOptionInput(e, true);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        },
        autoComplete: "off"
      });
    },
    rules: {
      required: t('MIN_PURCHASED_REQUIRED', 'The min is required.')
    }
  }), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "max",
    control: control,
    render: function render(_ref3) {
      var _onChange3 = _ref3.onChange,
        value = _ref3.value;
      return /*#__PURE__*/_react.default.createElement("input", {
        name: "max",
        value: value,
        onChange: function onChange(e) {
          _onChange3(e);
          handleChangeAddOptionInput(e, false);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        },
        autoComplete: "off"
      });
    },
    rules: {
      required: t('MAX_PURCHASED_REQUIRED', 'The max is required.')
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null)))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), (openModal === null || openModal === void 0 ? void 0 : openModal.edit) && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.edit,
    onClose: function onClose() {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        edit: false
      }));
      setCurOption(false);
      setIsMaxError(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptionDetails.ProductExtraOptionDetails, {
    business: business,
    extra: extraState.extra,
    option: curOption,
    optionChangesState: editOptionId === curOption.id ? changesState : {},
    handleOptionFiles: handleFiles,
    handleChangeOptionInput: handleChangeInput,
    handleChangeOptionEnable: handleChangeOptionEnable,
    onClose: function onClose() {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        edit: false
      }));
      setCurOption(false);
      setIsMaxError(false);
    },
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleSucccessDeleteOption: handleSucccessDeleteOption,
    isMaxError: isMaxError
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.metaField,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        metaField: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraMetaFields.ProductExtraMetaFields, {
    businessId: business.id,
    extraId: extraState.extra.id
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
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
    className: "ordering-image-crop"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ImageCrop, {
    photo: cropState === null || cropState === void 0 ? void 0 : cropState.data,
    handleChangePhoto: handleChangePhoto
  })));
};
var ProductExtraOptions = function ProductExtraOptions(props) {
  var productExtraOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtraOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtraOptions, productExtraOptionsProps);
};
exports.ProductExtraOptions = ProductExtraOptions;