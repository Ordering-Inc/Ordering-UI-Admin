import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessSyncBasic } from '../BusinessSyncBasic'
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
  const [selectedOption, setSelectedOption] = useState('basic')

  const syncOptions = [
    { key: 'basic', name: t('BASIC', 'Basic') },
    { key: 'synced_store', name: t('SYNCED_STORE', 'Synced store') }
  ]

  const handleChangeOption = (key) => {
    handleParentSidebarMove(0)
    setSelectedOption(key)
  }

  return (
    <Container>
      <Header>
        <h2>{t('SYNC_WITH_DELIVERECT', 'Sync with deliverect')}</h2>
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
      {selectedOption === 'basic' && (
        <BusinessSyncBasic />
      )}
      {selectedOption === 'synced_store' && (
        <BusinessSyncStore
          handleParentSidebarMove={handleParentSidebarMove}
        />
      )}
    </Container>
  )
}
