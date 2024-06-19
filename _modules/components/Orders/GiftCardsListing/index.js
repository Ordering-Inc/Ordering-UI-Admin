"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GiftCardsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var GiftCardsListingUI = function GiftCardsListingUI(props) {
  var giftCards = props.giftCards,
    paginationProps = props.paginationProps,
    activeStatus = props.activeStatus,
    setActiveStatus = props.setActiveStatus,
    getGiftCards = props.getGiftCards,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultStatus = query.get('status');
  var handleChangePage = function handleChangePage(page) {
    getGiftCards(page, paginationProps.pageSize);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getGiftCards(expectedPage, pageSize);
  };
  var handleChangeStatus = function handleChangeStatus(status) {
    setActiveStatus(status);
    if (isUseQuery) {
      (0, _utils.addQueryToUrl)({
        status: status
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (!isUseQuery) return;
    if (defaultStatus) {
      setActiveStatus(defaultStatus);
      return;
    }
    (0, _utils.addQueryToUrl)({
      status: 'pending'
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.currentPage) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.pageSize) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    });
  }, [paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitle, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('GIFT_CARD_MANAGER', 'Gift card manager'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_styles2.TabsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: activeStatus === 'pending',
    onClick: function onClick() {
      return handleChangeStatus('pending');
    }
  }, t('ORDER_PENDING', 'Pending')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: activeStatus === 'activated',
    onClick: function onClick() {
      return handleChangeStatus('activated');
    }
  }, t('REDEEMED', 'Redeemed'))), /*#__PURE__*/_react.default.createElement(_styles2.GiftCardsTableWrapper, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('ID', 'ID')), /*#__PURE__*/_react.default.createElement("th", null, t('PURCHASED_BY', 'Purchased by')), /*#__PURE__*/_react.default.createElement("th", null, t('REDEEMED_BY', 'Redeemed by')), /*#__PURE__*/_react.default.createElement("th", null, t('PURCHASED_DATE', 'Purchased date')), /*#__PURE__*/_react.default.createElement("th", null, t('REDEEMED_DATE', 'Redeemed date')))), giftCards.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.GiftCardRow, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
      className: "name"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", {
      className: "phone"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
      className: "name"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", {
      className: "phone"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))));
  }) : giftCards.list.map(function (card) {
    var _card$author, _card$author2, _card$author3, _card$author4, _card$activater, _card$activater2, _card$activater3, _card$activater4;
    return /*#__PURE__*/_react.default.createElement(_styles2.GiftCardRow, {
      key: card.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, card.id), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_card$author = card.author) === null || _card$author === void 0 ? void 0 : _card$author.photo,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
      className: "name"
    }, (_card$author2 = card.author) === null || _card$author2 === void 0 ? void 0 : _card$author2.name, " ", (_card$author3 = card.author) === null || _card$author3 === void 0 ? void 0 : _card$author3.lastname), /*#__PURE__*/_react.default.createElement("p", {
      className: "phone"
    }, (_card$author4 = card.author) === null || _card$author4 === void 0 ? void 0 : _card$author4.cellphone)))), /*#__PURE__*/_react.default.createElement("td", null, card.activater && /*#__PURE__*/_react.default.createElement(_styles2.UserInfoContainer, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_card$activater = card.activater) === null || _card$activater === void 0 ? void 0 : _card$activater.photo,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
      className: "name"
    }, (_card$activater2 = card.activater) === null || _card$activater2 === void 0 ? void 0 : _card$activater2.name, " ", (_card$activater3 = card.activater) === null || _card$activater3 === void 0 ? void 0 : _card$activater3.lastname), /*#__PURE__*/_react.default.createElement("p", {
      className: "phone"
    }, (_card$activater4 = card.activater) === null || _card$activater4 === void 0 ? void 0 : _card$activater4.cellphone)))), /*#__PURE__*/_react.default.createElement("td", null, card.created_at), /*#__PURE__*/_react.default.createElement("td", null, card.activated_at)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.PaginationWarpper, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: paginationProps.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
};
var GiftCardsListing = exports.GiftCardsListing = function GiftCardsListing(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultStatus = query.get('status');
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var giftCardsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GiftCardsListingUI,
    isSearchById: true,
    isSearchByAuthorName: true,
    isSearchByAuthorEmail: true,
    isSearchByAuthorPhone: true,
    defaultStatus: defaultStatus,
    paginationSettings: {
      initialPage: Number(defaultPage),
      pageSize: Number(defaultPageSize)
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.GiftCardsList, giftCardsProps);
};