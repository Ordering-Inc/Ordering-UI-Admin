"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PosApp = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _AppLayout = require("../AppLayout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PosApp = function PosApp() {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var appInfo = {
    title: t('POINT_OF_SALE', 'Point of Sale'),
    description: t('POS_DESCRIPTION', 'Create orders in your system without the hassle and auto-complete information to give the best customer experience in every order.'),
    images: {
      live: theme.images.myProducts.myPosAppLive,
      brand: theme.images.myProducts.myPosAppBrand
    },
    live_title: t('FREE_TO_USE', 'Free to use'),
    live_description: t('FREE_TO_USE_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    brand_title: t('YOUR_BRANDED_POS', 'Your Branded POS'),
    brand_description: t('POS_BRANDED_DESCRIPTION', 'The POS is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet or device you add it to.'),
    demo_book_message: 'I would like to book a Demo about the POS app , can you assist me?',
    purchase_message: 'I would like to know about the POS app, can you assist me?',
    downloads: [{
      id: 1,
      icon: theme.images.myProducts.appStoreSmall,
      link: 'https://apps.apple.com/us/app/ordering-pos-2-0/id1609520468'
    }, {
      id: 2,
      icon: theme.images.myProducts.playStoreSmall,
      link: 'https://play.google.com/store/apps/details?id=com.ordering.posv5&hl=en&gl=US'
    }]
  };
  return /*#__PURE__*/_react.default.createElement(_AppLayout.AppLayout, {
    appInfo: appInfo
  });
};
exports.PosApp = PosApp;