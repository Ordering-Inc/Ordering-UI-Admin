import React, { useState } from 'react'
import { useLanguage, useEvent, ProductStep as ProductStepController } from 'ordering-components-admin'
import { ProductStartGuide } from '../ProductStartGuide'
import { RestaurantSelectGuide } from '../RestaurantSelectGuide'
import { UploadMenuGuide } from '../UploadMenuGuide'
import { useTheme } from 'styled-components'
import { Button } from '../../../styles'
import {
  Container,
  ImportMenuContainer,
  ImageContent,
  ButtonWrapper
} from './styles'
import { SelectPosGuide } from '../SelectPosGuide'

const ProductStepUI = (props) => {
  const {
    onClose,
    businessListState,
    setBusiness,
    actionState,
    handleImport,
    handleChangeAddress,
    business,
    orderingBusiness,
    countriesState,
    handleOpenCategoryDetails
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [step, setStep] = useState(1)
  const [option, setOption] = useState('')

  const handleCheckMenu = () => {
    events.emit('go_to_page', { page: 'store', params: { store: business?._id } })
    onClose()
  }

  const handleAddManuallyProduct = () => {
    onClose()
    handleOpenCategoryDetails()
  }

  return (
    <Container>
      {step === 1 && <ProductStartGuide onClose={onClose} setStep={setStep} setOption={setOption} countriesState={countriesState} />}
      {step === 2 && option === 2 && (
        <RestaurantSelectGuide
          setBusiness={setBusiness}
          setStep={setStep}
          onClose={onClose}
          businessListState={businessListState}
          handleImport={handleImport}
          handleChangeAddress={handleChangeAddress}
          orderingBusiness={orderingBusiness}
          business={business}
        />
      )}
      {step === 3 && option === 2 && actionState?.loading && (
        <ImportMenuContainer>
          <h2>{t('WE_ARE_IMPORTING_YOUR_MENU', 'We are importing your menu.')}</h2>
          <ImageContent>
            <img src={theme.images.general.importMenu} alt='' />
          </ImageContent>
        </ImportMenuContainer>
      )}
      {step === 3 && option === 2 && !actionState?.loading && actionState?.content?.products > 0 && (
        <ImportMenuContainer>
          <h2>{t('YOUR_MENU_HAS_BEEN_IMPORTED', 'Your menu has been imported')}</h2>
          <ImageContent>
            <img src={theme.images.general.importedMenu} alt='' />
          </ImageContent>
          <ButtonWrapper>
            <Button color='primary' onClick={() => handleCheckMenu()}>{t('CHECK_MENU', 'Check menu')}</Button>
          </ButtonWrapper>
        </ImportMenuContainer>
      )}
      {step === 3 && option === 2 && !actionState?.loading && actionState?.content?.products === 0 && (
        <ImportMenuContainer>
          <h2>{t('YOUR_MENU_COULDNT__BE_IMPORTED', 'Your menu couldn\'t be imported')}</h2>
          <ImageContent>
            <img src={theme.images.general.importMenu} alt='' />
          </ImageContent>
          <ButtonWrapper>
            <Button color='primary' onClick={handleAddManuallyProduct}>{t('ADD_PRODUCTS_MANUALLY', 'Add products manually')}</Button>
          </ButtonWrapper>
        </ImportMenuContainer>
      )}
      {step === 3 && option === 2 && !actionState?.loading && actionState?.error && (
        <ImportMenuContainer>
          <h2>{t('ERROR', 'Error')}</h2>
          {actionState.error && typeof actionState.error === 'string' && actionState.error}
          {actionState.error && typeof actionState.error === 'object' && Array.isArray(actionState.error) && (
            <ul>
              {actionState.error.map((item, i) => (
                <React.Fragment key={i}>
                  {Array.isArray(item) ? (
                    item.map((err, index) => (
                      typeof err === 'string' && (
                        <li key={index}>{t(err.toUpperCase(), err)}</li>
                      )
                    ))
                  ) : (
                    typeof item === 'string' && <li>{t(item.toUpperCase(), item)}</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          )}
        </ImportMenuContainer>
      )}
      {step === 2 && option === 3 && (
        <UploadMenuGuide
          handleBack={() => setStep(1)}
          onClose={onClose}
          handleSuccess={() => setStep(3)}
        />
      )}
      {step === 3 && option === 3 && (
        <ImportMenuContainer>
          <h2>{t('ORDERING', 'Ordering')}</h2>
          <p>{t('WE_ARE_IMPORTING_YOUR_PRODUCTS', 'we are importing your products')}</p>
        </ImportMenuContainer>
      )}
      {step === 2 && option === 4 && (
        <SelectPosGuide
          setStep={setStep}
          handleSuccess={() => setStep(3)}
        />
      )}
      {step === 3 && option === 4 && (
        <ImportMenuContainer>
          <h2>{t('ORDERING', 'Ordering')}</h2>
          <p>{t('WE_WILL_CONTACT_YOU_ASAP', 'we will contact you As soon as possible')}</p>
        </ImportMenuContainer>
      )}
    </Container>
  )
}

export const ProductStep = (props) => {
  const productStepProps = {
    ...props,
    UIComponent: ProductStepUI
  }
  return <ProductStepController {...productStepProps} />
}
