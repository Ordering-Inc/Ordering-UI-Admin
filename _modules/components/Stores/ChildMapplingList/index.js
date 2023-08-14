"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var ChildMapplingList = function ChildMapplingList(props) {
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
exports.ChildMapplingList = ChildMapplingList;