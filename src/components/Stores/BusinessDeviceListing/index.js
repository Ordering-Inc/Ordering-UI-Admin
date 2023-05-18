import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  useLanguage,
  useUtils,
  BusinessDeviceListing as BusinessDeviceListingController
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton, LinkButton } from '../../../styles'
import { useTheme } from 'styled-components'
import { Alert, SearchBar, SideBar, ColumnAllowSettingPopover } from '../../Shared'
import {
  BrandListingContainer,
  HeaderContainer,
  ActionsGroup,
  HeaderTitleContainer,
  BrandListTable,
  BrandBody,
  WrapperImage,
  Image,
  BrandGeneralInfo,
  InfoBlock,
  BrandListTableWrapper,
  BrandListBottomContainer
} from './styles'
import { BusinessDeviceDetail } from '../BusinessDeviceDetail'

const BusinessDeviceListingUI = (props) => {
  const {
    searchValue,
    onSearch,
    deviceListState,
    handleUpdateDeviceList
  } = props

  const history = useHistory()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [deviceList, setDeviceList] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [allowColumns, setAllowColumns] = useState({
    device_name: true,
    business: true
  })

  const optionsDefault = [
    {
      value: 'device_name',
      content: t('DEVICE_NAME', 'Device Name')
    },
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    }
  ]

  const handleCloseSidebar = () => {
    setIsOpen(false)
    setSelectedDevice(null)
    history.replace(`${location.pathname}`)
  }

  const handleOpenSideBar = (id) => {
    if (id) {
      const device = deviceListState?.devices.find(item => item.id === id)
      setSelectedDevice(device)
    } else {
      setSelectedDevice(null)
    }
    setIsOpen(true)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleClickBrand = (e, brandId, isInitialRender) => {
    const isInvalid = e?.target?.closest('.brand_enable_control')
    if (isInvalid) return
    handleOpenSideBar(brandId)
    if (!isInitialRender) {
      history.replace(`${location.pathname}?id=${brandId}`)
    }
  }

  const handleChangeAllowColumns = (type) => {
    setAllowColumns({
      ...allowColumns,
      [type]: !allowColumns[type]
    })
  }

  useEffect(() => {
    if (deviceListState?.devices?.length > 0) {
      let devices = []
      if (searchValue) {
        devices = deviceListState?.devices?.filter(device => (device.name?.toLowerCase().includes(searchValue?.toLowerCase())))
      } else {
        devices = [...deviceListState?.devices]
      }
      setDeviceList(devices)
    }
  }, [deviceListState, searchValue])

  useEffect(() => {
    if (deviceList?.length > 0 && selectedDevice) {
      const device = deviceListState?.devices?.find(item => item.id === selectedDevice?.id)
      setSelectedDevice(device)
    }
  }, [deviceList])

  return (
    <>
      <BrandListingContainer>
        <HeaderContainer>
          <HeaderTitleContainer>
            {isCollapse && (
              <IconButton
                color='black'
                onClick={() => handleMenuCollapse(false)}
              >
                <MenuIcon />
              </IconButton>
            )}
            <h1>{t('DEVICES', 'Devices')}</h1>
          </HeaderTitleContainer>
          <ActionsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={() => handleOpenSideBar()}
            >
              {t('ADD_NEW_DEVICE', 'Add new device')}
            </Button>
            <SearchBar
              lazyLoad
              search={searchValue}
              onSearch={(value) => onSearch(value)}
              placeholder={t('SEARCH', 'Search')}
            />
          </ActionsGroup>
        </HeaderContainer>
        <BrandListTableWrapper>
          <BrandListTable>
            <thead>
              <tr>
                {allowColumns?.device_name && (
                  <th>{t('DEVICE_NAME', 'Device Name')}</th>
                )}
                {allowColumns?.business && (
                  <th>{t('BUSINESS', 'Business')}</th>
                )}
                <th className='allow-colums action'>
                  <ColumnAllowSettingPopover
                    allowColumns={allowColumns}
                    optionsDefault={optionsDefault}
                    handleChangeAllowColumns={handleChangeAllowColumns}
                    title={t('DISPLAYED_DATA_THE_ORDER', 'Displayed data the order')}
                  />
                </th>
              </tr>
            </thead>
            {deviceListState.loading ? (
              [...Array(8).keys()].map(i => (
                <BrandBody key={i}>
                  <tr>
                    {allowColumns?.device_name && (
                      <td>
                        <InfoBlock>
                          <p><Skeleton width={80} height={20} /></p>
                        </InfoBlock>
                      </td>
                    )}
                    {allowColumns?.business && (
                      <td>
                        <BrandGeneralInfo>
                          <WrapperImage isSkeleton={deviceListState?.loading}>
                            <Skeleton width={32} height={32} />
                          </WrapperImage>
                          <InfoBlock>
                            <p><Skeleton width={80} height={20} /></p>
                          </InfoBlock>
                        </BrandGeneralInfo>
                      </td>
                    )}
                    <td />
                  </tr>
                </BrandBody>
              ))
            ) : (
              deviceList.map(device => (
                <BrandBody
                  key={device.id}
                  active={device.id === selectedDevice?.id}
                  onClick={e => handleClickBrand(e, device.id)}
                >
                  <tr>
                    {allowColumns?.device_name && (
                      <td>
                        <InfoBlock>
                          <p>{device?.name}</p>
                        </InfoBlock>
                      </td>
                    )}
                    {allowColumns?.business && (
                      <td>
                        <BrandGeneralInfo>
                          <WrapperImage>
                            <Image bgimage={optimizeImage(device?.business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                          </WrapperImage>
                          <InfoBlock>
                            <p>{device?.business?.name}</p>
                            <span>{device?.business?.address}</span>
                          </InfoBlock>
                        </BrandGeneralInfo>
                      </td>
                    )}
                    <td />
                  </tr>
                </BrandBody>
              ))
            )}
          </BrandListTable>
        </BrandListTableWrapper>
        <BrandListBottomContainer>
          <LinkButton onClick={() => handleOpenSideBar()}>{t('ADD_NEW_DEVICE', 'Add new device')}</LinkButton>
        </BrandListBottomContainer>
        {isOpen && (
          <SideBar
            sidebarId='deviceDetails'
            defaultSideBarWidth={500}
            open={isOpen}
            onClose={() => handleCloseSidebar()}
          >
            <BusinessDeviceDetail
              selectedDevice={selectedDevice}
              devices={deviceListState?.devices}
              handleUpdateDeviceList={handleUpdateDeviceList}
              onClose={() => setIsOpen(false)}
            />
          </SideBar>
        )}
      </BrandListingContainer>
      <Alert
        title={t('TRANSLATIONS', 'Translations')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const BusinessDeviceListing = (props) => {
  const businessDeviceListingProps = {
    ...props,
    UIComponent: BusinessDeviceListingUI
  }
  return <BusinessDeviceListingController {...businessDeviceListingProps} />
}
