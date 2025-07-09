"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactRouterDom = require("react-router-dom");
var _BusinessInfoSettingList = require("../BusinessInfoSettingList");
var _BusinessOwners = require("../BusinessOwners");
var _BusinessTypes = require("../BusinessTypes");
var _BusinessLocation = require("../BusinessLocation");
var _BusinessImages = require("../BusinessImages");
var _BusinessVideos = require("../BusinessVideos");
var _SeoOptions = require("../SeoOptions");
var _BusinessInformation = require("../BusinessInformation");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessDetail = exports.BusinessDetail = function BusinessDetail(props) {
  var business = props.business,
    handleDeleteBusinessOwner = props.handleDeleteBusinessOwner,
    handleAddBusinessOwner = props.handleAddBusinessOwner,
    formState = props.formState,
    setFormState = props.setFormState,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick,
    businessTypes = props.businessTypes,
    setBusinessTypes = props.setBusinessTypes,
    handleSuccessAddBusinessItem = props.handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem = props.handleSuccessDeleteBusinessItem,
    handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    isExtendExtraOpen = props.isExtendExtraOpen,
    handleUpdateBusinessState = props.handleUpdateBusinessState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)('information'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedInfoItem = _useState2[0],
    setSelctedInfoItem = _useState2[1];
  var handleSelectInfoItem = function handleSelectInfoItem(tab) {
    setSelctedInfoItem(tab);
    (0, _utils.addQueryToUrl)({
      tab: tab
    });
  };
  (0, _react.useEffect)(function () {
    setIsExtendExtraOpen(false);
  }, [selectedInfoItem]);
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    var tabs = ['information', 'owner', 'categories', 'location', 'agents', 'images', 'videos', 'seo_options'];
    if (tab && tabs.includes(tab)) {
      setSelctedInfoItem(tab);
    } else {
      handleSelectInfoItem('information');
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.InfoConatiner, null, /*#__PURE__*/_react.default.createElement("h1", null, t('STORE_DETAILS', 'Store details')), /*#__PURE__*/_react.default.createElement(_BusinessInfoSettingList.BusinessInfoSettingList, {
    selectedInfoItem: selectedInfoItem,
    handleSelectInfoItem: handleSelectInfoItem
  }), selectedInfoItem === 'information' && /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
    business: business,
    handleSuccessUpdate: handleSucessUpdateBusiness,
    handleUpdateBusinessState: handleUpdateBusinessState
  }), selectedInfoItem === 'owner' && /*#__PURE__*/_react.default.createElement(_BusinessOwners.BusinessOwners, {
    business: business,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner
  }), selectedInfoItem === 'categories' && /*#__PURE__*/_react.default.createElement(_BusinessTypes.BusinessTypes, {
    business: business,
    businessTypes: businessTypes,
    formState: formState,
    setFormState: setFormState,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    setBusinessTypes: setBusinessTypes,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    isExtendExtraOpen: isExtendExtraOpen
  }), selectedInfoItem === 'location' && /*#__PURE__*/_react.default.createElement(_BusinessLocation.BusinessLocation, {
    business: business,
    formState: formState,
    setFormState: setFormState,
    handleUpdateBusinessClick: handleUpdateBusinessClick
  }), selectedInfoItem === 'agents' && /*#__PURE__*/_react.default.createElement(_BusinessOwners.BusinessOwners, {
    business: business,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    type: "agents"
  }), selectedInfoItem === 'images' && /*#__PURE__*/_react.default.createElement(_BusinessImages.BusinessImages, {
    business: business,
    handleSucessAddBusinessGallery: function handleSucessAddBusinessGallery(result) {
      return handleSuccessAddBusinessItem('gallery', result);
    },
    handleSucessDeleteBusinessGallery: function handleSucessDeleteBusinessGallery(id) {
      return handleSuccessDeleteBusinessItem('gallery', id);
    }
  }), selectedInfoItem === 'videos' && /*#__PURE__*/_react.default.createElement(_BusinessVideos.BusinessVideos, {
    business: business,
    handleSucessAddBusinessGallery: function handleSucessAddBusinessGallery(result) {
      return handleSuccessAddBusinessItem('gallery', result);
    },
    handleSucessDeleteBusinessGallery: function handleSucessDeleteBusinessGallery(id) {
      return handleSuccessDeleteBusinessItem('gallery', id);
    }
  }), selectedInfoItem === 'seo_options' && /*#__PURE__*/_react.default.createElement(_SeoOptions.SeoOptions, {
    data: business,
    formState: formState,
    setFormState: setFormState,
    handleUpdateClick: handleUpdateBusinessClick,
    isBusinessSeo: true
  }))));
};