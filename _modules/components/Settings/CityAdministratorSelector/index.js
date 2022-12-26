"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityAdministratorSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CityAdministratorSelector = function CityAdministratorSelector(props) {
  var cityManagers = props.cityManagers,
    defaultValue = props.defaultValue,
    handleChangeAdministrator = props.handleChangeAdministrator;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var options = cityManagers.map(function (user) {
    return {
      value: user === null || user === void 0 ? void 0 : user.id,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname)
    };
  });
  return /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: defaultValue,
    placeholder: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SELECT_USER', 'Select a user')),
    options: options,
    onChange: function onChange(val) {
      return handleChangeAdministrator(val);
    }
  });
};
exports.CityAdministratorSelector = CityAdministratorSelector;