"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _Shared = require("../../Shared");
var _CountrySelector = require("../CountrySelector");
var _CityDetails = require("../CityDetails");
var _DropdownOptionList = require("../DropdownOptionList");
var _CountriesList = require("../CountriesList");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var PlaceListingUI = function PlaceListingUI(props) {
  var _countriesState$count2, _countriesState$count3;
  var countriesState = props.countriesState,
    cityManagerList = props.cityManagerList,
    handleUpdateCountry = props.handleUpdateCountry,
    handleAddCountry = props.handleAddCountry,
    selectedCountries = props.selectedCountries,
    setSelectedCountries = props.setSelectedCountries,
    handleDeleteCountry = props.handleDeleteCountry,
    handleUpdateCity = props.handleUpdateCity,
    handleDeleteCity = props.handleDeleteCity,
    actionState = props.actionState,
    selectedCity = props.selectedCity,
    setSelectedCity = props.setSelectedCity,
    handleChangesState = props.handleChangesState,
    changesState = props.changesState,
    handleSaveCity = props.handleSaveCity,
    handleAddCity = props.handleAddCity,
    openCity = props.openCity,
    setOpenCity = props.setOpenCity,
    selectedCityList = props.selectedCityList,
    handleCheckboxClick = props.handleCheckboxClick,
    handleAllCheckboxClick = props.handleAllCheckboxClick,
    handleSeveralDeleteCities = props.handleSeveralDeleteCities,
    handleSeveralDeleteCountries = props.handleSeveralDeleteCountries,
    dropdownOptionsState = props.dropdownOptionsState,
    handleUpdateDropdown = props.handleUpdateDropdown,
    openZoneDropdown = props.openZoneDropdown,
    setOpenZonedropdown = props.setOpenZonedropdown,
    selectedZoneDropdown = props.selectedZoneDropdown,
    setSelectedZoneDropdown = props.setSelectedZoneDropdown,
    cleanChagesState = props.cleanChagesState,
    handleSaveZone = props.handleSaveZone,
    handleAddZone = props.handleAddZone,
    handleDeleteZone = props.handleDeleteZone,
    selectedZoneList = props.selectedZoneList,
    handleCheckboxZoneClick = props.handleCheckboxZoneClick,
    handleAllCheckboxZoneClick = props.handleAllCheckboxZoneClick,
    handleSeveralDeleteZones = props.handleSeveralDeleteZones;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)('countries'),
    _useState6 = _slicedToArray(_useState5, 2),
    showOption = _useState6[0],
    setShowOption = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];

  // Change page
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = (0, _react.useState)(10),
    _useState12 = _slicedToArray(_useState11, 2),
    citiesPerPage = _useState12[0],
    setCitiesPerPage = _useState12[1];
  // Get current cities
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    currentCities = _useState14[0],
    setCurrentCities = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    totalPages = _useState16[0],
    setTotalPages = _useState16[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * citiesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setCitiesPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    var _countriesState$count;
    if (countriesState.loading) return;
    var _cities = (_countriesState$count = countriesState.countries) === null || _countriesState$count === void 0 ? void 0 : _countriesState$count.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []);
    var cities = [];
    if (searchValue) {
      cities = _cities.filter(function (city) {
        var _city$name;
        return (_city$name = city.name) === null || _city$name === void 0 ? void 0 : _city$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      cities = _toConsumableArray(_cities);
    }
    var _totalPages = Math.ceil(cities.length / citiesPerPage);
    var indexOfLastPost = currentPage * citiesPerPage;
    var indexOfFirstPost = indexOfLastPost - citiesPerPage;
    var _currentCities = cities.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentCities(_currentCities);
  }, [countriesState, currentPage, citiesPerPage, searchValue]);
  var onDeleteCity = function onDeleteCity(countryId, cityId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CITY', 'Are you sure to delete this city?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteCity(countryId, cityId);
      }
    });
  };
  var handleOpenCityDetails = function handleOpenCityDetails(city) {
    setSelectedCity(city);
    setOpenCity(true);
  };
  var handleClickCity = function handleClickCity(e, city, isInitialRender) {
    var _e$target, _e$target2, _e$target3;
    var isInvalid = (e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.city-checkbox')) || (e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.closest('.city-enabled')) || (e === null || e === void 0 || (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.closest('.city-actions'));
    if (isInvalid) return;
    handleOpenCityDetails(city);
    if (!isInitialRender) {
      history.replace("".concat(location.pathname, "?country=").concat(city.country_id, "&city=").concat(city.id));
    }
  };
  var handleCloseCityDetail = function handleCloseCityDetail() {
    setSelectedCity(null);
    setOpenCity(false);
    history.replace("".concat(location.pathname));
  };
  var handleOpenZoneDropdownDetails = function handleOpenZoneDropdownDetails(zone) {
    setSelectedZoneDropdown(zone);
    setOpenZonedropdown(true);
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error)) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState === null || actionState === void 0 ? void 0 : actionState.error]);
  (0, _react.useEffect)(function () {
    setSearchValue(null);
    cleanChagesState();
  }, [showOption]);
  (0, _react.useEffect)(function () {
    if (countriesState.loading) return;
    var countryId = query.get('country');
    var cityId = query.get('city');
    if (countryId && cityId) {
      setShowOption('cities');
      var initCountry = countriesState.countries.find(function (country) {
        return country.id === Number(countryId);
      });
      if (initCountry) {
        var initCity = initCountry.cities.find(function (city) {
          return city.id === Number(cityId);
        });
        if (initCity) {
          handleClickCity(null, initCity, true);
        }
      }
    }
  }, [countriesState.loading]);
  (0, _react.useEffect)(function () {
    var zone = query.get('zone');
    if (zone) {
      setShowOption('zones');
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PlaceListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderLeft, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('COUNTRIES_CITIES', 'Countries/Cities'))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderRight, null, showOption === 'cities' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenCityDetails(null);
    }
  }, t('ADD_CITY', 'Add city')), showOption === 'zones' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenZoneDropdownDetails(null);
    }
  }, t('ADD_ZONE_DROPDOWN', 'Add zone dropdown')), showOption === 'countries' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: (selectedCountries === null || selectedCountries === void 0 ? void 0 : selectedCountries.length) === 0,
    onClick: function onClick() {
      return handleSeveralDeleteCountries();
    }
  }, t('DELETE', 'Delete')), showOption === 'cities' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedCityList.length === 0,
    onClick: function onClick() {
      return handleSeveralDeleteCities();
    }
  }, t('DELETE', 'Delete')), showOption === 'zones' && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedZoneList.length === 0,
    onClick: function onClick() {
      return handleSeveralDeleteZones();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: true,
    isCustomLayout: true,
    placeholder: t('SEARCH', 'Search'),
    searchValue: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'countries',
    onClick: function onClick() {
      return setShowOption('countries');
    }
  }, t('COUNTRIES', 'Countries')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'cities',
    onClick: function onClick() {
      return setShowOption('cities');
    }
  }, t('CITIES', 'Cities')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: showOption === 'zones',
    onClick: function onClick() {
      return setShowOption('zones');
    }
  }, t('DROPDOWN_OPTIONS', 'Zones dropdown options'))), showOption === 'countries' && /*#__PURE__*/_react.default.createElement(_CountriesList.CountriesList, {
    actionState: actionState,
    countriesState: countriesState,
    handleUpdateCountry: handleUpdateCountry,
    handleAddCountry: handleAddCountry,
    selectedCountries: selectedCountries,
    setSelectedCountries: setSelectedCountries,
    handleDeleteCountry: handleDeleteCountry
  }), showOption === 'cities' && /*#__PURE__*/_react.default.createElement(_styles2.CitiesListContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CityWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.CityName, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
    onClick: function onClick() {
      return handleAllCheckboxClick();
    },
    active: !countriesState.loading && selectedCityList.length === ((_countriesState$count2 = countriesState.countries) === null || _countriesState$count2 === void 0 ? void 0 : _countriesState$count2.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []).length)
  }, !countriesState.loading && selectedCityList.length === ((_countriesState$count3 = countriesState.countries) === null || _countriesState$count3 === void 0 ? void 0 : _countriesState$count3.reduce(function (_cities, country) {
    return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
  }, []).length) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('CITY', 'City'))), /*#__PURE__*/_react.default.createElement(_styles2.CountryName, {
    isHeader: true
  }, t('COUNTRY', 'Country')), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    isHeader: true
  }, t('ACTIONS', 'Actions'))), countriesState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CityWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.CityName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.CityAdministrator, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCities.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCities.map(function (city) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CityWrapper, {
      key: city.id,
      active: (selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.id) === city.id,
      onClick: function onClick(e) {
        return handleClickCity(e, city);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CityName, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "city-checkbox",
      onClick: function onClick() {
        return handleCheckboxClick(city);
      },
      active: selectedCityList.find(function (_city) {
        return (_city === null || _city === void 0 ? void 0 : _city.id) === city.id;
      })
    }, selectedCityList.find(function (_city) {
      return (_city === null || _city === void 0 ? void 0 : _city.id) === city.id;
    }) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, city === null || city === void 0 ? void 0 : city.name)), /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_CountrySelector.CountrySelector, {
      defaultValue: parseInt(city === null || city === void 0 ? void 0 : city.country_id),
      countries: countriesState === null || countriesState === void 0 ? void 0 : countriesState.countries
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "city-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: city === null || city === void 0 ? void 0 : city.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateCity(city.country_id, city.id, {
          enabled: enabled
        });
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, {
      className: "city-actions"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenCityDetails(city);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return onDeleteCity(city.country_id, city.id);
      }
    }, t('DELETE', 'Delete'))))));
  }))), !countriesState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenCityDetails(null);
    }
  }, t('ADD_NEW_CITY', 'Add new city')), (currentCities === null || currentCities === void 0 ? void 0 : currentCities.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: citiesPerPage,
    handleChangePageSize: handleChangePageSize
  }))), showOption === 'zones' && /*#__PURE__*/_react.default.createElement(_DropdownOptionList.DropdownOptionList, {
    dropdownOptionsState: dropdownOptionsState,
    searchValue: searchValue,
    countriesState: countriesState,
    handleUpdateDropdown: handleUpdateDropdown,
    openZoneDropdown: openZoneDropdown,
    setOpenZonedropdown: setOpenZonedropdown,
    selectedZoneDropdown: selectedZoneDropdown,
    setSelectedZoneDropdown: setSelectedZoneDropdown,
    changesState: changesState,
    handleChangesState: handleChangesState,
    handleSaveZone: handleSaveZone,
    handleAddZone: handleAddZone,
    handleDeleteZone: handleDeleteZone,
    handleOpenZoneDropdownDetails: handleOpenZoneDropdownDetails,
    selectedZoneList: selectedZoneList,
    handleCheckboxZoneClick: handleCheckboxZoneClick,
    handleAllCheckboxZoneClick: handleAllCheckboxZoneClick
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
  }), openCity && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "city-details",
    defaultSideBarWidth: 550,
    open: openCity,
    onClose: function onClose() {
      return handleCloseCityDetail();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_CityDetails.CityDetails, {
    city: selectedCity,
    countries: countriesState === null || countriesState === void 0 ? void 0 : countriesState.countries,
    cityManagers: cityManagerList.users,
    handleChangesState: handleChangesState,
    changesState: changesState,
    handleSaveCity: handleSaveCity,
    handleAddCity: handleAddCity
  })));
};
var PlaceListing = exports.PlaceListing = function PlaceListing(props) {
  var placesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PlaceListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PlaceList, placesProps);
};