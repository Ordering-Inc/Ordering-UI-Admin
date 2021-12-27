import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useUtils
} from 'ordering-components-admin'
import { BusinessSelectHeader } from '../BusinessSelectHeader'
import { ChevronDown } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Button } from '../../styles'
import { SelectBusinessCategories } from '../SelectBusinessCategories'

import {
  Container,
  BusinessSelectorContainer,
  SelectedBusinessWrapper,
  Label,
  WrapperImage,
  Image,
  NoSelectedBusiness
} from './styles'

export const EnterprisePromotionSpecficCategory = (props) => {
  const {
    handleChangeItem,
    onClickDone,
    selectedCategoryIds,
    setSelectedCategoryIds
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
    const filteredCategories = []
    selectedCategoryIds.forEach(id => {
      filteredCategories.push({ id: id, is_condition: true })
    })
    handleChangeItem({ categories: filteredCategories })
  }, [selectedCategoryIds])

  return (
    <Container>
      <h1>{t('CATEGORY_SPECIFIC', 'Category specific')}</h1>
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
      {selectedBusiness ? (
        <SelectBusinessCategories
          slug={selectedBusiness.slug}
          selectedCategoryIds={selectedCategoryIds}
          setSelectedCategoryIds={setSelectedCategoryIds}
        />
      ) : (
        <NoSelectedBusiness>
          {t('SELECT_BUSINESS_BEFORE_CATEGORY', 'Please select a business before selecting your cateogries.')}
        </NoSelectedBusiness>
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
