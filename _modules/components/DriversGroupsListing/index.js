"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Buttons = require("../../styles/Buttons");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _InfoShareContext = require("../../contexts/InfoShareContext");

var _SearchBar = require("../SearchBar");

var _DriversGroupsList = require("../DriversGroupsList");

var _Confirm = require("../Confirm");

var _SideBar = require("../SideBar");

var _DriversGroupDetails = require("../DriversGroupDetails");

var _styles = require("./styles");

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

var DriversGroupsListingUI = function DriversGroupsListingUI(props) {
  var driversGroupsState = props.driversGroupsState,
      driversManagersList = props.driversManagersList,
      businessesList = props.businessesList,
      paymethodsList = props.paymethodsList,
      driversList = props.driversList,
      selectedGroupList = props.selectedGroupList,
      handleSelectGroup = props.handleSelectGroup,
      handleAllSelectGroup = props.handleAllSelectGroup,
      handleDeleteSelectedGroups = props.handleDeleteSelectedGroups,
      handleAddDriversGroup = props.handleAddDriversGroup,
      openDetails = props.openDetails,
      setOpenDetails = props.setOpenDetails,
      cleanChagesState = props.cleanChagesState,
      changesState = props.changesState,
      actionState = props.actionState,
      handleChangesState = props.handleChangesState,
      handleUpdateDriversGroup = props.handleUpdateDriversGroup,
      handleDeleteDriversGroup = props.handleDeleteDriversGroup,
      curDriversGroup = props.curDriversGroup,
      setCurDriversGroup = props.setCurDriversGroup,
      handleSelectBusiness = props.handleSelectBusiness,
      handleSelectAllBusiness = props.handleSelectAllBusiness,
      selectedBusinessIds = props.selectedBusinessIds,
      selectedPaymethodIds = props.selectedPaymethodIds,
      handleSelectPaymethod = props.handleSelectPaymethod,
      handleSelectAllPaymethod = props.handleSelectAllPaymethod,
      selectedDriverIds = props.selectedDriverIds,
      handleSelectAllDriver = props.handleSelectAllDriver,
      handleSelectDriver = props.handleSelectDriver,
      driversCompanyList = props.driversCompanyList,
      selectedDriversCompanyIds = props.selectedDriversCompanyIds,
      handleSelectDriversCompany = props.handleSelectDriversCompany,
      handleSelectAllDriversCompany = props.handleSelectAllDriversCompany;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
      _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
      isCollapse = _useInfoShare2[0].isCollapse,
      handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      confirm = _useState6[0],
      setConfirm = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      moveDistance = _useState8[0],
      setMoveDistance = _useState8[1];

  var handleOpenDetails = function handleOpenDetails(driverGroup) {
    setMoveDistance(0);
    cleanChagesState();
    setCurDriversGroup(driverGroup);
    setOpenDetails(true);
  };

  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);

  var onClickSelectedGroupsDelete = function onClickSelectedGroupsDelete() {
    setConfirm({
      open: true,
      content: t('CONFIRM_DELETE', 'Are you sure to delete?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSelectedGroups();
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriversGroupsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderLeftContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVERS_GROUPS', 'Drivers groups'))), /*#__PURE__*/_react.default.createElement(_styles.HeaderRightContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenDetails(null);
    }
  }, t('ADD_DRIVER_GROUP', 'Add driver group')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedGroupList.length === 0,
    onClick: function onClick() {
      return onClickSelectedGroupsDelete();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    },
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }))), /*#__PURE__*/_react.default.createElement(_DriversGroupsList.DriversGroupsList, {
    curDriversGroup: curDriversGroup,
    driversGroupsState: driversGroupsState,
    searchValue: searchValue,
    handleOpenDetails: handleOpenDetails,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleDeleteDriversGroup: handleDeleteDriversGroup,
    selectedGroupList: selectedGroupList,
    handleSelectGroup: handleSelectGroup,
    handleAllSelectGroup: handleAllSelectGroup
  })), openDetails && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    sidebarId: "city-details",
    defaultSideBarWidth: 550 + moveDistance,
    open: openDetails,
    moveDistance: moveDistance,
    onClose: function onClose() {
      setCurDriversGroup(null);
      setOpenDetails(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversGroupDetails.DriversGroupDetails, {
    curDriversGroup: curDriversGroup,
    driversManagers: driversManagersList === null || driversManagersList === void 0 ? void 0 : driversManagersList.managers,
    businesses: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
    paymethods: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods,
    drivers: driversList === null || driversList === void 0 ? void 0 : driversList.drivers,
    companies: driversCompanyList === null || driversCompanyList === void 0 ? void 0 : driversCompanyList.companies,
    changesState: changesState,
    actionState: actionState,
    handleChangesState: handleChangesState,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleSelectBusiness: handleSelectBusiness,
    handleSelectAllBusiness: handleSelectAllBusiness,
    selectedBusinessIds: selectedBusinessIds,
    selectedPaymethodIds: selectedPaymethodIds,
    handleSelectPaymethod: handleSelectPaymethod,
    handleSelectAllPaymethod: handleSelectAllPaymethod,
    selectedDriverIds: selectedDriverIds,
    handleSelectDriver: handleSelectDriver,
    handleSelectAllDriver: handleSelectAllDriver,
    selectedDriversCompanyIds: selectedDriversCompanyIds,
    handleSelectDriversCompany: handleSelectDriversCompany,
    handleSelectAllDriversCompany: handleSelectAllDriversCompany,
    handleAddDriversGroup: handleAddDriversGroup,
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('ORDERING', 'Ordering'),
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

var DriversGroupsListing = function DriversGroupsListing(props) {
  var driversGroupsListProps = _objectSpread(_objectSpread({}, props), {}, {
    isDriversMangersRequired: true,
    UIComponent: DriversGroupsListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversGroupsList, driversGroupsListProps);
};

exports.DriversGroupsListing = DriversGroupsListing;