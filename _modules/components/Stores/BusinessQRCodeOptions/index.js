"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessQRCodeOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));
var _Shared = require("../../Shared");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _BusinessQRCodeOption = require("../BusinessQRCodeOption");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessQRCodeOptionsUI = function BusinessQRCodeOptionsUI(props) {
  var setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    siteState = props.siteState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    itemSelected = _useState4[0],
    setItemSelected = _useState4[1];
  var publishingItems = [{
    key: 'pick_up',
    value: 2,
    title: t('QR_CODE_FOR_PICKUP', 'QR Code for Pickup')
  }, {
    key: 'eat_in',
    value: 3,
    title: t('QR_CODE_FOR_EATIN', 'QR Code for Eat in')
  }, {
    key: 'curbside',
    value: 4,
    title: t('QR_CODE_FOR_CURBSIDE', 'QR Code for Curbside')
  }, {
    key: 'driver_thru',
    value: 5,
    title: t('QR_CODE_FOR_DRIVE_THRU', 'QR Code for Drive Thru')
  }];
  var handleAction = function handleAction(value) {
    var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    setItemSelected(item);
    setIsExtendExtraOpen(value);
    setIsOpen(value);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PublishingContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PUBLISHING', 'Publishing')), /*#__PURE__*/_react.default.createElement(_styles.PublishingListWrapper, null, publishingItems.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PublishingOptionContainer, {
      key: i,
      onClick: function onClick() {
        return handleAction(true, item);
      },
      active: item.key === (itemSelected === null || itemSelected === void 0 ? void 0 : itemSelected.key)
    }, /*#__PURE__*/_react.default.createElement(_styles.PublishingOption, null, /*#__PURE__*/_react.default.createElement(_styles.PublishingName, null, item === null || item === void 0 ? void 0 : item.title)), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, {
      style: {
        color: theme.colors.lightGray
      }
    }));
  }))), width >= 1000 ? isOpen && /*#__PURE__*/_react.default.createElement(_BusinessQRCodeOption.BusinessQRCodeOption, {
    business: props.business,
    open: isOpen,
    item: itemSelected,
    onClose: function onClose() {
      return handleAction(false);
    }
  }) : isOpen && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isOpen,
    onClose: function onClose() {
      return handleAction(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessQRCodeOption.BusinessQRCodeOption, {
    business: props.business,
    siteState: siteState,
    open: isOpen,
    item: itemSelected,
    onClose: function onClose() {
      return handleAction(false);
    }
  })));
};
var BusinessQRCodeOptions = function BusinessQRCodeOptions(props) {
  var businessQRcodeOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessQRCodeOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessQRCodeOptions, businessQRcodeOptionsProps);
};
exports.BusinessQRCodeOptions = BusinessQRCodeOptions;