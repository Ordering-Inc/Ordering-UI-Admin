"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsDriversFilter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _orderingComponentsAdmin = require("ordering-components-admin");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AnalyticsDriversFilter = function AnalyticsDriversFilter(props) {
  var UIComponent = props.UIComponent,
      filterList = props.filterList,
      handleChangeFilterList = props.handleChangeFilterList,
      propsToFetch = props.propsToFetch,
      onClose = props.onClose;

  var _useApi = (0, _orderingComponentsAdmin.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * This state save the user info from API
   */


  var _useState = (0, _react.useState)({
    loading: true,
    error: null,
    users: [],
    pagination: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      usersList = _useState2[0],
      setUsersList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      groupList = _useState4[0],
      setGroupList = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      userIds = _useState6[0],
      setUserIds = _useState6[1];

  var _useState7 = (0, _react.useState)('all'),
      _useState8 = _slicedToArray(_useState7, 2),
      isAllCheck = _useState8[0],
      setIsAllCheck = _useState8[1];
  /**
   * Method to set group list
   */


  var getGroupList = function getGroupList() {
    var _groupList = [];
    var _userIds = [];

    var _iterator = _createForOfIteratorHelper(usersList === null || usersList === void 0 ? void 0 : usersList.users),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var user = _step.value;

        var _iterator3 = _createForOfIteratorHelper(user === null || user === void 0 ? void 0 : user.drivergroups),
            _step3;

        try {
          var _loop = function _loop() {
            var group = _step3.value;

            var found = _groupList.find(function (item) {
              return item.id === group.id;
            });

            if (!found) _groupList.push({
              id: group.id,
              name: group.name,
              isCollapse: false,
              children: []
            });
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        _userIds.push(user.id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var groups = _groupList.map(function (group) {
      var _children = _toConsumableArray(group.children);

      var _iterator2 = _createForOfIteratorHelper(usersList === null || usersList === void 0 ? void 0 : usersList.users),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var user = _step2.value;
          if (isIncluded(user.id, group.id)) _children.push(user);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return _objectSpread(_objectSpread({}, group), {}, {
        children: _children
      });
    });

    setUserIds(_userIds);
    setGroupList(groups);
  };
  /**
   * Method to change user id
   * @param {number} id
   */


  var handleChangeUserId = function handleChangeUserId(id) {
    var found = userIds === null || userIds === void 0 ? void 0 : userIds.find(function (businessId) {
      return businessId === id;
    });

    if (found) {
      var _userIds = userIds === null || userIds === void 0 ? void 0 : userIds.filter(function (businessId) {
        return businessId !== id;
      });

      setUserIds(_userIds);
      setIsAllCheck(false);
    } else {
      var _userIds2 = userIds ? _toConsumableArray(userIds) : [];

      _userIds2.push(id);

      if (_userIds2.length === (usersList === null || usersList === void 0 ? void 0 : usersList.users.length)) setIsAllCheck(true);
      setUserIds(_userIds2);
    }
  };
  /**
   * Method to check if a group collapse
   * @param {number} groupId
   */


  var handleChangeCollapse = function handleChangeCollapse(groupId) {
    var _groupList = groupList === null || groupList === void 0 ? void 0 : groupList.map(function (group) {
      if (group.id === groupId) {
        return _objectSpread(_objectSpread({}, group), {}, {
          isCollapse: !group.isCollapse
        });
      }

      return group;
    });

    setGroupList(_groupList);
  };
  /**
   * Method to check if a group checked
   * @param {number} groupId
   */


  var isParentCheck = function isParentCheck(groupId) {
    var isChecked = false;
    var isUnChecked = false;

    var _iterator4 = _createForOfIteratorHelper(groupList),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var group = _step4.value;

        if (group.id === groupId) {
          var _iterator5 = _createForOfIteratorHelper(group.children),
              _step5;

          try {
            var _loop2 = function _loop2() {
              var user = _step5.value;
              var found = userIds === null || userIds === void 0 ? void 0 : userIds.find(function (userId) {
                return userId === user.id;
              });
              if (found) isChecked = true;else isUnChecked = true;
            };

            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var completedCheck = 'all';
    if (isChecked && isUnChecked) completedCheck = 'some';else if (!isChecked && isUnChecked) completedCheck = 'none';
    return completedCheck;
  };
  /**
   * Method to change group status
   * @param {number} groupId
   */


  var parentClick = function parentClick(groupId) {
    var checkStatus = isParentCheck(groupId);
    var selectedGroup = groupList === null || groupList === void 0 ? void 0 : groupList.find(function (group) {
      return group.id === groupId;
    });

    var _userIds = _toConsumableArray(userIds);

    var _iterator6 = _createForOfIteratorHelper(selectedGroup === null || selectedGroup === void 0 ? void 0 : selectedGroup.children),
        _step6;

    try {
      var _loop3 = function _loop3() {
        var user = _step6.value;
        var found = userIds.find(function (userId) {
          return userId === user.id;
        });

        if (found && checkStatus !== 'none') {
          var _userIds3;

          var temp = (_userIds3 = _userIds) === null || _userIds3 === void 0 ? void 0 : _userIds3.filter(function (userId) {
            return userId !== user.id;
          });
          _userIds = _toConsumableArray(temp);
        }

        if (!found && checkStatus === 'none') _userIds.push(user.id);
      };

      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        _loop3();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    setUserIds(_userIds);
  };
  /**
   * Method to check if a user match with group
   * @param {number} userId
   * @param {number} groupId
   */


  var isIncluded = function isIncluded(userId, groupId) {
    var ischecked = false;

    var _iterator7 = _createForOfIteratorHelper(usersList === null || usersList === void 0 ? void 0 : usersList.users),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var user = _step7.value;

        var _iterator8 = _createForOfIteratorHelper(user.drivergroups),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var group = _step8.value;
            if (user.id === userId && group.id === groupId) ischecked = true;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    return ischecked;
  };
  /**
   * Method to change all check status
   * @param {string} status
   */


  var changeAllCheckStatus = function changeAllCheckStatus(status) {
    if (status === isAllCheck) return;
    setIsAllCheck(status);

    if (status === 'all') {
      var _userIds = [];

      var _iterator9 = _createForOfIteratorHelper(usersList === null || usersList === void 0 ? void 0 : usersList.users),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var user = _step9.value;

          _userIds.push(user.id);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      setUserIds(_userIds);
    } else {
      setUserIds([]);
    }
  };

  var handleClickFilterButton = function handleClickFilterButton() {
    var _userIds = userIds && userIds.length > 0 ? _toConsumableArray(userIds) : null;

    handleChangeFilterList && handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      userIds: _userIds
    }));
    onClose && onClose();
  };
  /**
   * Method to get drivers from API
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var where, _yield$ordering$users, _yield$ordering$users2, error, result, pagination;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: true
              }));
              where = [{
                attribute: 'level',
                value: '4'
              }];
              _context.next = 5;
              return ordering.users().asDashboard().select(propsToFetch).where(where).get();

            case 5:
              _yield$ordering$users = _context.sent;
              _yield$ordering$users2 = _yield$ordering$users.content;
              error = _yield$ordering$users2.error;
              result = _yield$ordering$users2.result;
              pagination = _yield$ordering$users2.pagination;

              if (!error) {
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  loading: false,
                  users: result,
                  pagination: pagination
                }));
              } else {
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
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

    return function getDrivers() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var controller = new AbortController();
    getDrivers();
    return controller.abort();
  }, []);
  (0, _react.useEffect)(function () {
    if ((usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0) getGroupList();
  }, [usersList]);
  (0, _react.useEffect)(function () {
    if (!userIds || !(usersList === null || usersList === void 0 ? void 0 : usersList.users)) return;
    if (userIds.length > 0 && userIds.length === usersList.users.length) setIsAllCheck('all');
    if (userIds.length > 0 && userIds.length !== usersList.users.length) setIsAllCheck('some');
    if (userIds.length === 0) setIsAllCheck('none');
  }, [userIds]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    usersList: usersList,
    groupList: groupList,
    userIds: userIds,
    isAllCheck: isAllCheck,
    handleChangeCollapse: handleChangeCollapse,
    handleChangeUserId: handleChangeUserId,
    isParentCheck: isParentCheck,
    parentClick: parentClick,
    isIncluded: isIncluded,
    changeAllCheckStatus: changeAllCheckStatus,
    handleClickFilterButton: handleClickFilterButton
  })));
};

exports.AnalyticsDriversFilter = AnalyticsDriversFilter;
AnalyticsDriversFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * filterList, this must be contains an object with filter list
   */
  filterList: _propTypes.default.object,

  /**
   * Method to change filter list
   */
  handleChangeFilterList: _propTypes.default.func,

  /**
   * Method to close DriversFilter Modal
   */
  onClose: _propTypes.default.func,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AnalyticsDriversFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
};