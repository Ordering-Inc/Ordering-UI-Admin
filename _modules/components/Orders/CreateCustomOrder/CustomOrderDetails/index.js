"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomOrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SelectCustomer = require("../SelectCustomer");
var _OrderTypeSelector = require("../OrderTypeSelector");
var _SelectBusinesses = require("../SelectBusinesses");
var _Map = require("../Map");
var _SelectProducts = require("../SelectProducts");
var _Checkout = require("../Checkout");
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
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
var CustomOrderDetailsUI = function CustomOrderDetailsUI(props) {
  var phone = props.phone,
    onChangeNumber = props.onChangeNumber,
    customersPhones = props.customersPhones,
    setCustomersPhones = props.setCustomersPhones,
    handleParentSidebarMove = props.handleParentSidebarMove,
    businessList = props.businessList,
    selectedUser = props.selectedUser,
    selectedBusiness = props.selectedBusiness,
    setSelectedUser = props.setSelectedUser,
    setSelectedBusiness = props.setSelectedBusiness,
    productList = props.productList,
    getProducts = props.getProducts,
    handeUpdateProductCart = props.handeUpdateProductCart,
    cart = props.cart,
    onClose = props.onClose,
    handleOpenCustomOrderDetail = props.handleOpenCustomOrderDetail,
    handlePlaceOrderByTotal = props.handlePlaceOrderByTotal,
    extraFields = props.extraFields,
    setExtraFields = props.setExtraFields,
    actionState = props.actionState,
    customerAddress = props.customerAddress;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useValidationFields = (0, _orderingComponentsAdmin.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useOrder = (0, _orderingComponentsAdmin.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    changeAddress = _useOrder2[1].changeAddress;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isOrderByProducts = _useState4[0],
    setIsOrderByProducts = _useState4[1];
  var handleCloseAlert = function handleCloseAlert() {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      error: null
    }));
    setAlertState({
      open: false,
      content: []
    });
  };
  var handlePlaceOrder = function handlePlaceOrder() {
    var _validationFields$fie, _validationFields$fie2;
    var errMessage = [];
    if (!selectedBusiness) {
      errMessage.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('BUSINESS', 'Business')));
    }
    if (!(extraFields !== null && extraFields !== void 0 && extraFields.total)) {
      errMessage.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('TOTAL', 'Total')));
    }
    if (validationFields !== null && validationFields !== void 0 && (_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.checkout) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.comments) !== null && _validationFields$fie !== void 0 && _validationFields$fie.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.checkout) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.comments) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2.required && !(extraFields !== null && extraFields !== void 0 && extraFields.comment)) {
      errMessage.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('COMMENT', 'Comment')));
    }
    if (errMessage.length > 0) {
      setAlertState({
        open: true,
        content: errMessage
      });
      return;
    }
    handlePlaceOrderByTotal();
  };
  (0, _react.useEffect)(function () {
    if (!(customerAddress !== null && customerAddress !== void 0 && customerAddress.id)) return;
    changeAddress(customerAddress.id);
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.id]);
  (0, _react.useEffect)(function () {
    if (customersPhones !== null && customersPhones !== void 0 && customersPhones.error) {
      setAlertState({
        open: true,
        content: [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]
      });
    }
  }, [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]);
  (0, _react.useEffect)(function () {
    if (actionState !== null && actionState !== void 0 && actionState.error) {
      setAlertState({
        open: true,
        content: actionState === null || actionState === void 0 ? void 0 : actionState.error
      });
    }
  }, [actionState]);
  (0, _react.useEffect)(function () {
    if (!isOrderByProducts) {
      setExtraFields({
        external_id: extraFields === null || extraFields === void 0 ? void 0 : extraFields.external_id
      });
    }
  }, [isOrderByProducts]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, {
    className: "custom-order-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('CREATE_CUSTOM_ORDER', 'Create custom order')), /*#__PURE__*/_react.default.createElement(_SelectCustomer.SelectCustomer, {
    phone: phone,
    customersPhones: customersPhones,
    selectedUser: selectedUser,
    setSelectedUser: setSelectedUser,
    onChangeNumber: onChangeNumber,
    handleParentSidebarMove: handleParentSidebarMove,
    customerAddress: customerAddress
  }), (customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelector.OrderTypeSelector, null), /*#__PURE__*/_react.default.createElement(_SelectBusinesses.SelectBusinesses, {
    businessList: businessList,
    selectedBusiness: selectedBusiness,
    setSelectedBusiness: setSelectedBusiness
  }), /*#__PURE__*/_react.default.createElement(_Map.Map, {
    customer: selectedUser,
    customerLocation: customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location,
    business: selectedBusiness
  }), /*#__PURE__*/_react.default.createElement(_styles2.ToggleOptions, null, /*#__PURE__*/_react.default.createElement(_styles2.RaidoButton, {
    onClick: function onClick() {
      return setIsOrderByProducts(true);
    }
  }, isOrderByProducts ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_BY_PRODUCTS', 'Order by products'))), /*#__PURE__*/_react.default.createElement(_styles2.RaidoButton, {
    onClick: function onClick() {
      return setIsOrderByProducts(false);
    }
  }, isOrderByProducts ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_BY_TOTAL', 'Order by total')))), !isOrderByProducts && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (extraFields === null || extraFields === void 0 ? void 0 : extraFields.total) || '',
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return setExtraFields(_objectSpread(_objectSpread({}, extraFields), {}, {
        total: e.target.value
      }));
    },
    placeholder: t('TOTAL', 'Total')
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External id'), /*#__PURE__*/_react.default.createElement("span", null, t('OPTIONAL', 'Optional'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (extraFields === null || extraFields === void 0 ? void 0 : extraFields.external_id) || '',
    onChange: function onChange(e) {
      return setExtraFields(_objectSpread(_objectSpread({}, extraFields), {}, {
        external_id: e.target.value
      }));
    },
    placeholder: t('EXTERNAL_ID', 'External id')
  })), !isOrderByProducts && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    value: (extraFields === null || extraFields === void 0 ? void 0 : extraFields.comment) || '',
    onChange: function onChange(e) {
      return setExtraFields(_objectSpread(_objectSpread({}, extraFields), {}, {
        comment: e.target.value
      }));
    },
    placeholder: t('COMMENT', 'Comment')
  })), selectedBusiness && isOrderByProducts && /*#__PURE__*/_react.default.createElement(_SelectProducts.SelectProducts, {
    productList: productList,
    getProducts: getProducts,
    handeUpdateProductCart: handeUpdateProductCart,
    cart: cart,
    business: selectedBusiness
  }), cart && (cart === null || cart === void 0 ? void 0 : cart.products.length) > 0 && isOrderByProducts && /*#__PURE__*/_react.default.createElement(_Checkout.Checkout, {
    cartUuid: cart.uuid,
    onPlaceOrderClick: function onPlaceOrderClick(data, paymethod, cart) {
      (cart === null || cart === void 0 ? void 0 : cart.order_id) && handleOpenCustomOrderDetail(cart.order_id);
      onClose();
    },
    extraFields: extraFields
  }), !isOrderByProducts && /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handlePlaceOrder,
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading
  }, t('PLACE_ORDER', 'Place Order')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState.open,
    content: alertState.content,
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  })));
};
var CustomOrderDetails = exports.CustomOrderDetails = function CustomOrderDetails(props) {
  var customOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomOrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CustomOrderDetails, customOrderProps);
};