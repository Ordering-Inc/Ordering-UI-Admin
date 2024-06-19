"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardDelivery = void 0;
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
var WizardDelivery = exports.WizardDelivery = function WizardDelivery(props) {
  var isTourOpen = props.isTourOpen,
    setIsTourOpen = props.setIsTourOpen,
    currentStep = props.currentStep;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var tourSteps = [{
    selector: '[data-tour="tour_add"]',
    content: function content(goTo) {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "1."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_REGISTER_DRIVER', 'First, let’s register a driver')));
    },
    position: 'bottom'
  }, {
    selector: '[data-tour="tour_fill"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "2."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_FILL_DRIVER_MAIN_INFORMATION', 'Fill in the main information to register the driver')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_add"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "3."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_REGISTER_DRIVER_MANAGER', 'Now, you have to register a driver manager')));
    },
    position: 'bottom'
  }, {
    selector: '[data-tour="tour_fill"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "4."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_FILL_DRIVER_MANAGER_MAIN_INFORMATION', 'Fill in the main information to register the driver manager')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_add_group"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "5."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_CREATE_DRIVER_GROUP', 'Click here to create a driver group')));
    },
    position: 'bottom'
  }, {
    selector: '[data-tour="tour_fill_group"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "6."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_FILL_DRIVER_GROUP_MAIN_INFORMATION', 'Fill in the main information to configure your new driver group')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_select_business"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "7."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_SELECT_BUSINESS_FOR_DRIVER_GROUP', 'Select the business who belong to the driver group')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_delivery_completed"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Stars, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('THATS_IT', 'THAT’S IT'), "!!"), " ", t('TOUR_CONFIGURED_DELIVERY_SYSTEM', 'You configured your first Delivery system')));
    },
    position: 'bottom'
  }];
  return /*#__PURE__*/_react.default.createElement(_reactour.default, {
    disableKeyboardNavigation: true,
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
    goToStep: currentStep

    // maskSpace={0}
    // nextStep={() => handleTourNextClick()}
    // prevStep={() => handleTourPrevClick()}
    // getCurrentStep={curr => console.log(curr, 'step')}
    // prevButton={null}
    // disableDotsNavigation
    // accentColor=''
    // badgeContent=''
    // nextButton='next'
  });
};