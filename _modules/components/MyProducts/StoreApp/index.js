"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreApp = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _InfoShareContext = require("../../../contexts/InfoShareContext");

var _styles = require("../../../styles");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _BoxLayout = require("../BoxLayout");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StoreApp = function StoreApp() {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var handleOpenURL = function handleOpenURL(url) {
    window.open(url, '_blank');
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PRODUCTS', 'My products'))), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, t('STORE_APP', 'Store app')), /*#__PURE__*/_react.default.createElement("p", null, t('STORE_APP_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')), /*#__PURE__*/_react.default.createElement(_BoxLayout.BoxLayout, {
    title: t('FREE_TO_USE', 'Free to use'),
    description: t('FREE_TO_USE_DESC', 'This app can be used by your fleet with the ordering.co logo.'),
    photo: theme.images.myProducts.storeApp
  }, /*#__PURE__*/_react.default.createElement(_styles2.FreeBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    outline: true,
    onClick: function onClick() {
      return handleOpenURL('https://apps.apple.com/us/app/store-app-2-0/id1608192050');
    }
  }, t('DOWNLOAD_APPLE', 'Download apple')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    outline: true,
    onClick: function onClick() {
      return handleOpenURL('https://play.google.com/store/apps/details?id=com.ordering.storeappv5&pli=1');
    }
  }, t('DOWNLOAD_GOOGLE', 'Download google')))), /*#__PURE__*/_react.default.createElement(_BoxLayout.BoxLayout, {
    title: t('BRANDED_BY_YOU', 'Branded by you'),
    description: t('BRANDED_BY_YOU_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi quam aenean in faucibus ac integer libero. Eu egestas sit imperdiet at sit adipiscing ullamcorper sed sit.'),
    photo: theme.images.myProducts.storeApp
  }, /*#__PURE__*/_react.default.createElement(_styles2.BrandedBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenURL('https://www.ordering.co/ordering-sales');
    }
  }, t('REQUEST_APP_NOW', 'Request app now'))))));
};

exports.StoreApp = StoreApp;