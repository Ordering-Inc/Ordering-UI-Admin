import React, { useState } from 'react'
import { RecoveryActionHeader } from '../RecoveryActionHeader'
import { RecoveryActionListing } from '../RecoveryActionListing'
import { SideBar } from '../../Shared'
import { RecoveryActions as RecoveryActionsController } from './naked'

import {
  RecoveryActionsContainer
} from './styles'
import { RecoveryActionDetail } from '../RecoveryActionDetail'

const RecoveryActionsUI = (props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false)

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
  }

  const handleOpenDetail = () => {
    setIsOpenDetail(true)
  }

  return (
    <>
      <RecoveryActionsContainer>
        <RecoveryActionHeader
          {...props}
          handleOpenDetail={handleOpenDetail}
        />
        <RecoveryActionListing
          {...props}
          handleOpenDetail={handleOpenDetail}
        />
      </RecoveryActionsContainer>
      {isOpenDetail && (
        <SideBar
          sidebarId='loyaltyWallet'
          open={isOpenDetail}
          onClose={() => handleCloseDetail()}
          defaultSideBarWidth={550}
        >
          <RecoveryActionDetail
            onClose={() => handleCloseDetail()}
          />
        </SideBar>
      )}
    </>
  )
}

export const RecoveryActions = (props) => {
  const recoveryActionsProps = {
    ...props,
    UIComponent: RecoveryActionsUI
  }
  return <RecoveryActionsController {...recoveryActionsProps} />
}
