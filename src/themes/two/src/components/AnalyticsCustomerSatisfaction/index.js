import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsCustomerSatisfaction as AnalyticsCustomerSatisfactionController } from './naked'
import * as htmlToImage from 'html-to-image'
import {
  Container,
  CustomerSatisfactionHeader,
  ActionBlock,
  CustomerSatisfactionWrapper,
  SkeletonContainerWrapper,
  ScoreDiv,
  StarContent,
  EmptyContent,
  CustomerSatisfactionContent
} from './styles'
import BsDownload from '@meronex/icons/bs/BsDownload'
import Skeleton from 'react-loading-skeleton'
import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar'
import AiFillStar from '@meronex/icons/ai/AiFillStar'

const Score = ({ star, text }) => (
  <ScoreDiv>
    <p>{text}</p>
    <StarContent>
      {
        [...Array(5).keys()].map(i => (
          star > i ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
        ))
      }
    </StarContent>
  </ScoreDiv>
)

const AnalyticsCustomerSatisfactionUI = (props) => {
  const {
    customerSatisfactionList
  } = props

  const [, t] = useLanguage()
  const downloadElementRef = useRef(null)

  const downloadImage = () => {
    if (!downloadElementRef?.current) return
    htmlToImage.toPng(downloadElementRef?.current)
      .then(function (dataUrl) {
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = `${t('CUSTOMER_SATISFACTION', 'Customer Safisfaction')}.png`
        // Trigger the download
        a.click()
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

  return (
    <Container>
      <CustomerSatisfactionHeader>
        <p>{t('CUSTOMER_SATISFACTION', 'Customer Safisfaction')}</p>
        <ActionBlock>
          <BsDownload onClick={downloadImage} />
        </ActionBlock>
      </CustomerSatisfactionHeader>
      {
        customerSatisfactionList?.loading ? (
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
          <CustomerSatisfactionWrapper>
            {(!customerSatisfactionList?.data?.general &&
              !customerSatisfactionList?.data?.quality &&
              !customerSatisfactionList?.data?.delivery &&
              !customerSatisfactionList?.data?.service &&
              !customerSatisfactionList?.data?.package
            ) ? (<EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              ) : (
                <CustomerSatisfactionContent ref={downloadElementRef}>
                  {customerSatisfactionList?.data?.general && <Score star={customerSatisfactionList?.data?.general} text={t('GENERAL', 'General')} />}
                  {customerSatisfactionList?.data?.quality && <Score star={customerSatisfactionList?.data?.quality} text={t('QUANTITY', 'Quality')} />}
                  {customerSatisfactionList?.data?.delivery && <Score star={customerSatisfactionList?.data?.delivery} text={t('DELIVERY', 'Delivery')} />}
                  {customerSatisfactionList?.data?.service && <Score star={customerSatisfactionList?.data?.service} text={t('SERVICE', 'Service')} />}
                  {customerSatisfactionList?.data?.package && <Score star={customerSatisfactionList?.data?.package} text={t('PACKAGE', 'Package')} />}
                </CustomerSatisfactionContent>
              )}
          </CustomerSatisfactionWrapper>
        )
      }
    </Container>
  )
}

export const AnalyticsCustomerSatisfaction = (props) => {
  const analyticsCustomerSatisfactionProps = {
    ...props,
    UIComponent: AnalyticsCustomerSatisfactionUI
  }

  return (
    <AnalyticsCustomerSatisfactionController {...analyticsCustomerSatisfactionProps} />
  )
}
