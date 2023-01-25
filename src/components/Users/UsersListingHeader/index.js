import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { SearchBar } from '../../Shared'
import { List as MenuIcon, InfoCircle, Funnel } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import MdcFilterOff from '@meronex/icons/mdc/MdcFilterOff'

import {
  HeaderContainer,
  HeaderTitleContainer,
  ActionContainer,
  InfoWrapper,
  InfoContent
} from './styles'
import { UserFilterGroup } from '../UserFilterGroup'

export const UsersListingHeader = (props) => {
  const {
    isProfessionals,
    title,
    searchValue,
    onSearch,
    handleChangeMultiFilterValues,
    multiFilterValues
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [filterApplied, setFilterApplied] = useState(false)
  const [isFilterModal, setIsFilterModal] = useState(false)

  useEffect(() => {
    if (multiFilterValues) setFilterApplied(Object.keys(multiFilterValues).length > 0)
  }, [multiFilterValues])

  return (
    <>
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
          <h1>{title}</h1>
          {isProfessionals && (
            <InfoWrapper>
              <IconButton
                color='primary'
              >
                <InfoCircle />
              </IconButton>
              <InfoContent>
                {t('PROFESSIONALS_INFO', 'Create, assign and manage your professionals. Once the professional link his Google account, continue synchronizing your appointments with the professionals user using the Synchronize button inside of the account. Select the stores and configure the schedules for your services.')}
              </InfoContent>
            </InfoWrapper>
          )}
        </HeaderTitleContainer>
        <ActionContainer>
          <SearchBar
            lazyLoad
            isCustomLayout
            onSearch={onSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
          {multiFilterValues && (
            <IconButton
              color='black'
              onClick={() => setIsFilterModal(true)}
              name='filter-btn'
            >
              {filterApplied ? <Funnel /> : <MdcFilterOff />}
            </IconButton>
          )}
        </ActionContainer>
      </HeaderContainer>
      {multiFilterValues && (
        <UserFilterGroup
          handleChangeFilterValues={handleChangeMultiFilterValues}
          onClose={() => setIsFilterModal(false)}
          isFilterModal={isFilterModal}
        />
      )}
    </>
  )
}
