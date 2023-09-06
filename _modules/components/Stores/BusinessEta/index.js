"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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