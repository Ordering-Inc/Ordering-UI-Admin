"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersListingHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("../../../styles");

var _InfoShareContext = require("../../../contexts/InfoShareContext");

var _Users = require("../../Users");

var _reactBootstrap = require("react-bootstrap");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UsersListingHeader = function UsersListingHeader(props) {
  var deafultUserTypesSelected = props.deafultUserTypesSelected,
      disabledActiveStateCondition = props.disabledActiveStateCondition,
      title = props.title,
      selectedUsers = props.selectedUsers,
      deleteUsersActionState = props.deleteUsersActionState,
      handleDeleteSeveralUsers = props.handleDeleteSeveralUsers,
      userTypesSelected = props.userTypesSelected,
      selectedUserActiveState = props.selectedUserActiveState,
      searchValue = props.searchValue,
      onSearch = props.onSearch,
      handleOpenUserAddForm = props.handleOpenUserAddForm,
      isDriversPage = props.isDriversPage,
      isDriversManagersPage = props.isDriversManagersPage,
      handleOpenTour = props.handleOpenTour;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  return /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, title), (isDriversPage || isDriversManagersPage) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ActionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenUserAddForm();
    },
    "data-tour": "tour_add"
  }, isDriversPage ? t('ADD_DRIVER', 'Add driver') : isDriversManagersPage ? t('ADD_DRIVER_MANAGER', 'Add driver manager') : t('ADD_USER', 'Add user')), /*#__PURE__*/_react.default.createElement(_Users.UsersExportCSV, {
    deafultUserTypesSelected: deafultUserTypesSelected,
    disabledActiveStateCondition: disabledActiveStateCondition,
    userTypesSelected: userTypesSelected,
    selectedUserActiveState: selectedUserActiveState
  }), /*#__PURE__*/_react.default.createElement(_Users.UsersDeleteButton, {
    selectedUsers: selectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers
  }), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })));
};

exports.UsersListingHeader = UsersListingHeader;