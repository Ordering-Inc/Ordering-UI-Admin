"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversCompaniesList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _styles = require("../../../styles");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var DriversCompaniesList = exports.DriversCompaniesList = function DriversCompaniesList(props) {
  var driversCompaniesState = props.driversCompaniesState,
    searchValue = props.searchValue,
    handleOpenDetails = props.handleOpenDetails,
    curDriversCompany = props.curDriversCompany,
    handleUpdateDriversCompany = props.handleUpdateDriversCompany,
    handleSelectCompany = props.handleSelectCompany,
    selectedCompanyList = props.selectedCompanyList,
    handleAllSelectCompany = props.handleAllSelectCompany,
    isUseQuery = props.isUseQuery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;

  // Change page
  var _useState = (0, _react.useState)(Number(defaultPage) || 1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(Number(defaultPageSize) || 10),
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
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !currentPage || !companiesPerPage || !totalPages) return;
    (0, _utils.addQueryToUrl)({
      page: currentPage,
      pageSize: companiesPerPage
    });
  }, [currentPage, companiesPerPage, totalPages]);
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
  }))), !driversCompaniesState.loading && /*#__PURE__*/_react.default.createElement(_styles2.PagesBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
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