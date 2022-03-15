"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

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

var BusinessTypes = function BusinessTypes(props) {
  var businessTypes = props.businessTypes,
      business = props.business,
      formState = props.formState,
      setFormState = props.setFormState,
      handleUpdateBusinessClick = props.handleUpdateBusinessClick,
      setBusinessTypes = props.setBusinessTypes,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen;

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

  var handleOpenBusinessTypeDetail = function handleOpenBusinessTypeDetail(e, category) {
    var isInvalid = e.target.closest('.business-type-checkbox');
    if (isInvalid) return;
    setSelectedBusinessType(category);
    setIsExtendExtraOpen(true);
    setIsOpenTypeDetail(true);
  };

  var handleCloseDetail = function handleCloseDetail() {
    setIsOpenTypeDetail(false);
    setIsExtendExtraOpen(false);
    setSelectedBusinessType(null);
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
      return type === null || type === void 0 ? void 0 : type.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setFilteredBusinessTypes(_toConsumableArray(updatedBusinessTypes));
  }, [businessTypes, searchVal]);
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
        return handleOpenBusinessTypeDetail(evt, category);
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
      return handleOpenBusinessTypeDetail(evt, null);
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