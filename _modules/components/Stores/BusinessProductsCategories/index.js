"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategories = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SingleBusinessSubCateogries = require("../SingleBusinessSubCateogries");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var _businessState$busine;
  var businessState = props.businessState,
    categorySelected = props.categorySelected,
    handleChangeCategory = props.handleChangeCategory,
    handleOpenCategoryDetails = props.handleOpenCategoryDetails,
    categoryListRef = props.categoryListRef;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    dataSelected = _useState2[0],
    setDataSelected = _useState2[1];
  var containerRef = (0, _react.useRef)();
  var listRef = (0, _react.useRef)();
  var addButtonRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var listener;
    if (containerRef !== null && containerRef !== void 0 && containerRef.current && categoryListRef) {
      listener = window.addEventListener('click', function (e) {
        var _containerRef$current, _addButtonRef$current;
        if (!(containerRef !== null && containerRef !== void 0 && (_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) && !(addButtonRef !== null && addButtonRef !== void 0 && (_addButtonRef$current = addButtonRef.current) !== null && _addButtonRef$current !== void 0 && _addButtonRef$current.contains(e.target)) && categoryListRef !== null && categoryListRef !== void 0 && categoryListRef.contains(e.target)) {
          handleChangeCategory(null, null);
        }
      });
    }
    return function () {
      window.removeEventListener('click', listener);
    };
  }, [containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, categoryListRef]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryListContainer, {
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_CATEGORY', 'Business category'))), /*#__PURE__*/_react.default.createElement(_styles2.ListContent, {
    ref: listRef
  }, (businessState === null || businessState === void 0 ? void 0 : businessState.loading) && _toConsumableArray(Array(6).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessSubCateogries.SingleBusinessSubCateogries, {
      key: i,
      isSkeleton: true
    });
  }), !(businessState !== null && businessState !== void 0 && businessState.loading) && (businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 || (_businessState$busine = _businessState$busine.categories) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.length) > 0 && (businessState === null || businessState === void 0 ? void 0 : businessState.business.categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category, i) {
    var _businessState$busine2;
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessSubCateogries.SingleBusinessSubCateogries, _extends({}, props, {
      index: 0,
      key: category.id,
      category: category,
      categorySelected: categorySelected,
      handleChangeCategory: handleChangeCategory,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
      dataSelected: dataSelected,
      setDataSelected: setDataSelected,
      isLastCategory: (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 || (_businessState$busine2 = _businessState$busine2.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.length) - 1 === i
    }));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.AddCategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    ref: addButtonRef,
    onClick: function onClick() {
      return handleOpenCategoryDetails();
    }
  }, t('ADD_NEW_CATEGORY', 'Add new category'))));
};
exports.BusinessProductsCategories = BusinessProductsCategories;