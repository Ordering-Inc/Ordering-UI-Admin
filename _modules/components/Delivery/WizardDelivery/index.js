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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WizardDelivery = function WizardDelivery(props) {
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
exports.WizardDelivery = WizardDelivery;