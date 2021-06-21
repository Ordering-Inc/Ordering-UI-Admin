import React, { useState, useEffect } from 'react'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Container, BusinessType } from './styles'

export const BusinessTypeSetting = (props) => {
  const {
    businessTypes,
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick
  } = props

  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([])

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
            <span>{businessType?.name}</span>
          </BusinessType>
        )
      ))}

    </Container>
  )
}
