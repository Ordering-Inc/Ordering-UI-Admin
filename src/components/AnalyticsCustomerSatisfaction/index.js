import React, { useRef } from 'react'
import { useLanguage } from 'ordering-components-admin'
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

export const AnalyticsCustomerSatisfaction = (props) => {
  const {
    dataList
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
        <ActionBlock
          disabled={(!dataList?.data?.general &&
              !dataList?.data?.quality &&
              !dataList?.data?.delivery &&
              !dataList?.data?.service &&
              !dataList?.data?.package
          )}
        >
          <BsDownload onClick={downloadImage} />
        </ActionBlock>
      </CustomerSatisfactionHeader>
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
          <CustomerSatisfactionWrapper>
            {(!dataList?.data?.general &&
              !dataList?.data?.quality &&
              !dataList?.data?.delivery &&
              !dataList?.data?.service &&
              !dataList?.data?.package
            ) ? (<EmptyContent>{t('NO_DATA', 'No Data')}</EmptyContent>
              ) : (
                <CustomerSatisfactionContent ref={downloadElementRef}>
                  {dataList?.data?.general && <Score star={dataList?.data?.general} text={t('GENERAL', 'General')} />}
                  {dataList?.data?.quality && <Score star={dataList?.data?.quality} text={t('QUALITY', 'Quality')} />}
                  {dataList?.data?.delivery && <Score star={dataList?.data?.delivery} text={t('DELIVERY', 'Delivery')} />}
                  {dataList?.data?.service && <Score star={dataList?.data?.service} text={t('SERVICE', 'Service')} />}
                  {dataList?.data?.package && <Score star={dataList?.data?.package} text={t('PACKAGE', 'Package')} />}
                </CustomerSatisfactionContent>
              )}
          </CustomerSatisfactionWrapper>
        )
      }
    </Container>
  )
}
