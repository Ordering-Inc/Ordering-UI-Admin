"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTypes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactRouterDom = require("react-router-dom");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _BsCardImage = _interopRequireDefault(require("@meronex/icons/bs/BsCardImage"));
var _styles = require("./styles");
var _BusinessTypeDetail = require("../BusinessTypeDetail");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessTypes = function BusinessTypes(props) {
  var businessTypes = props.businessTypes,
    business = props.business,
    formState = props.formState,
    setFormState = props.setFormState,
    handleUpdateBusinessClick = props.handleUpdateBusinessClick,
    setBusinessTypes = props.setBusinessTypes,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusinessTypes = _useState4[0],
    setSelectedBusinessTypes = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchVal = _useState6[0],
    setSearchVal = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredBusinessTypes = _useState8[0],
    setFilteredBusinessTypes = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedBusinessType = _useState10[0],
    setSelectedBusinessType = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpenTypeDetail = _useState12[0],
    setIsOpenTypeDetail = _useState12[1];
  var handleOpenBusinessTypeDetail = function handleOpenBusinessTypeDetail(category, e) {
    var _e$target;
    var isInvalid = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.business-type-checkbox');
    if (isInvalid) return;
    setSelectedBusinessType(category);
    setIsExtendExtraOpen(true);
    setIsOpenTypeDetail(true);
    var businessId = query.get('id');
    var section = query.get('section');
    var tab = query.get('tab');
    history.replace("".concat(location.pathname, "?id=").concat(businessId, "&section=").concat(section, "&tab=").concat(tab, "&business_type=").concat(category.id));
  };
  var handleCloseDetail = function handleCloseDetail() {
    setIsOpenTypeDetail(false);
    setIsExtendExtraOpen(false);
    setSelectedBusinessType(null);
    var businessId = query.get('id');
    var section = query.get('section');
    var tab = query.get('tab');
    history.replace("".concat(location.pathname, "?id=").concat(businessId, "&section=").concat(section, "&tab=").concat(tab));
  };
  var handleSelectBusinessTypes = function handleSelectBusinessTypes(typeId) {
    var _selectedBusinessTypes = _toConsumableArray(selectedBusinessTypes);
    if (selectedBusinessTypes.includes(typeId)) {
      _selectedBusinessTypes = _selectedBusinessTypes.filter(function (id) {
        return id !== typeId;
      });
    } else {
      _selectedBusinessTypes.push(typeId);
    }
    if (_selectedBusinessTypes.length > 0) {
      setSelectedBusinessTypes(_selectedBusinessTypes);
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_TYPES_ITEM_MINIMUM', 'The types must have at least 1 items.')
      });
      return;
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        types: _selectedBusinessTypes
      }
    }));
  };
  (0, _react.useEffect)(function () {
    if (!(business !== null && business !== void 0 && business.types)) return;
    var _selectedBusinessTypes = [];
    var _iterator = _createForOfIteratorHelper(business === null || business === void 0 ? void 0 : business.types),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        _selectedBusinessTypes.push(type.id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    setSelectedBusinessTypes(_selectedBusinessTypes);
  }, [business]);
  (0, _react.useEffect)(function () {
    if (formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0) return;
    handleUpdateBusinessClick();
  }, [formState]);
  (0, _react.useEffect)(function () {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  }, []);
  (0, _react.useEffect)(function () {
    var updatedBusinessTypes = businessTypes.filter(function (type) {
      var _type$name;
      return type === null || type === void 0 ? void 0 : (_type$name = type.name) === null || _type$name === void 0 ? void 0 : _type$name.toLowerCase().includes(searchVal === null || searchVal === void 0 ? void 0 : searchVal.toLowerCase());
    });
    setFilteredBusinessTypes(_toConsumableArray(updatedBusinessTypes));
  }, [businessTypes, searchVal]);
  (0, _react.useEffect)(function () {
    var businessTypeId = query.get('business_type');
    if (businessTypeId) {
      var initBusinessType = businessTypes.find(function (type) {
        return type.id === Number(businessTypeId);
      });
      setTimeout(function () {
        handleOpenBusinessTypeDetail(initBusinessType);
      }, 500);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.SearchWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchVal,
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: function onSearch(value) {
      return setSearchVal(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessTypeWrapper, null, filteredBusinessTypes.map(function (category) {
    return (category === null || category === void 0 ? void 0 : category.id) && /*#__PURE__*/_react.default.createElement(_styles.BusinessTypeContainer, {
      key: category === null || category === void 0 ? void 0 : category.id,
      active: (selectedBusinessType === null || selectedBusinessType === void 0 ? void 0 : selectedBusinessType.id) === (category === null || category === void 0 ? void 0 : category.id),
      onClick: function onClick(evt) {
        return handleOpenBusinessTypeDetail(category, evt);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTypeInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
      onClick: function onClick() {
        return handleSelectBusinessTypes(category.id);
      },
      className: "business-type-checkbox"
    }, selectedBusinessTypes.includes(category.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: category === null || category === void 0 ? void 0 : category.image
    }, !(category !== null && category !== void 0 && category.image) && /*#__PURE__*/_react.default.createElement(_BsCardImage.default, null))), /*#__PURE__*/_react.default.createElement("span", null, category === null || category === void 0 ? void 0 : category.name)), /*#__PURE__*/_react.default.createElement(_styles.ArrowWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)));
  })), /*#__PURE__*/_react.default.createElement(_styles.AddNewBusinessTypeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddNewBusinessTypeTitle, {
    onClick: function onClick(evt) {
      return handleOpenBusinessTypeDetail(null, evt);
    }
  }, t('ADD_NEW_BUSINESS_CATEGORY', 'Add new business category'))), isOpenTypeDetail && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "busiiness-type",
    defaultSideBarWidth: 500,
    open: isOpenTypeDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    isBorderShow: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessTypeDetail.BusinessTypeDetail, {
    setBusinessTypes: setBusinessTypes,
    businessType: selectedBusinessType,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    businessTypes: businessTypes
  })) : /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: isOpenTypeDetail,
    onClose: function onClose() {
      return handleCloseDetail();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessTypeDetail.BusinessTypeDetail, {
    setBusinessTypes: setBusinessTypes,
    businessType: selectedBusinessType,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    businessTypes: businessTypes
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
  }));
};
exports.BusinessTypes = BusinessTypes;