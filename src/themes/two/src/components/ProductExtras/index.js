import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, ProductExtras as ProductExtrasController } from 'ordering-components-admin'
import { Trash } from 'react-bootstrap-icons'
import { Checkbox } from '../../styles/Checkbox'
import { Alert, Confirm } from '../Confirm'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'

import {
  MainContainer,
  ProductExtrasContainer,
  Header,
  ExtraOption,
  CheckboxContainer,
  MoreContainer,
  Details,
  ExtraAddContainer,
  AddButton
} from './styles'
import { ProductExtraOptions } from '../ProductExtraOptions'

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
    handleChangeAddExtraInput,
    setIsExtendExtraOpen,
    business,
    handleUpdateBusinessState
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const conatinerRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [openExtraDetails, setOpenExtraDetails] = useState(false)
  const [currentExtra, setCurrentExtra] = useState(null)

  const handleOpenExtraDetails = (extra) => {
    setIsExtendExtraOpen(true)
    setCurrentExtra(extra)
    setOpenExtraDetails(true)
  }

  const handleCloseExtraDetails = () => {
    setOpenExtraDetails(false)
    setIsExtendExtraOpen(false)
  }

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
    <MainContainer>
      <ProductExtrasContainer>
        <Header>
          <h1>{t('PRODUCT_EXTRAS', 'Product extras')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenAddForm()}
          >
            {t('ADD_PRODUCT_EXTRA', 'Add product extra')}
          </Button>
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
              <Details onClick={() => handleOpenExtraDetails(extra)}>
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
      {width >= 1000 ? (
        <>
          {openExtraDetails && (
            <ProductExtraOptions
              open={openExtraDetails}
              onClose={() => handleCloseExtraDetails()}
              business={business}
              extra={currentExtra}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
        </>
      ) : (
        <>
          {openExtraDetails && (
            <Modal
              width='80%'
              open={openExtraDetails}
              onClose={() => handleCloseExtraDetails()}
            >
              <ProductExtraOptions
                open={openExtraDetails}
                onClose={() => handleCloseExtraDetails()}
                business={business}
                extra={currentExtra}
                handleUpdateBusinessState={handleUpdateBusinessState}
              />
            </Modal>
          )}
        </>
      )}
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
    </MainContainer>
  )
}

export const ProductExtras = (props) => {
  const productExtrasProps = {
    ...props,
    UIComponent: ProductExtrasUI
  }
  return <ProductExtrasController {...productExtrasProps} />
}
