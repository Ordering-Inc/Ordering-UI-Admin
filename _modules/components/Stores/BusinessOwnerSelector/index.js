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
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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