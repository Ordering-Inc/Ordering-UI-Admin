"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrap = require("react-bootstrap");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _EnterprisePromotionGeneralDetails = require("../EnterprisePromotionGeneralDetails");
var _EnterprisePromotionRules = require("../EnterprisePromotionRules");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EnterprisePromotionDetailsUI = function EnterprisePromotionDetailsUI(props) {
  var _formState$changes4, _promotionState$promo3, _formState$changes$na, _formState$changes5, _promotionState$promo4, _formState$changes6, _formState$changes7, _promotionState$promo5, _promotionState$promo6;
  var isAddMode = props.isAddMode,
    promotionState = props.promotionState,
    formState = props.formState,
    actionState = props.actionState,
    handleChangeItem = props.handleChangeItem,
    setMoveDistance = props.setMoveDistance,
    sitesState = props.sitesState,
    handleSelectSite = props.handleSelectSite,
    handleUpdateClick = props.handleUpdateClick,
    handleAddPromotion = props.handleAddPromotion,
    _handleSelectAllSites = props.handleSelectAllSites,
    selectedSitesIds = props.selectedSitesIds,
    selectedBusinessIds = props.selectedBusinessIds,
    businessesList = props.businessesList,
    handleSelectBusiness = props.handleSelectBusiness,
    handleSelectAllBusiness = props.handleSelectAllBusiness,
    handleDeletePromotion = props.handleDeletePromotion,
    selectedUserIds = props.selectedUserIds,
    handleSelectUser = props.handleSelectUser,
    selectedLoyaltyLevelIds = props.selectedLoyaltyLevelIds,
    handleSelectLoyaltyLevel = props.handleSelectLoyaltyLevel,
    handleSelectAllLoyaltyLevels = props.handleSelectAllLoyaltyLevels,
    handleSelectAllUsers = props.handleSelectAllUsers;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: [],
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)('general'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOption = _useState4[0],
    setSelectedOption = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var tabOptions = [{
    key: 'general',
    content: t('GENERAL', 'General')
  }, {
    key: 'sites',
    content: t('SITES', 'Sites')
  }, {
    key: 'businesses',
    content: t('CONTROL_PANEL_BUSINESS', 'Business')
  }, {
    key: 'users',
    content: t('USERS', '')
  }, {
    key: 'loyalty_levels',
    content: t('LOYALTY_LEVELS', 'Loyalty Levels')
  }, {
    key: 'rules',
    content: t('RULES', 'Rules')
  }];
  var handleClickTab = function handleClickTab(option) {
    var _formState$changes;
    if (selectedOption === 'rules') {
      var isValid = handleCheckDiscountPercentageValidation();
      if (!isValid) return;
    }
    setMoveDistance(0);
    setSelectedOption(option);
    if (((_formState$changes = formState.changes) === null || _formState$changes === void 0 || (_formState$changes = _formState$changes.businesses) === null || _formState$changes === void 0 ? void 0 : _formState$changes.length) > 0 && Object.keys(formState.changes).length !== 0 && !actionState.loading) {
      if (!isAddMode) {
        handleUpdateClick();
      }
    }
  };
  var onClickDeletePromotion = function onClickDeletePromotion() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PROMOTION', 'Promotion')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePromotion();
      }
    });
  };
  var handleCheckDiscountPercentageValidation = function handleCheckDiscountPercentageValidation() {
    var _formState$changes$ra, _formState$changes2, _promotionState$promo, _ref, _formState$changes$ra2, _formState$changes3, _promotionState$promo2;
    var rateType = (_formState$changes$ra = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.rate_type) !== null && _formState$changes$ra !== void 0 ? _formState$changes$ra : (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.rate_type;
    var rate = (_ref = (_formState$changes$ra2 = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.rate) !== null && _formState$changes$ra2 !== void 0 ? _formState$changes$ra2 : promotionState === null || promotionState === void 0 || (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.rate) !== null && _ref !== void 0 ? _ref : '';
    if (rateType === 1 && parseFloat(rate) > 100) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MAX_NUMERIC', 'The _attribute_ may not be greater than _max_.').replace('_attribute_', t('DISCOUNT_PERCENTAGE', 'Discount percentage')).replace('_max_', 100)],
        handleOnAccept: function handleOnAccept() {
          if (document.getElementById('discount_value')) {
            document.getElementById('discount_value').focus();
          }
          setAlertState({
            open: false,
            content: []
          });
        }
      });
      return false;
    }
    return true;
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('sideSlider');
    if (!element) return;
    if (isExpand) element.style.width = '600px';else element.style.width = '100vw';
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("div", null, (((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name) || (promotionState === null || promotionState === void 0 || (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.name)) && /*#__PURE__*/_react.default.createElement("h1", null, (_formState$changes$na = (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : promotionState === null || promotionState === void 0 || (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: typeof ((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.enabled) !== 'undefined' ? (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.enabled : (_promotionState$promo5 = (_promotionState$promo6 = promotionState.promotion) === null || _promotionState$promo6 === void 0 ? void 0 : _promotionState$promo6.enabled) !== null && _promotionState$promo5 !== void 0 ? _promotionState$promo5 : false,
    onChange: function onChange(val) {
      return handleChangeItem({
        enabled: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.WrapperActionSelector, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeletePromotion();
    }
  }, t('DELETE', 'Delete')))))), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, tabOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleClickTab(option.key);
      }
    }, option.content);
  }))), selectedOption === 'general' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionGeneralDetails.EnterprisePromotionGeneralDetails, _extends({}, props, {
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion
  })), selectedOption === 'sites' && /*#__PURE__*/_react.default.createElement(_Shared.SelectSites, {
    isAddMode: isAddMode,
    allSites: sitesState.sites,
    selectedSitesIds: selectedSitesIds,
    handleSelectSite: handleSelectSite,
    handleSelectAllSites: function handleSelectAllSites() {
      return _handleSelectAllSites(true);
    },
    handleSelectNoneSites: function handleSelectNoneSites() {
      return _handleSelectAllSites(false);
    },
    isDisabled: Object.keys(formState.changes).length === 0 || actionState.loading,
    handleUpdateClick: handleUpdateClick,
    handleAddClick: handleAddPromotion
  }), selectedOption === 'businesses' && /*#__PURE__*/_react.default.createElement(_Shared.SelectBusinesses, {
    isAddMode: isAddMode,
    allBusinesses: businessesList.businesses,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusinesses: function handleSelectAllBusinesses() {
      return handleSelectAllBusiness(true);
    },
    handleSelectNoneBusinesses: function handleSelectNoneBusinesses() {
      return handleSelectAllBusiness(false);
    },
    isDisabled: Object.keys(formState.changes).length === 0 || actionState.loading,
    handleUpdateClick: handleUpdateClick,
    handleAddClick: handleAddPromotion
  }), selectedOption === 'users' && /*#__PURE__*/_react.default.createElement(_Shared.SelectUsers, {
    isAddMode: isAddMode,
    isDisabled: Object.keys(formState.changes).length === 0 || actionState.loading,
    selectedUserIds: selectedUserIds,
    handleSelectUser: handleSelectUser,
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion,
    handleSelectAllUsers: handleSelectAllUsers
  }), selectedOption === 'loyalty_levels' && /*#__PURE__*/_react.default.createElement(_Shared.SelectLoyaltyLevels, {
    isAddMode: isAddMode,
    isDisabled: Object.keys(formState.changes).length === 0 || actionState.loading,
    selectedLoyaltyLevelIds: selectedLoyaltyLevelIds,
    handleSelectLoyaltyLevel: handleSelectLoyaltyLevel,
    handleSelectAllLoyaltyLevels: handleSelectAllLoyaltyLevels,
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion
  }), selectedOption === 'rules' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionRules.EnterprisePromotionRules, _extends({}, props, {
    isExpand: isExpand,
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
var EnterprisePromotionDetails = exports.EnterprisePromotionDetails = function EnterprisePromotionDetails(props) {
  var promotionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: EnterprisePromotionDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.EnterprisePromotionDetails, promotionProps);
};