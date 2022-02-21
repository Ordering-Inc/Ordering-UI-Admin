"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletBusinessDetail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("../../../styles");

var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));

var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PointsWalletBusinessDetailUI = function PointsWalletBusinessDetailUI(props) {
  var _ref, _formState$changes$re, _formState$changes, _ref3, _formState$changes$ac, _formState$changes2, _ref4, _formState$changes$ma, _formState$changes3;

  var walletData = props.walletData,
      formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleSubmit = props.handleSubmit,
      setFormState = props.setFormState,
      isBusiness = props.isBusiness;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)('maximum_redemption_type'),
      _useState2 = _slicedToArray(_useState, 2),
      paymentRules = _useState2[0],
      setPaymentRules = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var ruleList = [{
    key: 'no_limit',
    description: t('NO_LIMIT', 'No limit')
  }, {
    key: 'maximum_redemption_type',
    description: "".concat(t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order'), " (").concat(t('FIXED', 'fixed'), ")")
  }, {
    key: 'maximum_redemption_rate',
    description: "".concat(t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order'), " (%)")
  }];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    if (paymentRules === 'no_limit') {
      var changes = _objectSpread(_objectSpread({}, formState.changes), {}, {
        maximum_redemption_type: null
      });

      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: changes
      }));
    }
  }, [paymentRules]);
  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState.error]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isBusiness: isBusiness
  }, (walletData === null || walletData === void 0 ? void 0 : walletData.business_name) && /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, walletData === null || walletData === void 0 ? void 0 : walletData.business_name), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowClockwise, null))), /*#__PURE__*/_react.default.createElement(_styles2.DetailContent, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsRedemptionWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POINTS_REDEMPTION', 'Points redemption ')), /*#__PURE__*/_react.default.createElement("p", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles2.PointsInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    placeholder: "00 points",
    name: "redemption_rate",
    value: (_ref = (_formState$changes$re = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.redemption_rate) !== null && _formState$changes$re !== void 0 ? _formState$changes$re : walletData === null || walletData === void 0 ? void 0 : walletData.redemption_rate) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput
  }), /*#__PURE__*/_react.default.createElement("span", null, "="), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(1)))), /*#__PURE__*/_react.default.createElement(_styles2.PaymentRulesWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_RULES', 'Payment rules')), /*#__PURE__*/_react.default.createElement("p", null, t('MAXIMUM_REDEEM_PER_ORDER', 'Maximum to redeem per order limit'))), /*#__PURE__*/_react.default.createElement(_styles2.PaymentOptionListWrapper, null, ruleList.map(function (rule) {
    var _ref2, _formState$changes$ru;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: rule.key
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      onClick: function onClick() {
        return setPaymentRules(rule.key);
      }
    }, paymentRules === rule.key ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, null) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null), /*#__PURE__*/_react.default.createElement("p", null, rule.description)), rule.key !== 'no_limit' && rule.key === paymentRules && /*#__PURE__*/_react.default.createElement(_styles2.OptionInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "number",
      placeholder: "00 points",
      name: rule.key,
      value: (_ref2 = (_formState$changes$ru = formState === null || formState === void 0 ? void 0 : formState.changes[rule.key]) !== null && _formState$changes$ru !== void 0 ? _formState$changes$ru : walletData[rule.key]) !== null && _ref2 !== void 0 ? _ref2 : '',
      onChange: handleChangeInput
    })));
  })), /*#__PURE__*/_react.default.createElement(_styles2.PointsAccumulationContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POINTS_ACCUMULATION', 'Points accumulation')), /*#__PURE__*/_react.default.createElement("p", null, t('AMOUNT_POINTS_ASSIGN', 'Amount of points to assign')), /*#__PURE__*/_react.default.createElement("span", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles2.AccumulationInputWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(1)), /*#__PURE__*/_react.default.createElement("span", {
    className: "equal"
  }, "="), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    placeholder: "00 points",
    name: "accomulation_rate",
    value: (_ref3 = (_formState$changes$ac = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.accomulation_rate) !== null && _formState$changes$ac !== void 0 ? _formState$changes$ac : walletData === null || walletData === void 0 ? void 0 : walletData.accomulation_rate) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeInput
  })), /*#__PURE__*/_react.default.createElement(_styles2.ToggleWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('MAXIMUM_OF_POINTS', 'Maximum of points'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    placeholder: "00 points",
    name: "maximum_accomulation",
    value: (_ref4 = (_formState$changes$ma = formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.maximum_accomulation) !== null && _formState$changes$ma !== void 0 ? _formState$changes$ma : walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accomulation) !== null && _ref4 !== void 0 ? _ref4 : '',
    onChange: handleChangeInput
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handleSubmit,
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('POINTS_WALLET', 'Points wallet'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

var PointsWalletBusinessDetail = function PointsWalletBusinessDetail(props) {
  var pointsWalletBusinessDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PointsWalletBusinessDetailUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PointsWalletBusinessDetail, pointsWalletBusinessDetailProps);
};

exports.PointsWalletBusinessDetail = PointsWalletBusinessDetail;