"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtherDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("./styles");
var _styles2 = require("../../../../styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OtherDetails = function OtherDetails(props) {
  var _formState$changes$de, _formState$changes;
  var formState = props.formState,
    handleChangeInput = props.handleChangeInput;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.OrderDetailsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('OTHER_DETAILS', 'Other Details')), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('GOOGLE_MAPS_URL', 'Google Maps URL')), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    placeholder: t('URL', 'URL')
  })), /*#__PURE__*/_react.default.createElement(_styles.SwitchControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('RESERVATION_WITH_OPEN_TABLE', 'Reservation with open table')), /*#__PURE__*/_react.default.createElement(_styles2.Switch, {
    defaultChecked: true,
    onChange: function onChange(val) {
      return console.log(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('WEBSITE_ORIGINAL', 'Website')), /*#__PURE__*/_react.default.createElement(_styles2.Input, {
    placeholder: "www.yourbusiness.com"
  })), /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    noBottom: true
  }, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles2.TextArea, {
    name: "description",
    placeholder: t('WRITE_DESCRIPTION', 'Write description'),
    defaultValue: (_formState$changes$de = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : '',
    onChange: handleChangeInput
  }))));
};
exports.OtherDetails = OtherDetails;