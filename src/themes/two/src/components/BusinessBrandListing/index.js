import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import { BusinessBrandListing as BusinessBrandListingController } from './naked'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Button, IconButton } from '../../styles/Buttons'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { Switch } from '../../styles/Switch'
import { SearchBar } from '../SearchBar'
import { Alert } from '../Confirm'
import { SideBar } from '../SideBar'
import { BusinessBrandGENDetail } from '../BusinessBrandGENDetail'
import { BusinessBrandBUSIDetail } from '../BusinessBrandBUSIDetail'
import {
  BrandListingContainer,
  HeaderContainer,
  ActionsGroup,
  HeaderTitleContainer,
  BrandListTable,
  BrandBody,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  WrapperImage,
  Image,
  BrandGeneralInfo,
  InfoBlock,
  BrandListTableWrapper,
  BrandListBottomContainer,
  BrandDetailContainer,
  DetailHeder,
  TabContainer,
  Tab
} from './styles'

const BusinessBrandListingUI = (props) => {
  const {
    searchValue,
    onSearch,
    brandListState,
    handleChangeState,
    brandFormState,
    handleDeleteBrand
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [brandList, setBrandList] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [openDetail, setOpenDetail] = useState(false)
  const [selectedType, setSelectedType] = useState('general')
  const [selectedBrand, setSelectedBrand] = useState(null)

  const handleCloseSidebar = () => {
    setOpenDetail(false)
  }

  const handleOpenSideBar = (id) => {
    if (id) {
      const brand = brandListState?.brands.find(item => item.id === id)
      setSelectedBrand(brand)
    } else {
      setSelectedBrand(null)
    }
    setOpenDetail(true)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (brandListState?.brands?.length > 0) {
      let brands = []
      if (searchValue) {
        brands = brandListState?.brands?.filter(brand => (brand.name?.toLowerCase().includes(searchValue.toLowerCase())))
      } else {
        brands = [...brandListState?.brands]
      }
      setBrandList(brands)
    }
  }, [brandListState, searchValue])

  useEffect(() => {
    if (brandList?.length > 0 && selectedBrand) {
      const brand = brandListState?.brands?.find(item => item.id === selectedBrand?.id)
      setSelectedBrand(brand)
    }
  }, [brandList])

  useEffect(() => {
    if (brandFormState?.result?.error) {
      setAlertState({
        open: true,
        content: brandFormState?.result?.result
      })
    }
  }, [brandFormState?.result])

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
            <h1>{t('BRAND_MANAGER', 'Brand manager')}</h1>
          </HeaderTitleContainer>
          <ActionsGroup>
            <Button
              borderRadius='8px'
              color='lightPrimary'
              onClick={handleOpenSideBar}
            >
              {t('ADD_Brand', 'Add brand')}
            </Button>
            <SearchBar
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
                <th>{t('NAME', 'Name')}</th>
                <th>{t('ACTIONS', 'Actions')}</th>
              </tr>
            </thead>
            {brandListState.loading ? (
              [...Array(8).keys()].map(i => (
                <BrandBody key={i}>
                  <tr>
                    <td>
                      <BrandGeneralInfo>
                        <WrapperImage isSkeleton={brandListState?.loading}>
                          <Skeleton width={32} height={32} />
                        </WrapperImage>
                        <InfoBlock>
                          <p><Skeleton width={80} height={20} /></p>
                        </InfoBlock>
                      </BrandGeneralInfo>
                    </td>
                    <td>
                      <ActionsContainer>
                        <EnableWrapper>
                          <Skeleton width={50} height={20} />
                        </EnableWrapper>
                        <ActionSelectorWrapper>
                          <Skeleton width={15} height={20} />
                        </ActionSelectorWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </BrandBody>
              ))
            ) : (
              brandList.map(brand => (
                <BrandBody
                  key={brand.id}
                  active={brand.id === selectedBrand?.id}
                >
                  <tr>
                    <td>
                      <BrandGeneralInfo>
                        <WrapperImage>
                          <Image bgimage={optimizeImage(brand?.logo || theme.images?.dummies?.businessLogo)} />
                        </WrapperImage>
                        <InfoBlock>
                          <p>{brand?.name}</p>
                        </InfoBlock>
                      </BrandGeneralInfo>
                    </td>
                    <td>
                      <ActionsContainer>
                        <EnableWrapper calssName='page-enabled'>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            defaultChecked={brand?.enabled}
                            onChange={(enabled) => handleChangeState(brand.id, 'enabled', enabled)}
                          />
                        </EnableWrapper>
                        <ActionSelectorWrapper className='page-actions'>
                          <DropdownButton
                            menuAlign={theme?.rtl ? 'left' : 'right'}
                            title={<FiMoreVertical />}
                            id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                          >
                            <Dropdown.Item
                              onClick={() => handleOpenSideBar(brand.id)}
                            >
                              {t('EDIT', 'Edit')}
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleDeleteBrand(brand.id)}
                            >
                              {t('DELETE', 'Delete')}
                            </Dropdown.Item>
                          </DropdownButton>
                        </ActionSelectorWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </BrandBody>
              ))
            )}
          </BrandListTable>
        </BrandListTableWrapper>
        <BrandListBottomContainer>
          <span onClick={handleOpenSideBar}>{t('ADD_NEW_BRAND', 'Add new brand')}</span>
        </BrandListBottomContainer>
        {openDetail && (
          <SideBar
            sidebarId='brand-details'
            defaultSideBarWidth={500}
            open={openDetail}
            onClose={() => handleCloseSidebar()}
          >
            <BrandDetailContainer>
              <DetailHeder>
                {
                  selectedBrand?.name && (
                    <span>{selectedBrand?.name}</span>
                  )
                }
                <Switch
                  defaultChecked={selectedBrand?.enabled || false}
                  onChange={(enabled) => handleChangeState(selectedBrand?.id, 'enabled', enabled)}
                />
              </DetailHeder>
              <TabContainer>
                <Tab
                  active={selectedType === 'general'}
                  onClick={() => setSelectedType('general')}
                >
                  {t('GENERAL', 'General')}
                </Tab>
                <Tab
                  active={selectedType === 'businesses'}
                  onClick={() => setSelectedType('businesses')}
                >
                  {t('BUSINESSES', 'Businesses')}
                </Tab>
              </TabContainer>
              {
                selectedType === 'general' && (
                  <BusinessBrandGENDetail
                    {...props}
                    brand={selectedBrand}
                    onSelectedBrand={setSelectedBrand}
                  />
                )
              }
              {
                selectedType === 'businesses' && (
                  <BusinessBrandBUSIDetail
                    {...props}
                    brand={selectedBrand}
                  />
                )
              }
            </BrandDetailContainer>
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

export const BusinessBrandListing = (props) => {
  const businessBrandListingProps = {
    ...props,
    UIComponent: BusinessBrandListingUI
  }
  return <BusinessBrandListingController {...businessBrandListingProps} />
}
