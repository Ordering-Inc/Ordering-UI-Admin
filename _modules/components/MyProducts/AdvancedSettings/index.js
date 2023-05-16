"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdmin = require("ordering-components-admin");
var _SettingComponent = require("./SettingComponent");
var _styles = require("../../../styles");
var _ImageBox = require("./ImageBox");
var _Shared = require("../../Shared");
var _OrderType = require("./OrderType");
var _FontStyleGroup = require("./FontStyleGroup");
var _styles2 = require("./styles");
var _UploadAudio = require("../UploadAudio");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdvancedSettings = function AdvancedSettings(props) {
  var _themeValuesRef$curre, _themeValuesRef$curre2, _themeValuesRef$curre3, _themeValuesRef$curre4, _themeValuesRef$curre5, _themeValuesRef$curre6, _themeValuesRef$curre7, _themesList$themes3, _themesList$themes3$, _themesList$themes4, _themesList$themes4$, _themeValuesRef$curre8, _themeValuesRef$curre9, _themeValuesRef$curre10, _themeValuesRef$curre11, _themeValuesRef$curre12, _themeValuesRef$curre13, _themeValuesRef$curre14, _themeValuesRef$curre15, _themeValuesRef$curre16, _themeValuesRef$curre17, _themesList$themes5, _themesList$themes5$, _themeValuesRef$curre18, _themeValuesRef$curre19, _themeValuesRef$curre20, _themeValuesRef$curre21, _themeValuesRef$curre22, _themesList$themes6, _themesList$themes6$, _themesList$themes7, _themesList$themes7$, _themeValuesRef$curre23, _themeValuesRef$curre24, _themeValuesRef$curre25, _themeValuesRef$curre26, _themeValuesRef$curre27, _themeValuesRef$curre28, _themeValuesRef$curre29, _themesList$themes8, _themesList$themes8$, _themeValuesRef$curre30, _themeValuesRef$curre31, _themeValuesRef$curre32, _themeValuesRef$curre33, _themeValuesRef$curre34, _themesList$themes9, _themesList$themes9$, _themesList$themes10, _themesList$themes10$, _themesList$themes11, _themesList$themes11$, _themesList$themes12, _themesList$themes12$, _themesList$themes13, _themesList$themes13$, _themesList$themes14, _themesList$themes14$, _themesList$themes15, _themesList$themes15$, _themesList$themes16, _themesList$themes16$, _themesList$themes17, _themesList$themes17$, _themesList$themes18, _themesList$themes18$, _themesList$themes19, _themesList$themes19$, _themesList$themes20, _themesList$themes20$, _themesList$themes21, _themesList$themes21$, _themesList$themes22, _themesList$themes22$, _themesList$themes23, _themesList$themes23$, _themeValuesRef$curre35, _themeValuesRef$curre36, _themeValuesRef$curre37, _themeValuesRef$curre38, _themeValuesRef$curre39, _themeValuesRef$curre40, _themeValuesRef$curre41, _themeValuesRef$curre42, _themeValuesRef$curre43, _themeValuesRef$curre44, _themeValuesRef$curre45, _themeValuesRef$curre46, _themesList$themes24, _themesList$themes24$, _themeValuesRef$curre47, _themeValuesRef$curre48, _themeValuesRef$curre49, _themeValuesRef$curre50, _themeValuesRef$curre51, _themeValuesRef$curre52, _themeValuesRef$curre53, _themeValuesRef$curre54, _themeValuesRef$curre55, _themesList$themes25, _themesList$themes25$, _themeValuesRef$curre56, _themeValuesRef$curre57, _themeValuesRef$curre58, _themeValuesRef$curre59, _themeValuesRef$curre60, _themeValuesRef$curre61, _themeValuesRef$curre62, _themeValuesRef$curre63, _themeValuesRef$curre64, _themesList$themes26, _themesList$themes26$, _themeValuesRef$curre65, _themeValuesRef$curre66, _themeValuesRef$curre67, _themeValuesRef$curre68, _themeValuesRef$curre69, _themeValuesRef$curre70, _themeValuesRef$curre71, _themeValuesRef$curre72, _themeValuesRef$curre73, _themesList$themes27, _themesList$themes27$, _themeValuesRef$curre74, _themeValuesRef$curre75, _themeValuesRef$curre76, _themeValuesRef$curre77, _themeValuesRef$curre78, _themeValuesRef$curre79, _themeValuesRef$curre80, _themeValuesRef$curre81, _themeValuesRef$curre82, _themesList$themes28, _themesList$themes28$, _themesList$themes29, _themesList$themes29$, _themesList$themes30, _themesList$themes30$;
  var themesList = props.themesList,
    advancedValues = props.advancedValues,
    handleUpdateSiteTheme = props.handleUpdateSiteTheme,
    isApp = props.isApp;
  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    themeStructure = _useState2[0],
    setThemeStructure = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var themeValuesRef = (0, _react.useRef)({});
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenSound = _useState6[0],
    setIsOpenSound = _useState6[1];
  var headerList = [{
    name: t('BACKGROUND_COLOR', 'Background color'),
    type: 'color',
    path: 'header.components.style.backgroundColor'
  }, {
    name: t('LOGO_POSITION', 'Logo Position'),
    type: 'position',
    path: 'header.components.logo.components.layout.position'
  }, {
    name: t('LANGUAGE_SELECTOR', 'Language selector'),
    type: 'hidden',
    path: 'header.components.language_selector.hidden'
  }];
  var businessListing = [{
    name: '',
    type: 'hidden',
    path: 'business_listing_view.hidden'
  }, {
    name: t('BUSINESS_LISTING_IMAGE', 'Business listing image'),
    type: 'image',
    path: 'business_listing_view.components.business_hero.components.image'
  }, {
    name: t('HIGHEST_RATED_BUSINESS_BLOCK', 'Highest rated business block'),
    type: 'hidden',
    path: 'business_listing_view.components.highest_rated_business_block.hidden'
  }, {
    name: t('CATEGORIES_BLOCK', 'Categories block'),
    type: 'hidden',
    path: 'business_listing_view.components.categories.hidden'
  }, {
    name: t('AMOUNT_OF_BUSINESSES_TO_DISPLAY_PER_ROW', 'Amount of businesses to display per row:'),
    type: 'position',
    path: 'business_listing_view.components.layout.rows'
  }, {
    name: t('CITIES_DROPDOWN', 'Cities dropdown'),
    type: 'hidden',
    path: 'business_listing_view.components.cities.hidden'
  }];
  var businessBlockList = [{
    name: t('LOGO', 'Logo'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.logo.hidden'
  }, {
    name: t('HEADER', 'Header'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.header.hidden'
  }, {
    name: t('DELIVERY_FEE', 'Delivery Fee'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.fee.hidden'
  }, {
    name: t('TIME', 'Time'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.time.hidden'
  }, {
    name: t('DISTANCE', 'Distance'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.distance.hidden'
  }, {
    name: t('REVIEWS', 'Reviews'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.reviews.hidden'
  }, {
    name: t('FAVORITE_BUTTON', 'Favorite button'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.favorite.hidden'
  }, {
    name: t('OFFER_BADGE', 'Offer badge'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.offer.hidden'
  }, {
    name: t('OFFER_BADGE_POSITION', 'Offer badge position'),
    type: 'position',
    path: 'business_listing_view.components.business.components.offer.position'
  }, {
    name: t('FEATURED_BADGE', 'Featured badge'),
    type: 'hidden',
    path: 'business_listing_view.components.business.components.featured_badge.hidden'
  }];
  var businessPageList = [{
    name: t('DEFAULT_BACKGROUND_COLOR', 'Default Background color'),
    type: 'color',
    path: 'business_view.components.style.backgroundColor'
  }, {
    name: t('PRODUCTS_FROM_PREVIOUS_ORDERS_BLOCK', 'Products from previous orders block'),
    type: 'hidden',
    path: 'business_view.components.products_ordered.hidden'
  }, {
    name: t('NEAR_BUSINESS_BLOCK', 'Near business block'),
    type: 'hidden',
    path: 'business_view.components.near_business.hidden'
  }];
  var businessInfoList = [{
    name: t('DESCRIPTION', 'Description'),
    type: 'hidden',
    path: 'business_view.components.information.components.description.hidden'
  }, {
    name: t('VIDEOS', 'Videos'),
    type: 'hidden',
    path: 'business_view.components.information.components.videos.hidden'
  }, {
    name: t('MENU_LIST_DELIVERY_TIME', 'Delivery time'),
    type: 'hidden',
    path: 'business_view.components.information.components.delivery_time.hidden'
  }, {
    name: t('PICKUP_TIME', 'Pickup time'),
    type: 'hidden',
    path: 'business_view.components.information.components.pickup_time.hidden'
  }, {
    name: t('IMAGES', 'Images'),
    type: 'hidden',
    path: 'business_view.components.information.components.images.hidden'
  }, {
    name: t('ADDRESS', 'Address'),
    type: 'hidden',
    path: 'business_view.components.information.components.address.hidden'
  }];
  var productBlockList = [{
    name: t('DUMMY_IMAGE_WHEN_NO_IMAGE', 'Dummy image when no image'),
    type: 'hidden',
    path: 'business_view.components.products.components.product.components.dummy.hidden'
  }, {
    name: t('DESCRIPTION', 'Description'),
    type: 'hidden',
    path: 'business_view.components.products.components.product.components.description.hidden'
  }, {
    name: t('IMAGE', 'Image'),
    type: 'hidden',
    path: 'business_view.components.products.components.product.components.image.hidden'
  }, {
    name: t('POSITION', 'Position'),
    type: 'position',
    path: 'business_view.components.products.components.product.components.image.position'
  }];
  var reviewsPopups = [{
    name: t('REVIEW_DATE', 'Review date'),
    type: 'hidden',
    path: 'business_view.components.reviews.components.review_date.hidden'
  }];
  var cartHeaderList = [{
    name: t('BUSINESS_LOGO', 'Business logo'),
    type: 'hidden',
    path: 'header.components.cart.components.business.components.logo.hidden'
  }, {
    name: t('PRODUCT_IMAGE', 'Product image'),
    type: 'hidden',
    path: 'header.components.cart.components.products.components.image.hidden'
  }, {
    name: t('DISCOUNT_COUPON', 'Discount coupon'),
    type: 'hidden',
    path: 'header.components.cart.components.discount_coupon.hidden'
  }, {
    name: t('COMMENTS', 'Comments'),
    type: 'hidden',
    path: 'header.components.cart.components.comments.hidden'
  }];
  var checkoutList = [{
    name: t('BUSINESS_ADDRESS', 'Business address'),
    type: 'hidden',
    path: 'checkout.components.business.components.address.hidden'
  }, {
    name: t('MAP', 'Map'),
    type: 'hidden',
    path: 'checkout.components.map.hidden'
  }];
  var orderBlockList = [{
    name: t('DATE', 'Date'),
    type: 'hidden',
    path: 'confirmation.components.order.components.date.hidden'
  }, {
    name: t('PROGRESS_BAR', 'Progress bar'),
    type: 'hidden',
    path: 'confirmation.components.order.components.progress.hidden'
  }];
  var popupAddressList = [{
    name: t('MAP', 'Map'),
    type: 'hidden',
    path: 'address.components.map.hidden'
  }, {
    name: t('INTERNAL_NUMBER', 'Internal number'),
    type: 'hidden',
    path: 'address.components.internal_number.hidden'
  }, {
    name: t('ADDRESS_NOTES', 'Address notes'),
    type: 'hidden',
    path: 'address.components.address_notes.hidden'
  }, {
    name: t('ICONS', 'Icons'),
    type: 'hidden',
    path: 'address.components.icons.hidden'
  }];
  var myAccountList = [{
    name: t('USER_IMAGE', 'User image'),
    type: 'hidden',
    path: 'profile.components.picture.hidden'
  }, {
    name: t('EXPORT_BIRTHDAY', 'Birthday'),
    type: 'hidden',
    path: 'profile.components.birthday.hidden'
  }, {
    name: t('LANGUAGES', 'Languages'),
    type: 'hidden',
    path: 'profile.components.languages.hidden'
  }, {
    name: t('ADDRESS_LIST', 'Address list'),
    type: 'hidden',
    path: 'profile.components.address_list.hidden'
  }];
  var activeOrderBlockList = [{
    name: t('BUSINESS_LOGO', 'Business logo'),
    type: 'hidden',
    path: 'orders.components.business_logo.hidden'
  }, {
    name: t('EXPORT_BUSINESS_NAME', 'Business name'),
    type: 'hidden',
    path: 'orders.components.business_name.hidden'
  }, {
    name: t('ORDER_NUMBER', 'Order number'),
    type: 'hidden',
    path: 'orders.components.order_number.hidden'
  }, {
    name: t('ORDER_DATE', 'Order date'),
    type: 'hidden',
    path: 'orders.components.date.hidden'
  }, {
    name: t('EXPORT_REVIEW_ORDER_BUTTON', 'Review order button'),
    type: 'hidden',
    path: 'orders.components.review_order_button.hidden'
  }, {
    name: t('EXPORT_REORDER_BUTTON', 'Reorder button'),
    type: 'hidden',
    path: 'orders.components.reorder_button.hidden'
  }, {
    name: t('FAVORITE_BUTTON', 'Favorite button'),
    type: 'hidden',
    path: 'orders.components.favorite.hidden'
  }, {
    name: t('ORDER_STATUS', 'Order status'),
    type: 'hidden',
    path: 'orders.components.order_status.hidden'
  }, {
    name: t('EXPORT_PREVIOUS_ORDER_BLOCK', 'Previous order block'),
    type: 'hidden',
    path: 'orders.components.past_orders.hidden'
  }, {
    name: t('EXPORT_BUSINESS_TAB', 'Business tab'),
    type: 'hidden',
    path: 'orders.components.business_tab.hidden'
  }, {
    name: t('EXPORT_PRODUCTS_TAB', 'Products tab'),
    type: 'hidden',
    path: 'orders.components.products_tab.hidden'
  }];
  var menuOptionList = [{
    name: t('EXPORT_BROWSE_AND_SEARCH', 'Browse and search'),
    type: 'hidden',
    path: 'bar_menu.components.browse.hidden'
  }, {
    name: t('WALLETS', 'Wallets'),
    type: 'hidden',
    path: 'bar_menu.components.wallet.hidden'
  }, {
    name: t('PROMOTIONS', 'Promotions'),
    type: 'hidden',
    path: 'bar_menu.components.promotions.hidden'
  }, {
    name: t('MESSAGES', 'Messages'),
    type: 'hidden',
    path: 'bar_menu.components.messages.hidden'
  }, {
    name: t('HELP', 'Help'),
    type: 'hidden',
    path: 'bar_menu.components.help.hidden'
  }, {
    name: t('EXPORT_SECURITY', 'Security'),
    type: 'hidden',
    path: 'bar_menu.components.sessions.hidden'
  }, {
    name: t('EXPORT_MY_FAVORITES', 'My favorites'),
    type: 'hidden',
    path: 'bar_menu.components.favorites.hidden'
  }];
  var thirdPartyCodeList = [{
    name: t('EXPORT_HEAD', 'Head'),
    type: 'input',
    path: 'third_party_code.head'
  }, {
    name: t('EXPORT_BODY', 'Body'),
    type: 'input',
    path: 'third_party_code.body'
  }];
  var buttonList = [{
    name: t('BORDER_RADIUS', 'Border Radius'),
    type: 'input',
    path: 'general.components.buttons.borderRadius'
  }];
  var homeImageFullScreen = [{
    name: t('HOMEPAGE_IMAGE_FULLSCREEN', 'Homepage image fullscreen'),
    type: 'hidden',
    path: 'my_products.components.images.components.homepage_image_fullscreen'
  }];
  var navigationBarList = [{
    name: t('BROWSE', 'Browse'),
    type: 'hidden',
    path: 'bar_menu.components.browse.hidden'
  }, {
    name: t('ORDERS', 'Orders'),
    type: 'hidden',
    path: 'bar_menu.components.orders.hidden'
  }, {
    name: t('MY_CARTS', 'My carts'),
    type: 'hidden',
    path: 'bar_menu.components.my_carts.hidden'
  }, {
    name: t('WALLET', 'Wallet'),
    type: 'hidden',
    path: 'bar_menu.components.wallet.hidden'
  }, {
    name: t('PROFILE', 'Profile'),
    type: 'hidden',
    path: 'bar_menu.components.profile.hidden'
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var updateObject = function updateObject(object, newValue, path) {
    var stack = path.split('.');
    while (stack.length > 1) {
      object = object[stack.shift()];
    }
    object[stack.shift()] = newValue;
  };
  var handleUpdateThemeValue = function handleUpdateThemeValue(value, path) {
    var _advancedValues = JSON.parse(JSON.stringify(themeValuesRef.current));
    updateObject(_advancedValues, value, path);
    themeValuesRef.current = _advancedValues;
  };
  (0, _react.useEffect)(function () {
    var _themesList$themes, _themesList$themes$;
    if (!(themesList !== null && themesList !== void 0 && themesList.loading) && themesList !== null && themesList !== void 0 && (_themesList$themes = themesList.themes) !== null && _themesList$themes !== void 0 && (_themesList$themes$ = _themesList$themes[0]) !== null && _themesList$themes$ !== void 0 && _themesList$themes$.structure) {
      var _themesList$themes2, _themesList$themes2$;
      setThemeStructure(JSON.parse(JSON.stringify(themesList === null || themesList === void 0 ? void 0 : (_themesList$themes2 = themesList.themes) === null || _themesList$themes2 === void 0 ? void 0 : (_themesList$themes2$ = _themesList$themes2[0]) === null || _themesList$themes2$ === void 0 ? void 0 : _themesList$themes2$.structure)));
    }
  }, [themesList]);
  (0, _react.useEffect)(function () {
    themeValuesRef.current = JSON.parse(JSON.stringify(advancedValues));
  }, [advancedValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_APP_ADVANCED_SETTINGS', 'Customer App  Advanced Settings')), /*#__PURE__*/_react.default.createElement("h2", null, t('HOMEPAGE', 'Homepage')), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('HOMEPAGE_IMAGE', 'Homepage image'),
    ratio: "1350 x 400 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre = themeValuesRef.current) === null || _themeValuesRef$curre === void 0 ? void 0 : (_themeValuesRef$curre2 = _themeValuesRef$curre.my_products) === null || _themeValuesRef$curre2 === void 0 ? void 0 : (_themeValuesRef$curre3 = _themeValuesRef$curre2.components) === null || _themeValuesRef$curre3 === void 0 ? void 0 : (_themeValuesRef$curre4 = _themeValuesRef$curre3.images) === null || _themeValuesRef$curre4 === void 0 ? void 0 : (_themeValuesRef$curre5 = _themeValuesRef$curre4.components) === null || _themeValuesRef$curre5 === void 0 ? void 0 : (_themeValuesRef$curre6 = _themeValuesRef$curre5.homepage_background) === null || _themeValuesRef$curre6 === void 0 ? void 0 : (_themeValuesRef$curre7 = _themeValuesRef$curre6.components) === null || _themeValuesRef$curre7 === void 0 ? void 0 : _themeValuesRef$curre7.image,
    path: "my_products.components.images.components.homepage_background.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes3 = themesList.themes) === null || _themesList$themes3 === void 0 ? void 0 : (_themesList$themes3$ = _themesList$themes3[0]) === null || _themesList$themes3$ === void 0 ? void 0 : _themesList$themes3$.id,
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, !isApp && /*#__PURE__*/_react.default.createElement("h1", null, t('WEBSITE_ADVANCED_SETTINGS', 'Website  Advanced Settings')), /*#__PURE__*/_react.default.createElement("h2", null, t('BUTTONS', 'Buttons')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: buttonList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes4 = themesList.themes) === null || _themesList$themes4 === void 0 ? void 0 : (_themesList$themes4$ = _themesList$themes4[0]) === null || _themesList$themes4$ === void 0 ? void 0 : _themesList$themes4$.id
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    borderRadius: "8px",
    onClick: function onClick() {
      return setIsOpenSound(true);
    },
    className: "custom"
  }, t('CUSTOM_SOUNDS', 'Custom sounds'))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('TIPOGRAPHY', 'Tipography')), /*#__PURE__*/_react.default.createElement(_styles2.HeadingWrapper, null, /*#__PURE__*/_react.default.createElement(_FontStyleGroup.FontStyleGroup, {
    fonts: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre8 = themeValuesRef.current) === null || _themeValuesRef$curre8 === void 0 ? void 0 : (_themeValuesRef$curre9 = _themeValuesRef$curre8.general) === null || _themeValuesRef$curre9 === void 0 ? void 0 : (_themeValuesRef$curre10 = _themeValuesRef$curre9.components) === null || _themeValuesRef$curre10 === void 0 ? void 0 : (_themeValuesRef$curre11 = _themeValuesRef$curre10.fonts) === null || _themeValuesRef$curre11 === void 0 ? void 0 : _themeValuesRef$curre11.primary,
    path: "general.components.fonts.primary",
    handleUpdateThemeValue: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('IMAGES', 'Images')), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('BUSINESS_LOGO_DUMMY_IMAGE', 'Business Logo dummy image'),
    ratio: "512 x 512 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre12 = themeValuesRef.current) === null || _themeValuesRef$curre12 === void 0 ? void 0 : (_themeValuesRef$curre13 = _themeValuesRef$curre12.business_view) === null || _themeValuesRef$curre13 === void 0 ? void 0 : (_themeValuesRef$curre14 = _themeValuesRef$curre13.components) === null || _themeValuesRef$curre14 === void 0 ? void 0 : (_themeValuesRef$curre15 = _themeValuesRef$curre14.header) === null || _themeValuesRef$curre15 === void 0 ? void 0 : (_themeValuesRef$curre16 = _themeValuesRef$curre15.components) === null || _themeValuesRef$curre16 === void 0 ? void 0 : (_themeValuesRef$curre17 = _themeValuesRef$curre16.logo) === null || _themeValuesRef$curre17 === void 0 ? void 0 : _themeValuesRef$curre17.dummy_image,
    path: "business_view.components.header.components.logo.dummy_image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes5 = themesList.themes) === null || _themesList$themes5 === void 0 ? void 0 : (_themesList$themes5$ = _themesList$themes5[0]) === null || _themesList$themes5$ === void 0 ? void 0 : _themesList$themes5$.id,
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('BUSINESS_HEADER_DUMMY_IMAGE', 'Business header dummy image'),
    ratio: "1350 x 400 px",
    isBig: true,
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre18 = themeValuesRef.current) === null || _themeValuesRef$curre18 === void 0 ? void 0 : (_themeValuesRef$curre19 = _themeValuesRef$curre18.business_view) === null || _themeValuesRef$curre19 === void 0 ? void 0 : (_themeValuesRef$curre20 = _themeValuesRef$curre19.components) === null || _themeValuesRef$curre20 === void 0 ? void 0 : (_themeValuesRef$curre21 = _themeValuesRef$curre20.header) === null || _themeValuesRef$curre21 === void 0 ? void 0 : (_themeValuesRef$curre22 = _themeValuesRef$curre21.components) === null || _themeValuesRef$curre22 === void 0 ? void 0 : _themeValuesRef$curre22.dummy_image,
    path: "business_view.components.header.components.dummy_image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes6 = themesList.themes) === null || _themesList$themes6 === void 0 ? void 0 : (_themesList$themes6$ = _themesList$themes6[0]) === null || _themesList$themes6$ === void 0 ? void 0 : _themesList$themes6$.id,
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: homeImageFullScreen,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes7 = themesList.themes) === null || _themesList$themes7 === void 0 ? void 0 : (_themesList$themes7$ = _themesList$themes7[0]) === null || _themesList$themes7$ === void 0 ? void 0 : _themesList$themes7$.id,
    noLabel: true
  }), /*#__PURE__*/_react.default.createElement(_styles2.ImageGroup, null, /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('PRODUCT_DUMMY_IMAGE', 'Product dummy image'),
    ratio: "900 x 200 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre23 = themeValuesRef.current) === null || _themeValuesRef$curre23 === void 0 ? void 0 : (_themeValuesRef$curre24 = _themeValuesRef$curre23.business_view) === null || _themeValuesRef$curre24 === void 0 ? void 0 : (_themeValuesRef$curre25 = _themeValuesRef$curre24.components) === null || _themeValuesRef$curre25 === void 0 ? void 0 : (_themeValuesRef$curre26 = _themeValuesRef$curre25.products) === null || _themeValuesRef$curre26 === void 0 ? void 0 : (_themeValuesRef$curre27 = _themeValuesRef$curre26.components) === null || _themeValuesRef$curre27 === void 0 ? void 0 : (_themeValuesRef$curre28 = _themeValuesRef$curre27.photo) === null || _themeValuesRef$curre28 === void 0 ? void 0 : (_themeValuesRef$curre29 = _themeValuesRef$curre28.components) === null || _themeValuesRef$curre29 === void 0 ? void 0 : _themeValuesRef$curre29.dummy_image,
    path: "business_view.components.products.components.photo.components.dummy_image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes8 = themesList.themes) === null || _themesList$themes8 === void 0 ? void 0 : (_themesList$themes8$ = _themesList$themes8[0]) === null || _themesList$themes8$ === void 0 ? void 0 : _themesList$themes8$.id,
    handleChangePhoto: handleUpdateThemeValue
  }))), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('FAVICON', 'Favicon')), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('FAVICON', 'Favicon'),
    ratio: "512 x 512 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre30 = themeValuesRef.current) === null || _themeValuesRef$curre30 === void 0 ? void 0 : (_themeValuesRef$curre31 = _themeValuesRef$curre30.general) === null || _themeValuesRef$curre31 === void 0 ? void 0 : (_themeValuesRef$curre32 = _themeValuesRef$curre31.components) === null || _themeValuesRef$curre32 === void 0 ? void 0 : (_themeValuesRef$curre33 = _themeValuesRef$curre32.favicon) === null || _themeValuesRef$curre33 === void 0 ? void 0 : (_themeValuesRef$curre34 = _themeValuesRef$curre33.components) === null || _themeValuesRef$curre34 === void 0 ? void 0 : _themeValuesRef$curre34.image,
    path: "general.components.favicon.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes9 = themesList.themes) === null || _themesList$themes9 === void 0 ? void 0 : (_themesList$themes9$ = _themesList$themes9[0]) === null || _themesList$themes9$ === void 0 ? void 0 : _themesList$themes9$.id,
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('HEADER', 'Header')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: headerList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes10 = themesList.themes) === null || _themesList$themes10 === void 0 ? void 0 : (_themesList$themes10$ = _themesList$themes10[0]) === null || _themesList$themes10$ === void 0 ? void 0 : _themesList$themes10$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_LISTING', 'Business listing')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessListing,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes11 = themesList.themes) === null || _themesList$themes11 === void 0 ? void 0 : (_themesList$themes11$ = _themesList$themes11[0]) === null || _themesList$themes11$ === void 0 ? void 0 : _themesList$themes11$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_BLOCK', 'Business block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes12 = themesList.themes) === null || _themesList$themes12 === void 0 ? void 0 : (_themesList$themes12$ = _themesList$themes12[0]) === null || _themesList$themes12$ === void 0 ? void 0 : _themesList$themes12$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_PAGE', 'Business page')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessPageList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes13 = themesList.themes) === null || _themesList$themes13 === void 0 ? void 0 : (_themesList$themes13$ = _themesList$themes13[0]) === null || _themesList$themes13$ === void 0 ? void 0 : _themesList$themes13$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESS_INFORMATION', 'Business Information')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: businessInfoList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes14 = themesList.themes) === null || _themesList$themes14 === void 0 ? void 0 : (_themesList$themes14$ = _themesList$themes14[0]) === null || _themesList$themes14$ === void 0 ? void 0 : _themesList$themes14$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCTS_BLOCK', 'Products block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: productBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes15 = themesList.themes) === null || _themesList$themes15 === void 0 ? void 0 : (_themesList$themes15$ = _themesList$themes15[0]) === null || _themesList$themes15$ === void 0 ? void 0 : _themesList$themes15$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REVIEWS_POPUPS', 'Reviews popups')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: reviewsPopups,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes16 = themesList.themes) === null || _themesList$themes16 === void 0 ? void 0 : (_themesList$themes16$ = _themesList$themes16[0]) === null || _themesList$themes16$ === void 0 ? void 0 : _themesList$themes16$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CART_HEADER', 'Cart Header')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: cartHeaderList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes17 = themesList.themes) === null || _themesList$themes17 === void 0 ? void 0 : (_themesList$themes17$ = _themesList$themes17[0]) === null || _themesList$themes17$ === void 0 ? void 0 : _themesList$themes17$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CHECKOUT', 'Checkout')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: checkoutList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes18 = themesList.themes) === null || _themesList$themes18 === void 0 ? void 0 : (_themesList$themes18$ = _themesList$themes18[0]) === null || _themesList$themes18$ === void 0 ? void 0 : _themesList$themes18$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CONFIRMATION_PAGE', 'Confirmation page')), /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_BLOCK', 'Order block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: orderBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes19 = themesList.themes) === null || _themesList$themes19 === void 0 ? void 0 : (_themesList$themes19$ = _themesList$themes19[0]) === null || _themesList$themes19$ === void 0 ? void 0 : _themesList$themes19$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h3", null, t('POPUP_ADDRESS', 'Popup: Address')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: popupAddressList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes20 = themesList.themes) === null || _themesList$themes20 === void 0 ? void 0 : (_themesList$themes20$ = _themesList$themes20[0]) === null || _themesList$themes20$ === void 0 ? void 0 : _themesList$themes20$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h3", null, t('MY_ACCOUNT_PAGE', 'My account page')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: myAccountList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes21 = themesList.themes) === null || _themesList$themes21 === void 0 ? void 0 : (_themesList$themes21$ = _themesList$themes21[0]) === null || _themesList$themes21$ === void 0 ? void 0 : _themesList$themes21$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h3", null, t('MY_ORDERS', 'My orders')), /*#__PURE__*/_react.default.createElement("h3", null, t('ACTIVE_ORDERS_BLOCK', 'Active Orders Block')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: activeOrderBlockList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes22 = themesList.themes) === null || _themesList$themes22 === void 0 ? void 0 : (_themesList$themes22$ = _themesList$themes22[0]) === null || _themesList$themes22$ === void 0 ? void 0 : _themesList$themes22$.id
  })), !isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MENU_OPTIONS', 'Menu options')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: menuOptionList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: advancedValues,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes23 = themesList.themes) === null || _themesList$themes23 === void 0 ? void 0 : (_themesList$themes23$ = _themesList$themes23[0]) === null || _themesList$themes23$ === void 0 ? void 0 : _themesList$themes23$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POPUP_ORDER_TYPES', 'Popup: Order types ')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TITLE_MENU_OPTIONS', 'Title Menu options')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('TITLE_MENU_OPTIONS', 'Title Menu options'),
    defaultValue: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre35 = themeValuesRef.current) === null || _themeValuesRef$curre35 === void 0 ? void 0 : (_themeValuesRef$curre36 = _themeValuesRef$curre35.order_types) === null || _themeValuesRef$curre36 === void 0 ? void 0 : (_themeValuesRef$curre37 = _themeValuesRef$curre36.components) === null || _themeValuesRef$curre37 === void 0 ? void 0 : _themeValuesRef$curre37.title_menu,
    onChange: function onChange(e) {
      return handleUpdateThemeValue(e.target.value, 'order_types.components.title_menu');
    }
  })), /*#__PURE__*/_react.default.createElement("h3", null, t('DELIVERY', 'Delivery')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre38 = themeValuesRef.current) === null || _themeValuesRef$curre38 === void 0 ? void 0 : (_themeValuesRef$curre39 = _themeValuesRef$curre38.order_types) === null || _themeValuesRef$curre39 === void 0 ? void 0 : (_themeValuesRef$curre40 = _themeValuesRef$curre39.components) === null || _themeValuesRef$curre40 === void 0 ? void 0 : (_themeValuesRef$curre41 = _themeValuesRef$curre40.delivery) === null || _themeValuesRef$curre41 === void 0 ? void 0 : _themeValuesRef$curre41.components,
    path: "order_types.components.delivery.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('DELIVERY_OPTION_IMAGE', 'Delivery option image'),
    ratio: "900 x 200 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre42 = themeValuesRef.current) === null || _themeValuesRef$curre42 === void 0 ? void 0 : (_themeValuesRef$curre43 = _themeValuesRef$curre42.order_types) === null || _themeValuesRef$curre43 === void 0 ? void 0 : (_themeValuesRef$curre44 = _themeValuesRef$curre43.components) === null || _themeValuesRef$curre44 === void 0 ? void 0 : (_themeValuesRef$curre45 = _themeValuesRef$curre44.delivery) === null || _themeValuesRef$curre45 === void 0 ? void 0 : (_themeValuesRef$curre46 = _themeValuesRef$curre45.components) === null || _themeValuesRef$curre46 === void 0 ? void 0 : _themeValuesRef$curre46.image,
    path: "order_types.components.delivery.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes24 = themesList.themes) === null || _themesList$themes24 === void 0 ? void 0 : (_themesList$themes24$ = _themesList$themes24[0]) === null || _themesList$themes24$ === void 0 ? void 0 : _themesList$themes24$.id,
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre47 = themeValuesRef.current) === null || _themeValuesRef$curre47 === void 0 ? void 0 : (_themeValuesRef$curre48 = _themeValuesRef$curre47.order_types) === null || _themeValuesRef$curre48 === void 0 ? void 0 : (_themeValuesRef$curre49 = _themeValuesRef$curre48.components) === null || _themeValuesRef$curre49 === void 0 ? void 0 : (_themeValuesRef$curre50 = _themeValuesRef$curre49.pickup) === null || _themeValuesRef$curre50 === void 0 ? void 0 : _themeValuesRef$curre50.components,
    path: "order_types.components.pickup.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('PICKUP_OPTION_IMAGE', 'Pickup option image'),
    ratio: "900 x 200 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre51 = themeValuesRef.current) === null || _themeValuesRef$curre51 === void 0 ? void 0 : (_themeValuesRef$curre52 = _themeValuesRef$curre51.order_types) === null || _themeValuesRef$curre52 === void 0 ? void 0 : (_themeValuesRef$curre53 = _themeValuesRef$curre52.components) === null || _themeValuesRef$curre53 === void 0 ? void 0 : (_themeValuesRef$curre54 = _themeValuesRef$curre53.pickup) === null || _themeValuesRef$curre54 === void 0 ? void 0 : (_themeValuesRef$curre55 = _themeValuesRef$curre54.components) === null || _themeValuesRef$curre55 === void 0 ? void 0 : _themeValuesRef$curre55.image,
    path: "order_types.components.pickup.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes25 = themesList.themes) === null || _themesList$themes25 === void 0 ? void 0 : (_themesList$themes25$ = _themesList$themes25[0]) === null || _themesList$themes25$ === void 0 ? void 0 : _themesList$themes25$.id,
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('EAT_IN', 'Eat in')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre56 = themeValuesRef.current) === null || _themeValuesRef$curre56 === void 0 ? void 0 : (_themeValuesRef$curre57 = _themeValuesRef$curre56.order_types) === null || _themeValuesRef$curre57 === void 0 ? void 0 : (_themeValuesRef$curre58 = _themeValuesRef$curre57.components) === null || _themeValuesRef$curre58 === void 0 ? void 0 : (_themeValuesRef$curre59 = _themeValuesRef$curre58.eat_in) === null || _themeValuesRef$curre59 === void 0 ? void 0 : _themeValuesRef$curre59.components,
    path: "order_types.components.eat_in.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('EAT_IN_OPTION_IMAGE', 'Eat in option image'),
    ratio: "900 x 200 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre60 = themeValuesRef.current) === null || _themeValuesRef$curre60 === void 0 ? void 0 : (_themeValuesRef$curre61 = _themeValuesRef$curre60.order_types) === null || _themeValuesRef$curre61 === void 0 ? void 0 : (_themeValuesRef$curre62 = _themeValuesRef$curre61.components) === null || _themeValuesRef$curre62 === void 0 ? void 0 : (_themeValuesRef$curre63 = _themeValuesRef$curre62.eat_in) === null || _themeValuesRef$curre63 === void 0 ? void 0 : (_themeValuesRef$curre64 = _themeValuesRef$curre63.components) === null || _themeValuesRef$curre64 === void 0 ? void 0 : _themeValuesRef$curre64.image,
    path: "order_types.components.eat_in.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes26 = themesList.themes) === null || _themesList$themes26 === void 0 ? void 0 : (_themesList$themes26$ = _themesList$themes26[0]) === null || _themesList$themes26$ === void 0 ? void 0 : _themesList$themes26$.id,
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('CURBSIDE', 'Curbside')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre65 = themeValuesRef.current) === null || _themeValuesRef$curre65 === void 0 ? void 0 : (_themeValuesRef$curre66 = _themeValuesRef$curre65.order_types) === null || _themeValuesRef$curre66 === void 0 ? void 0 : (_themeValuesRef$curre67 = _themeValuesRef$curre66.components) === null || _themeValuesRef$curre67 === void 0 ? void 0 : (_themeValuesRef$curre68 = _themeValuesRef$curre67.curbside) === null || _themeValuesRef$curre68 === void 0 ? void 0 : _themeValuesRef$curre68.components,
    path: "order_types.components.curbside.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('CURBSIDE_OPTION_IMAGE', 'Curbside option image'),
    ratio: "900 x 200 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre69 = themeValuesRef.current) === null || _themeValuesRef$curre69 === void 0 ? void 0 : (_themeValuesRef$curre70 = _themeValuesRef$curre69.order_types) === null || _themeValuesRef$curre70 === void 0 ? void 0 : (_themeValuesRef$curre71 = _themeValuesRef$curre70.components) === null || _themeValuesRef$curre71 === void 0 ? void 0 : (_themeValuesRef$curre72 = _themeValuesRef$curre71.curbside) === null || _themeValuesRef$curre72 === void 0 ? void 0 : (_themeValuesRef$curre73 = _themeValuesRef$curre72.components) === null || _themeValuesRef$curre73 === void 0 ? void 0 : _themeValuesRef$curre73.image,
    path: "order_types.components.curbside.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes27 = themesList.themes) === null || _themesList$themes27 === void 0 ? void 0 : (_themesList$themes27$ = _themesList$themes27[0]) === null || _themesList$themes27$ === void 0 ? void 0 : _themesList$themes27$.id,
    handleChangePhoto: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement("h3", null, t('DRIVE_THRU', 'Drive thru')), /*#__PURE__*/_react.default.createElement(_OrderType.OrderType, {
    typeValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre74 = themeValuesRef.current) === null || _themeValuesRef$curre74 === void 0 ? void 0 : (_themeValuesRef$curre75 = _themeValuesRef$curre74.order_types) === null || _themeValuesRef$curre75 === void 0 ? void 0 : (_themeValuesRef$curre76 = _themeValuesRef$curre75.components) === null || _themeValuesRef$curre76 === void 0 ? void 0 : (_themeValuesRef$curre77 = _themeValuesRef$curre76.drive_thru) === null || _themeValuesRef$curre77 === void 0 ? void 0 : _themeValuesRef$curre77.components,
    path: "order_types.components.drive_thru.components",
    handleUpdateThemeValue: handleUpdateThemeValue
  }), /*#__PURE__*/_react.default.createElement(_ImageBox.ImageBox, {
    title: t('DRIVE_THRU_OPTION_IMAGE', 'Drive thru option image'),
    ratio: "900 x 200 px",
    photo: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : (_themeValuesRef$curre78 = themeValuesRef.current) === null || _themeValuesRef$curre78 === void 0 ? void 0 : (_themeValuesRef$curre79 = _themeValuesRef$curre78.order_types) === null || _themeValuesRef$curre79 === void 0 ? void 0 : (_themeValuesRef$curre80 = _themeValuesRef$curre79.components) === null || _themeValuesRef$curre80 === void 0 ? void 0 : (_themeValuesRef$curre81 = _themeValuesRef$curre80.drive_thru) === null || _themeValuesRef$curre81 === void 0 ? void 0 : (_themeValuesRef$curre82 = _themeValuesRef$curre81.components) === null || _themeValuesRef$curre82 === void 0 ? void 0 : _themeValuesRef$curre82.image,
    path: "order_types.components.drive_thru.components.image",
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes28 = themesList.themes) === null || _themesList$themes28 === void 0 ? void 0 : (_themesList$themes28$ = _themesList$themes28[0]) === null || _themesList$themes28$ === void 0 ? void 0 : _themesList$themes28$.id,
    handleChangePhoto: handleUpdateThemeValue
  })), /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('THIRD_PARTY_CODE', 'Third-party code')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: thirdPartyCodeList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes29 = themesList.themes) === null || _themesList$themes29 === void 0 ? void 0 : (_themesList$themes29$ = _themesList$themes29[0]) === null || _themesList$themes29$ === void 0 ? void 0 : _themesList$themes29$.id
  })), isApp && /*#__PURE__*/_react.default.createElement(_styles2.BoxLayout, null, /*#__PURE__*/_react.default.createElement("h2", null, t('NAVIGATION_BAR_MENU', 'Navigation bar menu')), /*#__PURE__*/_react.default.createElement(_SettingComponent.SettingComponent, {
    settingList: navigationBarList,
    handleUpdateThemeValue: handleUpdateThemeValue,
    advancedValues: themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current,
    themeStructure: themeStructure,
    themeId: themesList === null || themesList === void 0 ? void 0 : (_themesList$themes30 = themesList.themes) === null || _themesList$themes30 === void 0 ? void 0 : (_themesList$themes30$ = _themesList$themes30[0]) === null || _themesList$themes30$ === void 0 ? void 0 : _themesList$themes30$.id
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleUpdateSiteTheme(themeValuesRef === null || themeValuesRef === void 0 ? void 0 : themeValuesRef.current);
    }
  }, t('SAVE', 'Save')))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "769px",
    padding: "25px",
    open: isOpenSound,
    onClose: function onClose() {
      return setIsOpenSound(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_UploadAudio.UploadAudio, {
    onClose: function onClose() {
      return setIsOpenSound(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
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
exports.AdvancedSettings = AdvancedSettings;