import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import {
  Container,
  LogoWrapper,
  Description,
  GetStarted,
  YoutubeVideoWrapper,
  YoutubeVideoInner
} from './styles'
import { Button } from '../../../styles'

export const BusinessSyncBasic = () => {
  const theme = useTheme()
  const [, t] = useLanguage()

  return (
    <Container>
      <LogoWrapper>
        <img src={theme.images.general.deliverect} alt='' />
      </LogoWrapper>
      <Description>
        <p>{t('SYNC_DEC_FIRST', 'The easiest way to manage all your online orders.')}</p>
        <p dangerouslySetInnerHTML={{ __html: t('SYNC_DEC_SECOND', 'Deliverect integrates all your <span>online orders</span> to your <span>existing POS</span> or our <span>Delivery Manger app.</span> Restaurants large and small rely on Deliverect to reduce failures and order mistakes while speeding up order preparation.') }} />
      </Description>
      <GetStarted>
        <h2>{t('GET_STARTED_RIGHT_HERE', 'Get started right here')}</h2>
        <p>{t('FILL_UP_THIS_FORM_TO_REQUEST_INFORMATION', 'Fill up this form to request more information')}</p>
        <a href='https://share.hsforms.com/1uGzNQ71IS2KXCAFC0mTBCg3neff' target='_blank' rel='noopener noreferrer'>
          <Button color='primary'>{t('SEND_FORM', 'Send Form')}</Button>
        </a>
      </GetStarted>
      <YoutubeVideoWrapper>
        <YoutubeVideoInner>
          <iframe
            title='youtube'
            src='https://www.youtube.com/embed/_v8nPmW_E-0?playlist=_v8nPmW_E-0&loop=1'
          />
        </YoutubeVideoInner>
      </YoutubeVideoWrapper>
    </Container>
  )
}
