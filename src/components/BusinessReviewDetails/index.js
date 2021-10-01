import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { BusinessReviewDetails as BusinessReviewDetailsController } from './naked'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { PersonFill } from 'react-bootstrap-icons'
import { Button } from '../../styles'

import {
  ReviewDetailsContainer,
  Header,
  BusinessLogoContainer,
  WrapperImage,
  Image,
  ReviewItemContatiner,
  InfoBlock,
  UserInfoContainer,
  ReviewQualityContainer,
  ReviewBarContainer,
  ReviewBar,
  ReviewQualityTextContainer,
  Comment  
} from './styles'

const BusinessReviewDetailsUI = (props) => {
  const {
    business,
    businessReviewState,
    handleUpdateReview
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parseDate }] = useUtils()

  const getReviewPercent = (quality) => {
    return quality / 5 * 100
  }

  return (
    <>
      <ReviewDetailsContainer>
        <Header>
          <h1>{business?.name}</h1>
          <Button
            color='lightPrimary'
            borderRadius='8px'
          >
            {t('PRODUCT_REVIEW', 'Product review')}
          </Button>
        </Header>
        <BusinessLogoContainer>
          <WrapperImage>
            <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo)} />
          </WrapperImage>
        </BusinessLogoContainer>
        {businessReviewState?.loading ? (
          [...Array(10).keys()].map(i => (
            <ReviewItemContatiner key={i}>
              <UserInfoContainer>
                <WrapperImage isSmall isSkeleton>
                  <Skeleton width={40} height={40} />
                </WrapperImage>
                <InfoBlock>
                  <p><Skeleton width={80} /></p>
                  <p><Skeleton width={100} /></p>
                </InfoBlock>
              </UserInfoContainer>
              <ReviewQualityContainer>
                <ReviewBarContainer>
                  <Skeleton height={10} />
                </ReviewBarContainer>
              </ReviewQualityContainer>
              <ReviewQualityTextContainer>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
              </ReviewQualityTextContainer>
              <Comment>
                <div><Skeleton width={300} /></div>
                <div><Skeleton width={200} /></div>
              </Comment>
            </ReviewItemContatiner>
          ))
        ) : (
          businessReviewState?.reviews.map(review => (
            <ReviewItemContatiner key={review?.id}>
              <UserInfoContainer>
                <WrapperImage isSmall>
                  {review?.user?.photo ? (
                    <Image bgimage={optimizeImage(review?.user?.photo)} />
                  ) : (
                    <PersonFill />
                  )}
                </WrapperImage>
                <InfoBlock>
                  <p className='bold'>{review?.user?.name} {review?.user?.lastname}</p>
                  {review?.created_at && (
                    <p>{parseDate(review?.created_at, { utc: false })}</p>
                  )}
                </InfoBlock>
              </UserInfoContainer>
              <ReviewQualityContainer>
                <ReviewBarContainer>
                  <ReviewBar
                    percentage={getReviewPercent(review?.quality)}
                  />
                </ReviewBarContainer>
                <ReviewQualityTextContainer>
                  <p>{t('Terrible')}</p>
                  <p>{t('Bad')}</p>
                  <p>{t('Okay')}</p>
                  <p>{t('Good')}</p>
                  <p>{t('Great')}</p>
                </ReviewQualityTextContainer>
              </ReviewQualityContainer>
              <Comment>{review?.comment}</Comment>
            </ReviewItemContatiner>
          ))
        )}
      </ReviewDetailsContainer>
    </>
  )
}

export const BusinessReviewDetails = (props) => {
  const businessReviewDetailsProps = {
    ...props,
    UIComponent: BusinessReviewDetailsUI
  }
  return <BusinessReviewDetailsController {...businessReviewDetailsProps} />
}
