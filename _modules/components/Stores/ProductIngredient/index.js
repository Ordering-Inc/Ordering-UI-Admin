"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductIngredient = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _ProductIngredientDetails = require("../ProductIngredientDetails");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductIngredient = function ProductIngredient(props) {
  var product = props.product,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openDetails = _useState2[0],
    setOpenDetails = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    currentIngredient = _useState4[0],
    setCurrentIngredient = _useState4[1];
  var handleOpenIngredient = function handleOpenIngredient(ingredient, isInitialRender) {
    setCurrentIngredient(ingredient);
    setIsExtendExtraOpen(true);
    setOpenDetails(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        ingredient: ingredient === null || ingredient === void 0 ? void 0 : ingredient.id
      });
    }
  };
  var handleCloseDetails = function handleCloseDetails() {
    setOpenDetails(false);
    setIsExtendExtraOpen(false);
    setCurrentIngredient(null);
    (0, _utils.removeQueryToUrl)(['ingredient']);
  };
  (0, _react.useEffect)(function () {
    var ingredientId = query.get('ingredient');
    if (ingredientId) {
      var initIngredient = product.ingredients.find(function (ingredient) {
        return ingredient.id === Number(ingredientId);
      });
      initIngredient && handleOpenIngredient(initIngredient, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.IngredientContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('INGREDIENTS', 'Ingredients'), " / ", t('PROPERTIES', 'Properties')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenIngredient(null, true);
    }
  }, t('ADD_INGREDIENT', 'Add ingredient'))), (product === null || product === void 0 ? void 0 : product.ingredients) && (product === null || product === void 0 ? void 0 : product.ingredients.map(function (ingredient) {
    return /*#__PURE__*/_react.default.createElement(_styles2.IngredientOption, {
      key: ingredient.id,
      active: ingredient.id === (currentIngredient === null || currentIngredient === void 0 ? void 0 : currentIngredient.id),
      onClick: function onClick() {
        return handleOpenIngredient(ingredient);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, ingredient === null || ingredient === void 0 ? void 0 : ingredient.name), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddIngredientButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenIngredient(null, true);
    }
  }, t('ADD_INGREDIENT', 'Add ingredient')))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openDetails && /*#__PURE__*/_react.default.createElement(_ProductIngredientDetails.ProductIngredientDetails, _extends({}, props, {
    ingredient: currentIngredient,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }))) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: openDetails,
    onClose: function onClose() {
      return handleCloseDetails();
    },
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(_ProductIngredientDetails.ProductIngredientDetails, _extends({}, props, {
    ingredient: currentIngredient,
    onClose: function onClose() {
      return handleCloseDetails();
    }
  }))));
};
exports.ProductIngredient = ProductIngredient;