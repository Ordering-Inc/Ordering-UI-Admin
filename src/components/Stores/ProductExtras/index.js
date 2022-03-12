import React, { useState, useEffect, useRef } from 'react'
import { useLanguage, ProductExtras as ProductExtrasController } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, Checkbox } from '../../../styles'
import { Alert, Confirm, Modal } from '../../Shared'
import { ProductExtraOptions } from '../ProductExtraOptions'
import { ChevronRight } from 'react-bootstrap-icons'

import {
  MainContainer,
  ProductExtrasContainer,
  Header,
  ExtraOption,
  CheckboxContainer,
  MoreContainer,
  Details,
  ExtraAddForm,
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
    handleAddExtra,
    handleChangeAddExtraInput,
    setIsExtendExtraOpen,
    business,
    handleUpdateBusinessState,
    handleProductExtraState
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const conatinerRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [openExtraDetails, setOpenExtraDetails] = useState(false)
  const [currentExtra, setCurrentExtra] = useState(null)
  const [extraIds, setExtraIds] = useState([])
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false)

  const handleOpenExtraDetails = (extra) => {
    setIsExtendExtraOpen(true)
    setCurrentExtra(extra)
    setOpenExtraDetails(true)
  }

  const handleCloseExtraDetails = () => {
    setOpenExtraDetails(false)
    setIsExtendExtraOpen(false)
    setCurrentExtra(null)
  }

  const addExtraListener = (e) => {
    const outsideDropdown = !conatinerRef.current?.contains(e.target)
    if (outsideDropdown) {
      handleAddExtra()
    }
  }

  const handleExtraState = (id, checked) => {
    if (checked) {
      setExtraIds(prevState => ([...prevState, id]))
    } else {
      setExtraIds(prevState => prevState.filter(extraId => extraId !== id))
    }
    setIsCheckboxClicked(true)
  }

  useEffect(() => {
    let _extraIds = []
    if (productState.product?.extras) {
      _extraIds = productState.product.extras.reduce((ids, extra) => [...ids, extra.id], [])
    }
    setExtraIds(_extraIds)
  }, [])

  useEffect(() => {
    if (!isCheckboxClicked) return
    setIsCheckboxClicked(false)
    handleProductExtraState(extraIds)
  }, [isCheckboxClicked, extraIds])

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
          <h1>{t('PRODUCT_OPTIONS', 'Product options')}</h1>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenAddForm()}
          >
            {t('ADD_PRODUCT_OPTION', 'Add product option')}
          </Button>
        </Header>
        {extrasState?.extras && extrasState?.extras.map(extra => (
          <ExtraOption
            key={extra.id}
            active={extra.id === currentExtra?.id}
          >
            <CheckboxContainer>
              <Checkbox
                checked={extraIds.includes(extra.id) ?? false}
                onChange={e => handleExtraState(extra.id, e.target.checked)}
              />
              <input
                type='text'
                defaultValue={extra.name}
                onChange={(e) => handleChangeExtraInput(e, extra.id)}
              />
            </CheckboxContainer>
            <MoreContainer>
              <Details onClick={() => handleOpenExtraDetails(extra)}>
                <ChevronRight />
              </Details>
            </MoreContainer>
          </ExtraOption>
        ))}
        {isAddMode && (
          <ExtraAddForm
            ref={conatinerRef}
            onSubmit={(e) => {
              e.preventDefault()
              handleAddExtra()
            }}
          >
            <input
              name='name'
              placeholder={t('WRITE_A_NAME', 'Write a name')}
              onChange={(e) => handleChangeAddExtraInput(e)}
              autoComplete='off'
            />
          </ExtraAddForm>
        )}
        <AddButton
          onClick={() => handleOpenAddForm()}
        >
          {t('ADD_PRODUCT_OPTION', 'Add product option')}
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
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
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
