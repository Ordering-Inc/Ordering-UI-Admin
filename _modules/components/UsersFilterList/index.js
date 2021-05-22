"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersFilterList = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _reactHookForm = require("react-hook-form");

var _Select = require("../../styles/Select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UsersFilterListUI = function UsersFilterListUI(props) {
  var handleChangeInput = props.handleChangeInput,
      filterState = props.filterState,
      applyFilter = props.applyFilter,
      clearFilter = props.clearFilter;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit;

  var FilterOptions = [{
    key: 'name',
    type: 'text',
    label: 'Name'
  }, {
    key: 'lastname',
    type: 'text',
    label: 'Last Name'
  }, {
    key: 'email',
    type: 'text',
    label: 'Email'
  }, {
    key: 'email_verified',
    type: 'select',
    label: t('VERIFIED_EMAIL', 'Verified Email')
  }, {
    key: 'phone',
    type: 'text',
    label: t('PHONE', 'Phone')
  }, {
    key: 'phone_verified',
    type: 'select',
    label: t('VERIFIED_PHONE', 'Verified Phone')
  }, {
    key: 'id',
    type: 'number',
    label: t('ID', 'ID')
  }];
  var selectTypes = [{
    value: true,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('VERIFIED', 'Verified'))
  }, {
    value: false,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('UNVERIFIED', 'UnVerified'))
  }];

  var onSubmit = function onSubmit() {
    applyFilter && applyFilter();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.UserFilterListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('FILTERS', 'Filters')), /*#__PURE__*/_react.default.createElement(_styles.InputForm, {
    onSubmit: handleSubmit(onSubmit)
  }, FilterOptions && FilterOptions.map(function (item, i) {
    var _filterState$changes, _filterState$changes2;

    return item.type === 'select' ? /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, item === null || item === void 0 ? void 0 : item.label), /*#__PURE__*/_react.default.createElement(_Select.Select, {
      defaultValue: filterState === null || filterState === void 0 ? void 0 : (_filterState$changes = filterState.changes) === null || _filterState$changes === void 0 ? void 0 : _filterState$changes["".concat(item === null || item === void 0 ? void 0 : item.key)],
      options: selectTypes,
      placeholder: t('SELECT_A_TYPE', 'Select a type'),
      className: "rectangle-select",
      onChange: function onChange(val) {
        return handleChangeInput(item === null || item === void 0 ? void 0 : item.key, val);
      }
    })) : /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, item === null || item === void 0 ? void 0 : item.label), /*#__PURE__*/_react.default.createElement(_Inputs.RectangleInput, {
      type: item === null || item === void 0 ? void 0 : item.type,
      name: item === null || item === void 0 ? void 0 : item.key,
      className: "form",
      placeholder: item === null || item === void 0 ? void 0 : item.label,
      value: (filterState === null || filterState === void 0 ? void 0 : (_filterState$changes2 = filterState.changes) === null || _filterState$changes2 === void 0 ? void 0 : _filterState$changes2["".concat(item === null || item === void 0 ? void 0 : item.key)]) || '',
      onChange: function onChange(e) {
        return handleChangeInput(e.target.name, e.target.value);
      },
      autoComplete: "off"
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionButtons, null, /*#__PURE__*/_react.default.createElement(_Buttons.RectButton, {
    outline: true,
    type: "button",
    onClick: function onClick() {
      return clearFilter();
    }
  }, t('CLEAR', 'Clear')), /*#__PURE__*/_react.default.createElement(_Buttons.RectButton, {
    type: "submit",
    color: "darkBlue"
  }, t('FILTER', 'Filter')))));
};

var UsersFilterList = function UsersFilterList(props) {
  var usersFilterListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UsersFilterListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UsersFilter, usersFilterListProps);
};

exports.UsersFilterList = UsersFilterList;