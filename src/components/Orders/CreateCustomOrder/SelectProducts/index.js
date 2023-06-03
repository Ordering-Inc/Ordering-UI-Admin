import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { Input, IconButton } from '../../../../styles'
import { DashCircle, PlusCircle } from 'react-bootstrap-icons'
import CgSpinnerTwoAlt from '@meronex/icons/cg/CgSpinnerTwoAlt'
import BiImage from '@meronex/icons/bi/BiImage'
import { Modal } from '../../../Shared'
import { ProductForm } from '../ProductForm'

import {
  Container,
  SearchProductsWrapper,
  OptionsToSelectContainer,
  SelectOption,
  WrapperImage,
  CartProductsWrapper,
  ProductQuantityActionsContainer,
  CartProductsConatiner
} from './styles'

export const SelectProducts = (props) => {
  const {
    productList,
    getProducts,
    handeUpdateProductCart,
    cart,
    business
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [searchInputFocus, setSearchInputFocus] = useState(false)
  const [openProduct, setOpenProduct] = useState(false)
  const [curProduct, setCurProduct] = useState(null)

  let timeout = null
  const onInputChange = (inputValue) => {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      getProducts(inputValue)
    }, 750)
  }

  const handleSelectProduct = (product) => {
    setCurProduct(product)
    setOpenProduct(true)
  }

  const closeModalProductForm = () => {
    setCurProduct(null)
    setOpenProduct(false)
  }

  return (
    <Container>
      <h3>{t('WAHT_WANT_TO_BUY', 'What do you want us to buy?')}</h3>
      <SearchProductsWrapper>
        <Input
          placeholder={t('SEARCH_PRODUCTOS', 'Search products')}
          onChange={e => onInputChange(e.target.value)}
          onFocus={() => setSearchInputFocus(true)}
          onBlur={() => {
            setTimeout(() => {
              setSearchInputFocus(false)
            }, 300)
          }}
        />
        {productList.loading && (
          <span className='loading'>
            <CgSpinnerTwoAlt />
          </span>
        )}
        {searchInputFocus && (
          <OptionsToSelectContainer>
            {productList?.products?.length > 0 ? (
              <>
                {productList?.products?.map(product => (
                  <SelectOption
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                  >
                    <WrapperImage>
                      {product?.images ? (
                        <img src={optimizeImage(product?.images, 'h_50,c_limit')} alt='' />
                      ) : (
                        <BiImage />
                      )}
                    </WrapperImage>
                    <span className='name'>{product?.name}</span>
                  </SelectOption>
                ))}
              </>
            ) : (
              <p>
                {
                  productList.loading
                    ? t('LOADING', 'Loading')
                    : t('SEARCH_PRODUCTOS', 'Search products')
                }
              </p>
            )}
          </OptionsToSelectContainer>
        )}
      </SearchProductsWrapper>
      <CartProductsConatiner>
        {cart?.products?.map((product, index) => (
          <CartProductsWrapper key={`${product.id}_${index}`}>
            <SelectOption>
              <WrapperImage>
                {product?.images ? (
                  <img src={optimizeImage(product?.images, 'h_50,c_limit')} alt='' />
                ) : (
                  <BiImage />
                )}
              </WrapperImage>
              <span className='name'>{product?.name}</span>
            </SelectOption>
            <ProductQuantityActionsContainer>
              <IconButton
                color='black'
                disabled={product?.quantity === 1}
                onClick={() => handeUpdateProductCart(product, false)}
              >
                <DashCircle />
              </IconButton>
              <Input
                type='number'
                disabled
                max={product?.maximum_per_order}
                value={product?.quantity}
              />
              <IconButton
                color='black'
                disabled={product?.maximum_per_order === product?.quantity}
                onClick={() => handeUpdateProductCart(product, true)}
              >
                <PlusCircle />
              </IconButton>
            </ProductQuantityActionsContainer>
          </CartProductsWrapper>
        ))}
      </CartProductsConatiner>

      <Modal
        width='760px'
        open={openProduct}
        closeOnBackdrop
        onClose={() => closeModalProductForm()}
        padding='0'
        isProductForm
        disableOverflowX
      >
        <ProductForm
          businessSlug={business?.slug}
          product={curProduct}
          businessId={business?.id}
          categoryId={curProduct?.category_id}
          productId={curProduct?.id}
          onSave={() => setOpenProduct(false)}
          productAddedToCartLength={cart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === curProduct?.id ? Cproduct?.quantity : 0) }, 0) || 0}
        />
      </Modal>
    </Container>
  )
}
