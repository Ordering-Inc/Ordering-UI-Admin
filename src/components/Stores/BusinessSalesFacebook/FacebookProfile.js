import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Input } from '../../../styles'
import {
  FacebookProfileContainer,
  Step,
  CopyInputWrapper
} from './styles'

export const FacebookProfile = ({ storeUrl }) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <FacebookProfileContainer>
      <p>{t('BUSINESS_FACEBOOK_PROFILE_DESC', 'Lorem ipsum dolor sit amet consectetur. Vitae odio aliquam adipiscing vitae. Nulla sed integer congue gravida lobortis tristique condimentum fusce tincidunt.')}</p>
      <Step>
        <h3>{t('STEP', 'Step')} 1</h3>
        <p>{t('BUSINESS_FACEBOOK_PROFILE_STEP1_DESC', 'Copy this link below. It’s your unique Ordering link for facebook.')}</p>
        <CopyInputWrapper>
          <Input
            defaultValue={storeUrl || 'https://yourbusinessname.com/store/storename'}
            disabled
          />
        </CopyInputWrapper>
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 2</h3>
        <p>{t('BUSINESS_FACEBOOK_PROFILE_STEP2_DESC', 'In your business profile, click on the 3 points button on the right side of the screen and look for the option: Edit Action Button.')}</p>
        <img src={theme.images.salesChannels.facebookProfileStep2} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 3</h3>
        <p>{t('BUSINESS_FACEBOOK_PROFILE_STEP3_DESC', 'Please choose the option that best suits you from the following list; this time, we will select: Start Order.')}</p>
        <img src={theme.images.salesChannels.facebookProfileStep31} alt='' />
        <img src={theme.images.salesChannels.facebookProfileStep32} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 4</h3>
        <p>{t('BUSINESS_FACEBOOK_PROFILE_STEP4_DESC', 'It will open a popup where you will put the link to your business where your client can place the order and click Save.')}</p>
        <img src={theme.images.salesChannels.facebookProfileStep4} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 5</h3>
        <p>{t('BUSINESS_FACEBOOK_PROFILE_STEP5_DESC', 'And voila, you will see the button you just added to your Facebook page.')}</p>
        <img src={theme.images.salesChannels.facebookProfileStep5} alt='' />
      </Step>
    </FacebookProfileContainer>
  )
}
