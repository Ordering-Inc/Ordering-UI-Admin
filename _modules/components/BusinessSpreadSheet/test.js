"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSpreadSheet = void 0;

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessSpreadSheet = function BusinessSpreadSheet(props) {
  var UIComponent = props.UIComponent,
      categoryState = props.categoryState,
      business = props.business,
      handleUpdateBusinessState = props.handleUpdateBusinessState,
      categoryId = props.categoryId,
      categorySelected = props.categorySelected;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useState = (0, _react.useState)({
    products: null,
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
      removingWithSupr = _useState4[0],
      setRemovingWithSupr = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      undo = _useState6[0],
      setUndo = _useState6[1];

  var _useState7 = (0, _react.useState)({
    row: -1,
    col: -1
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      curCell = _useState8[0],
      setCurCell = _useState8[1];

  var taxShowbusiness = "".concat(business.tax, "% ").concat(business.tax_type === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'));
  var feeShowbusiness = "".concat(parsePrice(0), " + ").concat(business.service_fee, "%");
  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} col Number of selected col
   * @param {Number} row1 Number of selected row
   * @param {Number} col1 Number of selected col
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */

  var handleAfterSectionEnd = function handleAfterSectionEnd(row, col, row1, col1, hotTableObj) {
    if (curCell.row === row && curCell.col === col || row !== row1 || col !== col1) return;
    curCell.row = row;
    curCell.col = col;
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
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} amount Count of selected row
   * @param {Array} datarows Numbers of selected row
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */


  var handleRowRemove = function handleRowRemove(row, amount, dataRows, hotTableObj) {
    if (!hotTableObj) return;
    var toRemove = [];

    var _iterator = _createForOfIteratorHelper(dataRows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dataRow = _step.value;
        toRemove.push(hotTableObj === null || hotTableObj === void 0 ? void 0 : hotTableObj.getSourceDataAtRow(dataRow).id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (removingWithSupr) {
      setRemovingWithSupr(false);
    }

    setTimeout(function () {
      deleteProducts(toRemove);
    }, 1);
  };

  var handleItemChange = function handleItemChange(changeItems, accionHanson, hotTableObj) {
    if (undo) {
      setUndo(false);
      return;
    }

    if (accionHanson !== 'loadData') {
      changeItems = !changeItems ? [] : changeItems;
      var changes = [];
      var itemToRemove = [];
      var itemToUpdate = [];
      var itemToAdd = [];
      var id = categoryId || categorySelected.id;
      changeItems.forEach(function (item) {
        var error = {
          name: false,
          price: false
        };

        if (item[2] !== item[3]) {
          var valid = true;

          for (var j = 0; j < changes.length; j++) {
            if (changes[j] === item[0]) {
              valid = false;
              break;
            }
          }

          if (valid) {
            changes.push(item[0]);
            var row = hotTableObj.getSourceDataAtRow(item[0]);
            hotTableObj.validateRows(changes, function (res) {});

            if (!row.name) {
              error.name = true;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: [t('NAME_REQUIRED', 'Name Required')]
                }
              }));
            }

            if (row.price && typeof row.price !== 'number') {
              var price = parseFloat(row.price);

              if (!price) {
                error.price = true;
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  result: {
                    error: true,
                    result: [t('PRODUCT_PRICE_NUMBER')]
                  }
                }));
              } else row.price = price;
            }

            if (row.quantity && typeof row.quantity !== 'number' && row.quantity !== 'NA') {
              var quantity = parseFloat(row.quantity);

              if (!quantity) {
                error.quantity = true;
              } else row.quantity = quantity;
            }

            if (!row.id) {
              if (!(error.price || error.name || error.quantity)) {
                var _add = {
                  name: row.name,
                  description: row.description ? row.description : ' ',
                  price: row.price ? row.price : 0,
                  category_id: id,
                  business_id: business === null || business === void 0 ? void 0 : business.id
                };

                if (row.quantity && row.quantity !== 'NA' || row.quantity === 0) {
                  _add.quantity = row.quantity;
                  _add.inventoried = true;
                }

                itemToAdd.push(_add);
              }
            } else {
              if (!row.name && !row.price && !row.description) {
                row.row = item[0];
                itemToRemove.push(row);
              } else {
                if (!(error.price || error.name || error.quantity)) {
                  if (!row.description) row.description = null;
                  var _update = {
                    id: row.id,
                    name: row.name,
                    description: row.description ? row.description : ' ',
                    price: row.price ? row.price : 0,
                    category_id: id,
                    business_id: business === null || business === void 0 ? void 0 : business.id
                  };

                  if (row.quantity && row.quantity !== 'NA' || row.quantity === 0) {
                    _update.quantity = row.quantity;
                    _update.inventoried = true;
                  }

                  itemToUpdate.push(_update);
                }
              }
            }
          }
        }
      });

      if (itemToAdd.length > 0) {
        editProducts(itemToAdd, true, hotTableObj);
      }

      if (itemToUpdate.length > 0) {
        editProducts(itemToUpdate, false, hotTableObj);
      }

      if (itemToRemove.length > 0) {
        hotTableObj.alter('remove_row', itemToRemove[0].row, itemToRemove.length);
        setRemovingWithSupr(true);
      }
    }
  };

  var editProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(params, isPost, hotTableObj) {
      var requestOptions, functionFetch, response, _yield$response$json, error, result;

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
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              requestOptions = {
                method: isPost ? 'POST' : 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  products: JSON.stringify(params)
                })
              };
              functionFetch = "".concat(ordering.root, "/bulks/products");
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
                    result: isPost ? t('PRODUCT_CREATED', 'Product created') : t('PRODUCT_UPDATE', 'Product updated')
                  }
                }));
                showToast(_orderingComponentsAdmin.ToastType.Success, isPost ? t('PRODUCT_CREATED', 'Product created') : t('PRODUCT_UPDATE', 'Product updated'));
                getProductsByCategoryId();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context.next = 21;
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

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 18]]);
    }));

    return function editProducts(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to edit a product
   */


  var getProductsByCategoryId = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var id, params, _yield$ordering$busin, _yield$ordering$busin2, error, result, _categories;

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
              id = categoryId || categorySelected.id;
              params = {
                business_id: business === null || business === void 0 ? void 0 : business.id,
                category_id: parseInt(id)
              };
              _context2.next = 7;
              return ordering.businesses(business === null || business === void 0 ? void 0 : business.id).categories(parseInt(id)).products().parameters(params).get();

            case 7:
              _yield$ordering$busin = _context2.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (!error) {
                if (handleUpdateBusinessState) {
                  _categories = business === null || business === void 0 ? void 0 : business.categories.map(function (item) {
                    if (parseInt(item.id) === parseInt(id)) {
                      return _objectSpread(_objectSpread({}, item), {}, {
                        products: result
                      });
                    }

                    return item;
                  });
                  handleUpdateBusinessState(_objectSpread(_objectSpread({}, business), {}, {
                    categories: _categories
                  }));
                }

                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  products: result.map(function (product) {
                    var _product$tax, _business$tax, _product$fee, _product$fee2;

                    return _objectSpread(_objectSpread({}, product), {}, {
                      taxShow: !(product !== null && product !== void 0 && product.tax) ? taxShowbusiness : "".concat((_product$tax = product.tax) === null || _product$tax === void 0 ? void 0 : _product$tax.rate, "% ").concat(((_business$tax = business.tax) === null || _business$tax === void 0 ? void 0 : _business$tax.type) === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')),
                      feeShow: !product.fee ? feeShowbusiness : "".concat(parsePrice((_product$fee = product.fee) === null || _product$fee === void 0 ? void 0 : _product$fee.fixed), " + ").concat((_product$fee2 = product.fee) === null || _product$fee2 === void 0 ? void 0 : _product$fee2.percentage, "%")
                    });
                  }),
                  loading: false,
                  result: {
                    error: false,
                    result: t('PRODUCT_SAVED', 'Product saved')
                  }
                }));
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
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 14]]);
    }));

    return function getProductsByCategoryId() {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteProducts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(params) {
      var requestOptions, functionFetch, response, _yield$response$json2, error, result;

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
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  products: JSON.stringify(params)
                })
              };
              functionFetch = "".concat(ordering.root, "/bulks/products");
              _context3.next = 9;
              return fetch(functionFetch, requestOptions);

            case 9:
              response = _context3.sent;
              _context3.next = 12;
              return response.json();

            case 12:
              _yield$response$json2 = _context3.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: false,
                    result: t('PRODUCT_DELETED', 'Product deleted')
                  }
                }));
                showToast(_orderingComponentsAdmin.ToastType.Success, t('PRODUCT_DELETED', 'Product deleted'));
                getProductsByCategoryId();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  result: {
                    error: true,
                    result: result
                  }
                }));
              }

              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context3.t0.message
                },
                loading: false
              }));

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 18]]);
    }));

    return function deleteProducts(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var spreadProducts = [];

    var _iterator2 = _createForOfIteratorHelper(categoryState.products),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _product$tax2, _business$tax2, _product$fee3, _product$fee4;

        var product = _step2.value;
        var taxShow = !(product !== null && product !== void 0 && product.tax) ? taxShowbusiness : "".concat((_product$tax2 = product.tax) === null || _product$tax2 === void 0 ? void 0 : _product$tax2.rate, "% ").concat(((_business$tax2 = business.tax) === null || _business$tax2 === void 0 ? void 0 : _business$tax2.type) === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price'));
        var feeShow = !product.fee ? feeShowbusiness : "".concat(parsePrice((_product$fee3 = product.fee) === null || _product$fee3 === void 0 ? void 0 : _product$fee3.fixed), " + ").concat((_product$fee4 = product.fee) === null || _product$fee4 === void 0 ? void 0 : _product$fee4.percentage, "%");

        var _product = _objectSpread(_objectSpread({}, product), {}, {
          taxShow: taxShow,
          feeShow: feeShow
        });

        spreadProducts.push(_product);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      products: spreadProducts
    }));
  }, [categoryState === null || categoryState === void 0 ? void 0 : categoryState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleItemChange: handleItemChange,
    spreadSheetState: formState,
    handleRowRemove: handleRowRemove,
    handleAfterSectionEnd: handleAfterSectionEnd,
    handleoutsideClickDeselects: handleoutsideClickDeselects
  })));
};

exports.BusinessSpreadSheet = BusinessSpreadSheet;
BusinessSpreadSheet.propTypes = {
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
  setBusinessState: _propTypes.default.func,

  /**
    * Components types before single business card
    * Array of type components, the parent props will pass to these components
    */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after single business card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessSpreadSheet.defaultProps = {};