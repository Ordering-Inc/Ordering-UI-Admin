import React from 'react'
import { BusinessBrandGENDetail as BusinessBrandGENDetailContorller } from './naked'
import {
  BrandGeneralDetail
} from './styles'

const BusinessBrandGENDetailUI = () => {
  return (
    <BrandGeneralDetail>
      Business brand general
    </BrandGeneralDetail>
  )
}

export const BusinessBrandGENDetail = (props) => {
  const businessBrandGENDetailProps = {
    ...props,
    UIComponent: BusinessBrandGENDetailUI
  }
  return (<BusinessBrandGENDetailContorller {...businessBrandGENDetailProps} />)
}
