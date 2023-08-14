import React, { useState } from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { CustomOrderDetails } from './CustomOrderDetails'
import { SideBar } from '../../Shared'
import { Button } from '../../../styles'

export const CreateCustomOrder = (props) => {
  const {
    handleOpenCustomOrderDetail,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [openSidebar, setOpenSidebar] = useState(false)
  const [moveDistance, setMoveDistance] = useState(0)

  return (
    <>
      {user?.level === 0 && (
        <Button
          borderRadius='7.6px'
          color='lightPrimary'
          onClick={() => setOpenSidebar(true)}
        >
          {t('CREATE_CUSTOM_ORDER', 'Create custom order')}
        </Button>
      )}
      {openSidebar && (
        <SideBar
          sidebarId='custom_order_details'
          open={openSidebar}
          onClose={() => {
            setMoveDistance(0)
            setOpenSidebar(false)
          }}
          defaultSideBarWidth={500 + moveDistance}
          moveDistance={moveDistance}
        >
          <CustomOrderDetails
            handleParentSidebarMove={val => setMoveDistance(val)}
            handleOpenCustomOrderDetail={handleOpenCustomOrderDetail}
            onClose={() => setOpenSidebar(false)}
            handleOpenOrderDetail={handleOpenOrderDetail}
          />
        </SideBar>
      )}
    </>
  )
}
