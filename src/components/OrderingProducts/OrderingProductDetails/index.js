import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useLanguage, SiteDetails as SiteDetailsController } from 'ordering-components-admin'
import { DefaultSelect, IconButton } from '../../../styles'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { Confirm } from '../../Shared'
import { OrderingProductGeneralDetails } from '../OrderingProductGeneralDetails'
import { SiteTheme } from '../SiteTheme'
import {
  Container,
  Tabs,
  Tab,
  DetailHeaderContainer,
  ActionSelectorWrapper,
  TitleWrapper,
  RightHeader
} from './styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

const OrderingProductDetailsUI = (props) => {
  const {
    siteState,
    isAddMode,
    handleDeleteSite
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [selectedTab, setSelectedTab] = useState('general')
  const { width } = useWindowSize()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isExpand, setIsExpand] = useState(false)

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

  const expandSidebar = () => {
    const element = document.getElementById('product_details')
    if (!element) return
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  const handleTabClick = (tab, isInitialRender) => {
    setSelectedTab(tab)
    if (!isInitialRender) {
      const id = query.get('id')
      if (id) {
        history.replace(`${location.pathname}?id=${id}&tab=${tab}`)
      }
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(selectedTab)
    }
  }, [])

  return (
    <Container>
      <DetailHeaderContainer>
        <TitleWrapper>
          <h2>{siteState.site?.name}</h2>
        </TitleWrapper>
        <RightHeader>
          {width > 576 && (
            <IconButton
              color='black'
              onClick={expandSidebar}
            >
              {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
            </IconButton>
          )}
          {!isAddMode && (
            <ActionSelectorWrapper>
              <DefaultSelect
                placeholder={<ThreeDots />}
                options={moreOptions}
                onChange={() => onClickDelete()}
              />
            </ActionSelectorWrapper>
          )}
        </RightHeader>
      </DetailHeaderContainer>
      {!isAddMode && (
        <Tabs>
          {tabs.map(tab => (
            <Tab
              key={tab.key}
              active={selectedTab === tab.key}
              onClick={() => handleTabClick(tab.key)}
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
