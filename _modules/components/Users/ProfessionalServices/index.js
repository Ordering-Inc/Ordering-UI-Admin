"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalServices = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _ProfessionalCategoryTreeNode = require("../ProfessionalCategoryTreeNode");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var ProfessionalServicesUI = function ProfessionalServicesUI(props) {
  var _businessState$busine3;
  var businessState = props.businessState,
    selectedProductsIds = props.selectedProductsIds,
    subCategoriesList = props.subCategoriesList,
    setSelectedProductsIds = props.setSelectedProductsIds,
    selectedProducts = props.selectedProducts,
    setSelectedProducts = props.setSelectedProducts,
    handleCreateService = props.handleCreateService,
    handleDeleteService = props.handleDeleteService,
    actionState = props.actionState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _onSearch = function onSearch(value) {
    setSearchValue(value);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var checkProducts = function checkProducts(node) {
    var _node$products;
    var valid = false;
    if (node !== null && node !== void 0 && (_node$products = node.products) !== null && _node$products !== void 0 && _node$products.length) {
      node.products.forEach(function (product) {
        var _product$name;
        if (product !== null && product !== void 0 && (_product$name = product.name) !== null && _product$name !== void 0 && _product$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase())) valid = true;
      });
    }
    return valid;
  };
  var deepFilter = function deepFilter(nodes) {
    return nodes.map(function (node) {
      if (checkProducts(node)) return node;
      var children = deepFilter(node.subcategories || []);
      return children.length && _objectSpread(_objectSpread({}, node), {}, {
        children: children
      });
    }).filter(Boolean);
  };
  (0, _react.useEffect)(function () {
    var _businessState$busine, _businessState$busine2;
    if (!(businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.categories)) return;
    var result = deepFilter(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.categories);
    setCategories(result);
  }, [businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.categories, searchValue]);
  (0, _react.useEffect)(function () {
    var _actionState$result;
    if (actionState !== null && actionState !== void 0 && (_actionState$result = actionState.result) !== null && _actionState$result !== void 0 && _actionState$result.error) {
      var _actionState$result2;
      setAlertState({
        open: true,
        content: actionState === null || actionState === void 0 ? void 0 : (_actionState$result2 = actionState.result) === null || _actionState$result2 === void 0 ? void 0 : _actionState$result2.result
      });
    }
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.result]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SERVICES', 'Services')), /*#__PURE__*/_react.default.createElement(_styles.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles.TreeNodeWrapper, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (index) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCheckWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 20,
      style: {
        margin: '0px 10px'
      }
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category) {
    return /*#__PURE__*/_react.default.createElement(_ProfessionalCategoryTreeNode.ProfessionalCategoryTreeNode, {
      key: category.id,
      index: 0,
      category: category,
      selectedProductsIds: selectedProductsIds,
      setSelectedProductsIds: setSelectedProductsIds,
      selectedProducts: selectedProducts,
      setSelectedProducts: setSelectedProducts,
      subCategoriesList: subCategoriesList,
      handleCreateService: handleCreateService,
      handleDeleteService: handleDeleteService,
      searchValue: searchValue
    });
  })), !(businessState !== null && businessState !== void 0 && businessState.loading) && (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.Divider, null))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SERVICES', 'Services'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var ProfessionalServices = function ProfessionalServices(props) {
  var professionalServices = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalServicesUI,
    propsToFetch: ['id', 'name', 'categories']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProfessionalServices, professionalServices);
};
exports.ProfessionalServices = ProfessionalServices;