import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import moment from 'moment'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick
} from 'ordering-components-admin'
import { Input, TextArea, Button, Switch } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'

import {
  Image as ImageIcon,
  Calendar4
} from 'react-bootstrap-icons'
import { bytesConverter } from '../../../utils'
import { Alert, Modal, ImageCrop } from '../../Shared'
import { DateRange } from 'react-date-range'

import {
  DetailsContainer,
  PromotionImage,
  Image,
  UploadImageIconContainer,
  UploadImageIcon,
  FormInput,
  FormInnerContainer,
  InputWrapper,
  DateRangeWrapper,
  CalendarContainer,
  CalendarWrapper,
  SelectGroup,
  LabelWrapper,
  OrderPriorityContainer,
  StackableContainer
} from './styles'

export const EnterprisePromotionGeneralDetails = (props) => {
  const {
    isAddMode,
    promotionState,
    formState,
    actionState,
    handleChangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleAddPromotion,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const formMethods = useForm()

  const inputRef = useRef(null)
  const calendarRef = useRef()
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const OrderPriorityOptions = [
    { value: 2, content: t('URGENT', 'Urgent') },
    { value: 1, content: t('HIGH', 'High') },
    { value: 0, content: t('NORMAL', 'Normal') },
    { value: -1, content: t('LOW', 'Low') }
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

      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: 'image', data: reader.result, open: true })
      }
      reader.onerror = error => console.log(error)

      handleChangeImage(files[0])
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    // cleanFormState && cleanFormState({ result: { error: false } })
  }

  const onSubmit = () => {
    if (Object.keys(formState.changes).length > 0) {
      if (isAddMode) {
        handleAddPromotion()
      } else {
        handleUpdateClick()
      }
    }
  }

  const handleChangeDates = (item) => {
    handleChangeItem({
      start: moment(item.selection.startDate).format('YYYY-MM-DD 00:00:00'),
      end: item.selection.endDate ? moment(item.selection.endDate).format('YYYY-MM-DD 23:59:59') : null
    })
    setDateRange([item.selection])
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg })
    setCropState({ name: null, data: null, open: false })
  }

  const handleClickOutside = (e) => {
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShowCalendar])

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
    <>
      <DetailsContainer>
        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInnerContainer>
            <PromotionImage className='promotion_image'>
              <Image onClick={() => handleClickImage()}>
                <ExamineClick
                  onFiles={handleFiles}
                  childRef={(e) => { inputRef.current = e }}
                  accept='image/png, image/jpeg, image/jpg'
                  disabled={actionState.loading}
                >
                  <DragAndDrop
                    onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                    accept='image/png, image/jpeg, image/jpg'
                    disabled={actionState.loading}
                  >
                    {
                      formState?.changes?.image
                        ? <img src={formState?.changes?.image} alt='user image' loading='lazy' />
                        : promotionState?.promotion?.image && <img src={promotionState?.promotion?.image} alt='user image' loading='lazy' />
                    }
                    <UploadImageIconContainer>
                      <UploadImageIcon>
                        <ImageIcon />
                        <span>{t('DRAG_AND_DROP', 'Drag and drop')}</span>
                      </UploadImageIcon>
                    </UploadImageIconContainer>
                  </DragAndDrop>
                </ExamineClick>
              </Image>
            </PromotionImage>
            <InputWrapper>
              <label>{t('NAME', 'Name')}</label>
              <Input
                name='name'
                type='text'
                placeholder={t('NAME', 'name')}
                value={
                  formState?.changes?.name ?? promotionState?.promotion?.name ?? ''
                }
                onChange={handleChangeInput}
                ref={formMethods.register({
                  required: t('NAME_REQUIRED', 'The name is required.')
                })}
                disabled={formState.loading}
                autoComplete='off'
              />
            </InputWrapper>
            <InputWrapper>
              <label>{t('Description_V2', 'Description')}</label>
              <TextArea
                rows={4}
                name='description'
                placeholder={t('SHORT_PROMOTION_ABOUT', 'Write a little description')}
                value={
                  formState?.changes?.description ?? promotionState?.promotion?.description ?? ''
                }
                onChange={handleChangeInput}
                disabled={formState.loading}
                autoComplete='off'
              />
            </InputWrapper>

            <SelectGroup>
              <DateRangeWrapper>
                <label>{t('DATES_RANGE', 'Date range')}</label>
                <CalendarContainer>
                  <Button
                    color='secundary'
                    borderRadius='8px'
                    type='button'
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
              <LabelWrapper>
                <label>{t('LABEL', 'Label')}</label>
                <Input
                  name='label'
                  placeholder={t('LABEL', 'Label')}
                  value={
                    formState?.changes?.label ?? promotionState?.promotion?.label ?? ''
                  }
                  onChange={handleChangeInput}
                />
              </LabelWrapper>
            </SelectGroup>

            <OrderPriorityContainer>
              <label>{t('ORDER_PRIORITY', 'Order priority')}</label>
              <Select
                placeholder={t('SELECT_ORDER_PRIORITY', 'Select order priority')}
                defaultValue={formState?.changes?.order_priority ?? promotionState.promotion?.order_priority}
                options={OrderPriorityOptions}
                onChange={val => handleChangeItem({ order_priority: val })}
              />
            </OrderPriorityContainer>

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
          </FormInnerContainer>
          <Button
            borderRadius='8px'
            color='primary'
            type='submit'
            disabled={Object.keys(formState.changes).length === 0 || actionState.loading}
          >
            {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
          </Button>
        </FormInput>
      </DetailsContainer>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onClose={() => setCropState({ ...cropState, open: false })}
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </>
  )
}
