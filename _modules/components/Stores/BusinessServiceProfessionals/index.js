"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessServiceProfessionals = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
var _BusinessServiceProfessionalDetail = require("../BusinessServiceProfessionalDetail");
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
var BusinessServiceProfessionalsUI = function BusinessServiceProfessionalsUI(props) {
  var _usersList$users;
  var searchValue = props.searchValue,
    _onSearch = props.onSearch,
    usersList = props.usersList,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessAddUser = props.handleSuccessAddUser,
    handleDeleteUser = props.handleDeleteUser,
    getUsers = props.getUsers,
    paginationProps = props.paginationProps;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedProfessional = _useState2[0],
    setSelectedProfessional = _useState2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openDetail = _useState4[0],
    setOpenDetail = _useState4[1];
  var handleOpenDetail = function handleOpenDetail(professional) {
    setOpenDetail(true);
    setSelectedProfessional(professional);
    setIsExtendExtraOpen(true);
  };
  var handleCloseDetail = function handleCloseDetail() {
    setOpenDetail(false);
    setSelectedProfessional(null);
    setIsExtendExtraOpen(false);
  };
  var handleProfessionalClick = function handleProfessionalClick(e, professional) {
    if (e.target.closest('.check-box')) return;
    handleOpenDetail(professional);
  };
  var handleChangePage = function handleChangePage(page) {
    getUsers(page, 10);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    getUsers(expectedPage, pageSize);
  };

  // const handleChangeCheckBox = (user) => {
  //   let users = []
  //   if (isEnableCheck(user?.id)) users = product?.users?.filter(item => item.id !== user.id)
  //   else users = [...product?.users, user]
  //   handleUpdateClick({ users: users })
  // }

  // const isEnableCheck = (userId) => {
  //   let valid = false
  //   if (product?.users?.map(({ id }) => id).includes(userId)) valid = true
  //   return valid
  // }

  (0, _react.useEffect)(function () {
    if (usersList.loading || usersList.users.length > 0 || paginationProps.totalPages <= 1) return;
    if (paginationProps.currentPage !== paginationProps.totalPages) {
      handleChangePage(paginationProps.currentPage);
    } else {
      handleChangePage(paginationProps.currentPage - 1);
    }
  }, [usersList.users, paginationProps]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROFESSIONALS', 'Professionals')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenDetail(null);
    }
  }, t('ADD_PROFESSIONAL', 'Add professional'))), /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), usersList !== null && usersList !== void 0 && usersList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.ProfessionalListWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProfessionalItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      className: "d-flex h-100"
    })), /*#__PURE__*/_react.default.createElement(_styles2.UserInfo, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 18
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 130
    }))))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  })) : usersList === null || usersList === void 0 || (_usersList$users = usersList.users) === null || _usersList$users === void 0 ? void 0 : _usersList$users.map(function (user, i) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles2.ProfessionalItemContainer, {
      key: i,
      onClick: function onClick(e) {
        return handleProfessionalClick(e, user);
      },
      active: user.id === (selectedProfessional === null || selectedProfessional === void 0 ? void 0 : selectedProfessional.id)
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: user === null || user === void 0 ? void 0 : user.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((user === null || user === void 0 ? void 0 : user.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo))
    })), /*#__PURE__*/_react.default.createElement(_styles2.UserInfo, null, /*#__PURE__*/_react.default.createElement("h3", null, user === null || user === void 0 ? void 0 : user.name), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.email)))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }), /*#__PURE__*/_react.default.createElement(_styles2.BottomWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.AddBtn, {
    onClick: function onClick() {
      return handleOpenDetail(null);
    }
  }, t('ADD_PROFESSIONAL', 'Add professional')), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  })))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openDetail && /*#__PURE__*/_react.default.createElement(_BusinessServiceProfessionalDetail.BusinessServiceProfessionalDetail, {
    open: openDetail,
    onClose: handleCloseDetail,
    professional: selectedProfessional,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessAddUser: handleSuccessAddUser,
    handleDeleteUser: handleDeleteUser
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openDetail && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    hideCloseDefault: true,
    open: openDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessServiceProfessionalDetail.BusinessServiceProfessionalDetail, {
    open: openDetail,
    onClose: handleCloseDetail,
    professional: selectedProfessional,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessAddUser: handleSuccessAddUser,
    handleDeleteUser: handleDeleteUser
  }))));
};
var BusinessServiceProfessionals = exports.BusinessServiceProfessionals = function BusinessServiceProfessionals(props) {
  var businessProfessionalListProps = _objectSpread(_objectSpread({}, props), {}, {
    defaultUserTypesSelected: [8],
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true,
    UIComponent: BusinessServiceProfessionalsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersList, businessProfessionalListProps);
};