"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBrandListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _BusinessBrandGENDetail = require("../BusinessBrandGENDetail");
var _BusinessBrandBUSIDetail = require("../BusinessBrandBUSIDetail");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var BusinessBrandListingUI = function BusinessBrandListingUI(props) {
  var _brandListState$brand5;
  var searchValue = props.searchValue,
    _onSearch = props.onSearch,
    brandListState = props.brandListState,
    handleChangeState = props.handleChangeState,
    brandFormState = props.brandFormState,
    handleDeleteBrand = props.handleDeleteBrand,
    openDetail = props.openDetail,
    setOpenDetail = props.setOpenDetail;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    brandList = _useState2[0],
    setBrandList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)('general'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedType = _useState6[0],
    setSelectedType = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedBrand = _useState8[0],
    setSelectedBrand = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isExpand = _useState10[0],
    setIsExpand = _useState10[1];
  var moreOptions = [{
    value: 0,
    content: t('DELETE', 'Delete')
  }];
  var handleCloseSidebar = function handleCloseSidebar() {
    setOpenDetail(false);
    setSelectedBrand(null);
    (0, _utils.removeQueryToUrl)(['id', 'tab']);
  };
  var handleOpenSideBar = function handleOpenSideBar(id) {
    setSelectedType('general');
    if (id) {
      var brand = brandListState === null || brandListState === void 0 ? void 0 : brandListState.brands.find(function (item) {
        return item.id === id;
      });
      setSelectedBrand(brand);
    } else {
      setSelectedBrand(null);
    }
    setOpenDetail(true);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleClickBrand = function handleClickBrand(e, brandId, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.brand_enable_control');
    if (isInvalid) return;
    handleOpenSideBar(brandId);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: brandId
      });
    }
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('brand-details');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    var _brandListState$brand;
    if ((brandListState === null || brandListState === void 0 || (_brandListState$brand = brandListState.brands) === null || _brandListState$brand === void 0 ? void 0 : _brandListState$brand.length) > 0) {
      var brands = [];
      if (searchValue) {
        var _brandListState$brand2;
        brands = brandListState === null || brandListState === void 0 || (_brandListState$brand2 = brandListState.brands) === null || _brandListState$brand2 === void 0 ? void 0 : _brandListState$brand2.filter(function (brand) {
          var _brand$name;
          return (_brand$name = brand.name) === null || _brand$name === void 0 ? void 0 : _brand$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
        });
      } else {
        brands = _toConsumableArray(brandListState === null || brandListState === void 0 ? void 0 : brandListState.brands);
      }
      setBrandList(brands);
    }
  }, [brandListState, searchValue]);
  (0, _react.useEffect)(function () {
    if ((brandList === null || brandList === void 0 ? void 0 : brandList.length) > 0 && selectedBrand) {
      var _brandListState$brand3;
      var brand = brandListState === null || brandListState === void 0 || (_brandListState$brand3 = brandListState.brands) === null || _brandListState$brand3 === void 0 ? void 0 : _brandListState$brand3.find(function (item) {
        return item.id === (selectedBrand === null || selectedBrand === void 0 ? void 0 : selectedBrand.id);
      });
      setSelectedBrand(brand);
    }
  }, [brandList]);
  (0, _react.useEffect)(function () {
    var _brandFormState$resul;
    if (brandFormState !== null && brandFormState !== void 0 && (_brandFormState$resul = brandFormState.result) !== null && _brandFormState$resul !== void 0 && _brandFormState$resul.error) {
      var _brandFormState$resul2;
      setAlertState({
        open: true,
        content: brandFormState === null || brandFormState === void 0 || (_brandFormState$resul2 = brandFormState.result) === null || _brandFormState$resul2 === void 0 ? void 0 : _brandFormState$resul2.result
      });
    }
  }, [brandFormState === null || brandFormState === void 0 ? void 0 : brandFormState.result]);
  (0, _react.useEffect)(function () {
    var _brandListState$brand4;
    if (!(brandListState !== null && brandListState !== void 0 && (_brandListState$brand4 = brandListState.brands) !== null && _brandListState$brand4 !== void 0 && _brandListState$brand4.length)) return;
    var id = query.get('id');
    if (id) {
      handleClickBrand(null, Number(id), true);
    }
  }, [brandListState === null || brandListState === void 0 || (_brandListState$brand5 = brandListState.brands) === null || _brandListState$brand5 === void 0 ? void 0 : _brandListState$brand5.length]);
  var handleTabClick = function handleTabClick(tab, isInitialRender) {
    setSelectedType(tab);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tab: tab
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!selectedBrand) return;
    var tab = query.get('tab');
    if (tab) {
      handleTabClick(tab, true);
    } else {
      handleTabClick(selectedType);
    }
  }, [selectedBrand]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('BRAND_MANAGER', 'Brand manager'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenSideBar();
    }
  }, t('ADD_BRAND', 'Add brand')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BrandListTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')))), brandListState.loading ? _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BrandBody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BrandGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: brandListState === null || brandListState === void 0 ? void 0 : brandListState.loading
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 32,
      height: 32
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 20
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 20
    }))))));
  }) : brandList.map(function (brand) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles2.BrandBody, {
      key: brand.id,
      active: brand.id === (selectedBrand === null || selectedBrand === void 0 ? void 0 : selectedBrand.id),
      onClick: function onClick(e) {
        return handleClickBrand(e, brand.id);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BrandGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((brand === null || brand === void 0 ? void 0 : brand.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, brand === null || brand === void 0 ? void 0 : brand.name)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "brand_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: brand === null || brand === void 0 ? void 0 : brand.enabled,
      onChange: function onChange(enabled) {
        return handleChangeState(brand.id, 'enabled', enabled);
      }
    }))))));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BrandListBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenSideBar();
    }
  }, t('ADD_NEW_BRAND', 'Add new brand'))), openDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "brand-details",
    defaultSideBarWidth: 500,
    open: openDetail,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BrandDetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailHeder, null, /*#__PURE__*/_react.default.createElement("div", null, (selectedBrand === null || selectedBrand === void 0 ? void 0 : selectedBrand.name) && /*#__PURE__*/_react.default.createElement("span", null, selectedBrand === null || selectedBrand === void 0 ? void 0 : selectedBrand.name), !selectedBrand && /*#__PURE__*/_react.default.createElement("span", null, t('ADD_NEW_BRAND', 'Add new brand')), selectedBrand && /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (selectedBrand === null || selectedBrand === void 0 ? void 0 : selectedBrand.enabled) || false,
    onChange: function onChange(enabled) {
      return handleChangeState(selectedBrand === null || selectedBrand === void 0 ? void 0 : selectedBrand.id, 'enabled', enabled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSideBar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), selectedBrand && /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    options: moreOptions,
    onChange: function onChange() {
      return handleDeleteBrand(selectedBrand.id);
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.TabContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedType === 'general',
    onClick: function onClick() {
      return handleTabClick('general');
    }
  }, t('GENERAL', 'General')), selectedBrand && /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedType === 'businesses',
    onClick: function onClick() {
      return handleTabClick('businesses');
    }
  }, t('BUSINESSES', 'Businesses'))), selectedType === 'general' && /*#__PURE__*/_react.default.createElement(_BusinessBrandGENDetail.BusinessBrandGENDetail, _extends({}, props, {
    brand: selectedBrand,
    onSelectedBrand: setSelectedBrand
  })), selectedType === 'businesses' && /*#__PURE__*/_react.default.createElement(_BusinessBrandBUSIDetail.BusinessBrandBUSIDetail, _extends({}, props, {
    brand: selectedBrand
  }))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('TRANSLATIONS', 'Translations'),
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
var BusinessBrandListing = function BusinessBrandListing(props) {
  var businessBrandListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessBrandListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessBrandListing, businessBrandListingProps);
};
exports.BusinessBrandListing = BusinessBrandListing;