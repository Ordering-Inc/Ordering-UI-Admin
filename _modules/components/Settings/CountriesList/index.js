"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountriesList = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var CountriesList = function CountriesList(props) {
  var actionState = props.actionState,
      searchValue = props.searchValue,
      countriesState = props.countriesState,
      handleUpdateCountry = props.handleUpdateCountry,
      handleAddCountry = props.handleAddCountry,
      selectedCountries = props.selectedCountries,
      setSelectedCountries = props.setSelectedCountries,
      handleDeleteCountry = props.handleDeleteCountry;

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
      openDetaisl = _useState10[0],
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

  var handleClickCountry = function handleClickCountry(e, country) {
    var isInvalid = e.target.closest('.country-checkbox') || e.target.closest('.country-enabled') || e.target.closest('.country-actions');
    if (isInvalid) return;
    setSelectedCountry(country);
    setOpenDetails(true);
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

  (0, _react.useEffect)(function () {
    if (actionState.loading || actionState.error || selectedCountry) return;
    setOpenDetails(false);
    setSelectedCountry(null);
  }, [actionState]);
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
  }))), !countriesState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewPageButton, {
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
  })), openDetaisl && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    open: openDetaisl,
    onClose: function onClose() {
      setOpenDetails(false);
      setSelectedCountry(null);
    }
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