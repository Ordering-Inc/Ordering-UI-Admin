"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KioskApp = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _AppLayout = require("../AppLayout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var KioskApp = function KioskApp() {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var appInfo = {
    title: t('ORDERING_SELF_KIOSK', 'Ordering Self Ordering Kiosk'),
    description: t('KIOS_DESCRIPTION', 'This tool will help your store complete that final step on each sale with innovative and intuitive software and hardware inside your locations.'),
    images: {
      live: theme.images.myProducts.myKioskAppLive,
      brand: theme.images.myProducts.myKioskAppBrand
    },
    live_title: t('LIVE_DEMO', 'Live Demo'),
    live_description: t('APP_LIVE_DEMO_DESCRIPTION', 'This is a branded Ordering.co product. play with it and understand how it works'),
    brand_title: t('YOUR_BRANDED_KIOSK', 'Your Branded Kiosk'),
    brand_description: t('KIOSK_BRANDED_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet you add it to.'),
    demo_book_message: 'I would like to book a Demo about the Kiosk app, can you assist me?',
    purchase_message: 'I would like to know about the Kiosk app, can you assist me?',
    downloads: [{
      id: 1,
      icon: theme.images.myProducts.appStoreSmall,
      link: 'https://apps.apple.com/us/app/ordering-kiosk-2-0/id1615828153'
    }, {
      id: 2,
      icon: theme.images.myProducts.playStoreSmall,
      link: 'https://play.google.com/store/apps/details?id=com.ordering.orderingkioskv5&hl=en&gl=US'
    }]
  };
  return /*#__PURE__*/_react.default.createElement(_AppLayout.AppLayout, {
    appInfo: appInfo
  });
};
exports.KioskApp = KioskApp;