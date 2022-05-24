"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionOrderTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionOrderTypes = function EnterprisePromotionOrderTypes(props) {
  var _configState$configs, _configState$configs$;

  var promotionState = props.promotionState,
      formState = props.formState,
      handleChangeItem = props.handleChangeItem,
      onClickDone = props.onClickDone;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var orderTypes = [{
    value: 1,
    content: t('DELIVERY', 'Delivery')
  }, {
    value: 2,
    content: t('PICKUP', 'Pickup')
  }, {
    value: 3,
    content: t('EAT_IN', 'Eat in')
  }, {
    value: 4,
    content: t('CURBSIDE', 'Curbside')
  }, {
    value: 5,
    content: t('DRIVE_THRU', 'Drive thru')
  }];

  var handleChangeOrderTypes = function handleChangeOrderTypes(checked, orderType) {
    var _formState$changes;

    var orderTypes = [];

    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.order_types_allowed) {
      var _formState$changes2;

      orderTypes = _toConsumableArray((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.order_types_allowed);
    } else {
      var _promotionState$promo;

      if (Array.isArray((_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.order_types_allowed)) {
        var _promotionState$promo2;

        orderTypes = _toConsumableArray((_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.order_types_allowed);
      }
    }

    if (checked) {
      orderTypes.push(orderType);
    } else {
      orderTypes = orderTypes.filter(function (value) {
        return value !== orderType;
      });
    }

    handleChangeItem({
      order_types_allowed: orderTypes
    });
  };

  var isDefaultChecked = function isDefaultChecked(orderType) {
    var _promotionState$promo3;

    if (Array.isArray((_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.order_types_allowed)) {
      var _promotionState$promo4;

      if ((_promotionState$promo4 = promotionState.promotion) !== null && _promotionState$promo4 !== void 0 && _promotionState$promo4.order_types_allowed.includes(orderType)) return true;else return false;
    } else return false;
  };

  var isChangesChecked = function isChangesChecked(orderType) {
    var _formState$changes3;

    var found = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.order_types_allowed.find(function (value) {
      return value === orderType;
    });
    if (found) return true;else return false;
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.OrderTypesContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')), orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }).map(function (orderType) {
    var _formState$changes4;

    return /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeItem, {
      key: orderType.value
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.order_types_allowed ? isChangesChecked(orderType.value) : isDefaultChecked(orderType.value),
      onChange: function onChange(e) {
        return handleChangeOrderTypes(e.target.checked, orderType.value);
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, orderType.content));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};

exports.EnterprisePromotionOrderTypes = EnterprisePromotionOrderTypes;