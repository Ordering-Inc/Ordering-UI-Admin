import React, { useState, useEffect, useMemo } from 'react'
import { useLanguage, BannerDetails as BannerDetailsController } from 'ordering-components-admin'
import { Input, Switch } from '../../../styles'
import { BannerImages } from './BannerImages'
import { AddBanner } from './AddBanner'
import { Alert, Confirm } from '../../Shared'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'
import { Businesses } from './Businesses'

import {
  Container,
  HeaderContainer,
  LeftHeader,
  RightHeader,
  TabsConatiner,
  Tab,
  ActionSelectorWrapper,
  FormController
} from './styles'

const BannerDetailsUI = (props) => {
  const {
    bannerState,
    changesState,
    actionState,
    isAddMode,
    handleUpdateClick,
    handleAddBanner,
    handleChangeItem,
    handleDeleteBanner,
    setBannerMoveDistance,
    businessList,
    selectedBusinessIds,
    handleSelectBusiness,
    handleSelectAllBusiness,
    defaultPosition
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [selectedTab, setSelectedTab] = useState('images')
  const [alertState, setAlertState] = useState({ open: false, content: [], handleOnAccept: null })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const tabOptions = useMemo(() => {
    if (bannerState?.banner?.position === 'web_business_page' || bannerState?.banner?.position === 'app_business_page') {
      return (
        [
          { key: 'images', content: t('IMAGES', 'Images') },
          { key: 'businesses', content: t('BUSINESSES', 'Businesses') }
        ]
      )
    } else {
      return (
        [{ key: 'images', content: t('IMAGES', 'Images') }]
      )
    }
  }, [bannerState])

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

  const [timer, setTimer] = useState(null)
  const handleChangeBannerName = (name) => {
    if (!name) return
    clearTimeout(timer)
    const _timer = setTimeout(() => {
      handleUpdateClick({ name: name })
    }, 750)
    setTimer(_timer)
  }

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
      {!isAddMode && (
        <FormController key={bannerState?.banner?.id}>
          <label>{t('NAME', 'Name')}</label>
          <Input
            defaultValue={bannerState?.banner?.name || ''}
            onChange={e => handleChangeBannerName(e.target.value)}
          />
        </FormController>
      )}
      {isAddMode ? (
        <AddBanner
          changesState={changesState}
          handleChangeItem={handleChangeItem}
          handleAddBanner={handleAddBanner}
          actionState={actionState}
          businessList={businessList}
          selectedBusinessIds={selectedBusinessIds}
          handleSelectBusiness={handleSelectBusiness}
          handleSelectAllBusiness={handleSelectAllBusiness}
          defaultPosition={defaultPosition}
        />
      ) : (
        <>
          <TabsConatiner>
            {tabOptions.map(option => (
              <Tab
                key={option.key}
                active={selectedTab === option.key}
                onClick={() => {
                  setSelectedTab(option.key)
                  setBannerMoveDistance(0)
                }}
              >
                {option.content}
              </Tab>
            ))}
          </TabsConatiner>
          {selectedTab === 'images' && (
            <BannerImages
              {...props}
              bannerId={bannerState?.banner?.id}
              setBannerMoveDistance={setBannerMoveDistance}
            />
          )}
          {selectedTab === 'businesses' && (
            <Businesses
              actionState={actionState}
              businessList={businessList}
              selectedBusinessIds={selectedBusinessIds}
              handleSelectBusiness={handleSelectBusiness}
              handleSelectAllBusiness={handleSelectAllBusiness}
              handleUpdateClick={handleUpdateClick}
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
