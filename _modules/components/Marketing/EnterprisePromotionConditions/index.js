"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionConditions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _EnterprisePromotionEditCondition = require("../EnterprisePromotionEditCondition");
var _EnterprisePromotionOrderTypes = require("../EnterprisePromotionOrderTypes");
var _EnterprisePromotionPaymethods = require("../EnterprisePromotionPaymethods");
var _EnterprisePromotionSchedule = require("../EnterprisePromotionSchedule");
var _EnterprisePromotionSpecficProducts = require("../EnterprisePromotionSpecficProducts");
var _EnterprisePromotionSpecficCategory = require("../EnterprisePromotionSpecficCategory");
var _EnterprisePromotionDeliveryzones = require("../EnterprisePromotionDeliveryzones");
var _EnterprisePromotionMaxOrders = require("../EnterprisePromotionMaxOrders");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EnterprisePromotionConditions = exports.EnterprisePromotionConditions = function EnterprisePromotionConditions(props) {
  var _promotionState$promo3;
  var isAddMode = props.isAddMode,
    formState = props.formState,
    actionState = props.actionState,
    promotionState = props.promotionState,
    handleRemoveKey = props.handleRemoveKey,
    handleUpdateClick = props.handleUpdateClick,
    selectedBusinessIds = props.selectedBusinessIds,
    handleAddPromotion = props.handleAddPromotion,
    handleChangeItem = props.handleChangeItem;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openSingleModal = _useState2[0],
    setOpenSingleModal = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    openMultipleModal = _useState4[0],
    setOpenMultipleModal = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedCondition = _useState6[0],
    setSelectedCondition = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTitle = _useState8[0],
    setSelectedTitle = _useState8[1];
  var singleConditions = ['limit', 'limit_per_user', 'max_discount', 'minimum', 'valid_from_after_user_last_order_minutes', 'valid_until_after_user_last_order_minutes'];
  var specifics = ['products', 'categories', 'delivery_zones'];
  var handlePromotionEdit = function handlePromotionEdit(e, condition, title) {
    var inValid = e.target.closest('.condition-checkbox');
    if (inValid) return;
    setSelectedCondition(condition);
    setSelectedTitle(title);
    if (singleConditions.includes(condition)) {
      setOpenSingleModal(true);
    } else {
      setOpenMultipleModal(true);
    }
  };
  var conditions = [{
    id: 1,
    title: t('PRODUCTS_SPECIFIC', 'Product specific'),
    attribute: 'products'
  }, {
    id: 2,
    title: t('CATEGORIE_SPECIFIC', 'Categories specific'),
    attribute: 'categories'
  }, {
    id: 3,
    title: t('SCHEDULE_LIMIT', 'Schedule limit'),
    attribute: 'schedule'
  }, {
    id: 4,
    title: t('OFFER_MAX_AMOUNT_TIMES', 'Max. amount of times that can be used '),
    attribute: 'limit'
  }, {
    id: 5,
    title: t('OFFER_LIMIT_TIMES_PER_USER', 'Max. amount of times that can be used per user'),
    attribute: 'limit_per_user'
  }, {
    id: 6,
    title: t('OFFER_USER_ORDER_COUNT', 'Max. amount of orders in platform of user'),
    attribute: 'user_order_count'
  }, {
    id: 7,
    title: t('PAYMEN_METHODS_ALLOWED', 'Payment methods allowed'),
    attribute: 'paymethods'
  }, {
    id: 8,
    title: t('MAX_AMOUNT_TO_DISCOUNT', 'Maximum discount limit'),
    attribute: 'max_discount'
  }, {
    id: 9,
    title: t('DELIVERY_ZONE', 'Delivery zones'),
    attribute: 'delivery_zones'
  }, {
    id: 10,
    title: t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type'),
    attribute: 'order_types_allowed'
  }, {
    id: 11,
    title: t('MINUTES_FROM_LAST_ORDER', 'Minutes from the last order'),
    attribute: 'valid_from_after_user_last_order_minutes'
  }, {
    id: 12,
    title: t('MINUTES_UNTIL_LAST_ORDER', 'Minutes until the last order'),
    attribute: 'valid_until_after_user_last_order_minutes'
  }, {
    id: 13,
    title: t('MINIMUN_PURCHASED', 'Minimum purchase'),
    attribute: 'minimum'
  }];
  var handleClickSave = function handleClickSave() {
    if (!isAddMode) handleUpdateClick();
    setOpenSingleModal(false);
    setOpenMultipleModal(false);
  };
  var handleCloseModal = function handleCloseModal() {
    if (selectedCondition) {
      handleRemoveKey(selectedCondition);
    }
    setOpenSingleModal(false);
    setOpenMultipleModal(false);
  };
  var handleIncludeOptions = function handleIncludeOptions() {
    var _promotionState$promo;
    var includeOptions = typeof formState.changes.include_options !== 'undefined' ? formState.changes.include_options : (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.include_options;
    handleChangeItem({
      include_options: !includeOptions
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ConditionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CONDITIONS', 'Conditions'))), conditions.map(function (condition, index) {
    var _promotionState$promo2;
    return /*#__PURE__*/_react.default.createElement(_styles2.ConditionItem, {
      key: index,
      onClick: function onClick(e) {
        return handlePromotionEdit(e, condition.attribute, condition.title);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, (typeof formState.changes[condition.attribute] !== 'undefined' ? formState.changes[condition.attribute] : Array.isArray(promotionState.promotion[condition.attribute]) ? (_promotionState$promo2 = promotionState.promotion[condition.attribute]) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.length : promotionState.promotion[condition.attribute]) ? /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "condition-checkbox",
      active: true,
      isCursorAllowed: true,
      onClick: function onClick() {
        return handleChangeItem(_defineProperty({}, condition.attribute, null));
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2, null)) : /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "condition-checkbox"
    }), /*#__PURE__*/_react.default.createElement("span", null, condition.title)), /*#__PURE__*/_react.default.createElement(_styles2.EditButton, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null)));
  }), /*#__PURE__*/_react.default.createElement(_styles2.ConditionItem, {
    onClick: function onClick() {
      return handleIncludeOptions();
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, (typeof formState.changes.include_options !== 'undefined' ? formState.changes.include_options : (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.include_options) ? /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
    isCursorAllowed: true,
    active: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2, null)) : /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
    isCursorAllowed: true
  }), /*#__PURE__*/_react.default.createElement("span", null, t('', 'Include options')))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return isAddMode ? handleAddPromotion() : handleUpdateClick();
    },
    disabled: Object.keys(formState.changes).length === 0 || actionState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "600px",
    open: openSingleModal,
    onClose: function onClose() {
      return handleCloseModal();
    }
  }, /*#__PURE__*/_react.default.createElement(_EnterprisePromotionEditCondition.EnterprisePromotionEditCondition, _extends({}, props, {
    title: selectedTitle,
    condition: selectedCondition,
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: specifics.includes(selectedCondition) ? '70%' : '600px',
    open: openMultipleModal,
    onClose: function onClose() {
      return handleCloseModal();
    }
  }, selectedCondition === 'products' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionSpecficProducts.EnterprisePromotionSpecficProducts, _extends({}, props, {
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  })), selectedCondition === 'categories' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionSpecficCategory.EnterprisePromotionSpecficCategory, _extends({}, props, {
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  })), selectedCondition === 'user_order_count' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionMaxOrders.EnterprisePromotionMaxOrders, _extends({}, props, {
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  })), selectedCondition === 'order_types_allowed' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionOrderTypes.EnterprisePromotionOrderTypes, _extends({}, props, {
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  })), selectedCondition === 'paymethods' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionPaymethods.EnterprisePromotionPaymethods, _extends({}, props, {
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  })), selectedCondition === 'delivery_zones' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionDeliveryzones.EnterprisePromotionDeliveryzones, _extends({}, props, {
    businessIds: selectedBusinessIds,
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  })), selectedCondition === 'schedule' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionSchedule.EnterprisePromotionSchedule, _extends({}, props, {
    onClickDone: function onClickDone() {
      return handleClickSave();
    }
  }))));
};