import React from 'react'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { BusinessOwnerSelector } from '../BusinessOwnerSelector'

import {
  Container,
  OwnerItem,
  WrapperOwnerSelector
} from './styles'

export const BusinessOwnerSetting = (props) => {
  const { business } = props
  return (
    <Container>
      {business?.owners.map(owner => (
        <OwnerItem key={owner?.id}>
          <span>{owner?.name} {owner?.lastname}</span>
          <BsTrash />
        </OwnerItem>
      ))}
      <WrapperOwnerSelector>
        <BusinessOwnerSelector />
        <BsPlusSquare />
      </WrapperOwnerSelector>
    </Container>
  )
}
