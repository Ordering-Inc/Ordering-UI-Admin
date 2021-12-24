import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { BusinessSelectHeader } from '../BusinessSelectHeader'
import { ChevronDown } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Button } from '../../styles'
import { SelectBusinessProducts } from '../SelectBusinessProducts'

import {
  Container,
  BusinessSelectorContainer,
  SelectedBusinessWrapper,
  Label,
  WrapperImage,
  Image
} from './styles'

export const EnterprisePromotionSpecficProducts = (props) => {
  const {
    handleChangeItem,
    onClickDone,
    selectedProductsIds,
    setSelectedProductsIds
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(null)

  const changeBusinessState = (business) => {
    setShowSelectHeader(false)
    setSelectedBusiness(business)
  }

  useEffect(() => {
    const filteredProducts = []
    selectedProductsIds.forEach(id => {
      filteredProducts.push({ id: id, is_condition: true })
    })
    handleChangeItem({ products: filteredProducts })
  }, [selectedProductsIds])

  return (
    <Container>
      <h1>{t('PRODUCT_SPECIFIC', 'Product specific')}</h1>
      <Label>{t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')}</Label>
      <BusinessSelectorContainer>
        <SelectedBusinessWrapper
          onClick={() => setShowSelectHeader(!showSelectHeader)}
        >
          {
            selectedBusiness
              ? (
                <div>
                  <WrapperImage isSmall>
                    <Image bgimage={optimizeImage(selectedBusiness?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
                  </WrapperImage>
                  <span>{selectedBusiness?.name}</span>
                </div>
              )
              : <div>{t('MOBILE_BUSINESS_LIST_SELECT_RESTAURANT', 'Select Business')}</div>
          }
          <ChevronDown className={showSelectHeader ? 'rotate-arrow' : ''} />
        </SelectedBusinessWrapper>
        {showSelectHeader && (
          <BusinessSelectHeader
            isOpen={showSelectHeader}
            close={() => setShowSelectHeader(false)}
            defaultPageSize={10}
            changeBusinessState={changeBusinessState}
          />
        )}
      </BusinessSelectorContainer>
      <Label>{t('SELECT_PRODUCT', 'Select product')}</Label>
      {selectedBusiness && (
        <SelectBusinessProducts
          slug={selectedBusiness.slug}
          selectedProductsIds={selectedProductsIds}
          setSelectedProductsIds={setSelectedProductsIds}
        />
      )}

      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </Container>
  )
}
