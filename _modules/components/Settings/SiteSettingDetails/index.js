"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteSettingDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _SettingsSelectUI = require("../SettingsSelectUI");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SiteSettingDetails = function SiteSettingDetails(props) {
  var selectedSiteId = props.selectedSiteId,
    siteConfigsState = props.siteConfigsState,
    handleChangeConfig = props.handleChangeConfig;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SettingsListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.GeneralTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('SETTINGS', 'All Settings'))), siteConfigsState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, _toConsumableArray(Array(6).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 14,
      width: 200
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 30
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.GeneralContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FormContainer, null, siteConfigsState.configs.length > 0 && siteConfigsState.configs.map(function (config, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, config.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.FormGroupText, {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, config === null || config === void 0 ? void 0 : config.name), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      onChange: function onChange(e) {
        return handleChangeConfig(e.target.value, selectedSiteId, config === null || config === void 0 ? void 0 : config.id);
      },
      className: "form-control",
      placeholder: config === null || config === void 0 ? void 0 : config.name
    })), config.type === 2 && /*#__PURE__*/_react.default.createElement(_SettingsSelectUI.SettingsSelectUI, {
      config: config,
      defaultValue: config === null || config === void 0 ? void 0 : config.value,
      handleSelectChange: function handleSelectChange(value) {
        return handleChangeConfig(value, selectedSiteId, config === null || config === void 0 ? void 0 : config.id);
      }
    }));
  }))), !siteConfigsState.loading && siteConfigsState.error && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_CONFIG', 'Sorry, we couldn\'t find the config.')
  })));
};
exports.SiteSettingDetails = SiteSettingDetails;