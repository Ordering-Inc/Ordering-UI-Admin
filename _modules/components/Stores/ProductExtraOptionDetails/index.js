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

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _utils = require("../../../utils");

var _Shared = require("../../Shared");

var _ProductExtraOptionMetaFields = require("../ProductExtraOptionMetaFields");

var _ProductExtraSubOptionMetaFields = require("../ProductExtraSubOptionMetaFields");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactHookForm = require("react-hook-form");

var _ProductExtraSuboption = require("../ProductExtraSuboption");

var _ProductExtraOptionForm = require("../ProductExtraOptionForm");

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
  var _settingChangeState$c, _settingChangeState$c2, _optionState$option, _settingChangeState$c3, _settingChangeState$c4, _optionState$option2, _optionState$option3, _optionState$option3$, _changesState$result, _changesState$result2, _changesState$changes, _changesState$changes2, _optionState$option4, _optionState$option4$, _changesState$changes3, _optionState$option5, _optionState$option5$, _changesState$changes4, _settingChangeState$c5, _settingChangeState$c6, _optionState$option6, _optionState$option7, _optionState$option7$, _changesState$changes5, _settingChangeState$c7, _settingChangeState$c8, _optionState$option8, _optionState$option9, _optionState$option9$, _changesState$changes6;

  var optionState = props.optionState,
      optionChangesState = props.optionChangesState,
      handleOptionFiles = props.handleOptionFiles,
      handleChangeOptionInput = props.handleChangeOptionInput,
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
      handleUpdateOption = props.handleUpdateOption,
      business = props.business,
      extra = props.extra,
      handleAddOption = props.handleAddOption,
      handleDeteteOption = props.handleDeteteOption,
      isMaxError = props.isMaxError;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  var mainContainerRef = (0, _react.useRef)();

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
    if (Object.keys(changesState === null || changesState === void 0 ? void 0 : changesState.changes).length === 0 && !editSubOptionId) setIsAddForm(false);
  }, [changesState === null || changesState === void 0 ? void 0 : changesState.changes, editSubOptionId]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, {
    ref: mainContainerRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_OPTION', 'Product option')), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
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
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_ProductExtraOptionForm.ProductExtraOptionForm, {
    optionState: optionState,
    optionChangesState: optionChangesState,
    mainContainerRef: mainContainerRef,
    isMaxError: isMaxError,
    handleOptionFiles: handleOptionFiles,
    handleChangeOptionInput: handleChangeOptionInput,
    handleChangeOptionEnable: handleChangeOptionEnable,
    handleOptionSetting: handleOptionSetting,
    conditionalOptions: conditionalOptions,
    conditionalSubOptions: conditionalSubOptions,
    conditionalOptionId: conditionalOptionId,
    conditionalSubOptionId: conditionalSubOptionId,
    handleChangeConditionalOption: handleChangeConditionalOption,
    handleChangeConditionalSubOption: handleChangeConditionalSubOption,
    handleUpdateOption: handleUpdateOption
  }), /*#__PURE__*/_react.default.createElement(_styles2.Dvider, null), /*#__PURE__*/_react.default.createElement(_styles2.ModifierOptionsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MODIFIER_OPTIONS', 'Modifier options')), /*#__PURE__*/_react.default.createElement(_styles2.SubOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.SubOptionImage, null), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, null))), /*#__PURE__*/_react.default.createElement(_styles2.RightSubOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c = settingChangeState.changes) === null || _settingChangeState$c === void 0 ? void 0 : _settingChangeState$c.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c2 = settingChangeState.changes) === null || _settingChangeState$c2 === void 0 ? void 0 : _settingChangeState$c2.with_half_option : optionState === null || optionState === void 0 ? void 0 : (_optionState$option = optionState.option) === null || _optionState$option === void 0 ? void 0 : _optionState$option.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('HALF_PRICE', 'Half price')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c3 = settingChangeState.changes) === null || _settingChangeState$c3 === void 0 ? void 0 : _settingChangeState$c3.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c4 = settingChangeState.changes) === null || _settingChangeState$c4 === void 0 ? void 0 : _settingChangeState$c4.allow_suboption_quantity : optionState === null || optionState === void 0 ? void 0 : (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 ? void 0 : _optionState$option2.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_styles.Input, null)), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    header: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('PRESELECT', 'Preselect'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    header: true
  }))), optionState === null || optionState === void 0 ? void 0 : (_optionState$option3 = optionState.option) === null || _optionState$option3 === void 0 ? void 0 : (_optionState$option3$ = _optionState$option3.suboptions) === null || _optionState$option3$ === void 0 ? void 0 : _optionState$option3$.map(function (subOption) {
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
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option4 = optionState.option) === null || _optionState$option4 === void 0 ? void 0 : (_optionState$option4$ = _optionState$option4.suboptions) === null || _optionState$option4$ === void 0 ? void 0 : _optionState$option4$.length) === 0
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
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option5 = optionState.option) === null || _optionState$option5 === void 0 ? void 0 : (_optionState$option5$ = _optionState$option5.suboptions) === null || _optionState$option5$ === void 0 ? void 0 : _optionState$option5$.length) === 0
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
  })), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c5 = settingChangeState.changes) === null || _settingChangeState$c5 === void 0 ? void 0 : _settingChangeState$c5.with_half_option) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c6 = settingChangeState.changes) === null || _settingChangeState$c6 === void 0 ? void 0 : _settingChangeState$c6.with_half_option : optionState === null || optionState === void 0 ? void 0 : (_optionState$option6 = optionState.option) === null || _optionState$option6 === void 0 ? void 0 : _optionState$option6.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option7 = optionState.option) === null || _optionState$option7 === void 0 ? void 0 : (_optionState$option7$ = _optionState$option7.suboptions) === null || _optionState$option7$ === void 0 ? void 0 : _optionState$option7$.length) === 0
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
  })), (typeof (settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c7 = settingChangeState.changes) === null || _settingChangeState$c7 === void 0 ? void 0 : _settingChangeState$c7.allow_suboption_quantity) !== 'undefined' ? settingChangeState === null || settingChangeState === void 0 ? void 0 : (_settingChangeState$c8 = settingChangeState.changes) === null || _settingChangeState$c8 === void 0 ? void 0 : _settingChangeState$c8.allow_suboption_quantity : optionState === null || optionState === void 0 ? void 0 : (_optionState$option8 = optionState.option) === null || _optionState$option8 === void 0 ? void 0 : _optionState$option8.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option9 = optionState.option) === null || _optionState$option9 === void 0 ? void 0 : (_optionState$option9$ = _optionState$option9.suboptions) === null || _optionState$option9$ === void 0 ? void 0 : _optionState$option9$.length) === 0
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