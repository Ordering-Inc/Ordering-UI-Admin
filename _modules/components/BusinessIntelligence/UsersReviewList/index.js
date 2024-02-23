"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersReviewList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _UserReviewDetails = require("../UserReviewDetails");
var _utils = require("../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var DriversReviewListUI = function DriversReviewListUI(props) {
  var parentSearchValue = props.parentSearchValue,
    usersList = props.usersList,
    paginationProps = props.paginationProps,
    getUsers = props.getUsers,
    onSearch = props.onSearch,
    defaultUserTypesSelected = props.defaultUserTypesSelected,
    isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parseNumber = _useUtils2$.parseNumber;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openReview = _useState2[0],
    setOpenReview = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    curUser = _useState4[0],
    setCurUser = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    curUserId = _useState6[0],
    setCurUserId = _useState6[1];
  var headerTitle = defaultUserTypesSelected.length === 1 && defaultUserTypesSelected[0] === 3 ? t('CUSTOMER', 'Customer') : defaultUserTypesSelected[0] === 8 ? t('PROFESSIONAL', 'Professional') : t('DRIVER', 'Driver');
  var handleChangePage = function handleChangePage(page) {
    getUsers(page, 10);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getUsers(expectedPage, pageSize);
  };
  (0, _react.useEffect)(function () {
    if (parentSearchValue === null) return;
    onSearch(parentSearchValue);
  }, [parentSearchValue]);
  var handleOpenReview = function handleOpenReview(user) {
    setCurUser(user);
    setCurUserId(user.id);
    setOpenReview(true);
  };
  var handleClickReview = function handleClickReview(e, user, isInitialRender) {
    var _e$target;
    var isInvalid = (e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.review-enabled')) || e.target.closest('.review-actions');
    if (isInvalid) return;
    handleOpenReview(user);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: user.id
      });
    }
  };
  var handleCloseReviewDetails = function handleCloseReviewDetails() {
    setCurUser(null);
    setOpenReview(false);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id) {
      setCurUserId(Number(id));
      setOpenReview(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.currentPage) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.pageSize) || !(paginationProps !== null && paginationProps !== void 0 && paginationProps.totalPages)) return;
    (0, _utils.addQueryToUrl)({
      page: paginationProps.currentPage,
      pageSize: paginationProps.pageSize
    });
  }, [paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, {
    isHeader: true
  }, headerTitle)), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, {
    isHeader: true
  }, t('REVIEWS', 'Reviews'))))), usersList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })))));
  }) : usersList.users.map(function (user) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewTbody, {
      key: user.id,
      active: user.id === (curUser === null || curUser === void 0 ? void 0 : curUser.id),
      onClick: function onClick(e) {
        return handleClickReview(e, user);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'w_50,c_limit')
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.email)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, null, (user === null || user === void 0 ? void 0 : user.qualification) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, null), /*#__PURE__*/_react.default.createElement("p", null, parseNumber(user === null || user === void 0 ? void 0 : user.qualification)))))));
  })), /*#__PURE__*/_react.default.createElement(_styles.PagesBottomContainer, null, (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize
  })), openReview && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "driver-review-details",
    defaultSideBarWidth: 550,
    open: openReview,
    onClose: function onClose() {
      return handleCloseReviewDetails();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_UserReviewDetails.UserReviewDetails, {
    userId: curUserId,
    user: curUser
  })));
};
var UsersReviewList = exports.UsersReviewList = function UsersReviewList(props) {
  var driversReviewListProps = _objectSpread(_objectSpread({}, props), {}, {
    isSearchByUserEmail: true,
    isSearchByUserName: true,
    UIComponent: DriversReviewListUI,
    propsToFetch: ['name', 'middle_name', 'second_lastname', 'lastname', 'email', 'photo', 'qualification', 'reviews']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, driversReviewListProps);
};