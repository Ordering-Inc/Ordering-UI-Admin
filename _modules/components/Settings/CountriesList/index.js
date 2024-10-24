"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountriesList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));
var _styles = require("../../../styles");
var _CountryDetails = require("../CountryDetails");
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CountriesList = function CountriesList(props) {
  var actionState = props.actionState,
    searchValue = props.searchValue,
    countriesState = props.countriesState,
    handleUpdateCountry = props.handleUpdateCountry,
    handleAddCountry = props.handleAddCountry,
    selectedCountries = props.selectedCountries,
    setSelectedCountries = props.setSelectedCountries,
    handleDeleteCountry = props.handleDeleteCountry;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    countriesPerPage = _useState4[0],
    setCountriesPerPage = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    totalPages = _useState6[0],
    setTotalPages = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    currentCountries = _useState8[0],
    setCurrentCountries = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    openDetails = _useState10[0],
    setOpenDetails = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedCountry = _useState12[0],
    setSelectedCountry = _useState12[1];
  var _useState13 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    confirm = _useState14[0],
    setConfirm = _useState14[1];
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * countriesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setCountriesPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (countriesState.loading) return;
    var _totalPages;
    var dropdownOptions = [];
    if (searchValue) {
      dropdownOptions = countriesState.countries.filter(function (option) {
        var _option$name;
        return (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      dropdownOptions = _toConsumableArray(countriesState.countries);
    }
    if (dropdownOptions.length > 0) {
      _totalPages = Math.ceil(dropdownOptions.length / countriesPerPage);
    }
    var indexOfLastPost = currentPage * countriesPerPage;
    var indexOfFirstPost = indexOfLastPost - countriesPerPage;
    var _currentDropdownOptions = dropdownOptions.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentCountries(_currentDropdownOptions);
  }, [countriesState, currentPage, countriesPerPage, searchValue]);
  var handleClickCountry = function handleClickCountry(e, country, isInitialRender) {
    var _e$target, _e$target2, _e$target3;
    var isInvalid = (e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.country-checkbox')) || (e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.closest('.country-enabled')) || (e === null || e === void 0 || (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.closest('.country-actions'));
    if (isInvalid) return;
    setSelectedCountry(country);
    setOpenDetails(true);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?country=").concat(country.id));
    }
  };
  var onDeleteCountry = function onDeleteCountry(countryId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('COUNTRY', 'Country')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteCountry(countryId);
      }
    });
  };
  var handleAllCheckbox = function handleAllCheckbox() {
    var isAllChecked = currentCountries.every(function (item) {
      return selectedCountries.find(function (elem) {
        return elem.id === item.id;
      });
    });
    if (!isAllChecked) {
      setSelectedCountries(currentCountries);
    } else {
      setSelectedCountries([]);
    }
  };
  var handleCheckCountry = function handleCheckCountry(country) {
    var found = selectedCountries.find(function (item) {
      return item.id === country.id;
    });
    if (found) {
      setSelectedCountries(selectedCountries.filter(function (_country) {
        return _country.id !== country.id;
      }));
    } else {
      setSelectedCountries([].concat(_toConsumableArray(selectedCountries), [country]));
    }
  };
  var handleCloseDetail = function handleCloseDetail() {
    setOpenDetails(false);
    setSelectedCountry(null);
    history.replace("".concat(location.pathname));
  };
  (0, _react.useEffect)(function () {
    if (actionState.loading || actionState.error || selectedCountry) return;
    setOpenDetails(false);
    setSelectedCountry(null);
  }, [actionState]);
  (0, _react.useEffect)(function () {
    if (countriesState.loading) return;
    var countryId = query.get('country');
    if (countryId) {
      var initCountry = countriesState.countries.find(function (country) {
        return country.id === Number(countryId);
      });
      if (initCountry) {
        handleClickCountry(null, initCountry, true);
      }
    }
  }, [countriesState.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles2.CountriesContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CountryWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
    onClick: function onClick() {
      return handleAllCheckbox();
    },
    active: !countriesState.loading && selectedCountries.length === currentCountries.length
  }, !countriesState.loading && selectedCountries.length === currentCountries.length ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('COUNTRY', 'Zone'))), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    isHeader: true
  }, t('ACTIONS', 'Actions'))), countriesState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CountryWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCountries.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCountries.map(function (country) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CountryWrapper, {
      key: country.id,
      active: (selectedCountry === null || selectedCountry === void 0 ? void 0 : selectedCountry.id) === country.id,
      onClick: function onClick(e) {
        return handleClickCountry(e, country);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "country-checkbox",
      onClick: function onClick() {
        return handleCheckCountry(country);
      },
      active: selectedCountries.find(function (_country) {
        return (_country === null || _country === void 0 ? void 0 : _country.id) === country.id;
      })
    }, selectedCountries.find(function (_country) {
      return (_country === null || _country === void 0 ? void 0 : _country.id) === country.id;
    }) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, country === null || country === void 0 ? void 0 : country.name)), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "country-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: country === null || country === void 0 ? void 0 : country.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateCountry(country.id, {
          enabled: enabled
        });
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, {
      className: "country-actions"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        setSelectedCountry(country);
        setOpenDetails(true);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return onDeleteCountry(country.id);
      }
    }, t('DELETE', 'Delete'))))));
  }))), !countriesState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      setSelectedCountry(null);
      setOpenDetails(true);
    }
  }, t('ADD_NEW_COUNTRY ', 'Add new country')), (currentCountries === null || currentCountries === void 0 ? void 0 : currentCountries.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: function handleChangePage(page) {
      return setCurrentPage(page);
    },
    defaultPageSize: countriesPerPage,
    handleChangePageSize: handleChangePageSize
  })), openDetails && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openDetails,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_CountryDetails.CountryDetails, {
    country: selectedCountry,
    handleUpdateCountry: handleUpdateCountry,
    handleAddCountry: handleAddCountry
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
exports.CountriesList = CountriesList;