"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCartListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var OpenCartListing = function OpenCartListing(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      isSearchByCartId = props.isSearchByCartId,
      isSearchByCityName = props.isSearchByCityName,
      paginationSettings = props.paginationSettings;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var requestsState = {};

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      filterValues = _useState4[0],
      setFilterValues = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      startMulitOrderDelete = _useState6[0],
      setStartMulitOrderDelete = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionStatus = _useState8[0],
      setActionStatus = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      deletedCartId = _useState10[0],
      setDeletedCartId = _useState10[1];

  var _useState11 = (0, _react.useState)({
    loading: false,
    carts: [],
    error: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      cartList = _useState12[0],
      setCartList = _useState12[1];

  var _useState13 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      pagination = _useState14[0],
      setPagination = _useState14[1];
  /**
   * Object to save businesses
   */


  var _useState15 = (0, _react.useState)({
    businesses: [],
    loading: true,
    error: null
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      businessesList = _useState16[0],
      setBusinessesList = _useState16[1];
  /**
   * Array to save the cities
   */


  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      citiesList = _useState18[0],
      setCitiesList = _useState18[1];
  /**
   * Object to save selected cart ids
   */


  var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      selectedCartIds = _useState20[0],
      setSelectedCartIds = _useState20[1];
  /**
   * Save ids of carts selected
   * @param {string} cartId cart id
   */


  var handleSelectedCartIds = function handleSelectedCartIds(cartId) {
    var _ids = _toConsumableArray(selectedCartIds);

    if (!_ids.includes(cartId)) {
      _ids.push(cartId);
    } else {
      _ids = _ids.filter(function (_id) {
        return _id !== cartId;
      });
    }

    setSelectedCartIds(_ids);
  };
  /**
   * Remove id of cart updated or delected
   * @param {string} cartId cart id
   */


  var handleRemoveSelectedCartId = function handleRemoveSelectedCartId(cartId) {
    var _ids = _toConsumableArray(selectedCartIds);

    _ids = _ids.filter(function (_id) {
      return _id !== cartId;
    });
    setSelectedCartIds(_ids);
  };
  /**
   * Change text to search
   * @param {string} search Search value
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  /**
   * Save filter type values
   * @param {object} types
   */


  var handleChangeFilterValues = function handleChangeFilterValues(types) {
    setFilterValues(types);
  };
  /**
   * Delete carts for carts selected
   */


  var handleDeleteMultiCarts = function handleDeleteMultiCarts() {
    setStartMulitOrderDelete(true);
  };
  /**
   * Method to delete order from API
   */


  var deleteCart = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
      var source, requestOptions, response, content, _cartIds;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.deleteOrder = source;
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context.next = 7;
              return fetch("".concat(ordering.root, "/carts/dashboard/").concat(id), requestOptions);

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              content = _context.sent;

              if (!content.error) {
                setDeletedCartId(id);
                _cartIds = _toConsumableArray(setSelectedCartIds);

                _cartIds.shift();

                if (_cartIds.length === 0) {
                  setStartMulitOrderDelete(false);
                }

                setSelectedCartIds(_cartIds);
              }

              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context.t0.message]
              });
              setStartMulitOrderDelete(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function deleteCart(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getControlsOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/controls/orders"), requestOptions);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              content = _context2.sent;

              if (!content.error) {
                setCitiesList(content.result.cities);
                setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                  loading: false,
                  businesses: content.result.businesses
                }));
              } else {
                setActionStatus({
                  loading: false,
                  error: content === null || content === void 0 ? void 0 : content.result
                });
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context2.t0.message]
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function getControlsOrders() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get cartlist from API
   * @param {number} page page number
   */


  var getCartList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(pageSize, page) {
      var where, conditions, searchConditions, filterConditons, requestOptions, fetchEndpoint, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setCartList(_objectSpread(_objectSpread({}, cartList), {}, {
                loading: true
              }));
              where = null;
              conditions = [];

              if (searchValue) {
                searchConditions = [];

                if (isSearchByCartId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByCityName) {
                  searchConditions.push({
                    attribute: 'city',
                    conditions: [{
                      attribute: 'name',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (Object.keys(filterValues).length) {
                filterConditons = [];

                if (filterValues !== null && filterValues !== void 0 && filterValues.cartId) {
                  filterConditons.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.cartId, "%"))
                    }
                  });
                }

                if (filterValues.deliveryFromDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '>=',
                      value: encodeURI(filterValues.deliveryFromDatetime)
                    }
                  });
                }

                if (filterValues.deliveryEndDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '<=',
                      value: filterValues.deliveryEndDatetime
                    }
                  });
                }

                if (filterValues.businessIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'business_id',
                    value: filterValues.businessIds
                  });
                }

                if (filterValues.customerIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'user_id',
                    value: filterValues.customerIds
                  });
                }

                if (filterValues.cityIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'city_id',
                    value: filterValues.cityIds
                  });
                }

                if (filterConditons.length) {
                  conditions.push({
                    conector: 'AND',
                    conditions: filterConditons
                  });
                }
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              fetchEndpoint = where ? "".concat(ordering.root, "/carts/dashboard?page=").concat(page, "&page_size=").concat(pageSize, "&where=").concat(JSON.stringify(where)) : "".concat(ordering.root, "/carts/dashboard?page=").concat(page, "&page_size=").concat(pageSize);
              _context3.next = 11;
              return fetch(fetchEndpoint, requestOptions);

            case 11:
              response = _context3.sent;
              _context3.next = 14;
              return response.json();

            case 14:
              content = _context3.sent;

              if (!content.error) {
                setCartList({
                  loading: false,
                  carts: content.result,
                  error: null
                });
                setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
                  currentPage: content.pagination.current_page,
                  totalPages: content.pagination.total_pages,
                  totalItems: content.pagination.total,
                  from: content.pagination.from,
                  to: content.pagination.to
                }));
              } else {
                setCartList(_objectSpread(_objectSpread({}, cartList), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);
              setCartList(_objectSpread(_objectSpread({}, cartList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 18]]);
    }));

    return function getCartList(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
  * Listening mulit carts delete action start
  */


  (0, _react.useEffect)(function () {
    if (!startMulitOrderDelete || setSelectedCartIds.length === 0) return;
    deleteCart(setSelectedCartIds[0]);
  }, [setSelectedCartIds, startMulitOrderDelete]);
  (0, _react.useEffect)(function () {
    if (loading) return;
    getControlsOrders();
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, [user, loading]);
  (0, _react.useEffect)(function () {
    if (cartList.loading) return;
    getCartList(pagination.pageSize, 1);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    if (Object.keys(filterValues).length > 0 && !cartList.loading) getCartList(pagination.pageSize, 1);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    searchValue: searchValue,
    businessesList: businessesList,
    citiesList: citiesList,
    filterValues: filterValues,
    selectedCartIds: selectedCartIds,
    deletedCartId: deletedCartId,
    startMulitOrderDelete: startMulitOrderDelete,
    handleSelectedCartIds: handleSelectedCartIds,
    handleRemoveSelectedCartId: handleRemoveSelectedCartId,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    handleDeleteMultiCarts: handleDeleteMultiCarts,
    setSelectedCartIds: setSelectedCartIds,
    getCartList: getCartList,
    pagination: pagination,
    cartList: cartList
  })));
};

exports.OpenCartListing = OpenCartListing;
OpenCartListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before my carts
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my carts
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my carts
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my carts
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OpenCartListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};