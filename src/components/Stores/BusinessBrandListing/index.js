import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useLanguage,
  useUtils,
  BusinessBrandListing as BusinessBrandListingController
} from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { ThreeDots, List as MenuIcon, ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { Button, IconButton, Switch, DefaultSelect, LinkButton } from '../../../styles'
import { useTheme } from 'styled-components'
import { Alert, SearchBar, SideBar } from '../../Shared'
import { BusinessBrandGENDetail } from '../BusinessBrandGENDetail'
import { BusinessBrandBUSIDetail } from '../BusinessBrandBUSIDetail'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

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
  Tab,
  RightHeader
} from './styles'

const BusinessBrandListingUI = (props) => {
  const {
    searchValue,
    onSearch,
    brandListState,
    handleChangeState,
    brandFormState,
    handleDeleteBrand,
    openDetail,
    setOpenDetail
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [brandList, setBrandList] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedType, setSelectedType] = useState('general')
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [isExpand, setIsExpand] = useState(false)

  const moreOptions = [
    { value: 0, content: t('DELETE', 'Delete') }
  ]

  const handleCloseSidebar = () => {
    setOpenDetail(false)
    setSelectedBrand(null)
    removeQueryToUrl(['id', 'tab'])
  }

  const handleOpenSideBar = (id) => {
    setSelectedType('general')
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

  const handleClickBrand = (e, brandId, isInitialRender) => {
    const isInvalid = e?.target?.closest('.brand_enable_control')
    if (isInvalid) return
    handleOpenSideBar(brandId)
    if (!isInitialRender) {
      addQueryToUrl({ id: brandId })
    }
  }

  const expandSideBar = () => {
    const element = document.getElementById('brand-details')
    if (!element) return
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (brandListState?.brands?.length > 0) {
      let brands = []
      if (searchValue) {
        brands = brandListState?.brands?.filter(brand => (brand.name?.toLowerCase().includes(searchValue?.toLowerCase())))
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

  useEffect(() => {
    if (!brandListState?.brands?.length) return
    const id = query.get('id')
    if (id) {
      handleClickBrand(null, Number(id), true)
    }
  }, [brandListState?.brands?.length])

  const handleTabClick = (tab, isInitialRender) => {
    setSelectedType(tab)
    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    if (!selectedBrand) return
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(selectedType)
    }
  }, [selectedBrand])

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
              onClick={() => handleOpenSideBar()}
            >
              {t('ADD_BRAND', 'Add brand')}
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
                  onClick={e => handleClickBrand(e, brand.id)}
                >
                  <tr>
                    <td>
                      <BrandGeneralInfo>
                        <WrapperImage>
                          <Image bgimage={optimizeImage(brand?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                        </WrapperImage>
                        <InfoBlock>
                          <p>{brand?.name}</p>
                        </InfoBlock>
                      </BrandGeneralInfo>
                    </td>
                    <td>
                      <ActionsContainer>
                        <EnableWrapper className='brand_enable_control'>
                          <span>{t('ENABLE', 'Enable')}</span>
                          <Switch
                            defaultChecked={brand?.enabled}
                            onChange={(enabled) => handleChangeState(brand.id, 'enabled', enabled)}
                          />
                        </EnableWrapper>
                      </ActionsContainer>
                    </td>
                  </tr>
                </BrandBody>
              ))
            )}
          </BrandListTable>
        </BrandListTableWrapper>
        <BrandListBottomContainer>
          <LinkButton onClick={() => handleOpenSideBar()}>{t('ADD_NEW_BRAND', 'Add new brand')}</LinkButton>
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
                <div>
                  {
                    selectedBrand?.name && (
                      <span>{selectedBrand?.name}</span>
                    )
                  }
                  {!selectedBrand && (
                    <span>{t('ADD_NEW_BRAND', 'Add new brand')}</span>
                  )}
                  {selectedBrand && (
                    <Switch
                      defaultChecked={selectedBrand?.enabled || false}
                      onChange={(enabled) => handleChangeState(selectedBrand?.id, 'enabled', enabled)}
                    />
                  )}
                </div>
                <RightHeader>
                  <IconButton
                    color='black'
                    onClick={expandSideBar}
                  >
                    {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
                  </IconButton>
                  {selectedBrand && (
                    <ActionSelectorWrapper>
                      <DefaultSelect
                        placeholder={<ThreeDots />}
                        options={moreOptions}
                        onChange={() => handleDeleteBrand(selectedBrand.id)}
                      />
                    </ActionSelectorWrapper>
                  )}
                </RightHeader>
              </DetailHeder>
              <TabContainer>
                <Tab
                  active={selectedType === 'general'}
                  onClick={() => handleTabClick('general')}
                >
                  {t('GENERAL', 'General')}
                </Tab>
                {selectedBrand && (
                  <Tab
                    active={selectedType === 'businesses'}
                    onClick={() => handleTabClick('businesses')}
                  >
                    {t('BUSINESSES', 'Businesses')}
                  </Tab>
                )}
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
