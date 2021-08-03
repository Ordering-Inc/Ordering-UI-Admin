import React from 'react'
import { AnalyticsTimeZone as AnalyticsTimeZoneController } from './naked'
import { Button } from '../../styles/Buttons'
import {
  AnalyticsTimeZoneContainer
} from './styles'

const AnalyticsTimeZoneUI = () => {
  return (
    <AnalyticsTimeZoneContainer>
      <Button
        borderRadius='7.6px'
      >
        America/Mexico_City
      </Button>
    </AnalyticsTimeZoneContainer>
  )
}

export const AnalyticsTimeZone = (props) => {
  const analyticsTimeZoneProps = {
    ...props,
    UIComponent: AnalyticsTimeZoneUI
  }
  return <AnalyticsTimeZoneController {...analyticsTimeZoneProps} />
}
