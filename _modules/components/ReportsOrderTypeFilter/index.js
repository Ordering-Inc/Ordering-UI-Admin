"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsOrderTypeFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReportsOrderTypeFilter = function ReportsOrderTypeFilter(props) {
  var _configs$order_types_;

  var filterList = props.filterList,
      handleChangeFilterList = props.handleChangeFilterList,
      onClose = props.onClose;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAllCheck = _useState2[0],
      setIsAllCheck = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      orderTypeIds = _useState4[0],
      setOrderTypeIds = _useState4[1];

  var configTypes = (configs === null || configs === void 0 ? void 0 : (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var defaultOrderTypes = [{
    value: 1,
    name: t('DELIVERY', 'Delivery'),
    enabled: true
  }, {
    value: 2,
    name: t('PICKUP', 'Pickup'),
    enabled: true
  }, {
    value: 3,
    name: t('EAT_IN', 'Eat in'),
    enabled: true
  }, {
    value: 4,
    name: t('CURBSIDE', 'Curbside'),
    enabled: true
  }, {
    value: 5,
    name: t('DRIVE_THRU', 'Drive thru'),
    enabled: true
  }];

  var _useState5 = (0, _react.useState)(defaultOrderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  })),
      _useState6 = _slicedToArray(_useState5, 2),
      orderTypes = _useState6[0],
      setOrderTypes = _useState6[1];

  var handleChangeAllCheck = function handleChangeAllCheck() {
    if (isAllCheck) {
      setOrderTypeIds(null);
    } else {
      var _orderTypeIds = [];

      var _iterator = _createForOfIteratorHelper(orderTypes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var type = _step.value;

          _orderTypeIds.push(type.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      setOrderTypeIds(_orderTypeIds);
    }

    setIsAllCheck(!isAllCheck);
  };

  var handleChangeOrderTypeId = function handleChangeOrderTypeId(id) {
    var found = orderTypeIds === null || orderTypeIds === void 0 ? void 0 : orderTypeIds.find(function (typeId) {
      return typeId === id;
    });

    if (found) {
      var _orderTypeIds = orderTypeIds === null || orderTypeIds === void 0 ? void 0 : orderTypeIds.filter(function (orderTypeId) {
        return orderTypeId !== id;
      });

      setOrderTypeIds(_orderTypeIds);
      setIsAllCheck(false);
    } else {
      var _orderTypeIds2 = orderTypeIds ? _toConsumableArray(orderTypeIds) : [];

      _orderTypeIds2.push(id);

      if (_orderTypeIds2.length === orderTypes.length) setIsAllCheck(true);
      setOrderTypeIds(_orderTypeIds2);
    }
  };

  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = orderTypeIds === null || orderTypeIds === void 0 ? void 0 : orderTypeIds.find(function (typeId) {
      return typeId === id;
    });
    var valid = false;

    if (found) {
      valid = true;
    }

    return valid;
  };

  var handleClickFilterButton = function handleClickFilterButton() {
    var _orderTypeIds = orderTypeIds ? _toConsumableArray(orderTypeIds) : null;

    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      delivery_types_ids: _orderTypeIds
    }));
    onClose && onClose();
  };

  (0, _react.useEffect)(function () {
    var _filterList$delivery_;

    var _orderTypeIds = orderTypes.reduce(function (prev, cur) {
      return [].concat(_toConsumableArray(prev), [cur.value]);
    }, []);

    setOrderTypeIds(_toConsumableArray((filterList === null || filterList === void 0 ? void 0 : filterList.delivery_types_ids) || _orderTypeIds));
    if (!(filterList !== null && filterList !== void 0 && filterList.delivery_types_ids) || (filterList === null || filterList === void 0 ? void 0 : (_filterList$delivery_ = filterList.delivery_types_ids) === null || _filterList$delivery_ === void 0 ? void 0 : _filterList$delivery_.length) === orderTypes.length) setIsAllCheck(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeFilterOption, {
    onClick: handleChangeAllCheck
  }, isAllCheck ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeName, null, t('ALL', 'All'))), orderTypes.map(function (type, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeFilterOption, {
      key: i,
      onClick: function onClick() {
        return handleChangeOrderTypeId(type === null || type === void 0 ? void 0 : type.value);
      }
    }, isCheckEnableSate(type.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeName, null, type === null || type === void 0 ? void 0 : type.name));
  })), /*#__PURE__*/_react.default.createElement(_styles.FilterBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: handleClickFilterButton
  }, t('FILTER', 'Filter'))));
};

exports.ReportsOrderTypeFilter = ReportsOrderTypeFilter;