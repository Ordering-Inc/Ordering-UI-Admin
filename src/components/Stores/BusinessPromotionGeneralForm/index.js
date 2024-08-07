import React, { useState, useEffect, useRef } from 'react'
import { Button, Checkbox, Input, Switch, TextArea } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'
import { Alert } from '../../Shared'

import {
  BusinessPromotionForm as BusinessPromotionFormController,
  ExamineClick,
  DragAndDrop,
  useLanguage,
  useConfig
} from 'ordering-components-admin'
import {
  Camera as CameraIcon,
  CardImage,
  Calendar4,
  Circle,
  RecordCircleFill
} from 'react-bootstrap-icons'
import { bytesConverter } from '../../../utils'

import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import moment from 'moment'

import {
  Container,
  PromotionImage,
  Image,
  Camera,
  UploadImageIcon,
  ItemWrapper,
  Label,
  DateRangeWrapper,
  CalendarContainer,
  CalendarWrapper,
  PromotionTypeContainer,
  PromotionTypeWrapper,
  DiscountContainer,
  MinimumLimitContainer,
  PoromotionTargetWrapper,
  SectionTitle,
  CouponContainer,
  CouponHeader,
  CouponCodeContainer,
  CouponContent,
  ShowInCartContainer,
  DiscountOption,
  AutomaticDiscountEnableWrapper,
  StackableContainer
} from './styles'

const BusinessPromotionGeneralFormUI = (props) => {
  const {
    isAddMode,
    promotionState,
    formState,
    handleChangeImage,
    handleChangeInput,
    handleChangeItem,
    handleUpdateClick,
    handleAddClick
  } = props

  const [{ configs }] = useConfig()
  const isAdvancedOffersActivated = configs?.advanced_offers_module?.value

  const [, t] = useLanguage()
  const inputRef = useRef(null)
  const calendarRef = useRef()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ])
  const [isShowCalendar, setIsShowCalendar] = useState(false)

  const discountTypes = [
    {
      value: 1,
      content: t('PERCENTAGE', 'Percentage')
    },
    {
      value: 2,
      content: t('PRICE', 'Price')
    }
  ]
  const promotionTypes = [
    { value: 1, content: t('MOBILE_FRONT_SUB_TOTAL', 'Subtotal') },
    { value: 2, content: t('DELIVERY_FEE', 'Delivery fee') },
    { value: 3, content: t('BUSINESS_SERVICE_FEE', 'Service fee') }
  ]

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handleChangeImage(files[0])
    }
  }

  const handleClickOutside = (e) => {
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  const handleChangeDates = (item) => {
    handleChangeItem({
      start: moment(item.selection.startDate).format('YYYY-MM-DD 00:00:00'),
      end: item.selection.endDate ? moment(item.selection.endDate).format('YYYY-MM-DD 23:59:59') : null
    })
    setDateRange([item.selection])
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const onButtonClick = () => {
    if ((!formState.changes?.name && !promotionState?.promotion?.name) || formState.changes?.name === '') {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_NAME_REQUIRED', 'The field Name is required')
      })
      return
    }
    if (formState?.changes?.type === 2 && ((!formState.changes?.coupon && !promotionState?.promotion?.coupon) || formState.changes?.coupon === '')) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_COUPON_REQUIRED', 'The field Coupon is required')
      })
      return
    }
    isAddMode ? handleAddClick() : handleUpdateClick()
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShowCalendar])

  useEffect(() => {
    if (!formState?.result?.error) return
    setAlertState({
      open: true,
      content: formState?.result?.result
    })
  }, [formState?.result?.error])

  useEffect(() => {
    if (Object.keys(promotionState?.promotion).length) {
      setDateRange([
        {
          startDate: new Date(promotionState?.promotion?.start),
          endDate: new Date(promotionState?.promotion?.end),
          key: 'selection'
        }
      ])
    } else {
      setDateRange([
        {
          startDate: null,
          endDate: null,
          key: 'selection'
        }
      ])
    }
  }, [promotionState])

  return (
    <Container>
      <PromotionImage>
        <Image
          onClick={() => handleClickImage()}
        >
          <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
            <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
              {
                (!formState.changes?.image || formState.result.error)
                  ? promotionState?.promotion?.image
                    ? (<img src={promotionState?.promotion?.image} alt='promotion image' width='90px' height='90px' loading='lazy' />)
                    : (
                      <UploadImageIcon>
                        <CardImage />
                        <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                      </UploadImageIcon>
                    )
                  : formState?.changes?.image &&
                    <img src={formState?.changes?.image} alt='promotion image' loading='lazy' />
              }
            </DragAndDrop>
          </ExamineClick>
          <Camera><CameraIcon /></Camera>
        </Image>
      </PromotionImage>
      <ItemWrapper>
        <Label>{t('NAME', 'Name')}</Label>
        <Input
          name='name'
          value={formState.changes?.name ?? promotionState?.promotion?.name ?? ''}
          placeholder={t('NAME', 'Name')}
          onChange={e => handleChangeInput(e)}
        />
      </ItemWrapper>
      {!isAdvancedOffersActivated && (
        <>
          {(formState?.changes?.type === 2 || (!formState?.changes?.type && promotionState?.promotion?.type === 2)) && (
            <ItemWrapper>
              <Label>{t('COUPON', 'Coupon')}</Label>
              <Input
                name='coupon'
                value={formState.changes?.coupon ?? promotionState?.promotion?.coupon ?? ''}
                placeholder={t('COUPON_CODE', 'Coupon code')}
                onChange={e => handleChangeInput(e)}
              />
            </ItemWrapper>
          )}
        </>
      )}
      <ItemWrapper>
        <Label>{t('DESCRIPTION', 'Description')}</Label>
        <TextArea
          rows={3}
          name='description'
          value={formState.changes?.description ?? promotionState?.promotion?.description ?? ''}
          onChange={e => handleChangeInput(e)}
          placeholder={t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Write a little description')}
        />
      </ItemWrapper>
      <DateRangeWrapper>
        <Label>{t('DATES_RANGE', 'Date range')}</Label>
        <CalendarContainer>
          <Button
            color='secundary'
            borderRadius='8px'
            onClick={() => setIsShowCalendar(true)}
          >
            <Calendar4 />
            <span>
              {
                dateRange[0].startDate
                  ? `${moment(dateRange[0].startDate).format('YYYY/MM/DD')} - ${moment(dateRange[0].endDate).format('YYYY/MM/DD')}`
                  : t('SELECT_DATE_RANGE', 'Select Date Range')
              }
            </span>
          </Button>
          {
            isShowCalendar && (
              <CalendarWrapper ref={calendarRef} notSelected={!dateRange[0].startDate}>
                <DateRange
                  editableDateInputs
                  onChange={item => handleChangeDates(item)}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                />
              </CalendarWrapper>
            )
          }
        </CalendarContainer>
      </DateRangeWrapper>
      {isAdvancedOffersActivated && (
        <PoromotionTargetWrapper>
          <Label>{t('PROMOTION_TYPES', 'Promotion types')}</Label>
          <Select
            defaultValue={
              typeof formState.changes?.target !== 'undefined'
                ? formState.changes?.target
                : promotionState.promotion?.target
            }
            options={promotionTypes}
            onChange={val => handleChangeItem({ target: val })}
          />
        </PoromotionTargetWrapper>
      )}
      {!isAdvancedOffersActivated && (
        <PromotionTypeContainer>
          <PromotionTypeWrapper
            active={(formState?.changes?.type ? formState?.changes?.type === 2 : promotionState?.promotion?.type === 2)}
            onClick={() => handleChangeItem({ type: 2 })}
          >
            {(formState?.changes?.type ? formState?.changes?.type === 2 : promotionState?.promotion?.type === 2) ? (
              <RecordCircleFill />
            ) : (
              <Circle />
            )}
            <span>{t('COUPON', 'Coupon')}</span>
          </PromotionTypeWrapper>
          <PromotionTypeWrapper
            active={(formState?.changes?.type ? formState?.changes?.type === 1 : promotionState?.promotion?.type === 1)}
            onClick={() => handleChangeItem({ type: 1 })}
          >
            {(formState?.changes?.type ? formState?.changes?.type === 1 : promotionState?.promotion?.type === 1) ? (
              <RecordCircleFill />
            ) : (
              <Circle />
            )}
            <span>{t('DISCOUNT', 'Discount')}</span>
          </PromotionTypeWrapper>
        </PromotionTypeContainer>
      )}

      <DiscountContainer>
        <div>
          <Label>{t('DISCOUNT_TYPE', 'Discount type')}</Label>
          <Select
            defaultValue={formState.changes.rate_type ?? promotionState.promotion.rate_type}
            options={discountTypes}
            onChange={val => handleChangeItem({ rate_type: val })}
          />
        </div>
        <div>
          <Label>{t('VALUE', 'Value')}</Label>
          <Input
            type='number'
            name='rate'
            value={formState.changes?.rate ?? promotionState?.promotion?.rate ?? ''}
            onChange={e => handleChangeInput(e)}
            placeholder={0}
          />
        </div>
      </DiscountContainer>
      <MinimumLimitContainer>
        <div>
          <Label>{t('MINIMUN_PURCHASED', 'Minimum purchase')}</Label>
          <Input
            type='number'
            name='minimum'
            value={formState.changes?.minimum ?? promotionState?.promotion?.minimum ?? ''}
            onChange={e => handleChangeInput(e)}
            placeholder={0}
          />
        </div>
        <div>
          <Label>{t('LIMIT', 'Limit')}</Label>
          <Input
            type='number'
            name='limit'
            value={formState.changes?.limit ?? promotionState?.promotion?.limit ?? ''}
            onChange={e => handleChangeInput(e)}
            placeholder={0}
          />
        </div>
      </MinimumLimitContainer>

      {isAdvancedOffersActivated && (
        <>
          <SectionTitle>{t('QUESTION_HOW_GOING_APPLIED', 'How it\'s going to be applied?')}</SectionTitle>
          <CouponContainer>
            <CouponHeader
              active={(formState.changes?.type === 2 || (!formState?.changes.type && promotionState?.promotion?.type === 2))}
              onClick={() => handleChangeItem({ type: 2 })}
            >
              {(formState.changes?.type === 2 || (!formState?.changes.type && promotionState?.promotion?.type === 2)) ? (
                <RecordCircleFill />
              ) : (
                <Circle />
              )}
              <span>{t('COUPON', 'Coupon')}</span>
            </CouponHeader>
            {(formState.changes?.type === 2 || (!formState?.changes.type && promotionState?.promotion?.type === 2)) && (
              <CouponContent>
                <ShowInCartContainer>
                  <Checkbox
                    checked={
                      typeof formState.changes?.public !== 'undefined'
                        ? formState.changes?.public
                        : promotionState.promotion?.public
                    }
                    onChange={e => handleChangeItem({ public: e.target.checked })}
                  />
                  <div>
                    <p>{t('SHOW_IN_CART', 'Show in cart')}</p>
                    <p>{t('PLEASE_INDICATE_COUPON_FOR_CART', 'Please indicate if you want the coupon to be seen in the cart or hidden')}</p>
                  </div>
                </ShowInCartContainer>
                <CouponCodeContainer>
                  <label>{t('COUPON_CODE', 'Coupon code')}</label>
                  <Input
                    name='coupon'
                    value={formState.changes?.coupon ?? promotionState?.promotion?.coupon ?? ''}
                    onChange={e => handleChangeItem({ coupon: e.target.value.replace(/\s+/g, '') })}
                  />
                </CouponCodeContainer>
              </CouponContent>
            )}

          </CouponContainer>
          <DiscountOption>
            <CouponHeader
              active={(formState.changes?.type === 1 || (!formState?.changes.type && promotionState?.promotion?.type === 1))}
              onClick={() => handleChangeItem({ type: 1 })}
            >
              {(formState.changes?.type === 1 || (!formState?.changes.type && promotionState?.promotion?.type === 1)) ? (
                <RecordCircleFill />
              ) : (
                <Circle />
              )}
              <span>{t('DISCOUNT', 'discount')}</span>
            </CouponHeader>
            {(formState.changes?.type === 1 || (!formState?.changes.type && promotionState?.promotion?.type === 1)) && (
              <AutomaticDiscountEnableWrapper>
                <Checkbox
                  checked={
                    typeof formState.changes?.auto !== 'undefined'
                      ? formState.changes?.auto
                      : promotionState.promotion?.auto
                  }
                  onChange={e => handleChangeItem({ auto: e.target.checked })}
                />
                <span>{t('AUTOMATIC_DISCOUNT', 'Automatic discount')}</span>
              </AutomaticDiscountEnableWrapper>
            )}
          </DiscountOption>
          <StackableContainer>
            <span>{t('ALLOW_COMBINE_OFFER', 'Allow to combine offer (discount/coupon) with others?')}</span>
            <Switch
              defaultChecked={
                typeof formState.changes?.stackable !== 'undefined'
                  ? formState.changes?.stackable
                  : promotionState.promotion?.stackable ?? false
              }
              onChange={val => handleChangeItem({ stackable: val })}
            />
          </StackableContainer>
        </>
      )}

      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onButtonClick()}
        disabled={formState.loading || Object.keys(formState.changes).length === 0}
      >
        {formState.loading ? (
          t('LOADING', 'Loading')
        ) : (
          isAddMode ? (
            t('ADD', 'Add')
          ) : (
            t('SAVE', 'Save')
          )
        )}
      </Button>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const BusinessPromotionGeneralForm = (props) => {
  const businessPromotionFormProps = {
    ...props,
    UIComponent: BusinessPromotionGeneralFormUI
  }
  return <BusinessPromotionFormController {...businessPromotionFormProps} />
}
