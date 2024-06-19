"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerImages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _BannerImageDetails = require("../BannerImageDetails");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BannerImages = exports.BannerImages = function BannerImages(props) {
  var aspectRatio = props.aspectRatio,
    bannerItemsState = props.bannerItemsState,
    handleUpdateBannerItem = props.handleUpdateBannerItem,
    handleDeleteBannerItem = props.handleDeleteBannerItem,
    setBannerMoveDistance = props.setBannerMoveDistance,
    handleSuccessBannerItemAdd = props.handleSuccessBannerItemAdd,
    bannerId = props.bannerId;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openLinkDetails = _useState2[0],
    setOpenLinkDetails = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedImage = _useState4[0],
    setSelectedImage = _useState4[1];
  var handleImageLink = function handleImageLink(image) {
    setSelectedImage(image);
    setOpenLinkDetails(true);
    setBannerMoveDistance(500);
  };
  var handleCloseImageDetail = function handleCloseImageDetail() {
    setBannerMoveDistance(0);
    setOpenLinkDetails(false);
    setSelectedImage(null);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ImagesContainer, null, bannerItemsState.images.map(function (image) {
    return /*#__PURE__*/_react.default.createElement(_styles.BannerImage, {
      key: image.id,
      active: (selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.id) === image.id,
      onClick: function onClick() {
        return handleImageLink(image);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(image === null || image === void 0 ? void 0 : image.url, 'h_130,c_limit'),
      alt: "item image",
      loading: "lazy"
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles.BannerImage, {
    onClick: function onClick() {
      return handleImageLink(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD', 'Add'))))), openLinkDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openLinkDetails,
    onClose: function onClose() {
      return handleCloseImageDetail();
    },
    isBorderShow: true
  }, /*#__PURE__*/_react.default.createElement(_BannerImageDetails.BannerImageDetails, {
    key: selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.id,
    image: selectedImage,
    aspectRatio: aspectRatio,
    onClose: function onClose() {
      return handleCloseImageDetail();
    },
    bannerId: bannerId,
    handleUpdateBannerItem: handleUpdateBannerItem,
    handleDeleteBannerItem: handleDeleteBannerItem,
    handleSuccessBannerItemAdd: handleSuccessBannerItemAdd
  })));
};