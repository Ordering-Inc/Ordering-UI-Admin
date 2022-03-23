"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignDetail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CampaignDetail = function CampaignDetail(props) {
  var _formState$changes6;

  var campaign = props.campaign,
      campaignList = props.campaignList,
      UIComponent = props.UIComponent,
      handleSuccessUpdateCampaign = props.handleSuccessUpdateCampaign,
      handleSuccessAddCampaign = props.handleSuccessAddCampaign,
      handleSuccessDeleteCampaign = props.handleSuccessDeleteCampaign;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _orderingComponentsAdmin.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useState = (0, _react.useState)({
    campaign: campaign,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      campaignState = _useState2[0],
      setCampaignState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAddMode = _useState6[0],
      setIsAddMode = _useState6[1];
  /**
   * Clean formState
   */


  var cleanFormState = function cleanFormState() {
    return setFormState({
      loading: false,
      changes: {}
    });
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, e.target.name, e.target.value))
    }));
  };
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeContactData = function handleChangeContactData(e) {
    var _formState$changes, _formState$changes2;

    var changes = (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.contact_data ? _objectSpread(_objectSpread({}, (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.contact_data), {}, _defineProperty({}, e.target.name, e.target.value)) : _defineProperty({}, e.target.name, e.target.value);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        contact_data: changes
      })
    }));
  };
  /**
   * Update parameter data
   * @param {string} key parameters to change
   * @param {string} value parameters to change
   */


  var handleChangeItem = function handleChangeItem(key, value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, _defineProperty({}, key, value))
    }));
  };
  /**
   * Method to remove the key of changes
   * @param {String} key
   */


  var handleRemoveKey = function handleRemoveKey(key) {
    var _changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);

    delete _changes[key];
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _changes
    }));
  };
  /**
   * Default fuction for recovery action workflow
   */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var changes, key, requestOptions, response, content, updatedCampaigns;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);

              for (key in changes) {
                if (_typeof(changes[key]) === 'object' && changes[key] !== null || Array.isArray(changes[key])) {
                  changes[key] = JSON.stringify(changes[key]);
                }
              }

              if (changes !== null && changes !== void 0 && changes.conditions) delete changes.conditions;
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 9;
              return fetch("".concat(ordering.root, "/marketing_campaigns/").concat(campaign.id), requestOptions);

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              content = _context.sent;

              if (!content.error) {
                setCampaignState(_objectSpread(_objectSpread({}, campaignState), {}, {
                  campaign: content.result
                }));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));

                if (handleSuccessUpdateCampaign) {
                  updatedCampaigns = campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns.filter(function (_action) {
                    if (_action.id === campaign.id) {
                      Object.assign(_action, content.result);
                    }

                    return true;
                  });
                  handleSuccessUpdateCampaign(updatedCampaigns);
                }

                cleanFormState();
                showToast(_orderingComponentsAdmin.ToastType.Success, t('CAMPAIGN_SAVED', 'Campaign saved'));
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
    }));

    return function handleUpdateClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to add new campaign from API
   */


  var handleAddCampaign = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var changes, key, requestOptions, response, content;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);

              for (key in changes) {
                if (_typeof(changes[key]) === 'object' && changes[key] !== null || Array.isArray(changes[key])) {
                  changes[key] = JSON.stringify(changes[key]);
                }
              }

              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context2.next = 8;
              return fetch("".concat(ordering.root, "/marketing_campaigns"), requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              content = _context2.sent;

              if (!content.error) {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null
                }));
                handleSuccessAddCampaign && handleSuccessAddCampaign(content.result);
                showToast(_orderingComponentsAdmin.ToastType.Success, t('CAMPAIGN_ADDED', 'Campaign added'));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function handleAddCampaign() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to delete a campaign
   */


  var handleDeleteCampaign = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context3.next = 6;
              return fetch("".concat(ordering.root, "/marketing_campaigns/").concat(campaign.id), requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                handleSuccessDeleteCampaign && handleSuccessDeleteCampaign(campaign.id);
                showToast(_orderingComponentsAdmin.ToastType.Success, t('CAMPAIGN_DELETED', 'Campaign deleted'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null
                }));
                props.onClose && props.onClose();
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function handleDeleteCampaign() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to delete a campaign
   */


  var handleDeleteCondition = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(conditionId) {
      var requestOptions, response, content, updatedCampaigns;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context4.next = 6;
              return fetch("".concat(ordering.root, "/marketing_campaigns/").concat(campaign.id, "/conditions/").concat(conditionId), requestOptions);

            case 6:
              response = _context4.sent;
              _context4.next = 9;
              return response.json();

            case 9:
              content = _context4.sent;

              if (!content.error) {
                showToast(_orderingComponentsAdmin.ToastType.Success, t('CONDITION_DELETED', 'Condition deleted'));
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: null
                }));

                if (handleSuccessUpdateCampaign) {
                  updatedCampaigns = campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns.map(function (_action) {
                    if (_action.id === campaign.id) {
                      var conditions = _action.conditions.filter(function (item) {
                        return item.id !== content.result;
                      });

                      return _objectSpread(_objectSpread({}, _action), {}, {
                        conditions: conditions
                      });
                    }

                    return _action;
                  });
                  handleSuccessUpdateCampaign(updatedCampaigns);
                }
              } else {
                setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleDeleteCondition(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (Object.keys(campaign).length === 0) {
      setIsAddMode(true);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: {
          enabled: true,
          conditions: []
        }
      }));
    } else {
      setIsAddMode(false);
      cleanFormState();
    }

    setCampaignState(_objectSpread(_objectSpread({}, campaignState), {}, {
      campaign: campaign
    }));
  }, [campaign]);
  (0, _react.useEffect)(function () {
    var _formState$changes3, _formState$changes4;

    if (!((_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.audience_type)) return;

    if (((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.audience_type) === 'dynamic') {
      var _ref6, _formState$changes$en, _formState$changes5;

      var changes = _objectSpread(_objectSpread({}, formState.changes), {}, {
        end_at: (_ref6 = (_formState$changes$en = (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.end_at) !== null && _formState$changes$en !== void 0 ? _formState$changes$en : campaign === null || campaign === void 0 ? void 0 : campaign.end_at) !== null && _ref6 !== void 0 ? _ref6 : (0, _moment.default)(new Date()).format('YYYY-MM-DD HH:mm:ss')
      });

      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: changes
      }));
    }
  }, [(_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.audience_type]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAddMode: isAddMode,
    campaignState: campaignState,
    formState: formState,
    handleChangeItem: handleChangeItem,
    handleChangeInput: handleChangeInput,
    handleAddCampaign: handleAddCampaign,
    handleDeleteCampaign: handleDeleteCampaign,
    handleUpdateClick: handleUpdateClick,
    handleRemoveKey: handleRemoveKey,
    handleChangeContactData: handleChangeContactData,
    setCampaignState: setCampaignState,
    handleDeleteCondition: handleDeleteCondition
  })));
};

exports.CampaignDetail = CampaignDetail;
CampaignDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before enterprise promotion details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Components types after enterprise promotion details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
  * Elements before enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
  * Elements after enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
CampaignDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};