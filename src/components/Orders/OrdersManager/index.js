import React from 'react'
import { OriginalOrdersManager } from './Layouts/OriginalOrdersManager'
import { VeloccyOrdersManager } from './Layouts/VeloccyOrdersManager'
import { useTheme } from 'styled-components'

export const OrdersManager = (props) => {
  const theme = useTheme()
  const layout = theme?.orders_manager_view?.components?.layout?.type || 'original'

  return (
    <>
      {layout === 'original' && <OriginalOrdersManager {...props} />}
      {layout === 'veloccy' && <VeloccyOrdersManager {...props} />}
    </>
  )
}
