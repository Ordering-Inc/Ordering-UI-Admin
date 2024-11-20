"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteTheme = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _ThemeOption = require("./ThemeOption");
var _ThemeComponent = require("./ThemeComponent");
var _ThemeImage = require("./ThemeImage");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SiteThemeUI = function SiteThemeUI(props) {
  var _themeStructure$selec, _themeStructure$selec2, _themeValues$selected, _themeStructure$selec3, _Object$keys, _themeStructure$selec4;
  var siteThemesState = props.siteThemesState,
    themesList = props.themesList,
    actionState = props.actionState,
    selectedTheme = props.selectedTheme,
    handleSelectTheme = props.handleSelectTheme,
    handleAssignTheme = props.handleAssignTheme,
    handleUpdateSiteTheme = props.handleUpdateSiteTheme,
    handleAddThemeGallery = props.handleAddThemeGallery;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    themeOptions = _useState2[0],
    setThemeOptions = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    pageOptions = _useState4[0],
    setPageOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPage = _useState6[0],
    setSelectedPage = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    themeStructure = _useState8[0],
    setThemeStructure = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    themeValues = _useState10[0],
    setThemeValues = _useState10[1];
  var getOptions = function getOptions(options) {
    return options.map(function (option) {
      return {
        value: option,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(option.toUpperCase(), option.replace(/_/g, ' ')))
      };
    });
  };
  var getTitle = function getTitle(key) {
    return t(key.toUpperCase, key.replace(/_/g, ' '));
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var _handleChangeValue = function handleChangeValue(value, block) {
    var _themeValues = _objectSpread({}, themeValues);
    var path = [selectedPage, 'components', block].join('.');
    updateObject(_themeValues, value, path);
    setThemeValues(_themeValues);
  };
  var handleHidePage = function handleHidePage(hidden) {
    var _themeValues = JSON.parse(JSON.stringify(themeValues));
    _themeValues[selectedPage].hidden = hidden;
    setThemeValues(_themeValues);
  };
  (0, _react.useEffect)(function () {
    if (themesList.loading) return;
    var _themeOptions = themesList.result.map(function (theme) {
      return {
        value: theme.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t(theme.name.toUpperCase(), theme.name.replace(/_/g, ' ')))
      };
    });
    setThemeOptions(_themeOptions);
  }, [themesList]);
  var _recursiveAssign = function recursiveAssign(a, b) {
    if (b) {
      if (Object(b) !== b) return b;
      if (Object(a) !== a) a = {};
      for (var key in b) {
        a[key] = _recursiveAssign(a[key], b[key]);
      }
      return a;
    } else {
      return a;
    }
  };
  (0, _react.useEffect)(function () {
    var _siteThemesState$resu, _siteThemesState$resu2, _siteThemesState$resu3;
    if (siteThemesState.loading || siteThemesState.result.length === 0) return;
    var _themeValues = _recursiveAssign((_siteThemesState$resu = siteThemesState.result[0]) === null || _siteThemesState$resu === void 0 || (_siteThemesState$resu = _siteThemesState$resu.theme) === null || _siteThemesState$resu === void 0 ? void 0 : _siteThemesState$resu.values_default, (_siteThemesState$resu2 = siteThemesState.result[0]) === null || _siteThemesState$resu2 === void 0 ? void 0 : _siteThemesState$resu2.values);
    setThemeValues(_themeValues);
    var structure = ((_siteThemesState$resu3 = siteThemesState.result[0]) === null || _siteThemesState$resu3 === void 0 || (_siteThemesState$resu3 = _siteThemesState$resu3.theme) === null || _siteThemesState$resu3 === void 0 ? void 0 : _siteThemesState$resu3.structure) || {};
    setThemeStructure(structure);
    var _pageOptions = getOptions(Object.keys(structure));
    setPageOptions(_pageOptions);
  }, [siteThemesState]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, siteThemesState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.BlockContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 300
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 200,
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 130,
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, siteThemesState.result.length !== 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ThemeStructureContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PageBlockTitle, null, t('SECTION', 'Section')), /*#__PURE__*/_react.default.createElement(_styles2.PageSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      isPlaceholder: true
    }, t('SELECT_SECTION_TO_CUSTOMIZE', 'Select a section to customize')),
    defaultValue: selectedPage,
    options: pageOptions,
    onChange: function onChange(key) {
      return setSelectedPage(key);
    }
  })), selectedPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_themeStructure$selec = themeStructure[selectedPage]) === null || _themeStructure$selec === void 0 ? void 0 : _themeStructure$selec.hidden) && ((_themeStructure$selec2 = themeStructure[selectedPage]) === null || _themeStructure$selec2 === void 0 || (_themeStructure$selec2 = _themeStructure$selec2.hidden) === null || _themeStructure$selec2 === void 0 ? void 0 : _themeStructure$selec2.value_type) === 'boolean' && /*#__PURE__*/_react.default.createElement(_styles2.PageHiddenCheckWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: (_themeValues$selected = themeValues[selectedPage]) === null || _themeValues$selected === void 0 ? void 0 : _themeValues$selected.hidden,
    onChange: function onChange(e) {
      return handleHidePage(e.target.checked);
    }
  }), /*#__PURE__*/_react.default.createElement("h4", null, t('HIDDEN', 'Hidden'))), /*#__PURE__*/_react.default.createElement(_styles2.PageBlockTitle, null, t('PAGE_BLOCKS', 'Page blocks')), !!((_themeStructure$selec3 = themeStructure[selectedPage]) !== null && _themeStructure$selec3 !== void 0 && _themeStructure$selec3.components) && ((_Object$keys = Object.keys((_themeStructure$selec4 = themeStructure[selectedPage]) === null || _themeStructure$selec4 === void 0 ? void 0 : _themeStructure$selec4.components)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (block) {
    var _components$block, _components$block2, _components$block3, _components$block4, _components$block5;
    var components = themeStructure[selectedPage].components;
    return block !== 'birthday' && /*#__PURE__*/_react.default.createElement(_styles2.BlockContainer, {
      key: block
    }, /*#__PURE__*/_react.default.createElement("h3", null, getTitle(block)), (block === 'image' || block === 'dummy_image') && ((_components$block = components[block]) === null || _components$block === void 0 ? void 0 : _components$block.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_ThemeImage.ThemeImage, {
      valueObject: themeValues[selectedPage].components[block],
      handleAddThemeGallery: handleAddThemeGallery,
      handleChangeValue: function handleChangeValue(value) {
        return _handleChangeValue(value, block);
      }
    }), block === 'slug' && ((_components$block2 = components[block]) === null || _components$block2 === void 0 ? void 0 : _components$block2.value_type) === 'string' && /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
        isPlaceholder: true
      }, t('SELECT_ITEM', 'Select a _attribute_').replace('_attribute_', getTitle(block))),
      defaultValue: themeValues[selectedPage].components[block],
      options: getOptions((_components$block3 = components[block]) === null || _components$block3 === void 0 ? void 0 : _components$block3.options),
      onChange: function onChange(value) {
        return _handleChangeValue(value, block);
      }
    }), Object.keys(components[block]).filter(function (option) {
      return option !== 'components' && option !== 'value_type';
    }).map(function (option) {
      var _themeValues$selected2;
      var optionObject = components[block][option];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: option
      }, typeof ((_themeValues$selected2 = themeValues[selectedPage]) === null || _themeValues$selected2 === void 0 || (_themeValues$selected2 = _themeValues$selected2.components) === null || _themeValues$selected2 === void 0 || (_themeValues$selected2 = _themeValues$selected2[block]) === null || _themeValues$selected2 === void 0 ? void 0 : _themeValues$selected2[option]) !== 'undefined' && /*#__PURE__*/_react.default.createElement(_ThemeOption.ThemeOption, {
        name: option,
        optionObject: optionObject,
        valueObject: themeValues[selectedPage].components[block][option],
        path: [selectedPage, 'components', block, option].join('.'),
        themeValues: themeValues,
        setThemeValues: setThemeValues,
        handleAddThemeGallery: handleAddThemeGallery
      }));
    }), ((_components$block4 = components[block]) === null || _components$block4 === void 0 ? void 0 : _components$block4.components) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys((_components$block5 = components[block]) === null || _components$block5 === void 0 ? void 0 : _components$block5.components).map(function (component) {
      var _components$block6, _themeValues$selected3;
      var componentObject = (_components$block6 = components[block]) === null || _components$block6 === void 0 ? void 0 : _components$block6.components[component];
      return /*#__PURE__*/_react.default.createElement(_ThemeComponent.ThemeComponent, {
        key: component,
        name: component,
        componentObject: componentObject,
        valueObject: (_themeValues$selected3 = themeValues[selectedPage].components[block]) === null || _themeValues$selected3 === void 0 ? void 0 : _themeValues$selected3.components[component],
        themeValues: themeValues,
        setThemeValues: setThemeValues,
        path: [selectedPage, 'components', block, 'components', component].join('.'),
        handleAddThemeGallery: handleAddThemeGallery
      });
    })));
  })))), /*#__PURE__*/_react.default.createElement(_styles2.UpdateButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleUpdateSiteTheme(themeValues);
    }
  }, t('UPDATE', 'Update')))) : /*#__PURE__*/_react.default.createElement(_styles2.SelectThemeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_THEME', 'Select theme')),
    options: themeOptions,
    onChange: function onChange(themeId) {
      return handleSelectTheme(themeId);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: actionState.loading || !selectedTheme,
    onClick: function onClick() {
      return handleAssignTheme();
    }
  }, actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')))));
};
var SiteTheme = exports.SiteTheme = function SiteTheme(props) {
  var siteThemeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SiteThemeUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SiteTheme, siteThemeProps);
};