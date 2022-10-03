import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'
import { SeoOptions } from '../SeoOptions'
import { ProductDetatilsInformation } from '../ProductDetatilsInformation'
import { ProductDetailsAdvanced } from '../ProductDetailsAdvanced'
import { ProductTagsList } from '../ProductTagsList'

import {
  Container,
  TabsConatiner,
  Tab
} from './styles'

export const ProductMainDetails = (props) => {
  const {
    product,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleChangeFormState,
    handleChangeRibbon,
    handleUpdateClick,
    isExtendExtraOpen,
    setIsExtendExtraOpen,
    business,
    handleSuccessUpdate,
    setFormTaxState,
    formTaxState,
    taxes,
    setTaxes,
    fees,
    setFees,
    cleanFormState
  } = props
  const [, t] = useLanguage()

  const [selectedOption, setSelectedOption] = useState('information')
  const listOptions = [
    { key: 'information', content: t('INFORMATION', 'Information') },
    { key: 'advanced', content: t('ADVANCED', 'Advanced') },
    { key: 'labels', content: t('LABELS', 'Labels') },
    { key: 'seo_options', content: t('SEO_OPTIONS', 'SEO options') }
  ]
  const handleSelectOption = (tab) => {
    setSelectedOption(tab)
    setIsExtendExtraOpen(false)
  }

  return (
    <Container maxLimit={isExtendExtraOpen}>
      <h1>{t('PRODUCT_DETAILS', 'Product details')}</h1>
      <TabsConatiner>
        <DragScroll>
          {listOptions.map(option => (
            <Tab
              key={option.key}
              active={selectedOption === option.key}
              onClick={() => handleSelectOption(option.key)}
            >
              {option.content}
            </Tab>
          ))}
        </DragScroll>
      </TabsConatiner>
      {selectedOption === 'information' && (
        <ProductDetatilsInformation
          product={product}
          formState={formState}
          handlechangeImage={handlechangeImage}
          handleChangeRibbon={handleChangeRibbon}
          handleChangeInput={handleChangeInput}
          handleChangeFormState={handleChangeFormState}
          handleButtonUpdateClick={handleUpdateClick}
        />
      )}
      {selectedOption === 'advanced' && (
        <ProductDetailsAdvanced
          product={product}
          business={business}
          handleSuccessUpdate={handleSuccessUpdate}
          setFormTaxState={setFormTaxState}
          formTaxState={formTaxState}
          taxes={taxes}
          setTaxes={setTaxes}
          fees={fees}
          setFees={setFees}
        />
      )}
      {selectedOption === 'labels' && (
        <ProductTagsList
          tags={product?.tags || []}
          businessId={business.id}
          product={product}
          setIsExtendExtraOpen={setIsExtendExtraOpen}
          handleSuccessProductUpdate={handleSuccessUpdate}
        />
      )}
      {selectedOption === 'seo_options' && (
        <SeoOptions
          data={product}
          formState={formState}
          setFormState={handleChangeFormState}
          handleUpdateClick={handleUpdateClick}
          handlechangeImageProductCategory={handlechangeImage}
          handleProductCategoryChangeInput={handleChangeInput}
          isProductSeo
          cleanFormState={cleanFormState}
        />
      )}
    </Container>
  )
}
