"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessCateringDelivery = void 0;
var _orderingComponentsAdmin = require("ordering-components-admin");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable camelcase */
var BusinessCateringDelivery = exports.BusinessCateringDelivery = function BusinessCateringDelivery(props) {
  var _ref, _cateringValues$find, _cateringValues$find4, _cateringValues$find7, _cateringValues$find10, _cateringValues$find13;
  var business = props.business,
    type = props.type,
    changePreorderConfigs = props.changePreorderConfigs;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var cateringValues = (_ref = (business === null || business === void 0 ? void 0 : business.configs) || []) === null || _ref === void 0 ? void 0 : _ref.filter(function (config) {
    return config.key.includes('preorder');
  }).map(function (config) {
    return {
      name: config.key,
      value: config.value.split('|').find(function (val) {
        return val.includes(type);
      }).split(',')[1],
      id: config.id
    };
  });
  var ref_preorder_lead_time = (0, _react.useRef)();
  var ref_preorder_slot_interval = (0, _react.useRef)();
  var ref_preorder_time_range = (0, _react.useRef)();
  var ref_preorder_minimum_days = (0, _react.useRef)();
  var ref_preorder_maximum_days = (0, _react.useRef)();
  var timeout = null;
  var previousSearch;
  var handleClickDefaultButton = function handleClickDefaultButton(catering, ref) {
    if (ref.current.value === catering.value.toString()) return;
    ref.current.value = catering.value;
    changePreorderConfigs({
      value: catering.value,
      type: type,
      id: catering.id
    });
  };
  var _onChange = function onChange(catering) {
    if (previousSearch !== catering.value) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        changePreorderConfigs({
          value: catering.value,
          type: type,
          id: catering.id
        });
      }, 750);
    }
    previousSearch = catering.value;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.CateringContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t(type.toUpperCase(), type.includes('delivery') ? 'Catering delivery' : 'Catering pickup')), /*#__PURE__*/_react.default.createElement(_styles2.Section, null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('LEAD_TIMES_PER_ORDER_TYPE', 'Lead times per order type')), /*#__PURE__*/_react.default.createElement("p", null, t('DEFAULT', 'Default'), " = 0 (", t('ALLOWS_ASAP_ORDERS', 'allows asap orders'), ").")), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    ref: ref_preorder_lead_time,
    placeholder: "MM",
    defaultValue: (_cateringValues$find = cateringValues.find(function (val) {
      return val.name === 'preorder_lead_time';
    })) === null || _cateringValues$find === void 0 ? void 0 : _cateringValues$find.value,
    onChange: function onChange(evt) {
      var _cateringValues$find2;
      return _onChange({
        value: evt.target.value,
        type: type,
        id: (_cateringValues$find2 = cateringValues.find(function (val) {
          return val.name === 'preorder_lead_time';
        })) === null || _cateringValues$find2 === void 0 ? void 0 : _cateringValues$find2.id
      });
    },
    onFocus: function onFocus() {
      previousSearch = null;
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, "(", t('MINUTES', 'Minutes'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      var _cateringValues$find3;
      return handleClickDefaultButton({
        value: 0,
        id: (_cateringValues$find3 = cateringValues.find(function (val) {
          return val.name === 'preorder_lead_time';
        })) === null || _cateringValues$find3 === void 0 ? void 0 : _cateringValues$find3.id
      }, ref_preorder_lead_time);
    }
  }, t('USE_DEFAULT_VALUE', 'Use default value')))), /*#__PURE__*/_react.default.createElement(_styles2.Section, null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SLOT_TIMES', 'Slot times')), /*#__PURE__*/_react.default.createElement("p", null, t('DEFAULT', 'Default'), " = 30 ", t('MINUTES', 'minutes'), ".")), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    ref: ref_preorder_slot_interval,
    placeholder: "30",
    defaultValue: (_cateringValues$find4 = cateringValues.find(function (val) {
      return val.name === 'preorder_slot_interval';
    })) === null || _cateringValues$find4 === void 0 ? void 0 : _cateringValues$find4.value,
    onChange: function onChange(evt) {
      var _cateringValues$find5;
      return _onChange({
        value: evt.target.value,
        type: type,
        id: (_cateringValues$find5 = cateringValues.find(function (val) {
          return val.name === 'preorder_slot_interval';
        })) === null || _cateringValues$find5 === void 0 ? void 0 : _cateringValues$find5.id
      });
    },
    onFocus: function onFocus() {
      previousSearch = null;
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, "(", t('MINUTES', 'Minutes'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      var _cateringValues$find6;
      return handleClickDefaultButton({
        value: 30,
        id: (_cateringValues$find6 = cateringValues.find(function (val) {
          return val.name === 'preorder_slot_interval';
        })) === null || _cateringValues$find6 === void 0 ? void 0 : _cateringValues$find6.id
      }, ref_preorder_slot_interval);
    }
  }, t('USE_DEFAULT_VALUE', 'Use default value')))), /*#__PURE__*/_react.default.createElement(_styles2.Section, null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('TIME_RANGE', 'Time range')), /*#__PURE__*/_react.default.createElement("p", null, t('DEFAULT', 'Default'), " = 30 ", t('MINUTES', 'minutes'), ".")), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "30",
    defaultValue: (_cateringValues$find7 = cateringValues.find(function (val) {
      return val.name === 'preorder_time_range';
    })) === null || _cateringValues$find7 === void 0 ? void 0 : _cateringValues$find7.value,
    onChange: function onChange(evt) {
      var _cateringValues$find8;
      return _onChange({
        value: evt.target.value,
        id: (_cateringValues$find8 = cateringValues.find(function (val) {
          return val.name === 'preorder_time_range';
        })) === null || _cateringValues$find8 === void 0 ? void 0 : _cateringValues$find8.id,
        type: type
      });
    },
    ref: ref_preorder_time_range,
    onFocus: function onFocus() {
      previousSearch = null;
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, "(", t('MINUTES', 'Minutes'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      var _cateringValues$find9;
      return handleClickDefaultButton({
        value: 30,
        id: (_cateringValues$find9 = cateringValues.find(function (val) {
          return val.name === 'preorder_time_range';
        })) === null || _cateringValues$find9 === void 0 ? void 0 : _cateringValues$find9.id
      }, ref_preorder_time_range);
    }
  }, t('USE_DEFAULT_VALUE', 'Use default value')))), /*#__PURE__*/_react.default.createElement(_styles2.Section, null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('MINIMUM_DAYS_PREORDER_ORDER_TYPE', 'Minimum days to preorder per order type')), /*#__PURE__*/_react.default.createElement("p", null, t('DEFAULT', 'Default'), " = 0 (", t('ALLOWS_ASAP_ORDERS', 'allows asap orders'), ").")), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    ref: ref_preorder_minimum_days,
    placeholder: "0",
    defaultValue: (_cateringValues$find10 = cateringValues.find(function (val) {
      return val.name === 'preorder_minimum_days';
    })) === null || _cateringValues$find10 === void 0 ? void 0 : _cateringValues$find10.value,
    onChange: function onChange(evt) {
      var _cateringValues$find11;
      return _onChange({
        value: evt.target.value,
        id: (_cateringValues$find11 = cateringValues.find(function (val) {
          return val.name === 'preorder_minimum_days';
        })) === null || _cateringValues$find11 === void 0 ? void 0 : _cateringValues$find11.id,
        type: type
      });
    },
    onFocus: function onFocus() {
      previousSearch = null;
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, "(", t('DAYS', 'Days'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      var _cateringValues$find12;
      return handleClickDefaultButton({
        value: 0,
        id: (_cateringValues$find12 = cateringValues.find(function (val) {
          return val.name === 'preorder_minimum_days';
        })) === null || _cateringValues$find12 === void 0 ? void 0 : _cateringValues$find12.id
      }, ref_preorder_minimum_days);
    }
  }, t('USE_DEFAULT_VALUE', 'Use default value')))), /*#__PURE__*/_react.default.createElement(_styles2.Section, null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('MAXIMUM_DAYS', 'Maximum days')), /*#__PURE__*/_react.default.createElement("p", null, t('DEFAULT', 'Default'), " = 15 ", t('DAYS', 'Days'))), /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    ref: ref_preorder_maximum_days,
    placeholder: "15",
    defaultValue: (_cateringValues$find13 = cateringValues.find(function (val) {
      return val.name === 'preorder_maximum_days';
    })) === null || _cateringValues$find13 === void 0 ? void 0 : _cateringValues$find13.value,
    onChange: function onChange(evt) {
      var _cateringValues$find14;
      return _onChange({
        value: evt.target.value,
        id: (_cateringValues$find14 = cateringValues.find(function (val) {
          return val.name === 'preorder_maximum_days';
        })) === null || _cateringValues$find14 === void 0 ? void 0 : _cateringValues$find14.id,
        type: type
      });
    },
    onFocus: function onFocus() {
      previousSearch = null;
    }
  }), /*#__PURE__*/_react.default.createElement("p", null, "(", t('DAYS', 'Days'), ")"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      var _cateringValues$find15;
      return handleClickDefaultButton({
        value: 15,
        id: (_cateringValues$find15 = cateringValues.find(function (val) {
          return val.name === 'preorder_maximum_days';
        })) === null || _cateringValues$find15 === void 0 ? void 0 : _cateringValues$find15.id
      }, ref_preorder_maximum_days);
    }
  }, t('USE_DEFAULT_VALUE', 'Use default value')))));
};