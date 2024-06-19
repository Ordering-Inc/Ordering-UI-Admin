"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverApp = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _AppLayout = require("../AppLayout");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriverApp = exports.DriverApp = function DriverApp() {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var appInfo = {
    title: t('DRIVER_APP', 'Driver App'),
    description: t('DRIVER_APP_DESCRIPTION', 'Your fleet\'s best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders\' timing, and control their busy times.'),
    images: {
      live: theme.images.myProducts.driverAppFree,
      brand: theme.images.myProducts.driverAppBrand
    },
    live_title: t('FREE_TO_USE', 'Free to use'),
    live_description: t('DRIVER_APP_FREE_TO_USE_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    brand_title: t('YOUR_BRANDED_APP', 'Your Branded App'),
    brand_description: t('DRIVER_APP_BRANDED_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    demo_book_message: 'I would like to book a Demo about the Driver app , can you assist me?',
    purchase_message: 'I would like to know about the Driver app, can you assist me?',
    downloads: [{
      id: 1,
      icon: theme.images.myProducts.appStoreSmall,
      link: 'https://apps.apple.com/us/app/driver-app-2-0/id1606257815'
    }, {
      id: 2,
      icon: theme.images.myProducts.playStoreSmall,
      link: 'https://play.google.com/store/apps/details?id=com.ordering.deliveryv5'
    }],
    purchase_link: 'https://buy.stripe.com/dR6g151tdcn0g9y3d3',
    demo_link: 'https://www.ordering.co/platform-demo-and-pricing'
  };
  return /*#__PURE__*/_react.default.createElement(_AppLayout.AppLayout, {
    appInfo: appInfo,
    isDriver: true
  });
};