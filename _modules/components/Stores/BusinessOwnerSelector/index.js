"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessOwnerSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessOwnerSelectorUI = function BusinessOwnerSelectorUI(props) {
  var usersList = props.usersList,
    selectedOwnerIds = props.selectedOwnerIds,
    handleSelectBusinessOwner = props.handleSelectBusinessOwner,
    selectedOwner = props.selectedOwner;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    usersListOptions = _useState2[0],
    setUsersListOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('SELECT_BUSINESS_OWNER', 'Select business owner'));
  var onSelectBusinessOwner = function onSelectBusinessOwner(id) {
    var selectedOwner = usersList === null || usersList === void 0 ? void 0 : usersList.users.find(function (user) {
      return user.id === id;
    });
    handleSelectBusinessOwner(selectedOwner);
  };
  (0, _react.useEffect)(function () {
    var _userLists2;
    if (usersList !== null && usersList !== void 0 && usersList.loading) return;
    var _userLists;
    if (searchValue) {
      _userLists = usersList === null || usersList === void 0 ? void 0 : usersList.users.filter(function (user) {
        return ((user === null || user === void 0 ? void 0 : user.id) + (user === null || user === void 0 ? void 0 : user.name) + (user === null || user === void 0 ? void 0 : user.lastname)).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });
    } else {
      _userLists = usersList === null || usersList === void 0 ? void 0 : usersList.users;
    }
    var _usersListOptions = (_userLists2 = _userLists) === null || _userLists2 === void 0 ? void 0 : _userLists2.map(function (user) {
      return {
        value: user === null || user === void 0 ? void 0 : user.id,
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, user.id, ". ", user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname),
        showDisable: selectedOwnerIds.includes(user.id)
      };
    });
    setUsersListOptions(_usersListOptions);
  }, [usersList, selectedOwnerIds, searchValue]);
  var handleChangeSearch = function handleChangeSearch(searchVal) {
    setSearchValue(searchVal);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessOwnerSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: usersListOptions,
    defaultValue: selectedOwner === null || selectedOwner === void 0 ? void 0 : selectedOwner.id,
    placeholder: placeholder,
    onChange: onSelectBusinessOwner,
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: searchValue,
    handleChangeSearch: handleChangeSearch
  }));
};
var BusinessOwnerSelector = exports.BusinessOwnerSelector = function BusinessOwnerSelector(props) {
  var businessOwnersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessOwnerSelectorUI,
    isBusinessOwners: true,
    defaultUserTypesSelected: [2]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, businessOwnersProps);
};