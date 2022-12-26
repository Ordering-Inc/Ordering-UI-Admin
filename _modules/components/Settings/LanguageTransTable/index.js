"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageTransTable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var LanguageTransTableUI = function LanguageTransTableUI(props) {
  var _creationFormState$ch, _creationFormState$ch2;
  var translationList = props.translationList,
    searchValue = props.searchValue,
    handleChangeText = props.handleChangeText,
    creationFormState = props.creationFormState,
    handleChangeInput = props.handleChangeInput,
    handleUpdateClick = props.handleUpdateClick,
    textEditState = props.textEditState;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowCreation = _useState4[0],
    setIsShowCreation = _useState4[1];
  var translationCreateRef = (0, _react.useRef)(null);

  // Change page
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    currentPage = _useState6[0],
    setCurrentPage = _useState6[1];
  var _useState7 = (0, _react.useState)(10),
    _useState8 = _slicedToArray(_useState7, 2),
    translationPerPage = _useState8[0],
    setTranslationPerPage = _useState8[1];

  // Get current products
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPages = _useState10[0],
    setCurrentPages = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    totalPages = _useState12[0],
    setTotalPages = _useState12[1];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangePage = function handleChangePage(translation) {
    setCurrentPage(translation);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(((currentPage - 1) * translationPerPage + 1) / pageSize);
    setCurrentPage(expectedPage);
    setTranslationPerPage(pageSize);
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _translationCreateRef;
    if (!isShowCreation) return;
    var outsideDropdown = !((_translationCreateRef = translationCreateRef.current) !== null && _translationCreateRef !== void 0 && _translationCreateRef.contains(e.target));
    if (outsideDropdown && !e.target.closest('.popup-component')) {
      if (Object.keys(creationFormState === null || creationFormState === void 0 ? void 0 : creationFormState.changes).length > 0 && !(creationFormState !== null && creationFormState !== void 0 && creationFormState.loading)) {
        handleUpdateClick();
      } else {
        setIsShowCreation(false);
      }
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isShowCreation, creationFormState]);
  (0, _react.useEffect)(function () {
    if (translationList !== null && translationList !== void 0 && translationList.loading) return;
    var translations = [];
    if (searchValue) {
      var _translationList$tran;
      translations = translationList === null || translationList === void 0 ? void 0 : (_translationList$tran = translationList.translations) === null || _translationList$tran === void 0 ? void 0 : _translationList$tran.filter(function (translation) {
        var _translation$key, _translation$text;
        return ((_translation$key = translation.key) === null || _translation$key === void 0 ? void 0 : _translation$key.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase())) || ((_translation$text = translation.text) === null || _translation$text === void 0 ? void 0 : _translation$text.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase()));
      });
    } else {
      translations = _toConsumableArray(translationList === null || translationList === void 0 ? void 0 : translationList.translations);
    }
    var _totalPages = Math.ceil(translations.length / translationPerPage);
    var indexOfLastPost = currentPage * translationPerPage;
    var indexOfFirstPost = indexOfLastPost - translationPerPage;
    var _currentProducts = translations.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(_totalPages);
    setCurrentPages(_currentProducts);
  }, [translationList, currentPage, translationPerPage, searchValue]);
  (0, _react.useEffect)(function () {
    var _creationFormState$re;
    if (creationFormState !== null && creationFormState !== void 0 && (_creationFormState$re = creationFormState.result) !== null && _creationFormState$re !== void 0 && _creationFormState$re.error) {
      var _creationFormState$re2;
      setAlertState({
        open: true,
        content: creationFormState === null || creationFormState === void 0 ? void 0 : (_creationFormState$re2 = creationFormState.result) === null || _creationFormState$re2 === void 0 ? void 0 : _creationFormState$re2.result
      });
    }
  }, [creationFormState === null || creationFormState === void 0 ? void 0 : creationFormState.result]);
  (0, _react.useEffect)(function () {
    if (searchValue) setCurrentPage(1);
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TranslationTableContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TranslationTable, null, /*#__PURE__*/_react.default.createElement(_styles.TableHeader, null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('KEY', 'Key')), /*#__PURE__*/_react.default.createElement("th", null, t('TEXT', 'Text')))), translationList !== null && translationList !== void 0 && translationList.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TableBody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 25
    })), /*#__PURE__*/_react.default.createElement("td", {
      style: {
        paddingLeft: '20px',
        paddingRight: '20px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 25
    }))));
  }) : currentPages.map(function (translation, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TableBody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, translation.key), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      value: (textEditState === null || textEditState === void 0 ? void 0 : textEditState.id) === translation.id ? textEditState === null || textEditState === void 0 ? void 0 : textEditState.text : translation.text,
      placeholder: t('WRITE_A_TEXT', 'Write a text'),
      onChange: function onChange(e) {
        return handleChangeText(translation.id, translation.key, e.target.value);
      }
    }))));
  }), isShowCreation && /*#__PURE__*/_react.default.createElement(_styles.TableBody, {
    ref: translationCreateRef
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('KEY', 'Write a key'),
    defaultValue: creationFormState === null || creationFormState === void 0 ? void 0 : (_creationFormState$ch = creationFormState.changes) === null || _creationFormState$ch === void 0 ? void 0 : _creationFormState$ch.key,
    onChange: function onChange(e) {
      return handleChangeInput('key', e);
    }
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: t('WRITE_A_TEXT', 'Write a text'),
    defaultValue: creationFormState === null || creationFormState === void 0 ? void 0 : (_creationFormState$ch2 = creationFormState.changes) === null || _creationFormState$ch2 === void 0 ? void 0 : _creationFormState$ch2.text,
    onChange: function onChange(e) {
      return handleChangeInput('text', e);
    }
  }))))), !translationList.loading && /*#__PURE__*/_react.default.createElement(_styles.TransBottomContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddNewTransButton, {
    onClick: function onClick() {
      return setIsShowCreation(true);
    }
  }, t('ADD_NEW_KEY', 'Add new key')), (currentPages === null || currentPages === void 0 ? void 0 : currentPages.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    handleChangePage: handleChangePage,
    defaultPageSize: translationPerPage,
    handleChangePageSize: handleChangePageSize
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('TRANSLATIONS', 'Translations'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var LanguageTransTable = function LanguageTransTable(props) {
  var languageTransTableProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageTransTableUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.LanguageTransTable, languageTransTableProps);
};
exports.LanguageTransTable = LanguageTransTable;