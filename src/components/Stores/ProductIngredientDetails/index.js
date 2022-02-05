import React, { useState } from 'react'
import { useLanguage, ProductIngredient as ProductIngredientController } from 'ordering-components-admin'
import { Button, IconButton, Input } from '../../../styles'
import { XLg, ThreeDots } from 'react-bootstrap-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm } from '../../Shared'

import {
  Container,
  Header,
  ActionSelectorWrapper,
  InputWrapper
} from './styles'

const ProductIngredientDetailsUI = (props) => {
  const {
    isAddMode,
    ingredientState,
    changesState,
    handleChangeInput,
    handleDeleteIngredient,
    handleAddIngredient,
    handleUpdateIngredient
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('INGREDIENT', 'Ingredient')),
      handleOnAccept: () => {
        handleDeleteIngredient()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  return (
    <>
      <Container>
        <Header>
          <h1>
            {
              isAddMode
                ? t('ADD_INGREDIENT', 'Add ingredient')
                : changesState?.name ?? ingredientState?.ingredient?.name ?? ''
            }
          </h1>
          <div>
            {!isAddMode && (
              <ActionSelectorWrapper>
                <DropdownButton
                  className='product_actions'
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  <Dropdown.Item
                    onClick={() => handleDeleteClick()}
                  >
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            )}
            <IconButton
              color='black'
              onClick={() => props.onClose && props.onClose()}
            >
              <XLg />
            </IconButton>
          </div>
        </Header>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            name='name'
            placeholder={t('NAME', 'Name')}
            value={changesState?.name ?? ingredientState?.ingredient?.name ?? ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>

        <Button
          borderRadius='8px'
          color='primary'
          disabled={ingredientState.loading || Object.keys(changesState).length === 0}
          onClick={() => {
            isAddMode ? handleAddIngredient() : handleUpdateIngredient()
          }}
        >
          {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
        </Button>
      </Container>

      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ProductIngredientDetails = (props) => {
  const ingredientProps = {
    ...props,
    UIComponent: ProductIngredientDetailsUI
  }
  return <ProductIngredientController {...ingredientProps} />
}
