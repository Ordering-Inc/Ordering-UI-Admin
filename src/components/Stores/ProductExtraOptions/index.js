import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  ProductExtraOptions as ProductExtraOptionsController
} from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { PlusCircle, XLg, ThreeDots, Image as ImageIcon } from 'react-bootstrap-icons'
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
  OptionsTable,
  OptionNameContainer,
  OptionImage,
  ActionsContainer,
  ActionSelectorWrapper
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
    cleanChangesState,
    editOptionId,
    handleDeleteExtra,
    handleUpdateBusinessState,
    handleSucccessDeleteOption
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [curOption, setCurOption] = useState(null)
  const [openModal, setOpenModal] = useState({})

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
    document.getElementById('extra_options').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  const handleAddOptionClick = () => {
    if (addChangesState?.name === '' || !addChangesState?.name || addChangesState?.min === '' || addChangesState?.max === '') {
      const errorContent = []
      if (addChangesState?.name === '' || !addChangesState?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (addChangesState?.min === '') errorContent.push(t('MIN_PURCHASED_REQUIRED', 'The min is required.'))
      if (addChangesState?.max === '') errorContent.push(t('MAX_PURCHASED_REQUIRED', 'The max is required.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    } else {
      handleAddOption()
    }
  }

  const handleOpenModal = (option, name) => {
    cleanChangesState({ ...changesState, changes: {} })
    setCurOption(option)
    setOpenModal({ ...openModal, [name]: true })
  }

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

  return (
    <MainContainer id='extra_options'>
      <OptionsContainer>
        <Header>
          <h1>{extraState.extra.name}</h1>
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
        <OptionsTable>
          <thead>
            <tr>
              <th>{t('NAME', 'Name')}</th>
              <th>{t('MIN', 'Min')}</th>
              <th>{t('MAX', 'Max')}</th>
              <th />
            </tr>
          </thead>
          {extraState.extra?.options && extraState.extra?.options.map(option => (
            <tbody
              key={option.id}
              onClick={() => handleOpenModal(option, 'edit')}
            >
              <tr>
                <td>
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
                </td>
                <td>{option?.min}</td>
                <td>{option?.max}</td>
                <td />
              </tr>
            </tbody>
          ))}
          <tbody className='add_option'>
            <tr>
              <td>
                <OptionNameContainer>
                  <input
                    name='name'
                    value={addChangesState?.name || ''}
                    placeholder={t('WRITE_A_NAME', 'Write a name')}
                    onChange={(e) => handleChangeAddOption(e)}
                  />
                </OptionNameContainer>
              </td>
              <td>
                <input
                  name='min'
                  value={addChangesState?.min}
                  onChange={(e) => handleChangeAddOptionInput(e, true)}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </td>
              <td>
                <input
                  name='max'
                  value={addChangesState?.max}
                  onChange={(e) => handleChangeAddOptionInput(e, false)}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </td>
              <td>
                <ActionsContainer>
                  <PlusCircle
                    onClick={() => handleAddOptionClick()}
                  />
                </ActionsContainer>
              </td>
            </tr>
          </tbody>
        </OptionsTable>
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
          onClose={() => setOpenModal({ ...openModal, edit: false })}
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
            onClose={() => setOpenModal({ ...openModal, edit: false })}
            handleUpdateBusinessState={handleUpdateBusinessState}
            handleSucccessDeleteOption={handleSucccessDeleteOption}
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
