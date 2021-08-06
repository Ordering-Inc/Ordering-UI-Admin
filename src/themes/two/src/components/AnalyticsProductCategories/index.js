import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  ProductCategoryHeader,
  ActionBlock,
  ProductCategoryContentWrapper,
  ProductCategoryContent,
  SkeletonContainerWrapper,
  PercentContainer,
  EmptyContent,
  ProductCategoryContainer
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import Skeleton from 'react-loading-skeleton'
import * as htmlToImage from 'html-to-image'

export const AnalyticsProductCategories = (props) => {
  const {
    isProducts,
    productCategoryList
  } = props

  const [, t] = useLanguage()
  const downloadElementRef = useRef(null)

  const downloadImage = () => {
    if (!downloadElementRef?.current) return
    htmlToImage.toPng(downloadElementRef?.current)
      .then(function (dataUrl) {
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = `${isProducts ? t('TOP_PRODUCTS', 'Top Products') : t('TOP_CATEGORIES', 'Top Categories')}.png`
        // Trigger the download
        a.click()
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

  return (
    <Container>
      <ProductCategoryHeader>
        <p>{isProducts ? t('TOP_PRODUCTS', 'Top Products') : t('TOP_CATEGORIES', 'Top Categories')}</p>
        <ActionBlock disabled={productCategoryList?.data.length === 0}>
          <BsDownload onClick={downloadImage} />
        </ActionBlock>
      </ProductCategoryHeader>
      {
        productCategoryList?.loading ? (
          <SkeletonContainerWrapper>
            {
              [...Array(5).keys()].map(i => (
                <div key={i}>
                  <Skeleton height={30} />
                </div>
              ))
            }
          </SkeletonContainerWrapper>
        ) : (
          <ProductCategoryContentWrapper>
            {
              productCategoryList?.data.length > 0 ? (
                <ProductCategoryContainer ref={downloadElementRef}>
                  {
                    productCategoryList?.data.map((item, i) => (
                      <ProductCategoryContent key={i}>
                        <p>{item?.name}</p>
                        <PercentContainer percent={item?.sales}>{item?.sales}%</PercentContainer>
                      </ProductCategoryContent>
                    ))
                  }
                </ProductCategoryContainer>
              ) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )
            }
          </ProductCategoryContentWrapper>
        )
      }

    </Container>
  )
}
