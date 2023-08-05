import React from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'
import {
  Container,
  PriceLevelContainer,
  PriceLevelList,
  PriceLevelItem
} from './styles'

export const OrderTypePriceLevel = (props) => {
  const { formState, changeFormState } = props

  const [{ configs }] = useConfig()
  const [, t] = useLanguage()

  const priceSymbol = configs?.format_number_currency?.value?.trim()

  const priceList = [
    { key: '1', value: `${priceSymbol}` },
    { key: '2', value: `${Array(2).fill(priceSymbol).join('')}` },
    { key: '3', value: `${Array(3).fill(priceSymbol).join('')}` },
    { key: '4', value: `${Array(4).fill(priceSymbol).join('')}` },
    { key: '5', value: `${Array(5).fill(priceSymbol).join('')}` }
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
