"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuCategoryTreeNode = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _BusinessMenuCategoryTreeNode = exports.BusinessMenuCategoryTreeNode = function BusinessMenuCategoryTreeNode(props) {
  var _subCategoriesList$fi2, _category$subcategori;
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
  })) === null || _subCategoriesList$fi2 === void 0 || (_subCategoriesList$fi2 = _subCategoriesList$fi2.productIds) === null || _subCategoriesList$fi2 === void 0 ? void 0 : _subCategoriesList$fi2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
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
  }), (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 || (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 && category.subcategories.map(function (subCategory) {
    return /*#__PURE__*/_react.default.createElement(_BusinessMenuCategoryTreeNode, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1
    }));
  }))));
};