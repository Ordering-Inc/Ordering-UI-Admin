import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { EnterprisePromotionDetails as EnterprisePromotionDetailsController } from './naked'
import { Switch } from '../../styles'
import { DragScroll } from '../DragScroll'
import { EnterprisePromotionGeneralDetails } from '../EnterprisePromotionGeneralDetails'
import { EnterprisePromotionRules } from '../EnterprisePromotionRules'

import {
  DetailsContainer,
  Header,
  TabsContainer,
  Tab
} from './styles'

const EnterprisePromotionDetailsUI = (props) => {
  const {
    promotionState,
    formState,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const [selectedOption, setSelectedOption] = useState('general')

  const tabOptions = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'rules', content: t('RULES', 'Rules') },
    { key: 'Business', content: t('CONTROL_PANEL_BUSINESS', 'Business') },
    { key: 'custom_fields', content: t('CUSTOM_FEILDS', 'Custom fields') }
  ]
  return (
    <DetailsContainer>
      <Header>
        <h1>{formState.changes?.name ?? promotionState?.promotion?.name}</h1>
        <Switch
          defaultChecked={
            typeof formState.changes?.enabled !== 'undefined'
              ? formState.changes?.enabled
              : promotionState.promotion?.enabled
          }
          onChange={val => handleChangeItem({ enabled: val })}
        />
      </Header>
      <TabsContainer>
        <DragScroll>
          {tabOptions.map(option => (
            <Tab
              key={option.key}
              active={selectedOption === option.key}
              onClick={() => setSelectedOption(option.key)}
            >
              {option.content}
            </Tab>
          ))}
        </DragScroll>
      </TabsContainer>

      {selectedOption === 'general' && (
        <EnterprisePromotionGeneralDetails
          {...props}
        />
      )}
      {selectedOption === 'rules' && (
        <EnterprisePromotionRules
          {...props}
        />
      )}
    </DetailsContainer>
  )
}

export const EnterprisePromotionDetails = (props) => {
  const promotionProps = {
    ...props,
    UIComponent: EnterprisePromotionDetailsUI
  }
  return <EnterprisePromotionDetailsController {...promotionProps} />
}
