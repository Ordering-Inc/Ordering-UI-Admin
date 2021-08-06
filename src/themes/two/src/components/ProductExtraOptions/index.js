import React, { useState, useEffect } from 'react'
import { useLanguage, DragAndDrop, ExamineClick, ProductExtraOptions as ProductExtraOptionsController } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { PlusCircle, XLg } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BiImage from '@meronex/icons/bi/BiImage'
import { bytesConverter } from '../../../../../utils'
import { Alert, Confirm } from '../Confirm'
import { ProductExtraMetaFields } from '../ProductExtraMetaFields'
import { Modal } from '../Modal'
import { ProductExtraOptionDetails } from '../ProductExtraOptionDetails'
import { ProductExtraOptionMetaFields } from '../ProductExtraOptionMetaFields'
import { IconButton } from '../../styles/Buttons'

import {
  MainContainer,
  OptionsContainer,
  Header,
  OptionsTable,
  OptionNameContainer,
  OptionImage,
  UploadImageIconContainer,
  ActionsContainer,
  EnableWrapper,
  DropDownWrapper
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
    handleChangeAddOptionEnable,
    handleDeteteOption,
    business,
    cleanChangesState,
    editOptionId
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ActionIcon = <FiMoreVertical />
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
    const regexp = /^[0-9.\b]+$/
    if (e.target.value === '' || regexp.test(e.target.value)) {
      if (min) {
        if (parseInt(e.target.value) > parseInt(addChangesState?.max)) return
      } else {
        if (parseInt(e.target.value) < parseInt(addChangesState?.min)) return
      }
      handleChangeAddOption(e)
    }
  }

  const handleClickImage = (idName) => {
    document.getElementById(idName).click()
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

  const handleDeteteClick = (optionId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteOption(optionId)
      }
    })
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

  return (
    <MainContainer id='extra_options'>
      <OptionsContainer>
        <Header>
          <h1>{extraState.extra.name}</h1>
          <IconButton
            color='black'
            onClick={() => onClose()}
          >
            <XLg />
          </IconButton>
        </Header>
        <OptionsTable>
          <thead>
            <tr>
              <th>{t('NAME', 'Name')}</th>
              <th>{t('MIN', 'Min')}</th>
              <th>{t('MAX', 'Max')}</th>
              <th>{t('ACTIONS', 'Actions')}</th>
            </tr>
          </thead>
          {extraState.extra?.options.map(option => (
            <tbody key={option.id}>
              <tr>
                <td>
                  <OptionNameContainer>
                    <OptionImage
                      onClick={() => handleClickImage(`option_image_${option.id}`)}
                    >
                      <ExamineClick
                        onFiles={files => handleFiles(files, option.id)}
                        childId={`option_image_${option.id}`}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={extraState.loading}
                      >
                        <DragAndDrop
                          onDrop={dataTransfer => handleFiles(dataTransfer.files, option.id)}
                          accept='image/png, image/jpeg, image/jpg'
                          disabled={extraState.loading}
                        >
                          {
                            (changesState?.result?.image && editOptionId === option.id)
                              ? (<img src={changesState?.result?.image} alt='option image' loading='lazy' />)
                              : (changesState?.changes?.image && editOptionId === option.id)
                                ? (<img src={changesState?.changes?.image} alt='option image' loading='lazy' />)
                                : option?.image && (<img src={option?.image} alt='option image' loading='lazy' />)
                          }
                          <UploadImageIconContainer>
                            <BiImage />
                          </UploadImageIconContainer>
                        </DragAndDrop>
                      </ExamineClick>
                    </OptionImage>
                    <input
                      name='name'
                      defaultValue={option.name}
                      onChange={(e) => handleChangeInput(e, option.id)}
                    />
                  </OptionNameContainer>
                </td>
                <td>
                  <input
                    name='min'
                    value={
                      (editOptionId === option.id)
                        ? changesState?.changes?.min ?? option?.min
                        : option?.min
                    }
                    onChange={(e) => handleChangeOptionInput(e, option, true)}
                  />
                </td>
                <td>
                  <input
                    name='max'
                    value={
                      (editOptionId === option.id)
                        ? changesState?.changes?.max ?? option?.max
                        : option?.max
                    }
                    onChange={(e) => handleChangeOptionInput(e, option, false)}
                  />
                </td>
                <td>
                  <ActionsContainer>
                    <EnableWrapper>
                      <span>{t('ENABLE', 'Enable')}</span>
                      <Switch
                        defaultChecked={option?.enabled}
                        onChange={enabled => handleChangeOptionEnable(enabled, option.id)}
                      />
                    </EnableWrapper>
                    <DropDownWrapper>
                      <DropdownButton
                        menuAlign={theme?.rtl ? 'left' : 'right'}
                        title={ActionIcon}
                        id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                      >
                        <Dropdown.Item onClick={() => handleOpenModal(option, 'edit')}>{t('EDIT', 'Edit')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleOpenModal(option, 'metaFields')}>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeteteClick(option.id)}>{t('DELETE', 'Delete')}</Dropdown.Item>
                      </DropdownButton>
                    </DropDownWrapper>
                  </ActionsContainer>
                </td>
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
                />
              </td>
              <td>
                <input
                  name='max'
                  value={addChangesState?.max}
                  onChange={(e) => handleChangeAddOptionInput(e, false)}
                />
              </td>
              <td>
                <ActionsContainer>
                  <EnableWrapper>
                    <span>{t('ENABLE', 'Enable')}</span>
                    <Switch
                      defaultChecked={addChangesState?.enabled}
                      onChange={handleChangeAddOptionEnable}
                    />
                  </EnableWrapper>
                  <PlusCircle
                    onClick={() => handleAddOptionClick()}
                  />
                </ActionsContainer>
              </td>
            </tr>
          </tbody>
        </OptionsTable>
      </OptionsContainer>
      <ProductExtraMetaFields
        businessId={business.id}
        extraId={extraState.extra.id}
      />
      <Alert
        title={t('ORDERING', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
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
          />
        </Modal>
      )}
      {openModal?.metaFields && (
        <Modal
          width='70%'
          open={openModal?.metaFields}
          onClose={() => setOpenModal({ ...openModal, metaFields: false })}
        >
          <ProductExtraOptionMetaFields
            businessId={business.id}
            extraId={extraState.extra.id}
            optionId={curOption.id}
          />
        </Modal>
      )}
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
