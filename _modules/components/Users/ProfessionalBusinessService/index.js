"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalBusinessService = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Shared = require("../../Shared");

var _styles = require("../../../styles");

var _styledComponents = require("styled-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles2 = require("./styles");

var _ProfessionalServices = require("../ProfessionalServices");

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProfessionalBusinessServiceUI = function ProfessionalBusinessServiceUI(props) {
  var _businessList$busines;

  var searchValue = props.searchValue,
      _onSearch = props.onSearch,
      businessList = props.businessList,
      handleChangeCheckBox = props.handleChangeCheckBox,
      businessIds = props.businessIds,
      setExtraOpen = props.setExtraOpen,
      handleUpdateBusinessIds = props.handleUpdateBusinessIds,
      userServiceList = props.userServiceList,
      user = props.user,
      handleUpdateServices = props.handleUpdateServices,
      extraSelected = props.extraSelected,
      setExtraSelected = props.setExtraSelected;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var theme = (0, _styledComponents.useTheme)(); // Change page

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = _slicedToArray(_useState3, 2),
      pagesPerPage = _useState4[0],
      setPagesPerPage = _useState4[1]; // Get current business


  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      currentBusinesses = _useState6[0],
      setCurrentBusinesses = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      totalPages = _useState8[0],
      setTotalPages = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedBusinessId = _useState10[0],
      setSelectedBusinessId = _useState10[1];

  var _useState11 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      alertState = _useState12[0],
      setAlertState = _useState12[1];

  var handleOpenService = function handleOpenService(businessId) {
    if (businessId) {
      setSelectedBusinessId(businessId);
      setExtraSelected(null);
      setExtraOpen(true);
    } else {
      setSelectedBusinessId(null);
      setExtraOpen(false);
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleSelectAllBusinesses = function handleSelectAllBusinesses(index) {
    if (index) {
      var ids = currentBusinesses.reduce(function (prev, current) {
        return [].concat(_toConsumableArray(prev), [current.id]);
      }, []);
      handleUpdateBusinessIds(ids);
      return;
    }

    handleOpenService(null);
    handleUpdateBusinessIds([]);
  };

  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };

  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * pagesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setPagesPerPage(pageSize);
  };

  var handleClickItem = function handleClickItem(e, businessId) {
    if (e.target.closest('.check-box')) return;

    if (!(businessIds !== null && businessIds !== void 0 && businessIds.includes(businessId))) {
      setAlertState({
        open: true,
        content: t('DISABLED_BUSINESS', 'Disabled business')
      });
      return;
    }

    handleOpenService(businessId);
  };

  var handleClickCheckBox = function handleClickCheckBox(businessId) {
    handleChangeCheckBox && handleChangeCheckBox(businessId);
    if (businessIds !== null && businessIds !== void 0 && businessIds.includes(businessId) && businessId === selectedBusinessId) handleOpenService(null);
  };

  (0, _react.useEffect)(function () {
    var _totalPages;

    if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / pagesPerPage);
    }

    var indexOfLastPost = currentPage * pagesPerPage;
    var indexOfFirstPost = indexOfLastPost - pagesPerPage;

    var _currentProducts = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost);

    setTotalPages(_totalPages);
    setCurrentBusinesses(_currentProducts);
  }, [businessList === null || businessList === void 0 ? void 0 : businessList.businesses, currentPage, pagesPerPage]);
  (0, _react.useEffect)(function () {
    if (searchValue) setCurrentPage(1);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    if (extraSelected) setSelectedBusinessId(null);
  }, [extraSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BrandBUSIDetailContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return _onSearch(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), businessList !== null && businessList !== void 0 && businessList.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BusinessListWrapper, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessItemContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      className: "d-flex h-100"
    })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BusinessListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllBusinesses(true);
    }
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllBusinesses(false);
    }
  }, t('SELECT_NONE', 'Select none'))), (currentBusinesses === null || currentBusinesses === void 0 ? void 0 : currentBusinesses.length) > 0 ? currentBusinesses.map(function (business, i) {
    var _theme$images, _theme$images$dummies;

    return /*#__PURE__*/_react.default.createElement(_styles2.BusinessItemContainer, {
      key: i,
      onClick: function onClick(e) {
        return handleClickItem(e, business === null || business === void 0 ? void 0 : business.id);
      },
      active: business.id === selectedBusinessId,
      notAllow: !(businessIds !== null && businessIds !== void 0 && businessIds.includes(business === null || business === void 0 ? void 0 : business.id))
    }, /*#__PURE__*/_react.default.createElement(_styles2.CheckWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "check-box",
      onClick: function onClick() {
        return handleClickCheckBox(business.id);
      }
    }, businessIds !== null && businessIds !== void 0 && businessIds.includes(business.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "active"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: business === null || business === void 0 ? void 0 : business.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo))
    })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, business === null || business === void 0 ? void 0 : business.name))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null));
  }) : /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, null), (businessList === null || businessList === void 0 ? void 0 : (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: pagesPerPage,
    handleChangePageSize: handleChangePageSize
  }))), selectedBusinessId && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "user_service",
    defaultSideBarWidth: 500,
    isBorderShow: true,
    IconTop: "30px",
    open: selectedBusinessId,
    onClose: function onClose() {
      return handleOpenService();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalServices.ProfessionalServices, {
    businessId: selectedBusinessId,
    services: userServiceList === null || userServiceList === void 0 ? void 0 : userServiceList.services,
    userId: user.id,
    handleUpdateServices: handleUpdateServices
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('BUSINESS_AND_SERVICES', 'Business & Services'),
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

var ProfessionalBusinessService = function ProfessionalBusinessService(props) {
  var professionalBusinessServiceProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalBusinessServiceUI,
    propsToFetch: ['id', 'name', 'logo'],
    isSearchByName: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProfessionalBusinessService, professionalBusinessServiceProps);
};

exports.ProfessionalBusinessService = ProfessionalBusinessService;