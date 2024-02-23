"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionSpecficCategory = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var EnterprisePromotionSpecficCategory = exports.EnterprisePromotionSpecficCategory = function EnterprisePromotionSpecficCategory(props) {
  var formState = props.formState,
    promotionState = props.promotionState,
    handleChangeItem = props.handleChangeItem,
    onClickDone = props.onClickDone,
    selectedCategoryIds = props.selectedCategoryIds,
    setSelectedCategoryIds = props.setSelectedCategoryIds,
    businessesList = props.businessesList;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    businessOptions = _useState2[0],
    setBusinessOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusinessSlug = _useState4[0],
    setSelectedBusinessSlug = _useState4[1];
  (0, _react.useEffect)(function () {
    var _promotionState$promo2;
    var businessIds = [];
    if (Object.keys(promotionState === null || promotionState === void 0 ? void 0 : promotionState.promotion).length) {
      var _promotionState$promo;
      businessIds = promotionState === null || promotionState === void 0 || (_promotionState$promo = promotionState.promotion.businesses) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.reduce(function (ids, business) {
        return [].concat(_toConsumableArray(ids), [business.id]);
      }, []);
    } else {
      var _formState$changes, _formState$changes2;
      businessIds = formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.businesses ? _toConsumableArray(formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.businesses) : [];
    }
    var _businessOptions = businessesList.businesses.filter(function (business) {
      return businessIds.includes(business.id);
    }).map(function (business) {
      var _theme$images, _business$city;
      return {
        value: business.slug,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit'),
          alt: ""
        }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, business === null || business === void 0 ? void 0 : business.name), business === null || business === void 0 || (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name))
      };
    });
    setBusinessOptions(_businessOptions);
    if ((promotionState === null || promotionState === void 0 || (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 || (_promotionState$promo2 = _promotionState$promo2.categories) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.length) > 0) {
      var _promotionState$promo3;
      var businessId = promotionState === null || promotionState === void 0 || (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 || (_promotionState$promo3 = _promotionState$promo3.categories[0]) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.business_id;
      var foundBusiness = businessesList.businesses.find(function (business) {
        return business.id === businessId;
      });
      if (foundBusiness !== null && foundBusiness !== void 0 && foundBusiness.slug) {
        setSelectedBusinessSlug(foundBusiness === null || foundBusiness === void 0 ? void 0 : foundBusiness.slug);
      }
    } else if (_businessOptions.length) {
      var _businessOptions$;
      setSelectedBusinessSlug((_businessOptions$ = _businessOptions[0]) === null || _businessOptions$ === void 0 ? void 0 : _businessOptions$.value);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var filteredCategories = [];
    Object.values(selectedCategoryIds).forEach(function (category) {
      filteredCategories.push({
        id: category.id,
        include: category.include,
        is_condition: true
      });
    });
    handleChangeItem({
      categories: filteredCategories
    });
  }, [selectedCategoryIds]);
  (0, _react.useEffect)(function () {
    var _promotionState$promo4, _promotionState$promo5;
    if (!(promotionState !== null && promotionState !== void 0 && (_promotionState$promo4 = promotionState.promotion) !== null && _promotionState$promo4 !== void 0 && _promotionState$promo4.categories)) return;
    var _selectedCategoryIds = promotionState === null || promotionState === void 0 || (_promotionState$promo5 = promotionState.promotion) === null || _promotionState$promo5 === void 0 || (_promotionState$promo5 = _promotionState$promo5.categories) === null || _promotionState$promo5 === void 0 ? void 0 : _promotionState$promo5.reduce(function (ids, category) {
      ids[category.id] = {
        id: category.id,
        include: category.pivot.include
      };
      return ids;
    }, {});
    setSelectedCategoryIds(_selectedCategoryIds);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CATEGORY_SPECIFIC', 'Category specific')), /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')), /*#__PURE__*/_react.default.createElement(_styles2.BusinessSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    defaultValue: selectedBusinessSlug,
    placeholder: t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business'),
    options: businessOptions,
    onChange: function onChange(val) {
      return setSelectedBusinessSlug(val);
    },
    optionInnerMaxHeight: "300px"
  }))), selectedBusinessSlug ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SELECT_CATEGORY_INCLUDE', 'Select category to include')), /*#__PURE__*/_react.default.createElement(_Shared.SelectBusinessCategories, {
    slug: selectedBusinessSlug,
    selectedCategoryIds: selectedCategoryIds,
    setSelectedCategoryIds: setSelectedCategoryIds,
    include: true
  }), /*#__PURE__*/_react.default.createElement(_styles2.Label, null, t('SELECT_CATEGORY_EXCLUDE', 'Select category to exclude')), /*#__PURE__*/_react.default.createElement(_Shared.SelectBusinessCategories, {
    slug: selectedBusinessSlug,
    selectedCategoryIds: selectedCategoryIds,
    setSelectedCategoryIds: setSelectedCategoryIds,
    include: false
  })) : /*#__PURE__*/_react.default.createElement(_styles2.NoSelectedBusiness, null, t('SELECT_BUSINESS_BEFORE_CATEGORY', 'Please select a business before selecting your cateogries.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};