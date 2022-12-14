import React, { useState } from 'react'
import { useLanguage, useEvent, ProductStep as ProductStepController } from 'ordering-components-admin'
import { ProductStartGuide } from '../ProductStartGuide'
import { RestaurantSelectGuide } from '../RestaurantSelectGuide'
import { useTheme } from 'styled-components'
import {
  Container,
  ImportMenuContainer,
  ImageContent,
  ButtonWrapper
} from './styles'
import { Button } from '../../../styles'

const ProductStepUI = (props) => {
  const {
    onClose,
    businessList,
    setBusiness,
    actionState,
    handleImport,
    handleChangeAddress,
    business,
    address
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [step, setStep] = useState(1)

  const handleCheckMenu = () => {
    events.emit('go_to_page', { page: 'store', params: { store: business?._id } })
    onClose()
  }

  return (
    <Container>
      {step === 1 && <ProductStartGuide onClose={onClose} setStep={setStep} />}
      {step === 2 && (
        <RestaurantSelectGuide
          setBusiness={setBusiness}
          setStep={setStep}
          onClose={onClose}
          businessList={businessList}
          handleImport={handleImport}
          handleChangeAddress={handleChangeAddress}
          address={address}
        />
      )}
      {step === 3 && actionState?.loading && (
        <ImportMenuContainer>
          <h2>{t('WE_ARE_IMPORTING_YOUR_MENU', 'We are importing your menu.')}</h2>
          <ImageContent>
            <img src={theme.images.general.importMenu} alt='' />
          </ImageContent>
        </ImportMenuContainer>
      )}
      {step === 3 && !actionState?.loading && (
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
