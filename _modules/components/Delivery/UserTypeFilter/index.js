"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTypeFilterUI = exports.UserTypeFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserTypeFilterUI = function UserTypeFilterUI(props) {
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
  return /*#__PURE__*/_react.default.createElement(_styles2.UserTypeFilterContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, userTypes && userTypes.length > 0 && userTypes.map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_styles.Button, {
      key: type.id,
      color: checkIsActive(type.value) ? 'primary' : 'secundaryDark',
      onClick: function onClick() {
        return handleChangeUserRole(type.value);
      }
    }, type.title, checkIsActive(type.value) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  })));
};
exports.UserTypeFilterUI = UserTypeFilterUI;
var UserTypeFilter = function UserTypeFilter(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var userTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [{
      id: 1,
      title: t('ALL', 'All'),
      value: [0, 1, 2]
    }, {
      id: 2,
      title: t('BUSINESS_OWNER', 'Business owner'),
      value: [2]
    }, {
      id: 3,
      title: t('CITY_MANAGER', 'City manager'),
      value: [1]
    }, {
      id: 4,
      title: t('ADMINISTRATORS', 'Administrators'),
      value: [0]
    }],
    defaultUserTypes: props.defaultUserTypes || [0, 1, 2],
    onChangeUserType: props.handleChangeUserType
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserTypeFilter, userTypeFilterProps);
};
exports.UserTypeFilter = UserTypeFilter;