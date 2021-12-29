"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Buttons = require("../../styles/Buttons");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _InfoShareContext = require("../../contexts/InfoShareContext");

var _SearchBar = require("../SearchBar");

var _Inputs = require("../../styles/Inputs");

var _Switch = require("../../styles/Switch");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _CountrySelector = require("../CountrySelector");

var _CityAdministratorSelector = require("../CityAdministratorSelector");

var _Pagination = require("../Pagination");

var _Confirm = require("../Confirm");

var _SideBar = require("../SideBar");

var _CityDetails = require("../CityDetails");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _DropdownOptionList = require("../DropdownOptionList");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var PlaceListingUI = function PlaceListingUI(props) {
  var countriesState = props.countriesState,
      cityManagerList = props.cityManagerList,
      handleChangeCountryName = props.handleChangeCountryName,
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

  var _useState5 = (0, _react.useState)('cities'),
      _useState6 = _slicedToArray(_useState5, 2),
      showOption = _useState6[0],
      setShowOption = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1]; // Change page


  var _useState9 = (0, _react.useState)(1),
      _useState10 = _slicedToArray(_useState9, 2),
      currentPage = _useState10[0],
      setCurrentPage = _useState10[1];

  var _useState11 = (0, _react.useState)(10),
      _useState12 = _slicedToArray(_useState11, 2),
      citiesPerPage = _useState12[0],
      setCitiesPerPage = _useState12[1]; // Get current cities


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
    if (countriesState.loading) return;

    var _cities = countriesState.countries.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []);

    var cities = [];

    if (searchValue) {
      cities = _cities.filter(function (city) {
        return city.name.toLowerCase().includes(searchValue.toLowerCase());
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
  var timeout = null;

  var onChangeCountryName = function onChangeCountryName(id, changes) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      handleChangeCountryName(id, changes);
    }, 1000);
  };

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

  var handleClickCity = function handleClickCity(e, city) {
    var isInvalid = e.target.closest('.city-checkbox') || e.target.closest('.city-enabled') || e.target.closest('.city-actions');
    if (isInvalid) return;
    handleOpenCityDetails(city);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderLeft, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('COUNTRIES_CITIES', 'Countries/Cities'))), /*#__PURE__*/_react.default.createElement(_styles.HeaderRight, null, showOption === 'cities' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenCityDetails(null);
    }
  }, t('ADD_CITY', 'Add city')), showOption === 'zones' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenZoneDropdownDetails(null);
    }
  }, t('ADD_ZONE_DROPDOWN', 'Add zone dropdown')), showOption === 'cities' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedCityList.length === 0,
    onClick: function onClick() {
      return handleSeveralDeleteCities();
    }
  }, t('DELETE', 'Delete')), showOption === 'zones' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "secundary",
    disabled: selectedZoneList.length === 0,
    onClick: function onClick() {
      return handleSeveralDeleteZones();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    placeholder: t('SEARCH', 'Search'),
    searchValue: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.CoutryNameContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUNTRY', 'Country')), countriesState.countries.map(function (country) {
    return /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
      key: country.id
    }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      defaultValue: country === null || country === void 0 ? void 0 : country.name,
      placeholder: t('NAME', 'Name'),
      onChange: function onChange(e) {
        return onChangeCountryName(country.id, {
          name: e.target.value
        });
      }
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.Tabs, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: showOption === 'cities',
    onClick: function onClick() {
      return setShowOption('cities');
    }
  }, t('CITIES', 'Cities')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: showOption === 'zones',
    onClick: function onClick() {
      return setShowOption('zones');
    }
  }, t('DROPDOWN_OPTIONS', 'Zones dropdown options'))), showOption === 'cities' && /*#__PURE__*/_react.default.createElement(_styles.CitiesListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CityWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles.CityName, null, /*#__PURE__*/_react.default.createElement(_styles.CheckboxWrapper, {
    onClick: function onClick() {
      return handleAllCheckboxClick();
    },
    active: !countriesState.loading && selectedCityList.length === countriesState.countries.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []).length
  }, !countriesState.loading && selectedCityList.length === countriesState.countries.reduce(function (_cities, country) {
    return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
  }, []).length ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('CITY', 'City'))), /*#__PURE__*/_react.default.createElement(_styles.CityAdministrator, {
    isHeader: true
  }, t('ADMINISTRATOR', 'Administrator')), /*#__PURE__*/_react.default.createElement(_styles.CountryName, {
    isHeader: true
  }, t('COUNTRY', 'Country')), /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, {
    isHeader: true
  }, t('ACTIONS', 'Actions'))), countriesState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.CityWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.CityName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles.CityAdministrator, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles.CountryName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCities.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentCities.map(function (city) {
    return /*#__PURE__*/_react.default.createElement(_styles.CityWrapper, {
      key: city.id,
      active: (selectedCity === null || selectedCity === void 0 ? void 0 : selectedCity.id) === city.id,
      onClick: function onClick(e) {
        return handleClickCity(e, city);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.CityName, null, /*#__PURE__*/_react.default.createElement(_styles.CheckboxWrapper, {
      className: "city-checkbox",
      onClick: function onClick() {
        return handleCheckboxClick(city);
      },
      active: selectedCityList.find(function (_city) {
        return (_city === null || _city === void 0 ? void 0 : _city.id) === city.id;
      })
    }, selectedCityList.find(function (_city) {
      return (_city === null || _city === void 0 ? void 0 : _city.id) === city.id;
    }) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, city === null || city === void 0 ? void 0 : city.name)), /*#__PURE__*/_react.default.createElement(_styles.CityAdministrator, null, /*#__PURE__*/_react.default.createElement(_CityAdministratorSelector.CityAdministratorSelector, {
      defaultValue: parseInt(city === null || city === void 0 ? void 0 : city.administrator_id),
      cityManagers: cityManagerList.users
    })), /*#__PURE__*/_react.default.createElement(_styles.CountryName, null, /*#__PURE__*/_react.default.createElement(_CountrySelector.CountrySelector, {
      defaultValue: parseInt(city === null || city === void 0 ? void 0 : city.country_id),
      countries: countriesState === null || countriesState === void 0 ? void 0 : countriesState.countries
    })), /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, {
      className: "city-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
      defaultChecked: city === null || city === void 0 ? void 0 : city.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateCity(city.country_id, city.id, {
          enabled: enabled
        });
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.ActionSelectorWrapper, {
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
  }))), !countriesState.loading && /*#__PURE__*/_react.default.createElement(_styles.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddNewPageButton, {
    onClick: function onClick() {
      return handleOpenCityDetails(null);
    }
  }, t('ADD_NEW_CITY ', 'Add new city')), (currentCities === null || currentCities === void 0 ? void 0 : currentCities.length) > 0 && /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
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
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
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
  }), openCity && /*#__PURE__*/_react.default.createElement(_SideBar.SideBar, {
    sidebarId: "city-details",
    defaultSideBarWidth: 550,
    open: openCity,
    onClose: function onClose() {
      setSelectedCity(null);
      setOpenCity(false);
    }
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

var PlaceListing = function PlaceListing(props) {
  var placesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PlaceListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.PlaceList, placesProps);
};

exports.PlaceListing = PlaceListing;