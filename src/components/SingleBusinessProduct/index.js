import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useUtils,
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useToast,
  ToastType,
  SingleBusinessProduct as SingleBusinessProductController
} from 'ordering-components-admin'

import { bytesConverter } from '../../utils'
import { Switch } from '../../styles/Switch'
import { Alert } from '../Confirm'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  SingleListBusinessContainer,
  BusinessGeneralInfo,
  WrapperImage,
  InfoBlock,
  BusinessEnableWrapper,
  ActionSelectorWrapper,
  ProductTypeImage,
  UploadWrapper,
  DragableContainer,
  DragImageWrapper
} from './styles'

const SingleBusinessProductUI = (props) => {
  const {
    isSkeleton,
    viewMethod,
    product,
    allowColumns,
    handleChangeProductActive,
    handleUpdateClick,
    deleteProduct,
    handleOpenProductDetails,
    productFormState,
    handleChangeInput,
    handlechangeImage,
    isEditMode,
    productDetailsId,
    businessState,
    handleUpdateBusinessState
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [, { showToast }] = useToast()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const containerRef = useRef(null)
  const ProductTypeImgRef = useRef(null)
  const ActionIcon = <FiMoreVertical />

  const handleClickImage = () => {
    ProductTypeImgRef.current.click()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handlechangeImage(files[0])
    }
  }

  const closeProductEdit = (e) => {
    const outsideDropdown = !containerRef.current?.contains(e.target)
    if (outsideDropdown) {
      if (!e.target.closest('.popup-component')) {
        if (isEditMode && Object.keys(productFormState?.changes).length > 0 && !productFormState?.loading) {
          handleUpdateClick()
        }
      }
    }
  }

  const handleProductClick = (e) => {
    const isInvalid = e.target.closest('.product_info') ||
    e.target.closest('.product_price') || e.target.closest('.product_description') ||
    e.target.closest('.product_enable_control') || e.target.closest('.product_actions')
    if (isInvalid) return
    handleOpenProductDetails(product)
  }

  useEffect(() => {
    if (productFormState?.result?.error) {
      setAlertState({
        open: true,
        content: productFormState?.result?.result
      })
    }
  }, [productFormState?.result])

  useEffect(() => {
    document.addEventListener('click', closeProductEdit)
    return () => document.removeEventListener('click', closeProductEdit)
  }, [productFormState])

  useEffect(() => {
    if (!productFormState?.loading && !productFormState?.result.error && productFormState?.result?.result) {
      productFormState?.result?.result?.id
        ? showToast(ToastType.Success, t('PRODUCT_UPDATE', 'Product updated'))
        : showToast(ToastType.Success, t('PRODUCT_DELETE', 'Product deleted'))
    }
  }, [productFormState?.loading])

  const handleDrag = (event, productId) => {
    event.dataTransfer.setData('transferProductId', productId)

    const ghostEle = document.createElement('div')
    ghostEle.classList.add('ghostDragging')
    ghostEle.innerHTML = productFormState?.changes?.name
    document.body.appendChild(ghostEle)
    event.dataTransfer.setDragImage(ghostEle, 0, 0)
  }

  const handleAllowDrop = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const transferProductId = parseInt(event.dataTransfer.getData('transferProductId'))
    const _categories = businessState?.business?.categories.map(item => {
      if (item.id === product?.category_id) {
        const transferProduct = item.products.find(_product => _product.id === transferProductId)
        const updatedProducts = []
        let counter
        for (let i = 0; i < item.products.length; i++) {
          if (item.products[i].id === product?.id) {
            counter = i
          }
          if (item.products[i].id !== transferProductId) {
            updatedProducts.push(item.products[i])
          }
        }
        updatedProducts.splice(counter, 0, transferProduct)
        return {
          ...item,
          products: updatedProducts
        }
      }
      return item
    })
    handleUpdateBusinessState({ ...businessState?.business, categories: _categories })
  }

  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
  }

  return (
    <>
      {viewMethod === 'list' && (
        <>
          {isSkeleton ? (
            <SingleListBusinessContainer>
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <WrapperImage>
                        <Skeleton width={38} height={38} />
                      </WrapperImage>
                      <p><Skeleton width={80} /></p>
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    <InfoBlock>
                      <p><Skeleton width={50} /></p>
                    </InfoBlock>
                  </td>
                )}
                {allowColumns?.description && (
                  <td>
                    <InfoBlock className='description'>
                      <p><Skeleton width={100} height={30} /></p>
                    </InfoBlock>
                  </td>
                )}
                <td>
                  <Skeleton width={100} />
                </td>
                <td>
                  <Skeleton width={30} />
                </td>
              </tr>
            </SingleListBusinessContainer>
          ) : (
            <SingleListBusinessContainer
              ref={containerRef}
              active={product.id === productDetailsId}
              onClick={(e) => handleProductClick(e)}
              onDragOver={e => handleAllowDrop(e)}
              onDrop={e => handleDrop(e)}
              onDragEnd={e => handleDragEnd(e)}
            >
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
                    <DragableContainer className='product_info'>
                      <DragImageWrapper>
                        <img
                          src={theme.images.icons?.sixDots}
                          alt='six dots'
                          draggable
                          onDragStart={e => handleDrag(e, product.id)}
                        />
                      </DragImageWrapper>
                      <BusinessGeneralInfo>
                        <ProductTypeImage
                          onClick={() => handleClickImage()}
                          disabled={productFormState?.loading}
                        >
                          <ExamineClick
                            onFiles={files => handleFiles(files)}
                            childRef={(e) => { ProductTypeImgRef.current = e }}
                            accept='image/png, image/jpeg, image/jpg'
                            disabled={productFormState?.loading}
                          >
                            <DragAndDrop
                              onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                              accept='image/png, image/jpeg, image/jpg'
                              disabled={productFormState?.loading}
                            >
                              {
                                productFormState?.changes?.images
                                  ? (
                                    <img src={productFormState?.changes?.images} alt='business type image' loading='lazy' />
                                  )
                                  : (
                                    <UploadWrapper>
                                      <BiImage />
                                    </UploadWrapper>
                                  )
                              }
                            </DragAndDrop>
                          </ExamineClick>
                        </ProductTypeImage>
                        {
                          product?.name && (
                            <input
                              type='text'
                              name='name'
                              value={productFormState?.changes?.name || ''}
                              onChange={handleChangeInput}
                              autoComplete='off'
                            />
                          )
                        }
                      </BusinessGeneralInfo>

                    </DragableContainer>
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    {
                      <InfoBlock>
                        <input
                          type='text'
                          name='price'
                          className='product_price'
                          value={productFormState?.changes?.price || ''}
                          onChange={handleChangeInput}
                          autoComplete='off'
                        />
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.description && (
                  <td>
                    {
                      <InfoBlock>
                        <textarea
                          name='description'
                          value={productFormState?.changes?.description || ''}
                          onChange={handleChangeInput}
                          autoComplete='off'
                          className='product_description'
                        />
                      </InfoBlock>
                    }
                  </td>
                )}
                <td>
                  <BusinessEnableWrapper className='product_enable_control'>
                    {
                      product?.enabled
                        ? <span>{t('ENABLE', 'Enable')}</span>
                        : <span>{t('DISABLE', 'Disable')}</span>
                    }
                    <Switch
                      defaultChecked={product?.enabled || false}
                      onChange={handleChangeProductActive}
                    />
                  </BusinessEnableWrapper>
                </td>
                <td className='actions'>
                  <ActionSelectorWrapper>
                    <DropdownButton
                      className='product_actions'
                      menuAlign={theme?.rtl ? 'left' : 'right'}
                      title={ActionIcon}
                      id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                    >
                      <Dropdown.Item onClick={() => handleOpenProductDetails(product)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                      <Dropdown.Item onClick={deleteProduct}>{t('DELETE', 'Delete')}</Dropdown.Item>
                    </DropdownButton>
                  </ActionSelectorWrapper>
                </td>
              </tr>
            </SingleListBusinessContainer>
          )}
        </>
      )}
      {viewMethod === 'spreedsheet' && (
        <>
          {isSkeleton ? (
            <SingleListBusinessContainer>
              <tr>
                <td className='business'>
                  <InfoBlock>
                    <p><Skeleton width={30} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <InfoBlock>
                    <p><Skeleton width={50} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <InfoBlock className='description'>
                    <p><Skeleton width={100} height={30} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <Skeleton width={50} />
                </td>
                <td>
                  <Skeleton width={50} />
                </td>
              </tr>
            </SingleListBusinessContainer>
          ) : (
            <SingleListBusinessContainer>
              <tr>
                <td>
                  {
                    product?.id && (
                      <InfoBlock>
                        <p>{product?.id}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.name && (
                      <InfoBlock>
                        <p>{product?.name}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.description && (
                      <InfoBlock>
                        <p>{product?.description}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.price && (
                      <InfoBlock>
                        <p>{parsePrice(product?.price)}</p>
                      </InfoBlock>
                    )
                  }
                </td>
                <td>
                  {
                    product?.quantity && (
                      <InfoBlock>
                        <p>{product?.quantity}</p>
                      </InfoBlock>
                    )
                  }
                </td>
              </tr>
            </SingleListBusinessContainer>
          )}
        </>
      )}
      <Alert
        title={t('PRODUCT', 'Product')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const SingleBusinessProduct = (props) => {
  const { isSkeleton } = props
  const singleBusinessProductProps = {
    ...props,
    UIComponent: SingleBusinessProductUI
  }
  return (
    <>
      {isSkeleton ? (
        <SingleBusinessProductUI {...props} />
      ) : (
        <SingleBusinessProductController {...singleBusinessProductProps} />
      )}
    </>
  )
}
