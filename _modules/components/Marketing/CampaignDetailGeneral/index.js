"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignDetailGeneral = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _CampaignAmountOption = require("../CampaignAmountOption");
var _CampaignSignUpOption = require("../CampaignSignUpOption");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CampaignDetailGeneral = exports.CampaignDetailGeneral = function CampaignDetailGeneral(props) {
  var _campaignState$campai5, _formState$changes9, _ref, _formState$changes$na, _formState$changes10, _campaignState$campai6, _contactState$changes, _formState$changes$au, _formState$changes11, _campaignState$campai7, _formState$changes$au2, _formState$changes12, _campaignState$campai8, _ref2, _formState$changes$en, _formState$changes13, _campaignState$campai9, _formState$changes$en2, _formState$changes14, _campaignState$campai10, _formState$changes$au3, _formState$changes15, _campaignState$campai11, _formState$changes$au4, _formState$changes16, _campaignState$campai12, _formState$changes17, _campaignState$campai13, _formState$changes$st, _formState$changes18, _campaignState$campai14, _formState$changes$st2, _formState$changes19, _campaignState$campai15, _formState$changes$sc, _formState$changes20, _campaignState$campai16, _audienceState$pagina;
  var formState = props.formState,
    campaignState = props.campaignState,
    handleChangeItem = props.handleChangeItem,
    handleChangeInput = props.handleChangeInput,
    isAddMode = props.isAddMode,
    handleUpdateClick = props.handleUpdateClick,
    handleAddCampaign = props.handleAddCampaign,
    audienceState = props.audienceState,
    handleDeleteCondition = props.handleDeleteCondition,
    contactState = props.contactState,
    handleChangeType = props.handleChangeType;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isASAP = _useState2[0],
    setIsASAP = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isRuleModal = _useState4[0],
    setIsRuleModal = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedRule = _useState6[0],
    setSelectedRule = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    typeOptions = _useState8[0],
    setTypeOptions = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    contactTypeSearchVal = _useState10[0],
    setContactTypeSearchVal = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    alertState = _useState12[0],
    setAlertState = _useState12[1];
  var ruleList = [{
    key: 'orders_count',
    title: t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options')
  }, {
    key: 'user_created_at',
    title: t('SIGN_UP_DATE_OPTIONS', 'Sign up date options')
  }, {
    key: 'user_last_order_at',
    title: t('LAST_ORDER_DATE_OPTIONS', 'Last order date options')
  }, {
    key: 'user_last_open_cart_at',
    title: t('OPEN_CARTS', 'Open Carts')
  }];
  var typeList = [{
    value: 'email',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('EMAIL', 'Email'))
  }, {
    value: 'sms',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SMS', 'SMS'))
  }, {
    value: 'notification',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('PUSH_NOTIFICATIONS', 'Push notifications'))
  }, {
    value: 'webhook',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('WEBHOOK', 'Webhook'))
  }
  // { value: 'popup', content: <Option>{t('POPUP', 'Popup')}</Option> },
  // { value: 'whatsapp', content: <Option>{t('WHATSAPP', 'Whatsapp')}</Option> }
  ];

  (0, _react.useEffect)(function () {
    var options = typeList.filter(function (option) {
      return option === null || option === void 0 ? void 0 : option.value.toLocaleLowerCase().includes(contactTypeSearchVal.toLocaleLowerCase());
    });
    setTypeOptions(options);
  }, [contactTypeSearchVal]);
  (0, _react.useEffect)(function () {
    if (!(contactState !== null && contactState !== void 0 && contactState.error) || contactState.loading) return;
    setAlertState({
      open: true,
      content: contactState === null || contactState === void 0 ? void 0 : contactState.error
    });
  }, [contactState === null || contactState === void 0 ? void 0 : contactState.error]);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleCloseRuleModal = function handleCloseRuleModal(index) {
    var isClosed = isConditionStatus(selectedRule);
    if (index && isClosed) handleChangeCheckBox(selectedRule);
    setIsRuleModal(false);
    setSelectedRule(null);
  };
  var handleOpenRuleModal = function handleOpenRuleModal(evt, index) {
    if (evt.target.closest('.rule-control')) return;
    setSelectedRule(index);
    setIsRuleModal(true);
  };
  var handleChangeDateTime = function handleChangeDateTime(name, date) {
    handleChangeItem(name, date);
  };
  var handleChangeSchedule = function handleChangeSchedule() {
    handleChangeItem('scheduled_at', null);
    setIsASAP(true);
  };
  var checkColor = function checkColor(status) {
    var index = status.toLocaleLowerCase();
    if (index === 'ended') return '#00D27A';else if (index === 'scheduled') return '#FFC700';else if (index === 'draft') return '#E9ECEF';else return '#E9ECEF';
  };
  var handleChangeCheckBox = function handleChangeCheckBox(key) {
    var _formState$changes, _campaignState$campai;
    var isUpdate = isEnableStatus(key);
    if (!isUpdate) {
      setSelectedRule(key);
      setIsRuleModal(true);
      return;
    }
    var conditions = isAddMode ? formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.conditions : campaignState === null || campaignState === void 0 || (_campaignState$campai = campaignState.campaign) === null || _campaignState$campai === void 0 ? void 0 : _campaignState$campai.conditions;
    if ((conditions === null || conditions === void 0 ? void 0 : conditions.length) < 2) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Conditions filed is required').replace('_attribute_', t('CONDITIONS', 'Conditions'))
      });
      return;
    }
    if (isAddMode) {
      var _formState$changes2;
      var updatedConditions = formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.conditions.filter(function (item) {
        return item.type !== key;
      });
      handleChangeItem('conditions', updatedConditions);
    } else {
      handleDeleteCondition(isUpdate === null || isUpdate === void 0 ? void 0 : isUpdate.id);
    }
  };
  var handleSubmitBtnClick = function handleSubmitBtnClick() {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        var _formState$changes3;
        if ((formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 || (_formState$changes3 = _formState$changes3.conditions) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.length) > 0) {
          var _formState$changes4;
          var _iterator = _createForOfIteratorHelper(formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.conditions),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              if ((item === null || item === void 0 ? void 0 : item.date_condition) === '=' || (item === null || item === void 0 ? void 0 : item.date_condition) === '>') {
                setAlertState({
                  open: true,
                  content: t('REQUIRED_BEFORE_OR_RANGE_OPTION_WHEN_FIXED', 'when audience type is Fixed, date condition is required Before or Date range option')
                });
                return;
              }
              if ((item === null || item === void 0 ? void 0 : item.condition) === '=') {
                setAlertState({
                  open: true,
                  content: t('REQUIRED_MORE_OR_LESS_OPTION_WHEN_FIXED', 'when audience type is Fixed, order condition is required More or Less option')
                });
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        handleAddCampaign();
      } else {
        handleUpdateClick();
      }
    }
  };
  var isConditionStatus = function isConditionStatus(index) {
    var _formState$changes5, _campaignState$campai2;
    var conditions = isAddMode ? formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.conditions : campaignState === null || campaignState === void 0 || (_campaignState$campai2 = campaignState.campaign) === null || _campaignState$campai2 === void 0 ? void 0 : _campaignState$campai2.conditions;
    var isClosed = true;
    conditions.forEach(function (item) {
      if (item.type === index && (item !== null && item !== void 0 && item.condition || item !== null && item !== void 0 && item.date_condition)) isClosed = false;
    });
    return isClosed;
  };
  var isEnableStatus = function isEnableStatus(key) {
    var _formState$changes$co, _formState$changes6, _campaignState$campai3;
    var conditions = (_formState$changes$co = formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.conditions) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : campaignState === null || campaignState === void 0 || (_campaignState$campai3 = campaignState.campaign) === null || _campaignState$campai3 === void 0 ? void 0 : _campaignState$campai3.conditions;
    if (!conditions) {
      return false;
    } else {
      var findIndex = conditions.find(function (item) {
        return item.type === key;
      });
      return findIndex;
    }
  };
  (0, _react.useEffect)(function () {
    var _formState$changes7, _campaignState$campai4, _formState$changes8;
    if (typeof (formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.scheduled_at) === 'undefined' ? campaignState === null || campaignState === void 0 || (_campaignState$campai4 = campaignState.campaign) === null || _campaignState$campai4 === void 0 ? void 0 : _campaignState$campai4.scheduled_at : formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.scheduled_at) setIsASAP(false);else setIsASAP(true);
  }, [campaignState === null || campaignState === void 0 || (_campaignState$campai5 = campaignState.campaign) === null || _campaignState$campai5 === void 0 ? void 0 : _campaignState$campai5.scheduled_at, formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.scheduled_at]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    name: "name",
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : campaignState === null || campaignState === void 0 || (_campaignState$campai6 = campaignState.campaign) === null || _campaignState$campai6 === void 0 ? void 0 : _campaignState$campai6.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput
  })), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('CONTACT_TYPE', 'Contact type')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    options: typeOptions,
    className: "select",
    defaultValue: (contactState === null || contactState === void 0 || (_contactState$changes = contactState.changes) === null || _contactState$changes === void 0 ? void 0 : _contactState$changes.contact_type) || '',
    placeholder: t('SELECT_OPTION', 'Select an option'),
    onChange: function onChange(value) {
      return handleChangeType('contact_type', value);
    }
    // isShowSearchBar
    ,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    isDisabled: !isAddMode,
    searchValue: contactTypeSearchVal,
    handleChangeSearch: function handleChangeSearch(val) {
      return setContactTypeSearchVal(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.AudienceWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('AUDIENCE', 'Audience')), /*#__PURE__*/_react.default.createElement(_styles2.DynamicWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, {
    onClick: function onClick() {
      return handleChangeItem('audience_type', 'dynamic');
    }
  }, ((_formState$changes$au = formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.audience_type) !== null && _formState$changes$au !== void 0 ? _formState$changes$au : campaignState === null || campaignState === void 0 || (_campaignState$campai7 = campaignState.campaign) === null || _campaignState$campai7 === void 0 ? void 0 : _campaignState$campai7.audience_type) === 'dynamic' ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('DYNAMIC', 'Dynamic'))), /*#__PURE__*/_react.default.createElement(_styles2.DynamicContentWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('CAMPAIGN_DYNAMIC_DESCRIPTION', 'People who match rules now and in the future')), ((_formState$changes$au2 = formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.audience_type) !== null && _formState$changes$au2 !== void 0 ? _formState$changes$au2 : campaignState === null || campaignState === void 0 || (_campaignState$campai8 = campaignState.campaign) === null || _campaignState$campai8 === void 0 ? void 0 : _campaignState$campai8.audience_type) === 'dynamic' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "campaign-enabled"
  }, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_ref2 = (_formState$changes$en = formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.enabled) !== null && _formState$changes$en !== void 0 ? _formState$changes$en : campaignState === null || campaignState === void 0 || (_campaignState$campai9 = campaignState.campaign) === null || _campaignState$campai9 === void 0 ? void 0 : _campaignState$campai9.enabled) !== null && _ref2 !== void 0 ? _ref2 : false,
    onChange: function onChange(val) {
      return handleChangeItem('enabled', val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.EndDateWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('END_DATE', 'End date')), /*#__PURE__*/_react.default.createElement(_Shared.RangeCalendar, {
    withTime: true,
    isLeft: true,
    isSingleDate: true,
    defaultValue: (_formState$changes$en2 = formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.end_at) !== null && _formState$changes$en2 !== void 0 ? _formState$changes$en2 : campaignState === null || campaignState === void 0 || (_campaignState$campai10 = campaignState.campaign) === null || _campaignState$campai10 === void 0 ? void 0 : _campaignState$campai10.end_at,
    handleChangeDate: function handleChangeDate(date) {
      return handleChangeDateTime('end_at', date);
    },
    minDate: new Date()
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.FixedWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, {
    onClick: function onClick() {
      return handleChangeItem('audience_type', 'fixed');
    }
  }, ((_formState$changes$au3 = formState === null || formState === void 0 || (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.audience_type) !== null && _formState$changes$au3 !== void 0 ? _formState$changes$au3 : campaignState === null || campaignState === void 0 || (_campaignState$campai11 = campaignState.campaign) === null || _campaignState$campai11 === void 0 ? void 0 : _campaignState$campai11.audience_type) === 'fixed' ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('FIXED', 'Fixed'))), /*#__PURE__*/_react.default.createElement(_styles2.FixedContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('CAMPAIGN_FIXED_DESCRIPTION', 'Only people who match rules right now')), ((_formState$changes$au4 = formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.audience_type) !== null && _formState$changes$au4 !== void 0 ? _formState$changes$au4 : campaignState === null || campaignState === void 0 || (_campaignState$campai12 = campaignState.campaign) === null || _campaignState$campai12 === void 0 ? void 0 : _campaignState$campai12.audience_type) === 'fixed' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((formState === null || formState === void 0 || (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.status) || (campaignState === null || campaignState === void 0 || (_campaignState$campai13 = campaignState.campaign) === null || _campaignState$campai13 === void 0 ? void 0 : _campaignState$campai13.status)) && /*#__PURE__*/_react.default.createElement(_styles2.FixedStatusWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, (_formState$changes$st = formState === null || formState === void 0 || (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.status) !== null && _formState$changes$st !== void 0 ? _formState$changes$st : campaignState === null || campaignState === void 0 || (_campaignState$campai14 = campaignState.campaign) === null || _campaignState$campai14 === void 0 ? void 0 : _campaignState$campai14.status), /*#__PURE__*/_react.default.createElement(_styles2.StatusPoint, {
    style: {
      background: checkColor((_formState$changes$st2 = formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.status) !== null && _formState$changes$st2 !== void 0 ? _formState$changes$st2 : campaignState === null || campaignState === void 0 || (_campaignState$campai15 = campaignState.campaign) === null || _campaignState$campai15 === void 0 ? void 0 : _campaignState$campai15.status)
    }
  })), /*#__PURE__*/_react.default.createElement("h3", null, ('DELIVERY_SCHEDULE', 'Delivery Schedule')), /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, {
    onClick: function onClick() {
      return handleChangeSchedule();
    },
    isBottom: true
  }, isASAP ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('CHECKOUT_ASAP', 'ASAP'), " (", (0, _moment.default)(new Date()).format('LLLL'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.RadioCheckWrapper, {
    onClick: function onClick() {
      return setIsASAP(false);
    }
  }, !isASAP ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('SCHEDULE_FOR_LATER', 'Schedule for later'))), !isASAP && /*#__PURE__*/_react.default.createElement(_styles2.ScheduleForLateWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.RangeCalendar, {
    withTime: true,
    isLeft: true,
    isSingleDate: true,
    defaultValue: (_formState$changes$sc = formState === null || formState === void 0 || (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.scheduled_at) !== null && _formState$changes$sc !== void 0 ? _formState$changes$sc : campaignState === null || campaignState === void 0 || (_campaignState$campai16 = campaignState.campaign) === null || _campaignState$campai16 === void 0 ? void 0 : _campaignState$campai16.scheduled_at,
    handleChangeDate: function handleChangeDate(date) {
      return handleChangeDateTime('scheduled_at', date);
    },
    minDate: new Date()
  })))))), /*#__PURE__*/_react.default.createElement(_styles2.RulesWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('RULES', 'Rules')), (audienceState === null || audienceState === void 0 ? void 0 : audienceState.loading) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 20
  }), !(audienceState !== null && audienceState !== void 0 && audienceState.loading) && !(audienceState !== null && audienceState !== void 0 && audienceState.error) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('REACHING', 'Reaching'), ": "), (audienceState === null || audienceState === void 0 || (_audienceState$pagina = audienceState.pagination) === null || _audienceState$pagina === void 0 ? void 0 : _audienceState$pagina.total) || 0, " ", t('PEOPLE', 'People')), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxListWrapper, null, ruleList.map(function (rule, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      key: i,
      borderTop: i === 0,
      onClick: function onClick(e) {
        return handleOpenRuleModal(e, rule.key);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
      className: "rule-control",
      onClick: function onClick() {
        return handleChangeCheckBox(rule.key);
      }
    }, isEnableStatus(rule.key) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("p", null, rule.title)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleSubmitBtnClick();
    },
    disabled: Object.keys(formState.changes).length === 0 || formState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CAMPAIGN', 'Campaign'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "600px",
    height: "550px",
    padding: "25px",
    open: isRuleModal,
    onClose: function onClose() {
      return handleCloseRuleModal(true);
    }
  }, selectedRule === 'orders_count' && /*#__PURE__*/_react.default.createElement(_CampaignAmountOption.CampaignAmountOption, _extends({}, props, {
    onClose: handleCloseRuleModal,
    title: t('AMOUNT_OF_ORDERS_OPTIONS', 'Amount of orders options'),
    type: "orders_count"
  })), selectedRule === 'user_created_at' && /*#__PURE__*/_react.default.createElement(_CampaignSignUpOption.CampaignSignUpOption, _extends({}, props, {
    onClose: handleCloseRuleModal,
    title: t('SIGN_UP_DATE_OPTIONS', 'Sign up date options'),
    type: "user_created_at"
  })), selectedRule === 'user_last_order_at' && /*#__PURE__*/_react.default.createElement(_CampaignSignUpOption.CampaignSignUpOption, _extends({
    title: t('LAST_ORDER_DATE_OPTIONS', 'Last order date options'),
    type: "user_last_order_at"
  }, props, {
    onClose: handleCloseRuleModal
  })), selectedRule === 'user_last_open_cart_at' && /*#__PURE__*/_react.default.createElement(_CampaignSignUpOption.CampaignSignUpOption, _extends({
    title: t('OPEN_CARTS', 'Open Carts'),
    type: "user_last_open_cart_at"
  }, props, {
    onClose: handleCloseRuleModal
  }))));
};