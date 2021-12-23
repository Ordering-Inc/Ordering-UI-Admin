"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessCategory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * Component to manage Checkout page behavior without UI component
 */
var SingleBusinessCategory = function SingleBusinessCategory(props) {
  var UIComponent = props.UIComponent,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      business = props.business,
      category = props.category,
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
    changes: {},
    loading: false,
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEditMode = _useState4[0],
      setIsEditMode = _useState4[1];

  var handelChangeCategoryActive = function handelChangeCategoryActive(isChecked) {
    var params = {
      enabled: isChecked
    };
    editCategory(params);
  };

  var handleUpdateClick = function handleUpdateClick() {
    var _formState$changes, _formState$changes2;

    var params = {
      name: formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name,
      image: formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.image
    };

    for (var key in params) {
      if (params[key] === null) {
        delete params[key];
      }
    }

    editCategory(params);
  };
  /**
  * Update category photo data
  * @param {File} file Image to change category photo
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

    setIsEditMode(true);
  };
  /**
   * Set properties of a category
   * @param {EventTarget} evt Related Html element
   */


  var handleInputChange = function handleInputChange(evt) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, evt.target.name, evt.target.value))
    }));
    setIsEditMode(true);
  };
  /**
   * Method to handle drag start
   */


  var handleDragStart = function handleDragStart(event) {
    event.dataTransfer.setData('transferCategoryId', category === null || category === void 0 ? void 0 : category.id);
    var ghostEle = document.createElement('div');
    ghostEle.classList.add('ghostDragging');
    ghostEle.innerHTML = category.name;
    document.body.appendChild(ghostEle);
    event.dataTransfer.setDragImage(ghostEle, 0, 0);
  };
  /**
   * Method to handle drag over
   */


  var handleDragOver = function handleDragOver(event) {
    event.preventDefault();
  };
  /**
   * Method to handle drag drop
   */


  var handleDrop = function handleDrop(event) {
    event.preventDefault();
    var transferCategoryId = parseInt(event.dataTransfer.getData('transferCategoryId'));
    var transferCategory = business === null || business === void 0 ? void 0 : business.categories.find(function (_category) {
      return _category.id === transferCategoryId;
    });
    var transferCategoryRank = transferCategory === null || transferCategory === void 0 ? void 0 : transferCategory.rank;
    var dropCategoryRank = category === null || category === void 0 ? void 0 : category.rank;
    var updatedCategories = business === null || business === void 0 ? void 0 : business.categories.filter(function (_category) {
      if (_category.id === transferCategoryId) _category.rank = dropCategoryRank;
      if (_category.id === category.id) _category.rank = transferCategoryRank;
      return true;
    });
    handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
      categories: updatedCategories
    }));
    handleChangeCategoryRank(transferCategoryId, {
      rank: dropCategoryRank
    });
  };
  /**
   * Method to change the rank of transfer category
   */


  var handleChangeCategoryRank = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(transferCategoryId, params) {
      var _yield$ordering$busin, content;

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
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              _context.next = 6;
              return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(transferCategoryId).save(params);

            case 6:
              _yield$ordering$busin = _context.sent;
              content = _yield$ordering$busin.content;

              if (!content.error) {
                showToast(_orderingComponentsAdmin.ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context.t0
                }
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function handleChangeCategoryRank(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to handle drag end
   */


  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');

    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  };
  /**
   * Method to edit a category
   */


  var editCategory = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(params) {
      var _yield$ordering$busin2, _yield$ordering$busin3, error, result, _categories;

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
              return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(parseInt(category.id)).save(params);

            case 7:
              _yield$ordering$busin2 = _context2.sent;
              _yield$ordering$busin3 = _yield$ordering$busin2.content;
              error = _yield$ordering$busin3.error;
              result = _yield$ordering$busin3.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: false,
                    result: result
                  }
                }));
                setIsEditMode(false);

                if (handleUpdateBusinessState) {
                  _categories = _toConsumableArray(business.categories);

                  _categories.forEach(function iterate(category) {
                    if (category.id === result.id) {
                      category.name = result === null || result === void 0 ? void 0 : result.name;
                      category.enabled = result === null || result === void 0 ? void 0 : result.enabled;
                      category.image = result === null || result === void 0 ? void 0 : result.image;
                    }

                    Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                  });

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
                    categories: _categories
                  }));
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CATEOGORY_UPDATED', 'Category updated'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context2.t0
                }
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 14]]);
    }));

    return function editCategory(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
  * Method to edit a category
  */


  var deleteCategory = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _yield$ordering$busin4, _yield$ordering$busin5, error, result, _categories;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!loading) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context3.next = 7;
              return ordering.businesses(parseInt(business === null || business === void 0 ? void 0 : business.id)).categories(parseInt(category.id)).delete();

            case 7:
              _yield$ordering$busin4 = _context3.sent;
              _yield$ordering$busin5 = _yield$ordering$busin4.content;
              error = _yield$ordering$busin5.error;
              result = _yield$ordering$busin5.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: false,
                    result: result
                  }
                }));

                if (handleUpdateBusinessState) {
                  _categories = _toConsumableArray(business.categories);

                  _categories.forEach(function iterate(_category, index, object) {
                    if (_category.id === category.id) {
                      object.splice(index, 1);
                    }

                    Array.isArray(_category === null || _category === void 0 ? void 0 : _category.subcategories) && _category.subcategories.forEach(iterate);
                  });

                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
                    categories: _categories
                  }));
                  if (category.id === categorySelected.id) setCategorySelected(_categories[0]);
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CATEOGORY_DELETED', 'Category deleted'));
                props.onClose && props.onClose(category.id);
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context3.t0
                }
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 14]]);
    }));

    return function deleteCategory() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (category) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread({}, category)
      }));
    }
  }, [category]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handelChangeCategoryActive: handelChangeCategoryActive,
    categoryFormState: formState,
    handlechangeImage: handlechangeImage,
    handleUpdateClick: handleUpdateClick,
    deleteCategory: deleteCategory,
    handleInputChange: handleInputChange,
    isEditMode: isEditMode,
    handleDragStart: handleDragStart,
    handleDragOver: handleDragOver,
    handleDrop: handleDrop,
    handleDragEnd: handleDragEnd
  })));
};

exports.SingleBusinessCategory = SingleBusinessCategory;
SingleBusinessCategory.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Object for a business
   */
  business: _propTypes.default.object,

  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: _propTypes.default.func,

  /**
   * Object for a product
   */
  category: _propTypes.default.object,

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
SingleBusinessCategory.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};