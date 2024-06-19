"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _styledComponents = require("styled-components");
var _LalaMoveConnect = require("../LalaMoveConnect");
var _Deliverect = require("../Deliverect");
var _ItsaCheckmate = require("../ItsaCheckmate");
var _reactHubspotForm = _interopRequireDefault(require("react-hubspot-form"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _PickerExpress = require("../PickerExpress");
var _PaymentGateway = require("./PaymentGateway");
var _Analytics = require("./Analytics");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var IntegrationListing = exports.IntegrationListing = function IntegrationListing(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    search = _useLocation.search;
  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showOption = _useState2[0],
    setShowOption = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showForm = _useState4[0],
    setShowForm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isSubmitted = _useState6[0],
    setIsSubmitted = _useState6[1];
  var _useState7 = (0, _react.useState)(2),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTab = _useState8[0],
    setSelectedTab = _useState8[1];
  var deliveryPlatformList = [{
    key: 'doordash',
    title: t('CONNECT_WITH_DOORDASH', 'Connect with Doordash'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.general.doordash
    }),
    description: t('CONNECT_DOORDASH_DESCRIPTION', 'Send orders directly to your driver in Doordash and keep customers happy with their deliveries.')
  }, {
    key: 'lalamove',
    title: t('CONNECT_WITH_LALAMOVE', 'Connect with Lalamove'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.general.lalamove
    }),
    description: t('CONNECT_LALAMOVE_DESCRIPTION', 'Send orders directly to your drivers in LalaMove and keep customers happy with their deliveries.')
  }, {
    key: 'picker_express',
    title: t('CONNECT_WITH_PICKER_EXPRESS', 'Connect with Picker Express'),
    icon: /*#__PURE__*/_react.default.createElement("img", {
      src: theme.images.general.pickerExpress
    }),
    description: t('CONNECT_PICKER_EXPRESS_DESCRIPTION', 'Picker express connect you with +200 hundred thousand driver from +10 delivery companies from your city.')
  }];
  var orderingDevelopers = [{
    key: 'plugins',
    title: t('PLUGINS', 'Plugins'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PuzzleFill, null),
    description: t('PLUGIN_DESCRIPTION', 'This functionality serves to extend the Ordering API functionalities to anything you want without any restriction.')
  }, {
    key: 'webhooks',
    title: t('WEBHOOKS', 'Webhooks'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Display, null),
    description: t('WEBHOOK_DESCRIPTION', 'Unlike business webhooks, global webhooks listen to the events of the entire project.')
  }, {
    key: 'apiKeys',
    title: t('KEYS', 'Api Keys'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.KeyFill, null),
    description: t('APIKEYS_DESCRIPTION', 'These keys serve to obtain a direct connection to the API without the need for authentication.')
  }];
  var tabList = [{
    key: 2,
    name: t('ORDERING_DEVELOPERS', 'Ordering developers')
  }, {
    key: 3,
    name: t('DELIVERY_PLATFORM', 'Delivery Platform')
  }, {
    key: 4,
    name: t('POS_INTEGRATIONS', 'POS Integrations')
  }, {
    key: 5,
    name: t('PAYMENT_GETWAYS', 'Payment Gateways')
  }, {
    key: 6,
    name: t('ANALYTICS', 'Analytics')
  }];
  var settingParams;
  if (search) {
    var data = search.substring(1).split('&');
    settingParams = data[0];
  }
  var settingId = settingParams && settingParams.split('=')[1];
  var onBasicSettingsRedirect = function onBasicSettingsRedirect(_ref, isInitialRender) {
    var id = _ref.id;
    if (!id) {
      return events.emit('go_to_page', {
        page: 'integrations',
        replace: true
      });
    }
    if (id && !isInitialRender) {
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
      }, true);
      setShowOption(settingId);
    }
  }, []);
  var FormLoading = function FormLoading() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 20,
      width: 300,
      style: {
        marginBottom: 20
      }
    })), _toConsumableArray(Array(4).keys()).map(function (key) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: key
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        height: 15,
        width: 300,
        style: {
          marginBottom: 10
        }
      }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        height: 35,
        style: {
          marginBottom: 30
        }
      }));
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.IntegrationsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('INTEGRATIONS', 'Integrations'))), width > 768 && /*#__PURE__*/_react.default.createElement(_styles2.TabWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, tabList.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: tab.key,
      active: tab.key === selectedTab,
      onClick: function onClick() {
        return setSelectedTab(tab.key);
      }
    }, tab.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles2.CategorGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.CategorySection, {
    style: {
      order: selectedTab === 2 ? 1 : selectedTab
    }
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDERING_DEVELOPERS', 'Ordering developers')), /*#__PURE__*/_react.default.createElement(_styles2.SettingList, null, orderingDevelopers.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleOpenSetting(item.key);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, item === null || item === void 0 ? void 0 : item.icon), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.description)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.CategorySection, {
    style: {
      order: selectedTab === 3 ? 1 : selectedTab
    }
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_PLATFORM', 'Delivery Platform')), /*#__PURE__*/_react.default.createElement(_styles2.SpecialPartnerWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowForm(true);
    }
  }, t('LOOKING_FOR_SPECIFIC_PARTNER', 'Looking for a specific partner?'))), /*#__PURE__*/_react.default.createElement(_styles2.SettingList, null, deliveryPlatformList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleOpenSetting(item.key);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, item === null || item === void 0 ? void 0 : item.icon), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.description)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.CategorySection, {
    style: {
      order: selectedTab === 4 ? 1 : selectedTab
    }
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('POS_INTEGRATIONS', 'POS Integrations')), /*#__PURE__*/_react.default.createElement(_styles2.SettingList, null, /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenSetting('deliverect');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.deliverect
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('DELIVERECT', 'Deliverect')), /*#__PURE__*/_react.default.createElement("p", null, t('SYNC_DEC_FIRST', 'The easiest way to manage all your online orders.')))), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContainer, {
    onClick: function onClick() {
      return handleOpenSetting('itsacheckmate');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.ItsaCheckmateLogo
  })), /*#__PURE__*/_react.default.createElement(_styles2.SettingItemContent, null, /*#__PURE__*/_react.default.createElement("h5", null, t('ITSACHECKMATE', 'ItsaCheckmate')), /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('ITSACHECKMATE_SUB_HEADER', 'Take control of all your <strong>Ordering Platform Menus</strong> in one place!')
    }
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      order: selectedTab === 5 ? 1 : selectedTab
    }
  }, /*#__PURE__*/_react.default.createElement(_PaymentGateway.PaymentGateway, {
    showOption: showOption,
    setShowOption: setShowOption,
    handleCloseSettings: handleCloseSettings,
    handleOpenBasicSetting: handleOpenSetting
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      order: selectedTab === 6 ? 1 : selectedTab
    }
  }, /*#__PURE__*/_react.default.createElement(_Analytics.Analytics, {
    showOption: showOption,
    setShowOption: setShowOption
  })))), showOption === 'plugins' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "plugins-integrations",
    defaultSideBarWidth: 600,
    open: showOption === 'plugins',
    onClose: function onClose() {
      return handleCloseSettings();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_PluginList.PluginList, null)), showOption === 'webhooks' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "webhooks-integrations",
    defaultSideBarWidth: 768,
    open: showOption === 'webhooks',
    onClose: function onClose() {
      return handleCloseSettings();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_WebhookList.WebhookList, null)), showOption === 'apiKeys' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "apikeys-integrations",
    defaultSideBarWidth: 700,
    open: showOption === 'apiKeys',
    onClose: function onClose() {
      return handleCloseSettings();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_ApiKeysList.ApiKeysList, null)), showOption === 'doordash' && /*#__PURE__*/_react.default.createElement(_DoordashConnect.DoordashConnect, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }), showOption === 'lalamove' && /*#__PURE__*/_react.default.createElement(_LalaMoveConnect.LalaMoveConnect, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }), showOption === 'picker_express' && /*#__PURE__*/_react.default.createElement(_PickerExpress.PickerExpress, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }), showOption === 'deliverect' && /*#__PURE__*/_react.default.createElement(_Deliverect.Deliverect, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }), showOption === 'itsacheckmate' && /*#__PURE__*/_react.default.createElement(_ItsaCheckmate.ItsaCheckmate, {
    onClose: function onClose() {
      return handleCloseSettings();
    }
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "30px",
    title: t('LOOKING_FOR_SPECIFIC_PARTNER', 'Looking for a specific partner?'),
    open: showForm,
    onClose: function onClose() {
      setIsSubmitted(false);
      setShowForm(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.HubspotFormWrapper, null, /*#__PURE__*/_react.default.createElement(_reactHubspotForm.default, {
    region: "na1",
    portalId: "6130635",
    formId: "cb51d3cb-f9ed-4162-9479-d4cf164c391d",
    onFormSubmitted: function onFormSubmitted() {
      return setIsSubmitted(true);
    },
    onReady: function onReady(form) {
      return console.log('Form ready!');
    },
    loading: /*#__PURE__*/_react.default.createElement(FormLoading, null)
  }), isSubmitted && /*#__PURE__*/_react.default.createElement(_styles2.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      setIsSubmitted(false);
      setShowForm(false);
    }
  }, t('CLOSE', 'Close'))))));
};