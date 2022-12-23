import React from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import { SearchBar, NotFoundSource } from '../../Shared'
import { Button } from '../../../styles'
import {
  BusinessListWrapper,
  BusinessItemContainer,
  WrapperImage,
  BusinessName,
  Image,
  SearchBarWrapper,
  RadioButton
} from './styles'

export const BusinessLink = (props) => {
  const {
    searchValue,
    onSearch,
    businessList,
    handleSaveLink,
    selectedBusinessId,
    setSelectedBusinessId
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  return (
    <>
      <SearchBarWrapper>
        <SearchBar
          search={searchValue}
          isCustomLayout
          lazyLoad
          onSearch={(value) => onSearch(value)}
          placeholder={t('SEARCH', 'Search')}
        />
      </SearchBarWrapper>
      {businessList.loading ? (
        <BusinessListWrapper>
          {[...Array(10).keys()].map(i => (
            <BusinessItemContainer key={i}>
              <Skeleton width={16} height={16} />
              <WrapperImage>
                <Skeleton className='d-flex h-100' />
              </WrapperImage>
              <BusinessName>
                <Skeleton width={100} />
              </BusinessName>
            </BusinessItemContainer>
          ))}
        </BusinessListWrapper>
      ) : (
        <BusinessListWrapper>
          {businessList.businesses.length > 0 ? businessList.businesses.map(business => (
            <BusinessItemContainer key={business.id}>
              <RadioButton
                onClick={() => setSelectedBusinessId(business.id)}
              >
                {selectedBusinessId === business.id ? (
                  <RecordCircleFill color={theme.colors.primary} />
                ) : (
                  <Circle color={theme.colors.secundaryLight} />
                )}
              </RadioButton>
              <WrapperImage>
                <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_40,c_limit')} />
              </WrapperImage>
              <BusinessName>{business?.name}</BusinessName>
            </BusinessItemContainer>
          )) : (
            <NotFoundSource />
          )}
        </BusinessListWrapper>
      )}
      <Button
        borderRadius='8px'
        color='primary'
        disabled={businessList.loading || !selectedBusinessId}
        onClick={handleSaveLink}
      >
        {t('SAVE', 'Save')}
      </Button>
    </>
  )
}
