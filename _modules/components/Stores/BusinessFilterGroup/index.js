"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessFilterGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessFilterGroupUI = function BusinessFilterGroupUI(props) {
  var _filterValues$availab, _filterValues$availab2, _filterValues$menus, _filterValues$menus2;
  var filterValues = props.filterValues,
    handleChangeValue = props.handleChangeValue,
    handleChangeCity = props.handleChangeCity,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleResetFilterValues = props.handleResetFilterValues,
    isFilterModal = props.isFilterModal,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var conditions = [{
    value: '>',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>')
  }, {
    value: '=',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "=")
  }, {
    value: '<',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<')
  }, {
    value: '>=',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>=')
  }, {
    value: '<=',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<=')
  }];
  var enableOptions = [{
    value: true,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('YES', 'Yes'))
  }, {
    value: false,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO', 'No'))
  }];
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(_objectSpread({}, filterValues));
    onClose();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('FILTER', 'Filter'),
    width: "80%",
    padding: "30px",
    open: isFilterModal,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NAME', 'Name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.name) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        name: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('CITY', 'City')), /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('AVAILABLE_MENUS', 'Available menus')), /*#__PURE__*/_react.default.createElement(_styles2.RangeSelectWrapper, {
    className: "range"
  }, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_CONDITION', 'Select a condition'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$availab = filterValues.availableMenus) === null || _filterValues$availab === void 0 ? void 0 : _filterValues$availab.condition,
    options: conditions,
    onChange: function onChange(condition) {
      return handleChangeValue({
        availableMenus: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.availableMenus), {}, {
          condition: condition
        })
      });
    },
    optionInnerMaxHeight: "300px"
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NUMBER', 'Number'),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$availab2 = filterValues.availableMenus) === null || _filterValues$availab2 === void 0 ? void 0 : _filterValues$availab2.value) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        availableMenus: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.availableMenus), {}, {
          value: e.target.value
        })
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TOTAL_MENUS', 'Total menus')), /*#__PURE__*/_react.default.createElement(_styles2.RangeSelectWrapper, {
    className: "range"
  }, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_CONDITION', 'Select a condition'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$menus = filterValues.menus) === null || _filterValues$menus === void 0 ? void 0 : _filterValues$menus.condition,
    options: conditions,
    onChange: function onChange(condition) {
      return handleChangeValue({
        menus: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.menus), {}, {
          condition: condition
        })
      });
    },
    optionInnerMaxHeight: "300px"
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NUMBER', 'Number'),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (filterValues === null || filterValues === void 0 ? void 0 : (_filterValues$menus2 = filterValues.menus) === null || _filterValues$menus2 === void 0 ? void 0 : _filterValues$menus2.value) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        menus: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.menus), {}, {
          value: e.target.value
        })
      });
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('ENABLED', 'Enabled')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.enabled,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        enabled: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('FEATURED', 'FEATURED')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.featured,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        featured: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear')))));
};
var BusinessFilterGroup = function BusinessFilterGroup(props) {
  var businessFilterGroupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessFilterGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessFilter, businessFilterGroupProps);
};
exports.BusinessFilterGroup = BusinessFilterGroup;