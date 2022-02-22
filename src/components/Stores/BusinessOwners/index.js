import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessOwnerSelector } from '../BusinessOwnerSelector'
import { Confirm } from '../../Shared'
import { Button } from '../../../styles'

import {
  Container,
  OwnerItem,
  WrapperOwnerSelector
} from './styles'

export const BusinessOwners = (props) => {
  const {
    business,
    handleDeleteBusinessOwner,
    handleAddBusinessOwner
  } = props
  const [, t] = useLanguage()
  const [ownerIds, setOwnerIds] = useState([])
  const [selectedOwner, setSelectedOwner] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const onDeleteBusinessOwner = (ownerId) => {
    const _ownerIds = ownerIds.filter(id => id !== ownerId)
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_BUSINESS_OWNER', 'Delete this business owner from this store?'),
      handleOnAccept: () => {
        handleDeleteBusinessOwner(_ownerIds)
        setOwnerIds(_ownerIds)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const onAddBusinessOwner = () => {
    if (!selectedOwner) return
    const _ownerIds = [...ownerIds, selectedOwner?.id]
    setConfirm({
      open: true,
      content: t('QUESTION_ADD_BUSINESS_OWNER', 'Add as a business owner to this store?'),
      handleOnAccept: () => {
        handleAddBusinessOwner(_ownerIds, selectedOwner)
        setOwnerIds(_ownerIds)
        setSelectedOwner(null)
        setConfirm({ ...confirm, open: false })
      }
    })
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
    <>
      <Container>
        {business?.owners.map(owner => (
          <OwnerItem key={owner?.id}>
            <span>{owner?.name} {owner?.lastname}</span>
            <p
              onClick={() => onDeleteBusinessOwner(owner?.id)}
            >
              {t('DELETE', 'Delete')}
            </p>
          </OwnerItem>
        ))}
        <WrapperOwnerSelector>
          <BusinessOwnerSelector
            selectedOwnerIds={ownerIds}
            selectedOwner={selectedOwner}
            handleSelectBusinessOwner={setSelectedOwner}
          />
          <Button
            onClick={() => onAddBusinessOwner()}
            color='primary'
          >
            {t('ADD', 'Add')}
          </Button>
        </WrapperOwnerSelector>
      </Container>
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}
