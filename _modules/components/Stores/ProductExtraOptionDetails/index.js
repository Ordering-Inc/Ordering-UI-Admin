"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptionDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _styles = require("../../../styles");

var _FirstSelect = require("../../../styles/Select/FirstSelect");

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _utils = require("../../../utils");

var _Shared = require("../../Shared");

var _ProductExtraOptionMetaFields = require("../ProductExtraOptionMetaFields");

var _ProductExtraSubOptionMetaFields = require("../ProductExtraSubOptionMetaFields");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactHookForm = require("react-hook-form");

var _ProductExtraSuboption = require("../ProductExtraSuboption");

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

var ProductExtraOptionDetailsUI = function ProductExtraOptionDetailsUI(props) {
  var _optionChangesState$r, _optionChangesState$r2, _optionChangesState$c, _optionChangesState$c2, _optionState$option, _optionState$option2, _optionState$option4, _optionState$option5, _optionState$option6, _optionState$option8, _optionState$option9, _optionState$option10, _optionState$option11, _optionState$option12, _optionState$option13, _settingChangeState$c, _settingChangeState$c2, _optionState$option14, _settingChangeState$c3, _settingChangeState$c4, _optionState$option15, _optionState$option16, _optionState$option17, _changesState$result, _changesState$result2, _changesState$changes, _changesState$changes2, _optionState$option18, _optionState$option19, _changesState$changes3, _optionState$option20, _optionState$option21, _changesState$changes4, _settingChangeState$c5, _settingChangeState$c6, _optionState$option22, _optionState$option23, _optionState$option24, _changesState$changes5, _settingChangeState$c7, _settingChangeState$c8, _optionState$option25, _optionState$option26, _optionState$option27, _changesState$changes6;

  var optionState = props.optionState,
      optionChangesState = props.optionChangesState,
      handleOptionFiles = props.handleOptionFiles,
      handleChangeOptionInput = props.handleChangeOptionInput,
      handleChangeNumberInput = props.handleChangeNumberInput,
      handleChangeOptionEnable = props.handleChangeOptionEnable,
      changesState = props.changesState,
      editSubOptionId = props.editSubOptionId,
      handleChangeInput = props.handleChangeInput,
      handleChangeSubOptionImage = props.handleChangeSubOptionImage,
      handleChangeSubOptionEnable = props.handleChangeSubOptionEnable,
      handleDeteteSubOption = props.handleDeteteSubOption,
      handleOptionSetting = props.handleOptionSetting,
      settingChangeState = props.settingChangeState,
      conditionalOptions = props.conditionalOptions,
      conditionalSubOptions = props.conditionalSubOptions,
      conditionalOptionId = props.conditionalOptionId,
      conditionalSubOptionId = props.conditionalSubOptionId,
      handleChangeConditionalOption = props.handleChangeConditionalOption,
      handleChangeConditionalSubOption = props.handleChangeConditionalSubOption,
      handleChangeDefaultSuboption = props.handleChangeDefaultSuboption,
      handleUpdateSubOption = props.handleUpdateSubOption,
      business = props.business,
      extra = props.extra,
      handleAddOption = props.handleAddOption,
      handleDeteteOption = props.handleDeteteOption,
      isMaxError = props.isMaxError;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  var optionImageInputRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      openModal = _useState6[0],
      setOpenModal = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedSubOptionId = _useState8[0],
      setSelectedSubOptionId = _useState8[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isAddForm = _useState10[0],
      setIsAddForm = _useState10[1];

  var handleClickImage = function handleClickImage() {
    optionImageInputRef.current.click();
  };

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

      handleChangeSubOptionImage(files[0], subOptionId);
    }
  };

  var handleDeleteOption = function handleDeleteOption() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteOption();
      }
    });
  };

  var handleEnterAddSuboption = function handleEnterAddSuboption(e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      handleSubmit(handleAddOption)();
    }
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

  var closeAddForm = function closeAddForm(e) {
    var outsideDropdown = !e.target.closest('.add-product-option') && !e.target.closest('.add-option-btn');
    if (outsideDropdown && Object.keys(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0) setIsAddForm(false);
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', closeAddForm);
    return function () {
      return document.removeEventListener('click', closeAddForm);
    };
  }, [changesState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0) setIsAddForm(false);
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.changes]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_OPTION', 'Product option')), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "product_actions",
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        option: true
      }));
    }
  }, t('CUSTOM_FIELDS', 'Custom Fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteOption();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles2.OptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionImage, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleOptionFiles(files, optionState === null || optionState === void 0 ? void 0 : optionState.option.id);
    },
    childRef: function childRef(e) {
      optionImageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: optionState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleOptionFiles(dataTransfer.files, optionState === null || optionState === void 0 ? void 0 : optionState.option.id);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: optionState.loading
  }, optionChangesState !== null && optionChangesState !== void 0 && (_optionChangesState$r = optionChangesState.result) !== null && _optionChangesState$r !== void 0 && _optionChangesState$r.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: optionChangesState === null || optionChangesState === void 0 ? void 0 : (_optionChangesState$r2 = optionChangesState.result) === null || _optionChangesState$r2 === void 0 ? void 0 : _optionChangesState$r2.image,
    alt: "sub option image",
    loading: "lazy"
  }) : optionChangesState !== null && optionChangesState !== void 0 && (_optionChangesState$c = optionChangesState.changes) !== null && _optionChangesState$c !== void 0 && _optionChangesState$c.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: optionChangesState === null || optionChangesState === void 0 ? void 0 : (_optionChangesState$c2 = optionChangesState.changes) === null || _optionChangesState$c2 === void 0 ? void 0 : _optionChangesState$c2.image,
    alt: "product image",
    loading: "lazy"
  }) : (optionState === null || optionState === void 0 ? void 0 : (_optionState$option = optionState.option) === null || _optionState$option === void 0 ? void 0 : _optionState$option.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: optionState === null || optionState === void 0 ? void 0 : (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 ? void 0 : _optionState$option2.image,
    alt: "product image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.OptionInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('OPTION_NAME', 'Option name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    autoComplete: "off",
    defaultValue: optionState === null || optionState === void 0 ? void 0 : optionState.option.name,
    onChange: function onChange(e) {
      var _optionState$option3;

      return handleChangeOptionInput(e, (_optionState$option3 = optionState.option) === null || _optionState$option3 === void 0 ? void 0 : _optionState$option3.id);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUM', 'Minimum')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "min",
    defaultValue: optionState === null || optionState === void 0 ? void 0 : (_optionState$option4 = optionState.option) === null || _optionState$option4 === void 0 ? void 0 : _optionState$option4.min,
    onChange: function onChange(e) {
      return handleChangeNumberInput(e, optionState.option, true);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: true,
    isMaxError: isMaxError
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "max",
    defaultValue: optionState === null || optionState === void 0 ? void 0 : (_optionState$option5 = optionState.option) === null || _optionState$option5 === void 0 ? void 0 : _optionState$option5.max,
    onChange: function onChange(e) {
      return handleChangeNumberInput(e, optionState.option, false);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    top: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_optionState$option6 = optionState.option) === null || _optionState$option6 === void 0 ? void 0 : _optionState$option6.enabled,
    onChange: function onChange(enabled) {
      var _optionState$option7;

      return handleChangeOptionEnable(enabled, (_optionState$option7 = optionState.option) === null || _optionState$option7 === void 0 ? void 0 : _optionState$option7.id);
    }
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.OptionSettings, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionSettingItem, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "with_half_option",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option8 = optionState.option) === null || _optionState$option8 === void 0 ? void 0 : _optionState$option8.with_half_option) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('with_half_option', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "with_half_option"
  }, t('WITH_HALF_PRICE', 'Allow half option & price')))), /*#__PURE__*/_react.default.createElement(_styles2.OptionSettingItem, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "allow_suboption_quantity",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option9 = optionState.option) === null || _optionState$option9 === void 0 ? void 0 : _optionState$option9.allow_suboption_quantity) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('allow_suboption_quantity', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "allow_suboption_quantity"
  }, t('SUBOPTION_QUANTITY', 'Allow suboptions quantity'))), (optionState === null || optionState === void 0 ? void 0 : (_optionState$option10 = optionState.option) === null || _optionState$option10 === void 0 ? void 0 : _optionState$option10.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "limit_suboptions_by_max",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option11 = optionState.option) === null || _optionState$option11 === void 0 ? void 0 : _optionState$option11.limit_suboptions_by_max) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('limit_suboptions_by_max', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "limit_suboptions_by_max"
  }, t('LIMIT_SUBOPTIONS_BY_MAX', 'Limit suboptions by maximum option')))), (conditionalOptions === null || conditionalOptions === void 0 ? void 0 : conditionalOptions.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.OptionSettingItem, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "conditioned",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option12 = optionState.option) === null || _optionState$option12 === void 0 ? void 0 : _optionState$option12.conditioned) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('conditioned', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "conditioned"
  }, t('CONDITIONAL', 'Conditional'))), (optionState === null || optionState === void 0 ? void 0 : (_optionState$option13 = optionState.option) === null || _optionState$option13 === void 0 ? void 0 : _optionState$option13.conditioned) && /*#__PURE__*/_react.default.createElement(_styles2.SelectboxGroup, null, conditionalOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: conditionalOptions,
    defaultValue: conditionalOptionId,
    placeholder: t('SELECT_OPTION', 'Select option'),
    onChange: function onChange(val) {
      return handleChangeConditionalOption(val);
    }
  }), conditionalOptionId && (conditionalSubOptions.length > 0 ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: conditionalSubOptions,
    defaultValue: conditionalSubOptionId,
    placeholder: t('SELECT_CHOICE', 'Select choice'),
    onChange: function onChange(val) {
      return handleChangeConditionalSubOption(val);
    }
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('NO_CHOICES_AVAILABLE', 'No choices available')))))))), /*#__PURE__*/_react.default.createElement(_styles2.Dvider, null), /*#__PURE__*/_react.default.createElement(_styles2.ModifierOptionsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MODIFIER_OPTIONS', 'Modifier options')), /*#__PURE__*/_react.default.createElement(_styles2.SubOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.SubOptionImage, null), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, null))), /*#__PURE__*/_react.default.createElement(_styles2.RightSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c = settingChangeState.changes) === null || _settingChangeState$c === void 0 ? void 0 : _settingChangeState$c.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c2 = settingChangeState.changes) === null || _settingChangeState$c2 === void 0 ? void 0 : _settingChangeState$c2.with_half_option : optionState === null || optionState === void 0 ? void 0 : (_optionState$option14 = optionState.option) === null || _optionState$option14 === void 0 ? void 0 : _optionState$option14.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('HALF_PRICE', 'Half price')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c3 = settingChangeState.changes) === null || _settingChangeState$c3 === void 0 ? void 0 : _settingChangeState$c3.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c4 = settingChangeState.changes) === null || _settingChangeState$c4 === void 0 ? void 0 : _settingChangeState$c4.allow_suboption_quantity : optionState === null || optionState === void 0 ? void 0 : (_optionState$option15 = optionState.option) === null || _optionState$option15 === void 0 ? void 0 : _optionState$option15.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('PRESELECT', 'Preselect'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    header: true
  }))), optionState === null || optionState === void 0 ? void 0 : (_optionState$option16 = optionState.option) === null || _optionState$option16 === void 0 ? void 0 : (_optionState$option17 = _optionState$option16.suboptions) === null || _optionState$option17 === void 0 ? void 0 : _optionState$option17.map(function (subOption) {
    return /*#__PURE__*/_react.default.createElement(_ProductExtraSuboption.ProductExtraSuboption, {
      key: subOption.id,
      subOption: subOption,
      optionState: optionState,
      editSubOptionId: editSubOptionId,
      settingChangeState: settingChangeState,
      changesState: changesState,
      setSelectedSubOptionId: setSelectedSubOptionId,
      openModal: openModal,
      setOpenModal: setOpenModal,
      handleChangeInput: handleChangeInput,
      handleChangeSubOptionImage: handleChangeSubOptionImage,
      handleChangeDefaultSuboption: handleChangeDefaultSuboption,
      handleChangeSubOptionEnable: handleChangeSubOptionEnable,
      handleDeteteSubOption: handleDeteteSubOption,
      handleUpdateSubOption: handleUpdateSubOption
    });
  }), isAddForm && /*#__PURE__*/_react.default.createElement(_styles2.AdddSubOptionForm, {
    onSubmit: handleSubmit(handleAddOption),
    className: "add-product-option"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LeftSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.SubOptionImage, {
    onClick: function onClick() {
      return handleClickSubOptionImage('add_suboption_image');
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: function onFiles(files) {
      return handleSubOptionFiles(files, null);
    },
    childId: "add_suboption_image",
    accept: "image/png, image/jpeg, image/jpg",
    disabled: optionState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleSubOptionFiles(dataTransfer.files, 'add_suboption_image');
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: optionState.loading
  }, changesState !== null && changesState !== void 0 && (_changesState$result = changesState.result) !== null && _changesState$result !== void 0 && _changesState$result.image && editSubOptionId === null ? /*#__PURE__*/_react.default.createElement("img", {
    src: changesState === null || changesState === void 0 ? void 0 : (_changesState$result2 = changesState.result) === null || _changesState$result2 === void 0 ? void 0 : _changesState$result2.image,
    alt: "sub option image",
    loading: "lazy"
  }) : (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes = changesState.changes) === null || _changesState$changes === void 0 ? void 0 : _changesState$changes.image) && editSubOptionId === null && /*#__PURE__*/_react.default.createElement("img", {
    src: changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.image,
    alt: "sub option image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, {
    small: true
  }, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option18 = optionState.option) === null || _optionState$option18 === void 0 ? void 0 : (_optionState$option19 = _optionState$option18.suboptions) === null || _optionState$option19 === void 0 ? void 0 : _optionState$option19.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    autoComplete: "off",
    placeholder: t('NAME', 'Name'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes3 = changesState.changes) === null || _changesState$changes3 === void 0 ? void 0 : _changesState$changes3.name) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    ref: register({
      required: t('NAME_REQUIRED', 'The name is required.')
    })
  }))), /*#__PURE__*/_react.default.createElement(_styles2.RightSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option20 = optionState.option) === null || _optionState$option20 === void 0 ? void 0 : (_optionState$option21 = _optionState$option20.suboptions) === null || _optionState$option21 === void 0 ? void 0 : _optionState$option21.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "price",
    placeholder: t('PRICE', 'Price'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.price) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }

      handleEnterAddSuboption(e);
    }
  })), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c5 = settingChangeState.changes) === null || _settingChangeState$c5 === void 0 ? void 0 : _settingChangeState$c5.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c6 = settingChangeState.changes) === null || _settingChangeState$c6 === void 0 ? void 0 : _settingChangeState$c6.with_half_option : optionState === null || optionState === void 0 ? void 0 : (_optionState$option22 = optionState.option) === null || _optionState$option22 === void 0 ? void 0 : _optionState$option22.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option23 = optionState.option) === null || _optionState$option23 === void 0 ? void 0 : (_optionState$option24 = _optionState$option23.suboptions) === null || _optionState$option24 === void 0 ? void 0 : _optionState$option24.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "half_price",
    placeholder: t('HALF_PRICE', 'Half price'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes5 = changesState.changes) === null || _changesState$changes5 === void 0 ? void 0 : _changesState$changes5.half_price) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }

      handleEnterAddSuboption(e);
    }
  })), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c7 = settingChangeState.changes) === null || _settingChangeState$c7 === void 0 ? void 0 : _settingChangeState$c7.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c8 = settingChangeState.changes) === null || _settingChangeState$c8 === void 0 ? void 0 : _settingChangeState$c8.allow_suboption_quantity : optionState === null || optionState === void 0 ? void 0 : (_optionState$option25 = optionState.option) === null || _optionState$option25 === void 0 ? void 0 : _optionState$option25.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option26 = optionState.option) === null || _optionState$option26 === void 0 ? void 0 : (_optionState$option27 = _optionState$option26.suboptions) === null || _optionState$option27 === void 0 ? void 0 : _optionState$option27.length) === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "max",
    placeholder: t('MAX', 'Max'),
    defaultValue: editSubOptionId === null && (changesState === null || changesState === void 0 ? void 0 : (_changesState$changes6 = changesState.changes) === null || _changesState$changes6 === void 0 ? void 0 : _changesState$changes6.max) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }

      handleEnterAddSuboption(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    maxHeight: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    name: "preselected",
    className: "default"
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null))))), !isAddForm && /*#__PURE__*/_react.default.createElement(_styles2.AddNewOptionButton, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "add-option-btn",
    onClick: function onClick() {
      return setIsAddForm(true);
    }
  }, t('ADD_SUBOPTION', 'Add suboption')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), (openModal === null || openModal === void 0 ? void 0 : openModal.option) && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    overflow: "initial",
    padding: "0px",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.option,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        option: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptionMetaFields.ProductExtraOptionMetaFields, {
    businessId: business.id,
    extraId: extra.id,
    optionId: optionState.option.id
  })), (openModal === null || openModal === void 0 ? void 0 : openModal.subOptionMetaFields) && selectedSubOptionId && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.subOptionMetaFields,
    onClose: function onClose() {
      setSelectedSubOptionId(null);
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        option: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraSubOptionMetaFields.ProductExtraSubOptionMetaFields, {
    businessId: business.id,
    extraId: extra.id,
    optionId: optionState.option.id,
    subOptionId: selectedSubOptionId
  })));
};

var ProductExtraOptionDetails = function ProductExtraOptionDetails(props) {
  var productExtraOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtraOptionDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtraOptionDetails, productExtraOptionProps);
};

exports.ProductExtraOptionDetails = ProductExtraOptionDetails;