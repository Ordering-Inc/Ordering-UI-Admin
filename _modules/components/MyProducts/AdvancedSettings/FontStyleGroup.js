"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontStyleGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FontStyleGroup = function FontStyleGroup(props) {
  var isBody = props.isBody,
    fonts = props.fonts,
    path = props.path,
    handleUpdateThemeValue = props.handleUpdateThemeValue;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var fontFamilyList = [{
    value: 'Poppins',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('POPPINS', 'Poppins'))
  }, {
    value: 'Lobster',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('LOBSTER', 'Lobster'))
  }, {
    value: 'Raleway',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('RALEWAY', 'Raleway'))
  }];
  var fontWeightList = [{
    value: 100,
    name: '100 - Thin'
  }, {
    value: 200,
    name: '200 - Extra Light (Ultra Light)'
  }, {
    value: 300,
    name: '300 - Light'
  }, {
    value: 400,
    name: '400 - Normal'
  }, {
    value: 500,
    name: '500 - Medium'
  }, {
    value: 600,
    name: '600 - Semi Bold (Demi Bold)'
  }, {
    value: 700,
    name: '700 - Bold'
  }, {
    value: 800,
    name: '800 - Extra Bold (Ultra Bold)'
  }, {
    value: 900,
    name: '900 - Black (Heavy)'
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('FONT', 'Font')), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: fontFamilyList,
    className: "select",
    defaultValue: fonts === null || fonts === void 0 ? void 0 : fonts.name,
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleUpdateThemeValue(value, [path, 'name'].join('.'));
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, isBody ? t('FONT_SPECIAL_WEIGHTS', 'Font special weights') : t('FONT_PRIMARY_WEIGHTS', 'Font primary weights')), /*#__PURE__*/_react.default.createElement(_styles.FontWeightListWrapper, null, fontWeightList.map(function (weight) {
    var _fonts$weights;
    return /*#__PURE__*/_react.default.createElement(_styles.FontWeightItem, {
      key: weight.value,
      onClick: function onClick() {
        return handleUpdateThemeValue([weight === null || weight === void 0 ? void 0 : weight.value], [path, 'weights'].join('.'));
      }
    }, fonts !== null && fonts !== void 0 && (_fonts$weights = fonts.weights) !== null && _fonts$weights !== void 0 && _fonts$weights.includes(weight.value) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, weight.name));
  }))));
};
exports.FontStyleGroup = FontStyleGroup;