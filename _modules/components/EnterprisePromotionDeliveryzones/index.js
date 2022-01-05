"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionDeliveryzones = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("../../styles");

var _Pagination = require("../Pagination");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionDeliveryzonesUI = function EnterprisePromotionDeliveryzonesUI(props) {
  var deliveryzoneList = props.deliveryzoneList,
      formState = props.formState,
      promotionState = props.promotionState,
      paginationProps = props.paginationProps,
      getDeliveryzones = props.getDeliveryzones,
      setPaginationProps = props.setPaginationProps,
      handleChangeItem = props.handleChangeItem,
      onClickDone = props.onClickDone;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var handleChangePage = function handleChangePage(page) {
    getDeliveryzones(page, paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.pageSize);
  };

  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
      pageSize: pageSize
    }));
    getDeliveryzones(expectedPage, pageSize);
  };

  var handleChangeDeliveryzone = function handleChangeDeliveryzone(checked, zoneId) {
    var _formState$changes;

    var deliveryZones = [];

    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.delivery_zones) {
      var _formState$changes2;

      deliveryZones = _toConsumableArray((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.delivery_zones);
    } else {
      var _promotionState$promo;

      if (Array.isArray((_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.delivery_zones)) {
        var _promotionState$promo2;

        deliveryZones = (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.delivery_zones.reduce(function (ids, zone) {
          return [].concat(_toConsumableArray(ids), [zone.id]);
        }, []);
      }
    }

    if (checked) {
      deliveryZones.push(zoneId);
    } else {
      deliveryZones = deliveryZones.filter(function (value) {
        return value !== zoneId;
      });
    }

    handleChangeItem({
      delivery_zones: deliveryZones
    });
  };

  var isDefaultChecked = function isDefaultChecked(zoneId) {
    var _promotionState$promo3;

    if (Array.isArray((_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.delivery_zones)) {
      var _promotionState$promo4;

      var found = (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.delivery_zones.find(function (zone) {
        return zone.id === zoneId;
      });
      if (found) return true;else return false;
    } else return false;
  };

  var isChangesChecked = function isChangesChecked(zoneId) {
    var _formState$changes3;

    var found = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.delivery_zones.find(function (value) {
      return value === zoneId;
    });
    if (found) return true;else return false;
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.DeliveryzonesContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_ZONE', 'Delivery zones')), /*#__PURE__*/_react.default.createElement(_styles2.DeliveryzonesTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('MIN', 'Min')), /*#__PURE__*/_react.default.createElement("th", null, t('PRICE', 'Price')))), deliveryzoneList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SingleDeliveryzoneTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ZoneNameWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      className: "name",
      width: 100,
      height: 15
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 15
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 15
    }))));
  }) : deliveryzoneList.zones.map(function (zone) {
    var _formState$changes4;

    return /*#__PURE__*/_react.default.createElement(_styles2.SingleDeliveryzoneTbody, {
      key: zone.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.ZoneNameWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.delivery_zones ? isChangesChecked(zone.id) : isDefaultChecked(zone.id),
      onChange: function onChange(e) {
        return handleChangeDeliveryzone(e.target.checked, zone.id);
      }
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, zone === null || zone === void 0 ? void 0 : zone.name))), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.minimum), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.price)));
  })), (deliveryzoneList === null || deliveryzoneList === void 0 ? void 0 : deliveryzoneList.zones.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage,
    totalPages: paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};

var EnterprisePromotionDeliveryzones = function EnterprisePromotionDeliveryzones(props) {
  var deliveryzonesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: EnterprisePromotionDeliveryzonesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DeliveryzoneList, deliveryzonesProps);
};

exports.EnterprisePromotionDeliveryzones = EnterprisePromotionDeliveryzones;