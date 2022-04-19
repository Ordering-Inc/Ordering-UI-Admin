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
  var _extraState$extra, _extraState$extra2;

  var open = props.open,
      onClose = props.onClose,
      editErrors = props.editErrors,
      cleanEditErrors = props.cleanEditErrors,
      extraState = props.extraState,
      changesState = props.changesState,
      handleChangeImage = props.handleChangeImage,
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
      handleClickUpdateOption = props.handleClickUpdateOption,
      curOption = props.curOption,
      openModal = props.openModal,
      setCurOption = props.setCurOption,
      setOpenModal = props.setOpenModal,
      handleOpenModal = props.handleOpenModal,
      handleChangeExtraName = props.handleChangeExtraName;
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

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

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

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isMaxError = _useState8[0],
      setIsMaxError = _useState8[1];

  var closeAlert = function closeAlert() {
    cleanEditErrors();
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleChangeOptionInput = function handleChangeOptionInput(e, option, min) {
    var regexp = /^[0-9.\b]+$/;

    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        var _changesState$changes, _changesState$changes2;

        var max = changesState !== null && changesState !== void 0 && (_changesState$changes = changesState.changes) !== null && _changesState$changes !== void 0 && _changesState$changes.max ? changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.max : option === null || option === void 0 ? void 0 : option.max;
        if (parseInt(e.target.value) > parseInt(max)) return;
      } else {
        var _option$suboptions, _option$suboptions$fi, _e$target, _changesState$changes3, _changesState$changes4;

        if ((option === null || option === void 0 ? void 0 : (_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : (_option$suboptions$fi = _option$suboptions.filter(function (suboption) {
          return suboption === null || suboption === void 0 ? void 0 : suboption.preselected;
        })) === null || _option$suboptions$fi === void 0 ? void 0 : _option$suboptions$fi.length) > parseInt(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value)) {
          setIsMaxError(true);
          showToast(_orderingComponentsAdmin.ToastType.Error, t('ERROR_MATCH_MAX_DEFAULT_SUBOPTIONS', 'Max default suboptions length is less than preselected suboptions'));
          return;
        }

        setIsMaxError(false);

        var _min = changesState !== null && changesState !== void 0 && (_changesState$changes3 = changesState.changes) !== null && _changesState$changes3 !== void 0 && _changesState$changes3.min ? changesState === null || changesState === void 0 ? void 0 : (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.min : option === null || option === void 0 ? void 0 : option.min;

        if (parseInt(e.target.value) < parseInt(_min)) return;
      }

      handleChangeInput(e, option.id);
    }
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

      handleChangeImage(files[0], optionId);
    }
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
  (0, _react.useEffect)(function () {
    if (Object.keys(editErrors).length) {
      var errorContent = [];
      if (editErrors !== null && editErrors !== void 0 && editErrors.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'));
      if (editErrors !== null && editErrors !== void 0 && editErrors.min) errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'));
      if (editErrors !== null && editErrors !== void 0 && editErrors.max) errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'));

      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        });
      }
    }
  }, [editErrors]);

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

  var timeout = null;

  var onChangeExtraName = function onChangeExtraName(e) {
    e.persist();
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      handleChangeExtraName(e, extraState.extra.id);
    }, 500);
  };

  (0, _react.useEffect)(function () {
    if (!(addChangesState !== null && addChangesState !== void 0 && addChangesState.name) && (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min) === 1 && (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max) === 1) {
      setValue('name', (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.name) || '');
      setValue('min', (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min) || '');
      setValue('max', (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max) || '');
    }
  }, [addChangesState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, {
    id: "extra_options"
  }, /*#__PURE__*/_react.default.createElement(_styles2.OptionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('NAME', ''),
    defaultValue: extraState.extra.name,
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
  }, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_styles2.ArrowWrpper, null)), ((_extraState$extra = extraState.extra) === null || _extraState$extra === void 0 ? void 0 : _extraState$extra.options) && ((_extraState$extra2 = extraState.extra) === null || _extraState$extra2 === void 0 ? void 0 : _extraState$extra2.options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
      key: option.id,
      active: option.id === (curOption === null || curOption === void 0 ? void 0 : curOption.id),
      onClick: function onClick() {
        return handleOpenModal(option, 'edit');
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.OptionNameContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionImage, null, option !== null && option !== void 0 && option.image ? /*#__PURE__*/_react.default.createElement("img", {
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
    handleChangeNumberInput: handleChangeOptionInput,
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
    isMaxError: isMaxError,
    handleClickUpdateOption: handleClickUpdateOption
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
  })));
};

var ProductExtraOptions = function ProductExtraOptions(props) {
  var productExtraOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtraOptionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtraOptions, productExtraOptionsProps);
};

exports.ProductExtraOptions = ProductExtraOptions;