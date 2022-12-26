"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversCompaniesList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversCompaniesList = function DriversCompaniesList(props) {
  var driversCompaniesState = props.driversCompaniesState,
    searchValue = props.searchValue,
    handleOpenDetails = props.handleOpenDetails,
    curDriversCompany = props.curDriversCompany,
    handleUpdateDriversCompany = props.handleUpdateDriversCompany,
    handleSelectCompany = props.handleSelectCompany,
    selectedCompanyList = props.selectedCompanyList,
    handleAllSelectCompany = props.handleAllSelectCompany;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  // Change page
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    companiesPerPage = _useState4[0],
    setCompaniesPerPage = _useState4[1];

  // Get current companies
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    currentCompanies = _useState6[0],
    setCurrentCompanies = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    totalPages = _useState8[0],
    setTotalPages = _useState8[1];
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * companiesPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setCompaniesPerPage(pageSize);
  };
  (0, _react.useEffect)(function () {
    if (driversCompaniesState.loading) return;
    var _totalPages;
    var companies = [];
    if (searchValue) {
      companies = driversCompaniesState.companies.filter(function (plugin) {
        var _plugin$name;
        return (_plugin$name = plugin.name) === null || _plugin$name === void 0 ? void 0 : _plugin$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      companies = _toConsumableArray(driversCompaniesState.companies);
    }
    if (companies.length > 0) {
      _totalPages = Math.ceil(companies.length / companiesPerPage);
    }
    var indexOfLastPost = currentPage * companiesPerPage;
    var indexOfFirstPost = indexOfLastPost - companiesPerPage;
    var _currentCompanies = companies.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentCompanies(_currentCompanies);
  }, [driversCompaniesState, currentPage, companiesPerPage, searchValue]);
  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');
      case 0:
        return t('NORMAL', 'Normal');
      case 1:
        return t('HIGH', 'High');
      case 2:
        return t('URGENT', 'Urgent');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var handleClickCompany = function handleClickCompany(e, company) {
    var isInvalid = e.target.closest('.company-checkbox') || e.target.closest('.company-enabled');
    if (isInvalid) return;
    handleOpenDetails(company);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriversCompaniesContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.TableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.CompaniesTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.CompanyNameContainer, {
    isHeader: true
  }, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    className: "company-checkbox",
    onClick: function onClick() {
      return handleAllSelectCompany();
    },
    isChecked: !driversCompaniesState.loading && selectedCompanyList.length === driversCompaniesState.companies.length
  }, !driversCompaniesState.loading && selectedCompanyList.length === driversCompaniesState.companies.length ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), /*#__PURE__*/_react.default.createElement("p", null, t('COMPANY', 'Company')))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.LimitWrapper, {
    isHeader: true
  }, t('LIMIT', 'Limit'))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.PriorityWrapper, {
    isHeader: true
  }, t('PRIORITY', 'Priority'))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles2.TimezoneWrapper, {
    isHeader: true
  }, t('TIMEZONE', 'Timezone'))), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')))), driversCompaniesState.loading ? _toConsumableArray(Array(companiesPerPage).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CompanyNameContainer, {
      isHeader: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.LimitWrapper, {
      isHeader: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PriorityWrapper, {
      isHeader: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.TimezoneWrapper, {
      isHeader: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    })))));
  }) : currentCompanies.map(function (company) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: company.id,
      className: company.id === parseInt(curDriversCompany === null || curDriversCompany === void 0 ? void 0 : curDriversCompany.id) ? 'active' : null,
      onClick: function onClick(e) {
        return handleClickCompany(e, company);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.CompanyNameContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
      className: "company-checkbox",
      onClick: function onClick() {
        return handleSelectCompany(company.id);
      },
      isChecked: selectedCompanyList.includes(company.id)
    }, selectedCompanyList.includes(company.id) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, null)), /*#__PURE__*/_react.default.createElement("p", null, company === null || company === void 0 ? void 0 : company.name))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.LimitWrapper, null, company === null || company === void 0 ? void 0 : company.limit)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.PriorityWrapper, null, getPriorityTag(company === null || company === void 0 ? void 0 : company.priority))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.TimezoneWrapper, null, company === null || company === void 0 ? void 0 : company.timezone)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "company-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: company === null || company === void 0 ? void 0 : company.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateDriversCompany(company.id, {
          enabled: enabled
        });
      }
    })))));
  }))), !driversCompaniesState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.AddNewCompanyButton, {
    onClick: function onClick() {
      return handleOpenDetails(null);
    }
  }, t('ADD_NEW_DRIVER_COMPANY', 'Add new driver company')), (currentCompanies === null || currentCompanies === void 0 ? void 0 : currentCompanies.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: companiesPerPage,
    handleChangePageSize: handleChangePageSize
  }))));
};
exports.DriversCompaniesList = DriversCompaniesList;