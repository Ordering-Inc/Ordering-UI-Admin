"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessFrontLayout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _AiOutlineShoppingCart = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineShoppingCart"));

var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));

var _styles = require("../../../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessFrontLayout = function BusinessFrontLayout(props) {
  var _configState$configs, _configState$configs$;

  var formState = props.formState,
      handleUpdateBusinessClick = props.handleUpdateBusinessClick,
      business = props.business,
      setFormState = props.setFormState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var useParentCategory = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.use_parent_category) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var handleChangeLayout = function handleChangeLayout(index) {
    setSelectedOption(index);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        front_layout: index
      }
    }));
  };

  var handleSaveLayout = function handleSaveLayout() {
    handleUpdateBusinessClick && handleUpdateBusinessClick();
  };

  (0, _react.useEffect)(function () {
    if (business) setSelectedOption(business === null || business === void 0 ? void 0 : business.front_layout);
  }, [business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessFrontLayoutContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('LAYOUT', 'Layout')), /*#__PURE__*/_react.default.createElement(_styles2.LayoutContentWrappper, null, /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxWrapper, {
    onClick: function onClick() {
      return handleChangeLayout('food');
    },
    active: selectedOption === 'food'
  }, /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxContent, null, /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxHeader, null), /*#__PURE__*/_react.default.createElement(_styles2.FoodBoxContent, null, /*#__PURE__*/_react.default.createElement(_styles2.FoodHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderBoldLine, null), /*#__PURE__*/_react.default.createElement(_styles2.HeaderLine, {
    className: "short-line"
  }), /*#__PURE__*/_react.default.createElement(_styles2.HeaderLine, null), /*#__PURE__*/_react.default.createElement(_styles2.HeaderLine, null)), /*#__PURE__*/_react.default.createElement(_styles2.BusinessImgBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessImgBox, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement(_styles2.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)))), /*#__PURE__*/_react.default.createElement(_styles2.FoodProductListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.FoodProductList, null, /*#__PURE__*/_react.default.createElement(_styles2.FoodCategoryList, null, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement(_styles2.CategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryImgWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.CategoryTitle, null)), /*#__PURE__*/_react.default.createElement(_styles2.FoodProductListContent, null, _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(HorzontalProductBoxUI, {
      key: i
    });
  })), /*#__PURE__*/_react.default.createElement(_styles2.CategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryImgWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.CategoryTitle, null)), /*#__PURE__*/_react.default.createElement(_styles2.FoodProductListContent, null, _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(HorzontalProductBoxUI, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FoodCart, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_AiOutlineShoppingCart.default, null))))), /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxFooter, null)), /*#__PURE__*/_react.default.createElement(_styles2.LayoutTitle, null, t('FOOD', 'Food'))), useParentCategory === '1' && /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxWrapper, {
    onClick: function onClick() {
      return handleChangeLayout('groceries');
    },
    active: selectedOption === 'groceries'
  }, /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxContent, null, /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxHeader, null), /*#__PURE__*/_react.default.createElement(_styles2.GroceriesBoxContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessImgBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessImgBox, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null), /*#__PURE__*/_react.default.createElement(_styles2.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.GroceriesCartWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.GroceriesCart, null, /*#__PURE__*/_react.default.createElement(_AiOutlineShoppingCart.default, null))))), /*#__PURE__*/_react.default.createElement(_styles2.FoodHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderBoldLine, null), /*#__PURE__*/_react.default.createElement(_styles2.HeaderLine, {
    className: "short-line"
  }), /*#__PURE__*/_react.default.createElement(_styles2.HeaderLine, null), /*#__PURE__*/_react.default.createElement(_styles2.HeaderLine, null)), /*#__PURE__*/_react.default.createElement(_styles2.GroceriesProductListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.GroceriesCategoryListWrapper, null, _toConsumableArray(Array(6).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CategoryWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CategoryImgWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.CategoryTitle, null));
  })), /*#__PURE__*/_react.default.createElement(_styles2.FoodProductList, null, _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryImgWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.CategoryTitle, null)), /*#__PURE__*/_react.default.createElement(_styles2.GroceriesProductListContent, null, _toConsumableArray(Array(3).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(HorzontalProductBoxUI, {
        key: i
      });
    })));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.LayoutBoxFooter, null)), /*#__PURE__*/_react.default.createElement(_styles2.LayoutTitle, null, t('GROCERIES', 'Groceries'))))), /*#__PURE__*/_react.default.createElement(_styles2.ActionButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSaveLayout
  }, t('SAVE', 'Save'))));
};

exports.BusinessFrontLayout = BusinessFrontLayout;

var HorzontalProductBoxUI = function HorzontalProductBoxUI() {
  return /*#__PURE__*/_react.default.createElement(_styles2.HorzontalProductBox, null, /*#__PURE__*/_react.default.createElement(_styles2.HorzontalProductInfoList, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "short-line"
  }), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null)), /*#__PURE__*/_react.default.createElement(_styles2.HorzontalProductImageWrapper, null, /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null)));
};