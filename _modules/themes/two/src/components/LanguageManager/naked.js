"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageManager = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage LanguageManager behavior without UI component
 */
var LanguageManager = function LanguageManager(props) {
  var UIComponent = props.UIComponent;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      loading = _useSession2[0].loading;

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    loading: false,
    translations: [],
    result: {
      error: null
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      translationList = _useState2[0],
      setTranslationList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      mainTransList = _useState4[0],
      setMainTransList = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchValue = _useState6[0],
      setSearchValue = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: null
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      formState = _useState8[0],
      setFormState = _useState8[1];
  /**
   * Method to update translation text
   * @param {number} id translation id
   * @param {String} key translation key
   * @param {String} text translation text
   */


  var handleChangeText = function handleChangeText(id, key, text) {
    var translations = translationList === null || translationList === void 0 ? void 0 : translationList.translations.map(function (translation) {
      if (translation.key === key) {
        return _objectSpread(_objectSpread({}, translation), {}, {
          text: text
        });
      }

      return translation;
    });
    handleUpdateTranslationList && handleUpdateTranslationList(translations);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {
        id: id,
        key: key,
        text: text
      }
    }));
  };

  var handleUpdateTranslationList = function handleUpdateTranslationList(translations) {
    setTranslationList(_objectSpread(_objectSpread({}, translationList), {}, {
      translations: translations
    }));
  };
  /**
   * Method to update translation from API
   */


  var updateTranslation = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _formState$changes, _formState$changes2, _formState$changes3, changes, _yield$ordering$trans, _yield$ordering$trans2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              changes = {
                key: formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.key,
                text: formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.text
              };
              _context.next = 6;
              return ordering.translations(formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.id).save(changes);

            case 6:
              _yield$ordering$trans = _context.sent;
              _yield$ordering$trans2 = _yield$ordering$trans.content;
              error = _yield$ordering$trans2.error;
              result = _yield$ordering$trans2.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  changes: {}
                }));
                showToast(_orderingComponentsAdmin.ToastType.Success, t('WEB_APP_LANG_SAVED', 'Language change saved'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context.t0 || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.toString()) || (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message)]
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function updateTranslation() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get translation list from API
   */


  var getTranslations = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$trans3, _yield$ordering$trans4, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!loading) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              setTranslationList(_objectSpread(_objectSpread({}, translationList), {}, {
                loading: true
              }));
              _context2.next = 6;
              return ordering.translations().get();

            case 6:
              _yield$ordering$trans3 = _context2.sent;
              _yield$ordering$trans4 = _yield$ordering$trans3.content;
              error = _yield$ordering$trans4.error;
              result = _yield$ordering$trans4.result;

              if (!error) {
                setTranslationList(_objectSpread(_objectSpread({}, translationList), {}, {
                  loading: false,
                  translations: result
                }));
              } else {
                setTranslationList(_objectSpread(_objectSpread({}, translationList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              setTranslationList(_objectSpread(_objectSpread({}, translationList), {}, {
                loading: false,
                error: _context2.t0
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13]]);
    }));

    return function getTranslations() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getTranslations();
  }, []);
  (0, _react.useEffect)(function () {
    if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0) {
      updateTranslation();
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.changes]);
  (0, _react.useEffect)(function () {
    var _translationList$tran;

    if ((translationList === null || translationList === void 0 ? void 0 : (_translationList$tran = translationList.translations) === null || _translationList$tran === void 0 ? void 0 : _translationList$tran.length) > 0) {
      var main = [];

      for (var i = 0; i < (translationList === null || translationList === void 0 ? void 0 : translationList.translations.length); i++) {
        switch (translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].key) {
          case 'Panel_Currency':
            main.push({
              i: 0,
              id: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].id,
              name: 'CURRENCY',
              key: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].key,
              text: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].text
            });
            break;

          case 'BUSINESS_TYPE_FOOD':
            main.push({
              i: 1,
              id: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].id,
              name: 'TYPE_FOOD_WEB_APP',
              key: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].key,
              text: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].text
            });
            break;

          case 'BUSINESS_TYPE_ALCOHOL':
            main.push({
              i: 2,
              id: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].id,
              name: 'TYPE_ALCOHOL_WEB_APP',
              key: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].key,
              text: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].text
            });
            break;

          case 'BUSINESS_TYPE_LAUNDRY':
            main.push({
              i: 3,
              id: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].id,
              name: 'TYPE_LAUNDRY_WEB_APP',
              key: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].key,
              text: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].text
            });
            break;

          case 'BUSINESS_TYPE_GROCERIES':
            main.push({
              i: 4,
              id: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].id,
              name: 'TYPE_GROCERIES_WEB_APP',
              key: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].key,
              text: translationList === null || translationList === void 0 ? void 0 : translationList.translations[i].text
            });
            break;
        }
      }

      setMainTransList(main);
    }
  }, [translationList === null || translationList === void 0 ? void 0 : translationList.translations]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    translationList: translationList,
    handleUpdateTranslationList: handleUpdateTranslationList,
    mainTransList: mainTransList,
    searchValue: searchValue,
    onSearch: setSearchValue,
    handleChangeText: handleChangeText,
    getTranslations: getTranslations
  })));
};

exports.LanguageManager = LanguageManager;
LanguageManager.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
LanguageManager.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};