"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListingHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SearchBar = require("../SearchBar");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Buttons = require("../../styles/Buttons");

var _InfoShareContext = require("../../contexts/InfoShareContext");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessListingHeader = function BusinessListingHeader(props) {
  var searchValue = props.searchValue,
      onSearch = props.onSearch,
      handleOpenAddBusiness = props.handleOpenAddBusiness,
      handleOpenImportCSV = props.handleOpenImportCSV;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  return /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('STORES_LIST', 'Stores list'))), /*#__PURE__*/_react.default.createElement(_styles.ActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.CsvImport, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "secundary",
    onClick: function onClick() {
      return handleOpenImportCSV();
    }
  }, t('IMPORT', 'Import'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Upload, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenAddBusiness();
    }
  }, t('ADD_NEW_STORE', 'Add new store')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomLayout: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })));
};

exports.BusinessListingHeader = BusinessListingHeader;