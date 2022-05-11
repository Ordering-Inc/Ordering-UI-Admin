import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  UserTypeFilterContainer
} from './styles'

export const ProfessionalTypeFilter = (props) => {
  const [selectedType, setSelectedType] = useState('')
  const [, t] = useLanguage()

  const professionalTypes = [
    { id: 1, title: t('ALL', 'All'), value: '' },
    { id: 2, title: t('MAKEUP_ARTIST', 'Makeup artist'), value: 'makeup_artist' },
    { id: 3, title: t('HAIR_SPECIALIST', 'Hair specialist'), value: 'hair_specialist' },
    { id: 4, title: t('COLOR_SPECIALIST', 'Color specialist'), value: 'color_specialist' }
  ]

  return (
    <UserTypeFilterContainer>
      {professionalTypes && professionalTypes.length > 0 && professionalTypes.map(type => (
        <Button
          key={type.id}
          color={selectedType === type.value ? 'primary' : 'secundaryDark'}
          onClick={() => setSelectedType(type.value)}
        >
          {type.title}
          {selectedType === type.value && <MdClose />}
        </Button>
      ))}
    </UserTypeFilterContainer>
  )
}
