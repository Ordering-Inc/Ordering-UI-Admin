import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { TextArea } from '../../styles'

import {
  ReviewDetailsContainer,
  Header,
  BusinessLogoContainer,
  WrapperImage,
  Image,
  ReviewQualityContainer,
  QualityWrapper,
  ReviewBarContainer,
  ReviewBar,
  ReviewQualityTextContainer
} from './styles'

export const ReviewDetails = (props) => {
  const {
    review,
    handleUpdateReview
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()

  const getReviewPercent = (quality) => {
    return quality / 5 * 100
  }

  return (
    <>
      <ReviewDetailsContainer>
        <Header>
          <h1>{review?.business_name}</h1>
          <Switch
            defaultChecked={review?.enabled}
            onChange={enabled => handleUpdateReview(review?.business_id, review.id, { enabled: enabled })}
          />
        </Header>
        <BusinessLogoContainer>
          <WrapperImage>
            <Image bgimage={optimizeImage(review?.business_logo || theme.images?.dummies?.businessLogo)} />
          </WrapperImage>
        </BusinessLogoContainer>
        <ReviewQualityContainer>
          <QualityWrapper>
            <p>{t('QUALITY', 'Quality of products')}</p>
          </QualityWrapper>
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
        <ReviewQualityContainer>
          <QualityWrapper>
            <p>{t('SERVICE', 'service')}</p>
          </QualityWrapper>
          <ReviewBarContainer>
            <ReviewBar
              percentage={getReviewPercent(review?.service)}
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
        {review?.delivery && (
          <ReviewQualityContainer>
            <QualityWrapper>
              <p>{t('PUNCTUALITY', 'Punctuality')}</p>
            </QualityWrapper>
            <ReviewBarContainer>
              <ReviewBar
                percentage={getReviewPercent(review?.delivery)}
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
        )}
        <ReviewQualityContainer>
          <QualityWrapper>
            <p>{t('PRODUCT_PACKAGING', 'Product Packaging')}</p>
          </QualityWrapper>
          <ReviewBarContainer>
            <ReviewBar
              percentage={getReviewPercent(review?.package)}
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
        <ReviewQualityContainer>
          <p>{t('COMMENTS', 'Comments')}</p>
          <TextArea
            rows={3}
            defaultValue={review?.comment}
            readOnly
          />
        </ReviewQualityContainer>
      </ReviewDetailsContainer>
    </>
  )
}
