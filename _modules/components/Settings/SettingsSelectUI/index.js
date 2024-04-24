"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSelectUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Select = require("../../../styles/Select");
var _Inputs = require("../../../styles/Inputs");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SettingsSelectUI = exports.SettingsSelectUI = function SettingsSelectUI(props) {
  var config = props.config,
    handleSelectChange = props.handleSelectChange,
    noHeader = props.noHeader;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!config) return;
    if (config.key === 'terms_and_conditions') {
      var selectTypes = [{
        value: 'true',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('YES', 'Yes'))
      }, {
        value: 'false',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('NO', 'No'))
      }];
      setOptions(selectTypes);
    } else {
      var _config$options;
      var selectedTypes = config === null || config === void 0 || (_config$options = config.options) === null || _config$options === void 0 ? void 0 : _config$options.map(function (item) {
        return {
          value: item.value,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t(item.text.toUpperCase()))
        };
      });
      if (config.customizable) {
        selectedTypes.push({
          value: config === null || config === void 0 ? void 0 : config.value,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('CUSTOM', 'Custom')),
          showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
            className: "open-disabled"
          }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
            placeholder: t('CUSTOM', 'Custom'),
            defaultValue: config === null || config === void 0 ? void 0 : config.value,
            onChange: function onChange(e) {
              return handleSelectChange(e.target.value);
            }
          }))
        });
      }
      setOptions(selectedTypes);
    }
  }, [config]);
  return /*#__PURE__*/_react.default.createElement(_styles.SettingsSelectContainer, null, !noHeader && /*#__PURE__*/_react.default.createElement(_styles.SelectHeader, null, (config === null || config === void 0 ? void 0 : config.name) && /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), (config === null || config === void 0 ? void 0 : config.description) && /*#__PURE__*/_react.default.createElement("p", null, config === null || config === void 0 ? void 0 : config.description)), options ? /*#__PURE__*/_react.default.createElement(_styles.SelectContent, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    notAsync: true,
    defaultValue: config === null || config === void 0 ? void 0 : config.value,
    options: options,
    onChange: function onChange(typeValue) {
      return handleSelectChange(typeValue);
    },
    placeholder: t('SELECT_A_OPTION', 'Select a option')
  })) : /*#__PURE__*/_react.default.createElement(_styles.OptionsError, null, t('NO_OPTIONS_VALUE', 'There is no options value')));
};