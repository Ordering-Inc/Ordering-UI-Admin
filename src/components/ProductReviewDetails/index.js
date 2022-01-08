import React from 'react'
import { useLanguage, useUtils, ProductReviews as ProductReviewController } from 'ordering-components-admin'
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
  const [{ optimizeImage }] = useUtils()

  return (
    <>
      <ReviewDetailsContainer>
        <Header>
          <h1>{product?.name}</h1>
        </Header>
        <ProductImageContainer>
          <WrapperImage>
            {product?.images ? (
              <Image bgimage={optimizeImage(product?.images, 'h_120,c_limit')} />
            ) : (
              <ImageFill />
            )}
          </WrapperImage>
        </ProductImageContainer>
        {productReviewList?.loading ? (
          [...Array(10).keys()].map(i => (
            <ReviewContentWrapper key={i}>
              <ReviewHeader>
                <LikeSignWrapper>
                  <Skeleton width={70} />
                </LikeSignWrapper>
              </ReviewHeader>
              <ReviewComment>
                <Skeleton />
              </ReviewComment>
            </ReviewContentWrapper>
          ))
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
