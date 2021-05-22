"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _GrFormEdit = _interopRequireDefault(require("@meronex/icons/gr/GrFormEdit"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _Modal = require("../Modal");

var _SpinnerLoader = require("../SpinnerLoader");

var _UserDetails = require("../UserDetails");

var _TiArrowUnsorted = _interopRequireDefault(require("@meronex/icons/ti/TiArrowUnsorted"));

var _MdcDeleteOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcDeleteOutline"));

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _CgCheckR = _interopRequireDefault(require("@meronex/icons/cg/CgCheckR"));

var _BiSquareRounded = _interopRequireDefault(require("@meronex/icons/bi/BiSquareRounded"));

var _BsFillPlayFill = _interopRequireDefault(require("@meronex/icons/bs/BsFillPlayFill"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _TiMediaPlayReverse = _interopRequireDefault(require("@meronex/icons/ti/TiMediaPlayReverse"));

var _styledComponents = require("styled-components");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserList = function UserList(props) {
  var _usersList$users, _usersList$users2, _usersList$users3, _theme$images, _theme$images$dummies, _usersList$users4;

  var usersList = props.usersList,
      paginationProps = props.paginationProps,
      getUserById = props.getUserById,
      getUsers = props.getUsers,
      setUsersList = props.setUsersList,
      spinLoading = props.spinLoading,
      paginationDetail = props.paginationDetail;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedUser = _useState4[0],
      setSelectedUser = _useState4[1];

  var editUserById = function editUserById(userId, enabled) {
    getUserById && getUserById(userId, enabled);
  };

  var prevNextPage = function prevNextPage(isNextPage) {
    getUsers && getUsers(false, isNextPage);
  };

  var openModal = function openModal(user) {
    setSelectedUser(user);
    setModals(_objectSpread(_objectSpread({}, modals), {}, {
      formOpen: true
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_style.UserListContainer, null, /*#__PURE__*/_react.default.createElement(_style.UserListHeader, null, /*#__PURE__*/_react.default.createElement(_style.HeaderTR, {
    isLoading: usersList.loading
  }, /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, null, /*#__PURE__*/_react.default.createElement(_style.HeaderItemEditContent, null, /*#__PURE__*/_react.default.createElement(_GrFormEdit.default, null))), /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, null, /*#__PURE__*/_react.default.createElement(_style.HeaderItemContent, null, t('NAME', 'Name'), /*#__PURE__*/_react.default.createElement(_TiArrowUnsorted.default, null))), /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, null, /*#__PURE__*/_react.default.createElement(_style.HeaderItemContent, null, t('ID', 'ID'), /*#__PURE__*/_react.default.createElement(_TiArrowUnsorted.default, null))), /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, {
    className: "email-section"
  }, /*#__PURE__*/_react.default.createElement(_style.HeaderItemContent, null, t('EMAIL', 'Email'), /*#__PURE__*/_react.default.createElement(_TiArrowUnsorted.default, null))), /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, null, /*#__PURE__*/_react.default.createElement(_style.HeaderItemContent, null, t('PHONE', 'Phone'), /*#__PURE__*/_react.default.createElement(_TiArrowUnsorted.default, null))), /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, null, /*#__PURE__*/_react.default.createElement(_style.HeaderItemContent, null, t('STATUS', 'Status'), /*#__PURE__*/_react.default.createElement(_TiArrowUnsorted.default, null))), /*#__PURE__*/_react.default.createElement(_style.UserListHeaderItem, null, /*#__PURE__*/_react.default.createElement(_style.HeaderItemActionContent, null, t('ACTION', 'Action'))))), !(usersList === null || usersList === void 0 ? void 0 : usersList.loading) && (usersList === null || usersList === void 0 ? void 0 : (_usersList$users = usersList.users) === null || _usersList$users === void 0 ? void 0 : _usersList$users.length) > 0 && (usersList === null || usersList === void 0 ? void 0 : (_usersList$users2 = usersList.users) === null || _usersList$users2 === void 0 ? void 0 : _usersList$users2.map(function (user) {
    return /*#__PURE__*/_react.default.createElement(_style.UserListBody, {
      key: user.id
    }, /*#__PURE__*/_react.default.createElement(_style.UserListTR, null, /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.BodyCheckSection, null, /*#__PURE__*/_react.default.createElement(_BiSquareRounded.default, {
      className: "un-checked-status"
    }), /*#__PURE__*/_react.default.createElement(_CgCheckR.default, {
      className: "pending-check-status"
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.BodyItemContent, null, (user === null || user === void 0 ? void 0 : user.photo) ? /*#__PURE__*/_react.default.createElement(_style.UserAvatarSection, {
      style: {
        backgroundImage: "url(".concat(user === null || user === void 0 ? void 0 : user.photo, ")")
      },
      loading: "lazy"
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, {
      className: "default-user-avatar"
    }), (user === null || user === void 0 ? void 0 : user.name) && (user === null || user === void 0 ? void 0 : user.name))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, (user === null || user === void 0 ? void 0 : user.id) && /*#__PURE__*/_react.default.createElement(_style.BodyItemContent, null, user === null || user === void 0 ? void 0 : user.id)), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, {
      className: "email-section"
    }, (user === null || user === void 0 ? void 0 : user.email) && /*#__PURE__*/_react.default.createElement(_style.BodyItemContent, null, user === null || user === void 0 ? void 0 : user.email)), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, (user === null || user === void 0 ? void 0 : user.cellphone) && /*#__PURE__*/_react.default.createElement(_style.BodyItemContent, null, user === null || user === void 0 ? void 0 : user.cellphone)), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.BodyItemContent, {
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return editUserById(user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.enabled);
      }
    }, /*#__PURE__*/_react.default.createElement(_style.UserListStatusRound, {
      active: user === null || user === void 0 ? void 0 : user.enabled
    }), " ", (user === null || user === void 0 ? void 0 : user.enabled) ? 'Active' : 'Decative')), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.BodyActionContainer, null, /*#__PURE__*/_react.default.createElement(_style.BodyActionContent, null, /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, {
      className: "more-svg"
    }), /*#__PURE__*/_react.default.createElement(_GrFormEdit.default, {
      className: "edit-svg",
      onClick: function onClick() {
        return openModal(user);
      }
    }), /*#__PURE__*/_react.default.createElement(_MdcDeleteOutline.default, {
      className: "remove-svg"
    }))))));
  })), !(usersList === null || usersList === void 0 ? void 0 : usersList.loading) && (usersList === null || usersList === void 0 ? void 0 : (_usersList$users3 = usersList.users) === null || _usersList$users3 === void 0 ? void 0 : _usersList$users3.length) === 0 && /*#__PURE__*/_react.default.createElement(_style.UserListBody, null, /*#__PURE__*/_react.default.createElement(_style.UserListTR, null, /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, {
    colSpan: "7"
  }, /*#__PURE__*/_react.default.createElement(_style.EmptyWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.nonOrders,
    alt: "none"
  }))))), !spinLoading && (usersList === null || usersList === void 0 ? void 0 : usersList.loading) && _toConsumableArray(Array(10)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_style.UserListBody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_style.UserListTR, null, /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 25
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 25
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 35,
      className: "item-text"
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      circle: true,
      width: 15,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      className: "item-text"
    }))), /*#__PURE__*/_react.default.createElement(_style.UserListBodyItem, null, /*#__PURE__*/_react.default.createElement(_style.SkeletonContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      circle: true,
      width: 30,
      height: 30
    })))));
  }), (usersList === null || usersList === void 0 ? void 0 : (_usersList$users4 = usersList.users) === null || _usersList$users4 === void 0 ? void 0 : _usersList$users4.length) > 0 && !(usersList === null || usersList === void 0 ? void 0 : usersList.loading) && /*#__PURE__*/_react.default.createElement(_style.UserListFoot, null, /*#__PURE__*/_react.default.createElement(_style.HeaderTR, null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: "7"
  }, /*#__PURE__*/_react.default.createElement(_style.PaginationList, null, /*#__PURE__*/_react.default.createElement(_style.PaginationItem, null, "".concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.from, " - ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.to, " of ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total)), /*#__PURE__*/_react.default.createElement(_BsFillPlayFill.default, {
    disabled: !((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) > 1),
    className: "prev",
    onClick: function onClick() {
      return prevNextPage(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_BsFillPlayFill.default, {
    disabled: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage),
    onClick: function onClick() {
      return prevNextPage(true);
    }
  })))))), spinLoading && /*#__PURE__*/_react.default.createElement(_style.SpinnerLoadWrapper, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, null)), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modals.formOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveUser: function onSaveUser() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    user: selectedUser,
    setSelectedUser: setSelectedUser,
    setUsersList: setUsersList,
    usersList: usersList,
    defaultItemType: 1
  })));
};

exports.UserList = UserList;