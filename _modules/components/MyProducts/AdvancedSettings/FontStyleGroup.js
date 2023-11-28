"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontStyleGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FontStyleGroup = exports.FontStyleGroup = function FontStyleGroup(props) {
  var isBody = props.isBody,
    fonts = props.fonts,
    path = props.path,
    handleUpdateThemeValue = props.handleUpdateThemeValue;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    weights = _useState2[0],
    setWeights = _useState2[1];
  var _useState3 = (0, _react.useState)('Poppins'),
    _useState4 = _slicedToArray(_useState3, 2),
    font = _useState4[0],
    setFont = _useState4[1];
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
  var handleChangeWeights = function handleChangeWeights(value) {
    handleUpdateThemeValue([value], [path, 'weights'].join('.'));
    setWeights([value]);
  };
  var handleUpdateFont = function handleUpdateFont(value) {
    handleUpdateThemeValue(value, [path, 'name'].join('.'));
    setFont(value);
  };
  (0, _react.useEffect)(function () {
    setWeights(fonts === null || fonts === void 0 ? void 0 : fonts.weights);
    setFont(fonts === null || fonts === void 0 ? void 0 : fonts.name);
  }, [JSON.stringify(fonts)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('FONT', 'Font')), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: fontFamilyList,
    className: "select",
    defaultValue: font,
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleUpdateFont(value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, isBody ? t('FONT_SPECIAL_WEIGHTS', 'Font special weights') : t('FONT_PRIMARY_WEIGHTS', 'Font primary weights')), /*#__PURE__*/_react.default.createElement(_styles.FontWeightListWrapper, null, fontWeightList.map(function (weight) {
    return /*#__PURE__*/_react.default.createElement(_styles.FontWeightItem, {
      key: weight.value,
      onClick: function onClick() {
        return handleChangeWeights(weight === null || weight === void 0 ? void 0 : weight.value);
      }
    }, weights !== null && weights !== void 0 && weights.includes(weight.value) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, weight.name));
  }))));
};