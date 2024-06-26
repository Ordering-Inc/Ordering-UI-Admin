"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSubOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _BsCircleFill = _interopRequireDefault(require("@meronex/icons/bs/BsCircleFill"));
var _BsCircleHalf = _interopRequireDefault(require("@meronex/icons/bs/BsCircleHalf"));
var _BsDashCircle = _interopRequireDefault(require("@meronex/icons/bs/BsDashCircle"));
var _BsPlusCircle = _interopRequireDefault(require("@meronex/icons/bs/BsPlusCircle"));
var _styles = require("./styles");
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _MdRadioButtonUnchecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonUnchecked"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductOptionSubOptionUI = function ProductOptionSubOptionUI(props) {
  var state = props.state,
    increment = props.increment,
    decrement = props.decrement,
    balance = props.balance,
    option = props.option,
    suboption = props.suboption,
    toggleSelect = props.toggleSelect,
    changePosition = props.changePosition,
    isSoldOut = props.isSoldOut,
    setIsScrollAvailable = props.setIsScrollAvailable,
    onChange = props.onChange;
  var disableIncrement = option !== null && option !== void 0 && option.limit_suboptions_by_max ? balance === (option === null || option === void 0 ? void 0 : option.max) || state.quantity === suboption.max : state.quantity === (suboption === null || suboption === void 0 ? void 0 : suboption.max) || !state.selected && balance === (option === null || option === void 0 ? void 0 : option.max);
  var price = option !== null && option !== void 0 && option.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && state.position !== 'whole' ? suboption === null || suboption === void 0 ? void 0 : suboption.half_price : suboption === null || suboption === void 0 ? void 0 : suboption.price;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMessage = _useState2[0],
    setShowMessage = _useState2[1];
  var dirtyRef = (0, _react.useRef)(null);
  var handleIncrement = function handleIncrement(e) {
    e.stopPropagation();
    increment();
  };
  var handleDecrement = function handleDecrement(e) {
    e.stopPropagation();
    decrement();
  };
  var handlePosition = function handlePosition(e, position) {
    e.stopPropagation();
    changePosition(position);
  };
  var handleSuboptionClick = function handleSuboptionClick() {
    var _option$suboptions;
    dirtyRef.current = true;
    toggleSelect();
    if (balance === (option === null || option === void 0 ? void 0 : option.max) && (option === null || option === void 0 || (_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length) > balance && !((option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : option.max) === 1) && !state.selected) {
      setShowMessage(true);
    }
  };
  (0, _react.useEffect)(function () {
    var _option$suboptions2;
    if (!(balance === (option === null || option === void 0 ? void 0 : option.max) && (option === null || option === void 0 || (_option$suboptions2 = option.suboptions) === null || _option$suboptions2 === void 0 ? void 0 : _option$suboptions2.length) > balance && !((option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : option.max) === 1) && !state.selected)) {
      setShowMessage(false);
    }
  }, [balance]);
  (0, _react.useEffect)(function () {
    if (balance === (option === null || option === void 0 ? void 0 : option.max) && state !== null && state !== void 0 && state.selected && dirtyRef) {
      if ((dirtyRef === null || dirtyRef === void 0 ? void 0 : dirtyRef.current) !== null) {
        dirtyRef.current = false;
        setIsScrollAvailable(true);
      }
    }
  }, [state === null || state === void 0 ? void 0 : state.selected]);
  (0, _react.useEffect)(function () {
    if (dirtyRef !== null && dirtyRef !== void 0 && dirtyRef.current || !(suboption !== null && suboption !== void 0 && suboption.preselected) || !(option !== null && option !== void 0 && option.respect_to)) return;
    var newState = _objectSpread(_objectSpread({}, state), {}, {
      selected: suboption === null || suboption === void 0 ? void 0 : suboption.preselected,
      quantity: state.selected ? 0 : 1
    });
    onChange(newState, suboption, option);
  }, [suboption, dirtyRef, option]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    onClick: function onClick() {
      return handleSuboptionClick();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.LeftOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconControl, null, (option === null || option === void 0 ? void 0 : option.min) === 0 && (option === null || option === void 0 ? void 0 : option.max) === 1 || (option === null || option === void 0 ? void 0 : option.max) > 1 ? state !== null && state !== void 0 && state.selected ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  }) : state !== null && state !== void 0 && state.selected ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, {
    disabled: true
  })), suboption.image && suboption.image !== '-' && /*#__PURE__*/_react.default.createElement(_styles.SubOptionThumbnail, {
    src: suboption.image
  }), /*#__PURE__*/_react.default.createElement(_styles.Text, null, /*#__PURE__*/_react.default.createElement("div", null, suboption === null || suboption === void 0 ? void 0 : suboption.name))), /*#__PURE__*/_react.default.createElement(_styles.RightOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.QuantityControl, null, (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && (state === null || state === void 0 ? void 0 : state.selected) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDashCircle.default, {
    disabled: state.quantity === 0 || isSoldOut,
    onClick: handleDecrement
  }), state.quantity, /*#__PURE__*/_react.default.createElement(_BsPlusCircle.default, {
    disabled: disableIncrement || isSoldOut,
    onClick: handleIncrement
  }))), /*#__PURE__*/_react.default.createElement(_styles.PositionControl, null, (option === null || option === void 0 ? void 0 : option.with_half_option) && (state === null || state === void 0 ? void 0 : state.selected) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
    className: ['reverse', state.selected && state.position === 'left' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'left');
    }
  }), /*#__PURE__*/_react.default.createElement(_BsCircleFill.default, {
    className: [state.selected && state.position === 'whole' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'whole');
    }
  }), /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
    className: [state.selected && state.position === 'right' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'right');
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles.SuboptionPrice, null, price > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "+ ", parsePrice(price)))), showMessage && /*#__PURE__*/_react.default.createElement(_styles.Text, {
    noMargin: true
  }, /*#__PURE__*/_react.default.createElement("span", null, "".concat(t('OPTIONS_MAX_LIMIT', 'Maximum options to choose'), ": ").concat(option === null || option === void 0 ? void 0 : option.max))));
};
var ProductOptionSubOption = function ProductOptionSubOption(props) {
  var productOptionSubOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionSubOptionUI,
    isOrigin: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductOptionSuboption, productOptionSubOptionProps);
};
exports.ProductOptionSubOption = ProductOptionSubOption;