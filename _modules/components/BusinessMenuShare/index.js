"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuShare = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SelectBusinesses = require("../SelectBusinesses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BusinessMenuShareUI = function BusinessMenuShareUI(props) {
  var actionState = props.actionState,
      selectedBusinessIds = props.selectedBusinessIds,
      businessesState = props.businessesState,
      handleSelectBusiness = props.handleSelectBusiness,
      handleSelectAllBusiness = props.handleSelectAllBusiness,
      handleShareBusinesses = props.handleShareBusinesses;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SelectBusinesses.SelectBusinesses, {
    isSkeleton: businessesState.loading,
    allBusinesses: businessesState.businesses,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusinesses: function handleSelectAllBusinesses() {
      return handleSelectAllBusiness(true);
    },
    handleSelectNoneBusinesses: function handleSelectNoneBusinesses() {
      return handleSelectAllBusiness(false);
    },
    isDisabled: actionState.loading || businessesState.loading,
    handleUpdateClick: handleShareBusinesses
  }));
};

var BusinessMenuShare = function BusinessMenuShare(props) {
  var businessMenuShareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuShareUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenuShare, businessMenuShareProps);
};

exports.BusinessMenuShare = BusinessMenuShare;