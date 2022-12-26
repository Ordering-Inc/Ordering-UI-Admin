"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverGroupDeliveryZoneList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _DriversGroupsDeliveryZoneDetails = require("../DriversGroupsDeliveryZoneDetails");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverGroupDeliveryZoneList = function DriverGroupDeliveryZoneList(props) {
  var _zoneList$zones, _zoneList$zones$filte;
  var drivergroup = props.drivergroup,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    handleSuccessUpdate = props.handleSuccessUpdate,
    zoneListState = props.zoneListState,
    handleChangeZoneState = props.handleChangeZoneState,
    handleChangeAllZoneState = props.handleChangeAllZoneState,
    handleParentSidebarMove = props.handleParentSidebarMove,
    zoneList = props.zoneList,
    setZoneList = props.setZoneList,
    setIsOpenDetails = props.setIsOpenDetails,
    isOpenDetails = props.isOpenDetails;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    curZone = _useState2[0],
    setCurZone = _useState2[1];
  var handleCloseOption = function handleCloseOption() {
    setIsOpenDetails(false);
    setIsExtendExtraOpen(false);
    setCurZone(null);
    handleParentSidebarMove(0);
  };
  var handleOpenZone = function handleOpenZone(e, zone) {
    var isInvalid = e.target.closest('.zone-enabled');
    if (isInvalid) return;
    setCurZone(zone);
    handleParentSidebarMove(500);
    setIsExtendExtraOpen(true);
    setIsOpenDetails(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ZoneContainer, null, zoneList.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.DeliveryZonesTableWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckSkeleteon, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    })), /*#__PURE__*/_react.default.createElement(_styles2.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: "100%",
      height: 18
    })));
  }) : /*#__PURE__*/_react.default.createElement(_styles2.DeliveryZonesTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: zoneListState === null || zoneListState === void 0 ? void 0 : zoneListState.isCheckAll,
    onChange: function onChange(e) {
      return handleChangeAllZoneState(e.target.checked);
    }
  }))), /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('MINIMUM', 'Minimum')), /*#__PURE__*/_react.default.createElement("th", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement("th", null))), zoneList === null || zoneList === void 0 ? void 0 : (_zoneList$zones = zoneList.zones) === null || _zoneList$zones === void 0 ? void 0 : (_zoneList$zones$filte = _zoneList$zones.filter(function (zone) {
    return (zone === null || zone === void 0 ? void 0 : zone.type) !== 3;
  })) === null || _zoneList$zones$filte === void 0 ? void 0 : _zoneList$zones$filte.map(function (zone) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ZoneTbody, {
      key: zone === null || zone === void 0 ? void 0 : zone.id,
      active: (zone === null || zone === void 0 ? void 0 : zone.id) === (curZone === null || curZone === void 0 ? void 0 : curZone.id),
      onClick: function onClick(e) {
        return handleOpenZone(e, zone);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "zone-enabled"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: !!(zoneListState !== null && zoneListState !== void 0 && zoneListState.changes[zone.id]),
      onChange: function onChange(e) {
        var _e$target;
        return handleChangeZoneState(zone === null || zone === void 0 ? void 0 : zone.id, e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.name), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.minimum), /*#__PURE__*/_react.default.createElement("td", null, zone === null || zone === void 0 ? void 0 : zone.price), /*#__PURE__*/_react.default.createElement("td", {
      className: "arrow"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))));
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddDeliveryZoneButton, {
    onClick: function onClick(e) {
      return handleOpenZone(e, null);
    }
  }, t('ADD_DELIVERY_ZONE', 'Add delivery zone'))), isOpenDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: isOpenDetails,
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversGroupsDeliveryZoneDetails.DriverGroupDeliveryZoneDetails, {
    zone: curZone,
    setZoneList: setZoneList,
    drivergroup: drivergroup,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleSuccessUpdate: handleSuccessUpdate,
    driverGroupsZones: zoneList
  })));
};
exports.DriverGroupDeliveryZoneList = DriverGroupDeliveryZoneList;