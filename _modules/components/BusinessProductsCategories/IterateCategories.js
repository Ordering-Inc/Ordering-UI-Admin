"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IterateCategories = void 0;

var _react = _interopRequireDefault(require("react"));

var _SingleBusinessCategory = require("../SingleBusinessCategory");

var _AccordionDropdown = require("../AccordionDropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPACE_CONTANT = 20;
var categorySpace = {
  1: 1 * SPACE_CONTANT,
  2: 2 * SPACE_CONTANT,
  3: 3 * SPACE_CONTANT,
  4: 4 * SPACE_CONTANT,
  5: 5 * SPACE_CONTANT
};

var IterateCategories = function IterateCategories(props) {
  var list = props.list,
      isSub = props.isSub,
      index = props.index,
      categorySelected = props.categorySelected,
      onClickCategory = props.onClickCategory,
      businessState = props.businessState,
      dataSelected = props.dataSelected,
      setDataSelected = props.setDataSelected,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      handleOpenCategoryDetails = props.handleOpenCategoryDetails,
      openCategories = props.openCategories,
      setOpenCategories = props.setOpenCategories,
      setCategorySelected = props.setCategorySelected;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (list === null || list === void 0 ? void 0 : list.length) && (list === null || list === void 0 ? void 0 : list.map(function (category) {
    var _category$id, _category$subcategori, _category$subcategori2, _category$subcategori3, _category$level, _category$level2;

    return /*#__PURE__*/_react.default.createElement("div", {
      key: (_category$id = category === null || category === void 0 ? void 0 : category.id) !== null && _category$id !== void 0 ? _category$id : category === null || category === void 0 ? void 0 : category.name
    }, (category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 || isSub ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (category === null || category === void 0 ? void 0 : (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "accordion"
    }, /*#__PURE__*/_react.default.createElement(_AccordionDropdown.AccordionDropdown, {
      category: category,
      categorySelected: categorySelected,
      isSelected: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id,
      className: "".concat(category.id === 'featured' ? 'special' : ''),
      handleChangeCategory: onClickCategory,
      handleOpenCategoryDetails: handleOpenCategoryDetails,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      dataSelected: dataSelected,
      spaceTab: categorySpace[index !== null && index !== void 0 ? index : 0],
      index: index,
      isSkeleton: businessState === null || businessState === void 0 ? void 0 : businessState.loading,
      isOpen: openCategories === null || openCategories === void 0 ? void 0 : openCategories.includes(category.id),
      onDataSelected: setDataSelected,
      IterateCategories: IterateCategories,
      handleUpdateBusinessState: handleUpdateBusinessState,
      setOpenCategories: setOpenCategories,
      openCategories: openCategories,
      setCategorySelected: setCategorySelected
    }))), isSub && !(category !== null && category !== void 0 && (_category$subcategori3 = category.subcategories) !== null && _category$subcategori3 !== void 0 && _category$subcategori3.length) && /*#__PURE__*/_react.default.createElement(_SingleBusinessCategory.SingleBusinessCategory, {
      category: category,
      active: categorySelected,
      className: "".concat(category.id === 'featured' ? 'special' : ''),
      categorySpace: categorySpace[(_category$level = category === null || category === void 0 ? void 0 : category.level) !== null && _category$level !== void 0 ? _category$level : 1],
      handleChangeCategory: onClickCategory,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      dataSelected: dataSelected,
      onDataSelected: setDataSelected,
      handleUpdateBusinessState: handleUpdateBusinessState,
      spaceTab: categorySpace[index !== null && index !== void 0 ? index : 0]
    })) : /*#__PURE__*/_react.default.createElement(_SingleBusinessCategory.SingleBusinessCategory, {
      category: category,
      categorySelected: categorySelected,
      className: "".concat(category.id === 'featured' ? 'special' : ''),
      categorySpace: categorySpace[(_category$level2 = category === null || category === void 0 ? void 0 : category.level) !== null && _category$level2 !== void 0 ? _category$level2 : 1],
      handleChangeCategory: onClickCategory,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      dataSelected: dataSelected,
      onDataSelected: setDataSelected,
      handleUpdateBusinessState: handleUpdateBusinessState
    }));
  })));
};

exports.IterateCategories = IterateCategories;