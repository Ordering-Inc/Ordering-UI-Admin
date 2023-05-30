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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
  }, /*#__PURE__*/_react.default.createElement(_PaymentGateway.PaymentGateway, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      order: selectedTab === 6 ? 1 : selectedTab
    }
  }, /*#__PURE__*/_react.default.createElement(_Analytics.Analytics, null)))), showOption === 'plugins' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
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
exports.IntegrationListing = IntegrationListing;