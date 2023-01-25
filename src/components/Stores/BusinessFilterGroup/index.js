import React from 'react'
import { useLanguage, BusinessFilter } from 'ordering-components-admin'
import { Input, DefaultSelect, Button } from '../../../styles'
import { CitySelector, Modal } from '../../Shared'
import {
  Container,
  FormControl,
  FormGroup,
  RangeSelectWrapper,
  Option,
  ButtonGroup
} from './styles'

const BusinessFilterGroupUI = (props) => {
  const {
    filterValues,
    handleChangeValue,
    handleChangeCity,
    handleChangeFilterValues,
    handleResetFilterValues,
    isFilterModal,
    onClose
  } = props

  const [, t] = useLanguage()

  const conditions = [
    { value: '>', content: <Option>{'>'}</Option> },
    { value: '=', content: <Option>=</Option> },
    { value: '<', content: <Option>{'<'}</Option> },
    { value: '>=', content: <Option>{'>='}</Option> },
    { value: '<=', content: <Option>{'<='}</Option> }
  ]

  const enableOptions = [
    { value: true, content: <Option>{t('YES', 'Yes')}</Option> },
    { value: false, content: <Option>{t('NO', 'No')}</Option> }
  ]

  const handleAcceptFilter = () => {
    handleChangeFilterValues({ ...filterValues })
    onClose()
  }

  const handleClearFilter = () => {
    handleResetFilterValues()
    handleChangeFilterValues({})
  }

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
          <FormControl>
            <label>{t('CITY', 'City')}</label>
            <CitySelector
              filterValues={filterValues}
              handleChangeCity={handleChangeCity}
            />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl>
            <label>{t('AVAILABLE_MENUS', 'Available menus')}</label>
            <RangeSelectWrapper className='range'>
              <DefaultSelect
                placeholder={t('SELECT_CONDITION', 'Select a condition')}
                defaultValue={filterValues?.availableMenus?.condition}
                options={conditions}
                onChange={condition => handleChangeValue({ availableMenus: { ...filterValues?.availableMenus, condition } })}
                optionInnerMaxHeight='300px'
              />
              <Input
                type='text'
                placeholder={t('NUMBER', 'Number')}
                autoComplete='off'
                onKeyPress={(e) => {
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                value={filterValues?.availableMenus?.value || ''}
                onChange={(e) => handleChangeValue({ availableMenus: { ...filterValues?.availableMenus, value: e.target.value } })}
              />
            </RangeSelectWrapper>
          </FormControl>
          <FormControl>
            <label>{t('TOTAL_MENUS', 'Total menus')}</label>
            <RangeSelectWrapper className='range'>
              <DefaultSelect
                placeholder={t('SELECT_CONDITION', 'Select a condition')}
                defaultValue={filterValues?.menus?.condition}
                options={conditions}
                onChange={condition => handleChangeValue({ menus: { ...filterValues?.menus, condition } })}
                optionInnerMaxHeight='300px'
              />
              <Input
                type='text'
                placeholder={t('NUMBER', 'Number')}
                autoComplete='off'
                onKeyPress={(e) => {
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                value={filterValues?.menus?.value || ''}
                onChange={(e) => handleChangeValue({ menus: { ...filterValues?.menus, value: e.target.value } })}
              />
            </RangeSelectWrapper>
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
            <label>{t('FEATURED', 'FEATURED')}</label>
            <DefaultSelect
              placeholder={t('SELECT_OPTION', 'Select a option')}
              defaultValue={filterValues?.featured}
              options={enableOptions}
              onChange={val => handleChangeValue({ featured: val })}
              optionInnerMaxHeight='300px'
              className='full-select'
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

export const BusinessFilterGroup = (props) => {
  const businessFilterGroupProps = {
    ...props,
    UIComponent: BusinessFilterGroupUI
  }
  return <BusinessFilter {...businessFilterGroupProps} />
}
