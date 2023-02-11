import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { Button } from '../../../styles'
import { Modal } from '../../Shared'
import { BusinessSalesFacebook } from '../BusinessSalesFacebook'
import { BusinessSalesTiktok } from '../BusinessSalesTiktok'
import { BusinessSalesInstagram } from '../BusinessSalesInstagram'
import { BusinessSalesGoogle } from '../BusinessSalesGoogle'
import {
  Container,
  SalesContainer,
  SocialBlock,
  BlockHeader,
  ConnectingContainer
} from './styles'

export const BusinessSalesChannel = (props) => {
  const { setIsExtendExtraOpen, business } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()

  const [selectedItem, setSelectedItem] = useState(null)
  const [hasConnectModal, setHasConnectModal] = useState(false)
  const [isOpenSocial, setIsOpenSocial] = useState(false)

  const socialList = [
    { key: 'facebook', name: t('FACEBOOK', 'Facebook'), icon: theme.images.icons.facebook, description: t('FACEBOOK_DESCRIPTION', 'Now you can add a “Shop now” link on your business’s Facebook page that goes straight to your ordering menu.') },
    { key: 'tiktok', name: t('TIKTOK', 'Tiktok'), icon: theme.images.icons.tiktok, description: t('TIKTOK_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?') },
    { key: 'instagram', name: t('INSTAGRAM', 'Instagram'), icon: theme.images.icons.instagram, description: t('INSTAGRAM_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?') },
    { key: 'google_my_business', name: t('GOOGLE_MY_BUSINESS', 'Google My Business'), icon: theme.images.icons.businessGoogle, description: t('GOOGLE_MY_BUSINESS_DESCRIPTION', 'After they purchase we install in 24 hours. Order and pay 99 per business. They can sell at whatever price. Also. If a business manager purchases then shared revenue?') }
  ]

  const handleConnect = (item) => {
    handleCloseDetail()
    setSelectedItem(item)
    setHasConnectModal(true)
  }

  const handleOpenSocial = () => {
    setHasConnectModal(false)
    setIsOpenSocial(true)
    setIsExtendExtraOpen(true)
  }

  const handleCloseDetail = () => {
    setIsOpenSocial(false)
    setIsExtendExtraOpen(false)
    setSelectedItem(null)
  }

  return (
    <Container>
      <SalesContainer>
        <h1>{t('SALES_CHANNELS', 'Sales channels')}</h1>
        {socialList.map((item, i) => (
          <SocialBlock key={i}>
            <BlockHeader>
              <img src={item.icon} alt='' />
              <p>{item.name}</p>
            </BlockHeader>
            <p>{item.description}</p>
            <Button
              color='primary'
              onClick={() => handleConnect(item)}
            >
              {t('CONNECT', 'Connect')}
            </Button>
          </SocialBlock>
        ))}
      </SalesContainer>
      <Modal
        title={t('CONNECTING_SALES_CHANNELS', 'Connecting sales Channels')}
        open={hasConnectModal}
        onClose={() => setHasConnectModal(false)}
        width='768px'
      >
        <ConnectingContainer>
          <p>{t('CONNECTING_SALES_CHANNELS_DESC_1', 'Lorem ipsum dolor sit amet consectetur. Fringilla nulla in tincidunt id in erat et. In massa commodo imperdiet varius pharetra ultricies nunc dapibus integer. Gravida scelerisque justo hendrerit elit neque. Nunc velit vel eu velit. Faucibus turpis feugiat id nisi orci sodales.')}</p>
          <p>{t('CONNECTING_SALES_CHANNELS_DESC_2', 'Lorem ipsum dolor sit amet consectetur. Fringilla nulla in tincidunt id in erat et. In massa commodo imperdiet varius pharetra ultricies nunc dapibus integer. Gravida scelerisque justo hendrerit elit neque. Nunc velit vel eu velit. Faucibus turpis feugiat id nisi orci sodales.')}</p>
          <Button
            color='primary'
            onClick={handleOpenSocial}
          >
            {t('OK_I_UNDERSTAND', 'Ok, I understand')}
          </Button>
        </ConnectingContainer>
      </Modal>
      {width >= 1000 ? (
        isOpenSocial && (
          <>
            {selectedItem?.key === 'facebook' && (
              <BusinessSalesFacebook
                businessSlug={business.slug}
                socialItem={selectedItem}
                onClose={handleCloseDetail}
              />
            )}
            {selectedItem?.key === 'tiktok' && (
              <BusinessSalesTiktok
                socialItem={selectedItem}
                onClose={handleCloseDetail}
              />
            )}
            {selectedItem?.key === 'instagram' && (
              <BusinessSalesInstagram
                businessSlug={business.slug}
                socialItem={selectedItem}
                onClose={handleCloseDetail}
              />
            )}
            {selectedItem?.key === 'google_my_business' && (
              <BusinessSalesGoogle
                businessSlug={business.slug}
                socialItem={selectedItem}
                onClose={handleCloseDetail}
              />
            )}
          </>
        )
      ) : (
        isOpenSocial && (
          <Modal
            width='80%'
            open={isOpenSocial}
            onClose={handleCloseDetail}
          >
            <>
              {selectedItem?.key === 'facebook' && (
                <BusinessSalesFacebook
                  businessSlug={business.slug}
                  socialItem={selectedItem}
                  onClose={handleCloseDetail}
                />
              )}
              {selectedItem?.key === 'tiktok' && (
                <BusinessSalesTiktok
                  socialItem={selectedItem}
                  onClose={handleCloseDetail}
                />
              )}
              {selectedItem?.key === 'instagram' && (
                <BusinessSalesInstagram
                  businessSlug={business.slug}
                  socialItem={selectedItem}
                  onClose={handleCloseDetail}
                />
              )}
              {selectedItem?.key === 'google_my_business' && (
                <BusinessSalesGoogle
                  businessSlug={business.slug}
                  socialItem={selectedItem}
                  onClose={handleCloseDetail}
                />
              )}
            </>
          </Modal>
        )
      )}
    </Container>
  )
}
