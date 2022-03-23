"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZoneList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BusinessDeliveryZoneDetails = require("../BusinessDeliveryZoneDetails");

var _Shared = require("../../Shared");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessDeliveryZoneList = function BusinessDeliveryZoneList(props) {
  var _business$zones;

  var business = props.business,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      handleSuccessUpdate = props.handleSuccessUpdate;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenDetails = _useState2[0],
      setIsOpenDetails = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      curZone = _useState4[0],
      setCurZone = _useState4[1];

  var handleCloseOption = function handleCloseOption() {
    setIsOpenDetails(false);
    setIsExtendExtraOpen(false);
    setCurZone(null);
  };

  var handleOpenZone = function handleOpenZone(zone) {
    setCurZone(zone);
    setIsExtendExtraOpen(true);
    setIsOpenDetails(true);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ZoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryZonesTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('MINIMUM', 'Minimum')), /*#__PURE__*/_react.default.createElement("th", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement("th", null))), business === null || business === void 0 ? void 0 : (_business$zones = business.zones) === null || _business$zones === void 0 ? void 0 : _business$zones.filter(function (zone) {
    return (zone === null || zone === void 0 ? void 0 : zone.type) !== 3;
  }).map(function (zone) {
    return /*#__PURE__*/_react.default.createElement(_styles.ZoneTbody, {
      key: zone.id,
      active: zone.id === (curZone === null || curZone === void 0 ? void 0 : curZone.id),
      onClick: function onClick() {
        return handleOpenZone(zone);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.name), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.minimum), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.price), /*#__PURE__*/_react.default.createElement("td", {
      className: "arrow"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))));
  })), /*#__PURE__*/_react.default.createElement(_styles.AddDeliveryZoneButton, {
    onClick: function onClick() {
      return handleOpenZone(null);
    }
  }, t('ADD_DELIVERY_ZONE', 'Add delivery zone'))), isOpenDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: isOpenDetails,
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZoneDetails.BusinessDeliveryZoneDetails, {
    zone: curZone,
    business: business,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleSuccessUpdate: handleSuccessUpdate
  })));
};

exports.BusinessDeliveryZoneList = BusinessDeliveryZoneList;