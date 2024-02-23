"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LalaMoveConnect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LalaMoveConnectUI = function LalaMoveConnectUI(props) {
  var actionState = props.actionState,
    onClose = props.onClose;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    settingsOpen = _useState6[0],
    setSettingsOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var toggleMainContent = function toggleMainContent() {
    if (width <= 500) {
      document.getElementById('catDescription').style.width = '100vw';
    } else {
      if (settingsOpen && width >= 1000) {
        document.getElementById('catDescription').style.width = '1000px';
      } else {
        document.getElementById('catDescription').style.width = '500px';
      }
    }
  };
  var handleGoToLink = function handleGoToLink(link) {
    window.open(link, '_blank');
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('catDescription');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;
    if (settingsOpen) {
      document.getElementById('catDescription').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [settingsOpen]);
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  var handleOpenMore = function handleOpenMore(isInitialRender) {
    setSettingsOpen(true);
    if (!isInitialRender) {
      var id = query.get('id');
      history.replace("".concat(location.pathname, "?id=").concat(id, "&more=settings"));
    }
  };
  var handleCloseDescription = function handleCloseDescription() {
    setSettingsOpen(false);
    var id = query.get('id');
    history.replace("".concat(location.pathname, "?id=").concat(id));
  };
  (0, _react.useEffect)(function () {
    var more = query.get('more');
    if (more === 'settings') {
      handleOpenMore(true);
    }
  }, []);
  var LalaMoveConnectDescription = function LalaMoveConnectDescription() {
    return /*#__PURE__*/_react.default.createElement(_styles2.CategoryExtraContent, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleCloseDescription();
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MORE_INFO', 'More Info'))), /*#__PURE__*/_react.default.createElement(_styles2.SettingListConatiner, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      active: true
    }, t('GENERAL', 'General')))), /*#__PURE__*/_react.default.createElement(_styles2.Paragraph, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REQUIREMENTS', 'Requirements')), /*#__PURE__*/_react.default.createElement("p", null, t('LALAMOVE_CONNECT_REQUIREMENTS', 'For this integration to work you need: \n' + '1.- LalaMove account. \n' + '2.- The advanced logistics module must be active. \n' + '3.- Package of Ordering.'))), /*#__PURE__*/_react.default.createElement(_styles2.Paragraph, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ARTICLE', 'Article')), /*#__PURE__*/_react.default.createElement("p", null, t('LALAMOVE_CONNECT_ARTICLE', 'To connect with LalaMove, you’ll have to use plugins, put in your LalaMove credentials, connect your LalaMove account, and create a driver company inside this dashboard; follow the next article step by step and get this connected in less than 5 minutes.')), /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return handleGoToLink(t('LALAMOVE_CONNECT_ARTICLE_LINK', 'https://support.ordering.co/hc/en-us/articles/10673894748941'));
      }
    }, t('VIEW_ARTICLE', 'View Article'))), /*#__PURE__*/_react.default.createElement(_styles2.Paragraph, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SUPPORT', 'Support')), /*#__PURE__*/_react.default.createElement("p", null, t('LALAMOVE_CONNECT_SUPPORT', 'Are you having trouble connecting this?')), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick() {
        return handleGoToLink(t('LALAMOVE_CONNECT_SUPPORT_LINK', 'https://www.ordering.co/contact-ordering'));
      }
    }, t('CONTACT_US', 'Contact us')), "; ", /*#__PURE__*/_react.default.createElement("span", null, t('WE_ARE_HAPPY_TO_HELP', 'we are happy to help.')))), /*#__PURE__*/_react.default.createElement(_styles2.Paragraph, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRICE_INSTALATION', 'Price and installation time.')), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
      className: "bold"
    }, t('DOORDASH_CONNECT_PRICE', '$99 monthly')), " | ", t('DOORDASH_CONNECT_INSTALLATION', 'less than 24 hrs to get it installed in your project.'))), /*#__PURE__*/_react.default.createElement(_styles2.PurchaseWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      outline: true,
      color: "primary",
      onClick: function onClick() {
        return handleGoToLink(t('PURCHASE_INTEGRATION_LINK', 'https://www.ordering.co/en-us/contact-ordering'));
      }
    }, t('PURCHASE_INTEGRATION', 'Purchase Integration')))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "catDescription"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LalaMoveConnectContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DescriptionHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderIcons, null, width > 576 && !settingsOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CONNECT_WITH_LALAMOVE', 'Connect with Lalamove')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary"
  }, t('NEW', 'New'))), /*#__PURE__*/_react.default.createElement(_styles2.Description, null, t('CONNECT_WITH_LALAMOVE_DESCRIPTION', 'If you have already worked with LalaMove or are running your business with LalaMove and Ordering simultaneously, this integration will help you connect both platforms and assign orders through them, making your job easy and automated.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    className: "all-setting",
    onClick: function onClick() {
      return handleOpenMore();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('SETTINGS', 'All settings')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null))), settingsOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(LalaMoveConnectDescription, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    open: true,
    padding: "0px",
    onClose: function onClose() {
      return setSettingsOpen(false);
    },
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(LalaMoveConnectDescription, null)))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var LalaMoveConnect = exports.LalaMoveConnect = function LalaMoveConnect(props) {
  var apiKeysProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LalaMoveConnectUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ApiKeysList, apiKeysProps);
};