import React, { useEffect, useState } from 'react'
import { SearchBar } from '../SearchBar'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { BusinessBrandBUSIDetail as BusinessBrandBUSIDetailController } from './naked'
import { Checkbox } from '../../styles'
import { useTheme } from 'styled-components'
import {
  BrandBUSIDetailContainer,
  SearchWrapper,
  BusinessListWrapper,
  BusinessItemContainer,
  WrapperImage,
  Image,
  BusinessName,
  NoSelectedBrand
} from './styles'
import Skeleton from 'react-loading-skeleton'

const BusinessBrandBUSIDetailUI = (props) => {
  const {
    searchValue,
    onSearch,
    businessList,
    brand,
    handleChangeCheckBox
  } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    if (businessList?.businesses?.length > 0) {
      let _businesses = []
      if (searchValue) {
        _businesses = businessList?.businesses?.filter(business => (business.name?.toLowerCase().includes(searchValue.toLowerCase())))
      } else {
        _businesses = [...businessList?.businesses]
      }
      setBusinesses(_businesses)
    }
  }, [businessList?.businesses, searchValue])

  return (
    <BrandBUSIDetailContainer>
      <SearchWrapper>
        <SearchBar
          search={searchValue}
          isCustomLayout
          onSearch={(value) => onSearch(value)}
          placeholder={t('SEARCH', 'Search')}
        />
      </SearchWrapper>
      {
        brand ? (
          businessList?.loading ? (
            <BusinessListWrapper>
              {
                [...Array(5).keys()].map(i => (
                  <BusinessItemContainer key={i}>
                    <Skeleton width={16} height={16} />
                    <label>
                      <WrapperImage>
                        <Skeleton style={{ height: '100%' }} />
                      </WrapperImage>
                      <BusinessName>
                        <Skeleton width={100} />
                      </BusinessName>
                    </label>
                  </BusinessItemContainer>
                ))
              }
            </BusinessListWrapper>
          ) : (
            <BusinessListWrapper>
              {
                businesses.length > 0 && businesses.map((business, i) => (
                  <BusinessItemContainer key={i}>
                    <Checkbox
                      id={business?.id}
                      defaultChecked={business?.franchise_id === brand?.id}
                      onClick={(e) => handleChangeCheckBox(e, business.id, brand?.id)}
                    />
                    <label htmlFor={business?.id}>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo)} />
                      </WrapperImage>
                      <BusinessName>{business?.name}</BusinessName>
                    </label>
                  </BusinessItemContainer>
                ))
              }
            </BusinessListWrapper>
          )
        ) : (
          <NoSelectedBrand>{t('NO_SELECTED_BRAND', 'There is no selected brand')}</NoSelectedBrand>
        )
      }
    </BrandBUSIDetailContainer>
  )
}

export const BusinessBrandBUSIDetail = (props) => {
  const businessBrandBUSIDetailProps = {
    ...props,
    UIComponent: BusinessBrandBUSIDetailUI,
    propsToFetch: ['id', 'name', 'logo', 'franchise_id']
  }
  return <BusinessBrandBUSIDetailController {...businessBrandBUSIDetailProps} />
}
