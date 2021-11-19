"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryTreeNode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("../../styles");

var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var CategoryTreeNode = function CategoryTreeNode(props) {
  var category = props.category,
      selectedProductsIds = props.selectedProductsIds,
      setSelectedProductsIds = props.setSelectedProductsIds,
      openCategories = props.openCategories,
      handleTogglePopover = props.handleTogglePopover;

  var RenderNode = function RenderNode(_ref) {
    var _category$subcategori;

    var category = _ref.category,
        _ref$index = _ref.index,
        index = _ref$index === void 0 ? 0 : _ref$index;
    var content = (0, _react.useRef)(null);
    var checkboxRef = (0, _react.useRef)(null);
    var categoryRef = (0, _react.useRef)(null);

    var toggleAccordion = function toggleAccordion(e, categoryId) {
      var _categoryRef$current, _checkboxRef$current;

      var isActionsClick = ((_categoryRef$current = categoryRef.current) === null || _categoryRef$current === void 0 ? void 0 : _categoryRef$current.contains(e.target)) || ((_checkboxRef$current = checkboxRef.current) === null || _checkboxRef$current === void 0 ? void 0 : _checkboxRef$current.contains(e.target));
      if (isActionsClick) return;
      handleTogglePopover(categoryId);
    };

    var isCheckedCategory = function isCheckedCategory() {
      if (category !== null && category !== void 0 && category.products) {
        var productsIds = category.products.reduce(function (ids, product) {
          return [].concat(_toConsumableArray(ids), [product.id]);
        }, []);
        return productsIds.every(function (id) {
          return selectedProductsIds.includes(id);
        });
      } else {
        return false;
      }
    };

    var handleClickProduct = function handleClickProduct(productId) {
      if (selectedProductsIds.includes(productId)) {
        var _selectedProductsIds = selectedProductsIds.filter(function (id) {
          return id !== productId;
        });

        setSelectedProductsIds(_selectedProductsIds);
      } else {
        setSelectedProductsIds([].concat(_toConsumableArray(selectedProductsIds), [productId]));
      }
    };

    var handleChangeSelectCategory = function handleChangeSelectCategory() {
      var productsIds = category.products.reduce(function (ids, product) {
        return [].concat(_toConsumableArray(ids), [product.id]);
      }, []);
      var everyContain = productsIds.every(function (id) {
        return selectedProductsIds.includes(id);
      });
      var _selectedProductsIds = [];

      if (!everyContain) {
        _selectedProductsIds = [].concat(_toConsumableArray(selectedProductsIds), _toConsumableArray(productsIds)).filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });
        setSelectedProductsIds(_selectedProductsIds);
      } else {
        _selectedProductsIds = selectedProductsIds.filter(function (id) {
          return !productsIds.includes(id);
        });
        setSelectedProductsIds(_selectedProductsIds);
      }
    };

    return /*#__PURE__*/_react.default.createElement(_styles2.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles2.Accordion, {
      onClick: function onClick(e) {
        return toggleAccordion(e, category.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionItem, {
      margin: 20 * index
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      ref: categoryRef,
      defaultChecked: isCheckedCategory(),
      onClick: function onClick() {
        return handleChangeSelectCategory();
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, category.name)), /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
      className: "accordion__icon ".concat(openCategories[category.id] && 'rotate')
    }))), /*#__PURE__*/_react.default.createElement(_styles2.AccordionContent, {
      ref: content,
      style: {
        maxHeight: !openCategories[category.id] && '0px'
      }
    }, category !== null && category !== void 0 && category.subcategories && (category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 ? category.subcategories.map(function (subCategory) {
      return /*#__PURE__*/_react.default.createElement(RenderNode, {
        key: subCategory.id,
        category: subCategory,
        index: index + 1
      });
    }) : category === null || category === void 0 ? void 0 : category.products.map(function (product) {
      return /*#__PURE__*/_react.default.createElement(_styles2.AccordionItem, {
        key: product.id,
        margin: 20 * (index + 1),
        isProduct: true
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
        ref: checkboxRef,
        defaultChecked: selectedProductsIds.includes(product.id),
        onClick: function onClick() {
          return handleClickProduct(product.id);
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, product.name)));
    })));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(RenderNode, {
    category: category
  }));
};

exports.CategoryTreeNode = CategoryTreeNode;