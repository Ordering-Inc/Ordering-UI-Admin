"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallCenterApp = void 0;
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
var CallCenterApp = function CallCenterApp() {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var appInfo = {
    title: t('ORDERING_CALL_CENTER_APP', 'Ordering Call Center App'),
    description: t('CALL_CENTER_DESCRIPTION', 'Give this tool to your team of agents, capture orders in just a few seconds, and keep offering the best customer experience possible.'),
    images: {
      live: theme.images.myProducts.myCallcenterAppLive,
      brand: theme.images.myProducts.myCallcenterAppBrand
    },
    live_title: t('LIVE_DEMO', 'Live Demo'),
    live_description: t('APP_LIVE_DEMO_DESCRIPTION', 'This is a branded Ordering.co product; play with it and understand how it works'),
    web_url: 'https://callcenter.tryordering.com/search',
    web_link_title: t('CALL_CENTER', 'Call center'),
    brand_title: t('YOUR_BRANDED_CALL_CENTER', 'Your Branded Call Center'),
    brand_description: t('CALL_CENTER_BRANDED_DESCRIPTION', 'The Call Center is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet or device you add it to.'),
    demo_book_message: 'I would like to book a Demo about the Call center , can you assist me?',
    purchase_message: 'I would like to know about the Call center, can you assist me?'
  };
  return /*#__PURE__*/_react.default.createElement(_AppLayout.AppLayout, {
    appInfo: appInfo
  });
};
exports.CallCenterApp = CallCenterApp;