"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerLoadWrapper = exports.SkeletonContainer = exports.EmptyWrapper = exports.PaginationItem = exports.PaginationList = exports.UserListFoot = exports.BodyActionContent = exports.BodyActionContainer = exports.UserListStatusRound = exports.UserAvatarSection = exports.UserListFooter = exports.BodyCheckSection = exports.BodyItemContent = exports.UserListBodyItem = exports.UserListBody = exports.HeaderItemActionContent = exports.HeaderItemEditContent = exports.HeaderItemContent = exports.UserListHeaderItem = exports.UserListTR = exports.HeaderTR = exports.UserListHeader = exports.UserListContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  span {\n    display: flex;\n    &.item-text {\n      margin-left: 10px;\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px;\n\n  img {\n    width: 200px;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin-right: 10px;\n  cursor: pointer;\n  color: ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 10px 5px;\n\n  svg {\n    color: #d3d3d3;\n    cursor: pointer;\n    font-size: 20px;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  tr {\n    border-top: 1px solid #fbfafa;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 5px;\n  background: #e5e5e5;\n  border-radius: 20px;\n\n  .remove-svg,\n  .edit-svg{\n    font-size: 19px;\n    display: none;\n  }\n\n  .edit-svg {\n    font-size: 22px;\n  }\n\n  &: hover {\n    .remove-svg, .edit-svg{\n      display: block;\n    }\n    .more-svg {\n      display: none;\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n  background: ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  border-radius: 3px;\n  margin-right: 5px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 20px;\n  }\n\n  .pending-check-status {\n    display: none;\n    color: #38a1f4;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 0px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n\n  .default-user-avatar {\n    font-size: 24px;\n    margin-right: 5px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid transparent;\n  border-bottom: 1px solid #fbfafa;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  svg {\n    font-size: 24px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n&:hover {\n  border: 1px solid #38a1f4 !important;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  th > div {\n    justify-content: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #f5f2f2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0px 2px 2px #00000029;\n  flex-grow: 1;\n  border-collapse: collapse;\n  width: 100%;\n  .email-section {\n      display: none;\n  }\n\n  @media (min-width: 769px){\n    .email-section {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserListContainer = _styledComponents.default.table(_templateObject());

exports.UserListContainer = UserListContainer;

var UserListHeader = _styledComponents.default.thead(_templateObject2());

exports.UserListHeader = UserListHeader;

var HeaderTR = _styledComponents.default.tr(_templateObject3(), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject4());
});

exports.HeaderTR = HeaderTR;

var UserListTR = _styledComponents.default.tr(_templateObject5());

exports.UserListTR = UserListTR;

var UserListHeaderItem = _styledComponents.default.th(_templateObject6());

exports.UserListHeaderItem = UserListHeaderItem;

var HeaderItemContent = _styledComponents.default.div(_templateObject7());

exports.HeaderItemContent = HeaderItemContent;

var HeaderItemEditContent = _styledComponents.default.div(_templateObject8());

exports.HeaderItemEditContent = HeaderItemEditContent;

var HeaderItemActionContent = _styledComponents.default.div(_templateObject9());

exports.HeaderItemActionContent = HeaderItemActionContent;

var UserListBody = _styledComponents.default.tbody(_templateObject10());

exports.UserListBody = UserListBody;

var UserListBodyItem = _styledComponents.default.td(_templateObject11());

exports.UserListBodyItem = UserListBodyItem;

var BodyItemContent = _styledComponents.default.div(_templateObject12());

exports.BodyItemContent = BodyItemContent;

var BodyCheckSection = _styledComponents.default.div(_templateObject13());

exports.BodyCheckSection = BodyCheckSection;

var UserListFooter = _styledComponents.default.tfoot(_templateObject14());

exports.UserListFooter = UserListFooter;

var UserAvatarSection = _styledComponents.default.div(_templateObject15());

exports.UserAvatarSection = UserAvatarSection;

var UserListStatusRound = _styledComponents.default.div(_templateObject16(), function (_ref2) {
  var active = _ref2.active;
  return active ? '#0e9b55' : '#da4a54';
});

exports.UserListStatusRound = UserListStatusRound;

var BodyActionContainer = _styledComponents.default.div(_templateObject17());

exports.BodyActionContainer = BodyActionContainer;

var BodyActionContent = _styledComponents.default.div(_templateObject18());

exports.BodyActionContent = BodyActionContent;

var UserListFoot = _styledComponents.default.tfoot(_templateObject19());

exports.UserListFoot = UserListFoot;

var PaginationList = _styledComponents.default.div(_templateObject20());

exports.PaginationList = PaginationList;

var PaginationItem = _styledComponents.default.span(_templateObject21(), function (_ref3) {
  var active = _ref3.active;
  return active ? '#38a1f4' : '#d3d3d3';
});

exports.PaginationItem = PaginationItem;

var EmptyWrapper = _styledComponents.default.div(_templateObject22());

exports.EmptyWrapper = EmptyWrapper;

var SkeletonContainer = _styledComponents.default.div(_templateObject23());

exports.SkeletonContainer = SkeletonContainer;

var SpinnerLoadWrapper = _styledComponents.default.div(_templateObject24());

exports.SpinnerLoadWrapper = SpinnerLoadWrapper;