import React, { useState, useEffect } from 'react'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { BusinessOwnerSelector } from '../BusinessOwnerSelector'

import {
  Container,
  OwnerItem,
  WrapperOwnerSelector
} from './styles'

export const BusinessOwnerSetting = (props) => {
  const {
    business,
    handleDeleteBusinessOwner,
    handleAddBusinessOwner
  } = props
  const [ownerIds, setOwnerIds] = useState([])
  const [selectedOwner, setSelectedOwner] = useState(null)

  const onDeleteBusinessOwner = (ownerId) => {
    const _ownerIds = ownerIds.filter(id => id !== ownerId)
    handleDeleteBusinessOwner(_ownerIds)
    setOwnerIds(_ownerIds)
  }

  const onAddBusinessOwner = () => {
    if (!selectedOwner) return
    const _ownerIds = [...ownerIds, selectedOwner?.id]
    handleAddBusinessOwner(_ownerIds, selectedOwner)
    setOwnerIds(_ownerIds)
    setSelectedOwner(null)
  }

  useEffect(() => {
    if (!business?.owners) return
    const _ownerIds = []
    for (const owner of business?.owners) {
      _ownerIds.push(owner?.id)
    }
    setOwnerIds(_ownerIds)
  }, [business?.owners])
  return (
    <Container>
      {business?.owners.map(owner => (
        <OwnerItem key={owner?.id}>
          <span>{owner?.name} {owner?.lastname}</span>
          <BsTrash
            onClick={() => onDeleteBusinessOwner(owner?.id)}
          />
        </OwnerItem>
      ))}
      <WrapperOwnerSelector>
        <BusinessOwnerSelector
          selectedOwnerIds={ownerIds}
          handleSelectBusinessOwner={setSelectedOwner}
        />
        <BsPlusSquare
          onClick={() => onAddBusinessOwner()}
        />
      </WrapperOwnerSelector>
    </Container>
  )
}
