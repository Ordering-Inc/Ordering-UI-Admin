"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTypeSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Select = require("../../../styles/Select");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserTypeSelector = exports.UserTypeSelector = function UserTypeSelector(props) {
  var userId = props.userId,
    defaultUserType = props.defaultUserType,
    handleChangeUserType = props.handleChangeUserType,
    isPrimary = props.isPrimary;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var userTypes = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ADMINISTRATOR', 'Administrator')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      padding: true
    }, t('ADMINISTRATOR', 'Administrator')),
    disabled: !isPrimary && defaultUserType === 0
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('BUSINESS_OWNER', 'Business owner')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      padding: true
    }, t('BUSINESS_OWNER', 'Business owner')),
    disabled: !isPrimary && defaultUserType === 2
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('USER', 'User')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      padding: true
    }, t('USER', 'User')),
    disabled: !isPrimary && defaultUserType === 3
  }, {
    value: 9,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('CALL_CENTER_AGENT', 'Call center agent')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      padding: true
    }, t('CALL_CENTER_AGENT', 'Call center agent')),
    disabled: !isPrimary && defaultUserType === 9
  }, {
    value: 8,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PROFESSIONAL', 'Professional')),
    showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      padding: true
    }, t('PROFESSIONAL', 'Professional')),
    disabled: !isPrimary && defaultUserType === 8
  }];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.Option, {
    isWeight: true
  }, t('TYPE', 'Type'));
  var onUpdateUserType = function onUpdateUserType(type) {
    handleChangeUserType && handleChangeUserType({
      id: userId,
      level: type
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isPrimary ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: defaultUserType,
    placeholder: placeholder,
    options: userTypes,
    onChange: function onChange(type) {
      return handleChangeUserType(type);
    }
  }) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
    type: "primary",
    noSelected: true,
    placeholder: placeholder,
    options: userTypes,
    onChange: function onChange(type) {
      return onUpdateUserType(type);
    }
  }));
};