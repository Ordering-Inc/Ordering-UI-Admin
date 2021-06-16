import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import {
  Container,
  Option,
  PlaceHolder
} from './styles'

export const BusinessActionSelector = (props) => {
  const {
    user,
    handleDeleteUser,
    handleOpenUserDetails
  } = props
  const [, t] = useLanguage()

  const actionTypes = [
    { value: 1, content: <Option>{t('DUPLICATE', 'Duplicate ')}</Option> },
    { value: 2, content: <Option>{t('EDIT', 'Edit')}</Option> },
    { value: 3, content: <Option isColor>{t('DELETE', 'Delete')}</Option> }
  ]

  const placeholder=<PlaceHolder><FiMoreVertical /></PlaceHolder>

  const onActionClick = (type) => {
    switch (type)  {
      case 1:
        break
      case 2:
        handleOpenUserDetails(user)
        break
      case 3:
        handleDeleteUser(user?.id)
        break
    }
  }
  return (
    <Container>
      <Select
        noSelected
        placeholder={placeholder}
        options={actionTypes}
        onChange={type => onActionClick(type)}
      />
    </Container>
  )
}
