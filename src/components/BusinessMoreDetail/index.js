import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessMoreDetail as BusinessMoreDetailController } from './naked'
import {
  BusinessMoreDetailContainer,
  Title
} from './styles'

const BusinessMoreDetailUI = (props) => {
  const [, t] = useLanguage()

  return (
    <BusinessMoreDetailContainer>
      <Title>{t('MORE', 'More')}</Title>
    </BusinessMoreDetailContainer>
  )
}

export const BusinessMoreDetail = (props) => {
  const businessMoreDetailProps = {
    ...props,
    UIComponent: BusinessMoreDetailUI
  }
  return <BusinessMoreDetailController {...businessMoreDetailProps} />
}
