"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryPickupMore = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BusinessDeliveryDetails = require("../BusinessDeliveryDetails");
var _BusinessPickupDetails = require("../BusinessPickupDetails");
var _BusinessEta = require("../BusinessEta");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("./styles");
var _BusinessDeliveryGroupsDetails = require("../BusinessDeliveryGroupsDetails");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessDeliveryPickupMore = exports.BusinessDeliveryPickupMore = function BusinessDeliveryPickupMore(props) {
  var setIsExtendExtraOpen = props.setIsExtendExtraOpen;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('delivery'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTab = _useState2[0],
    setSelectedTab = _useState2[1];
  var tabs = [{
    key: 'delivery',
    content: t('DELIVERY', 'Delivery')
  }, {
    key: 'pickup',
    content: t('PICKUP', 'Pickup')
  }, {
    key: 'driver_delivery_group',
    content: t('DRIVER_DELIVERY_GROUP', 'Driver Delivery Group')
  }, {
    key: 'advanced_eta',
    content: t('ADVANCED_ETA', 'Advanced ETA')
  }];
  (0, _react.useEffect)(function () {
    setIsExtendExtraOpen(false);
  }, [selectedTab]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setSelectedTab(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick('delivery');
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_PICKUP_MORE', 'Delivery, pickup & more')), /*#__PURE__*/_react.default.createElement(_styles.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, tabs.map(function (tab) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: tab.key,
      active: tab.key === selectedTab,
      onClick: function onClick() {
        return handleTabClick(tab.key);
      }
    }, tab.content);
  }))), selectedTab === 'delivery' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryDetails.BusinessDeliveryDetails, props), selectedTab === 'pickup' && /*#__PURE__*/_react.default.createElement(_BusinessPickupDetails.BusinessPickupDetails, props), selectedTab === 'driver_delivery_group' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryGroupsDetails.DriversGroupsListingDetails, props), selectedTab === 'advanced_eta' && /*#__PURE__*/_react.default.createElement(_BusinessEta.BusinessEta, props));
};