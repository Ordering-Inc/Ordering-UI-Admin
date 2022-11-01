"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EnterprisePromotionConditions = function EnterprisePromotionConditions(props) {
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
exports.EnterprisePromotionConditions = EnterprisePromotionConditions;