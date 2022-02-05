import React, { useState, useEffect } from 'react'
import { ProductDetatils as ProductDetatilsController } from 'ordering-components-admin'
import { Personalization } from '../Shared'
import { ProductSummary } from '../ProductSummary'
import { useWindowSize } from '../../hooks/useWindowSize'
import { MoreSidebarLayout } from '../MoreSidebarLayout'
import { ProductIngredient } from '../ProductIngredient'
import { ProductMetaFields } from '../ProductMetaFields'
import { ProductExtras } from '../ProductExtras'
import { ProductGallery } from '../ProductGallery'
import { ProductMainDetails } from '../ProductMainDetails'

import {
  Container
} from './styles'

const ProductDetailsUI = (props) => {
  const {
    open,
    business,
    onClose,
    productState,
    formState,
    handleUpdateBusinessState,
    setFormTaxState,
    formTaxState,
    taxes,
    setTaxes,
    fees,
    setFees,
    handlechangeImage,
    handleChangeInput,
    handleUpdateClick,
    handleChangeFormState
  } = props
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)
  const [isExtendExtraOpen, setIsExtendExtraOpen] = useState(false)
  const [showOption, setShowOption] = useState(null)

  const handleShowOption = (option) => {
    setIsExtendExtraOpen(false)
    setShowOption(option)
    setExtraOpen(true)
  }

  const handleCloseExtraOpen = () => {
    setIsExtendExtraOpen(false)
    setExtraOpen(false)
    setShowOption(null)
  }

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('product_details').style.width = '100vw'
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('product_details').style.width = '1000px'
        } else {
          document.getElementById('product_details').style.width = '500px'
        }
      }
    }
  }
  useEffect(() => {
    // if (width > 1000) {
    //   setIsExtendExtraOpen(false)
    // }
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (width < 1000) return
    if (extraOpen) {
      document.getElementById('product_details').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])

  useEffect(() => {
    setExtraOpen(false)
    setIsExtendExtraOpen(false)
  }, [props.product])

  return (
    <Container id='product_details'>
      {(!isExtendExtraOpen || width < 1000) && (
        <ProductSummary
          {...props}
          actionSidebar={actionSidebar}
          showOption={showOption}
          handleShowOption={handleShowOption}
        />
      )}
      {extraOpen && (
        <MoreSidebarLayout
          isExtendExtraOpen={isExtendExtraOpen}
          onClose={handleCloseExtraOpen}
        >
          {showOption === 'product_details' && (
            <ProductMainDetails
              product={productState?.product}
              formState={formState}
              handlechangeImage={handlechangeImage}
              handleChangeFormState={handleChangeFormState}
              handleChangeInput={handleChangeInput}
              handleUpdateClick={handleUpdateClick}

              business={business}
              handleUpdateBusinessState={handleUpdateBusinessState}
              setFormTaxState={setFormTaxState}
              formTaxState={formTaxState}
              taxes={taxes}
              setTaxes={setTaxes}
              fees={fees}
              setFees={setFees}
            />
          )}
          {showOption === 'ingredients' && (
            <ProductIngredient
              business={business}
              product={productState.product}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {showOption === 'product_options' && (
            <ProductExtras
              business={business}
              product={productState.product}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {showOption === 'product_images' && (
            <ProductGallery
              business={business}
              categoryId={productState.product.category_id}
              product={productState.product}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {showOption === 'custom_fields' && (
            <ProductMetaFields
              businessId={business.id}
              categoryId={productState.product.category_id}
              productId={productState.product.id}
            />
          )}
          {showOption === 'personalization' && (
            <Personalization
              isShowTitle
            />
          )}
        </MoreSidebarLayout>
      )}
    </Container>
  )
}

export const ProductDetails = (props) => {
  const productDetailsProps = {
    ...props,
    UIComponent: ProductDetailsUI
  }
  return <ProductDetatilsController {...productDetailsProps} />
}
