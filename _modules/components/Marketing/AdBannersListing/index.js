"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdBannersListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _PostionItemUI = require("./PostionItemUI");
var _Shared = require("../../Shared");
var _PageBanner = require("../PageBanner");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdBannersListing = function AdBannersListing(props) {
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openPositionDetail = _useState2[0],
    setOpenPositionDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    moveDistance = _useState4[0],
    setMoveDistance = _useState4[1];
  var bannerPositions = [{
    key: 'web_home_page',
    title: t('WEB_HOME', 'Web home'),
    description: t('HOME_BANNER_DESCRIPTION', 'Add a banner to your home page and inform everyone about the latest news in your marketplace.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null)
  }, {
    key: 'web_business_listing',
    title: t('WEB_BUSINESS_LISTING', 'Web business listing'),
    description: t('BUSINESS_LISTING_BANNER_DESCRIPTION', 'Add a banner inside your business listing to let everyone know about your latest promotions inside your businesses listed.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ViewStacked, null)
  }, {
    key: 'web_business_page',
    title: t('WEB_BUSINESS_PAGE', 'Web business page'),
    description: t('BUSINESS_PAGE_BANNER_DESCRIPTION', 'Add a banner inside the business page, and inform news and promotions specifically of the stores customers are ordering from.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null)
  }, {
    key: 'app_home_page',
    title: t('APP_HOME', 'App home'),
    description: t('HOME_BANNER_DESCRIPTION', 'Add a banner to your home page and inform everyone about the latest news in your marketplace.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null)
  }, {
    key: 'app_business_listing',
    title: t('APP_BUSINESS_LISTING', 'App business listing'),
    description: t('BUSINESS_LISTING_BANNER_DESCRIPTION', 'Add a banner inside your business listing to let everyone know about your latest promotions inside your businesses listed.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ViewStacked, null)
  }, {
    key: 'app_business_page',
    title: t('APP_BUSINESS_PAGE', 'App business page'),
    description: t('BUSINESS_PAGE_BANNER_DESCRIPTION', 'Add a banner inside the business page, and inform news and promotions specifically of the stores customers are ordering from.'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null)
  }];
  var handleSelectBannerPosition = function handleSelectBannerPosition(item) {
    setOpenPositionDetail(item);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.AdBannersListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('AD_BANNERS', 'Ad banners'))), /*#__PURE__*/_react.default.createElement(_styles2.BannerPositionsList, {
    className: "row"
  }, bannerPositions.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.key,
      className: "col-md-4 col-sm-6"
    }, /*#__PURE__*/_react.default.createElement(_PostionItemUI.PostionItemUI, {
      title: item.title,
      description: item.description,
      icon: item.icon,
      onClick: function onClick() {
        return handleSelectBannerPosition(item);
      }
    }));
  }))), openPositionDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openPositionDetail,
    onClose: function onClose() {
      setOpenPositionDetail(null);
      setMoveDistance(0);
    },
    defaultSideBarWidth: 500 + moveDistance,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_PageBanner.PageBanners, {
    setMoveDistance: setMoveDistance,
    title: openPositionDetail === null || openPositionDetail === void 0 ? void 0 : openPositionDetail.title,
    defaultPosition: openPositionDetail === null || openPositionDetail === void 0 ? void 0 : openPositionDetail.key
  })));
};
exports.AdBannersListing = AdBannersListing;