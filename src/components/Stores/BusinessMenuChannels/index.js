import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Alert, SearchBar } from '../../Shared'

import {
  TabOption,
  TabOptionName,
  BusinessMenuChannelsContainer,
  SearchBarWrapper,
  ButtonGroup
} from './styles'

export const BusinessMenuChannels = (props) => {
  const {
    formState,
    handleUpdateBusinessMenuOption,
    sitesState,
    handleChangeMenuSite,
    menu,
    handleSelectAllChannels,
    handleSelectNoneChannels
  } = props
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [searchValue, setSearchValue] = useState('')

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!formState?.result?.error) return
    setAlertState({
      open: true,
      content: formState?.result?.result
    })
  }, [formState?.result?.error])

  return (
    <>
      <BusinessMenuChannelsContainer>
        <SearchBarWrapper>
          <SearchBar
            placeholder={t('SEARCH', 'Search')}
            isCustomLayout
            search={searchValue}
            onSearch={val => setSearchValue(val)}
          />
        </SearchBarWrapper>
        <ButtonGroup>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectAllChannels()}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectNoneChannels()}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button>
        </ButtonGroup>
        {sitesState.sites?.filter(site => site?.name?.toLowerCase().includes(searchValue))?.map(site => (
          <TabOption
            key={site.id}
            onClick={() => handleChangeMenuSite(site.id)}
          >
            {
              formState?.changes?.sites?.includes(site.id) ?? menu?.sites?.find(s => s?.id === site?.id) ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )
            }
            <TabOptionName>{site.name}</TabOptionName>
          </TabOption>
        ))}
        <Button
          borderRadius='5px'
          color='primary'
          disabled={formState.loading || Object.keys(formState).length === 0}
          onClick={() => handleUpdateBusinessMenuOption()}
        >
          {formState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
        </Button>
      </BusinessMenuChannelsContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
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
