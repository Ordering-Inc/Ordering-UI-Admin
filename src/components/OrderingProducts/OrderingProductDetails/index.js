import React, { useState } from 'react'
import { useLanguage, SiteDetails as SiteDetailsController } from 'ordering-components-admin'
import { DefaultSelect } from '../../../styles'
import { ThreeDots } from 'react-bootstrap-icons'
import { Confirm } from '../../Shared'
import { OrderingProductGeneralDetails } from '../OrderingProductGeneralDetails'
import { SiteTheme } from '../SiteTheme'
import {
  Container,
  Tabs,
  Tab,
  DetailHeaderContainer,
  ActionSelectorWrapper,
  TitleWrapper
} from './styles'

const OrderingProductDetailsUI = (props) => {
  const {
    siteState,
    isAddMode,
    handleDeleteSite
  } = props

  const [, t] = useLanguage()
  const [selectedTab, setSelectedTab] = useState('general')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const tabs = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'theme', content: t('THEME', 'Theme') }
  ]

  const moreOptions = [
    { value: 0, content: t('DELETE', 'Delete') }
  ]

  const onClickDelete = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PRODUCT', 'Product')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteSite()
      }
    })
  }

  return (
    <Container>
      <DetailHeaderContainer>
        <TitleWrapper>
          <h2>{siteState.site?.name}</h2>
        </TitleWrapper>
        {!isAddMode && (
          <ActionSelectorWrapper>
            <DefaultSelect
              placeholder={<ThreeDots />}
              options={moreOptions}
              onChange={() => onClickDelete()}
            />
          </ActionSelectorWrapper>
        )}
      </DetailHeaderContainer>
      {!isAddMode && (
        <Tabs>
          {tabs.map(tab => (
            <Tab
              key={tab.key}
              active={selectedTab === tab.key}
              onClick={() => setSelectedTab(tab.key)}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
      )}
      {selectedTab === 'general' && (
        <OrderingProductGeneralDetails {...props} />
      )}
      {selectedTab === 'theme' && (
        <SiteTheme siteId={siteState.site?.id} />
      )}

      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </Container>
  )
}

export const OrderingProductDetails = (props) => {
  const productDetailsProps = {
    ...props,
    UIComponent: OrderingProductDetailsUI
  }
  return <SiteDetailsController {...productDetailsProps} />
}
