"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptionForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../../styles");

var _FirstSelect = require("../../../styles/Select/FirstSelect");

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _reactHookForm = require("react-hook-form");

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductExtraOptionForm = function ProductExtraOptionForm(props) {
  var _optionChangesState$r, _optionChangesState$r2, _optionChangesState$c5, _optionChangesState$c6, _optionState$option3, _optionState$option4, _optionState$option7, _optionState$option9, _optionState$option10, _optionState$option12, _optionState$option13, _optionState$option14, _optionState$option15, _optionState$option16, _optionState$option17;

  var optionState = props.optionState,
      optionChangesState = props.optionChangesState,
      mainContainerRef = props.mainContainerRef,
      isMaxError = props.isMaxError,
      handleOptionFiles = props.handleOptionFiles,
      handleChangeOptionInput = props.handleChangeOptionInput,
      handleChangeOptionEnable = props.handleChangeOptionEnable,
      handleOptionSetting = props.handleOptionSetting,
      conditionalOptions = props.conditionalOptions,
      conditionalSubOptions = props.conditionalSubOptions,
      conditionalOptionId = props.conditionalOptionId,
      conditionalSubOptionId = props.conditionalSubOptionId,
      handleChangeConditionalOption = props.handleChangeConditionalOption,
      handleChangeConditionalSubOption = props.handleChangeConditionalSubOption,
      handleUpdateOption = props.handleUpdateOption;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      control = _useForm.control;

  var optionImageInputRef = (0, _react.useRef)(null);
  var optionNameRef = (0, _react.useRef)(null);
  var optionMinRef = (0, _react.useRef)(null);
  var optionMaxRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var handleClickImage = function handleClickImage() {
    optionImageInputRef.current.click();
  };

  var handleClickOutside = function handleClickOutside(e) {
    var _mainContainerRef$cur;

    if ((_mainContainerRef$cur = mainContainerRef.current) !== null && _mainContainerRef$cur !== void 0 && _mainContainerRef$cur.contains(e.target)) {
      var _optionNameRef$curren, _optionMinRef$current, _optionMaxRef$current;

      if (!Object.keys((optionChangesState === null || optionChangesState === void 0 ? void 0 : optionChangesState.changes) || {}).length) return;
      if ((_optionNameRef$curren = optionNameRef.current) !== null && _optionNameRef$curren !== void 0 && _optionNameRef$curren.contains(e.target) || (_optionMinRef$current = optionMinRef.current) !== null && _optionMinRef$current !== void 0 && _optionMinRef$current.contains(e.target) || (_optionMaxRef$current = optionMaxRef.current) !== null && _optionMaxRef$current !== void 0 && _optionMaxRef$current.contains(e.target)) return;
      handleSubmit(handleUpdateOption)();
    }
  };

  var handleMaxValidate = function handleMaxValidate() {
    var _optionChangesState$c, _optionChangesState$c2, _optionState$option, _optionChangesState$c3, _optionChangesState$c4, _optionState$option2;

    var max = (_optionChangesState$c = optionChangesState === null || optionChangesState === void 0 ? void 0 : (_optionChangesState$c2 = optionChangesState.changes) === null || _optionChangesState$c2 === void 0 ? void 0 : _optionChangesState$c2.max) !== null && _optionChangesState$c !== void 0 ? _optionChangesState$c : optionState === null || optionState === void 0 ? void 0 : (_optionState$option = optionState.option) === null || _optionState$option === void 0 ? void 0 : _optionState$option.max;
    var min = (_optionChangesState$c3 = optionChangesState === null || optionChangesState === void 0 ? void 0 : (_optionChangesState$c4 = optionChangesState.changes) === null || _optionChangesState$c4 === void 0 ? void 0 : _optionChangesState$c4.min) !== null && _optionChangesState$c3 !== void 0 ? _optionChangesState$c3 : optionState === null || optionState === void 0 ? void 0 : (_optionState$option2 = optionState.option) === null || _optionState$option2 === void 0 ? void 0 : _optionState$option2.min;
    if (parseFloat(min) <= parseFloat(max)) return true;else {
      return t('ERROR_MATCH_MAX_DEFAULT_SUBOPTIONS', 'Max default suboptions length is less than preselected suboptions');
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClickOutside);
    return function () {
      return document.removeEventListener('click', handleClickOutside);
    };
  }, [optionChangesState]);
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
  return /*#__PURE__*/_react.default.createElement(_styles2.OptionContainer, {
    onSubmit: handleSubmit(handleUpdateOption)
  }, /*#__PURE__*/_react.default.createElement(_styles2.OptionImage, {
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
  }) : optionChangesState !== null && optionChangesState !== void 0 && (_optionChangesState$c5 = optionChangesState.changes) !== null && _optionChangesState$c5 !== void 0 && _optionChangesState$c5.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: optionChangesState === null || optionChangesState === void 0 ? void 0 : (_optionChangesState$c6 = optionChangesState.changes) === null || _optionChangesState$c6 === void 0 ? void 0 : _optionChangesState$c6.image,
    alt: "product image",
    loading: "lazy"
  }) : (optionState === null || optionState === void 0 ? void 0 : (_optionState$option3 = optionState.option) === null || _optionState$option3 === void 0 ? void 0 : _optionState$option3.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: optionState === null || optionState === void 0 ? void 0 : (_optionState$option4 = optionState.option) === null || _optionState$option4 === void 0 ? void 0 : _optionState$option4.image,
    alt: "product image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles2.OptionInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('OPTION_NAME', 'Option name')), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "name",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
          value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "name",
        autoComplete: "off",
        value: value,
        ref: optionNameRef,
        onChange: function onChange(e) {
          var _optionState$option5;

          _onChange(e.target.value);

          handleChangeOptionInput(e, (_optionState$option5 = optionState.option) === null || _optionState$option5 === void 0 ? void 0 : _optionState$option5.id);
        }
      });
    },
    defaultValue: optionState === null || optionState === void 0 ? void 0 : optionState.option.name,
    rules: {
      required: t('NAME_REQUIRED', 'The name is required.')
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightOptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUM', 'Minimum')), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "min",
    control: control,
    render: function render(_ref2) {
      var _onChange2 = _ref2.onChange,
          value = _ref2.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "min",
        autoComplete: "off",
        value: value,
        ref: optionMinRef,
        onChange: function onChange(e) {
          var _optionState$option6;

          _onChange2(e.target.value);

          handleChangeOptionInput(e, (_optionState$option6 = optionState.option) === null || _optionState$option6 === void 0 ? void 0 : _optionState$option6.id);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        }
      });
    },
    defaultValue: optionState === null || optionState === void 0 ? void 0 : (_optionState$option7 = optionState.option) === null || _optionState$option7 === void 0 ? void 0 : _optionState$option7.min,
    rules: {
      required: t('MIN_PURCHASED_REQUIRED', 'The min is required.'),
      validate: handleMaxValidate
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    primary: true,
    isMaxError: isMaxError
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "max",
    control: control,
    render: function render(_ref3) {
      var _onChange3 = _ref3.onChange,
          value = _ref3.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        name: "max",
        ref: optionMaxRef,
        value: value,
        autoComplete: "off",
        onChange: function onChange(e) {
          var _optionState$option8;

          _onChange3(e.target.value);

          handleChangeOptionInput(e, (_optionState$option8 = optionState.option) === null || _optionState$option8 === void 0 ? void 0 : _optionState$option8.id);
        },
        onKeyPress: function onKeyPress(e) {
          if (!/^[0-9.]$/.test(e.key)) {
            e.preventDefault();
          }
        }
      });
    },
    defaultValue: optionState === null || optionState === void 0 ? void 0 : (_optionState$option9 = optionState.option) === null || _optionState$option9 === void 0 ? void 0 : _optionState$option9.max,
    rules: {
      required: t('MAX_PURCHASED_REQUIRED', 'The max is required.')
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    top: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_optionState$option10 = optionState.option) === null || _optionState$option10 === void 0 ? void 0 : _optionState$option10.enabled,
    onChange: function onChange(enabled) {
      var _optionState$option11;

      return handleChangeOptionEnable(enabled, (_optionState$option11 = optionState.option) === null || _optionState$option11 === void 0 ? void 0 : _optionState$option11.id);
    }
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.OptionSettings, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionSettingItem, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "with_half_option",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option12 = optionState.option) === null || _optionState$option12 === void 0 ? void 0 : _optionState$option12.with_half_option) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('with_half_option', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "with_half_option"
  }, t('WITH_HALF_PRICE', 'Allow half option & price')))), /*#__PURE__*/_react.default.createElement(_styles2.OptionSettingItem, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "allow_suboption_quantity",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option13 = optionState.option) === null || _optionState$option13 === void 0 ? void 0 : _optionState$option13.allow_suboption_quantity) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('allow_suboption_quantity', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "allow_suboption_quantity"
  }, t('SUBOPTION_QUANTITY', 'Allow suboptions quantity'))), (optionState === null || optionState === void 0 ? void 0 : (_optionState$option14 = optionState.option) === null || _optionState$option14 === void 0 ? void 0 : _optionState$option14.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "limit_suboptions_by_max",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option15 = optionState.option) === null || _optionState$option15 === void 0 ? void 0 : _optionState$option15.limit_suboptions_by_max) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('limit_suboptions_by_max', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "limit_suboptions_by_max"
  }, t('LIMIT_SUBOPTIONS_BY_MAX', 'Limit suboptions by maximum option')))), (conditionalOptions === null || conditionalOptions === void 0 ? void 0 : conditionalOptions.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.OptionSettingItem, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    id: "conditioned",
    defaultChecked: (optionState === null || optionState === void 0 ? void 0 : (_optionState$option16 = optionState.option) === null || _optionState$option16 === void 0 ? void 0 : _optionState$option16.conditioned) || false,
    onClick: function onClick(e) {
      return handleOptionSetting('conditioned', e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "conditioned"
  }, t('CONDITIONAL', 'Conditional'))), (optionState === null || optionState === void 0 ? void 0 : (_optionState$option17 = optionState.option) === null || _optionState$option17 === void 0 ? void 0 : _optionState$option17.conditioned) && /*#__PURE__*/_react.default.createElement(_styles2.SelectboxGroup, null, conditionalOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
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
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('NO_CHOICES_AVAILABLE', 'No choices available'))))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    width: "700px",
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
  }));
};

exports.ProductExtraOptionForm = ProductExtraOptionForm;