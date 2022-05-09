import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  ToastType,
  useToast,
  ProductExtraOptions as ProductExtraOptionsController
} from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { PlusCircle, XLg, ThreeDots, Image as ImageIcon, ChevronRight } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm, Modal } from '../../Shared'
import { IconButton } from '../../../styles'
import { ProductExtraMetaFields } from '../ProductExtraMetaFields'
import { ProductExtraOptionDetails } from '../ProductExtraOptionDetails'

import {
  MainContainer,
  OptionsContainer,
  Header,
  OptionNameContainer,
  OptionImage,
  ActionSelectorWrapper,
  AddOptionForm,
  OptionsList,
  OptionItem,
  MinimumPurchase,
  MaxPurchase,
  ArrowWrpper
} from './styles'

const ProductExtraOptionsUI = (props) => {
  const {
    open,
    onClose,
    editErrors,
    cleanEditErrors,
    extraState,
    changesState,
    handleChangeImage,
    handleChangeInput,
    handleChangeOptionEnable,
    handleChangeAddOption,
    addChangesState,
    handleAddOption,
    business,
    editOptionId,
    handleDeleteExtra,
    handleUpdateBusinessState,
    handleSucccessDeleteOption,
    handleClickUpdateOption,

    curOption,
    openModal,
    setCurOption,
    setOpenModal,
    handleOpenModal,
    handleChangeExtraName
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const { handleSubmit, register, errors } = useForm()
  const [, { showToast }] = useToast()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isMaxError, setIsMaxError] = useState(false)

  const closeAlert = () => {
    cleanEditErrors()
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeOptionInput = (e, option, min) => {
    const regexp = /^[0-9.\b]+$/
    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        const max = changesState?.changes?.max ? changesState?.changes?.max : option?.max
        if (parseInt(e.target.value) > parseInt(max)) return
      } else {
        if (option?.suboptions?.filter(suboption => suboption?.preselected)?.length > parseInt(e?.target?.value)) {
          setIsMaxError(true)
          showToast(ToastType.Error, t('ERROR_MATCH_MAX_DEFAULT_SUBOPTIONS', 'Max default suboptions length is less than preselected suboptions'))
          return
        }
        setIsMaxError(false)
        const min = changesState?.changes?.min ? changesState?.changes?.min : option?.min
        if (parseInt(e.target.value) < parseInt(min)) return
      }
      handleChangeInput(e, option.id)
    }
  }

  const handleChangeAddOptionInput = (e, min) => {
    if (min) {
      if (parseInt(e.target.value) > parseInt(addChangesState?.max)) return
    } else {
      if (parseInt(e.target.value) < parseInt(addChangesState?.min)) return
    }
    handleChangeAddOption(e)
  }

  const handleFiles = (files, optionId) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }
      handleChangeImage(files[0], optionId)
    }
  }

  const actionSidebar = (value) => {
    if (!value) {
      onClose()
    }
    setIsMenuOpen(value)
  }

  const onSubmit = () => {
    handleAddOption()
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('extra_options').style.width = '100%'
      } else {
        document.getElementById('extra_options').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (Object.keys(editErrors).length) {
      const errorContent = []
      if (editErrors?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (editErrors?.min) errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'))
      if (editErrors?.max) errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    }
  }, [editErrors])

  const handleDeleteExtraClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_EXTRA', 'Are you sure that you want to delete this extra?'),
      handleOnAccept: () => {
        handleDeleteExtra()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  let timeout = null
  const onChangeExtraName = (e) => {
    e.persist()
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      handleChangeExtraName(e, extraState.extra.id)
    }, 500)
  }

  useEffect(() => {
    if (!addChangesState?.name && addChangesState?.min === 1 && addChangesState?.max === 1) {
      setValue('name', addChangesState?.name || '')
      setValue('min', addChangesState?.min || '')
      setValue('max', addChangesState?.max || '')
    }
  }, [addChangesState])

  return (
    <MainContainer id='extra_options'>
      <OptionsContainer>
        <Header>
          <input
            type='text'
            placeholder={t('NAME', '')}
            defaultValue={extraState.extra.name}
            onChange={(e) => onChangeExtraName(e)}
          />
          <div>
            <ActionSelectorWrapper>
              <DropdownButton
                className='product_actions'
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={<ThreeDots />}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item
                  onClick={() => setOpenModal({ ...openModal, metaField: true })}
                >
                  {t('CUSTOM_FIELDS', 'Custom Fields')}
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDeleteExtraClick()}
                >
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionSelectorWrapper>
            <IconButton
              color='black'
              onClick={() => onClose()}
            >
              <XLg />
            </IconButton>
          </div>
        </Header>

        <OptionsList>
          <OptionItem isHeader>
            <OptionNameContainer isHeader>{t('NAME', 'Name')}</OptionNameContainer>
            <MinimumPurchase isHeader>{t('MINIMUM', 'Min')}</MinimumPurchase>
            <MaxPurchase isHeader>{t('MAX', 'Max')}</MaxPurchase>
            <ArrowWrpper />
          </OptionItem>
          {extraState.extra?.options && extraState.extra?.options.map(option => (
            <OptionItem
              key={option.id}
              active={option.id === curOption?.id}
              onClick={() => handleOpenModal(option, 'edit')}
            >
              <OptionNameContainer>
                <OptionImage>
                  {option?.image ? (
                    <img src={option?.image} alt='option image' loading='lazy' />
                  ) : (
                    <ImageIcon />
                  )}
                </OptionImage>
                <span>{option.name}</span>
              </OptionNameContainer>
              <MinimumPurchase>{option?.min}</MinimumPurchase>
              <MaxPurchase>{option?.max}</MaxPurchase>
              <ArrowWrpper>
                <ChevronRight />
              </ArrowWrpper>
            </OptionItem>
          ))}
        </OptionsList>

        <AddOptionForm
          onSubmit={handleSubmit(onSubmit)}
        >
          <OptionNameContainer>
            <input
              name='name'
              value={addChangesState?.name || ''}
              placeholder={t('WRITE_A_NAME', 'Write a name')}
              onChange={(e) => handleChangeAddOption(e)}
              ref={register({
                required: t('NAME_REQUIRED', 'The name is required.')
              })}
              autoComplete='off'
            />
          </OptionNameContainer>
          <input
            name='min'
            value={addChangesState?.min}
            onChange={(e) => handleChangeAddOptionInput(e, true)}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
            ref={register({
              required: t('MIN_PURCHASED_REQUIRED', 'The min is required.')
            })}
            autoComplete='off'
          />
          <input
            name='max'
            value={addChangesState?.max}
            onChange={(e) => handleChangeAddOptionInput(e, false)}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
            ref={register({
              required: t('MAX_PURCHASED_REQUIRED', 'The max is required.')
            })}
            autoComplete='off'
          />
          <IconButton
            type='submit'
          >
            <PlusCircle />
          </IconButton>
        </AddOptionForm>
      </OptionsContainer>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
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
      {openModal?.edit && (
        <Modal
          width='70%'
          open={openModal?.edit}
          onClose={() => {
            setOpenModal({ ...openModal, edit: false })
            setCurOption(false)
            setIsMaxError(false)
          }}
        >
          <ProductExtraOptionDetails
            business={business}
            extra={extraState.extra}
            option={curOption}
            optionChangesState={editOptionId === curOption.id ? changesState : {}}
            handleOptionFiles={handleFiles}
            handleChangeOptionInput={handleChangeInput}
            handleChangeNumberInput={handleChangeOptionInput}
            handleChangeOptionEnable={handleChangeOptionEnable}
            onClose={() => {
              setOpenModal({ ...openModal, edit: false })
              setCurOption(false)
              setIsMaxError(false)
            }}
            handleUpdateBusinessState={handleUpdateBusinessState}
            handleSucccessDeleteOption={handleSucccessDeleteOption}
            isMaxError={isMaxError}
            handleClickUpdateOption={handleClickUpdateOption}
          />
        </Modal>
      )}
      <Modal
        width='70%'
        open={openModal?.metaField}
        onClose={() => setOpenModal({ ...openModal, metaField: false })}
      >
        <ProductExtraMetaFields
          businessId={business.id}
          extraId={extraState.extra.id}
        />
      </Modal>
    </MainContainer>
  )
}

export const ProductExtraOptions = (props) => {
  const productExtraOptionsProps = {
    ...props,
    UIComponent: ProductExtraOptionsUI
  }
  return <ProductExtraOptionsController {...productExtraOptionsProps} />
}
