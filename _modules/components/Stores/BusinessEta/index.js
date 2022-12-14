"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessEta = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessEtaUI = function BusinessEtaUI(props) {
  var selectedOption = props.selectedOption,
    setSelectedOption = props.setSelectedOption,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    hanldeUpdateBusinessEtaTimes = props.hanldeUpdateBusinessEtaTimes;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getOrderState = _useUtils2[0].getOrderState;
  var statusTimeOptions = [{
    value: 'status',
    content: t('ESTIMATED_TIMES_BY_STATUS', 'Estimated times by status')
  }, {
    value: 'status_penalty',
    content: t('ESTIMATED_PENALTY_TIMES_BY_STATUS', 'Estimated penalty times by status')
  }];
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('STATUS_TIME', 'Status time')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: t('SELECT_TIME', 'Select time'),
    defaultValue: selectedOption,
    options: statusTimeOptions,
    onChange: function onChange(val) {
      return setSelectedOption(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.TimesContainer, null, _toConsumableArray(Array(24).keys()).map(function (index) {
    var _formState$changes;
    return /*#__PURE__*/_react.default.createElement(_styles2.TimeItemContainer, {
      key: "".concat(selectedOption, ":").concat(index)
    }, /*#__PURE__*/_react.default.createElement("span", null, getOrderState(index)), /*#__PURE__*/_react.default.createElement(_styles2.TimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "number",
      name: "".concat(selectedOption, ":").concat(index),
      defaultValue: ((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes["".concat(selectedOption, ":").concat(index)]) || 0,
      onChange: handleChangeInput,
      onKeyPress: function onKeyPress(e) {
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, t('MINUTES', 'Minutes'))));
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: formState.loading,
    onClick: hanldeUpdateBusinessEtaTimes
  }, t('SAVE', 'Save')));
};
var BusinessEta = function BusinessEta(props) {
  var businessEtaProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessEtaUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessEta, businessEtaProps);
};
exports.BusinessEta = BusinessEta;