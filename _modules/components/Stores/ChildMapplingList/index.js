"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChildMapplingList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _ImporterForm = require("../ImporterForm");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ChildMapplingList = exports.ChildMapplingList = function ChildMapplingList(props) {
  var mappingList = props.mappingList,
    openMappingDetails = props.openMappingDetails,
    setOpenMappingDetails = props.setOpenMappingDetails,
    handleUpdateMultipleMapping = props.handleUpdateMultipleMapping,
    defaultImporter = props.defaultImporter;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedMapping = _useState2[0],
    setSelectedMapping = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedIndex = _useState4[0],
    setSelectedIndex = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openAddMapping = _useState6[0],
    setOpenAddMapping = _useState6[1];
  var handleEditMapping = function handleEditMapping(mapping, index) {
    setOpenAddMapping(false);
    setOpenMappingDetails(true);
    setSelectedMapping(mapping);
    setSelectedIndex(index);
  };
  var handleOpenAddMapping = function handleOpenAddMapping() {
    setOpenMappingDetails(true);
    setSelectedIndex(null);
    setSelectedMapping({});
    setOpenAddMapping(true);
  };
  var handleClose = function handleClose() {
    setSelectedIndex(null);
    setSelectedMapping(null);
    setOpenMappingDetails(false);
  };
  var handleUpdateMappingList = function handleUpdateMappingList(val) {
    handleClose();
    var _mappingList = _toConsumableArray(mappingList);
    var updatedMapping = JSON.parse(val.mapping);
    _mappingList[selectedIndex] = updatedMapping;
    handleUpdateMultipleMapping(_mappingList);
  };
  var handleAddMapping = function handleAddMapping(val) {
    handleClose();
    var newMapping = JSON.parse(val.mapping);
    var _mappingList = [].concat(_toConsumableArray(mappingList), [_objectSpread(_objectSpread({}, newMapping), {}, {
      type: val.type
    })]);
    handleUpdateMultipleMapping(_mappingList);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MappingListContainer, null, mappingList.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.MappingWrapper, null, mappingList.map(function (item, index) {
    var _item$type, _item$type$replace;
    return /*#__PURE__*/_react.default.createElement(_styles.MappingItem, {
      key: index,
      active: index === selectedIndex,
      onClick: function onClick() {
        return handleEditMapping(item, index);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, t("".concat(item.type === 'sync_orders' ? (_item$type = item.type) === null || _item$type === void 0 || (_item$type = _item$type.toUpperCase()) === null || _item$type === void 0 ? void 0 : _item$type.trim() : (_item$type$replace = item.type.replace('sync_order_', '')) === null || _item$type$replace === void 0 || (_item$type$replace = _item$type$replace.toUpperCase()) === null || _item$type$replace === void 0 ? void 0 : _item$type$replace.trim()), "".concat(item.type.replace('sync_', '').replaceAll('_', ' ')[0].toUpperCase() + item.type.replace('sync_', '').replaceAll('_', ' ').slice(1)))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })), !defaultImporter && /*#__PURE__*/_react.default.createElement(_styles.AddNewMappingButton, {
    onClick: function onClick() {
      return handleOpenAddMapping();
    }
  }, t('ADD_TYPE_MAPPING', 'Add type mapping'))), openMappingDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: openMappingDetails,
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_ImporterForm.ImporterForm, {
    isMapping: true,
    headerTitle: openAddMapping ? t('ADD_MAPPING', 'Add mapping') : t('EDIT_MAPPING', 'Edit mapping'),
    selectedImporter: openAddMapping ? {} : {
      type: selectedMapping === null || selectedMapping === void 0 ? void 0 : selectedMapping.type,
      mapping: selectedMapping
    },
    handleCustomEditImporter: handleUpdateMappingList,
    handleCustomAddImporter: handleAddMapping,
    defaultImporter: defaultImporter
  })));
};