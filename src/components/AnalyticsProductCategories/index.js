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

export const AnalyticsProductCategories = (props) => {
  const {
    isProducts,
    productCategoryList
  } = props

  const [, t] = useLanguage()
  const downloadElementRef = useRef(null)

  const downloadCSV = () => {
    let csv = `${t('NAME', 'Name')}, ${t('SALES', 'Sales')}(%)\n`
    for (const row of productCategoryList?.data) {
      csv += row.name + ','
      csv += `${row.sales},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    const name = isProducts ? 'top_products' : 'top_categories'
    downloadLink.download = `${name}_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <Container>
      <ProductCategoryHeader>
        <p>{isProducts ? t('TOP_PRODUCTS', 'Top Products') : t('TOP_CATEGORIES', 'Top Categories')}</p>
        <ActionBlock disabled={productCategoryList?.data.length === 0}>
          <BsDownload onClick={downloadCSV} />
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
