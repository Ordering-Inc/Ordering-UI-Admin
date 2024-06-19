"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductLink = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _SelectBusinessProducts = require("./SelectBusinessProducts");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductLink = exports.ProductLink = function ProductLink(props) {
  var businessList = props.businessList,
    selectedBusinessId = props.selectedBusinessId,
    setSelectedBusinessId = props.setSelectedBusinessId,
    selectedProductId = props.selectedProductId,
    setSelectedProductId = props.setSelectedProductId,
    selectedCategoryId = props.selectedCategoryId,
    setSelectedCategoryId = props.setSelectedCategoryId;
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
    if (businessList.loading) return;
    var _businessOptions = businessList.businesses.map(function (business) {
      var _theme$images, _business$city;
      return {
        value: business.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit'),
          alt: ""
        }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("b", null, business === null || business === void 0 ? void 0 : business.name), business === null || business === void 0 || (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name))
      };
    });
    setBusinessOptions(_businessOptions);
  }, [businessList]);
  (0, _react.useEffect)(function () {
    if (!selectedBusinessId) {
      setSelectedBusinessSlug(null);
      return;
    }
    var selectedBusiness = businessList.businesses.find(function (business) {
      return business.id === selectedBusinessId;
    });
    setSelectedBusinessSlug(selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.slug);
  }, [selectedBusinessId, businessList]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ProductLinkContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    defaultValue: selectedBusinessId,
    placeholder: t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business'),
    options: businessOptions,
    onChange: function onChange(val) {
      return setSelectedBusinessId(val);
    },
    optionInnerMaxHeight: "300px"
  }))), selectedBusinessSlug && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SelectBusinessProducts.SelectBusinessProducts, {
    slug: selectedBusinessSlug,
    selectedProductId: selectedProductId,
    setSelectedProductId: setSelectedProductId,
    selectedCategoryId: selectedCategoryId,
    setSelectedCategoryId: setSelectedCategoryId
  })));
};