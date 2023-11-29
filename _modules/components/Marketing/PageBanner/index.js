"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBanners = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BannerDetails = require("../BannerDetails");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var PageBannersUI = function PageBannersUI(props) {
  var title = props.title,
    bannerInfo = props.bannerInfo,
    bannersListState = props.bannersListState,
    setMoveDistance = props.setMoveDistance,
    sitesState = props.sitesState,
    actionState = props.actionState,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleUpdateBanner = props.handleUpdateBanner,
    handleSuccessAdd = props.handleSuccessAdd,
    defaultPosition = props.defaultPosition,
    handleSuccessDelete = props.handleSuccessDelete,
    aspectRatio = props.aspectRatio,
    isSearhShow = props.isSearhShow;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openItemsDetail = _useState2[0],
    setOpenItemsDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBanner = _useState4[0],
    setSelectedBanner = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: [],
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    bannerMoveDistance = _useState10[0],
    setBannerMoveDistance = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isExpand = _useState12[0],
    setIsExpand = _useState12[1];
  var handleOpenBannerItemsDetail = function handleOpenBannerItemsDetail(e, banner, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.banner-enabled');
    if (isInvalid) return;
    setSelectedBanner(banner);
    setOpenItemsDetail(true);
    setMoveDistance(500);
    if (banner && !isInitialRender) {
      (0, _utils.addQueryToUrl)({
        banner: banner === null || banner === void 0 ? void 0 : banner.id
      });
    }
  };
  var handleCloseDetail = function handleCloseDetail() {
    setMoveDistance(0);
    setOpenItemsDetail(false);
    setSelectedBanner(null);
    (0, _utils.removeQueryToUrl)(['banner']);
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('sideSlider');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState]);
  (0, _react.useEffect)(function () {
    setSearchValue('');
    setMoveDistance(0);
    setOpenItemsDetail(false);
    setSelectedBanner(null);
  }, [defaultPosition]);
  (0, _react.useEffect)(function () {
    if (openItemsDetail) setIsExpand(false);
  }, [openItemsDetail]);
  (0, _react.useEffect)(function () {
    if (bannersListState.loading) return;
    var bannerId = query.get('banner');
    if (bannerId) {
      var initBanner = bannersListState.banners.find(function (banner) {
        return banner.id === Number(bannerId);
      });
      if (initBanner) {
        handleOpenBannerItemsDetail(null, initBanner, true);
      }
    }
  }, [bannersListState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, bannerInfo))), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, width > 576 && !openItemsDetail && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)))), isSearhShow && /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    onSearch: function onSearch(value) {
      return setSearchValue(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles2.BannersHeader, null, t('BANNERS', 'Banners')), /*#__PURE__*/_react.default.createElement(_styles2.BannersListWrapper, null, bannersListState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BannerItemWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.BannerTitleConatiner, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.BannerActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })));
  }) : bannersListState.banners.filter(function (item) {
    return item.name.toUpperCase().includes(searchValue.toUpperCase());
  }).map(function (banner) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BannerItemWrapper, {
      key: banner.id,
      active: (selectedBanner === null || selectedBanner === void 0 ? void 0 : selectedBanner.id) === banner.id,
      onClick: function onClick(e) {
        return handleOpenBannerItemsDetail(e, banner);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.BannerTitleConatiner, null, banner === null || banner === void 0 ? void 0 : banner.name), /*#__PURE__*/_react.default.createElement(_styles2.BannerActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "banner-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: banner.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateBanner({
          enabled: enabled
        }, banner.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)));
  })), !bannersListState.loading && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick(e) {
      return handleOpenBannerItemsDetail(e, {});
    }
  }, t('ADD_BANNER', 'Add banner'))), openItemsDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: openItemsDetail,
    onClose: function onClose() {
      handleCloseDetail();
      setBannerMoveDistance(0);
    },
    moveDistance: bannerMoveDistance,
    defaultSideBarWidth: 500 + bannerMoveDistance
  }, /*#__PURE__*/_react.default.createElement(_BannerDetails.BannerDetails, {
    banner: selectedBanner,
    sitesState: sitesState,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessAdd: handleSuccessAdd,
    handleSuccessDelete: handleSuccessDelete,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    defaultPosition: defaultPosition,
    aspectRatio: aspectRatio,
    setBannerMoveDistance: setBannerMoveDistance
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return alertState !== null && alertState !== void 0 && alertState.handleOnAccept ? alertState.handleOnAccept() : setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var PageBanners = function PageBanners(props) {
  var bannersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PageBannersUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.AdBannersList, bannersProps);
};
exports.PageBanners = PageBanners;