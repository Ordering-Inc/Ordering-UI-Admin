import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import {
  Container,
  LogoWrapper,
  Description,
  GuideStep,
  YoutubeVideoWrapper,
  YoutubeVideoInner
} from './styles'

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
      <GuideStep>
        <h4>{t('STEP', 'Step')}1</h4>
        <p>{t('CREATE_ACCOUNT_WITH_DELIVERECT', 'Create your account with deliverect.')} <a href='https://www.deliverect.com/'>www.deliverect.com</a></p>
      </GuideStep>
      <GuideStep>
        <h4>{t('STEP', 'Step')}2</h4>
        <p>{t('COPY_THIS_LINK', 'Copy this link')}: <a href='https://www.deliverect.com/'>www.deliverect.com</a></p>
      </GuideStep>
      <GuideStep>
        <h4>{t('STEP', 'Step')}3</h4>
        <p>{t('CHECK_VIDEO_TO_LEARN_TO_PASTE_LINK', 'Check this video to learn where to paste the link.')}</p>
      </GuideStep>
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
