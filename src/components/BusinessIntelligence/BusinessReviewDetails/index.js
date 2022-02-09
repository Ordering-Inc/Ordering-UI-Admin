import React from 'react'
import { useLanguage, useUtils, useEvent, BusinessReviews as BusinessReviewsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { PersonFill } from 'react-bootstrap-icons'
import { Button, Switch } from '../../../styles'

import {
  ReviewDetailsContainer,
  Header,
  BusinessLogoContainer,
  WrapperImage,
  Image,
  ReviewItemContatiner,
  InfoBlock,
  ReviewItemHeader,
  UserInfoContainer,
  ReviewQualityContainer,
  ReviewBarContainer,
  ReviewBar,
  ReviewQualityTextContainer,
  Comment,
  NotReviewed
} from './styles'

const BusinessReviewDetailsUI = (props) => {
  const {
    business,
    reviewsList,
    handleChangeReviewEnabled
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage, parseDate }] = useUtils()
  const [events] = useEvent()

  const getReviewPercent = (quality) => {
    return quality / 5 * 100
  }

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <>
      <ReviewDetailsContainer>
        <Header>
          <h1>{business?.name}</h1>
          <Button
            color='lightPrimary'
            borderRadius='8px'
            onClick={() => handleGoToPage({ page: 'reviewProducts', params: { store: business?.slug } })}
          >
            {t('PRODUCT_REVIEW', 'Product review')}
          </Button>
        </Header>
        <BusinessLogoContainer>
          <WrapperImage>
            <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_120,c_limit')} />
          </WrapperImage>
        </BusinessLogoContainer>
        {reviewsList?.loading ? (
          [...Array(10).keys()].map(i => (
            <ReviewItemContatiner key={i}>
              <ReviewItemHeader>
                <UserInfoContainer>
                  <WrapperImage isSmall isSkeleton>
                    <Skeleton width={40} height={40} />
                  </WrapperImage>
                  <InfoBlock>
                    <p><Skeleton width={80} /></p>
                    <p><Skeleton width={100} /></p>
                  </InfoBlock>
                </UserInfoContainer>
                <Skeleton width={20} />
              </ReviewItemHeader>
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
          reviewsList?.reviews.map(review => (
            <ReviewItemContatiner key={review?.id}>
              <ReviewItemHeader>
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
                    {review?.order_id && (
                      <p>
                        <span>{t('INVOICE_ORDER_NO', 'Order No.')}{' '}</span>
                        <span>{review?.order_id}</span>
                      </p>
                    )}
                  </InfoBlock>
                </UserInfoContainer>
                <Switch
                  defaultChecked={review?.enabled}
                  onChange={val => handleChangeReviewEnabled(review?.id, val)}
                />
              </ReviewItemHeader>
              <ReviewQualityContainer>
                <ReviewBarContainer>
                  <ReviewBar
                    percentage={getReviewPercent(review?.quality)}
                  />
                </ReviewBarContainer>
                <ReviewQualityTextContainer>
                  <p>{t('TERRIBLE', 'Terrible')}</p>
                  <p>{t('BAD', 'Bad')}</p>
                  <p>{t('OKAY', 'Okay')}</p>
                  <p>{t('GOOD', 'Good')}</p>
                  <p>{t('GREAT', 'Great')}</p>
                </ReviewQualityTextContainer>
              </ReviewQualityContainer>
              <Comment>{review?.comment}</Comment>
            </ReviewItemContatiner>
          ))
        )}

        {!reviewsList?.loading && reviewsList?.reviews.length === 0 && (
          <NotReviewed>
            {t('ERROR_REVIEW_FIND', 'The review does not exist.')}
          </NotReviewed>
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
  return <BusinessReviewsController {...businessReviewDetailsProps} />
}
