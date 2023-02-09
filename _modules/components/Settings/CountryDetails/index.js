"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountryDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CountryDetails = function CountryDetails(props) {
  var _country$name, _country$code;
  var country = props.country,
    handleUpdateCountry = props.handleUpdateCountry,
    handleAddCountry = props.handleAddCountry;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    control = _useForm.control,
    reset = _useForm.reset;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var onSubmit = function onSubmit(values) {
    if (country) {
      handleUpdateCountry(country === null || country === void 0 ? void 0 : country.id, values);
    } else {
      handleAddCountry(values);
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
  (0, _react.useEffect)(function () {
    reset();
  }, [country === null || country === void 0 ? void 0 : country.id]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, country ? t('COUNTRY_SETTINGS', 'Country settings') : t('ADD_NEW_COUNTRY ', 'Add new country')), country && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: !!(country !== null && country !== void 0 && country.enabled),
    onChange: function onChange(enabled) {
      return handleUpdateCountry(country === null || country === void 0 ? void 0 : country.id, {
        enabled: enabled
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))
    }),
    defaultValue: (_country$name = country === null || country === void 0 ? void 0 : country.name) !== null && _country$name !== void 0 ? _country$name : '',
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CODE', 'Code')), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "code",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles.Input, {
        value: value,
        autoComplete: "off",
        onChange: function onChange(e) {
          return _onChange(e.target.value.toUpperCase());
        }
      });
    },
    rules: {
      required: t('VALIDATION_ERROR_REQUIRED', 'Code is required').replace('_attribute_', t('CODE', 'Code')),
      minLength: {
        value: 2,
        message: t('ERROR_VERIFICATION_CODE_INVALID', 'The code is invalid')
      },
      maxLength: {
        value: 2,
        message: t('ERROR_VERIFICATION_CODE_INVALID', 'The code is invalid')
      }
    },
    defaultValue: (_country$code = country === null || country === void 0 ? void 0 : country.code) !== null && _country$code !== void 0 ? _country$code : ''
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    borderRadius: "8px",
    color: "primary"
  }, country ? t('SAVE', 'Save') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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
exports.CountryDetails = CountryDetails;