import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { BusinessTypeForm } from '../BusinessTypeForm'
import { useTheme } from 'styled-components'
import {
  Container,
  BusinessType,
  AddNewBusinessTypeContainer,
  AddNewBusinessTypeTitle
} from './styles'

export const BusinessTypeSetting = (props) => {
  const {
    businessTypes,
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    setBusinessTypes
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([])
  const [isAdd, setIsAdd] = useState(false)

  const handleSelectBusinessTypes = (typeId) => {
    let _selectedBusinessTypes = [...selectedBusinessTypes]
    if (selectedBusinessTypes.includes(typeId)) {
      _selectedBusinessTypes = _selectedBusinessTypes.filter(id => id !== typeId)
    } else {
      _selectedBusinessTypes.push(typeId)
    }
    setSelectedBusinessTypes(_selectedBusinessTypes)
    setFormState({
      ...formState,
      changes: { types: _selectedBusinessTypes }
    })
  }

  const handleSuccessAddBusinessType = (result) => {
    setIsAdd(false)
    setBusinessTypes([...businessTypes, result])
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
        businessType.id && (
          <BusinessType
            key={businessType.id}
            disabled={formState?.loading}
            onClick={() => handleSelectBusinessTypes(businessType.id)}
          >
            {selectedBusinessTypes.includes(businessType.id) ? (
              <RiCheckboxFill />
            ) : (
              <RiCheckboxBlankLine />
            )}
            <img
              src={businessType?.image || theme.images?.categories?.all}
              alt={businessType.name.toLowerCase()}
              width='30px'
              height='30px'
              loading='lazy'
            />
            <span>{businessType?.name}</span>
          </BusinessType>
        )
      ))}
      <AddNewBusinessTypeContainer>
        {isAdd ? (
          <BusinessTypeForm
            businessTypes={businessTypes}
            handleSuccessAddBusinessType={handleSuccessAddBusinessType}
          />
        ) : (
          <AddNewBusinessTypeTitle
            onClick={() => setIsAdd(true)}
          >
            {t('ADD_NEW_BUSINESS_TYPE', 'Add new business type')}
          </AddNewBusinessTypeTitle>
        )}
      </AddNewBusinessTypeContainer>
    </Container>
  )
}
