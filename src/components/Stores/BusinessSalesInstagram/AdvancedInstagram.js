import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Input } from '../../../styles'
import {
  InstagramAdvancedContainer,
  Step,
  CopyInputWrapper,
  ImageWrapper
} from './styles'

export const AdvancedInstagram = ({ storeUrl }) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <InstagramAdvancedContainer>
      <p>{t('BUSINESS_INSTAGRAM_ADVANCED_DESC', 'This setting is if your Instagram account has 10K followers or you are already an Instagram partner.')}</p>
      <Step>
        <h3>{t('STEP', 'Step')} 1</h3>
        <p
          dangerouslySetInnerHTML={{ __html: t('BUSINESS_INSTAGRAM_GENERAL_STEP2_DESC', 'Open your Instagram profile and tap on <strong>Edit Profile.</strong>') }}
        />
        <img src={theme.images.salesChannels.instagramGeneralStep2} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 2</h3>
        <p
          dangerouslySetInnerHTML={{ __html: t('BUSINESS_INSTAGRAM_ADVANCED_STEP3_DESC', 'Click on <strong>Action buttons</strong> and then select the button you need.') }}
        />
        <ImageWrapper>
          <img src={theme.images.salesChannels.instagramAdvancedStep31} alt='' />
          <img src={theme.images.salesChannels.instagramAdvancedStep32} alt='' />
        </ImageWrapper>
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 3</h3>
        <p
          dangerouslySetInnerHTML={{ __html: t('BUSINESS_INSTAGRAM_ADVANCED_STEP4_DESC', 'Now, select <strong>Your business</strong>, and paste the following link. Then, tap on <strong>Done</strong>') }}
        />
        <CopyInputWrapper isBottom>
          <Input
            defaultValue={storeUrl || 'https://yourbusinessname.com/store/storename'}
            disabled
          />
        </CopyInputWrapper>
        <ImageWrapper>
          <img src={theme.images.salesChannels.instagramAdvancedStep41} alt='' />
          <img src={theme.images.salesChannels.instagramAdvancedStep42} alt='' />
        </ImageWrapper>
      </Step>
    </InstagramAdvancedContainer>
  )
}
