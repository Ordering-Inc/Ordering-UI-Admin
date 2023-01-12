"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessCateringDelivery = void 0;
var _orderingComponentsAdmin = require("ordering-components-admin");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessCateringDelivery = function BusinessCateringDelivery(props) {
  var _business$configs, _cateringValues$find, _cateringValues$find4, _cateringValues$find7, _cateringValues$find10, _cateringValues$find13;
  var business = props.business,
    type = props.type,
    changePreorderConfigs = props.changePreorderConfigs;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var cateringValues = business === null || business === void 0 ? void 0 : (_business$configs = business.configs) === null || _business$configs === void 0 ? void 0 : _business$configs.filter(function (config) {
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
exports.BusinessCateringDelivery = BusinessCateringDelivery;