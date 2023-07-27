import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { BusinessSyncBasic } from '../BusinessSyncBasic'
import { BusinessSyncItsaCheckmate } from '../BusinessSyncItsaCheckmate'
import { BusinessSyncStore } from '../BusinessSyncStore'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  Header,
  Tabs,
  Tab
} from './styles'

export const BusinessSync = (props) => {
  const { handleParentSidebarMove } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [selectedOption, setSelectedOption] = useState('deliverect')

  const syncOptions = [
    { key: 'deliverect', name: t('DELIVERECT', 'Deliverect') },
    { key: 'itsacheckmate', name: t('ITSACHECKMATE', 'ItsaCheckmate') }
  ]

  const handleChangeOption = (key, isInitialRender) => {
    handleParentSidebarMove(0)
    setSelectedOption(key)
    if (!isInitialRender) {
      addQueryToUrl({ tab: key })
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleChangeOption(tab, true)
    } else {
      handleChangeOption(selectedOption)
    }
  }, [])

  return (
    <Container>
      <Header>
        <h2>{t('SYNC_WITH', 'Sync with')}</h2>
      </Header>
      <Tabs>
        {syncOptions.map(option => (
          <Tab
            key={option.key}
            active={selectedOption === option.key}
            onClick={() => handleChangeOption(option.key)}
          >
            {option.name}
          </Tab>
        ))}
      </Tabs>
      {selectedOption === 'deliverect' && (
        <BusinessSyncBasic />
      )}
      {selectedOption === 'itsacheckmate' && (
        <BusinessSyncItsaCheckmate />
      )}
      {selectedOption === 'synced_store' && (
        <BusinessSyncStore
          handleParentSidebarMove={handleParentSidebarMove}
        />
      )}
    </Container>
  )
}
