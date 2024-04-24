"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTypeFilterUI = exports.UserTypeFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserTypeFilterUI = exports.UserTypeFilterUI = function UserTypeFilterUI(props) {
  var handleChangeUserType = props.handleChangeUserType,
    userTypes = props.userTypes,
    currentTypesSelected = props.currentTypesSelected;
  var handleChangeUserRole = function handleChangeUserRole(type) {
    handleChangeUserType && handleChangeUserType(type);
  };
  var checkIsActive = function checkIsActive(subTypes) {
    var isSame = subTypes.length === currentTypesSelected.length && subTypes.every(function (element, index) {
      return element === currentTypesSelected[index];
    });
    return isSame;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.UserTypeFilterContainer, null, userTypes && userTypes.length > 0 && userTypes.map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_styles.Button, {
      key: type.id,
      color: checkIsActive(type.value) ? 'primary' : 'secundaryDark',
      onClick: function onClick() {
        return handleChangeUserRole(type.value);
      }
    }, type.title, checkIsActive(type.value) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  }));
};
var UserTypeFilter = exports.UserTypeFilter = function UserTypeFilter(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var userTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [{
      id: 1,
      title: t('ALL', 'All'),
      value: [0, 2, 9]
    }, {
      id: 2,
      title: t('BUSINESS_OWNER', 'Business owner'),
      value: [2]
    }, {
      id: 3,
      title: t('ADMINISTRATORS', 'Administrators'),
      value: [0]
    }, {
      id: 4,
      title: t('CALL_CENTER_AGENT', 'Call center agent'),
      value: [9]
    }],
    defaultUserTypes: props.defaultUserTypes || [0, 2, 9],
    onChangeUserType: props.handleChangeUserType
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserTypeFilter, userTypeFilterProps);
};