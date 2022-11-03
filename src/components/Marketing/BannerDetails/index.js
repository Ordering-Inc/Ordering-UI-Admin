import React, { useState, useEffect } from 'react'
import { useLanguage, BannerDetails as BannerDetailsController } from 'ordering-components-admin'
import { Switch } from '../../../styles'
import { BannerImages } from './BannerImages'
import { AddBanner } from './AddBanner'
import { SelectSites, Alert, Confirm } from '../../Shared'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'

import {
  Container,
  HeaderContainer,
  LeftHeader,
  RightHeader,
  TabsConatiner,
  Tab,
  ActionSelectorWrapper
} from './styles'

const BannerDetailsUI = (props) => {
  const {
    bannerState,
    changesState,
    actionState,
    isAddMode,
    selectedSitesIds,
    handleSelectSite,
    handleSelectAllSites,
    sitesState,
    handleUpdateClick,
    handleAddBanner,
    defaultPosition,
    handleChangeItem,
    handleDeleteBanner
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [selectedTab, setSelectedTab] = useState('images')
  const [alertState, setAlertState] = useState({ open: false, content: [], handleOnAccept: null })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const tabOptions = [
    { key: 'images', content: t('IMAGES', 'Images') },
    { key: 'channels', content: t('CHANNELS', 'Channels') }
  ]

  const onClickDeleteBanner = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('BANNER', 'Banner')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteBanner()
      }
    })
  }

  useEffect(() => {
    if (!actionState?.error || actionState.loading) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState])

  return (
    <Container>
      <HeaderContainer>
        <LeftHeader>
          <h1>{isAddMode ? t('ADD_BANNER', 'Add banner') : bannerState?.banner?.name}</h1>
          {!isAddMode && (
            <Switch
              defaultChecked={bannerState.banner?.enabled}
              onChange={enabled => handleUpdateClick({ enabled: enabled })}
            />
          )}
        </LeftHeader>
        <RightHeader>
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => onClickDeleteBanner()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </RightHeader>
      </HeaderContainer>
      {isAddMode ? (
        <AddBanner
          changesState={changesState}
          handleChangeItem={handleChangeItem}
          handleAddBanner={handleAddBanner}
          defaultPosition={defaultPosition}
        />
      ) : (
        <>
          <TabsConatiner>
            {tabOptions.map(option => (
              <Tab
                key={option.key}
                active={selectedTab === option.key}
                onClick={() => setSelectedTab(option.key)}
              >
                {option.content}
              </Tab>
            ))}
          </TabsConatiner>
          {selectedTab === 'images' && (
            <BannerImages {...props} />
          )}
          {selectedTab === 'channels' && (
            <SelectSites
              isAddMode={isAddMode}
              allSites={sitesState.sites}
              selectedSitesIds={selectedSitesIds}
              handleSelectSite={handleSelectSite}
              handleSelectAllSites={() => handleSelectAllSites(true)}
              handleSelectNoneSites={() => handleSelectAllSites(false)}
              isDisabled={Object.keys(changesState.changes).length === 0 || changesState.loading || actionState.loading}
              handleUpdateClick={handleUpdateClick}
              handleAddClick={handleAddBanner}
            />
          )}
        </>
      )}
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => alertState?.handleOnAccept ? alertState.handleOnAccept() : setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
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

export const BannerDetails = (props) => {
  const bannerItemsProps = {
    ...props,
    UIComponent: BannerDetailsUI
  }
  return <BannerDetailsController {...bannerItemsProps} />
}
