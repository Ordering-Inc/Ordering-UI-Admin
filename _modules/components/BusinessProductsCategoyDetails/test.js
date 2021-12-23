"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategoyDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
 * Component to manage BusinessProductsCategoyDetails behavior without UI component
 */
var BusinessProductsCategoyDetails = function BusinessProductsCategoyDetails(props) {
  var UIComponent = props.UIComponent,
      businessState = props.businessState,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      category = props.category,
      categoryId = props.categoryId,
      onClose = props.onClose,
      categorySelected = props.categorySelected,
      setCategorySelected = props.setCategorySelected;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      loading = _useSession2[0].loading;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    loading: false,
    changes: {
      enabled: true,
      enabledParent: false
    },
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      parentCategories = _useState4[0],
      setParentCategories = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!category) return;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: category
    }));
  }, [category]);
  (0, _react.useEffect)(function () {
    var _businessState$busine;

    if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.id && !category && categoryId) {
      var _category = businessState.business.categories.filter(function (item) {
        return parseInt(item.id) === parseInt(categoryId);
      })[0];
      if (_category) setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _category
      }));
    }
  }, [businessState]);
  /**
  * Update form input data
  * @param {EventTarget} e Related HTML event
  */

  var handleChangeInput = function handleChangeInput(e) {
    var currentChanges = _defineProperty({}, e.target.name, e.target.value);

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
  * Update credential data
  * @param {Object} isChecked checkbox status
  */


  var handleChangeCheckBox = function handleChangeCheckBox(isChecked) {
    var currentChanges = null;

    if (isChecked.enabled !== undefined) {
      currentChanges = {
        enabled: isChecked.enabled
      };
    }

    if (isChecked.enabledParent) {
      currentChanges = {
        parent_category_id: categorySelected.id
      };
    } else {
      currentChanges = {
        parent_category_id: null
      };
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Update form item
   */


  var handleChangeItem = function handleChangeItem(change) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), change)
    }));
  };
  /**
  * Update business photo data
  * @param {File} file Image to change business photo
  */


  var handlechangeImage = function handlechangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          image: reader.result
        })
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
  * Default fuction for business profile workflow
  */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var id, changes, key, _yield$ordering$busin, content, _categories, _business;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!category) {
                _context.next = 21;
                break;
              }

              id = (category === null || category === void 0 ? void 0 : category.id) || categoryId;

              if (!loading) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _context.prev = 4;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              changes = _objectSpread({}, formState.changes);

              for (key in changes) {
                if (changes[key] === null) {
                  delete changes[key];
                }
              }

              _context.next = 11;
              return ordering.businesses(businessState === null || businessState === void 0 ? void 0 : businessState.business.id).categories(parseInt(id)).save(changes);

            case 11:
              _yield$ordering$busin = _context.sent;
              content = _yield$ordering$busin.content;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: content.result,
                  result: {
                    error: false,
                    result: content.result
                  },
                  loading: false
                }));
                setCategorySelected(content.result);

                if (handleUpdateBusinessState) {
                  _categories = _toConsumableArray(businessState.business.categories);

                  _categories.forEach(function iterate(category, index, object) {
                    if (category.id === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                      if (Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories)) {
                        var found = category.subcategories.find(function (subCategory) {
                          return subCategory.id === (content === null || content === void 0 ? void 0 : content.result.id);
                        });

                        if (!found) {
                          category.subcategories.push(content === null || content === void 0 ? void 0 : content.result);
                        }
                      }
                    }

                    if (category.id === (content === null || content === void 0 ? void 0 : content.result.id) && category.parent_category_id === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                      var _content$result, _content$result2, _content$result3;

                      category.name = content === null || content === void 0 ? void 0 : (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.name;
                      category.enabled = content === null || content === void 0 ? void 0 : (_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.enabled;
                      category.image = content === null || content === void 0 ? void 0 : (_content$result3 = content.result) === null || _content$result3 === void 0 ? void 0 : _content$result3.image;
                    }

                    if (category.id === (content === null || content === void 0 ? void 0 : content.result.id) && category.parent_category_id !== (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                      object.splice(index, 1);
                    }

                    Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                  });

                  _business = _objectSpread(_objectSpread({}, businessState.business), {}, {
                    categories: _categories
                  });
                  handleUpdateBusinessState(_business);
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: formState.changes,
                  result: content,
                  loading: false
                }));
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](4);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 19:
              _context.next = 22;
              break;

            case 21:
              createBusinessCategory();

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 16]]);
    }));

    return function handleUpdateClick() {
      return _ref.apply(this, arguments);
    };
  }();

  var createBusinessCategory = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _businessState$busine2, _yield$ordering$busin2, content, _categories;

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
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context2.next = 7;
              return ordering.businesses(parseInt(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id)).categories().save(formState.changes);

            case 7:
              _yield$ordering$busin2 = _context2.sent;
              content = _yield$ordering$busin2.content;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  category: {},
                  result: {
                    error: false,
                    result: content.result
                  },
                  loading: false
                }));

                if (handleUpdateBusinessState) {
                  _categories = businessState.business.categories;

                  if (content !== null && content !== void 0 && content.result.parent_category_id) {
                    _categories.forEach(function iterate(category) {
                      if (category.id === (content === null || content === void 0 ? void 0 : content.result.parent_category_id)) {
                        category.subcategories.push(_objectSpread(_objectSpread({}, content.result), {}, {
                          products: [],
                          subcategories: []
                        }));
                      }

                      Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                    });
                  } else {
                    _categories.push(_objectSpread(_objectSpread({}, content.result), {}, {
                      products: [],
                      subcategories: []
                    }));
                  }

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, businessState.business), {}, {
                    categories: _categories
                  }));
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CATEOGORY_CREATED', 'Category created'));
                onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  changes: formState.changes,
                  result: content,
                  loading: false
                }));
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 12]]);
    }));

    return function createBusinessCategory() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (businessState.loading || !categorySelected) return;

    var getParentCategories = function getParentCategories(category, id) {
      var path;
      var item = {
        id: category.id,
        name: category.name
      };
      if (!category || _typeof(category) !== 'object') return;

      if (category.id === id) {
        return [];
      }

      ((category === null || category === void 0 ? void 0 : category.subcategories) || []).some(function (child) {
        return path = getParentCategories(child, id);
      });
      return path && [item].concat(_toConsumableArray(path));
    };

    businessState.business.categories.forEach(function (category) {
      var _parentCategories = getParentCategories(category, categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id);

      if (_parentCategories) {
        setParentCategories(_parentCategories);
      }
    });
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.loading, categorySelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: !category,
    formState: formState,
    setFormState: setFormState,
    parentCategories: parentCategories,
    handlechangeImage: handlechangeImage,
    handleChangeInput: handleChangeInput,
    handleUpdateClick: handleUpdateClick,
    handleChangeCheckBox: handleChangeCheckBox,
    handleChangeItem: handleChangeItem
  })));
};

exports.BusinessProductsCategoyDetails = BusinessProductsCategoyDetails;
BusinessProductsCategoyDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Object for a business
   */
  businessState: _propTypes.default.object,

  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: _propTypes.default.func,

  /**
   * Function to set product creation mode
   */
  setIsAddProduct: _propTypes.default.func,

  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessProductsCategoyDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};