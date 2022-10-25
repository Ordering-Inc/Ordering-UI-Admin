import React, { useLayoutEffect, useRef, useState } from 'react'
import { InfoCircle } from 'react-bootstrap-icons'

import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'

import {
  DisabledFeatureAlertContainer,
  Wrapper,
  CommentContainer,
  Comment,
  MoreInfo
} from './styles'

export const DisabledFeatureAlert = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(true)

  useLayoutEffect(() => {
    containerRef.current && setContainerWidth(containerRef.current.offsetWidth)
  }, [])

  return (
    <DisabledFeatureAlertContainer ref={containerRef} containerWidth={containerWidth}>
      <Wrapper>
        <InfoCircle color={theme.colors.primary} />
        <CommentContainer>
          <Comment>{t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function')}</Comment>
          <MoreInfo href='https://www.ordering.co/ordering-sales' target='_blank'>{t('GET_FEATURE', 'Get this feature')}</MoreInfo>
        </CommentContainer>
        {/* <XCircle style={{ cursor: 'pointer' }} color={theme.colors.primary} /> */}
      </Wrapper>
    </DisabledFeatureAlertContainer>
  )
}
