"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversGroupAutoassignUI = function DriversGroupAutoassignUI(props) {
  var _theme$images$icons, _theme$images$icons2, _theme$images$icons3, _theme$images$icons4, _theme$images$icons5, _changesState$autoass, _ref, _changesState$autoass2, _ref2, _changesState$autoass3, _changesState$autoass4, _autoRejectOrderGroup, _autoRejectOrderGroup2, _autoRejectOrderGroup3, _ref3, _changesState$autoass5, _ref4, _changesState$autoass6, _ref5, _changesState$autoass7;
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
  }))), /*#__PURE__*/_react.default.createElement("div", null, autoAssign !== 2 && ((changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_amount_drivers) < 2 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_amount_drivers) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_amount_drivers) < 2) && /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: (_changesState$autoass4 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoaccept_by_driver) !== null && _changesState$autoass4 !== void 0 ? _changesState$autoass4 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_autoaccept_by_driver,
    onChange: function onChange(e) {
      return onChangeSave({
        autoassign_autoaccept_by_driver: e.target.checked
      });
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver'))))), ((typeof (changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_autoaccept_by_driver) === 'undefined' ? !(curDriversGroup !== null && curDriversGroup !== void 0 && curDriversGroup.autoassign_autoaccept_by_driver) : !(changesState !== null && changesState !== void 0 && changesState.autoassign_autoaccept_by_driver)) || (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 1 || typeof (changesState === null || changesState === void 0 ? void 0 : changesState.type) === 'undefined' && (curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.type) === 1) && /*#__PURE__*/_react.default.createElement(_styles2.FieldContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After')), /*#__PURE__*/_react.default.createElement(_styles2.InputsGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
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
    value: (_ref3 = (_changesState$autoass5 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_initial_radius) !== null && _changesState$autoass5 !== void 0 ? _changesState$autoass5 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_initial_radius) !== null && _ref3 !== void 0 ? _ref3 : '',
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
    value: (_ref4 = (_changesState$autoass6 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_increment_radius) !== null && _changesState$autoass6 !== void 0 ? _changesState$autoass6 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_increment_radius) !== null && _ref4 !== void 0 ? _ref4 : '',
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
    value: (_ref5 = (_changesState$autoass7 = changesState === null || changesState === void 0 ? void 0 : changesState.autoassign_max_radius) !== null && _changesState$autoass7 !== void 0 ? _changesState$autoass7 : curDriversGroup === null || curDriversGroup === void 0 ? void 0 : curDriversGroup.autoassign_max_radius) !== null && _ref5 !== void 0 ? _ref5 : '',
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
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null)))));
};
var DriversGroupAutoassign = function DriversGroupAutoassign(props) {
  var driversGroupAutoassignProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriversGroupAutoassignUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupAutoassign, driversGroupAutoassignProps);
};
exports.DriversGroupAutoassign = DriversGroupAutoassign;