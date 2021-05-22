"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsSection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _GrFilter = _interopRequireDefault(require("@meronex/icons/gr/GrFilter"));

var _Buttons = require("../../styles/Buttons");

var _MdAddCircleOutline = _interopRequireDefault(require("@meronex/icons/ios/MdAddCircleOutline"));

var _MdcFilterOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOutline"));

var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));

var _Modal = require("../Modal");

var _UserExport = require("../UserExport");

var _AddUser = require("../AddUser");

var _UsersFilterList = require("../UsersFilterList");

var _SearchBar = require("../SearchBar");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ActionsSection = function ActionsSection(props) {
  var searchVal = props.searchVal,
      onSearch = props.onSearch,
      filterValues = props.filterValues;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var _useState3 = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      addUserModal = _useState4[0],
      setAddUserModal = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ActionsSectionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SearchContent, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    search: searchVal,
    onSearch: onSearch,
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_GrFilter.default, {
    onClick: function onClick() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FilterButton, null, (filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes) && Object.keys(filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes) > 0 ? /*#__PURE__*/_react.default.createElement(_MdcFilterOutline.default, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))), /*#__PURE__*/_react.default.createElement(_styles.ExportContainer, null, /*#__PURE__*/_react.default.createElement(_UserExport.UserExport, props)), /*#__PURE__*/_react.default.createElement(_styles.AddUserContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.RectButton, {
    onClick: function onClick() {
      return setAddUserModal(_objectSpread(_objectSpread({}, addUserModal), {}, {
        formOpen: true
      }));
    },
    color: "darkBlue"
  }, /*#__PURE__*/_react.default.createElement(_MdAddCircleOutline.default, null), t('ADD_USER', 'Add user')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modals.formOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_UsersFilterList.UsersFilterList, _extends({}, props, {
    onCloseModal: function onCloseModal() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: addUserModal.formOpen,
    width: "70%",
    onClose: function onClose() {
      return setAddUserModal(_objectSpread(_objectSpread({}, addUserModal), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddUser.AddUser, _extends({}, props, {
    onCloseModal: function onCloseModal() {
      return setAddUserModal(_objectSpread(_objectSpread({}, addUserModal), {}, {
        formOpen: false
      }));
    }
  }))));
};

exports.ActionsSection = ActionsSection;