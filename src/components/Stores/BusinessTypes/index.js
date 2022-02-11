import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Alert } from '../../Shared'

import { BusinessTypeForm } from '../BusinessTypeForm'
import { BusinessType } from '../BusinessType'

import {
  Container,
  AddNewBusinessTypeContainer,
  AddNewBusinessTypeTitle
} from './styles'

export const BusinessTypes = (props) => {
  const {
    businessTypes,
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    setBusinessTypes
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([])
  const [isAdd, setIsAdd] = useState(false)

  const handleSelectBusinessTypes = (typeId) => {
    let _selectedBusinessTypes = [...selectedBusinessTypes]
    if (selectedBusinessTypes.includes(typeId)) {
      _selectedBusinessTypes = _selectedBusinessTypes.filter(id => id !== typeId)
    } else {
      _selectedBusinessTypes.push(typeId)
    }
    if (_selectedBusinessTypes.length > 0) {
      setSelectedBusinessTypes(_selectedBusinessTypes)
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_TYPES_ITEM_MINIMUM', 'The types must have at least 1 items.')
      })
      return
    }
    setFormState({
      ...formState,
      changes: { types: _selectedBusinessTypes }
    })
  }

  const handleSuccessAddBusinessType = (result) => {
    setIsAdd(false)
    setBusinessTypes && setBusinessTypes([...businessTypes, result])
  }

  useEffect(() => {
    if (!business?.types) return
    const _selectedBusinessTypes = []
    for (const type of business?.types) {
      _selectedBusinessTypes.push(type.id)
    }
    setSelectedBusinessTypes(_selectedBusinessTypes)
  }, [business])

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])

  return (
    <Container>
      {businessTypes.map(businessType => (
        businessType?.id && (
          <BusinessType
            {...props}
            key={businessType.id}
            businessType={businessType}
            selectedBusinessTypes={selectedBusinessTypes}
            handleSelectBusinessTypes={handleSelectBusinessTypes}
          />
        )
      ))}
      <AddNewBusinessTypeContainer>
        {isAdd ? (
          <BusinessTypeForm
            businessTypes={businessTypes}
            handleSuccessAddBusinessType={handleSuccessAddBusinessType}
            handleCloseAddForm={() => setIsAdd(false)}
          />
        ) : (
          <AddNewBusinessTypeTitle
            onClick={() => setIsAdd(true)}
          >
            {t('ADD_NEW_BUSINESS_TYPE', 'Add new business type')}
          </AddNewBusinessTypeTitle>
        )}
      </AddNewBusinessTypeContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
