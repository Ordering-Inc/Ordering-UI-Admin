import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsProductCategories as AnalyticsProductCategoriesController } from './naked'
import {
  Container,
  ProductCategoryHeader,
  ActionBlock,
  ProductCategoryContentWrapper,
  ProductCategoryContent,
  SkeletonContainerWrapper,
  PercentContainer,
  EmptyContent
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import Skeleton from 'react-loading-skeleton'

const AnalyticsProductCategoriesUI = (props) => {
  const {
    isProducts,
    productCategoryList
  } = props

  const [, t] = useLanguage()

  return (
    <Container>
      <ProductCategoryHeader>
        <p>{isProducts ? t('TOP_PRODUCTS', 'Top Products') : t('TOP_CATEGORIES', 'Top Categories')}</p>
        <ActionBlock>
          <BsDownload />
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
              productCategoryList?.data.length > 0 ? productCategoryList?.data.map((item, i) => (
                <ProductCategoryContent key={i}>
                  <p>{item?.name}</p>
                  <PercentContainer percent={item?.sales}>{item?.sales}%</PercentContainer>
                </ProductCategoryContent>
              )) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )
            }
          </ProductCategoryContentWrapper>
        )
      }

    </Container>
  )
}

export const AnalyticsProductCategories = (props) => {
  const analyticsProductCategoriesProps = {
    ...props,
    UIComponent: AnalyticsProductCategoriesUI
  }

  return (
    <AnalyticsProductCategoriesController {...analyticsProductCategoriesProps} />
  )
}
