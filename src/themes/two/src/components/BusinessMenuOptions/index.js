import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import MdcShareVariantOutline from '@meronex/icons/mdc/MdcShareVariantOutline'
import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { BusinessSchedule } from '../BusinessSchedule'

import {
  Container,
  Header,
  ActionBlock,
  TabContainer,
  TabInnerContainer,
  Tab,
  BusinessMenuBasicContainer,
  FieldName,
  OrderType,
  BusinessScheduleWrapper,
  CategoryProductsContainer
} from './styles'
import { AutoScroll } from '../AutoScroll'

export const BusinessMenuOptions = (props) => {
  const {
    business,
    onClose,
    handleUpdateBusinessState
  } = props
  const [, t] = useLanguage()
  const [selectedMenuOption, setSelectedMenuOption] = useState('basic')
  const orderTypes = [
    { value: 1, content: t('DELIVERY', 'Delivery') },
    { value: 2, content: t('PICKUP', 'Pickup') },
    { value: 3, content: t('EAT_IN', 'Eat in') },
    { value: 4, content: t('CURBSIDE', 'Curbside') },
    { value: 5, content: t('DRIVE_THRU', 'Drive thru') }
  ]
  return (
    <Container>
      <Header>
        <h1>{t('MENU_SETTINGS', 'Menu settings')}</h1>
        <ActionBlock>
          <Button
            color='secundary'
            borderRadius='5px'
          >
            <MdcShareVariantOutline />
          </Button>
          <MdcClose
            onClick={() => onClose()}
          />
        </ActionBlock>
      </Header>
      <TabContainer>
        <TabInnerContainer>
          <AutoScroll innerScroll scrollId='menu_options'>
            <Tab
              active={selectedMenuOption === 'basic'}
              onClick={() => setSelectedMenuOption('basic')}
            >
              {t('BASIC', 'Basic')}
            </Tab>
            <Tab
              active={selectedMenuOption === 'enterprise'}
              onClick={() => setSelectedMenuOption('enterprise')}
            >
              {t('ENTERPRISE', 'Enterprise')}
            </Tab>
          </AutoScroll>
        </TabInnerContainer>
      </TabContainer>

      {selectedMenuOption === 'basic' && (
        <BusinessMenuBasicContainer>
          <FieldName>{t('BUSINESS_NAME', 'Business name')}</FieldName>
          <Input
            name='name'
            placeholder={t('NAME', 'Name')}
          />
          <FieldName isBorderBottom>{t('DELIVERY_TYPE', 'Delivery type')}</FieldName>
          {orderTypes.map(orderType => (
            <OrderType
              key={orderType.value}
              active
            >
              <RiCheckboxFill />
              <span>{orderType.content}</span>
            </OrderType>
          ))}
          <BusinessScheduleWrapper>
            <BusinessSchedule
              business={business}
              handleSuccessBusinessScheduleUpdate={handleUpdateBusinessState}
            />
          </BusinessScheduleWrapper>
          <FieldName>{t('COMMENTS', 'Comments')}</FieldName>
          <TextArea
            rows={4}
            name='comment'
            placeholder={t('WRITE_HERE', 'Write here')}
          />
          <FieldName isBorderBottom>{t('PRODUCTS', 'Products')}</FieldName>
          {business?.categories.map(category => (
            <CategoryProductsContainer>

            </CategoryProductsContainer>
          ))}
        </BusinessMenuBasicContainer>
      )}
    </Container>
  )
}
