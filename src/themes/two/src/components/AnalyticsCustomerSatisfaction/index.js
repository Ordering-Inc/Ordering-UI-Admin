import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsCustomerSatisfaction as AnalyticsCustomerSatisfactionController } from './naked'
import {
  Container,
  CustomerSatisfactionHeader,
  ActionBlock,
  CustomerSatisfactionWrapper,
  SkeletonContainerWrapper,
  ScoreDiv,
  StarContent
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

  return (
    <Container>
      <CustomerSatisfactionHeader>
        <p>{t('CUSTOMER_SATISFACTION', 'Customer Safisfaction')}</p>
        <ActionBlock>
          <BsDownload />
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
            <Score star={customerSatisfactionList?.data?.general} text={t('GENERAL', 'General')} />
            <Score star={customerSatisfactionList?.data?.quality} text={t('QUANTITY', 'Quality')} />
            <Score star={customerSatisfactionList?.data?.delivery} text={t('DELIVERY', 'Delivery')} />
            <Score star={customerSatisfactionList?.data?.service} text={t('SERVICE', 'Service')} />
            <Score star={customerSatisfactionList?.data?.package} text={t('PACKAGE', 'Package')} />
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
