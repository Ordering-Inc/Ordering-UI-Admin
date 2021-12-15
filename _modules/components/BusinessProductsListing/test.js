"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;

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

var BusinessProductsListing = function BusinessProductsListing(props) {
  var _businessState$busine5;

  var isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription,
      slug = props.slug,
      categoryId = props.categoryId,
      productId = props.productId,
      isAllCategoryProducts = props.isAllCategoryProducts,
      isInitialRender = props.isInitialRender,
      ordering = props.ordering,
      UIComponent = props.UIComponent;

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      categorySelected = _useState2[0],
      setCategorySelected = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var _useState5 = (0, _react.useState)({
    business: {},
    menus: null,
    loading: true,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      businessState = _useState6[0],
      setBusinessState = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      categoriesState = _useState8[0],
      setCategoriesState = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      requestsState = _useState10[0],
      setRequestsState = _useState10[1];

  var _useState11 = (0, _react.useState)({
    product: null,
    loading: false,
    error: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      productModal = _useState12[0],
      setProductModal = _useState12[1];

  var _useState13 = (0, _react.useState)({
    values: []
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      openCategories = _useState14[0],
      setOpenCategories = _useState14[1];

  var _useState15 = (0, _react.useState)(slug),
      _useState16 = _slicedToArray(_useState15, 2),
      businessSlug = _useState16[0],
      setBusinessSlug = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isUpdateMode = _useState18[0],
      setIsUpdateMode = _useState18[1];

  var _useState19 = (0, _react.useState)({}),
      _useState20 = _slicedToArray(_useState19, 2),
      taxes = _useState20[0],
      setTaxes = _useState20[1];

  var _useState21 = (0, _react.useState)({}),
      _useState22 = _slicedToArray(_useState21, 2),
      fees = _useState22[0],
      setFees = _useState22[1];

  var _useState23 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      formTaxState = _useState24[0],
      setFormTaxState = _useState24[1];

  var _useState25 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      formFeeState = _useState26[0],
      setFormFeeState = _useState26[1];

  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 20,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };

  var _useState27 = (0, _react.useState)(categoryStateDefault),
      _useState28 = _slicedToArray(_useState27, 2),
      categoryState = _useState28[0],
      setCategoryState = _useState28[1];

  var _useState29 = (0, _react.useState)(null),
      _useState30 = _slicedToArray(_useState29, 2),
      errors = _useState30[0],
      setErrors = _useState30[1];

  var _useState31 = (0, _react.useState)(false),
      _useState32 = _slicedToArray(_useState31, 2),
      errorQuantityProducts = _useState32[0],
      setErrorQuantityProducts = _useState32[1];
  /**
   * Change category selected
   * @param {Object} category Category object
   */


  var handleChangeCategory = function handleChangeCategory(e, category) {
    var _e$target, _e$target2, _category$subcategori;

    if (e === null && category === null) {
      setCategorySelected(null);
    }

    var isInvalid = (e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest) && ((e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.closest('.business_enable_control')) || e.target.closest('.business_actions'));
    if (isInvalid || (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) return;
    setIsUpdateMode(false);

    if (category !== null && category !== void 0 && (_category$subcategori = category.subcategories) !== null && _category$subcategori !== void 0 && _category$subcategori.length) {
      if (!(category !== null && category !== void 0 && category.parent_category_id)) {
        openCategories.values = [];
      }

      if (openCategories.values.includes(category.id)) {
        openCategories.values = openCategories.values.filter(function (categoryId) {
          return categoryId !== category.id;
        });
      } else {
        openCategories.values.push(category.id);
      }

      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: openCategories.values
      }));
    }

    if ((category === null || category === void 0 ? void 0 : category.id) === null) {
      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: []
      }));
    }

    setCategorySelected(category);
  };
  /**
   * Change search value
   * @param {string} search search string
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };

  var isMatchSearch = function isMatchSearch(name, description) {
    if (!searchValue) return true;
    return name && name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || description && description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
  };

  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newFetch) {
      var _businessState$busine;

      var _categoryState, _businessState$busine2, _categoryFiltered, _categoryFiltered$pro, categoryFiltered, _categories, productsFiltered, _categorySelected$pro, _businessState$busine3, _businessState$busine4, _productsFiltered, categoryKey, categoryState, pagination, parameters, where, searchConditions, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.lazy_load_products_recommended) {
                _context.next = 5;
                break;
              }

              _categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
                loading: false
              });

              if (categorySelected) {
                _categories = _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.categories);

                _categories.forEach(function iterate(category) {
                  if (category.id === categorySelected.id) {
                    categoryFiltered = category;
                  }

                  Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                });

                productsFiltered = (_categoryFiltered = categoryFiltered) === null || _categoryFiltered === void 0 ? void 0 : (_categoryFiltered$pro = _categoryFiltered.products) === null || _categoryFiltered$pro === void 0 ? void 0 : _categoryFiltered$pro.filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });

                if (!productsFiltered) {
                  productsFiltered = categorySelected === null || categorySelected === void 0 ? void 0 : (_categorySelected$pro = categorySelected.products) === null || _categorySelected$pro === void 0 ? void 0 : _categorySelected$pro.filter(function (product) {
                    return isMatchSearch(product.name, product.description);
                  });
                }

                _categoryState.products = productsFiltered || [];
              } else {
                _productsFiltered = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : (_businessState$busine4 = _businessState$busine3.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.reduce(function (products, category) {
                  if (category.products) {
                    return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                  }

                  return _toConsumableArray(products);
                }, []).filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
                _categoryState.products = _productsFiltered || [];
              }

              setCategoryState(_objectSpread({}, _categoryState));
              return _context.abrupt("return");

            case 5:
              categoryKey = searchValue ? 'search' : categorySelected.id === 'featured' ? 'featured' : categorySelected.id ? "categoryId:".concat(categorySelected.id) : 'all';
              categoryState = categoriesState[categoryKey] || categoryStateDefault;
              pagination = categoryState.pagination;

              if (!(!newFetch && pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages)) {
                _context.next = 11;
                break;
              }

              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: false
              }));
              return _context.abrupt("return");

            case 11:
              if (!isUpdateMode) {
                setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                  loading: true
                }));
              }

              parameters = {
                page: newFetch ? 1 : pagination.currentPage + 1,
                page_size: pagination.pageSize
              };
              where = null;
              searchConditions = [];

              if (searchValue) {
                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByDescription) {
                  searchConditions.push({
                    attribute: 'description',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
              }

              where = {
                conditions: searchConditions,
                conector: 'OR'
              };
              _context.prev = 17;
              functionFetch = categorySelected.id && categorySelected.id !== 'featured' ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products() : ordering.businesses(businessState.business.id).products();
              source = {};
              requestsState.products = source;
              setRequestsState(_objectSpread({}, requestsState));
              productEndpoint = where.conditions.length > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
              _context.next = 25;
              return productEndpoint.get({
                cancelToken: source
              });

            case 25:
              _yield$productEndpoin = _context.sent;
              _yield$productEndpoin2 = _yield$productEndpoin.content;
              error = _yield$productEndpoin2.error;
              result = _yield$productEndpoin2.result;
              _pagination = _yield$productEndpoin2.pagination;

              if (!error) {
                newcategoryState = {
                  pagination: _objectSpread(_objectSpread({}, categoryState.pagination), {}, {
                    currentPage: _pagination.current_page,
                    totalItems: _pagination.total,
                    totalPages: _pagination.total_pages
                  }),
                  loading: false,
                  products: newFetch ? _toConsumableArray(result) : [].concat(_toConsumableArray(categoryState.products), _toConsumableArray(result))
                };
                categoriesState[categoryKey] = newcategoryState;
                setCategoryState(_objectSpread({}, newcategoryState));
                setCategoriesState(_objectSpread({}, categoriesState));
              } else {
                setErrors(result);
              }

              _context.next = 36;
              break;

            case 33:
              _context.prev = 33;
              _context.t0 = _context["catch"](17);
              setErrors([_context.t0.message]);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[17, 33]]);
    }));

    return function getProducts(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var source, _yield$ordering$busin, result, product;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(categoryId && productId && businessState.business.id)) {
                _context2.next = 16;
                break;
              }

              _context2.prev = 1;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: true
              }));
              source = {};
              requestsState.product = source;
              _context2.next = 7;
              return ordering.businesses(businessState.business.id).categories(categoryId).products(productId).get({
                cancelToken: source
              });

            case 7:
              _yield$ordering$busin = _context2.sent;
              result = _yield$ordering$busin.content.result;
              product = Array.isArray(result) ? null : result;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                product: product,
                loading: false
              }));
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: false,
                error: [_context2.t0]
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 13]]);
    }));

    return function getProduct() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getTaxes = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var taxesObject, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              taxesObject = {};
              setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
                loading: true
              }));
              _context3.next = 4;
              return fetch("".concat(ordering.root, "/taxes"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(auth)
                }
              });

            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context3.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (error) {
                _context3.next = 14;
                break;
              }

              result.forEach(function (tax) {
                return taxesObject["id:".concat(tax.id)] = tax;
              });
              setTaxes(taxesObject);
              return _context3.abrupt("return");

            case 14:
              setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
                result: {
                  error: true,
                  result: taxesObject
                },
                loading: false
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getTaxes() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getFees = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var feesObject, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              feesObject = {};
              setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
                loading: true
              }));
              _context4.next = 4;
              return fetch("".concat(ordering.root, "/fees"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(auth)
                }
              });

            case 4:
              response = _context4.sent;
              _context4.next = 7;
              return response.json();

            case 7:
              _yield$response$json2 = _context4.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (error) {
                _context4.next = 14;
                break;
              }

              result.forEach(function (fee) {
                return feesObject["id:".concat(fee.id)] = fee;
              });
              setFees(feesObject);
              return _context4.abrupt("return");

            case 14:
              setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
                result: {
                  error: true,
                  result: feesObject
                },
                loading: false
              }));

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getFees() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id), isInitialRender]);

  var getBusiness = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var _result$categories, source, _yield$ordering$busin2, result;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              source = {};
              requestsState.business = source;
              setRequestsState(_objectSpread({}, requestsState));
              _context5.next = 7;
              return ordering.businesses(businessSlug).asDashboard().get();

            case 7:
              _yield$ordering$busin2 = _context5.sent;
              result = _yield$ordering$busin2.content.result;

              if (!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 ? void 0 : (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0) {
                setErrorQuantityProducts(true);
              }

              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: result,
                loading: false
              }));
              _context5.next = 16;
              break;

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 13]]);
    }));

    return function getBusiness() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to update the business
   */


  var handleUpdateBusinessState = function handleUpdateBusinessState(result) {
    setIsUpdateMode(true);

    var business = _objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business);

    Object.assign(business, result);
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  };
  /**
   * Method to update the category state
   */


  var handleUpdateCategoryState = function handleUpdateCategoryState(updatedCategory) {
    setCategoryState(updatedCategory);
  };

  var handleUpdateTaxesProducts = function handleUpdateTaxesProducts(_ref6) {
    var _businessState$busine6;

    var tax = _ref6.tax,
        isRemove = _ref6.isRemove,
        id = _ref6.id;

    var _categories = _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.categories);

    var replaceSameTaxes = function replaceSameTaxes(categories, tax) {
      for (var i = 0; i < (categories === null || categories === void 0 ? void 0 : categories.length); i++) {
        var _category$subcategori2;

        var category = categories[i];

        for (var j = 0; j < category.products.length; j++) {
          var _product$tax, _product$tax2;

          var product = category.products[j];

          if (isRemove && ((_product$tax = product.tax) === null || _product$tax === void 0 ? void 0 : _product$tax.id) === tax.id) {
            product.tax = null;
            product.tax_id = null;
          } else if (product.tax && ((_product$tax2 = product.tax) === null || _product$tax2 === void 0 ? void 0 : _product$tax2.id) === tax.id) {
            Object.assign(product.tax, tax);
            product.tax_id = tax.id;
          }
        }

        if (((_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0) {
          categories.subcategories = replaceSameTaxes(categories.subcategories, tax);
        }
      }

      return categories;
    };

    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: replaceSameTaxes(_categories, tax)
      })
    }));
  };

  var handleUpdateFeesProducts = function handleUpdateFeesProducts(_ref7) {
    var _businessState$busine7;

    var fee = _ref7.fee,
        isRemove = _ref7.isRemove;

    var _categories = _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.categories);

    var replaceSameFees = function replaceSameFees(categories, fee) {
      for (var i = 0; i < (categories === null || categories === void 0 ? void 0 : categories.length); i++) {
        var _category$subcategori3;

        var category = categories[i];

        for (var j = 0; j < category.products.length; j++) {
          var _product$fee, _product$fee2;

          var product = category.products[j];

          if (isRemove && ((_product$fee = product.fee) === null || _product$fee === void 0 ? void 0 : _product$fee.id) === fee.id) {
            product.fee = null;
            product.fee_id = null;
          } else if (product.fee && ((_product$fee2 = product.fee) === null || _product$fee2 === void 0 ? void 0 : _product$fee2.id) === fee.id) {
            Object.assign(product.fee, fee);
            product.fee_id = fee.id;
          }
        }

        if (((_category$subcategori3 = category.subcategories) === null || _category$subcategori3 === void 0 ? void 0 : _category$subcategori3.length) > 0) {
          categories.subcategories = replaceSameFees(categories.subcategories, fee);
        }
      }

      return categories;
    };

    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: replaceSameFees(_categories, fee)
      })
    }));
  };

  (0, _react.useEffect)(function () {
    var _businessState$busine8;

    if (businessState.loading) return;

    if (!businessState.loading && (categorySelected || isAllCategoryProducts)) {
      getProducts(true);
    } else if (businessState !== null && businessState !== void 0 && (_businessState$busine8 = businessState.business) !== null && _businessState$busine8 !== void 0 && _businessState$busine8.categories) {
      var _businessState$busine9;

      setCategorySelected(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.categories[0]);
    }
  }, [businessState]);
  (0, _react.useEffect)(function () {
    if (searchValue !== null) getProducts(!!searchValue);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id]);
  (0, _react.useEffect)(function () {
    if (businessSlug) {
      getBusiness();
    }
  }, [businessSlug]);
  (0, _react.useEffect)(function () {
    var _Object$keys;

    if (((_Object$keys = Object.keys(businessState === null || businessState === void 0 ? void 0 : businessState.business)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      events.on('tax_changed', handleUpdateTaxesProducts);
      events.on('fee_changed', handleUpdateFeesProducts);
      events.on('tax_deleted', handleUpdateTaxesProducts);
      events.on('fee_deleted', handleUpdateFeesProducts);
      return function () {
        events.off('tax_changed', handleUpdateTaxesProducts);
        events.off('fee_changed', handleUpdateFeesProducts);
        events.off('tax_deleted', handleUpdateFeesProducts);
        events.off('fee_deleted', handleUpdateFeesProducts);
      };
    }
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  /**
   * Cancel business request
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.business]);
  /**
   * Cancel products request on unmount and pagination
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.products]);
  (0, _react.useEffect)(function () {
    getTaxes();
    getFees();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    errorQuantityProducts: errorQuantityProducts,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    getNextProducts: getProducts,
    setCategorySelected: setCategorySelected,
    setBusinessState: setBusinessState,
    handleUpdateBusinessState: handleUpdateBusinessState,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    },
    openCategories: openCategories.values,
    setOpenCategories: setOpenCategories,
    setBusinessSlug: setBusinessSlug,
    handleUpdateCategoryState: handleUpdateCategoryState,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees
  })));
};

exports.BusinessProductsListing = BusinessProductsListing;
BusinessProductsListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * true, flag to decide search parmeter
   */
  isSearchByName: _propTypes.default.bool,

  /**
   * true, flag to decide search parmeter
   */
  isSearchByDescription: _propTypes.default.bool,

  /**
   * Slug from Store
   */
  slug: _propTypes.default.string,

  /**
   * True, flag to make initial API call
   */
  isInitialRender: _propTypes.default.bool
};
BusinessProductsListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};