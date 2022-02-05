import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  AnalyticsTopOrdersHeader,
  ActionBlock,
  TopOrdersContainerWrapper,
  TopOrdersContent,
  SkeletonContainerWrapper,
  PercentContainer,
  EmptyContent,
  ProductCategoryContainer
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import Skeleton from 'react-loading-skeleton'

export const AnalyticsTopOrders = (props) => {
  const {
    dataList
  } = props

  const [, t] = useLanguage()
  const downloadElementRef = useRef(null)

  const downloadCSV = () => {
    let csv = `${t('NAME', 'Name')}, ${t('ORDERS', 'Orders')}\n`
    for (const row of dataList?.data) {
      csv += row.name + ','
      csv += `${row.orders_count},`
      csv += '\n'
    }
    var downloadLink = document.createElement('a')
    var blob = new Blob(['\ufeff', csv])
    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    const fileSuffix = new Date().getTime()
    downloadLink.download = `top_orders_${fileSuffix}.csv`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <Container>
      <AnalyticsTopOrdersHeader>
        <p>{t('TOP_ORDERS', 'Top Orders')}</p>
        <ActionBlock disabled={dataList?.data.length === 0}>
          <BsDownload onClick={downloadCSV} />
        </ActionBlock>
      </AnalyticsTopOrdersHeader>
      {
        dataList?.loading ? (
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
          <TopOrdersContainerWrapper>
            {
              dataList?.data.length > 0 ? (
                <ProductCategoryContainer ref={downloadElementRef}>
                  {
                    dataList?.data.map((item, i) => (
                      <TopOrdersContent key={i}>
                        <p>{item?.name}</p>
                        <PercentContainer percent={item?.orders_count}>{item?.orders_count}%</PercentContainer>
                      </TopOrdersContent>
                    ))
                  }
                </ProductCategoryContainer>
              ) : (
                <EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              )
            }
          </TopOrdersContainerWrapper>
        )
      }

    </Container>
  )
}
