"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionGeneralDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _moment = _interopRequireDefault(require("moment"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _styles = require("../../styles");

var _FirstSelect = require("../../styles/Select/FirstSelect");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _utils = require("../../utils");

var _Confirm = require("../Confirm");

var _reactDateRange = require("react-date-range");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EnterprisePromotionGeneralDetails = function EnterprisePromotionGeneralDetails(props) {
  var _formState$changes, _formState$changes2, _promotionState$promo3, _promotionState$promo4, _ref, _formState$changes$na, _formState$changes3, _promotionState$promo5, _ref2, _formState$changes$de, _formState$changes4, _promotionState$promo6, _ref3, _formState$changes$la, _formState$changes5, _promotionState$promo7, _formState$changes$or, _formState$changes6, _promotionState$promo8, _formState$changes7, _formState$changes8, _promotionState$promo9, _promotionState$promo10;

  var isAddMode = props.isAddMode,
      promotionState = props.promotionState,
      formState = props.formState,
      actionState = props.actionState,
      handleChangeImage = props.handleChangeImage,
      handleChangeInput = props.handleChangeInput,
      handleUpdateClick = props.handleUpdateClick,
      handleAddPromotion = props.handleAddPromotion,
      handleChangeItem = props.handleChangeItem;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var formMethods = (0, _reactHookForm.useForm)();
  var inputRef = (0, _react.useRef)(null);
  var calendarRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)([{
    startDate: null,
    endDate: null,
    key: 'selection'
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      dateRange = _useState2[0],
      setDateRange = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isShowCalendar = _useState6[0],
      setIsShowCalendar = _useState6[1];

  var OrderPriorityOptions = [{
    value: 2,
    content: t('URGENT', 'Urgent')
  }, {
    value: 1,
    content: t('HIGH', 'High')
  }, {
    value: 0,
    content: t('NORMAL', 'Normal')
  }, {
    value: -1,
    content: t('LOW', 'Low')
  }];

  var handleClickImage = function handleClickImage() {
    inputRef.current.click();
  };

  var handleFiles = function handleFiles(files) {
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

      handleChangeImage(files[0]);
    }
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    }); // cleanFormState && cleanFormState({ result: { error: false } })
  };

  var onSubmit = function onSubmit() {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        handleAddPromotion();
      } else {
        handleUpdateClick();
      }
    }
  };

  var handleChangeDates = function handleChangeDates(item) {
    handleChangeItem({
      start: (0, _moment.default)(item.selection.startDate).format('YYYY-MM-DD'),
      end: item.selection.endDate ? (0, _moment.default)(item.selection.endDate).format('YYYY-MM-DD') : null
    });
    setDateRange([item.selection]);
  };

  var handleClickOutside = function handleClickOutside(e) {
    var _calendarRef$current;

    if (!isShowCalendar) return;
    var outsideCalendar = !((_calendarRef$current = calendarRef.current) !== null && _calendarRef$current !== void 0 && _calendarRef$current.contains(e.target));

    if (outsideCalendar) {
      setIsShowCalendar(false);
    }
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShowCalendar]);
  (0, _react.useEffect)(function () {
    if (Object.keys(promotionState === null || promotionState === void 0 ? void 0 : promotionState.promotion).length) {
      var _promotionState$promo, _promotionState$promo2;

      setDateRange([{
        startDate: new Date(promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.start),
        endDate: new Date(promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.end),
        key: 'selection'
      }]);
    } else {
      setDateRange([{
        startDate: null,
        endDate: null,
        key: 'selection'
      }]);
    }
  }, [promotionState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.PromotionImage, {
    className: "promotion_image"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    onClick: function onClick() {
      return handleClickImage();
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: handleFiles,
    childRef: function childRef(e) {
      inputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: actionState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: actionState.loading
  }, formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.image,
    alt: "user image",
    loading: "lazy"
  }) : (promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo4 = promotionState.promotion) === null || _promotionState$promo4 === void 0 ? void 0 : _promotionState$promo4.image,
    alt: "user image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Image, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_AND_DROP', 'Drag and drop')))))))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "name",
    type: "text",
    placeholder: t('NAME', 'name'),
    value: (_ref = (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo5 = promotionState.promotion) === null || _promotionState$promo5 === void 0 ? void 0 : _promotionState$promo5.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: t('NAME_REQUIRED', 'The name is required.')
    }),
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('Description_V2', 'Description')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 4,
    name: "description",
    placeholder: t('SHORT_PROMOTION_ABOUT', 'Write a little description'),
    value: (_ref2 = (_formState$changes$de = formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.description) !== null && _formState$changes$de !== void 0 ? _formState$changes$de : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo6 = promotionState.promotion) === null || _promotionState$promo6 === void 0 ? void 0 : _promotionState$promo6.description) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: handleChangeInput,
    disabled: formState.loading,
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles2.SelectGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.DateRangeWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('DATES_RANGE', 'Date range')), /*#__PURE__*/_react.default.createElement(_styles2.CalendarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundary",
    borderRadius: "8px",
    type: "button",
    onClick: function onClick() {
      return setIsShowCalendar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null), /*#__PURE__*/_react.default.createElement("span", null, dateRange[0].startDate ? "".concat((0, _moment.default)(dateRange[0].startDate).format('YYYY/MM/DD'), " - ").concat((0, _moment.default)(dateRange[0].endDate).format('YYYY/MM/DD')) : t('SELECT_DATE_RANGE', 'Select Date Range'))), isShowCalendar && /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, {
    ref: calendarRef,
    notSelected: !dateRange[0].startDate
  }, /*#__PURE__*/_react.default.createElement(_reactDateRange.DateRange, {
    editableDateInputs: true,
    onChange: function onChange(item) {
      return handleChangeDates(item);
    },
    moveRangeOnFirstSelection: false,
    ranges: dateRange
  })))), /*#__PURE__*/_react.default.createElement(_styles2.LabelWrapper, null, /*#__PURE__*/_react.default.createElement("label", null, t('LABEL', 'Label')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "label",
    placeholder: t('LABEL', 'Label'),
    value: (_ref3 = (_formState$changes$la = formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.label) !== null && _formState$changes$la !== void 0 ? _formState$changes$la : promotionState === null || promotionState === void 0 ? void 0 : (_promotionState$promo7 = promotionState.promotion) === null || _promotionState$promo7 === void 0 ? void 0 : _promotionState$promo7.label) !== null && _ref3 !== void 0 ? _ref3 : '',
    onChange: handleChangeInput
  }))), /*#__PURE__*/_react.default.createElement(_styles2.OrderPriorityContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('ORDER_PRIORITY', 'Order priority')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    placeholder: t('SELECT_ORDER_PRIORITY', 'Select order priority'),
    defaultValue: (_formState$changes$or = formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.order_priority) !== null && _formState$changes$or !== void 0 ? _formState$changes$or : (_promotionState$promo8 = promotionState.promotion) === null || _promotionState$promo8 === void 0 ? void 0 : _promotionState$promo8.order_priority,
    options: OrderPriorityOptions,
    onChange: function onChange(val) {
      return handleChangeItem({
        order_priority: val
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.StackableContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('ALLOW_COMBINE_OFFER', 'Allow to combine offer (discount/coupon) with others?')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: typeof ((_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.stackable) !== 'undefined' ? (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.stackable : (_promotionState$promo9 = (_promotionState$promo10 = promotionState.promotion) === null || _promotionState$promo10 === void 0 ? void 0 : _promotionState$promo10.stackable) !== null && _promotionState$promo9 !== void 0 ? _promotionState$promo9 : false,
    onChange: function onChange(e) {
      return handleChangeItem({
        stackable: e.target.checked
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState.changes).length === 0 || actionState.loading
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
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
  }));
};

exports.EnterprisePromotionGeneralDetails = EnterprisePromotionGeneralDetails;