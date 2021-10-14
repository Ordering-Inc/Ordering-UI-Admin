"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMoreDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BusinessTax = require("../BusinessTax");

var _BusinessDeliveryPickUP = require("../BusinessDeliveryPickUP");

var _BusinessExtension = require("../BusinessExtension");

var _BusinessLogistic = require("../BusinessLogistic");

var _BusinessPreorder = require("../BusinessPreorder");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessMoreDetail = function BusinessMoreDetail(props) {
  var formState = props.formState,
      handleUpdateBusinessClick = props.handleUpdateBusinessClick;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  (0, _react.useEffect)(function () {
    if (formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0) return;
    handleUpdateBusinessClick();
  }, [formState]);
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessMoreDetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('MORE', 'More')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionTitle, null, t('TAX_MANAGER', 'Tax manager'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_BusinessTax.BusinessTax, props)), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionTitle, null, t('DELIVERY_PICKUP_TIMES', 'Delivery/Pickup Times'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_BusinessDeliveryPickUP.BusinessDeliveryPickUp, props)), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionTitle, null, t('EXTENSIONS', 'Extensions'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement(_BusinessExtension.BusinessExtension, props)), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionTitle, null, t('LOGISTIC', 'Logistic'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_BusinessLogistic.BusinessLogistic, props)), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionTitle, null, t('PREORDER', 'Preorder'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "4"
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, props))));
};

exports.BusinessMoreDetail = BusinessMoreDetail;

var ContextAwareToggle = function ContextAwareToggle(_ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      callback = _ref.callback;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;

  var handleButtonClick = function handleButtonClick() {
    decoratedOnClick();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ToggleItemWrapper, {
    active: isCurrentEventKey,
    onClick: handleButtonClick
  }, children);
};