"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditTaxManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactHookForm = require("react-hook-form");
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _Buttons = require("../../../styles/Buttons");
var _Inputs = require("../../../styles/Inputs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EditTaxManager = function EditTaxManager(props) {
  var _formChanges$type, _data$type;
  var type = props.type,
    handleSave = props.handleSave,
    data = props.data,
    formChanges = props.formChanges,
    _onChange = props.onChange,
    onClose = props.onClose;
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
  var formMethods = (0, _reactHookForm.useForm)();
  var positiveNumberFields = ['rate', 'fixed', 'percentage'];
  var defaultInputs = [{
    field: 'name',
    placeholder: t('NAME', 'Name'),
    required: t('NAME_REQUIRED', 'The name is required')
  }, {
    field: 'description',
    placeholder: t('DESCRIPTION', 'Description'),
    required: t('DESCRIPTION_REQUIRED', 'The Description is required')
  }];
  var rateValidationNumber = function rateValidationNumber(value) {
    if (!isNaN(Number(value))) {
      return true;
    } else {
      return t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('RATE', 'Rate'));
    }
  };
  var feeValidationNumber = function feeValidationNumber(value) {
    if (!isNaN(Number(value))) {
      return true;
    } else {
      return t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('FIXED', 'Fixed'));
    }
  };
  var percentageValidationNumber = function percentageValidationNumber(value) {
    if (Number(value) <= 100) {
      return true;
    } else {
      return t('VALIDATION_MUST_SMALLER_HUNDRED', 'The precentage must be not bigger than 100').replace('_attribute_', t('PERCENTAGE', 'Percentage'));
    }
  };
  var inputs = [].concat(defaultInputs, [type === 'taxes' ? [{
    field: 'rate',
    placeholder: t('RATE', 'Rate'),
    required: t('TAX_RATE_REQUIRED', 'Tax rate is required'),
    pattern: {
      value: /^\d*\.?\d*$/,
      message: t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('RATE', 'Rate'))
    },
    validate: rateValidationNumber
  }] : [{
    field: 'fixed',
    placeholder: t('FIXED', 'Fixed'),
    required: t('FEE_FIXED_REQUIRED', 'Fee fixed is required'),
    pattern: {
      value: /^\d*\.?\d*$/,
      message: t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('FIXED', 'Fixed'))
    },
    validate: feeValidationNumber
  }, {
    field: 'percentage',
    placeholder: t('PERCENTAGE', 'Percentage'),
    required: t('FEE_PERCENTAGE_REQUIRED', 'Fee percentage is required'),
    pattern: {
      value: /^\d*\.?\d*$/,
      message: t('VALIDATION_ERROR_NUMERIC', 'The _attribute_ must be a number.').replace('_attribute_', t('PERCENTAGE', 'Percentage'))
    },
    validate: percentageValidationNumber
  }]]);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  return /*#__PURE__*/_react.default.createElement(_styles.EditTaxContainer, {
    onSubmit: formMethods.handleSubmit(function () {
      return handleSave(data === null || data === void 0 ? void 0 : data.value, type);
    })
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperRow, null, inputs.flat().map(function (input) {
    var _ref, _formChanges$input$fi;
    return /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
      key: input.field
    }, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
      htmlFor: input.field
    }, input.placeholder), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      name: input.field,
      id: input.field,
      placeholder: input.placeholder,
      defaultValue: (_ref = (_formChanges$input$fi = formChanges === null || formChanges === void 0 ? void 0 : formChanges[input.field]) !== null && _formChanges$input$fi !== void 0 ? _formChanges$input$fi : data === null || data === void 0 ? void 0 : data[input.field]) !== null && _ref !== void 0 ? _ref : '',
      onChange: function onChange(e) {
        return _onChange(input.field, e.target.value);
      },
      ref: formMethods.register({
        required: input.required,
        pattern: input.pattern,
        validate: input.validate
      }),
      onKeyPress: function onKeyPress(e) {
        if (positiveNumberFields.includes(input.field) && !/^[0-9.]$/.test(e.key)) {
          e.preventDefault();
        }
      },
      autoComplete: "off"
    }));
  }), type === 'taxes' && /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LabelCustom, {
    htmlFor: "type"
  }, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_styles.TypeSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    notAsync: true,
    placeholder: (_formChanges$type = formChanges === null || formChanges === void 0 ? void 0 : formChanges.type) !== null && _formChanges$type !== void 0 ? _formChanges$type : data === null || data === void 0 ? void 0 : data.type,
    defaultValue: (_data$type = data === null || data === void 0 ? void 0 : data.type) !== null && _data$type !== void 0 ? _data$type : 1,
    options: [{
      value: 1,
      content: t('INCLUDED_ON_PRICE', 'Included on price'),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('INCLUDED_ON_PRICE', 'Included on price'))
    }, {
      value: 2,
      content: t('NOT_INCLUDED_ON_PRICE', 'Not included on price'),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('NOT_INCLUDED_ON_PRICE', 'Not included on price'))
    }],
    onChange: function onChange(val) {
      return _onChange('type', val);
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "8px"
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return onClose();
    }
  }, t('CLOSE', 'Close'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR'),
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
exports.EditTaxManager = EditTaxManager;