"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _DragScroll = require("../DragScroll");

var _EnterprisePromotionGeneralDetails = require("../EnterprisePromotionGeneralDetails");

var _EnterprisePromotionRules = require("../EnterprisePromotionRules");

var _Confirm = require("../Confirm");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionDetailsUI = function EnterprisePromotionDetailsUI(props) {
  var _formState$changes$na, _formState$changes, _promotionState$promo, _formState$changes2, _formState$changes3, _promotionState$promo2, _promotionState$promo3;

  var promotionState = props.promotionState,
      formState = props.formState,
      actionState = props.actionState,
      handleChangeItem = props.handleChangeItem,
      setMoveDistance = props.setMoveDistance;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)('general'),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOption = _useState4[0],
      setSelectedOption = _useState4[1];

  var tabOptions = [{
    key: 'general',
    content: t('GENERAL', 'General')
  }, {
    key: 'rules',
    content: t('RULES', 'Rules')
  } // { key: 'Business', content: t('CONTROL_PANEL_BUSINESS', 'Business') },
  // { key: 'custom_fields', content: t('CUSTOM_FEILDS', 'Custom fields') }
  ];

  var handleClickTab = function handleClickTab(option) {
    setMoveDistance(0);
    setSelectedOption(option);
  };

  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, (_formState$changes$na = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: typeof ((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.enabled) !== 'undefined' ? (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.enabled : (_promotionState$promo2 = (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.enabled) !== null && _promotionState$promo2 !== void 0 ? _promotionState$promo2 : false,
    onChange: function onChange(val) {
      return handleChangeItem({
        enabled: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_DragScroll.DragScroll, null, tabOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleClickTab(option.key);
      }
    }, option.content);
  }))), selectedOption === 'general' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionGeneralDetails.EnterprisePromotionGeneralDetails, props), selectedOption === 'rules' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionRules.EnterprisePromotionRules, props)), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};

var EnterprisePromotionDetails = function EnterprisePromotionDetails(props) {
  var promotionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: EnterprisePromotionDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.EnterprisePromotionDetails, promotionProps);
};

exports.EnterprisePromotionDetails = EnterprisePromotionDetails;