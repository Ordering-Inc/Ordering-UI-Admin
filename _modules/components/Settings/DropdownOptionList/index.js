"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownOptionList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrap = require("react-bootstrap");
var _styledComponents = require("styled-components");
var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _CountrySelector = require("../CountrySelector");
var _ZoneDropdownDetails = require("../ZoneDropdownDetails");
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
var DropdownOptionList = function DropdownOptionList(props) {
  var searchValue = props.searchValue,
    dropdownOptionsState = props.dropdownOptionsState,
    countriesState = props.countriesState,
    handleUpdateDropdown = props.handleUpdateDropdown,
    openZoneDropdown = props.openZoneDropdown,
    setOpenZonedropdown = props.setOpenZonedropdown,
    selectedZoneDropdown = props.selectedZoneDropdown,
    setSelectedZoneDropdown = props.setSelectedZoneDropdown,
    changesState = props.changesState,
    handleChangesState = props.handleChangesState,
    handleSaveZone = props.handleSaveZone,
    handleAddZone = props.handleAddZone,
    handleDeleteZone = props.handleDeleteZone,
    handleOpenZoneDropdownDetails = props.handleOpenZoneDropdownDetails,
    selectedZoneList = props.selectedZoneList,
    handleCheckboxZoneClick = props.handleCheckboxZoneClick,
    handleAllCheckboxZoneClick = props.handleAllCheckboxZoneClick;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cities = _useState2[0],
    setCities = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];

  // Change page
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(10),
    _useState8 = _slicedToArray(_useState7, 2),
    dropdownOptionsPerPage = _useState8[0],
    setDropdownOptionsPerPage = _useState8[1];
  // Get current cities
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentDropdownOptions = _useState10[0],
    setCurrentDropdownOptions = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    totalPages = _useState12[0],
    setTotalPages = _useState12[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * dropdownOptionsPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setDropdownOptionsPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (dropdownOptionsState.loading) return;
    var _totalPages;
    var dropdownOptions = [];
    if (searchValue) {
      dropdownOptions = dropdownOptionsState.options.filter(function (option) {
        var _option$name;
        return (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      dropdownOptions = _toConsumableArray(dropdownOptionsState.options);
    }
    if (dropdownOptions.length > 0) {
      _totalPages = Math.ceil(dropdownOptions.length / dropdownOptionsPerPage);
    }
    var indexOfLastPost = currentPage * dropdownOptionsPerPage;
    var indexOfFirstPost = indexOfLastPost - dropdownOptionsPerPage;
    var _currentDropdownOptions = dropdownOptions.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentDropdownOptions(_currentDropdownOptions);
  }, [dropdownOptionsState, currentPage, dropdownOptionsPerPage, searchValue]);
  (0, _react.useEffect)(function () {
    var _countriesState$count;
    if (countriesState.loading) return;
    var _cities = (_countriesState$count = countriesState.countries) === null || _countriesState$count === void 0 ? void 0 : _countriesState$count.reduce(function (_cities, country) {
      return [].concat(_toConsumableArray(_cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
    }, []);
    setCities(_cities);
  }, [countriesState]);
  var handleClickZoneDropdown = function handleClickZoneDropdown(e, zone) {
    var isInvalid = e.target.closest('.zone-checkbox') || e.target.closest('.zone-enabled') || e.target.closest('.zone-actions');
    if (isInvalid) return;
    handleOpenZoneDropdownDetails(zone);
  };
  var onDeleteZone = function onDeleteZone(zoneId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ZONE', 'Are you sure to delete this zone?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteZone(zoneId);
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionWrapper, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionName, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
    onClick: function onClick() {
      return handleAllCheckboxZoneClick();
    },
    active: !dropdownOptionsState.loading && selectedZoneList.length === dropdownOptionsState.options.length
  }, !dropdownOptionsState.loading && selectedZoneList.length === dropdownOptionsState.options.length ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('ZONE', 'Zone'))), /*#__PURE__*/_react.default.createElement(_styles2.CountryName, {
    isHeader: true
  }, t('COUNTRY', 'Country')), /*#__PURE__*/_react.default.createElement(_styles2.CityName, {
    isHeader: true
  }, t('CITY', 'City')), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, {
    isHeader: true
  }, t('ACTIONS', 'Actions'))), dropdownOptionsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.CityName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentDropdownOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentDropdownOptions.map(function (dropdownOption) {
    var _dropdownOption$city;
    return /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionWrapper, {
      key: dropdownOption.id,
      active: (selectedZoneDropdown === null || selectedZoneDropdown === void 0 ? void 0 : selectedZoneDropdown.id) === dropdownOption.id,
      onClick: function onClick(e) {
        return handleClickZoneDropdown(e, dropdownOption);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.DropdownOptionName, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, {
      className: "zone-checkbox",
      onClick: function onClick() {
        return handleCheckboxZoneClick(dropdownOption);
      },
      active: selectedZoneList.find(function (_zone) {
        return (_zone === null || _zone === void 0 ? void 0 : _zone.id) === dropdownOption.id;
      })
    }, selectedZoneList.find(function (_zone) {
      return (_zone === null || _zone === void 0 ? void 0 : _zone.id) === dropdownOption.id;
    }) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, dropdownOption === null || dropdownOption === void 0 ? void 0 : dropdownOption.name)), /*#__PURE__*/_react.default.createElement(_styles2.CountryName, null, /*#__PURE__*/_react.default.createElement(_CountrySelector.CountrySelector, {
      defaultValue: parseInt(dropdownOption === null || dropdownOption === void 0 ? void 0 : (_dropdownOption$city = dropdownOption.city) === null || _dropdownOption$city === void 0 ? void 0 : _dropdownOption$city.country_id),
      countries: countriesState === null || countriesState === void 0 ? void 0 : countriesState.countries
    })), /*#__PURE__*/_react.default.createElement(_styles2.CityName, null, /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
      isDefault: true,
      defaultValue: parseInt(dropdownOption === null || dropdownOption === void 0 ? void 0 : dropdownOption.city_id),
      cities: cities
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "zone-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: dropdownOption === null || dropdownOption === void 0 ? void 0 : dropdownOption.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateDropdown(dropdownOption.id, {
          enabled: enabled
        });
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.ActionSelectorWrapper, {
      className: "zone-actions"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null),
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenZoneDropdownDetails(dropdownOption);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return onDeleteZone(dropdownOption.id);
      }
    }, t('DELETE', 'Delete'))))));
  }))), !dropdownOptionsState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewPageButton, {
    onClick: function onClick() {
      return handleOpenZoneDropdownDetails(null);
    }
  }, t('ADD_NEW_ZONE_DROPDOWN ', 'Add new zone dropdown')), (currentDropdownOptions === null || currentDropdownOptions === void 0 ? void 0 : currentDropdownOptions.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: dropdownOptionsPerPage,
    handleChangePageSize: handleChangePageSize
  }))), openZoneDropdown && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "city-details",
    defaultSideBarWidth: 550,
    open: openZoneDropdown,
    onClose: function onClose() {
      setSelectedZoneDropdown(null);
      setOpenZonedropdown(false);
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_ZoneDropdownDetails.ZoneDropdownDetails, {
    zoneDropdown: selectedZoneDropdown,
    cities: cities,
    changesState: changesState,
    countries: countriesState === null || countriesState === void 0 ? void 0 : countriesState.countries,
    handleChangesState: handleChangesState,
    handleSaveZone: handleSaveZone,
    handleAddZone: handleAddZone
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
exports.DropdownOptionList = DropdownOptionList;