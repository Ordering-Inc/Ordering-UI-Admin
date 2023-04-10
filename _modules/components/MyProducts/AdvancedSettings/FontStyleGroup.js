"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontStyleGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FontStyleGroup = function FontStyleGroup(props) {
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
exports.FontStyleGroup = FontStyleGroup;