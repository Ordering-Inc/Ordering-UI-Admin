import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'
import { Switch } from '../../../styles'
import { useTheme } from 'styled-components'

import {
  RecoveryActionDetailContainer,
  DetailsHeader,
  LeftHeader,
  RightHeader,
  BusinessName,
  ActionSelectorWrapper,
  Tabs,
  Tab
} from './styles'
import { RecoveryGeneral } from '../RecoveryGeneral'

export const RecoveryActionDetail = () => {
  const theme = useTheme()
  const [, t] = useLanguage()

  const [selectedOption, setSelectedOption] = useState('general')

  const recoveryOptionList = [
    { key: 'general', name: t('GENERAL', 'General') },
    { key: 'notifications', name: t('NOTIFICATIONS', 'Notifications') }
  ]

  return (
    <RecoveryActionDetailContainer>
      <DetailsHeader>
        <LeftHeader>
          <BusinessName>
            Recovery action name
          </BusinessName>
          <Switch
            defaultChecked={false}
            onChange={(value) => console.log(value)}
          />
        </LeftHeader>
        <RightHeader>
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item>
                {t('CUSTOM_FIELDS', 'Custom fields')}
              </Dropdown.Item>
              <Dropdown.Item>
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </RightHeader>
      </DetailsHeader>
      <Tabs>
        {recoveryOptionList.map(option => (
          <Tab
            key={option.key}
            active={selectedOption === option.key}
            onClick={() => setSelectedOption(option.key)}
          >
            {option.name}
          </Tab>
        ))}
      </Tabs>
      {selectedOption === 'general' && <RecoveryGeneral />}
    </RecoveryActionDetailContainer>
  )
}
