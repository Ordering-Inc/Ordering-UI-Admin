"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtraOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _Switch = require("../../styles/Switch");

var _reactBootstrap = require("react-bootstrap");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

var _utils = require("../../utils");

var _Confirm = require("../Confirm");

var _ProductExtraMetaFields = require("../ProductExtraMetaFields");

var _Modal = require("../Modal");

var _ProductExtraOptionDetails = require("../ProductExtraOptionDetails");

var _ProductExtraOptionMetaFields = require("../ProductExtraOptionMetaFields");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductExtraOptionsUI = function ProductExtraOptionsUI(props) {
  var _extraState$extra, _extraState$extra2;

  var open = props.open,
      onClose = props.onClose,
      editErrors = props.editErrors,
      cleanEditErrors = props.cleanEditErrors,
      extraState = props.extraState,
      changesState = props.changesState,
      handleChangeImage = props.handleChangeImage,
      handleChangeInput = props.handleChangeInput,
      handleChangeOptionEnable = props.handleChangeOptionEnable,
      handleChangeAddOption = props.handleChangeAddOption,
      addChangesState = props.addChangesState,
      handleAddOption = props.handleAddOption,
      handleChangeAddOptionEnable = props.handleChangeAddOptionEnable,
      handleDeteteOption = props.handleDeteteOption,
      business = props.business,
      cleanChangesState = props.cleanChangesState,
      editOptionId = props.editOptionId;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var ActionIcon = /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null);

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      confirm = _useState6[0],
      setConfirm = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      curOption = _useState8[0],
      setCurOption = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      openModal = _useState10[0],
      setOpenModal = _useState10[1];

  var closeAlert = function closeAlert() {
    cleanEditErrors();
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleChangeOptionInput = function handleChangeOptionInput(e, option, min) {
    var regexp = /^[0-9.\b]+$/;

    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        var _changesState$changes, _changesState$changes2;

        var max = changesState !== null && changesState !== void 0 && (_changesState$changes = changesState.changes) !== null && _changesState$changes !== void 0 && _changesState$changes.max ? changesState === null || changesState === void 0 ? void 0 : (_changesState$changes2 = changesState.changes) === null || _changesState$changes2 === void 0 ? void 0 : _changesState$changes2.max : option === null || option === void 0 ? void 0 : option.max;
        if (parseInt(e.target.value) > parseInt(max)) return;
      } else {
        var _changesState$changes3, _changesState$changes4;

        var _min = changesState !== null && changesState !== void 0 && (_changesState$changes3 = changesState.changes) !== null && _changesState$changes3 !== void 0 && _changesState$changes3.min ? changesState === null || changesState === void 0 ? void 0 : (_changesState$changes4 = changesState.changes) === null || _changesState$changes4 === void 0 ? void 0 : _changesState$changes4.min : option === null || option === void 0 ? void 0 : option.min;

        if (parseInt(e.target.value) < parseInt(_min)) return;
      }

      handleChangeInput(e, option.id);
    }
  };

  var handleChangeAddOptionInput = function handleChangeAddOptionInput(e, min) {
    var regexp = /^[0-9.\b]+$/;

    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        if (parseInt(e.target.value) > parseInt(addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max)) return;
      } else {
        if (parseInt(e.target.value) < parseInt(addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min)) return;
      }

      handleChangeAddOption(e);
    }
  };

  var handleClickImage = function handleClickImage(idName) {
    document.getElementById(idName).click();
  };

  var handleFiles = function handleFiles(files, optionId) {
    if (files.length === 1) {
      var _files$;

      var type = files[0].type.split('/')[0];

      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }

      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }

      handleChangeImage(files[0], optionId);
    }
  };

  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      onClose();
    }

    setIsMenuOpen(value);
    document.getElementById('extra_options').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };

  var handleAddOptionClick = function handleAddOptionClick() {
    if ((addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.name) === '' || !(addChangesState !== null && addChangesState !== void 0 && addChangesState.name) || (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min) === '' || (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max) === '') {
      var errorContent = [];
      if ((addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.name) === '' || !(addChangesState !== null && addChangesState !== void 0 && addChangesState.name)) errorContent.push(t('NAME_REQUIRED', 'The name is required.'));
      if ((addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min) === '') errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'));
      if ((addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max) === '') errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'));

      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        });
      }
    } else {
      handleAddOption();
    }
  };

  var handleDeteteClick = function handleDeteteClick(optionId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeteteOption(optionId);
      }
    });
  };

  var handleOpenModal = function handleOpenModal(option, name) {
    cleanChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
      changes: {}
    }));
    setCurOption(option);
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, _defineProperty({}, name, true)));
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('extra_options').style.width = '100%';
      } else {
        document.getElementById('extra_options').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (Object.keys(editErrors).length) {
      var errorContent = [];
      if (editErrors !== null && editErrors !== void 0 && editErrors.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'));
      if (editErrors !== null && editErrors !== void 0 && editErrors.min) errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'));
      if (editErrors !== null && editErrors !== void 0 && editErrors.max) errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'));

      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        });
      }
    }
  }, [editErrors]);
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, {
    id: "extra_options"
  }, /*#__PURE__*/_react.default.createElement(_styles.OptionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, extraState.extra.name), /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement(_styles.OptionsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement("th", null, t('MIN', 'Min')), /*#__PURE__*/_react.default.createElement("th", null, t('MAX', 'Max')), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')))), ((_extraState$extra = extraState.extra) === null || _extraState$extra === void 0 ? void 0 : _extraState$extra.options) && ((_extraState$extra2 = extraState.extra) === null || _extraState$extra2 === void 0 ? void 0 : _extraState$extra2.options.map(function (option) {
    var _changesState$result, _changesState$result2, _changesState$changes5, _changesState$changes6, _changesState$changes7, _changesState$changes8, _changesState$changes9, _changesState$changes10;

    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: option.id
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.OptionNameContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OptionImage, {
      onClick: function onClick() {
        return handleClickImage("option_image_".concat(option.id));
      }
    }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
      onFiles: function onFiles(files) {
        return handleFiles(files, option.id);
      },
      childId: "option_image_".concat(option.id),
      accept: "image/png, image/jpeg, image/jpg",
      disabled: extraState.loading
    }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
      onDrop: function onDrop(dataTransfer) {
        return handleFiles(dataTransfer.files, option.id);
      },
      accept: "image/png, image/jpeg, image/jpg",
      disabled: extraState.loading
    }, changesState !== null && changesState !== void 0 && (_changesState$result = changesState.result) !== null && _changesState$result !== void 0 && _changesState$result.image && editOptionId === option.id ? /*#__PURE__*/_react.default.createElement("img", {
      src: changesState === null || changesState === void 0 ? void 0 : (_changesState$result2 = changesState.result) === null || _changesState$result2 === void 0 ? void 0 : _changesState$result2.image,
      alt: "option image",
      loading: "lazy"
    }) : changesState !== null && changesState !== void 0 && (_changesState$changes5 = changesState.changes) !== null && _changesState$changes5 !== void 0 && _changesState$changes5.image && editOptionId === option.id ? /*#__PURE__*/_react.default.createElement("img", {
      src: changesState === null || changesState === void 0 ? void 0 : (_changesState$changes6 = changesState.changes) === null || _changesState$changes6 === void 0 ? void 0 : _changesState$changes6.image,
      alt: "option image",
      loading: "lazy"
    }) : (option === null || option === void 0 ? void 0 : option.image) && /*#__PURE__*/_react.default.createElement("img", {
      src: option === null || option === void 0 ? void 0 : option.image,
      alt: "option image",
      loading: "lazy"
    }), /*#__PURE__*/_react.default.createElement(_styles.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null))))), /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      defaultValue: option.name,
      onChange: function onChange(e) {
        return handleChangeInput(e, option.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
      name: "min",
      value: editOptionId === option.id ? (_changesState$changes7 = changesState === null || changesState === void 0 ? void 0 : (_changesState$changes8 = changesState.changes) === null || _changesState$changes8 === void 0 ? void 0 : _changesState$changes8.min) !== null && _changesState$changes7 !== void 0 ? _changesState$changes7 : option === null || option === void 0 ? void 0 : option.min : option === null || option === void 0 ? void 0 : option.min,
      onChange: function onChange(e) {
        return handleChangeOptionInput(e, option, true);
      }
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
      name: "max",
      value: editOptionId === option.id ? (_changesState$changes9 = changesState === null || changesState === void 0 ? void 0 : (_changesState$changes10 = changesState.changes) === null || _changesState$changes10 === void 0 ? void 0 : _changesState$changes10.max) !== null && _changesState$changes9 !== void 0 ? _changesState$changes9 : option === null || option === void 0 ? void 0 : option.max : option === null || option === void 0 ? void 0 : option.max,
      onChange: function onChange(e) {
        return handleChangeOptionInput(e, option, false);
      }
    })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
      defaultChecked: option === null || option === void 0 ? void 0 : option.enabled,
      onChange: function onChange(enabled) {
        return handleChangeOptionEnable(enabled, option.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.DropDownWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: theme !== null && theme !== void 0 && theme.rtl ? 'left' : 'right',
      title: ActionIcon,
      id: theme !== null && theme !== void 0 && theme.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenModal(option, 'edit');
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenModal(option, 'metaFields');
      }
    }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeteteClick(option.id);
      }
    }, t('DELETE', 'Delete'))))))));
  })), /*#__PURE__*/_react.default.createElement("tbody", {
    className: "add_option"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.OptionNameContainer, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    value: (addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.name) || '',
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    onChange: function onChange(e) {
      return handleChangeAddOption(e);
    }
  }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
    name: "min",
    value: addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.min,
    onChange: function onChange(e) {
      return handleChangeAddOptionInput(e, true);
    }
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
    name: "max",
    value: addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.max,
    onChange: function onChange(e) {
      return handleChangeAddOptionInput(e, false);
    }
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ActionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: addChangesState === null || addChangesState === void 0 ? void 0 : addChangesState.enabled,
    onChange: handleChangeAddOptionEnable
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, {
    onClick: function onClick() {
      return handleAddOptionClick();
    }
  }))))))), /*#__PURE__*/_react.default.createElement(_ProductExtraMetaFields.ProductExtraMetaFields, {
    businessId: business.id,
    extraId: extraState.extra.id
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), (openModal === null || openModal === void 0 ? void 0 : openModal.edit) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.edit,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        edit: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptionDetails.ProductExtraOptionDetails, {
    business: business,
    extra: extraState.extra,
    option: curOption,
    optionChangesState: editOptionId === curOption.id ? changesState : {},
    handleOptionFiles: handleFiles,
    handleChangeOptionInput: handleChangeInput,
    handleChangeNumberInput: handleChangeOptionInput,
    handleChangeOptionEnable: handleChangeOptionEnable
  })), (openModal === null || openModal === void 0 ? void 0 : openModal.metaFields) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openModal === null || openModal === void 0 ? void 0 : openModal.metaFields,
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        metaFields: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptionMetaFields.ProductExtraOptionMetaFields, {
    businessId: business.id,
    extraId: extraState.extra.id,
    optionId: curOption.id
  })));
};

var ProductExtraOptions = function ProductExtraOptions(props) {
  var productExtraOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtraOptionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ProductExtraOptions, productExtraOptionsProps);
};

exports.ProductExtraOptions = ProductExtraOptions;