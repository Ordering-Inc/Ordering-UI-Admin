import React, { useEffect, useRef } from 'react'
import { useLanguage, ProductIngredient as ProductIngredientController } from 'ordering-components-admin'
import { PlusSquare, Trash } from 'react-bootstrap-icons'
import {
  IngredientContainer,
  Header,
  IngredientOption,
  AddIngredientButton,
  IngredientAddContainer
} from './styles'

const ProductIngredientUI = (props) => {
  const {
    changesState,
    isAddMode,
    productState,
    handleChangeInput,
    handleOpenAddForm,
    handleDeleteIngredient,
    handleAddIngredient
  } = props
  const [, t] = useLanguage()
  const conatinerRef = useRef(null)

  const addIngredient = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      handleAddIngredient()
    }
  }

  useEffect(() => {
    if (!isAddMode) return
    document.addEventListener('click', addIngredient)
    return () => document.removeEventListener('click', addIngredient)
  }, [isAddMode, changesState])
  return (
    <IngredientContainer>
      <Header>
        <h1>{t('INGREDIENTS', 'Ingredients')}</h1>
        <PlusSquare />
      </Header>
      {productState?.product?.ingredients.map(ingredient => (
        <IngredientOption
          key={ingredient.id}
        >
          <input
            name='name'
            defaultValue={ingredient?.name}
            onChange={(e) => handleChangeInput(e, ingredient.id)}
          />
          <Trash
            onClick={() => handleDeleteIngredient(ingredient.id)}
          />
        </IngredientOption>
      ))}
      {isAddMode && (
        <IngredientAddContainer
          ref={conatinerRef}
        >
          <input
            name='name'
            placeholder={t('WRITE_A_NAME', 'Write a name')}
            onChange={(e) => handleChangeInput(e, null)}
          />
        </IngredientAddContainer>
      )}
      <AddIngredientButton
        onClick={() => handleOpenAddForm()}
      >
        {t('ADD_INGREDIENT', 'Add ingredient')}
      </AddIngredientButton>
    </IngredientContainer>
  )
}

export const ProductIngredient = (props) => {
  const productIngredientProps = {
    ...props,
    UIComponent: ProductIngredientUI
  }
  return <ProductIngredientController {...productIngredientProps} />
}
