import React, { useEffect, useState } from 'react'
import { useLanguage, UsersFilter } from 'ordering-components-admin'
import { Input, DefaultSelect, Button } from '../../../styles'
import { CitySelector, Modal } from '../../Shared'
import { countryList } from '../../../config/constants'
import {
  Container,
  FormControl,
  FormGroup,
  RangeSelectWrapper,
  Option,
  ButtonGroup
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { DateTypeSelector } from '../../Orders'

const UserFilterGroupUI = (props) => {
  const {
    filterValues,
    handleChangeValue,
    handleChangeCity,
    handleChangeFilterValues,
    handleResetFilterValues,
    isFilterModal,
    onClose,
    loyaltyLevelState,
    handleChangeDateType,
    handleChangeFromDate,
    handleChangeEndDate
  } = props

  const [, t] = useLanguage()
  const [phoneCodeList, setPhoneCodeList] = useState()
  const [loyaltyLevels, setLoyaltyLevels] = useState([])

  const conditions = [
    { value: 'gt', content: <Option>{'>'}</Option> },
    { value: 'eq', content: <Option>=</Option> },
    { value: 'lt', content: <Option>{'<'}</Option> },
    { value: 'ge', content: <Option>{'>='}</Option> },
    { value: 'le', content: <Option>{'<='}</Option> }
  ]

  const enableOptions = [
    { value: true, content: <Option>{t('YES', 'Yes')}</Option> },
    { value: false, content: <Option>{t('NO', 'No')}</Option> }
  ]

  const userOptions = [
    { value: 0, content: <Option>{t('ADMINISTRATOR', 'Administrator')}</Option> },
    { value: 1, content: <Option>{t('CITY_MANAGER', 'City manager')}</Option> },
    { value: 2, content: <Option>{t('BUSINESS_OWNER', 'Business owner')}</Option> },
    { value: 3, content: <Option>{t('USER', 'User')}</Option> },
    { value: 9, content: <Option>{t('CALL_CENTER_AGENT', 'Call center agent')}</Option> }
  ]

  const handleAcceptFilter = () => {
    handleChangeFilterValues({ ...filterValues })
    onClose()
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

  useEffect(() => {
    countryList.splice(0, 1)
    const list = countryList.map(country => ({
      value: country.dial_code.replace('+', ''),
      content: <Option>({country.dial_code}) {country.name}</Option>
    }))
    setPhoneCodeList(list)
  }, [countryList])

  useEffect(() => {
    if (loyaltyLevelState?.loading) return
    const levels = loyaltyLevelState?.levels.map(item => ({
      value: item.id,
      content: <Option>{item.name}</Option>
    }))
    setLoyaltyLevels(levels)
  }, [loyaltyLevelState])

  return (
    <Modal
      title={t('FILTER', 'Filter')}
      width='80%'
      padding='30px'
      open={isFilterModal}
      onClose={onClose}
    >
      <Container>
        <FormGroup>
          <FormControl>
            <label>{t('NAME', 'Name')}</label>
            <Input
              type='text'
              placeholder={t('NAME', 'Name')}
              autoComplete='off'
              value={filterValues?.name || ''}
              onChange={(e) => handleChangeValue({ name: e.target.value })}
            />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('EMAIL', 'Email')}</label>
            <Input
              type='text'
              placeholder={t('EMAIL', 'Email')}
              autoComplete='off'
              value={filterValues?.email || ''}
              onChange={(e) => handleChangeValue({ email: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <label>{t('LAST_NAME', 'Last name')}</label>
            <Input
              type='text'
              placeholder={t('LAST_NAME', 'Last name')}
              autoComplete='off'
              value={filterValues?.lastname || ''}
              onChange={(e) => handleChangeValue({ lastname: e.target.value })}
            />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('COUNTRY_PHONE_CODE', 'Country phone code')}</label>
            <DefaultSelect
              placeholder={t('SELECT_OPTION', 'Select a option')}
              defaultValue={filterValues?.countryPhoneCode}
              options={phoneCodeList}
              onChange={val => handleChangeValue({ countryPhoneCode: val })}
              optionInnerMaxHeight='300px'
              className='full-select'
            />
          </FormControl>
          <FormControl>
            <label>{t('PHONE_NUMBER', 'Phone number')}</label>
            <Input
              type='text'
              placeholder={t('PHONE_NUMBER', 'Phone number')}
              autoComplete='off'
              onKeyPress={(e) => {
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
              value={filterValues?.cellphone || ''}
              onChange={(e) => handleChangeValue({ cellphone: e.target.value })}
            />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('PHONE_VERIFIED', 'Phone verified')}</label>
            <DefaultSelect
              placeholder={t('SELECT_OPTION', 'Select a option')}
              defaultValue={filterValues?.phoneVerified}
              options={enableOptions}
              onChange={val => handleChangeValue({ phoneVerified: val })}
              optionInnerMaxHeight='300px'
              className='full-select'
            />
          </FormControl>
          <FormControl>
            <label>{t('EMAIL_VERIFIED', 'Email verified')}</label>
            <DefaultSelect
              placeholder={t('SELECT_OPTION', 'Select a option')}
              defaultValue={filterValues?.emailVerified}
              options={enableOptions}
              onChange={val => handleChangeValue({ emailVerified: val })}
              optionInnerMaxHeight='300px'
              className='full-select'
            />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('ENABLED', 'Enabled')}</label>
            <DefaultSelect
              placeholder={t('SELECT_OPTION', 'Select a option')}
              defaultValue={filterValues?.enabled}
              options={enableOptions}
              onChange={val => handleChangeValue({ enabled: val })}
              optionInnerMaxHeight='300px'
              className='full-select'
            />
          </FormControl>
          <FormControl>
            <label>{t('AMOUNT_OF_ORDERS', 'Amount of orders')}</label>
            <RangeSelectWrapper className='range'>
              <DefaultSelect
                placeholder={t('SELECT_CONDITION', 'Select a condition')}
                defaultValue={filterValues?.ordersCount?.condition}
                options={conditions}
                onChange={condition => handleChangeValue({ ordersCount: { ...filterValues?.ordersCount, condition } })}
                optionInnerMaxHeight='300px'
              />
              <Input
                type='text'
                placeholder={t('NUMBER', 'Number')}
                autoComplete='off'
                value={filterValues?.ordersCount?.value || ''}
                onKeyPress={(e) => {
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                onChange={(e) => handleChangeValue({ ordersCount: { ...filterValues?.ordersCount, value: e.target.value } })}
              />
            </RangeSelectWrapper>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('USER_TYPE', 'User type')}</label>
            <DefaultSelect
              placeholder={t('SELECT_OPTION', 'Select a option')}
              defaultValue={filterValues?.userType}
              options={userOptions}
              onChange={val => handleChangeValue({ userType: val })}
              optionInnerMaxHeight='300px'
              className='full-select'
            />
          </FormControl>
          <FormControl>
            <label>{t('LOYALTY_LEVEL', 'Loyalty level')}</label>
            {loyaltyLevelState?.loading ? (
              <Skeleton height={54} />
            ) : (
              <DefaultSelect
                placeholder={t('SELECT_OPTION', 'Select a option')}
                defaultValue={filterValues?.loyaltyLevel}
                options={loyaltyLevels}
                onChange={val => handleChangeValue({ loyaltyLevel: val })}
                optionInnerMaxHeight='300px'
                className='full-select'
              />
            )}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('SIGN_UP_DATE', 'Sign up date')}</label>
            <DateTypeSelector
              filterValues={filterValues}
              handleChangeDateType={handleChangeDateType}
              handleChangeFromDate={handleChangeFromDate}
              handleChangeEndDate={handleChangeEndDate}
            />
          </FormControl>
          <FormControl>
            <label>{t('CITY', 'City')}</label>
            <CitySelector
              filterValues={filterValues}
              handleChangeCity={handleChangeCity}
            />
          </FormControl>
        </FormGroup>
        <ButtonGroup>
          <Button
            color='primary'
            borderRadius='8px'
            onClick={() => handleAcceptFilter()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
          <Button
            color='secundaryDark'
            borderRadius='8px'
            onClick={() => handleClearFilter()}
          >
            {t('CLEAR', 'Clear')}
          </Button>
        </ButtonGroup>
      </Container>
    </Modal>
  )
}

export const UserFilterGroup = (props) => {
  const userFilterGroupProps = {
    ...props,
    UIComponent: UserFilterGroupUI
  }
  return <UsersFilter {...userFilterGroupProps} />
}
