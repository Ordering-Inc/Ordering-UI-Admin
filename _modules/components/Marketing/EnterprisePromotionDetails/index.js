"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrap = require("react-bootstrap");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _EnterprisePromotionGeneralDetails = require("../EnterprisePromotionGeneralDetails");

var _EnterprisePromotionRules = require("../EnterprisePromotionRules");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionDetailsUI = function EnterprisePromotionDetailsUI(props) {
  var _formState$changes4, _promotionState$promo3, _formState$changes$na, _formState$changes5, _promotionState$promo4, _formState$changes6, _formState$changes7, _promotionState$promo5, _promotionState$promo6;

  var isAddMode = props.isAddMode,
      promotionState = props.promotionState,
      formState = props.formState,
      actionState = props.actionState,
      handleChangeItem = props.handleChangeItem,
      setMoveDistance = props.setMoveDistance,
      sitesState = props.sitesState,
      handleSelectSite = props.handleSelectSite,
      handleUpdateClick = props.handleUpdateClick,
      handleAddPromotion = props.handleAddPromotion,
      _handleSelectAllSites = props.handleSelectAllSites,
      selectedSitesIds = props.selectedSitesIds,
      selectedBusinessIds = props.selectedBusinessIds,
      businessesList = props.businessesList,
      handleSelectBusiness = props.handleSelectBusiness,
      handleSelectAllBusiness = props.handleSelectAllBusiness,
      handleDeletePromotion = props.handleDeletePromotion;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    open: false,
    content: [],
    handleOnAccept: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)('general'),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOption = _useState4[0],
      setSelectedOption = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      confirm = _useState6[0],
      setConfirm = _useState6[1];

  var tabOptions = [{
    key: 'general',
    content: t('GENERAL', 'General')
  }, {
    key: 'sites',
    content: t('SITES', 'Sites')
  }, {
    key: 'businesses',
    content: t('CONTROL_PANEL_BUSINESS', 'Business')
  }, {
    key: 'rules',
    content: t('RULES', 'Rules')
  }];

  var handleClickTab = function handleClickTab(option) {
    var _formState$changes, _formState$changes$bu;

    if (selectedOption === 'rules') {
      var isValid = handleCheckDiscountPercentageValidation();
      if (!isValid) return;
    }

    setMoveDistance(0);
    setSelectedOption(option);

    if (((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : (_formState$changes$bu = _formState$changes.businesses) === null || _formState$changes$bu === void 0 ? void 0 : _formState$changes$bu.length) > 0 && Object.keys(formState.changes).length !== 0 && !actionState.loading) {
      if (!isAddMode) {
        handleUpdateClick();
      }
    }
  };

  var onClickDeletePromotion = function onClickDeletePromotion() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PROMOTION', 'Promotion')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeletePromotion();
      }
    });
  };

  var handleCheckDiscountPercentageValidation = function handleCheckDiscountPercentageValidation() {
    var _formState$changes$ra, _formState$changes2, _promotionState$promo, _ref, _formState$changes$ra2, _formState$changes3, _promotionState$promo2;

    var rateType = (_formState$changes$ra = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.rate_type) !== null && _formState$changes$ra !== void 0 ? _formState$changes$ra : (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.rate_type;
    var rate = (_ref = (_formState$changes$ra2 = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.rate) !== null && _formState$changes$ra2 !== void 0 ? _formState$changes$ra2 : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.rate) !== null && _ref !== void 0 ? _ref : '';

    if (rateType === 1 && parseFloat(rate) > 100) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MAX_NUMERIC', 'The _attribute_ may not be greater than _max_.').replace('_attribute_', t('DISCOUNT_PERCENTAGE', 'Discount percentage')).replace('_max_', 100)],
        handleOnAccept: function handleOnAccept() {
          if (document.getElementById('discount_value')) {
            document.getElementById('discount_value').focus();
          }

          setAlertState({
            open: false,
            content: []
          });
        }
      });
      return false;
    }

    return true;
  };

  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("div", null, (((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name) || (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.name)) && /*#__PURE__*/_react.default.createElement("h1", null, (_formState$changes$na = (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.name), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: typeof ((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.enabled) !== 'undefined' ? (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.enabled : (_promotionState$promo5 = (_promotionState$promo6 = promotionState.promotion) === null || _promotionState$promo6 === void 0 ? void 0 : _promotionState$promo6.enabled) !== null && _promotionState$promo5 !== void 0 ? _promotionState$promo5 : false,
    onChange: function onChange(val) {
      return handleChangeItem({
        enabled: val
      });
    }
  })), !isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.WrapperActionSelector, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
    title: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ThreeDots, null),
    id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    onClick: function onClick() {
      return onClickDeletePromotion();
    }
  }, t('DELETE', 'Delete'))))), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, tabOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: option.key,
      active: selectedOption === option.key,
      onClick: function onClick() {
        return handleClickTab(option.key);
      }
    }, option.content);
  }))), selectedOption === 'general' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionGeneralDetails.EnterprisePromotionGeneralDetails, _extends({}, props, {
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion
  })), selectedOption === 'sites' && /*#__PURE__*/_react.default.createElement(_Shared.SelectSites, {
    isAddMode: isAddMode,
    allSites: sitesState.sites,
    selectedSitesIds: selectedSitesIds,
    handleSelectSite: handleSelectSite,
    handleSelectAllSites: function handleSelectAllSites() {
      return _handleSelectAllSites(true);
    },
    handleSelectNoneSites: function handleSelectNoneSites() {
      return _handleSelectAllSites(false);
    },
    isDisabled: Object.keys(formState.changes).length === 0 || actionState.loading,
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion
  }), selectedOption === 'businesses' && /*#__PURE__*/_react.default.createElement(_Shared.SelectBusinesses, {
    isAddMode: isAddMode,
    allBusinesses: businessesList.businesses,
    selectedBusinessIds: selectedBusinessIds,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusinesses: function handleSelectAllBusinesses() {
      return handleSelectAllBusiness(true);
    },
    handleSelectNoneBusinesses: function handleSelectNoneBusinesses() {
      return handleSelectAllBusiness(false);
    },
    isDisabled: Object.keys(formState.changes).length === 0 || actionState.loading,
    handleUpdateClick: handleUpdateClick,
    handleAddClick: handleAddPromotion
  }), selectedOption === 'rules' && /*#__PURE__*/_react.default.createElement(_EnterprisePromotionRules.EnterprisePromotionRules, _extends({}, props, {
    handleUpdateClick: handleUpdateClick,
    handleAddPromotion: handleAddPromotion
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
      return alertState !== null && alertState !== void 0 && alertState.handleOnAccept ? alertState.handleOnAccept() : setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
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