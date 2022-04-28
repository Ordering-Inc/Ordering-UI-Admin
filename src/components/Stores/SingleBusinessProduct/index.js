import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useUtils,
  useLanguage,
  DragAndDrop,
  ExamineClick,
  SingleBusinessProduct as SingleBusinessProductController
} from 'ordering-components-admin'
import { bytesConverter } from '../../../utils'
import { Switch } from '../../../styles/Switch'
import { Alert } from '../../Shared'
import { useTheme } from 'styled-components'
import BiImage from '@meronex/icons/bi/BiImage'
import {
  SingleListBusinessContainer,
  BusinessGeneralInfo,
  WrapperImage,
  InfoBlock,
  BusinessEnableWrapper,
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
    handleOpenProductDetails,
    productFormState,
    handlechangeImage,
    isEditMode,
    productDetailsId,
    dataSelected,
    business,

    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    isLastProduct,
    isProductsBottom
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parsePrice, optimizeImage }] = useUtils()

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const containerRef = useRef(null)
  const ProductTypeImgRef = useRef(null)

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
    const isInvalid = e.target.closest('.product_enable_control')
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

  const taxProduct = productFormState?.changes?.tax ?? business?.tax
  const taxProductType = taxProduct?.type || business?.tax_type
  const taxProductTypeString = taxProductType === 1 ? t('INCLUDED_ON_PRICE', 'Included on price') : t('NOT_INCLUDED_ON_PRICE', 'Not included on price')

  return (
    <>
      {viewMethod === 'list' && (
        <>
          {isSkeleton ? (
            <SingleListBusinessContainer>
              <tr>
                {allowColumns?.products && (
                  <td className='products'>
                    <BusinessGeneralInfo>
                      <WrapperImage>
                        <Skeleton width={38} height={38} />
                      </WrapperImage>
                      <Skeleton width={80} />
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.description && (
                  <td>
                    <InfoBlock className='description'>
                      <Skeleton height={10} count={2} />
                    </InfoBlock>
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    <InfoBlock>
                      <Skeleton width={80} />
                    </InfoBlock>
                  </td>
                )}
                {allowColumns?.offer_price && (
                  <td>
                    <Skeleton width={100} />
                  </td>
                )}
                {allowColumns?.cost_price && (
                  <td>
                    <Skeleton width={100} />
                  </td>
                )}
                {allowColumns?.tax && (
                  <td>
                    <Skeleton width={100} />
                  </td>
                )}
                {allowColumns?.fee && (
                  <td>
                    <Skeleton width={100} />
                  </td>
                )}
                <td>
                  <Skeleton width={100} />
                </td>
              </tr>
            </SingleListBusinessContainer>
          ) : (
            <SingleListBusinessContainer
              ref={containerRef}
              active={product.id === productDetailsId}
              onClick={(e) => handleProductClick(e)}
              onDragOver={e => handleDragOver?.(e, isLastProduct)}
              onDrop={e => handleDrop(e)}
              onDragEnd={e => handleDragEnd(e)}
              className='draggable-product'
              data-index={product.id}
              isAccept={dataSelected && dataSelected === product?.id?.toString()}
              isBorderBottom={isProductsBottom && isLastProduct}
            >
              <tr>
                {allowColumns?.products && (
                  <td className='products'>
                    <DragableContainer className='product_info'>
                      <DragImageWrapper>
                        <img
                          src={theme.images.icons?.sixDots}
                          alt='six dots'
                          draggable
                          onDragStart={e => handleDragStart(e, product.id)}
                        />
                      </DragImageWrapper>
                      <BusinessGeneralInfo>
                        <ProductTypeImage
                          onClick={() => handleClickImage()}
                          disabled
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
                                    <img
                                      src={optimizeImage(productFormState?.changes?.images, 'h_50,c_limit')}
                                      alt='product image'
                                      loading='lazy'
                                    />
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
                            <div className='product_name'>{productFormState?.changes?.name || ''}</div>
                          )
                        }
                      </BusinessGeneralInfo>

                    </DragableContainer>
                  </td>
                )}
                {allowColumns?.description && (
                  <td className='description'>
                    {
                      <InfoBlock>
                        <div className='product_description'>{productFormState?.changes?.description || ''}</div>
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    {
                      <InfoBlock>
                        <div className='product_price'>
                          {parsePrice(productFormState?.changes?.price || 0)}
                        </div>
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.offer_price && (
                  <td>
                    {
                      <InfoBlock>
                        <div className='product_price'>
                          {productFormState?.changes?.offer_price ? (
                            <>{parsePrice(productFormState?.changes?.offer_price)}</>
                          ) : (
                            <>{' '}</>
                          )}
                        </div>
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.cost_price && (
                  <td>
                    {
                      <InfoBlock>
                        <div className='product_price'>
                          {productFormState?.changes?.cost_price ? (
                            <>{parsePrice(productFormState?.changes?.cost_price)}</>
                          ) : (
                            <>{' '}</>
                          )}
                        </div>
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.tax && (
                  <td>
                    {
                      <InfoBlock>
                        <div className='product_tax'>{taxProduct?.rate ?? taxProduct ?? 0}% ({taxProductTypeString})</div>
                      </InfoBlock>
                    }
                  </td>
                )}
                {allowColumns?.fee && (
                  <td>
                    {
                      <InfoBlock>
                        <div className='product_fee'>{parsePrice(productFormState?.changes?.fee?.fixed ?? 0)} + {productFormState?.changes?.fee?.percentage ?? business?.service_fee}%</div>
                      </InfoBlock>
                    }
                  </td>
                )}
                <td className='actions'>
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
                <td>
                  <InfoBlock>
                    <p><Skeleton width={40} height={20} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <InfoBlock>
                    <p><Skeleton width={80} height={15} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <InfoBlock className='description'>
                    <p><Skeleton width={100} height={15} /></p>
                  </InfoBlock>
                </td>
                <td>
                  <Skeleton width={80} height={15} />
                </td>
                <td>
                  <Skeleton width={20} height={20} />
                </td>
                <td>
                  <Skeleton width={80} height={15} />
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
                    product?.offer_price && (
                      <InfoBlock>
                        <p>{parsePrice(productFormState?.changes?.offer_price)}</p>
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
