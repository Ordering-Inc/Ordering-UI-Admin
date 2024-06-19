"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardOrders = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactour = _interopRequireDefault(require("reactour"));
var _bodyScrollLock = require("body-scroll-lock");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var WizardOrders = exports.WizardOrders = function WizardOrders(props) {
  var isTourOpen = props.isTourOpen,
    setIsTourOpen = props.setIsTourOpen,
    currentStep = props.currentStep,
    detailsOrder = props.detailsOrder;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var tourSteps = [{
    selector: '[data-tour="tour_start"]',
    content: function content(goTo) {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "1."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ORDER_START', 'Lets see your trial, we will guide you step by step.')));
    },
    position: 'bottom'
  }, {
    selector: '[data-tour="tour_detail"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "2."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ORDER_DETAIL', 'Then, you can see all the order details.')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_driver"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "3."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ASSIGN_DRIVER', 'Assign a driver for your delivery order')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_message"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, (detailsOrder === null || detailsOrder === void 0 ? void 0 : detailsOrder.delivery_type) === 1 ? 4 : 3, "."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ORDER_CHAT', 'Finally, you can use the order chat to communicate with customer or driver')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_start"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Stars, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('THATS_IT', 'THAT’S IT'), "!!"), " ", t('TOUR_ORDER_COMPLETED', 'Now, you can see all your order that your store receive')));
    },
    position: 'center'
  }];
  return /*#__PURE__*/_react.default.createElement(_reactour.default, {
    steps: tourSteps,
    isOpen: isTourOpen,
    onRequestClose: function onRequestClose() {
      return setIsTourOpen(false);
    },
    maskClassName: "mask",
    className: "helper",
    rounded: 8,
    onAfterOpen: function onAfterOpen(target) {
      return (0, _bodyScrollLock.disableBodyScroll)(target);
    },
    onBeforeClose: function onBeforeClose(target) {
      return (0, _bodyScrollLock.enableBodyScroll)(target);
    },
    showNavigation: false,
    showCloseButton: false,
    disableFocusLock: true,
    startAt: currentStep,
    goToStep: currentStep,
    disableKeyboardNavigation: true
  });
};