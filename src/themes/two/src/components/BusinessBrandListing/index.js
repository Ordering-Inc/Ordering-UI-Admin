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
  BrandListBottomContainer
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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleEditPage = () => {
    console.log('edit')
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
              // onClick={() => handleEditProduct()}
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
                  // onClick={e => onClickPage(e, page.id)}
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
                              onClick={() => handleEditPage(brand.id)}
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
          <span>{t('ADD_NEW_BRAND', 'Add new brand')}</span>
        </BrandListBottomContainer>
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
