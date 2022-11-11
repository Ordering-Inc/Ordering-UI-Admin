"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntegrationListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactRouterDom = require("react-router-dom");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _Shared = require("../../Shared");
var _PluginList = require("../PluginList");
var _WebhookList = require("../WebhookList");
var _ApiKeysList = require("../ApiKeysList");
var _DoordashConnect = require("../DoordashConnect");
var _styles2 = require("./styles");
var _styledComponents = require("styled-components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var IntegrationListing = function IntegrationListing(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    search = _useLocation.search;
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var settingParams;
  if (search) {
    var data = search.substring(1).split('&');
    settingParams = data[0];
  }
  var settingId = settingParams && settingParams.split('=')[1];
  var onBasicSettingsRedirect = function onBasicSettingsRedirect(_ref) {
    var id = _ref.id;
    if (!id) {
      return events.emit('go_to_page', {
        page: 'integrations',
        replace: true
      });
    }
    if (id) {
      events.emit('go_to_page', {
        page: 'integrations',
        search: "?id=".concat(id),
        replace: true
      });
    }
  };
  var handleOpenSetting = function handleOpenSetting(id) {
    onBasicSettingsRedirect({
      id: id
    });
    setShowOption(id);
  };
  var handleCloseSettings = function handleCloseSettings() {
    onBasicSettingsRedirect({
      id: null
    });
    setShowOption(null);
  };
  (0, _react.useEffect)(function () {
    if (settingId) {
      onBasicSettingsRedirect({
        id: settingId
      });
      setShowOption(settingId);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.IntegrationsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('INTEGRATIONS', 'Integrations'))), /*#__PURE__*/_react.default.createElement(_styles2.SettingListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenSetting('plugins');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PuzzleFill, null)), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('PLUGINS', 'Plugins')), /*#__PURE__*/_react.default.createElement("p", null, t('PLUGIN_DESCRIPTION', 'This functionality serves to extend the Ordering API functionalities to anything you want without any restriction.')))), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenSetting('webhooks');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Display, null)), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('WEBHOOKS', 'Webhooks')), /*#__PURE__*/_react.default.createElement("p", null, t('WEBHOOK_DESCRIPTION', 'Unlike business webhooks, global webhooks listen to the events of the entire project.')))), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenSetting('apiKeys');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.KeyFill, null)), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('KEYS', 'Api Keys')), /*#__PURE__*/_react.default.createElement("p", null, t('APIKEYS_DESCRIPTION', 'These keys serve to obtain a direct connection to the API without the need for authentication.')))), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenSetting('doordash');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.doordash
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('CONNECT_WITH_DOORDASH', 'Connect with Doordash')), /*#__PURE__*/_react.default.createElement("p", null, t('CONNECT_DOORDASH_DESCRIPTION', 'Send orders directly to your driver in Doordash and keep customers happy with their deliveries.')))))), showOption === 'plugins' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "plugins-integrations",
    defaultSideBarWidth: 600,
    open: showOption === 'plugins',
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }, /*#__PURE__*/_react.default.createElement(_PluginList.PluginList, null)), showOption === 'webhooks' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "webhooks-integrations",
    defaultSideBarWidth: 768,
    open: showOption === 'webhooks',
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }, /*#__PURE__*/_react.default.createElement(_WebhookList.WebhookList, null)), showOption === 'apiKeys' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "apikeys-integrations",
    defaultSideBarWidth: 700,
    open: showOption === 'apiKeys',
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }, /*#__PURE__*/_react.default.createElement(_ApiKeysList.ApiKeysList, null)), showOption === 'doordash' && /*#__PURE__*/_react.default.createElement(_DoordashConnect.DoordashConnect, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }));
};
exports.IntegrationListing = IntegrationListing;