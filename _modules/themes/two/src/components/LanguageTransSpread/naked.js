"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageTransSpread = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

var LanguageTransSpread = function LanguageTransSpread(props) {
  var UIComponent = props.UIComponent,
      translationList = props.translationList,
      handleUpdateTranslationList = props.handleUpdateTranslationList,
      getTranslations = props.getTranslations;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: null
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    row: -1,
    col: -1
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      curCell = _useState4[0],
      setCurCell = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      removing = _useState6[0],
      setRemoving = _useState6[1];
  /**
   * Method to select and deselect a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} col Number of selected col
   * @param {Number} row1 Number of selected row
   * @param {Number} col1 Number of selected col
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */


  var handleAfterSectionEnd = function handleAfterSectionEnd(row, col, row1, col1, hotTableObj) {
    if (curCell.row === row && curCell.col === col || row !== row1 || col !== col1) return;
    setCurCell({
      row: row,
      col: col
    });
    hotTableObj.deselectCell();
    hotTableObj.selectCell(row, col);
  };

  var handleoutsideClickDeselects = function handleoutsideClickDeselects() {
    setCurCell({
      row: -1,
      col: -1
    });
    return false;
  };
  /**
   * Method to update and add translations
   */


  var handleItemChange = function handleItemChange(b, accionHanson, hotTableObj) {
    if (removing) {
      setRemoving(false);
      return;
    }

    b = !b ? [] : b;
    var changes = [];
    var itemToAdd = [];
    var itemToUpdate = [];
    var errors = [];

    for (var i = 0; i < b.length; i++) {
      var error = {
        key: false,
        text: false
      };

      if (b[i][2] !== b[i][3]) {
        var valid = true;

        for (var j = 0; j < changes.length; j++) {
          if (changes[j] === b[i][0]) {
            valid = false;
            break;
          }
        }

        if (valid) {
          changes.push(b[i][0]);
          var row = hotTableObj.getSourceDataAtRow(b[i][0]);
          hotTableObj.validateRows(changes, function (res) {});

          if (!row.key) {
            error.key = true;
            if (errors.indexOf(t('KEY_REQUIRED')) === -1) errors.push(t('KEY_REQUIRED'));
          }

          if (!row.text) {
            error.text = true;
            if (errors.indexOf(t('TEXT_REQUIRED')) === -1) errors.push(t('TEXT_REQUIRED'));
          }

          if (!row.id) {
            if (error.key || error.text) continue;
            row.row = b[i][0];
            itemToAdd.push(row);
          } else {
            if (error.text || error.text) continue;
            itemToUpdate.push(row);
          }
        }
      }
    }

    if (errors.length > 0) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        result: {
          error: true,
          result: errors
        }
      }));
    }

    if (itemToUpdate.length > 0) {
      createBulkTranslations(itemToUpdate, false, hotTableObj);
    }

    if (itemToAdd.length > 0) {
      createBulkTranslations(itemToAdd, true, hotTableObj);
    }
  };
  /**
   * Method to update translation from API
   */


  var createBulkTranslations = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params, isPost, hotTableObj) {
      var requestOptions, functionFetch, response, _yield$response$json, error, result, translations, i;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: isPost ? 'POST' : 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  translations: JSON.stringify(params)
                })
              };
              functionFetch = "".concat(ordering.root, "/bulks/translations");
              _context.next = 9;
              return fetch(functionFetch, requestOptions);

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: false,
                    result: result
                  }
                }));

                if (!isPost) {
                  translations = translationList === null || translationList === void 0 ? void 0 : translationList.translations.map(function (translation) {
                    var _iterator = _createForOfIteratorHelper(params),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.id === translation.id) {
                          return _objectSpread(_objectSpread({}, translation), {}, {
                            key: item.key,
                            text: item.text
                          });
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                    return translation;
                  });
                  handleUpdateTranslationList(translations);
                } else {
                  getTranslations();
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, isPost ? t('WEB_APP_LANG_ADDED', 'Language item added') : t('WEB_APP_LANG_SAVED', 'Language change saved'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context.next = 22;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

              if (isPost) {
                for (i = params.length - 1; i >= 0; i--) {
                  hotTableObj.alter('remove_row', params[i].row);
                }
              }

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 18]]);
    }));

    return function createBulkTranslations(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    creationFormState: formState,
    handleItemChange: handleItemChange,
    handleAfterSectionEnd: handleAfterSectionEnd,
    handleoutsideClickDeselects: handleoutsideClickDeselects
  })));
};

exports.LanguageTransSpread = LanguageTransSpread;
LanguageTransSpread.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Object for translations
   */
  translationList: _propTypes.default.object,

  /**
   * Function to update translations
   */
  handleUpdateTranslationList: _propTypes.default.func,

  /**
   * Function to get translation list
   */
  getTranslations: _propTypes.default.func,

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
LanguageTransSpread.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};