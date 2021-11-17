import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import AiFillMinusSquare from '@meronex/icons/ai/AiFillMinusSquare'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BiMinus from '@meronex/icons/bi/BiMinus'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import { BusinessScheduleCopyTimes } from '../BusinessScheduleCopyTimes'
import { Alert } from '../Confirm'

import {
  BusinessMenuBasicContainer,
  FieldName,
  OrderType,
  CategoryProductsContainer,
  BusinessCategoryContainer,
  CheckboxContainer,
  CheckBoxWrapper,
  ProductContainer,
  ScheduleContainer,
  ScheduleSection,
  ScheduleBlock,
  TimeSectionContainer,
  TimeSection,
  TimeSelect,
  TimeSelectContainer,
  DeleteButton,
  ScheduleActionBlock,
  AddButton,
  AddScheduleButton,
  ScheduleCheckboxContainer
} from './styles'

export const BusinessMenuBasicOptions = (props) => {
  const {
    business,
    businessMenuState,
    formState,
    handleChangeInput,
    handleCheckOrderType,
    handleCheckCategory,
    handleClickCategory,
    handleCheckProduct,
    handleUpdateBusinessMenuOption,
    handleAddBusinessMenuOption,
    handleChangeTime,
    handleAddScheduleTime,
    handleDeleteScheduleTime,
    handleScheduleTimeActiveState,
    selectedCopyDays,
    handleSelectCopyTimes,
    cleanSelectedCopyDays,
    isConflict,
    setIsConflict,
    handleChangeAddScheduleTime,
    addScheduleTime,
    setAddScheduleTime,
    openAddScheduleIndex,
    setOpenAddScheduleInex,
    scheduleTimes,
    selectedProductsIds
  } = props
  const [, t] = useLanguage()
  const [openCategoryProduct, setOpenCategoryProduct] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isOpenCopytimes, setIsOpenCopytimes] = useState(null)
  const isEdit = Object.keys(businessMenuState?.menu).length

  const orderTypes = [
    { value: 1, key: 'delivery', content: t('DELIVERY', 'Delivery') },
    { value: 2, key: 'pickup', content: t('PICKUP', 'Pickup') },
    { value: 3, key: 'eatin', content: t('EAT_IN', 'Eat in') },
    { value: 4, key: 'curbside', content: t('CURBSIDE', 'Curbside') },
    { value: 5, key: 'driver_thru', content: t('DRIVE_THRU', 'Drive thru') }
  ]

  const daysOfWeek = [
    t('SUNDAY_ABBREVIATION', 'Sun'),
    t('MONDAY_ABBREVIATION', 'Mon'),
    t('TUESDAY_ABBREVIATION', 'Tues'),
    t('WEDNESDAY_ABBREVIATION', 'Wed'),
    t('THURSDAY_ABBREVIATION', 'Thur'),
    t('FRIDAY_ABBREVIATION', 'Fri'),
    t('SATURDAY_ABBREVIATION', 'Sat')
  ]

  const handleTogglePopover = (type) => {
    setOpenCategoryProduct({
      ...openCategoryProduct,
      [type]: !openCategoryProduct[type]
    })
  }

  const isCheckedCategory = (categoryId) => {
    if (!isEdit) return 'nothing'
    const businessCategory = business?.categories.find(category => category.id === categoryId)
    const menuProducts = businessMenuState?.menu?.products.filter(product => product?.category_id === categoryId)
    let result = ''
    if (businessCategory?.products.length !== 0 && businessCategory?.products.length === menuProducts.length) result = 'all'
    else if (menuProducts.length) result = 'some'
    else result = 'nothing'
    return result
  }

  const isCheckedProduct = (categoryId, productId) => {
    if (!isEdit) return false
    const found = businessMenuState?.menu?.products.find(product => product?.category_id === categoryId && product.id === productId)
    return found
  }

  const closeAlert = () => {
    setIsConflict(false)
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleOpenAddScheduleInex = (index) => {
    const defaultTime = {
      open: { hour: 0, minute: 0 },
      close: { hour: 23, minute: 59 }
    }
    setAddScheduleTime(defaultTime)
    setOpenAddScheduleInex(index)
  }

  useEffect(() => {
    if (!isConflict) return
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    })
  }, [isConflict])

  useEffect(() => {
    if (!formState?.result?.error) return
    setAlertState({
      open: true,
      content: formState?.result?.result
    })
  }, [formState?.result?.error])

  return (
    <>
      <BusinessMenuBasicContainer>
        <FieldName>{t('MENU_NAME', 'Menu name')}</FieldName>
        <Input
          name='name'
          placeholder={t('NAME', 'Name')}
          value={
            formState?.changes?.name ?? businessMenuState?.menu?.name ?? ''
          }
          onChange={(e) => handleChangeInput(e)}
        />
        <FieldName isBorderBottom>{t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')}</FieldName>
        {orderTypes.map(orderType => (
          <OrderType
            key={orderType.value}
            active={(formState?.changes[orderType.key] ?? businessMenuState.menu[orderType.key])}
            onClick={() => handleCheckOrderType(orderType.key)}
          >
            {
              (formState?.changes[orderType.key] ?? businessMenuState.menu[orderType.key])
                ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )
            }
            <span>{orderType.content}</span>
          </OrderType>
        ))}
        <ScheduleContainer>
          <FieldName>{t('SCHEDULE', 'Schedule')}</FieldName>
          <ScheduleSection>
            {scheduleTimes.map((schedule, daysOfWeekIndex) => (
              <ScheduleBlock key={daysOfWeekIndex}>
                <ScheduleCheckboxContainer>
                  <CheckBoxWrapper
                    active={schedule?.enabled}
                    onClick={() => handleScheduleTimeActiveState(daysOfWeekIndex)}
                  >
                    {schedule?.enabled ? <RiCheckboxFill /> : <RiCheckboxBlankLine />}
                  </CheckBoxWrapper>
                  <h4>{daysOfWeek[daysOfWeekIndex]}</h4>
                </ScheduleCheckboxContainer>
                <TimeSectionContainer>
                  {schedule?.enabled ? (
                    <>
                      {schedule.lapses.map((laps, index) => (
                        <TimeSection key={index}>
                          <TimeSelectContainer>
                            <TimeSelect
                              value={laps.open.hour}
                              onChange={(e) => handleChangeTime(daysOfWeekIndex, true, true, index, e.target.value)}
                            >
                              {[...Array(24)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                            :
                            <TimeSelect
                              value={laps.open.minute}
                              onChange={(e) => handleChangeTime(daysOfWeekIndex, true, false, index, e.target.value)}
                            >
                              {[...Array(60)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                          </TimeSelectContainer>
                          <BiMinus />
                          <TimeSelectContainer>
                            <TimeSelect
                              value={laps.close.hour}
                              onChange={(e) => handleChangeTime(daysOfWeekIndex, false, true, index, e.target.value)}
                            >
                              {[...Array(24)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                            :
                            <TimeSelect
                              value={laps.close.minute}
                              onChange={(e) => handleChangeTime(daysOfWeekIndex, false, false, index, e.target.value)}
                            >
                              {[...Array(60)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                          </TimeSelectContainer>
                          <DeleteButton
                            disabled={schedule.lapses.length === 1 || formState.loading}
                            onClick={() => handleDeleteScheduleTime(daysOfWeekIndex, index)}
                          >
                            <BsTrash />
                          </DeleteButton>
                        </TimeSection>
                      ))}
                      {openAddScheduleIndex === daysOfWeekIndex && (
                        <TimeSection>
                          <TimeSelectContainer>
                            <TimeSelect
                              value={addScheduleTime.open.hour}
                              onChange={(e) => handleChangeAddScheduleTime(daysOfWeekIndex, true, true, e.target.value)}
                            >
                              {[...Array(24)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                            :
                            <TimeSelect
                              value={addScheduleTime.open.minute}
                              onChange={(e) => handleChangeAddScheduleTime(daysOfWeekIndex, true, false, e.target.value)}
                            >
                              {[...Array(60)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                          </TimeSelectContainer>
                          <BiMinus />
                          <TimeSelectContainer>
                            <TimeSelect
                              value={addScheduleTime.close.hour}
                              onChange={(e) => handleChangeAddScheduleTime(daysOfWeekIndex, false, true, e.target.value)}
                            >
                              {[...Array(24)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                            :
                            <TimeSelect
                              value={addScheduleTime.close.minute}
                              onChange={(e) => handleChangeAddScheduleTime(daysOfWeekIndex, false, false, e.target.value)}
                            >
                              {[...Array(60)].map((v, i) => (
                                <option
                                  key={i}
                                  value={i}
                                >
                                  {i < 10 ? `0${i}` : i}
                                </option>
                              ))}
                            </TimeSelect>
                          </TimeSelectContainer>
                          <AddButton
                            onClick={() => handleAddScheduleTime(daysOfWeekIndex)}
                          >
                            <AiFillPlusCircle />
                          </AddButton>
                        </TimeSection>
                      )}
                    </>
                  ) : (
                    <p>{t('UNAVAILABLE', 'Unavailable')}</p>
                  )}
                </TimeSectionContainer>
                <ScheduleActionBlock>
                  <AddScheduleButton
                    disabled={!schedule?.enabled}
                    onClick={() => handleOpenAddScheduleInex(daysOfWeekIndex)}
                  >
                    <BsPlusSquare />
                  </AddScheduleButton>
                  <BusinessScheduleCopyTimes
                    disabled={!schedule.enabled}
                    cleanSelectedCopyDays={cleanSelectedCopyDays}
                    open={isOpenCopytimes === daysOfWeekIndex}
                    daysOfWeekIndex={daysOfWeekIndex}
                    onClick={setIsOpenCopytimes}
                    onClose={() => setIsOpenCopytimes(null)}
                    selectedCopyDays={selectedCopyDays}
                    handleSelectDays={(value) => handleSelectCopyTimes(value, daysOfWeekIndex)}
                  />
                </ScheduleActionBlock>
              </ScheduleBlock>
            ))}
          </ScheduleSection>
        </ScheduleContainer>
        <FieldName>{t('COMMENTS', 'Comments')}</FieldName>
        <TextArea
          rows={4}
          name='comment'
          defaultValue={
            formState?.changes?.comment ?? businessMenuState?.menu?.comment ?? ''
          }
          placeholder={t('WRITE_HERE', 'Write here')}
          onChange={(e) => handleChangeInput(e)}
        />
        <FieldName isBorderBottom>{t('PRODUCTS', 'Products')}</FieldName>
        {business?.categories.filter(_category => _category.products.length > 0).map(category => (
          <CategoryProductsContainer key={category.id}>
            <BusinessCategoryContainer
              active={openCategoryProduct[category?.name]}
            >
              <CheckboxContainer
                onClick={() => handleClickCategory(category.id)}
              >
                <CheckBoxWrapper
                  active={
                    (formState?.changes?.products ? handleCheckCategory(category.id) === 'all' : isCheckedCategory(category.id) === 'all') ||
                    (formState?.changes?.products ? handleCheckCategory(category.id) === 'some' : isCheckedCategory(category.id) === 'some')
                  }
                >
                  {
                    (formState?.changes?.products
                      ? handleCheckCategory(category.id) === 'all'
                      : isCheckedCategory(category.id) === 'all')
                      ? (
                        <RiCheckboxFill />
                      ) : (
                        (formState?.changes?.products
                          ? handleCheckCategory(category.id) === 'some'
                          : isCheckedCategory(category.id) === 'some')
                          ? (
                            <AiFillMinusSquare />
                          ) : (
                            <RiCheckboxBlankLine />
                          )
                      )
                  }
                </CheckBoxWrapper>
                <span className='bold'>{category?.name}</span>
              </CheckboxContainer>
              {category?.products.length > 0 && (
                <GoTriangleDown
                  onClick={() => handleTogglePopover(category?.name)}
                />
              )}
            </BusinessCategoryContainer>
            {openCategoryProduct[category?.name] && (
              <>
                {category?.products.map(product => (
                  <ProductContainer
                    key={product.id}
                    onClick={() => handleCheckProduct(product.id)}
                  >
                    <CheckboxContainer>
                      <CheckBoxWrapper
                        active={selectedProductsIds.includes(product?.id) ?? isCheckedProduct(product?.category_id, product?.id)}
                      >
                        {
                          (selectedProductsIds.includes(product?.id) ?? isCheckedProduct(product?.category_id, product?.id))
                            ? (
                              <RiCheckboxFill />
                            ) : (
                              <RiCheckboxBlankLine />
                            )
                        }
                      </CheckBoxWrapper>
                      <span>{product?.name}</span>
                    </CheckboxContainer>
                  </ProductContainer>
                ))}
              </>
            )}
          </CategoryProductsContainer>
        ))}
      </BusinessMenuBasicContainer>
      <Button
        color='primary'
        borderRadius='5px'
        disabled={formState.loading || Object.keys(formState?.changes).length === 0}
        onClick={() => isEdit ? handleUpdateBusinessMenuOption() : handleAddBusinessMenuOption()}
      >
        {formState.loading ? (
          t('LOADING', 'Loading')
        ) : (
          isEdit ? (
            t('UPDATE', 'Update')
          ) : (
            t('ADD', 'Add')
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
    </>
  )
}
