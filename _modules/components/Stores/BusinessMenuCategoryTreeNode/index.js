"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuCategoryTreeNode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessMenuCategoryTreeNode = function BusinessMenuCategoryTreeNode(props) {
  var _subCategoriesList$fi2, _subCategoriesList$fi3, _category$subcategori;

  var category = props.category,
      index = props.index,
      selectedProductsIds = props.selectedProductsIds,
      setSelectedProductsIds = props.setSelectedProductsIds,
      selectedProducts = props.selectedProducts,
      setSelectedProducts = props.setSelectedProducts,
      subCategoriesList = props.subCategoriesList;
  var content = (0, _react.useRef)(null);
  var checkboxRef = (0, _react.useRef)(null);
  var categoryRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0, _react.useState)('accordion__icon'),
      _useState4 = _slicedToArray(_useState3, 2),
      setRotate = _useState4[0],
      setRotateState = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      isCategoryState = _useState6[0],
      setIsCategoryState = _useState6[1];

  var toggleAccordion = function toggleAccordion(e) {
    var _categoryRef$current, _checkboxRef$current;

    var isActionsClick = ((_categoryRef$current = categoryRef.current) === null || _categoryRef$current === void 0 ? void 0 : _categoryRef$current.contains(e.target)) || ((_checkboxRef$current = checkboxRef.current) === null || _checkboxRef$current === void 0 ? void 0 : _checkboxRef$current.contains(e.target));
    if (isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };

  var isCheckedCategory = function isCheckedCategory() {
    var _category = subCategoriesList.find(function (item) {
      return item.id === category.id;
    });

    if (_category !== null && _category !== void 0 && _category.productIds.every(function (id) {
      return selectedProductsIds.includes(id);
    })) {
      return 2;
    } else if (_category !== null && _category !== void 0 && _category.productIds.some(function (id) {
      return selectedProductsIds.includes(id);
    })) {
      return 1;
    }

    return 0;
  };

  var handleClickProduct = function handleClickProduct(product) {
    if (selectedProductsIds.includes(product.id)) {
      var _selectedProductsIds = selectedProductsIds.filter(function (id) {
        return id !== product.id;
      });

      setSelectedProductsIds(_selectedProductsIds);

      if (selectedProducts) {
        var _selectedProducts = selectedProducts.filter(function (_product) {
          return _product.id !== product.id;
        });

        setSelectedProducts(_selectedProducts);
      }
    } else {
      setSelectedProductsIds([].concat(_toConsumableArray(selectedProductsIds), [product.id]));

      if (selectedProducts) {
        setSelectedProducts([].concat(_toConsumableArray(selectedProducts), [product]));
      }
    }
  };

  var handleChangeSelectCategory = function handleChangeSelectCategory() {
    var _subCategoriesList$fi;

    var productsIds = ((_subCategoriesList$fi = subCategoriesList.find(function (item) {
      return item.id === category.id;
    })) === null || _subCategoriesList$fi === void 0 ? void 0 : _subCategoriesList$fi.productIds) || [];
    var everyContain = productsIds.every(function (id) {
      return selectedProductsIds.includes(id);
    });
    var _selectedProductsIds = [];
    var _selectedProducts = [];

    if (!everyContain) {
      _selectedProductsIds = [].concat(_toConsumableArray(selectedProductsIds), _toConsumableArray(productsIds)).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
      setSelectedProductsIds(_selectedProductsIds);

      if (selectedProducts) {
        var uniqueArr = [];
        _selectedProducts = [].concat(_toConsumableArray(selectedProducts), _toConsumableArray(category.products)).filter(function (product) {
          var index = uniqueArr.findIndex(function (item) {
            return item.id === product.id;
          });

          if (index <= -1) {
            uniqueArr.push(product);
          }

          return null;
        });
        setSelectedProducts(uniqueArr);
      }
    } else {
      _selectedProductsIds = selectedProductsIds.filter(function (id) {
        return !productsIds.includes(id);
      });
      setSelectedProductsIds(_selectedProductsIds);

      if (selectedProducts) {
        _selectedProducts = selectedProducts.filter(function (product) {
          return !productsIds.includes(product.id);
        });
        setSelectedProducts(_selectedProducts);
      }
    }
  };

  (0, _react.useEffect)(function () {
    setIsCategoryState(isCheckedCategory());
  }, [selectedProductsIds]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_subCategoriesList$fi2 = subCategoriesList.find(function (_category) {
    return _category.id === category.id;
  })) === null || _subCategoriesList$fi2 === void 0 ? void 0 : (_subCategoriesList$fi3 = _subCategoriesList$fi2.productIds) === null || _subCategoriesList$fi3 === void 0 ? void 0 : _subCategoriesList$fi3.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    onClick: function onClick(e) {
      return toggleAccordion(e, category.id);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.AccordionItem, {
    margin: 20 * index
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.CheckboxWrapper, {
    ref: categoryRef,
    active: isCategoryState,
    onClick: function onClick() {
      return handleChangeSelectCategory();
    }
  }, isCategoryState === 2 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : isCategoryState === 1 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("span", null, category.name)), /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
    className: setRotate
  }))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, category === null || category === void 0 ? void 0 : category.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_styles.AccordionItem, {
      key: product.id,
      margin: 20 * (index + 1),
      isProduct: true
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.CheckboxWrapper, {
      ref: checkboxRef,
      active: selectedProductsIds.includes(product.id),
      onClick: function onClick() {
        return handleClickProduct(product);
      }
    }, selectedProductsIds.includes(product.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("span", null, product.name)));
  }), (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 && category.subcategories.map(function (subCategory) {
    return /*#__PURE__*/_react.default.createElement(BusinessMenuCategoryTreeNode, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1
    }));
  }))));
};

exports.BusinessMenuCategoryTreeNode = BusinessMenuCategoryTreeNode;