import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useUtils, useLanguage, SingleBusinessProduct as SingleBusinessProductController } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { Alert } from '../Confirm'
import { BusinessActionSelector } from '../BusinessActionSelector'
import {
  SingleListBusinessContainer,
  BusinessGeneralInfo,
  WrapperImage,
  InfoBlock,
  BusinessEnableWrapper,
  Image,
  InputName
} from './styles'
import {
  WrapperBusinessActionSelector
} from '../SingleProductsCategory/styles'

const SingleBusinessProductUI = (props) => {
  const {
    isSkeleton,
    viewMethod,
    product,
    allowColumns,
    handleChangeProductActive,
    handleUpdateClick,
    deleteProduct
  } = props

  const [, t] = useLanguage()
  const [{ parsePrice, optimizeImage }] = useUtils()
  const [isEditMode, setIsEditMode] = useState(false)
  const productNameEditRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeEditMode = (e) => {
    if (isEditMode && !e.target.closest('.product-name-edit') && !e.target.closest('.popup-component')) {
      const inputValue = productNameEditRef.current.value
      if (inputValue === '') {
        setAlertState({
          open: true,
          content: [t('NAME_IS_REQUIRED', 'Product name is Required')]
        })
      } else {
        setIsEditMode(false)
        handleUpdateClick(inputValue)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', closeEditMode)
    return () => document.removeEventListener('click', closeEditMode)
  }, [isEditMode])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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
            <SingleListBusinessContainer>
              <tr>
                {allowColumns?.business && (
                  <td className='business'>
                    <BusinessGeneralInfo>
                      <WrapperImage>
                        <Image bgimage={optimizeImage(product?.images)} />
                      </WrapperImage>
                      {
                        product?.name && (
                          isEditMode
                            ? (
                              <InputName
                                className='product-name-edit'
                                defaultValue={product?.name}
                                ref={productNameEditRef}
                              />
                            )
                            : <p onClick={() => setIsEditMode(true)}>{product?.name}</p>
                        )
                      }
                    </BusinessGeneralInfo>
                  </td>
                )}
                {allowColumns?.price && (
                  <td>
                    {
                      product?.price && (
                        <InfoBlock>
                          <p>{parsePrice(product?.price)}</p>
                        </InfoBlock>
                      )
                    }
                  </td>
                )}
                {allowColumns?.description && (
                  <td>
                    {
                      product?.description && (
                        <InfoBlock>
                          <p>{product?.description}</p>
                        </InfoBlock>
                      )
                    }
                  </td>
                )}
                <td>
                  <BusinessEnableWrapper className='business_enable_control'>
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
                <td>
                  <WrapperBusinessActionSelector className='business_actions'>
                    <BusinessActionSelector
                      business={product}
                      handleDuplicateBusiness={() => console.log('copy')}
                      handleDeleteBusiness={deleteProduct}
                      handleOpenBusinessDetails={() => console.log('open')}
                    />
                  </WrapperBusinessActionSelector>
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
