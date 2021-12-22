"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuBasicOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _Confirm = require("../Confirm");

var _CategoryTreeNode = require("../CategoryTreeNode");

var _Schedule = require("../Schedule");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessMenuBasicOptions = function BusinessMenuBasicOptions(props) {
  var _formState$result3, _ref, _formState$changes$na, _formState$changes, _businessMenuState$me, _businessMenuState$me2, _ref2, _formState$changes$co, _formState$changes2, _businessMenuState$me3;

  var business = props.business,
      businessMenuState = props.businessMenuState,
      formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleCheckOrderType = props.handleCheckOrderType,
      handleUpdateBusinessMenuOption = props.handleUpdateBusinessMenuOption,
      handleAddBusinessMenuOption = props.handleAddBusinessMenuOption,
      selectedProductsIds = props.selectedProductsIds,
      setSelectedProductsIds = props.setSelectedProductsIds,
      handleChangeScheduleState = props.handleChangeScheduleState;

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

  var isEdit = Object.keys(businessMenuState === null || businessMenuState === void 0 ? void 0 : businessMenuState.menu).length;
  var orderTypes = [{
    value: 1,
    key: 'delivery',
    content: t('DELIVERY', 'Delivery')
  }, {
    value: 2,
    key: 'pickup',
    content: t('PICKUP', 'Pickup')
  }, {
    value: 3,
    key: 'eatin',
    content: t('EAT_IN', 'Eat in')
  }, {
    value: 4,
    key: 'curbside',
    content: t('CURBSIDE', 'Curbside')
  }, {
    value: 5,
    key: 'driver_thru',
    content: t('DRIVE_THRU', 'Drive thru')
  }];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result2;

    if (!(formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
    });
  }, [formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessMenuBasicContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('MENU_NAME', 'Menu name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me = businessMenuState.menu) === null || _businessMenuState$me === void 0 ? void 0 : _businessMenuState$me.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, {
    isBorderBottom: true
  }, t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')), orderTypes.map(function (orderType) {
    var _formState$changes$or, _formState$changes$or2;

    return /*#__PURE__*/_react.default.createElement(_styles.OrderType, {
      key: orderType.value,
      active: (_formState$changes$or = formState === null || formState === void 0 ? void 0 : formState.changes[orderType.key]) !== null && _formState$changes$or !== void 0 ? _formState$changes$or : businessMenuState.menu[orderType.key],
      onClick: function onClick() {
        return handleCheckOrderType(orderType.key);
      }
    }, ((_formState$changes$or2 = formState === null || formState === void 0 ? void 0 : formState.changes[orderType.key]) !== null && _formState$changes$or2 !== void 0 ? _formState$changes$or2 : businessMenuState.menu[orderType.key]) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, orderType.content));
  }), /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_Schedule.Schedule, {
    scheduleList: businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me2 = businessMenuState.menu) === null || _businessMenuState$me2 === void 0 ? void 0 : _businessMenuState$me2.schedule,
    handleChangeScheduleState: handleChangeScheduleState
  }))), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('COMMENTS', 'Comments')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    name: "comment",
    defaultValue: (_ref2 = (_formState$changes$co = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.comment) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me3 = businessMenuState.menu) === null || _businessMenuState$me3 === void 0 ? void 0 : _businessMenuState$me3.comment) !== null && _ref2 !== void 0 ? _ref2 : '',
    placeholder: t('WRITE_HERE', 'Write here'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, {
    isBorderBottom: true
  }, t('PRODUCTS', 'Products')), business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category) {
    return /*#__PURE__*/_react.default.createElement(_CategoryTreeNode.CategoryTreeNode, {
      key: category.id,
      index: 0,
      category: category,
      selectedProductsIds: selectedProductsIds,
      setSelectedProductsIds: setSelectedProductsIds
    });
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRadius: "5px",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0,
    onClick: function onClick() {
      return isEdit ? handleUpdateBusinessMenuOption() : handleAddBusinessMenuOption();
    }
  }, formState.loading ? t('LOADING', 'Loading') : isEdit ? t('UPDATE', 'Update') : t('ADD', 'Add')), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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

exports.BusinessMenuBasicOptions = BusinessMenuBasicOptions;