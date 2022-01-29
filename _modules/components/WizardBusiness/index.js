"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardBusiness = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styledComponents = require("styled-components");

var _SideBar = require("../SideBar");

var _BusinessSchedule = require("../BusinessSchedule");

var _BusinessPaymentMethods = require("../BusinessPaymentMethods");

var _BusinessProductsCategoyDetails = require("../BusinessProductsCategoyDetails");

var _BusinessProductAddForm = require("../BusinessProductAddForm");

var _styles = require("../../styles");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WizardBusiness = function WizardBusiness(props) {
  var isTutorialMode = props.isTutorialMode,
      business = props.business,
      openTutorialSidebarState = props.openTutorialSidebarState,
      setOpenTutorialSidebarState = props.setOpenTutorialSidebarState,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isTutorialMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openTutorialSidebarState === 'schedule' && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    id: "business_schedule_detail",
    open: openTutorialSidebarState === 'schedule',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessSchedule.BusinessSchedule, {
    isTutorialMode: true,
    business: business,
    handleSuccessUpdate: function handleSuccessUpdate(result) {
      handleSucessUpdateBusiness(result);
      setOpenTutorialSidebarState('payments');
    },
    handleTutorialSkip: function handleTutorialSkip() {
      return setOpenTutorialSidebarState('payments');
    }
  }))), openTutorialSidebarState === 'payments' && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    id: "business_payments_detail",
    open: openTutorialSidebarState === 'payments',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessPaymentMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessPaymentMethods.BusinessPaymentMethods, {
    isTutorialMode: true,
    business: business,
    handleSuccessUpdate: handleSucessUpdateBusiness,
    setIsExtendExtraOpen: function setIsExtendExtraOpen() {
      return console.log('');
    },
    handleTutorialContinue: function handleTutorialContinue() {
      return setOpenTutorialSidebarState('new_category');
    }
  }))), openTutorialSidebarState === 'new_category' && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    id: "business_new_category_form",
    open: openTutorialSidebarState === 'new_category',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategoyDetails.BusinessProductsCategoyDetails, {
    isTutorialMode: true,
    category: null,
    businessState: {
      loading: false,
      business: business
    },
    handleTutorialSkip: function handleTutorialSkip() {
      return setOpenTutorialSidebarState('tutorial_end');
    },
    handleUpdateBusinessState: function handleUpdateBusinessState(val) {
      handleSucessUpdateBusiness(val);
      setOpenTutorialSidebarState('new_product');
    }
  })), openTutorialSidebarState === 'new_product' && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    id: "business_new_product_form",
    open: openTutorialSidebarState === 'new_product',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductAddForm.BusinessProductAddForm, {
    isTutorialMode: true,
    business: business,
    setIsAddProduct: function setIsAddProduct() {
      return setOpenTutorialSidebarState('tutorial_end');
    },
    categorySelected: business === null || business === void 0 ? void 0 : business.categories[0],
    handleTutorialSkip: function handleTutorialSkip() {
      return setOpenTutorialSidebarState('tutorial_end');
    }
  })), openTutorialSidebarState === 'tutorial_end' && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    open: openTutorialSidebarState === 'tutorial_end',
    onClose: function onClose() {
      return setOpenTutorialSidebarState(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.TurtorialEndContainier, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_STORE', 'New store')), /*#__PURE__*/_react.default.createElement(_styles2.FirstStoreContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.tutorials.businessTutorial2,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('CONGRATULATIONS', 'Congratulations!')), /*#__PURE__*/_react.default.createElement("p", null, t('FIRST_STORE_IS_REDAY', 'Your first store is ready.')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return setOpenTutorialSidebarState(null);
    }
  }, t('GO_TO_STORE_LIST', 'Go to store list')))))));
};

exports.WizardBusiness = WizardBusiness;