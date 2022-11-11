import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Check2Circle } from 'react-bootstrap-icons'
import {
  Container,
  LogoWrapper,
  Description,
  GetStarted,
  YoutubeVideoWrapper,
  YoutubeVideoInner
} from './styles'
import { Button } from '../../../styles'

export const BusinessSyncItsaCheckmate = () => {
  const theme = useTheme()
  const [, t] = useLanguage()

  return (
    <Container>
      <LogoWrapper>
        <img src={theme.images.general.ItsaCheckmateLogo} alt='' />
      </LogoWrapper>
      <Description>
        <div
          className='sub-header'
          dangerouslySetInnerHTML={{ __html: t('ITSACHECKMATE_SUB_HEADER', 'Take control of all your <strong>Ordering Platform Menus</strong> in one place!') }}
        />
        <div className='menu-item'>
          <Check2Circle />
          <p>{t('ITSACHECKMATE_MENU_1', '86 items & modifiers')}</p>
        </div>
        <div className='menu-item'>
          <Check2Circle />
          <p>{t('ITSACHECKMATE_MENU_2', 'Turn on or off ordering platforms')}</p>
        </div>
        <div className='menu-item'>
          <Check2Circle />
          <p>{t('ITSACHECKMATE_MENU_3', 'Manage delivery hours')}</p>
        </div>
        <div className='menu-item'>
          <Check2Circle />
          <p>{t('ITSACHECKMATE_MENU_4', 'Add, edit, or delete items ')}</p>
        </div>
      </Description>
      <GetStarted>
        <h2>{t('GET_STARTED_RIGHT_HERE', 'Get started right here')}</h2>
        <p>{t('FILL_UP_THIS_FORM_TO_REQUEST_INFORMATION', 'Fill up this form to request more information')}</p>
        <a href='https://share.hsforms.com/1vuXwaFtfTTeZf362zJgqSg3neff' target='_blank' rel='noopener noreferrer'>
          <Button color='primary'>{t('SEND_FORM', 'Send Form')}</Button>
        </a>
      </GetStarted>
      <YoutubeVideoWrapper>
        <YoutubeVideoInner>
          <iframe
            title='youtube'
            src='https://www.youtube.com/embed/_caZDl4ZFp0?feature=oembed'
          />
        </YoutubeVideoInner>
      </YoutubeVideoWrapper>
    </Container>
  )
}
