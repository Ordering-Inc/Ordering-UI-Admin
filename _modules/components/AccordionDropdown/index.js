"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionDropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _BiCaretUp = _interopRequireDefault(require("@meronex/icons/bi/BiCaretUp"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

var _Switch = require("../../styles/Switch");

var _orderingComponentsAdmin = require("ordering-components-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AccordionDropdownUI = function AccordionDropdownUI(props) {
  var category = props.category,
      isSkeleton = props.isSkeleton,
      handelChangeCategoryActive = props.handelChangeCategoryActive,
      isSelected = props.isSelected,
      isOpen = props.isOpen,
      IterateCategories = props.IterateCategories,
      spaceTab = props.spaceTab,
      handleChangeCategory = props.handleChangeCategory,
      index = props.index,
      setOpenCategories = props.setOpenCategories,
      openCategories = props.openCategories,
      categorySelected = props.categorySelected,
      setCategorySelected = props.setCategorySelected;

  var handleOnClick = function handleOnClick() {
    setOpenCategories({
      values: openCategories.filter(function (categoryId) {
        return categoryId !== categorySelected.id;
      })
    });

    if (isOpen) {
      setCategorySelected(null);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.AccordionContainer, {
    className: "accordion-category"
  }, isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-content"
  }, /*#__PURE__*/_react.default.createElement(IterateCategories, _extends({}, props, {
    list: category.subcategories,
    isSub: true,
    index: index + 1,
    currentCat: category,
    onClickCategory: handleChangeCategory
  }))), /*#__PURE__*/_react.default.createElement(_styles.CategoryTab, {
    active: isSelected,
    className: "accordion-title",
    categorySpace: spaceTab,
    onClick: function onClick(e) {
      return isSelected ? handleOnClick() : handleChangeCategory(e, category);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoryInfoWrapper, null, !isSkeleton && /*#__PURE__*/_react.default.createElement(_BiCaretUp.default, {
    className: "rotate",
    style: {
      transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)'
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, category.name)), /*#__PURE__*/_react.default.createElement(_styles.CategoryEnableWrapper, {
    className: "business_enable_control"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 100
  }) : /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: category === null || category === void 0 ? void 0 : category.enabled,
    onChange: handelChangeCategoryActive
  }))));
};

var AccordionDropdown = function AccordionDropdown(props) {
  var AccordionDropdownController = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AccordionDropdownUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleBusinessCategory, AccordionDropdownController);
};

exports.AccordionDropdown = AccordionDropdown;