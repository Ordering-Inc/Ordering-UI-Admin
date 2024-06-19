"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderType = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderType = exports.OrderType = function OrderType(props) {
  var path = props.path,
    typeValues = props.typeValues,
    handleUpdateThemeValue = props.handleUpdateThemeValue;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE', 'Title')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('TITLE', 'Title'),
    defaultValue: (typeValues === null || typeValues === void 0 ? void 0 : typeValues.title) || '',
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, [path, 'title'].join('.'));
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('DESCRIPTION', 'Description'),
    defaultValue: (typeValues === null || typeValues === void 0 ? void 0 : typeValues.description) || '',
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, [path, 'description'].join('.'));
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXPORT_CALL_TO_ACTION', 'Call to action')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('EXPORT_CALL_TO_ACTION', 'Call to action'),
    defaultValue: (typeValues === null || typeValues === void 0 ? void 0 : typeValues.call_to_action) || '',
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, [path, 'call_to_action'].join('.'));
    }
  })));
};