"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignSignUpOption = void 0;

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

var CampaignSignUpOption = function CampaignSignUpOption(props) {
  var campaignState = props.campaignState,
      campaignList = props.campaignList,
      UIComponent = props.UIComponent,
      handleSuccessUpdateCampaign = props.handleSuccessUpdateCampaign,
      type = props.type,
      isAddMode = props.isAddMode,
      setCampaignState = props.setCampaignState,
      formState = props.formState;

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
    loading: false,
    changes: {},
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      ruleFormState = _useState2[0],
      setRuleFormState = _useState2[1];
  /**
   * Update credential data
   */


  var handleChangeValue = function handleChangeValue(name, value) {
    if (name === 'condition') {
      var _objectSpread2;

      var _changes = _objectSpread(_objectSpread({}, ruleFormState.changes), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, name, value), _defineProperty(_objectSpread2, "value", null), _objectSpread2));

      setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
        changes: _changes
      }));
      return;
    }

    var changes = _objectSpread(_objectSpread({}, ruleFormState.changes), {}, _defineProperty({}, name, parseInt(value)));

    setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
      changes: changes
    }));
  };

  var handleChangeDate = function handleChangeDate(date1, date2) {
    var changes = _objectSpread(_objectSpread({}, ruleFormState.changes), {}, {
      date: "".concat(date1, " 00:00:00"),
      max_date: "".concat(date2, " 00:00:00")
    });

    setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
      changes: changes
    }));
  };

  var handleChangeDateTime = function handleChangeDateTime(value) {
    var changes = _objectSpread(_objectSpread({}, ruleFormState.changes), {}, {
      date: value
    });

    setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
      changes: changes
    }));
  };

  var handleChangeOption = function handleChangeOption(index) {
    var changes = _objectSpread(_objectSpread({}, ruleFormState.changes), {}, {
      date_condition: index,
      date: null
    });

    setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
      changes: changes
    }));
  };
  /**
   * Default fuction for recovery action workflow
   */


  var handleUpdateRule = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var changes, key, requestOptions, response, content, updatedCampaigns;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                loading: true,
                error: null
              }));
              changes = _objectSpread({}, ruleFormState === null || ruleFormState === void 0 ? void 0 : ruleFormState.changes);

              for (key in changes) {
                if (_typeof(changes[key]) === 'object' && changes[key] !== null || Array.isArray(changes[key])) {
                  changes[key] = JSON.stringify(changes[key]);
                }
              }

              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(changes)
              };
              _context.next = 8;
              return fetch("".concat(ordering.root, "/marketing_campaigns/").concat(campaignState === null || campaignState === void 0 ? void 0 : campaignState.campaign.id, "/conditions/").concat(ruleFormState.changes.id), requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              content = _context.sent;

              if (!content.error) {
                setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));

                if (handleSuccessUpdateCampaign) {
                  updatedCampaigns = campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns.map(function (_action) {
                    if (_action.id === (campaignState === null || campaignState === void 0 ? void 0 : campaignState.campaign.id)) {
                      var found = _action.conditions.find(function (item) {
                        return item.id === content.result.id;
                      });

                      var updatedConditions = [];

                      if (found) {
                        updatedConditions = _action.conditions.filter(function (item) {
                          return item.id !== content.result.id;
                        });
                      }

                      updatedConditions.push(content.result);
                      setCampaignState(_objectSpread(_objectSpread({}, campaignState), {}, {
                        campaign: _objectSpread(_objectSpread({}, _action), {}, {
                          conditions: updatedConditions
                        })
                      }));
                      return _objectSpread(_objectSpread({}, _action), {}, {
                        conditions: updatedConditions
                      });
                    }

                    return _action;
                  });
                  handleSuccessUpdateCampaign(updatedCampaigns);
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CONDITION_SAVED', 'Condition saved'));
              } else {
                setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function handleUpdateRule() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Default fuction for recovery action workflow
   */


  var handleAddRule = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var changes, key, requestOptions, response, content, updatedCampaigns;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              showToast(_orderingComponentsAdmin.ToastType.Info, t('LOADING', 'Loading'));
              setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                loading: true,
                error: null
              }));
              changes = _objectSpread({}, ruleFormState === null || ruleFormState === void 0 ? void 0 : ruleFormState.changes);

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
              return fetch("".concat(ordering.root, "/marketing_campaigns/").concat(campaignState === null || campaignState === void 0 ? void 0 : campaignState.campaign.id, "/conditions"), requestOptions);

            case 8:
              response = _context2.sent;
              _context2.next = 11;
              return response.json();

            case 11:
              content = _context2.sent;

              if (!content.error) {
                setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                  loading: false,
                  error: null,
                  changes: {}
                }));

                if (handleSuccessUpdateCampaign) {
                  updatedCampaigns = campaignList === null || campaignList === void 0 ? void 0 : campaignList.campaigns.map(function (_action) {
                    if (_action.id === (campaignState === null || campaignState === void 0 ? void 0 : campaignState.campaign.id)) {
                      var updatedConditions = _toConsumableArray(_action.conditions);

                      updatedConditions.push(content.result);
                      setCampaignState(_objectSpread(_objectSpread({}, campaignState), {}, {
                        campaign: _objectSpread(_objectSpread({}, _action), {}, {
                          conditions: updatedConditions
                        })
                      }));
                      return _objectSpread(_objectSpread({}, _action), {}, {
                        conditions: updatedConditions
                      });
                    }

                    return _action;
                  });
                  handleSuccessUpdateCampaign(updatedCampaigns);
                }

                showToast(_orderingComponentsAdmin.ToastType.Success, t('CONDITION_SAVED', 'Condition saved'));
              } else {
                setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
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

    return function handleAddRule() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!isAddMode) {
      var _campaignState$campai;

      var selectedRule = campaignState === null || campaignState === void 0 ? void 0 : (_campaignState$campai = campaignState.campaign) === null || _campaignState$campai === void 0 ? void 0 : _campaignState$campai.conditions.find(function (item) {
        return item.type === type;
      });
      setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
        changes: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.id) && {
          id: selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.id
        }), (selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.date_condition) && {
          date_condition: selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.date_condition
        }), (selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.date) && {
          date: selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.date
        }), (selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.max_date) && {
          date: selectedRule === null || selectedRule === void 0 ? void 0 : selectedRule.max_date
        }), {}, {
          type: type
        })
      }));
    } else {
      var _formState$changes;

      var _selectedRule = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.conditions.find(function (item) {
        return item.type === type;
      });

      setRuleFormState(_objectSpread(_objectSpread({}, ruleFormState), {}, {
        changes: _objectSpread({}, _selectedRule)
      }));
    }
  }, [campaignState === null || campaignState === void 0 ? void 0 : campaignState.campaign]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    ruleFormState: ruleFormState,
    handleChangeValue: handleChangeValue,
    handleUpdateRule: handleUpdateRule,
    handleAddRule: handleAddRule,
    handleChangeDate: handleChangeDate,
    handleChangeOption: handleChangeOption,
    handleChangeDateTime: handleChangeDateTime
  })));
};

exports.CampaignSignUpOption = CampaignSignUpOption;
CampaignSignUpOption.propTypes = {
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
CampaignSignUpOption.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};