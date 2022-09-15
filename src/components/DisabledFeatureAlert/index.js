import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { InfoCircle, XCircle } from 'react-bootstrap-icons'

import { useLanguage, useConfig, useSession } from 'ordering-components-admin'
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
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(true)

  const featureList = ['cash_wallet', 'loyalty_levels_points', 'massive_importer', 'advanced_reports',
    'advanced_logistics', 'shared_menus', 'payments_advanced', 'Marketing_dashboard']
  const [showed, setShowed] = useState(false)

  useLayoutEffect(() => {
    containerRef.current && setContainerWidth(containerRef.current.offsetWidth)
  }, [])

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 && user) {
      const detectedDisabledFeature = featureList.every(feature => Object.keys(configs).includes(feature))
      const _showed = !detectedDisabledFeature && user?.level === 0
      setShowed(_showed)
      return
    }
    setShowed(false)
  }, [configs])
  return (
    <>
      {showed && (
        <DisabledFeatureAlertContainer ref={containerRef} containerWidth={containerWidth}>
          <Wrapper>
            <InfoCircle color={theme.colors.primary} />
            <CommentContainer>
              <Comment>{t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function')}</Comment>
              <MoreInfo href='https://www.ordering.co/ordering-sales' target='_blank'>{t('GET_FEATURE', 'Get this feature')}</MoreInfo>
            </CommentContainer>
            <XCircle onClick={() => setShowed(false)} style={{ cursor: 'pointer' }} color={theme.colors.primary} />
          </Wrapper>
        </DisabledFeatureAlertContainer>
      )}
    </>
  )
}
