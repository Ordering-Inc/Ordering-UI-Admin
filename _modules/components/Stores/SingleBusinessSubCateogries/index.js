"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessSubCateogries = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Switch = require("../../../styles/Switch");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SingleBusinessSubCateogriesUI = function SingleBusinessSubCateogriesUI(props) {
  var _theme$images$icons, _category$subcategori;
  var index = props.index,
    category = props.category,
    categorySelected = props.categorySelected,
    isSkeleton = props.isSkeleton,
    handleChangeCategory = props.handleChangeCategory,
    handelChangeCategoryActive = props.handelChangeCategoryActive,
    setCurrentCategory = props.setCurrentCategory,
    handleDragStart = props.handleDragStart,
    handleDragOver = props.handleDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd,
    dataSelected = props.dataSelected,
    isCategoriesBottom = props.isCategoriesBottom,
    isLastCategory = props.isLastCategory;
  var theme = (0, _styledComponents.useTheme)();
  var containerRef = (0, _react.useRef)(null);
  var content = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('accordion__icon'),
    _useState4 = _slicedToArray(_useState3, 2),
    setRotate = _useState4[0],
    setRotateState = _useState4[1];
  var toggleAccordion = function toggleAccordion(e, category) {
    if (category !== null && category !== void 0 && category.enabled) {
      setActiveState(setActive === '' ? 'active' : '');
      setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
    }
    setCurrentCategory(category);
    handleChangeCategory(e, category);
  };
  (0, _react.useEffect)(function () {
    if (category && !(category !== null && category !== void 0 && category.enabled)) {
      setActiveState('');
      setRotateState('accordion__icon rotate');
    }
    if (category && category !== null && category !== void 0 && category.enabled && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === (category === null || category === void 0 ? void 0 : category.id)) {
      setActiveState('active');
      setRotateState('accordion__icon rotate');
    }
  }, [category === null || category === void 0 ? void 0 : category.enabled]);
  return /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, {
    ref: containerRef
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.AccordionItem, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 30
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    onClick: function onClick(e) {
      return toggleAccordion(e, category);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionItem, {
    margin: 20 * index,
    active: !isSkeleton && (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id),
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    onDragOver: function onDragOver(e) {
      return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, isLastCategory);
    },
    onDragEnd: function onDragEnd(e) {
      return handleDragEnd(e);
    },
    className: "draggable-category",
    "data-index": category === null || category === void 0 ? void 0 : category.id,
    isAccept: dataSelected && dataSelected === (category === null || category === void 0 ? void 0 : category.id.toString()),
    isBorderBottom: isCategoriesBottom && isLastCategory
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
    alt: "six dots",
    draggable: true,
    onDragStart: function onDragStart(e) {
      return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e);
    }
  }), (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 ? void 0 : category.subcategories.length) > 0 && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretRightFill, {
    className: setRotate
  }), /*#__PURE__*/_react.default.createElement("span", null, category === null || category === void 0 ? void 0 : category.name)), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: category === null || category === void 0 ? void 0 : category.enabled,
    onChange: handelChangeCategoryActive
  }))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, (category === null || category === void 0 || (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 && category.subcategories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (subCategory, i) {
    var _category$subcategori2;
    return /*#__PURE__*/_react.default.createElement(SingleBusinessSubCateogries, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1,
      isLastCategory: (category === null || category === void 0 || (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) - 1 === i
    }));
  }))));
};
var SingleBusinessSubCateogries = exports.SingleBusinessSubCateogries = function SingleBusinessSubCateogries(props) {
  var isSkeleton = props.isSkeleton;
  var singleBusinessSubCateogriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleBusinessSubCateogriesUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleBusinessSubCateogriesUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleBusinessCategory, singleBusinessSubCateogriesProps));
};