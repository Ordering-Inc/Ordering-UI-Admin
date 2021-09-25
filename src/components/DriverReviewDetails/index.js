import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { DriverReviewDetails as DriverReviewDetailsController } from './naked'
import { useTheme } from 'styled-components'
import { Switch } from '../../styles'
import { PersonFill } from 'react-bootstrap-icons'

import {
  ReviewDetailsContainer,
  Header,
  DriverPhotoContainer,
  WrapperImage,
  Image
} from './styles'

const DriverReviewDetailsUI = (props) => {
  const {
    driver,
    driverReviewState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()

  return (
    <>
      <ReviewDetailsContainer>
        <Header>
          <h1>{driver?.name} {driver?.lastname}</h1>
          <Switch
            defaultChecked
            // onChange={enabled => handleUpdateReview(review?.business_id, review.id, { enabled: enabled })}
          />
        </Header>
        <DriverPhotoContainer>
          <WrapperImage>
            {driver?.photo ? (
              <Image bgimage={optimizeImage(driver?.photo)} />
            ) : (
              <PersonFill />
            )}
          </WrapperImage>
        </DriverPhotoContainer>
      </ReviewDetailsContainer>
    </>
  )
}

export const DriverReviewDetails = (props) => {
  const driverReivewDetailsProps = {
    ...props,
    UIComponent: DriverReviewDetailsUI
  }
  return <DriverReviewDetailsController {...driverReivewDetailsProps} />
}
