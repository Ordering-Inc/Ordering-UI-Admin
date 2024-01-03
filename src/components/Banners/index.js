import React, { useEffect, useRef } from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { ExclamationTriangle } from 'react-bootstrap-icons'

import {
  Container,
  Banner,
  Icon,
  Content,
  ButtonWrap
} from './styles'
import { Button } from '../../styles'

export const Banners = (props) => {
  const { type, urlToGo, setLayoutPT } = props

  const fixedRef = useRef(null)
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const handleClick = () => {
    if (!urlToGo) return
    window.open(urlToGo, '_blank').focus()
  }

  useEffect(() => {
    if (fixedRef.current) {
      setLayoutPT(fixedRef.current.offsetHeight)
    }
  })

  return (
    type === 'past_due' ? (
      <Container ref={fixedRef}>
        <Banner>
          <Icon>
            <ExclamationTriangle
              size={26}
              color={theme.colors.warning}
            />
          </Icon>
          <Content>
            <h1>{t('PAST_DUE_TITLE_BANNER', 'Hey :user:, we have a problem, your account is past due.').replace(':user:', user?.name)}</h1>
            <p>{t('PAST_DUE_SUBTITLE_BANNER', 'There appears to be an issue with your payment. Kindly update the card on file and complete your payment.')}</p>
          </Content>
          <ButtonWrap>
            <Button
              color='warning'
              style={{
                borderRadius: 8,
                padding: '5px 30px',
                maxHeight: '40px'
              }}
              onClick={() => handleClick()}
            >
              {t('PAY_NOW', 'Pay now')}
            </Button>
          </ButtonWrap>
        </Banner>
      </Container>
    ) : null
  )
}

Banners.defaultProps = {
  type: 'past_due'
}
