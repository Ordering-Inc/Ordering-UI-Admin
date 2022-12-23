import React from 'react'
import { useLanguage, BannerImageLink as BannerImageLinkController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { BusinessLink } from './BusinessLink'
import { ProductLink } from './ProductLink'
import {
  Container,
  HeaderContainer,
  FormController,
  SelectWrapper
} from './styles'

const BannerImageLinkUI = (props) => {
  const {
    selectedLinkType,
    setSelectedLinkType
  } = props

  const [, t] = useLanguage()
  const linkOptions = [
    { value: 'product', content: t('PRODUCT_ID', 'Product') },
    { value: 'business', content: t('BUSINESS', 'Business') }
  ]
  return (
    <Container>
      <HeaderContainer>
        <h1>{t('IMAGE_LINK', 'Image Link')}</h1>
      </HeaderContainer>
      <FormController>
        <label>{t('HOW_TO_LINK_IMAGE', 'How to link image')}</label>
        <SelectWrapper>
          <Select
            placeholder={t('SELECT_OPTION', 'Select option')}
            defaultValue={selectedLinkType}
            options={linkOptions}
            onChange={val => setSelectedLinkType(val)}
          />
        </SelectWrapper>
      </FormController>
      {selectedLinkType === 'business' && (
        <BusinessLink {...props} />
      )}
      {selectedLinkType === 'product' && (
        <ProductLink {...props} />
      )}
    </Container>
  )
}

export const BannerImageLink = (props) => {
  const linkProps = {
    ...props,
    UIComponent: BannerImageLinkUI
  }
  return <BannerImageLinkController {...linkProps} />
}
