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
      <p>{t('PERSONALIZATION_TITLE', 'If you are looking for something  special for your Ordering Solution, send us your special wish.')}</p>
      <img src={theme?.images.general?.personalization} loading='lazy' />
    </Container>
  )
}
