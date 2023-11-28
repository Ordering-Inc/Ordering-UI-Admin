"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSalesTiktok = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessSalesTiktok = function BusinessSalesTiktok(props) {
  var onClose = props.onClose,
    socialItem = props.socialItem;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      onClose && onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('businessSocial').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('businessSocial').style.width = '100%';
      } else {
        document.getElementById('businessSocial').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "businessSocial"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.LeftHeader, null, /*#__PURE__*/_react.default.createElement("img", {
    src: socialItem.icon,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h2", null, socialItem.name)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: onClose,
    color: "black"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_DESC', 'On TikTok, we must create a catalog; for this, we will click on the button: Add Catalog. A pop-up will appear that we will fill in with the information you request.')), /*#__PURE__*/_react.default.createElement(_styles2.LinkText, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://ads.tiktok.com/i18n/home",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "https://ads.tiktok.com/i18n/home")), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 1"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP1_DESC', 'Please put the name of the Catalog that we are creating.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep1,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 2"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP2_DESC', 'Then click on the Business Center account. If you already have one created, select the one you need; if not, click Create.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep2,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 3"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP3_DESC', 'Write the name of your Business Center, select the Time Zone, and click the Create button.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep3,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 4"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP4_DESC', 'Then click again on the Business Center field, and the one you just created will appear, select it.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep4,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 5"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP5_DESC', 'Click on the Industry field and select the option that appears, in this case, E-commerce.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep5,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 6"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP6_DESC', 'Select the Default location and Default Currency according to your need, and click the Create button.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep6,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 7"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP7_DESC', 'TikTok will show you a brief tour of your Dashboard so you can get to know it.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep7,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 8"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP8_DESC', 'After watching the tutorial, TikTok will enable your Dashboard to start uploading the things you need, and the first thing you\'ll do is add products. Just click on the Products option in the Sidebar and click on the Add Products button.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep8,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 9"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP9_DESC', 'Select the option you like the most to upload your products; when you choose it, click Next.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep9,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.Step, null, /*#__PURE__*/_react.default.createElement("h3", null, t('STEP', 'Step'), " 10"), /*#__PURE__*/_react.default.createElement("p", null, t('BUSINESS_TIKTOK_STEP10_DESC', 'Fill in the requested fields; click on the Import button when ready.')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.salesChannels.tiktokStep10,
    alt: ""
  })));
};
exports.BusinessSalesTiktok = BusinessSalesTiktok;