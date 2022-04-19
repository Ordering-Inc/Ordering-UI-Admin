"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversGroupsListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactBootstrap = require("react-bootstrap");

var _utils = require("../../../utils");

var _InfoShareContext = require("../../../contexts/InfoShareContext");

var _styles = require("../../../styles");

var _Shared = require("../../Shared");

var _WizardDelivery = require("../WizardDelivery");

var _DriversGroupsList = require("../DriversGroupsList");

var _DriversGroupDetails = require("../DriversGroupDetails");

var _styles2 = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversGroupsListingUI = function DriversGroupsListingUI(props) {
  var _history$location2, _history$location2$st;

  var driversGroupsState = props.driversGroupsState,
      setDriversGroupsState = props.setDriversGroupsState,
      driversManagersList = props.driversManagersList,
      businessesList = props.businessesList,
      paymethodsList = props.paymethodsList,
      driversList = props.driversList,
      selectedGroupList = props.selectedGroupList,
      handleSelectGroup = props.handleSelectGroup,
      handleAllSelectGroup = props.handleAllSelectGroup,
      handleDeleteSelectedGroups = props.handleDeleteSelectedGroups,
      actionState = props.actionState,
      handleUpdateDriversGroup = props.handleUpdateDriversGroup,
      handleDeleteDriversGroup = props.handleDeleteDriversGroup,
      driversCompanyList = props.driversCompanyList;
  var history = (0, _reactRouterDom.useHistory)();

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

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openDetails = _useState10[0],
      setOpenDetails = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      curDriversGroup = _useState12[0],
      setCurDriversGroup = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isTourOpen = _useState14[0],
      setIsTourOpen = _useState14[1];

  var _useState15 = (0, _react.useState)(4),
      _useState16 = _slicedToArray(_useState15, 2),
      currentTourStep = _useState16[0],
      setCurrentTourStep = _useState16[1];

  var handleOpenDetails = function handleOpenDetails(driverGroup) {
    setMoveDistance(0);
    setCurDriversGroup(driverGroup);
    setOpenDetails(true);

    if (!driverGroup) {
      setTimeout(function () {
        setCurrentTourStep(5);
      }, 50);
    }
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

  var handleOpenTour = function handleOpenTour() {
    setOpenDetails(false);
    setCurrentTourStep(4);
    setIsTourOpen(true);
  };

  (0, _react.useEffect)(function () {
    var _history$location, _history$location$sta;

    if ((_history$location = history.location) !== null && _history$location !== void 0 && (_history$location$sta = _history$location.state) !== null && _history$location$sta !== void 0 && _history$location$sta.isFromTourDriversGroup) {
      handleOpenTour();
    }
  }, [(_history$location2 = history.location) === null || _history$location2 === void 0 ? void 0 : (_history$location2$st = _history$location2.state) === null || _history$location2$st === void 0 ? void 0 : _history$location2$st.isFromTourDriversGroup]);

  var handleNextTour = function handleNextTour() {
    setTimeout(function () {
      setCurrentTourStep(6);
    }, 50);
  };

  var handleDeliveryTourCompleted = function handleDeliveryTourCompleted() {
    setTimeout(function () {
      setCurrentTourStep(7);
    }, 50);
  };

  var getDataFromStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var value;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.getStorageItem)('isFromDeliveryDriversGroup', true);

            case 2:
              value = _context.sent;

              if (value) {
                (0, _utils.removeStorageItem)('isFromDeliveryDriversGroup');
                handleOpenTour();
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getDataFromStorage() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getDataFromStorage();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriversGroupsListingContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeftContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVERS_GROUPS', 'Drivers groups')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    "data-tour": "tour_add_group",
    onClick: function onClick() {
      return handleOpenDetails(null);
    }
  }, t('ADD_DRIVER_GROUP', 'Add driver group')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedGroupList.length === 0,
    onClick: function onClick() {
      return onClickSelectedGroupsDelete();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
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
  })), openDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "driver_group_details",
    defaultSideBarWidth: 550 + moveDistance,
    open: openDetails,
    moveDistance: moveDistance,
    noAnimation: isTourOpen,
    onClose: function onClose() {
      setCurDriversGroup(null);
      setOpenDetails(false);
      setIsTourOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_DriversGroupDetails.DriversGroupDetails, {
    driversGroupsState: driversGroupsState,
    setDriversGroupsState: setDriversGroupsState,
    curDriversGroup: curDriversGroup,
    driversManagers: driversManagersList === null || driversManagersList === void 0 ? void 0 : driversManagersList.managers,
    businesses: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
    paymethods: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods,
    drivers: driversList === null || driversList === void 0 ? void 0 : driversList.drivers,
    companies: driversCompanyList === null || driversCompanyList === void 0 ? void 0 : driversCompanyList.companies,
    handleUpdateDriversGroup: handleUpdateDriversGroup,
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    },
    onClose: function onClose() {
      setOpenDetails(false);

      if (isTourOpen) {
        handleDeliveryTourCompleted();
      }
    },
    isTourOpen: isTourOpen,
    handleNextTour: handleNextTour
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }), isTourOpen && /*#__PURE__*/_react.default.createElement(_WizardDelivery.WizardDelivery, {
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    currentStep: currentTourStep
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