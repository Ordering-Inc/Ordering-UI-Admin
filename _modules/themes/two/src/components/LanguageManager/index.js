"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageManager = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _InfoShareContext = require("../../../../../contexts/InfoShareContext");

var _Buttons = require("../../styles/Buttons");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("./styles");

var _SearchBar = require("../SearchBar");

var _LanguageMainManager = require("../LanguageMainManager");

var _LanguageTransTable = require("../LanguageTransTable");

var _LanguageTransSpread = require("../LanguageTransSpread");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LanguageManagerUI = function LanguageManagerUI(props) {
  var searchValue = props.searchValue,
      _onSearch = props.onSearch;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var _useState = (0, _react.useState)('main'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0, _react.useState)('table'),
      _useState4 = _slicedToArray(_useState3, 2),
      viewMode = _useState4[0],
      setViewMode = _useState4[1];

  return /*#__PURE__*/_react.default.createElement(_styles.LanguageManagerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('LANGUAGE_MANAGER', 'Language Manager'))), /*#__PURE__*/_react.default.createElement(_styles.ActionsGroup, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    search: searchValue,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_styles.TabContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedType === 'main',
    onClick: function onClick() {
      return setSelectedType('main');
    }
  }, t('MAIN', 'Main')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedType === 'translations',
    onClick: function onClick() {
      return setSelectedType('translations');
    }
  }, t('TRANSLATIONS', 'Translations'))), selectedType === 'main' && /*#__PURE__*/_react.default.createElement(_LanguageMainManager.LanguageMainManager, props), selectedType === 'translations' && /*#__PURE__*/_react.default.createElement(_styles.TranslationManagerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ActionGroupWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ActionGroup, null, /*#__PURE__*/_react.default.createElement(_styles.ViewIconWrapper, {
    className: "table-mode",
    active: viewMode === 'table',
    onClick: function onClick() {
      return setViewMode('table');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ViewList, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewIconWrapper, {
    active: viewMode === 'spread',
    onClick: function onClick() {
      return setViewMode('spread');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Table, null)))), viewMode === 'table' && /*#__PURE__*/_react.default.createElement(_LanguageTransTable.LanguageTransTable, props), viewMode === 'spread' && /*#__PURE__*/_react.default.createElement(_LanguageTransSpread.LanguageTransSpread, props)));
};

var LanguageManager = function LanguageManager(props) {
  var languageManagerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageManagerUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.LanguageManager, languageManagerProps);
};

exports.LanguageManager = LanguageManager;