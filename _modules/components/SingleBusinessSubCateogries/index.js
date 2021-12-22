"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessSubCateogries = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Switch = require("../../styles/Switch");

var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleBusinessSubCateogriesUI = function SingleBusinessSubCateogriesUI(props) {
  var _theme$images$icons;

  var index = props.index,
      category = props.category,
      categorySelected = props.categorySelected,
      isSkeleton = props.isSkeleton,
      handleChangeCategory = props.handleChangeCategory,
      handelChangeCategoryActive = props.handelChangeCategoryActive,
      handleDragStart = props.handleDragStart,
      handleDragOver = props.handleDragOver,
      handleDrop = props.handleDrop,
      handleDragEnd = props.handleDragEnd,
      onDataSelected = props.onDataSelected,
      dataSelected = props.dataSelected;
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

    handleChangeCategory(e, category);
  };

  var handleDragOverChange = function handleDragOverChange(e) {
    var element = e.target.closest('.draggable-category');

    if (element) {
      onDataSelected(element.dataset.index);
    }

    handleDragOver(e);
  };

  var handleDragEndChange = function handleDragEndChange(e) {
    onDataSelected('');
    handleDragEnd(e);
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
    ref: containerRef,
    onDrop: function onDrop(e) {
      return handleDrop(e);
    },
    onDragOver: function onDragOver(e) {
      return handleDragOverChange(e);
    },
    onDragEnd: function onDragEnd(e) {
      return handleDragEndChange(e);
    },
    className: "draggable-category",
    "data-index": category === null || category === void 0 ? void 0 : category.id,
    isAccept: dataSelected && dataSelected === (category === null || category === void 0 ? void 0 : category.id.toString())
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
    active: !isSkeleton && (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
    alt: "six dots",
    draggable: true,
    onDragStart: function onDragStart(e) {
      return handleDragStart(e);
    }
  }), (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 ? void 0 : category.subcategories.length) > 0 && /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
    className: setRotate
  }), /*#__PURE__*/_react.default.createElement("span", null, category === null || category === void 0 ? void 0 : category.name)), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: category === null || category === void 0 ? void 0 : category.enabled,
    onChange: handelChangeCategoryActive
  }))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, (category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.map(function (subCategory) {
    return /*#__PURE__*/_react.default.createElement(SingleBusinessSubCateogries, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1
    }));
  }))));
};

var SingleBusinessSubCateogries = function SingleBusinessSubCateogries(props) {
  var isSkeleton = props.isSkeleton;

  var singleBusinessSubCateogriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleBusinessSubCateogriesUI
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleBusinessSubCateogriesUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleBusinessCategory, singleBusinessSubCateogriesProps));
};

exports.SingleBusinessSubCateogries = SingleBusinessSubCateogries;