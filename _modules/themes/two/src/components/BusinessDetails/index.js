"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));

var _BsLifePreserver = _interopRequireDefault(require("@meronex/icons/bs/BsLifePreserver"));

var _Switch = require("../../styles/Switch");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessDetailsUI = function BusinessDetailsUI(props) {
  var _businessState$busine, _businessState$busine2, _businessState$busine3, _businessState$busine4, _businessState$busine5, _businessState$busine6, _theme$images, _theme$images$dummies, _businessState$busine7, _businessState$busine8;

  var businessState = props.businessState,
      actionSidebar = props.actionSidebar,
      handleChangeActiveBusiness = props.handleChangeActiveBusiness;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var businessConfigs = [{
    id: 1,
    value: t('INFORMATION', 'Information')
  }, {
    id: 2,
    value: t('Schedule')
  }, {
    id: 3,
    value: t('Menu')
  }, {
    id: 4,
    value: t('Delivery zones')
  }, {
    id: 5,
    value: t('Payment methods')
  }, {
    id: 6,
    value: t('Custom fields')
  }, {
    id: 7,
    value: t('Personalitazion')
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.name) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.name) : /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.enabled) ? /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.enabled,
    onChange: handleChangeActiveBusiness
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.SupportButton, null, /*#__PURE__*/_react.default.createElement(_BsLifePreserver.default, null)), /*#__PURE__*/_react.default.createElement(_styles.CloseButton, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdcClose.default, null)))), (businessState === null || businessState === void 0 ? void 0 : businessState.loading) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }))) : /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    bgimage: optimizeImage(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.header, 'h_400,c_limit')
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContent, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    borderRadius: "5px"
  }, t('CATEGORIES_AND_PRODUCTS', 'Categories & products')), /*#__PURE__*/_react.default.createElement(_styles.BusinessDescription, null, (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.loading) ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }) : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.description), /*#__PURE__*/_react.default.createElement(_styles.BusinessConfigsContainer, null, businessConfigs.map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessConfigItem, {
      key: config.id
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    borderRadius: "5px"
  }, t('EDIT', 'Edit'))));
};

var BusinessDetails = function BusinessDetails(props) {
  var businessDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDetails, businessDetailsProps);
};

exports.BusinessDetails = BusinessDetails;