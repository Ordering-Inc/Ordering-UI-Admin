"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessCategoryUI = exports.SingleBusinessCategoryEdit = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
var _styles3 = require("../SingleBusinessProduct/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleBusinessCategoryUI = exports.SingleBusinessCategoryUI = function SingleBusinessCategoryUI(props) {
  var _categoryFormState$ch, _categoryFormState$ch2;
  var categorySelected = props.categorySelected,
    isSkeleton = props.isSkeleton,
    handleUpdateClick = props.handleUpdateClick,
    handleOpenCategoryDetails = props.handleOpenCategoryDetails,
    categoryFormState = props.categoryFormState,
    isEditMode = props.isEditMode;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var conatinerRef = (0, _react.useRef)(null);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var closeProductEdit = function closeProductEdit(e) {
    var _conatinerRef$current;
    var outsideDropdown = !((_conatinerRef$current = conatinerRef.current) !== null && _conatinerRef$current !== void 0 && _conatinerRef$current.contains(e.target));
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.changes).length > 0 && !(categoryFormState !== null && categoryFormState !== void 0 && categoryFormState.loading)) {
          handleUpdateClick();
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    var _categoryFormState$re;
    if (categoryFormState !== null && categoryFormState !== void 0 && (_categoryFormState$re = categoryFormState.result) !== null && _categoryFormState$re !== void 0 && _categoryFormState$re.error) {
      var _categoryFormState$re2;
      setAlertState({
        open: true,
        content: categoryFormState === null || categoryFormState === void 0 || (_categoryFormState$re2 = categoryFormState.result) === null || _categoryFormState$re2 === void 0 ? void 0 : _categoryFormState$re2.result
      });
    }
  }, [categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.result]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', closeProductEdit);
    return function () {
      return document.removeEventListener('click', closeProductEdit);
    };
  }, [categoryFormState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SingleCategoryContainer, {
    "data-index": categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 41,
    height: 41
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageContainer, {
    disabled: categoryFormState === null || categoryFormState === void 0 ? void 0 : categoryFormState.loading,
    className: "img-section"
  }, categoryFormState !== null && categoryFormState !== void 0 && (_categoryFormState$ch = categoryFormState.changes) !== null && _categoryFormState$ch !== void 0 && _categoryFormState$ch.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(categoryFormState === null || categoryFormState === void 0 || (_categoryFormState$ch2 = categoryFormState.changes) === null || _categoryFormState$ch2 === void 0 ? void 0 : _categoryFormState$ch2.image, 'h_50,c_limit'),
    alt: "category image",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles3.UploadWrapper, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null)))), /*#__PURE__*/_react.default.createElement(_styles2.CategoryContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", null, (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name) || t('ALL', 'All')), /*#__PURE__*/_react.default.createElement(_styles2.CategoryContentInside, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleOpenCategoryDetails(categorySelected);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null)))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CATEGORY', 'Category'),
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
var SingleBusinessCategoryEdit = exports.SingleBusinessCategoryEdit = function SingleBusinessCategoryEdit(props) {
  var isSkeleton = props.isSkeleton;
  var singleBusinessCategoryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleBusinessCategoryUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(SingleBusinessCategoryUI, props) : /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SingleBusinessCategory, singleBusinessCategoryProps));
};