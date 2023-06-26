import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, useOrder } from 'ordering-components-admin'
import { Input, IconButton, DefaultSelect as Select } from '../../../../styles'
import { DashCircle, PlusCircle, Pencil, Trash } from 'react-bootstrap-icons'
import BiImage from '@meronex/icons/bi/BiImage'
import { Modal, Confirm } from '../../../Shared'
import { ProductForm } from '../ProductForm'

import {
  Container,
  SelectOption,
  WrapperImage,
  CartProductsWrapper,
  ProductQuantityActionsContainer,
  CartProductsConatiner,
  ProductEditDeleteActions,
  SelectWrapper,
  Option
} from './styles'

export const SelectProducts = (props) => {
  const {
    productList,
    handeUpdateProductCart,
    cart,
    business
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [, { removeProduct }] = useOrder()

  const [productsOptions, setProductsOptions] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [openProduct, setOpenProduct] = useState(false)
  const [curProduct, setCurProduct] = useState(null)
  const [selectedProductCart, setSelectedProductCart] = useState(null)
  const [isCartProduct, setIsCartProduct] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleSelectProduct = (product) => {
    setIsCartProduct(false)
    setSelectedProductCart(null)
    setCurProduct(product)
    setOpenProduct(true)
  }

  const handleEditProduct = (product) => {
    setIsCartProduct(true)
    setCurProduct(null)
    setSelectedProductCart(product)
    setOpenProduct(true)
  }

  const closeModalProductForm = () => {
    setCurProduct(null)
    setOpenProduct(false)
  }

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        removeProduct(product, cart)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (!productList?.products?.length) return
    const el = document.querySelector('.custom-order-content')
    if (el) {
      el.scrollTo({
        top: 300,
        behavior: 'smooth'
      })
    }
  }, [productList?.products])

  const onChange = (val) => {
    const findProduct = productList?.products.find(product => product?.id === val)
    handleSelectProduct(findProduct)
    setSearchValue('')
  }

  useEffect(() => {
    const _productsOptions = []
    if (productList?.loading) {
      _productsOptions.push({
        value: null,
        content: <Option>{t('LOADING', 'Loading')}...</Option>
      })
      setProductsOptions(_productsOptions)
      return
    }
    if (!productList?.products) {
      setProductsOptions(_productsOptions)
      return
    }
    productList.products.filter(product => (product?.name || '').toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map(product => {
      _productsOptions.push({
        value: product?.id,
        content: (
          <Option>
            <img src={optimizeImage(product?.images, 'h_50,c_limit')} alt='' />
            <span>{product?.name}</span>
          </Option>
        )
      })
    })
    setProductsOptions(_productsOptions)
  }, [productList, searchValue])

  return (
    <Container>
      <h3>{t('WAHT_WANT_TO_BUY', 'What do you want us to buy?')}</h3>
      <SelectWrapper>
        <Select
          noSelected
          placeholder={<Option>{t('SELECT_PRODUCT', 'Select product')}</Option>}
          options={productsOptions}
          onChange={onChange}
          optionInnerMaxHeight='300px'
          isShowSearchBar
          searchValue={searchValue}
          handleChangeSearch={setSearchValue}
        />
      </SelectWrapper>
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
            <ProductEditDeleteActions>
              <IconButton
                color='black'
                onClick={() => handleEditProduct(product)}
              >
                <Pencil />
              </IconButton>
              <IconButton
                color='black'
                onClick={() => handleDeleteClick(product)}
              >
                <Trash />
              </IconButton>
            </ProductEditDeleteActions>
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
          isCartProduct={isCartProduct}
          product={curProduct}
          productCart={selectedProductCart}
          businessSlug={business?.slug}
          businessId={business?.id}
          categoryId={curProduct?.category_id || selectedProductCart?.category_id}
          productId={curProduct?.id || selectedProductCart?.id}
          onSave={() => setOpenProduct(false)}
          productAddedToCartLength={cart?.products?.reduce((productsLength, Cproduct) => { return productsLength + (Cproduct?.id === curProduct?.id ? Cproduct?.quantity : 0) }, 0) || 0}
        />
      </Modal>

      <Confirm
        title={t('PRODUCT', 'Product')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
