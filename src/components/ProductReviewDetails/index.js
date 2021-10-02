import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { ProductReview as ProductReviewController } from './naked'
import { ImageFill, HandThumbsUp, HandThumbsDown } from 'react-bootstrap-icons'
import Skeleton from 'react-loading-skeleton'

import {
  ReviewDetailsContainer,
  Header,
  ProductImageContainer,
  WrapperImage,
  Image,
  ReviewContentWrapper,
  ReviewHeader,
  LikeSignWrapper,
  ReviewComment,
  NotReviewed
} from './styles'

const ProductReviewDetailsUI = (props) => {
  const {
    product,
    productReviewList
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage, parseDate }] = useUtils()

  return (
    <>
      <ReviewDetailsContainer>
        <Header>
          <h1>{product?.name}</h1>
        </Header>
        <ProductImageContainer>
          <WrapperImage>
            {product?.images ? (
              <Image bgimage={optimizeImage(product?.images)} />
            ) : (
              <ImageFill />
            )}
          </WrapperImage>
        </ProductImageContainer>
        {productReviewList?.loading ? (
          <Skeleton />
        ) : (
          productReviewList.reviews.map(review => (
            <ReviewContentWrapper key={review.id}>
              <ReviewHeader>
                <LikeSignWrapper isLike={review?.qualification === 5}>
                  <HandThumbsUp />
                  <HandThumbsDown />
                </LikeSignWrapper>
              </ReviewHeader>
              <ReviewComment>
                {review?.comment}
              </ReviewComment>
            </ReviewContentWrapper>
          ))
        )}

        {!productReviewList.loading && productReviewList.reviews.length === 0 && (
          <NotReviewed>
            {t('ERROR_REVIEW_FIND', 'The review does not exist.')}
          </NotReviewed>
        )}
      </ReviewDetailsContainer>
    </>
  )
}

export const ProductReviewDetails = (props) => {
  const productReviewProps = {
    ...props,
    UIComponent: ProductReviewDetailsUI
  }
  return <ProductReviewController {...productReviewProps} />
}
