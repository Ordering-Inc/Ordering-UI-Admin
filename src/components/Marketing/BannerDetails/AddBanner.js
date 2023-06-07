import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Businesses } from './Businesses'
import { Button, Input } from '../../../styles'
import {
  AddBannerContainer,
  FormController,
  BusinessesWrapper
} from './styles'

export const AddBanner = (props) => {
  const {
    changesState,
    handleChangeItem,
    handleAddBanner,
    actionState,
    businessList,
    selectedBusinessIds,
    handleSelectBusiness,
    handleSelectAllBusiness,
    defaultPosition
  } = props

  const [, t] = useLanguage()

  return (
    <AddBannerContainer>
      <FormController>
        <label>{t('NAME', 'Name')}</label>
        <Input
          defaultValue={changesState.changes?.name || ''}
          onChange={e => handleChangeItem({ name: e.target.value })}
        />
      </FormController>
      {(defaultPosition === 'web_business_page' || defaultPosition === 'app_business_page') && (
        <BusinessesWrapper>
          <p>{t('BUSINESSES', 'Businesses')}</p>
          <Businesses
            isAddMode
            actionState={actionState}
            businessList={businessList}
            selectedBusinessIds={selectedBusinessIds}
            handleSelectBusiness={handleSelectBusiness}
            handleSelectAllBusiness={handleSelectAllBusiness}
          />
        </BusinessesWrapper>
      )}
      <Button
        color='primary'
        borderRadius='8px'
        disabled={Object.keys(changesState.changes).length === 0 || changesState.loading}
        onClick={() => handleAddBanner()}
      >
        {t('ADD', 'Add')}
      </Button>
    </AddBannerContainer>
  )
}
