"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupAutoassign = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var DriversGroupAutoassignUI = function DriversGroupAutoassignUI(props) {
  var _theme$images$icons, _theme$images$icons2, _theme$images$icons3, _theme$images$icons4, _theme$images$icons5, _changesState$autoass, _ref, _changesState$autoass2, _ref2, _changesState$autoass3, _changesState$autoass4, _changesState$autoass5, _autoRejectOrderGroup, _autoRejectOrderGroup2, _autoRejectOrderGroup3, _ref3, _changesState$autoass6, _ref4, _changesState$autoass7, _ref5, _changesState$autoass8, _changesState$autoass9;
  var autoAssign = props.autoAssign,
    autoRejectOrderGroup = props.autoRejectOrderGroup,
    onSelectAssign = props.onSelectAssign,
    curDriversGroup = props.curDriversGroup,
    changesState = props.changesState,
    onChangeSave = props.onChangeSave,
    handleChangeInput = props.handleChangeInput,
    onChangeAutoRejectOrderGroup = props.onChangeAutoRejectOrderGroup;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    curArea = _useState2[0],
    setCurArea = _useState2[1];
  return /*#__PURE__*/_react.default.createElement(_styles2.AutoassignContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('AUTOASSIGN_SETTINGS', 'Autoassign settings')), ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type) === 0) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles2.AutoassignItem, {
    active: autoAssign === 1,
    onClick: function onClick() {
      return onSelectAssign(1);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.oneByOne
  }), /*#__PURE__*/_react.default.createElement("p", null, t('ONE_BY_ONE', 'One by one'))), /*#__PURE__*/_react.default.createElement(_styles2.AutoassignItem, {
    active: autoAssign === 2,
    onClick: function onClick() {
      return onSelectAssign(2);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images$icons2 = theme.images.icons) === null || _theme$images$icons2 === void 0 ? void 0 : _theme$images$icons2.sendToAll
  }), /*#__PURE__*/_react.default.createElement("p", null, t('SEND_TO_ALL', 'Send to all'))), /*#__PURE__*/_react.default.createElement(_styles2.AutoassignItem, {
    active: autoAssign === 3,
    onClick: function onClick() {
      return onSelectAssign(3);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images$icons3 = theme.images.icons) === null || _theme$images$icons3 === void 0 ? void 0 : _theme$images$icons3.nearestAvailable
  }), /*#__PURE__*/_react.default.createElement("p", null, t('NEAREST_AVAILABLE', 'Nearest available'))), /*#__PURE__*/_react.default.createElement(_styles2.AutoassignItem, {
    active: autoAssign === 4,
    onClick: function onClick() {
      return onSelectAssign(4);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images$icons4 = theme.images.icons) === null || _theme$images$icons4 === void 0 ? void 0 : _theme$images$icons4.batchWise
  }), /*#__PURE__*/_react.default.createElement("p", null, t('BATCH_WISE', 'Batch wise'))), /*#__PURE__*/_react.default.createElement(_styles2.AutoassignItem, {
    active: autoAssign === 5,
    onClick: function onClick() {
      return onSelectAssign(5);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IconImage, {
    url: (_theme$images$icons5 = theme.images.icons) === null || _theme$images$icons5 === void 0 ? void 0 : _theme$images$icons5.roundRobin
  }), /*#__PURE__*/_react.default.createElement("p", null, t('ROUND_ROBIN', 'Round robin'))), /*#__PURE__*/_react.default.createElement(_styles2.AutoassignItem, {
    onClick: function onClick() {
      return onSelectAssign(6);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.CustomItem, {
    active: autoAssign === 6
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, null), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOM', 'Custom'))))), /*#__PURE__*/_react.default.createElement(_styles2.ForcedAssignSettingWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_changesState$autoass = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_forced_assignment) !== null && _changesState$autoass !== void 0 ? _changesState$autoass : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_forced_assignment,
    onChange: function onChange(e) {
      return onChangeSave({
        autoassign_forced_assignment: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment')))), /*#__PURE__*/_react.default.createElement(_styles2.MaxDistanceCustomerContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business')), /*#__PURE__*/_react.default.createElement("p", null, t('EMPTY_OR_0_TO_DISABLED', 'Empty or 0 to disable'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_customer_max_distance_from_business",
    value: (_ref = (_changesState$autoass2 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_customer_max_distance_from_business) !== null && _changesState$autoass2 !== void 0 ? _changesState$autoass2 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_customer_max_distance_from_business) !== null && _ref !== void 0 ? _ref : '',
    placeholder: "00 ".concat(t('METTERS', 'Meters')),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.RowGroupContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_amount_drivers",
    value: (_ref2 = (_changesState$autoass3 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_amount_drivers) !== null && _changesState$autoass3 !== void 0 ? _changesState$autoass3 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_amount_drivers) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    readOnly: ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type) === 0) && autoAssign <= 3
  }))), autoAssign !== 2 && ((changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_amount_drivers) < 2 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_amount_drivers) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_amount_drivers) < 2) && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_changesState$autoass4 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoaccept_by_driver) !== null && _changesState$autoass4 !== void 0 ? _changesState$autoass4 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_autoaccept_by_driver,
    onChange: function onChange(e) {
      return onChangeSave({
        autoassign_autoaccept_by_driver: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver'))), (typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoaccept_by_driver) === 'undefined' ? !(curDriversGroup !== null && curDriversGroup !== void 0 && curDriversGroup.autoassign_autoaccept_by_driver) : !(changesState !== null && changesState !== void 0 && changesState.autoassign_autoaccept_by_driver)) && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_changesState$autoass5 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoassign_driver) !== null && _changesState$autoass5 !== void 0 ? _changesState$autoass5 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_autoassign_driver,
    onChange: function onChange(e) {
      return onChangeSave({
        autoassign_autoassign_driver: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('AUTO_ASSIGNED', 'Auto assigned'))))), ((typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoaccept_by_driver) === 'undefined' ? !(curDriversGroup !== null && curDriversGroup !== void 0 && curDriversGroup.autoassign_autoaccept_by_driver) : !(changesState !== null && changesState !== void 0 && changesState.autoassign_autoaccept_by_driver)) && (typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoassign_driver) === 'undefined' ? !(curDriversGroup !== null && curDriversGroup !== void 0 && curDriversGroup.autoassign_autoassign_driver) : !(changesState !== null && changesState !== void 0 && changesState.autoassign_autoassign_driver)) || (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 1 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type) === 1) && /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After')), /*#__PURE__*/_react.default.createElement(_styles2.InputsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_autoRejectOrderGroup = autoRejectOrderGroup === null || autoRejectOrderGroup === void 0 ? void 0 : autoRejectOrderGroup.hour) !== null && _autoRejectOrderGroup !== void 0 ? _autoRejectOrderGroup : '',
    onChange: function onChange(e) {
      return onChangeAutoRejectOrderGroup(e.target.value, 'hour');
    }
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_autoRejectOrderGroup2 = autoRejectOrderGroup === null || autoRejectOrderGroup === void 0 ? void 0 : autoRejectOrderGroup.minute) !== null && _autoRejectOrderGroup2 !== void 0 ? _autoRejectOrderGroup2 : '',
    onChange: function onChange(e) {
      return onChangeAutoRejectOrderGroup(e.target.value, 'minute');
    },
    maxlength: "2"
  }), /*#__PURE__*/_react.default.createElement("strong", null, "\u205A"), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (_autoRejectOrderGroup3 = autoRejectOrderGroup === null || autoRejectOrderGroup === void 0 ? void 0 : autoRejectOrderGroup.second) !== null && _autoRejectOrderGroup3 !== void 0 ? _autoRejectOrderGroup3 : '',
    onChange: function onChange(e) {
      return onChangeAutoRejectOrderGroup(e.target.value, 'second');
    },
    maxlength: "2"
  }))), ((changesState === null || changesState === void 0 ? void 0 : changesState.type) === 0 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type) === 0) && /*#__PURE__*/_react.default.createElement(_styles2.RowGroupContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
    isBlue: curArea === 1
  }, /*#__PURE__*/_react.default.createElement("label", null, t('INITIAL_RADIUS', 'Initial radius in meters')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_initial_radius",
    value: (_ref3 = (_changesState$autoass6 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_initial_radius) !== null && _changesState$autoass6 !== void 0 ? _changesState$autoass6 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_initial_radius) !== null && _ref3 !== void 0 ? _ref3 : '',
    readOnly: autoAssign === 3,
    onFocus: function onFocus() {
      return setCurArea(1);
    },
    onBlur: function onBlur() {
      return setCurArea(0);
    },
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
    isGreen: curArea === 2
  }, /*#__PURE__*/_react.default.createElement("label", null, t('INCREMENT_RADIUS', 'Radius increase in meters')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_increment_radius",
    value: (_ref4 = (_changesState$autoass7 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_increment_radius) !== null && _changesState$autoass7 !== void 0 ? _changesState$autoass7 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_increment_radius) !== null && _ref4 !== void 0 ? _ref4 : '',
    readOnly: autoAssign === 3,
    onFocus: function onFocus() {
      return setCurArea(2);
    },
    onBlur: function onBlur() {
      return setCurArea(0);
    },
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, {
    isPink: curArea === 3
  }, /*#__PURE__*/_react.default.createElement("label", null, t('MAX_RADIUS', 'Maximum radius in meters')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "autoassign_max_radius",
    value: (_ref5 = (_changesState$autoass8 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_radius) !== null && _changesState$autoass8 !== void 0 ? _changesState$autoass8 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_radius) !== null && _ref5 !== void 0 ? _ref5 : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    onFocus: function onFocus() {
      return setCurArea(3);
    },
    onBlur: function onBlur() {
      return setCurArea(0);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.AreaWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.LargeArea, {
    active: curArea === 3
  }), /*#__PURE__*/_react.default.createElement(_styles2.MediumArea, {
    active: curArea === 2
  }), /*#__PURE__*/_react.default.createElement(_styles2.SmallArea, {
    active: curArea === 1
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null)))), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
    isPadding: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_changesState$autoass9 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_groupable_individual_orders_only) !== null && _changesState$autoass9 !== void 0 ? _changesState$autoass9 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_groupable_individual_orders_only,
    onChange: function onChange(e) {
      return onChangeSave({
        autoassign_groupable_individual_orders_only: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('DO_NOT_ASSIGN_MORE_THAN_1_ORDER_IF_ORDER_CAN_NOT_GROUPED', 'Do not assign more than 1 order IF the order can’t be grouped'))));
};
var DriversGroupAutoassign = exports.DriversGroupAutoassign = function DriversGroupAutoassign(props) {
  var driversGroupAutoassignProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversGroupAutoassignUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupAutoassign, driversGroupAutoassignProps);
};