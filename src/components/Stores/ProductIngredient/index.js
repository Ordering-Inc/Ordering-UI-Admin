import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button } from '../../../styles'
import { ProductIngredientDetails } from '../ProductIngredientDetails'
import { Modal } from '../../Shared'
import { ChevronRight } from 'react-bootstrap-icons'

import {
  MainContainer,
  IngredientContainer,
  Header,
  IngredientOption,
  AddIngredientButton
} from './styles'

export const ProductIngredient = (props) => {
  const {
    product,
    setIsExtendExtraOpen
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openDetails, setOpenDetails] = useState(false)
  const [currentIngredient, setCurrentIngredient] = useState(null)

  const handleOpenIngredient = (ingredient) => {
    setCurrentIngredient(ingredient)
    setIsExtendExtraOpen(true)
    setOpenDetails(true)
  }

  const handleCloseDetails = () => {
    setOpenDetails(false)
    setIsExtendExtraOpen(false)
    setCurrentIngredient(null)
  }

  return (
    <MainContainer>
      <IngredientContainer>
        <Header>
          <h1>{t('INGREDIENTS', 'Ingredients')} / {t('PROPERTIES', 'Properties')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenIngredient(null)}
          >
            {t('ADD_INGREDIENT', 'Add ingredient')}
          </Button>
        </Header>
        {product?.ingredients && product?.ingredients.map(ingredient => (
          <IngredientOption
            key={ingredient.id}
            active={ingredient.id === currentIngredient?.id}
            onClick={() => handleOpenIngredient(ingredient)}
          >
            <span>{ingredient?.name}</span>
            <ChevronRight />
          </IngredientOption>
        ))}
        <AddIngredientButton
          onClick={() => handleOpenIngredient(null)}
        >
          {t('ADD_INGREDIENT', 'Add ingredient')}
        </AddIngredientButton>
      </IngredientContainer>

      {width >= 1000 ? (
        <>
          {openDetails && (
            <ProductIngredientDetails
              {...props}
              ingredient={currentIngredient}
              onClose={() => handleCloseDetails()}
            />
          )}
        </>
      ) : (
        <Modal
          width='80%'
          open={openDetails}
          onClose={() => handleCloseDetails()}
        >
          <ProductIngredientDetails
            {...props}
            ingredient={currentIngredient}
            onClose={() => handleCloseDetails()}
          />
        </Modal>
      )}
    </MainContainer>
  )
}
