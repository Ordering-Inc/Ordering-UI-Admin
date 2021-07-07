import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components-admin'
import {
  Container
} from './styles'

export const Personalization = (props) => {
  const {
    isShowTitle
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  return (
    <Container>
      {isShowTitle && (
        <h1>{t('PERSONALIZATION', 'Personalization')}</h1>
      )}
      <p>
        {t('PERSONALIZATION_TITLE', 'If you are looking for something  special for your Ordering Solution')},
        <a href=''>{t('SEND_US_SPECIAL_WISH', 'send us your special wish.')}</a>
      </p>
      <img src={theme?.images.general?.personalization} loading='lazy' />
    </Container>
  )
}
