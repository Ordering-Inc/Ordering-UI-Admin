import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessSyncBasic } from '../BusinessSyncBasic'
import { BusinessSyncItsaCheckmate } from '../BusinessSyncItsaCheckmate'
import { BusinessSyncStore } from '../BusinessSyncStore'

import {
  Container,
  Header,
  Tabs,
  Tab
} from './styles'

export const BusinessSync = (props) => {
  const { handleParentSidebarMove } = props

  const [, t] = useLanguage()
  const [selectedOption, setSelectedOption] = useState('deliverect')

  const syncOptions = [
    { key: 'deliverect', name: t('DELIVERECT', 'Deliverect') },
    { key: 'itsacheckmate', name: t('ITSACHECKMATE', 'ItsaCheckmate') }
  ]

  const handleChangeOption = (key) => {
    handleParentSidebarMove(0)
    setSelectedOption(key)
  }

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
