import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import {
  Container,
  Option,
  PlaceHolder
} from './styles'

export const UserActionSelector = (props) => {
  const {
    user,
    handleDeleteUser,
    handleOpenUserDetails
  } = props
  const [, t] = useLanguage()

  const actionTypes = [
    { value: 1, content: <Option>{t('EDIT', 'Edit')}</Option> },
    { value: 2, content: <Option isColor>{t('DELETE', 'Delete')}</Option> }
  ]

  const placeholder = <PlaceHolder><FiMoreVertical /></PlaceHolder>

  const onActionClick = (type) => {
    if (type === 1) {
      handleOpenUserDetails(user)
    }
    if (type === 2) {
      handleDeleteUser(user?.id)
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
