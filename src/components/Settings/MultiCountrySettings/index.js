import React, { useEffect, useState } from 'react'
import { useLanguage, MultiCountrySettings as MultiCountrySettingsController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import BsChevronRight from '@meronex/icons/bs/BsChevronRight'
import { CountrySettingDetail } from '../CountrySettingDetail'
import { Alert, SideBar } from '../../Shared'

import {
  SitesListContainer,
  SitesWrapper,
  SiteItem
} from './styles'

const MultiCountrySettingsUI = (props) => {
  const {
    countryState,
    actionState,
    setMoveDistance,
    countryConfigState,
    handleGetContryConfigs,
    handleChangeConfig
  } = props

  const [, t] = useLanguage()
  const [selectedCountryId, setSelectedCountryId] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleOpenCountrySettingDetails = (countryId) => {
    handleGetContryConfigs(countryId)
    setSelectedCountryId(countryId)
    setMoveDistance(500)
  }

  const handleCloseDetails = () => {
    setSelectedCountryId(null)
    setMoveDistance(0)
  }

  useEffect(() => {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      })
    }
  }, [actionState.error])

  return (
    <>
      <SitesListContainer>
        <h1>{t('MULTI_COUNTRY_SETTINGS', 'Multi country settings')}</h1>
        {countryState.loading ? (
          <SitesWrapper>
            {[...Array(5).keys()].map(i => (
              <SiteItem key={i}>
                <Skeleton width={100} height={14} />
              </SiteItem>
            ))}
          </SitesWrapper>
        ) : (
          <SitesWrapper>
            {countryState.countries.map(country => (
              <SiteItem
                key={country?.id}
                active={country?.id === selectedCountryId}
                onClick={() => handleOpenCountrySettingDetails(country?.id)}
              >
                <span>{country?.name}</span>
                <BsChevronRight />
              </SiteItem>
            ))}
          </SitesWrapper>
        )}
      </SitesListContainer>
      {selectedCountryId && (
        <SideBar
          isBorderShow
          open={selectedCountryId}
          onClose={() => handleCloseDetails()}
        >
          <CountrySettingDetail
            selectedCountryId={selectedCountryId}
            countryConfigState={countryConfigState}
            handleChangeConfig={handleChangeConfig}
          />
        </SideBar>
      )}
      <Alert
        title={t('SETTINGS', 'Settings')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const MultiCountrySettings = (props) => {
  const sitesAuthSettinsProps = {
    ...props,
    UIComponent: MultiCountrySettingsUI
  }
  return <MultiCountrySettingsController {...sitesAuthSettinsProps} />
}
