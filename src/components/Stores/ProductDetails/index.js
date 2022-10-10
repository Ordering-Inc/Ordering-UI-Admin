import React, { useState, useEffect } from 'react'
import { ProductDetatils as ProductDetatilsController } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { MoreSidebarLayout, Personalization } from '../../Shared'
import { ProductSummary } from '../ProductSummary'
import { ProductIngredient } from '../ProductIngredient'
import { ProductMetaFields } from '../ProductMetaFields'
import { ProductExtras } from '../ProductExtras'
import { ProductGallery } from '../ProductGallery'
import { ProductVideos } from '../ProductVideos'
import { ProductMainDetails } from '../ProductMainDetails'
import { BusinessServiceProfessionals } from '../BusinessServiceProfessionals'
import { ServiceDetail } from '../ServiceDetail'

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
    handleChangeFormState,
    handleSuccessUpdate,
    handleChangeRibbon,
    cleanFormState
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

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

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
              handleChangeRibbon={handleChangeRibbon}
              handleChangeInput={handleChangeInput}
              handleUpdateClick={handleUpdateClick}
              isExtendExtraOpen={isExtendExtraOpen}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              business={business}
              handleSuccessUpdate={handleSuccessUpdate}
              setFormTaxState={setFormTaxState}
              formTaxState={formTaxState}
              taxes={taxes}
              setTaxes={setTaxes}
              fees={fees}
              setFees={setFees}
              cleanFormState={cleanFormState}
            />
          )}
          {showOption === 'service_details' && (
            <ServiceDetail
              product={productState?.product}
              formState={formState}
              handlechangeImage={handlechangeImage}
              handleChangeFormState={handleChangeFormState}
              handleChangeRibbon={handleChangeRibbon}
              handleChangeInput={handleChangeInput}
              handleUpdateClick={handleUpdateClick}
              isExtendExtraOpen={isExtendExtraOpen}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
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
          {showOption === 'professionals' && (
            <BusinessServiceProfessionals
              product={productState?.product}
              formState={formState}
              isExtendExtraOpen={isExtendExtraOpen}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleUpdateClick={handleUpdateClick}
            />
          )}
          {showOption === 'ingredients' && (
            <ProductIngredient
              business={business}
              product={productState.product}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleSuccessUpdate={handleSuccessUpdate}
            />
          )}
          {showOption === 'product_options' && (
            <ProductExtras
              business={business}
              product={productState.product}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              handleSuccessUpdate={handleSuccessUpdate}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {showOption === 'product_images' && (
            <ProductGallery
              business={business}
              categoryId={productState.product.category_id}
              product={productState.product}
              handleSuccessUpdate={handleSuccessUpdate}
            />
          )}
          {showOption === 'product_video' && (
            <ProductVideos
              business={business}
              categoryId={productState.product.category_id}
              product={productState.product}
              handleSuccessUpdate={handleSuccessUpdate}
            />
          )}
          {showOption === 'custom_fields' && (
            <ProductMetaFields
              businessId={business?.id}
              categoryId={productState.product.category_id}
              productId={productState.product?.id}
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
