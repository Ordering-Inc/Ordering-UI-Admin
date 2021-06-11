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
    userId,
    handleDeleteUser
  } = props
  const [, t] = useLanguage()

  const actionTypes = [
    { value: 1, content: <Option>{t('EDIT', 'Edit')}</Option> },
    { value: 2, content: <Option isColor>{t('DELETE', 'Delete')}</Option> },
  ]

  const placeholder=<PlaceHolder><FiMoreVertical /></PlaceHolder>

  const onActionClick = (type) => {
    if (type === 2) {
      handleDeleteUser(userId)
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
