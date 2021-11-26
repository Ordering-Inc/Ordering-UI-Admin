import React from 'react'
import { EnterprisePromontionList as EnterprisePromontionListController } from './naked'

const EnterprisePromontionListUI = () => {
  return (
    <>
      enterpise promotions
    </>
  )
}

export const EnterprisePromontionList = (props) => {
  const enterpisePromotionsProps = {
    ...props,
    UIComponent: EnterprisePromontionListUI
  }
  return <EnterprisePromontionListController {...enterpisePromotionsProps} />
}
