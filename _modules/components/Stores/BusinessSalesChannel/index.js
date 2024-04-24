"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSalesChannel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BusinessSalesFacebook = require("../BusinessSalesFacebook");
var _BusinessSalesTiktok = require("../BusinessSalesTiktok");
var _BusinessSalesInstagram = require("../BusinessSalesInstagram");
var _BusinessSalesGoogle = require("../BusinessSalesGoogle");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSalesChannel = exports.BusinessSalesChannel = function BusinessSalesChannel(props) {
  var setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    siteState = props.siteState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasConnectModal = _useState4[0],
    setHasConnectModal = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenSocial = _useState6[0],
    setIsOpenSocial = _useState6[1];
  var socialList = [{
    key: 'facebook',
    name: t('FACEBOOK', 'Facebook'),
    icon: theme.images.icons.facebook,
    description: t('FACEBOOK_DESCRIPTION', 'Now you can add a “Shop now” link on your business’s Facebook page that goes straight to your ordering menu.')
  }, {
    key: 'tiktok',
    name: t('TIKTOK', 'Tiktok'),
    icon: theme.images.icons.tiktok,
    description: t('TIKTOK_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
  }, {
    key: 'instagram',
    name: t('INSTAGRAM', 'Instagram'),
    icon: theme.images.icons.instagram,
    description: t('INSTAGRAM_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
  }, {
    key: 'google_my_business',
    name: t('GOOGLE_MY_BUSINESS', 'Google My Business'),
    icon: theme.images.icons.businessGoogle,
    description: t('GOOGLE_MY_BUSINESS_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?')
  }];
  var handleConnect = function handleConnect(item) {
    handleCloseDetail();
    setSelectedItem(item);
    setHasConnectModal(true);
  };
  var handleOpenSocial = function handleOpenSocial() {
    setHasConnectModal(false);
    setIsOpenSocial(true);
    setIsExtendExtraOpen(true);
  };
  var handleCloseDetail = function handleCloseDetail() {
    setIsOpenSocial(false);
    setIsExtendExtraOpen(false);
    setSelectedItem(null);
  };
  var storeUrl = (0, _react.useMemo)(function () {
    var _siteState$site, _siteState$site2, _siteState$site3;
    return siteState !== null && siteState !== void 0 && (_siteState$site = siteState.site) !== null && _siteState$site !== void 0 && _siteState$site.domain && (siteState === null || siteState === void 0 || (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.ssl_process_status) === 'ended' && (siteState === null || siteState === void 0 ? void 0 : siteState.ssl_status) !== 'error' ? "https://".concat(siteState === null || siteState === void 0 || (_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.domain, "/store/").concat(business === null || business === void 0 ? void 0 : business.slug) : "https://".concat(ordering.project, ".tryordering.com/store/").concat(business === null || business === void 0 ? void 0 : business.slug);
  }, [siteState, business]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.SalesContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SALES_CHANNELS', 'Sales channels')), socialList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SocialBlock, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.BlockHeader, null, /*#__PURE__*/_react.default.createElement("img", {
      src: item.icon,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("p", null, item.name)), /*#__PURE__*/_react.default.createElement("p", null, item.description), /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleConnect(item);
      }
    }, t('CONNECT', 'Connect')));
  })), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('CONNECTING_SALES_CHANNELS', 'Connecting sales Channels'),
    open: hasConnectModal,
    onClose: function onClose() {
      return setHasConnectModal(false);
    },
    width: "768px"
  }, /*#__PURE__*/_react.default.createElement(_styles2.ConnectingContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('CONNECTING_SALES_CHANNELS_DESC_1', 'Lorem ipsum dolor sit amet consectetur. Fringilla nulla in tincidunt id in erat et. In massa commodo imperdiet varius pharetra ultricies nunc dapibus integer. Gravida scelerisque justo hendrerit elit neque. Nunc velit vel eu velit. Faucibus turpis feugiat id nisi orci sodales.')), /*#__PURE__*/_react.default.createElement("p", null, t('CONNECTING_SALES_CHANNELS_DESC_2', 'Lorem ipsum dolor sit amet consectetur. Fringilla nulla in tincidunt id in erat et. In massa commodo imperdiet varius pharetra ultricies nunc dapibus integer. Gravida scelerisque justo hendrerit elit neque. Nunc velit vel eu velit. Faucibus turpis feugiat id nisi orci sodales.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleOpenSocial
  }, t('OK_I_UNDERSTAND', 'Ok, I understand')))), width >= 1000 ? isOpenSocial && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'facebook' && /*#__PURE__*/_react.default.createElement(_BusinessSalesFacebook.BusinessSalesFacebook, {
    socialItem: selectedItem,
    storeUrl: storeUrl,
    onClose: handleCloseDetail
  }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'tiktok' && /*#__PURE__*/_react.default.createElement(_BusinessSalesTiktok.BusinessSalesTiktok, {
    storeUrl: storeUrl,
    socialItem: selectedItem,
    onClose: handleCloseDetail
  }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'instagram' && /*#__PURE__*/_react.default.createElement(_BusinessSalesInstagram.BusinessSalesInstagram, {
    storeUrl: storeUrl,
    socialItem: selectedItem,
    onClose: handleCloseDetail
  }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'google_my_business' && /*#__PURE__*/_react.default.createElement(_BusinessSalesGoogle.BusinessSalesGoogle, {
    storeUrl: storeUrl,
    socialItem: selectedItem,
    onClose: handleCloseDetail
  })) : isOpenSocial && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isOpenSocial,
    onClose: handleCloseDetail
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'facebook' && /*#__PURE__*/_react.default.createElement(_BusinessSalesFacebook.BusinessSalesFacebook, {
    businessSlug: business.slug,
    socialItem: selectedItem,
    onClose: handleCloseDetail
  }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'tiktok' && /*#__PURE__*/_react.default.createElement(_BusinessSalesTiktok.BusinessSalesTiktok, {
    socialItem: selectedItem,
    onClose: handleCloseDetail
  }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'instagram' && /*#__PURE__*/_react.default.createElement(_BusinessSalesInstagram.BusinessSalesInstagram, {
    businessSlug: business.slug,
    socialItem: selectedItem,
    onClose: handleCloseDetail
  }), (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.key) === 'google_my_business' && /*#__PURE__*/_react.default.createElement(_BusinessSalesGoogle.BusinessSalesGoogle, {
    businessSlug: business.slug,
    socialItem: selectedItem,
    onClose: handleCloseDetail
  }))));
};