"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductTagsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _ProductTagDetails = require("../ProductTagDetails");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
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
var ProductTagsListUI = function ProductTagsListUI(props) {
  var tagsState = props.tagsState,
    searchValue = props.searchValue,
    _onSearch = props.onSearch,
    selectedTagIds = props.selectedTagIds,
    actionState = props.actionState,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleSuccessDelete = props.handleSuccessDelete,
    handleSuccessAdd = props.handleSuccessAdd,
    handleChangeProductTag = props.handleChangeProductTag,
    handleSelectNoneTags = props.handleSelectNoneTags,
    handleSelectAllTags = props.handleSelectAllTags;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedTag = _useState2[0],
    setSelectedTag = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpenTagDetail = _useState4[0],
    setIsOpenTagDetail = _useState4[1];
  var handleOpenProductTagDetail = function handleOpenProductTagDetail(e, tag, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.product-tag-checkbox');
    if (isInvalid) return;
    setSelectedTag(tag);
    setIsExtendExtraOpen(true);
    setIsOpenTagDetail(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        tag: tag === null || tag === void 0 ? void 0 : tag.id
      });
    }
  };
  var handleCloseDetail = function handleCloseDetail() {
    setIsOpenTagDetail(false);
    setIsExtendExtraOpen(false);
    setSelectedTag(null);
    (0, _utils.removeQueryToUrl)(['tag']);
  };
  (0, _react.useEffect)(function () {
    if (tagsState.loading) return;
    var tagId = query.get('tag');
    if (tagId) {
      var initTag = tagsState.tags.find(function (tag) {
        return tag.id === Number(tagId);
      });
      handleOpenProductTagDetail(null, initTag, true);
    }
  }, [tagsState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.TagsListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    search: searchValue,
    onSearch: function onSearch(val) {
      return _onSearch(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.SelectButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllTags();
    },
    disabled: actionState.loading || tagsState.tags.length === 0
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectNoneTags();
    },
    disabled: actionState.loading || tagsState.tags.length === 0
  }, t('SELECT_NONE', 'Select none'))), tagsState !== null && tagsState !== void 0 && tagsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTagWrapper, {
      key: i,
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    }), /*#__PURE__*/_react.default.createElement(_styles2.TagImageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 32,
      height: 32
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 14
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 10,
      height: 13
    }));
  }) : /*#__PURE__*/_react.default.createElement(_styles2.TagsListWrapper, null, tagsState.tags.map(function (tag) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ProductTagWrapper, {
      key: tag.id,
      active: tag.id === (selectedTag === null || selectedTag === void 0 ? void 0 : selectedTag.id),
      onClick: function onClick(e) {
        return handleOpenProductTagDetail(e, tag);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      className: "product-tag-checkbox",
      checked: selectedTagIds.includes(tag.id),
      onChange: function onChange(e) {
        return handleChangeProductTag(e.target.checked, tag.id);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.TagImageWrapper, null, tag !== null && tag !== void 0 && tag.image ? /*#__PURE__*/_react.default.createElement("img", {
      src: tag.image,
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "tag-name"
    }, tag.name)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })), !tagsState.loading && /*#__PURE__*/_react.default.createElement(_styles2.AddNewLabel, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick(e) {
      return handleOpenProductTagDetail(e, null);
    }
  }, t('ADD_NEW_LABEL', 'Add new label')))), isOpenTagDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "product-tag-details",
    isBorderShow: true,
    open: isOpenTagDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductTagDetails.ProductTagDetails, {
    tag: selectedTag,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessDelete: handleSuccessDelete,
    handleSuccessAdd: handleSuccessAdd,
    onClose: handleCloseDetail
  })));
};
var ProductTagsList = exports.ProductTagsList = function ProductTagsList(props) {
  var tagsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductTagsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductTagsList, tagsProps);
};