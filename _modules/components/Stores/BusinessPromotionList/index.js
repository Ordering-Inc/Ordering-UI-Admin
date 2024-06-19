"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPromotionList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _Shared = require("../../Shared");
var _BusinessPromotionGeneralForm = require("../BusinessPromotionGeneralForm");
var _BusinessPromotionCustomFields = require("../BusinessPromotionCustomFields");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessPromotionListUI = function BusinessPromotionListUI(props) {
  var business = props.business,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    promotionListState = props.promotionListState,
    handleChangePromotionActiveState = props.handleChangePromotionActiveState,
    handleDeletePromotion = props.handleDeletePromotion,
    handleSuccessUpdate = props.handleSuccessUpdate,
    isSuccessDeleted = props.isSuccessDeleted,
    setIsSuccessDeleted = props.setIsSuccessDeleted;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowForm = _useState2[0],
    setIsShowForm = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    curPromotion = _useState4[0],
    setCurPromotion = _useState4[1];
  var _useState5 = (0, _react.useState)('general'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTab = _useState6[0],
    setSelectedTab = _useState6[1];
  var handleOpenForm = function handleOpenForm(e, promotion) {
    var inValid = e.target.closest('.promotion-checkbox');
    if (inValid) return;
    setCurPromotion(promotion);
    setSelectedTab('general');
    setIsShowForm(true);
    setIsExtendExtraOpen(true);
  };
  var handleCloseForm = function handleCloseForm() {
    setIsShowForm(false);
    setCurPromotion(null);
    setIsExtendExtraOpen(false);
    setIsSuccessDeleted(false);
  };
  (0, _react.useEffect)(function () {
    if (!isSuccessDeleted) return;
    handleCloseForm();
  }, [isSuccessDeleted]);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessPromotionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick(e) {
      return handleOpenForm(e, {});
    }
  }, t('ADD_PROMOTION', 'Add promotion'))), /*#__PURE__*/_react.default.createElement(_styles2.PromotionsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement("th", null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement("th", null, t('DATES_RANGE', 'Date range')))), promotionListState.promotions.map(function (promotion) {
    var _theme$images$dummies;
    return /*#__PURE__*/_react.default.createElement(_styles2.PromotionTbody, {
      key: promotion.id,
      active: promotion.id === (curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id),
      onClick: function onClick(e) {
        return handleOpenForm(e, promotion);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionNameContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      className: "promotion-checkbox",
      defaultChecked: promotion === null || promotion === void 0 ? void 0 : promotion.enabled,
      onChange: function onChange(e) {
        return handleChangePromotionActiveState(e.target.checked, promotion === null || promotion === void 0 ? void 0 : promotion.id);
      }
    }), /*#__PURE__*/_react.default.createElement("img", {
      src: promotion.image || ((_theme$images$dummies = theme.images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.promotionDummy),
      alt: "promotion"
    }), /*#__PURE__*/_react.default.createElement("span", null, promotion === null || promotion === void 0 ? void 0 : promotion.name))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionTypeItem, null, (promotion === null || promotion === void 0 ? void 0 : promotion.type) === 1 ? t('DISCOUNT', 'Discount') : t('COUPON', 'Coupon'))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionDateItem, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.start, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    })), /*#__PURE__*/_react.default.createElement("p", null, parseDate(promotion === null || promotion === void 0 ? void 0 : promotion.end, {
      utc: false,
      outputFormat: 'YYYY-MM-DD'
    }))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddNewPromotionButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick(e) {
      return handleOpenForm(e, {});
    }
  }, t('ADD_NEW_PROMOTION', 'Add new promotion')))), isShowForm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(BusinessPromotion, {
    isCloseButtonShow: true,
    curPromotion: curPromotion,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    handleCloseForm: handleCloseForm,
    handleDeletePromotion: handleDeletePromotion
  }, selectedTab === 'general' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionGeneralForm.BusinessPromotionGeneralForm, {
    promotion: curPromotion,
    business: business,
    handleCloseAddForm: handleCloseForm,
    handleSuccessUpdate: handleSuccessUpdate
  }), selectedTab === 'custom' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionCustomFields.BusinessPromotionCustomFields, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    offerId: curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isShowForm,
    onClose: function onClose() {
      return handleCloseForm();
    }
  }, /*#__PURE__*/_react.default.createElement(BusinessPromotion, {
    curPromotion: curPromotion,
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    handleCloseForm: handleCloseForm,
    handleDeletePromotion: handleDeletePromotion
  }, selectedTab === 'general' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionGeneralForm.BusinessPromotionGeneralForm, {
    promotion: curPromotion,
    business: business,
    handleCloseAddForm: handleCloseForm,
    handleSuccessUpdate: handleSuccessUpdate
  }), selectedTab === 'custom' && /*#__PURE__*/_react.default.createElement(_BusinessPromotionCustomFields.BusinessPromotionCustomFields, {
    businessId: business === null || business === void 0 ? void 0 : business.id,
    offerId: curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id
  })))));
};
var BusinessPromotion = function BusinessPromotion(props) {
  var isCloseButtonShow = props.isCloseButtonShow,
    curPromotion = props.curPromotion,
    selectedTab = props.selectedTab,
    setSelectedTab = props.setSelectedTab,
    handleCloseForm = props.handleCloseForm,
    handleDeletePromotion = props.handleDeletePromotion;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage3 = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useState7 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    confirm = _useState8[0],
    setConfirm = _useState8[1];
  var handleDeleteClick = function handleDeleteClick(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete this coupon?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePromotion(curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.id);
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionEditFormContainer, null, isCloseButtonShow && /*#__PURE__*/_react.default.createElement(_styles2.CloseButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleCloseForm();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), Object.keys(curPromotion).length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.EditHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.EditTitleHeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, curPromotion === null || curPromotion === void 0 ? void 0 : curPromotion.name)), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return handleDeleteClick();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles2.OptionTabsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.InnerTabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true,
    scrollId: "promotion_edit"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedTab === 'general',
    onClick: function onClick() {
      return setSelectedTab('general');
    }
  }, t('GENERAL')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: selectedTab === 'custom',
    onClick: function onClick() {
      return setSelectedTab('custom');
    }
  }, t('CUSTOM_FIELDS', 'Custom fields')))))), props.children), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var BusinessPromotionList = exports.BusinessPromotionList = function BusinessPromotionList(props) {
  var businessPromotionsController = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPromotionListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPromotionList, businessPromotionsController);
};