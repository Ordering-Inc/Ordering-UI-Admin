"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BsGrid = _interopRequireDefault(require("@meronex/icons/bs/BsGrid"));

var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));

var _utils = require("../../../utils");

var _Shared = require("../../Shared");

var _BusinessesList = require("../BusinessesList");

var _BusinessesListingHeader = require("../BusinessesListingHeader");

var _BusinessActiveStateFilter = require("../BusinessActiveStateFilter");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _BusinessDetails = require("../BusinessDetails");

var _AddBusinessForm = require("../AddBusinessForm");

var _WizardBusiness = require("../WizardBusiness");

var _styles = require("./styles");

var _BusinessSync = require("../BusinessSync");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessesListingUI = function BusinessesListingUI(props) {
  var businessList = props.businessList,
      pagination = props.pagination,
      searchValue = props.searchValue,
      selectedBusinessActiveState = props.selectedBusinessActiveState,
      handleChangeBusinessActiveState = props.handleChangeBusinessActiveState,
      handleChangeBusinessType = props.handleChangeBusinessType,
      loadMoreBusinesses = props.loadMoreBusinesses,
      handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
      handleSucessAddBusiness = props.handleSucessAddBusiness,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
      loadBusinesses = props.loadBusinesses,
      onSearch = props.onSearch,
      onBusinessRedirect = props.onBusinessRedirect,
      getPageBusinesses = props.getPageBusinesses;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTutorialMode = _useState2[0],
      setIsTutorialMode = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      openTutorialSidebarState = _useState4[0],
      setOpenTutorialSidebarState = _useState4[1];

  var _useState5 = (0, _react.useState)('list'),
      _useState6 = _slicedToArray(_useState5, 2),
      viewMethod = _useState6[0],
      setViewMethod = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      openBusinessDetails = _useState8[0],
      setOpenBusinessDetails = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      detailsBusiness = _useState10[0],
      setDetailsBusiness = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      detailsBusinessId = _useState12[0],
      setDetailsBusinessId = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      openAddBusiness = _useState14[0],
      setOpenAddBusiness = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      businessTypes = _useState16[0],
      setBusinessTypes = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      openSync = _useState18[0],
      setOpenSync = _useState18[1];

  var _useState19 = (0, _react.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      moveDistance = _useState20[0],
      setMoveDistance = _useState20[1];

  var handleBackRedirect = function handleBackRedirect() {
    setOpenBusinessDetails(false);
    setDetailsBusiness(null);
    setDetailsBusinessId(null);
    onBusinessRedirect();
  };

  var handleOpenBusinessDetails = function handleOpenBusinessDetails(business) {
    setOpenAddBusiness(false);
    setDetailsBusiness(business);
    setDetailsBusinessId(business.id);
    setOpenBusinessDetails(true);
    onBusinessRedirect(business.id);
  };

  var handleOpenAddBusiness = function handleOpenAddBusiness() {
    var id = query.get('id');

    if (id) {
      handleBackRedirect();
    }

    setOpenAddBusiness(true);
  };

  var onhandleSuccessAddBusiness = function onhandleSuccessAddBusiness(business) {
    handleSucessAddBusiness(business);
    setOpenAddBusiness(false);
    setDetailsBusiness(business);

    if (isTutorialMode) {
      setOpenTutorialSidebarState('schedule');
    } else {
      handleOpenBusinessDetails(business);
    }
  };

  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setOpenBusinessDetails(false);else {
      setDetailsBusinessId(id);
      onBusinessRedirect && onBusinessRedirect(id);
      setOpenBusinessDetails(true);
    }
  }, []);

  var handleStartTutorial = function handleStartTutorial() {
    setIsTutorialMode(true);
    handleOpenAddBusiness();
  };

  var handleSetStorage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var preVisited, visited;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.getStorageItem)('visited', true);

            case 2:
              preVisited = _context.sent;

              if (preVisited !== null && preVisited !== void 0 && preVisited.businesses_page) {
                _context.next = 8;
                break;
              }

              visited = _objectSpread(_objectSpread({}, preVisited), {}, {
                businesses_page: true
              });
              _context.next = 7;
              return (0, _utils.setStorageItem)('visited', visited, true);

            case 7:
              setIsTutorialMode(true);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSetStorage() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleViewMethod = function handleViewMethod(method) {
    setViewMethod(method);

    if (method === 'list') {
      getPageBusinesses(10, 1);
    }

    if (method === 'card') {
      getPageBusinesses(50, 1);
    }
  };

  var handleOpenSync = function handleOpenSync() {
    setOpenSync(true);
  };

  var handleCloseSync = function handleCloseSync() {
    setMoveDistance(0);
    setOpenSync(false);
  };

  (0, _react.useEffect)(function () {
    handleSetStorage();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListingContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessesListingHeader.BusinessesListingHeader, {
    searchValue: searchValue,
    onSearch: onSearch,
    handleOpenAddBusiness: handleOpenAddBusiness,
    handleStartTutorial: handleStartTutorial,
    handleOpenSync: handleOpenSync,
    handleRefreshBusinesses: loadBusinesses,
    loading: businessList.loading
  }), /*#__PURE__*/_react.default.createElement(_styles.ViewContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessActiveStateFilter.BusinessActiveStateFilter, {
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperView, null, /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'card',
    onClick: function onClick() {
      return handleViewMethod('card');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsGrid.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'list',
    onClick: function onClick() {
      return handleViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)))), /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType,
    setBusinessTypes: setBusinessTypes
  }), /*#__PURE__*/_react.default.createElement(_BusinessesList.BusinessesList, {
    viewMethod: viewMethod,
    businessList: businessList,
    pagination: pagination,
    detailsBusinessId: detailsBusinessId,
    loadMoreBusinesses: loadMoreBusinesses,
    getPageBusinesses: getPageBusinesses,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleOpenBusinessDetails: handleOpenBusinessDetails,
    handleOpenAddBusiness: handleOpenAddBusiness,
    isTutorialMode: isTutorialMode
  })), openBusinessDetails && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openBusinessDetails // business={detailsBusiness}
    ,
    businessTypes: businessTypes,
    businessId: detailsBusinessId,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setBusinessTypes: setBusinessTypes,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), openAddBusiness && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "add_business_form",
    open: openAddBusiness,
    onClose: function onClose() {
      return setOpenAddBusiness(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_AddBusinessForm.AddBusinessForm, {
    isTutorialMode: isTutorialMode,
    handleSucessAddBusiness: onhandleSuccessAddBusiness
  })), openSync && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    id: "store_sync",
    open: openSync,
    onClose: function onClose() {
      return handleCloseSync();
    },
    defaultSideBarWidth: 550 + moveDistance,
    moveDistance: moveDistance
  }, /*#__PURE__*/_react.default.createElement(_BusinessSync.BusinessSync, {
    handleParentSidebarMove: function handleParentSidebarMove(val) {
      return setMoveDistance(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_WizardBusiness.WizardBusiness, {
    isTutorialMode: isTutorialMode,
    openTutorialSidebarState: openTutorialSidebarState,
    setOpenTutorialSidebarState: setOpenTutorialSidebarState,
    business: detailsBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness
  }));
};

var BusinessesListing = function BusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessListingProps);
};

exports.BusinessesListing = BusinessesListing;