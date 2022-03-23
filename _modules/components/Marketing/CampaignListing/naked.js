"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignListing = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CampaignListing = function CampaignListing(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings,
      isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)({
    campaigns: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      campaignList = _useState4[0],
      setCampaignList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    clear: false,
    changes: {}
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      filterValues = _useState6[0],
      setFilterValues = _useState6[1];

  var _useState7 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      paginationProps = _useState8[0],
      setPaginationProps = _useState8[1];
  /**
   * Change text to search
   * @param {string} search Search value
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  /**
   * Method to get the sites from API
   */


  var getCampaignList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page, pageSize) {
      var where, conditions, searchConditions, requestOptions, fetchEndpoint, response, content;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCampaignList(_objectSpread(_objectSpread({}, campaignList), {}, {
                loading: true
              }));
              where = null;
              conditions = [];

              if (searchValue) {
                searchConditions = [];

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

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
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
              fetchEndpoint = where ? "".concat(ordering.root, "/marketing_campaigns?page=").concat(page, "&page_size=").concat(pageSize, "&&where=").concat(JSON.stringify(where)) : "".concat(ordering.root, "/marketing_campaigns?page=").concat(page, "&page_size=").concat(pageSize);
              _context.next = 10;
              return fetch(fetchEndpoint, requestOptions);

            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();

            case 13:
              content = _context.sent;

              if (!content.error) {
                setCampaignList({
                  loading: false,
                  campaigns: content.result,
                  error: null
                });
                setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                  currentPage: content.pagination.current_page,
                  totalPages: content.pagination.total_pages,
                  totalItems: content.pagination.total,
                  from: content.pagination.from,
                  to: content.pagination.to
                }));
              } else {
                setCampaignList(_objectSpread(_objectSpread({}, campaignList), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              setCampaignList(_objectSpread(_objectSpread({}, campaignList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    return function getCampaignList(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Default fuction for campaign workflow
   */


  var handleUpdateCampaign = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id, changes) {
      var requestOptions, response, content, updatedCampaigns;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/marketing_campaigns/").concat(id), requestOptions);

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              content = _context2.sent;

              if (!content.error) {
                if (handleSuccessUpdateCampaign) {
                  updatedCampaigns = campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns.filter(function (_action) {
                    if (_action.id === id) {
                      Object.assign(_action, content.result);
                    }

                    return true;
                  });
                  handleSuccessUpdateCampaign(updatedCampaigns);
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CAMPAIGN_SAVED', 'Campaign saved'));
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.message);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function handleUpdateCampaign(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to add the campaign in the campaign list
   * @param {Object} result campaign to add
   */


  var handleSuccessAddCampaign = function handleSuccessAddCampaign(result) {
    var campaigns = [].concat(_toConsumableArray(campaignList.campaigns), [result]);
    setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
      to: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.to) + 1,
      total: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.total) + 1
    }));
    setCampaignList(_objectSpread(_objectSpread({}, campaignList), {}, {
      campaigns: campaigns
    }));
  };
  /**
   * Method to update the campaign list
   */


  var handleSuccessUpdateCampaign = function handleSuccessUpdateCampaign(result) {
    setCampaignList(_objectSpread(_objectSpread({}, campaignList), {}, {
      campaigns: result
    }));
  };
  /**
   * Method to delete the campaign in the campaign list
   * @param {Number} campaignId campaign to delete
   */


  var handleSuccessDeleteCampaign = function handleSuccessDeleteCampaign(campaignId) {
    var filteredCampaigns = campaignList.campaigns.filter(function (campaign) {
      return campaign.id !== campaignId;
    });
    setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
      total: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.total) - 1
    }));
    setCampaignList(_objectSpread(_objectSpread({}, campaignList), {}, {
      campaigns: filteredCampaigns
    }));
  };

  (0, _react.useEffect)(function () {
    if (campaignList.loading) return;
    getCampaignList(1, paginationProps.pageSize);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    if ((Object.keys(filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes).length > 0 || filterValues.clear) && !campaignList.loading) getCampaignList(1, paginationProps.pageSize);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    searchValue: searchValue,
    paginationProps: paginationProps,
    campaignList: campaignList,
    getCampaignList: getCampaignList,
    setFilterValues: setFilterValues,
    setPaginationProps: setPaginationProps,
    handleChangeSearch: handleChangeSearch,
    handleUpdateCampaign: handleUpdateCampaign,
    handleSuccessAddCampaign: handleSuccessAddCampaign,
    handleSuccessUpdateCampaign: handleSuccessUpdateCampaign,
    handleSuccessDeleteCampaign: handleSuccessDeleteCampaign
  })));
};

exports.CampaignListing = CampaignListing;
CampaignListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
CampaignListing.defaultProps = {
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