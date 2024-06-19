"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanySelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styledComponents = require("styled-components");
var _Select = require("../../../styles/Select");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CompanySelectorUI = function CompanySelectorUI(props) {
  var isFirstSelect = props.isFirstSelect,
    order = props.order,
    companysList = props.companysList,
    defaultValue = props.defaultValue,
    isPhoneView = props.isPhoneView,
    isFilterView = props.isFilterView,
    small = props.small,
    padding = props.padding,
    orderView = props.orderView,
    handleAssignDriverCompany = props.handleAssignDriverCompany,
    handleChangeCompany = props.handleChangeCompany,
    filterValues = props.filterValues,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    handleOpenMessages = props.handleOpenMessages;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOption = _useState2[0],
    setDefaultOption = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    companysOptionList = _useState4[0],
    setCompanysOptionList = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    companyssMultiOptionList = _useState6[0],
    setCompanysMultiOptionList = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var companysLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      small: small
    }, t('LOADING', 'loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _theme$images;
    var _companysOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        padding: orderView ? padding : '0px'
      }, orderView ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperCompanyImage, {
        small: small,
        className: "driver-photo"
      }, /*#__PURE__*/_react.default.createElement(_styles.CompanyImage, {
        bgimage: company.logo || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver),
        small: small
      })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.CompanyNameContainer, {
        className: "driver-info"
      }, /*#__PURE__*/_react.default.createElement(_styles.CompanyName, {
        small: small
      }, t('NO_COMPANY', 'No Company'))))) : /*#__PURE__*/_react.default.createElement("span", null, t('SELECT_COMPANY', 'Select company'))),
      color: 'primary',
      disabled: !isFilterView,
      showDisable: true
    }];
    if (!isFilterView) {
      _companysOptionList.push({
        value: 'remove',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
          isRemove: true
        }, /*#__PURE__*/_react.default.createElement("span", null, t('REMOVE_COMPANY', 'Remove assigned company'))),
        disabled: defaultValue === 'default'
      });
    }
    if (!companysList.loading) {
      var _companysList;
      if (searchValue) {
        _companysList = companysList.companys.filter(function (company) {
          return company.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
      } else {
        _companysList = companysList.companys;
      }
      var _companysOptionListTemp = _companysList.map(function (company, i) {
        var _theme$images$icons;
        return {
          value: company.id,
          showDisable: isFilterView ? true : !(isFilterView || !(company !== null && company !== void 0 && company.busy)),
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
            small: small,
            isPhoneView: isPhoneView,
            padding: padding,
            isFilterView: isFilterView
          }, /*#__PURE__*/_react.default.createElement(_styles.WrapperCompanyImage, {
            small: small,
            className: "driver-photo"
          }, /*#__PURE__*/_react.default.createElement(_styles.CompanyImage, {
            bgimage: company.logo || ((_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver),
            small: small
          })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.CompanyNameContainer, {
            className: "driver-info"
          }, /*#__PURE__*/_react.default.createElement(_styles.CompanyName, {
            small: small
          }, company.name), /*#__PURE__*/_react.default.createElement(_styles.CompanyText, {
            small: small
          }, t('COMPANY', 'Company')))))
        };
      });
      setCompanysMultiOptionList(_companysOptionListTemp);
      var _iterator = _createForOfIteratorHelper(_companysOptionListTemp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _companysOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setCompanysOptionList(_companysOptionList);
  }, [companysList, defaultValue, searchValue]);
  var changeCompany = function changeCompany(companyId) {
    if (isFilterView) {
      if (companyId === 'default') {
        handleChangeCompany(null);
      } else {
        handleChangeCompany(companyId);
      }
      return;
    }
    if (companyId === 'default') return;
    if (companyId === 'remove') {
      companyId = null;
    }
    handleAssignDriverCompany({
      orderId: order.id,
      companyId: companyId
    });
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 50);
    }
  };
  (0, _react.useEffect)(function () {
    setDefaultOption(defaultValue);
  }, [defaultValue]);
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, t('SELECT_COMPANY', 'Select company'));
  var handleSearch = function handleSearch(val) {
    setSearchValue(val);
  };
  if (isFilterView) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !companysList.loading ? /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      defaultValue: filterValues.companyIds,
      placeholder: Placeholder,
      options: companyssMultiOptionList,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      onChange: function onChange(company) {
        return handleChangeCompany(company);
      },
      isShowSearchBar: true,
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: function handleChangeSearch(val) {
        return setSearchValue(val);
      }
    }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      defaultValue: "default",
      options: companysLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      className: "driver-select",
      isShowSearchBar: true,
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: function handleChangeSearch(val) {
        return setSearchValue(val);
      }
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !companysList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isFirstSelect ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
      defaultValue: defaultOption || 'default',
      options: companysOptionList,
      optionInnerMaxHeight: "200px",
      onChange: function onChange(companyId) {
        return changeCompany(companyId);
      },
      isShowSearchBar: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: handleSearch,
      className: "driver-select"
    }) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
      defaultValue: defaultOption || 'default',
      options: companysOptionList,
      optionInnerMaxHeight: "200px",
      onChange: function onChange(companyId) {
        return changeCompany(companyId);
      },
      isShowSearchBar: true,
      searchBarIsNotLazyLoad: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      searchBarIsCustomLayout: true,
      searchValue: searchValue,
      handleChangeSearch: handleSearch,
      className: "driver-select"
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
      placeholder: t('SELECT_COMPANY', 'Select company'),
      defaultValue: "default",
      options: companysLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "200px",
      className: "driver-select"
    })));
  }
};
var CompanySelector = exports.CompanySelector = function CompanySelector(props) {
  var CompanysControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CompanySelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DriversList, CompanysControlProps));
};