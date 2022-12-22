import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import {
  Container,
  PriceLevelContainer,
  PriceLevelList,
  PriceLevelItem
} from './styles'

export const OrderTypePriceLevel = (props) => {
  const { formState, changeFormState } = props

  const [, t] = useLanguage()

  const priceList = [
    { key: '1', value: '$' },
    { key: '2', value: '$$' },
    { key: '3', value: '$$$' },
    { key: '4', value: '$$$$' },
    { key: '5', value: '$$$$$' }
  ]

  return (
    <Container>
      <PriceLevelContainer>
        <h2>{t('PRICE_LEVEL', 'Price level')}</h2>
        <PriceLevelList>
          {priceList.map((item, i) => (
            <PriceLevelItem
              key={i}
              onClick={() => changeFormState({ price_level: item.key })}
              active={formState?.changes?.price_level === item.key}
            >
              {(formState?.changes?.price_level === item.key) ? <RecordCircleFill /> : <Circle />}
              <span>{item.value}</span>
            </PriceLevelItem>
          ))}
        </PriceLevelList>
      </PriceLevelContainer>
    </Container>
  )
}
