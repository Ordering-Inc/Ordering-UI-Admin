import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, LinkButton } from '../../../styles'
import { ProductIngredientDetails } from '../ProductIngredientDetails'
import { Modal } from '../../Shared'
import { ChevronRight } from 'react-bootstrap-icons'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  MainContainer,
  IngredientContainer,
  Header,
  IngredientOption,
  AddIngredientButtonWrapper
} from './styles'

export const ProductIngredient = (props) => {
  const {
    product,
    setIsExtendExtraOpen
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openDetails, setOpenDetails] = useState(false)
  const [currentIngredient, setCurrentIngredient] = useState(null)

  const handleOpenIngredient = (ingredient, isInitialRender) => {
    setCurrentIngredient(ingredient)
    setIsExtendExtraOpen(true)
    setOpenDetails(true)
    if (!isInitialRender) {
      addQueryToUrl({ ingredient: ingredient?.id })
    }
  }

  const handleCloseDetails = () => {
    setOpenDetails(false)
    setIsExtendExtraOpen(false)
    setCurrentIngredient(null)
    removeQueryToUrl(['ingredient'])
  }

  useEffect(() => {
    const ingredientId = query.get('ingredient')
    if (ingredientId) {
      const initIngredient = product.ingredients.find(ingredient => ingredient.id === Number(ingredientId))
      initIngredient && handleOpenIngredient(initIngredient, true)
    }
  }, [])

  return (
    <MainContainer>
      <IngredientContainer>
        <Header>
          <h1>{t('INGREDIENTS', 'Ingredients')} / {t('PROPERTIES', 'Properties')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenIngredient(null, true)}
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
        <AddIngredientButtonWrapper>
          <LinkButton
            onClick={() => handleOpenIngredient(null, true)}
          >
            {t('ADD_INGREDIENT', 'Add ingredient')}
          </LinkButton>
        </AddIngredientButtonWrapper>
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
          hideCloseDefault
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
