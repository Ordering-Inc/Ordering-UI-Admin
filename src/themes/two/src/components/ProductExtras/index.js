import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, ProductExtras as ProductExtrasController } from 'ordering-components-admin'
import { PlusSquare, Trash } from 'react-bootstrap-icons'
import { Checkbox } from '../../styles/Checkbox'
import { Alert, Confirm } from '../Confirm'

import {
  ProductExtrasContainer,
  Header,
  ExtraOption,
  CheckboxContainer,
  MoreContainer,
  Details,
  ExtraAddContainer,
  AddButton
} from './styles'

const ProductExtrasUI = (props) => {
  const {
    productState,
    extrasState,
    changesState,
    isAddMode,
    handleOpenAddForm,
    handleChangeExtraInput,
    handleDeteteExtra,
    handleAddExtra,
    handleClickExtra,
    handleChangeAddExtraInput
  } = props
  const [, t] = useLanguage()
  const conatinerRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const isCheckState = (extraId) => {
    const found = productState?.product?.extras.find(extra => extra?.id === extraId)
    return found
  }

  const addExtraListener = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      handleAddExtra()
    }
  }

  const handleDeteteClick = (extraId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_EXTRA', 'Are you sure that you want to delete this extra?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteExtra(extraId)
      }
    })
  }

  useEffect(() => {
    if (!isAddMode) return
    document.addEventListener('click', addExtraListener)
    return () => document.removeEventListener('click', addExtraListener)
  }, [isAddMode, changesState])

  useEffect(() => {
    if (productState?.product?.error || extrasState?.extras?.error) {
      setAlertState({
        open: true,
        content: productState?.product?.error || extrasState?.extras?.error
      })
    }
  }, [productState, extrasState])

  return (
    <>
      <ProductExtrasContainer>
        <Header>
          <h1>{t('PRODUCT_EXTRAS', 'Product extras')}</h1>
          <PlusSquare onClick={() => handleOpenAddForm()} />
        </Header>
        {extrasState?.extras.map(extra => (
          <ExtraOption key={extra.id}>
            <CheckboxContainer>
              <Checkbox
                defaultChecked={isCheckState(extra.id)}
                onClick={(e) => handleClickExtra(extra.id, e.target.checked)}
              />
              <input
                type='text'
                defaultValue={extra.name}
                onChange={(e) => handleChangeExtraInput(e, extra.id)}
              />
            </CheckboxContainer>
            <MoreContainer>
              <Details>
                {t('DETAILS', 'Details')}
              </Details>
              <Trash
                onClick={() => handleDeteteClick(extra.id)}
              />
            </MoreContainer>
          </ExtraOption>
        ))}
        {isAddMode && (
          <ExtraAddContainer
            ref={conatinerRef}
          >
            <input
              name='name'
              placeholder={t('WRITE_A_NAME', 'Write a name')}
              onChange={(e) => handleChangeAddExtraInput(e)}
            />
          </ExtraAddContainer>
        )}
        <AddButton
          onClick={() => handleOpenAddForm()}
        >
          {t('ADD_INGREDIENT', 'Add ingredient')}
        </AddButton>
      </ProductExtrasContainer>
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('ORDERING', 'Ordering')}
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

export const ProductExtras = (props) => {
  const productExtrasProps = {
    ...props,
    UIComponent: ProductExtrasUI
  }
  return <ProductExtrasController {...productExtrasProps} />
}
