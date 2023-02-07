import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import {
  FacebookPostContainer,
  Step
} from './styles'

export const FacebookPost = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <FacebookPostContainer>
      <p>{t('BUSINESS_FACEBOOK_POST_DESC1', 'It’s very easy to connect Ordering with a Facebook post!')}</p>
      <p>{t('BUSINESS_FACEBOOK_POST_DESC2', 'Lorem ipsum dolor sit amet consectetur. Platea eget blandit viverra scelerisque gravida sit tortor tellus interdum. Dolor amet quis vitae commodo nisl vestibulum ut sit.')}</p>
      <Step>
        <h3>{t('STEP', 'Step')} 1</h3>
        <p>{t('BUSINESS_FACEBOOK_POST_STEP1_DESC', 'To post something on Facebook, you first need to choose the audience to which your advertising is directed.')}</p>
        <img src={theme.images.salesChannels.facebookPostStep1} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 2</h3>
        <p>{t('BUSINESS_FACEBOOK_POST_STEP2_DESC', 'Then, add what you will publish on your page, and that\'s it!')}</p>
        <img src={theme.images.salesChannels.facebookPostStep2} alt='' />
      </Step>
    </FacebookPostContainer>
  )
}
