"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletBusinessList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _PointsWalletBusinessDetail = require("../PointsWalletBusinessDetail");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PointsWalletBusinessListUI = function PointsWalletBusinessListUI(props) {
  var businessList = props.businessList,
    handleParentSidebarMove = props.handleParentSidebarMove,
    pointWallet = props.pointWallet,
    handleCheckBox = props.handleCheckBox,
    handleUpdateWalletBusiness = props.handleUpdateWalletBusiness,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    handleChangeSwitch = props.handleChangeSwitch,
    isCloseBusinessDetails = props.isCloseBusinessDetails;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];

  // Change page
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var _useState5 = (0, _react.useState)(10),
    _useState6 = _slicedToArray(_useState5, 2),
    pagesPerPage = _useState6[0],
    setPagesPerPage = _useState6[1];

  // Get current products
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPages = _useState8[0],
    setCurrentPages = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    totalPages = _useState10[0],
    setTotalPages = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    extraOpen = _useState12[0],
    setExtraOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedBusiness = _useState14[0],
    setSelectedBusiness = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    searchVal = _useState16[0],
    setSearchVal = _useState16[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setPagesPerPage(pageSize);
  };
  var handleClickBusiness = function handleClickBusiness(business, e) {
    var _e$target, _e$target2, _e$target3;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.closest('.accumulates') || e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.closest('.redeems') || e !== null && e !== void 0 && (_e$target3 = e.target) !== null && _e$target3 !== void 0 && _e$target3.closest('.wallet_enabled')) return;
    if (!pointWallet) {
      setAlertState({
        open: true,
        content: [t('YOU_MUST_CREATE_LOYALTY_PLAN', 'You must create a loyalty plan')]
      });
      return;
    }
    if (!(business !== null && business !== void 0 && business.wallet_enabled)) {
      setAlertState({
        open: true,
        content: t('DISABLED_BUSINESS', 'Disabled business')
      });
      return;
    }
    setSelectedBusiness(business);
    setExtraOpen(true);
    var id = query.get('id');
    var tab = query.get('tab');
    history.replace("".concat(location.pathname, "?id=").concat(id, "&tab=").concat(tab, "&business_id=").concat(business === null || business === void 0 ? void 0 : business.id));
    if (width >= 1100) {
      handleParentSidebarMove(550);
    }
  };
  var handleCloseBusinessDetail = function handleCloseBusinessDetail() {
    setExtraOpen(false);
    setSelectedBusiness(null);
    handleParentSidebarMove(0);
    var id = query.get('id');
    var tab = query.get('tab');
    history.replace("".concat(location.pathname, "?id=").concat(id, "&tab=").concat(tab));
  };
  var updateBusinessList = function updateBusinessList(changes) {
    var updatedBusiness = _objectSpread(_objectSpread({}, selectedBusiness), changes);
    setSelectedBusiness(updatedBusiness);
    handleUpdateBusinessList(selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id, changes);
  };
  var handleUpdateStatus = function handleUpdateStatus(businessId, enabled) {
    if (!enabled) handleCloseBusinessDetail();
    handleChangeSwitch && handleChangeSwitch(businessId, enabled);
  };
  (0, _react.useEffect)(function () {
    if (width < 1100) {
      handleParentSidebarMove(0);
    } else {
      if (extraOpen) handleParentSidebarMove(550);
    }
  }, [width, extraOpen]);
  (0, _react.useEffect)(function () {
    if (businessList.loading) return;
    var filteredBusinessList = [];
    if ((businessList === null || businessList === void 0 ? void 0 : businessList.businesses.length) > 0) {
      if (searchVal) {
        filteredBusinessList = businessList.businesses.filter(function (business) {
          var _business$name;
          return business === null || business === void 0 || (_business$name = business.name) === null || _business$name === void 0 ? void 0 : _business$name.toLowerCase().includes(searchVal === null || searchVal === void 0 ? void 0 : searchVal.toLowerCase());
        });
      } else {
        filteredBusinessList = _toConsumableArray(businessList.businesses);
      }
    }
    var _totalPages = Math.ceil(filteredBusinessList.length / pagesPerPage);
    var indexOfLastPost = currentPage * pagesPerPage;
    var indexOfFirstPost = indexOfLastPost - pagesPerPage;
    var _currentBusinessList = filteredBusinessList.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentPages(_currentBusinessList);
  }, [businessList, currentPage, pagesPerPage, searchVal]);
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
  }, [searchVal]);
  (0, _react.useEffect)(function () {
    if (!isCloseBusinessDetails) return;
    setExtraOpen(false);
    setSelectedBusiness(null);
    var id = query.get('id');
    var tab = query.get('tab');
    history.replace("".concat(location.pathname, "?id=").concat(id, "&tab=").concat(tab));
  }, [isCloseBusinessDetails]);
  (0, _react.useEffect)(function () {
    if (businessList.loading) return;
    var businessId = query.get('business_id');
    if (businessId) {
      var business = businessList.businesses.find(function (item) {
        return item.id === Number(businessId);
      });
      if (business) {
        handleClickBusiness(business);
      }
    }
  }, [businessList]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchVal,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return setSearchVal(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, businessList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "business-info"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 17
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 17
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 17
  })), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 90,
    height: 17
  })), /*#__PURE__*/_react.default.createElement("th", null))), _toConsumableArray(Array(7).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.TBoday, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 15
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 20
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ModifiedWrapper, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 17,
      height: 17
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 15
    })))));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "business-info"
  }, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement("th", null, t('ORDERS_BOX_STATUS_HEADER', 'Status')), /*#__PURE__*/_react.default.createElement("th", null, t('REDEEEM', 'Redeeem')), /*#__PURE__*/_react.default.createElement("th", null, t('ACCUMULATION', 'Accumulation')), /*#__PURE__*/_react.default.createElement("th", null))), currentPages.map(function (business, i) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles2.TBoday, {
      key: i,
      active: (business === null || business === void 0 ? void 0 : business.id) === (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id),
      onClick: function onClick(e) {
        return handleClickBusiness(business, e);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_120,c_limit')
    })), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.name))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      className: "wallet_enabled",
      defaultChecked: business === null || business === void 0 ? void 0 : business.wallet_enabled,
      onChange: function onChange(val) {
        return handleUpdateStatus(business.id, val);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxInnerWrapper, {
      onClick: function onClick(e) {
        return handleCheckBox(business.id, 'redeems', !(business !== null && business !== void 0 && business.redeems));
      },
      className: "redeems",
      noClick: !(business !== null && business !== void 0 && business.wallet_enabled)
    }, business !== null && business !== void 0 && business.redeems ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxInnerWrapper, {
      onClick: function onClick(e) {
        return handleCheckBox(business.id, 'accumulates', !(business !== null && business !== void 0 && business.accumulates));
      },
      className: "accumulates",
      noClick: !(business !== null && business !== void 0 && business.wallet_enabled)
    }, business !== null && business !== void 0 && business.accumulates ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ModifiedWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)))));
  }))), (currentPages === null || currentPages === void 0 ? void 0 : currentPages.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagesPerPage,
    handleChangePageSize: handleChangePageSize
  }), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1100 ? /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: extraOpen,
    defaultSideBarWidth: 550,
    sidebarId: "loyaltyBusinessDetail",
    onClose: handleCloseBusinessDetail
  }, /*#__PURE__*/_react.default.createElement(_PointsWalletBusinessDetail.PointsWalletBusinessDetail, {
    walletData: selectedBusiness,
    handleUpdateWalletBusiness: handleUpdateWalletBusiness,
    handleUpdateBusinessList: updateBusinessList,
    isBusiness: true
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    padding: "0px",
    open: extraOpen,
    onClose: handleCloseBusinessDetail
  }, /*#__PURE__*/_react.default.createElement(_PointsWalletBusinessDetail.PointsWalletBusinessDetail, {
    walletData: selectedBusiness,
    handleUpdateWalletBusiness: handleUpdateWalletBusiness,
    handleUpdateBusinessList: updateBusinessList,
    isBusiness: true
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('POINTS_WALLET', 'Points wallet'),
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
var PointsWalletBusinessList = function PointsWalletBusinessList(props) {
  var pointsWalletBusinessListProps = _objectSpread(_objectSpread({}, props), {}, {
    propsToFetch: ['id', 'name', 'logo'],
    UIComponent: PointsWalletBusinessListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PointsWalletBusinessList, pointsWalletBusinessListProps);
};
exports.PointsWalletBusinessList = PointsWalletBusinessList;