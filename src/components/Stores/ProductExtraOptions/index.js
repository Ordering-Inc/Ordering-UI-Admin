import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  ProductExtraOptions as ProductExtraOptionsController
} from 'ordering-components-admin'
import { useForm, Controller } from 'react-hook-form'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { PlusCircle, XLg, ThreeDots, Image as ImageIcon, ChevronRight } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm, Modal, ImageCrop } from '../../Shared'
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
    curOption,
    openModal,
    setCurOption,
    setOpenModal,
    handleOpenModal,
    handleChangeExtraName,
    handleChangeItem
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const { control, handleSubmit, errors, setValue } = useForm({
    defaultValues: addChangesState
  })

  const [extraName, setExtraName] = useState(extraState.extra?.name || '')
  const [timer, setTimer] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isMaxError, setIsMaxError] = useState(false)
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
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

      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: 'image', data: reader.result, open: true, id: optionId })
      }
      reader.onerror = error => console.log(error)

      handleChangeImage(files[0], optionId)
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg }, cropState?.id)
    setCropState({ name: null, data: null, open: false })
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

  const onChangeExtraName = (e) => {
    e.persist()
    clearTimeout(timer)
    setExtraName(e.target.value)
    const _timer = setTimeout(function () {
      handleChangeExtraName(e, extraState.extra.id)
    }, 750)
    setTimer(_timer)
  }

  useEffect(() => {
    if (!addChangesState?.name && addChangesState?.min === 1 && addChangesState?.max === 1) {
      setValue('name', addChangesState?.name || '')
      setValue('min', addChangesState?.min || '')
      setValue('max', addChangesState?.max || '')
    }
  }, [addChangesState])

  useEffect(() => {
    setExtraName(extraState.extra?.name)
  }, [extraState.extra?.name])

  return (
    <MainContainer id='extra_options'>
      <OptionsContainer>
        <Header>
          <input
            type='text'
            placeholder={t('NAME', '')}
            value={extraName}
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
            <Controller
              name='name'
              control={control}
              render={({ onChange, value }) => (
                <input
                  name='name'
                  placeholder={t('WRITE_A_NAME', 'Write a name')}
                  value={value}
                  onChange={(e) => {
                    onChange(e)
                    handleChangeAddOption(e)
                  }}
                  autoComplete='off'
                />
              )}
              rules={{
                required: t('NAME_REQUIRED', 'The name is required.')
              }}
            />
          </OptionNameContainer>
          <Controller
            name='min'
            control={control}
            render={({ onChange, value }) => (
              <input
                name='min'
                value={value}
                onChange={(e) => {
                  onChange(e)
                  handleChangeAddOptionInput(e, true)
                }}
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                autoComplete='off'
              />
            )}
            rules={{
              required: t('MIN_PURCHASED_REQUIRED', 'The min is required.')
            }}
          />
          <Controller
            name='max'
            control={control}
            render={({ onChange, value }) => (
              <input
                name='max'
                value={value}
                onChange={(e) => {
                  onChange(e)
                  handleChangeAddOptionInput(e, false)
                }}
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                autoComplete='off'
              />
            )}
            rules={{
              required: t('MAX_PURCHASED_REQUIRED', 'The max is required.')
            }}
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
            handleChangeOptionEnable={handleChangeOptionEnable}
            onClose={() => {
              setOpenModal({ ...openModal, edit: false })
              setCurOption(false)
              setIsMaxError(false)
            }}
            handleUpdateBusinessState={handleUpdateBusinessState}
            handleSucccessDeleteOption={handleSucccessDeleteOption}
            isMaxError={isMaxError}
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
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onClose={() => setCropState({ ...cropState, open: false })}
        className='ordering-image-crop'
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
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
