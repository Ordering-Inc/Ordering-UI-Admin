import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Input } from '../../../styles'
import {
  InstagramGeneralContainer,
  Step,
  CopyInputWrapper
} from './styles'

export const GeneralInstagram = ({ businessSlug }) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <InstagramGeneralContainer>
      <p>{t('BUSINESS_INSTAGRAM_GENERAL_DESC', 'Lorem ipsum dolor sit amet consectetur. Vitae odio aliquam adipiscing vitae. Nulla sed integer congue gravida lobortis tristique condimentum fusce tincidunt.')}</p>
      <Step>
        <h3>{t('STEP', 'Step')} 1</h3>
        <p
          dangerouslySetInnerHTML={{ __html: t('BUSINESS_INSTAGRAM_GENERAL_STEP2_DESC', 'Open your Instagram profile and tap on <strong>Edit Profile.<strong>') }}
        />
        <img src={theme.images.salesChannels.instagramGeneralStep2} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 2</h3>
        <p>{t('BUSINESS_INSTAGRAM_GENERAL_STEP3_DESC', 'On the Edit Profile screen, click on the Links option.')}</p>
        <img src={theme.images.salesChannels.instagramGeneralStep3} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 3</h3>
        <p>{t('BUSINESS_INSTAGRAM_GENERAL_STEP4_DESC', 'Add your business link, or if you already have a link, you can edit it; click on that option.')}</p>
        <img src={theme.images.salesChannels.instagramGeneralStep4} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 4</h3>
        <p>{t('BUSINESS_INSTAGRAM_GENERAL_STEP5_DESC', 'Just add this link to the website field:')}</p>
        <CopyInputWrapper isBottom>
          <Input
            defaultValue='https://yourbusinessname.com/store/storename'
            disabled
          />
        </CopyInputWrapper>
        <img src={theme.images.salesChannels.instagramGeneralStep5} alt='' />
      </Step>
      <Step>
        <h3>{t('STEP', 'Step')} 5</h3>
        <p>{t('BUSINESS_INSTAGRAM_GENERAL_STEP6_DESC', 'Done; it will appear this way on your Instagram account.')}</p>
        <img src={theme.images.salesChannels.instagramGeneralStep6} alt='' />
      </Step>
    </InstagramGeneralContainer>
  )
}
