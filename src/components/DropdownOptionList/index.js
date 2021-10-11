import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { CitySelector } from '../CitySelector'
import { CountrySelector } from '../CountrySelector'
import { Switch } from '../../styles/Switch'
import { Pagination } from '../Pagination'
import { SideBar } from '../SideBar'
import { ZoneDropdownDetails } from '../ZoneDropdownDetails'
import { Confirm } from '../Confirm'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'

import {
  DropdownOptionsContainer,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper,
  DropdownOptionWrapper,
  DropdownOptionName,
  CityName,
  CountryName,
  CheckboxWrapper,
  PagesBottomContainer,
  AddNewPageButton
} from './styles'

export const DropdownOptionList = (props) => {
  const {
    searchValue,
    dropdownOptionsState,
    countriesState,
    handleUpdateDropdown,
    openZoneDropdown,
    setOpenZonedropdown,
    selectedZoneDropdown,
    setSelectedZoneDropdown,
    changesState,
    handleChangesState,
    handleSaveZone,
    handleAddZone,
    handleDeleteZone,
    handleOpenZoneDropdownDetails,
    selectedZoneList,
    handleCheckboxZoneClick,
    handleAllCheckboxZoneClick
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [cities, setCities] = useState([])
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  // Change page
  const [currentPage, setCurrentPage] = useState(1)
  const [dropdownOptionsPerPage, setDropdownOptionsPerPage] = useState(10)
  // Get current cities
  const [currentDropdownOptions, setCurrentDropdownOptions] = useState([])
  const [totalPages, setTotalPages] = useState(null)

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((currentPage - 1) * dropdownOptionsPerPage + 1) / pageSize)
    setCurrentPage(expectedPage)
    setDropdownOptionsPerPage(pageSize)
  }

  useEffect(() => {
    if (dropdownOptionsState.loading) return
    let _totalPages
    let dropdownOptions = []
    if (searchValue) {
      dropdownOptions = dropdownOptionsState.options.filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase()))
    } else {
      dropdownOptions = [...dropdownOptionsState.options]
    }
    if (dropdownOptions.length > 0) {
      _totalPages = Math.ceil(dropdownOptions.length / dropdownOptionsPerPage)
    }
    const indexOfLastPost = currentPage * dropdownOptionsPerPage
    const indexOfFirstPost = indexOfLastPost - dropdownOptionsPerPage
    const _currentDropdownOptions = dropdownOptions.slice(indexOfFirstPost, indexOfLastPost)
    setTotalPages(_totalPages)
    setCurrentDropdownOptions(_currentDropdownOptions)
  }, [dropdownOptionsState, currentPage, dropdownOptionsPerPage, searchValue])

  useEffect(() => {
    if (countriesState.loading) return
    const _cities = countriesState.countries.reduce((_cities, country) => [..._cities, ...country?.cities], [])
    setCities(_cities)
  }, [countriesState])

  const handleClickZoneDropdown = (e, zone) => {
    const isInvalid = e.target.closest('.zone-checkbox') || e.target.closest('.zone-enabled') || e.target.closest('.zone-actions')
    if (isInvalid) return
    handleOpenZoneDropdownDetails(zone)
  }

  const onDeleteZone = (zoneId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ZONE', 'Are you sure to delete this zone?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteZone(zoneId)
      }
    })
  }

  return (
    <>
      <DropdownOptionsContainer>
        <DropdownOptionWrapper isHeader>
          <DropdownOptionName>
            <CheckboxWrapper
              onClick={() => handleAllCheckboxZoneClick()}
              active={!dropdownOptionsState.loading && selectedZoneList.length === dropdownOptionsState.options.length}
            >
              {!dropdownOptionsState.loading && selectedZoneList.length === dropdownOptionsState.options.length ? (
                <RiCheckboxFill />
              ) : (
                <RiCheckboxBlankLine />
              )}
            </CheckboxWrapper>
            <span>{t('ZONE', 'Zone')}</span>
          </DropdownOptionName>
          <CountryName isHeader>{t('COUNTRY', 'Country')}</CountryName>
          <CityName isHeader>{t('CITY', 'City')}</CityName>
          <ActionsContainer isHeader>{t('ACTIONS', 'Actions')}</ActionsContainer>
        </DropdownOptionWrapper>
        {dropdownOptionsState.loading ? (
          [...Array(10).keys()].map(i => (
            <DropdownOptionWrapper key={i}>
              <DropdownOptionName><Skeleton width={100} /></DropdownOptionName>
              <CountryName><Skeleton width={100} /></CountryName>
              <CityName><Skeleton width={100} /></CityName>
              <ActionsContainer><Skeleton width={100} /></ActionsContainer>
            </DropdownOptionWrapper>
          ))
        ) : (
          <>
            {currentDropdownOptions.length > 0 && (
              <>
                {currentDropdownOptions.map(dropdownOption => (
                  <DropdownOptionWrapper
                    key={dropdownOption.id}
                    active={selectedZoneDropdown?.id === dropdownOption.id}
                    onClick={e => handleClickZoneDropdown(e, dropdownOption)}
                  >
                    <DropdownOptionName>
                      <CheckboxWrapper
                        className='zone-checkbox'
                        onClick={() => handleCheckboxZoneClick(dropdownOption)}
                        active={selectedZoneList.find(_zone => _zone?.id === dropdownOption.id)}
                      >
                        {selectedZoneList.find(_zone => _zone?.id === dropdownOption.id) ? (
                          <RiCheckboxFill />
                        ) : (
                          <RiCheckboxBlankLine />
                        )}
                      </CheckboxWrapper>
                      <span>{dropdownOption?.name}</span>
                    </DropdownOptionName>
                    <CountryName>
                      <CountrySelector
                        defaultValue={parseInt(dropdownOption?.city?.country_id)}
                        countries={countriesState?.countries}
                      />
                    </CountryName>
                    <CityName>
                      <CitySelector
                        isDefault
                        defaultValue={parseInt(dropdownOption?.city_id)}
                        cities={cities}
                      />
                    </CityName>
                    <ActionsContainer>
                      <EnableWrapper className='zone-enabled'>
                        <span>{t('ENABLE', 'Enable')}</span>
                        <Switch
                          defaultChecked={dropdownOption?.enabled}
                          onChange={enabled => handleUpdateDropdown(dropdownOption.id, { enabled: enabled })}
                        />
                      </EnableWrapper>
                      <ActionSelectorWrapper className='zone-actions'>
                        <DropdownButton
                          menuAlign={theme?.rtl ? 'left' : 'right'}
                          title={<FiMoreVertical />}
                          id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                        >
                          <Dropdown.Item
                            onClick={() => handleOpenZoneDropdownDetails(dropdownOption)}
                          >
                            {t('EDIT', 'Edit')}
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => onDeleteZone(dropdownOption.id)}
                          >
                            {t('DELETE', 'Delete')}
                          </Dropdown.Item>
                        </DropdownButton>
                      </ActionSelectorWrapper>
                    </ActionsContainer>
                  </DropdownOptionWrapper>
                ))}
              </>
            )}
          </>
        )}

        {!dropdownOptionsState.loading && (
          <PagesBottomContainer>
            <AddNewPageButton
              onClick={() => handleOpenZoneDropdownDetails(null)}
            >
              {t('ADD_NEW_ZONE_DROPDOWN ', 'Add new zone dropdown')}
            </AddNewPageButton>
            {currentDropdownOptions?.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleChangePage={handleChangePage}
                defaultPageSize={dropdownOptionsPerPage}
                handleChangePageSize={handleChangePageSize}
              />
            )}
          </PagesBottomContainer>
        )}
      </DropdownOptionsContainer>

      {openZoneDropdown && (
        <SideBar
          sidebarId='city-details'
          defaultSideBarWidth={550}
          open={openZoneDropdown}
          onClose={() => {
            setSelectedZoneDropdown(null)
            setOpenZonedropdown(false)
          }}
        >
          <ZoneDropdownDetails
            zoneDropdown={selectedZoneDropdown}
            cities={cities}
            changesState={changesState}
            countries={countriesState?.countries}
            handleChangesState={handleChangesState}
            handleSaveZone={handleSaveZone}
            handleAddZone={handleAddZone}
          />
        </SideBar>
      )}

      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}
