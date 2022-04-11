import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick
} from 'ordering-components-admin'
import {
  Circle as UnCheckIcon,
  ThreeDots,
  RecordCircleFill as CheckIcon
} from 'react-bootstrap-icons'
import BiImage from '@meronex/icons/bi/BiImage'
import { Alert, Confirm } from '../../Shared'
import { Input, Switch } from '../../../styles'
import { bytesConverter } from '../../../utils'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import {
  SubOptionContainer,
  LeftSubOptionContent,
  SubOptionImage,
  UploadImageIconContainer,
  UploadImageIcon,
  InputWrapper,
  RightSubOptionContent,
  ActionsContainer,
  EnableWrapper,
  ActionSelectorWrapper
} from './styles'

export const ProductExtraSuboption = (props) => {
  const {
    subOption,
    optionState,
    editSubOptionId,
    handleChangeInput,
    settingChangeState,
    changesState,
    setSelectedSubOptionId,
    openModal,
    setOpenModal,
    handleChangeSubOptionImage,
    handleChangeDefaultSuboption,
    handleChangeSubOptionEnable,
    handleDeteteSubOption,
    handleUpdateSubOption
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const nameRef = useRef()
  const priceRef = useRef()

  const [editErrors, setEditErrors] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleClickSubOptionImage = (id) => {
    document.getElementById(id).click()
  }

  const handleSubOptionFiles = (files, subOptionId) => {
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
      handleChangeSubOptionImage(files[0], subOptionId)
    }
  }

  const handleDeteteClick = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteSubOption(id)
      }
    })
  }

  const handleClickOutside = (e) => {
    if (editSubOptionId === subOption.id) {
      if (!nameRef.current?.contains(e.target) && changesState?.changes?.name === '') {
        setEditErrors({
          name: changesState?.changes?.name === '',
          price: changesState?.changes?.price === ''
        })
        return
      }
      if (!priceRef.current?.contains(e.target) && changesState?.changes?.price === '') {
        setEditErrors({
          name: changesState?.changes?.name === '',
          price: changesState?.changes?.price === ''
        })
        return
      }
      handleUpdateSubOption()
    }
  }

  useEffect(() => {
    if (editSubOptionId !== subOption.id) return
    window.addEventListener('mouseup', handleClickOutside)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
    }
  }, [editSubOptionId, subOption.id, changesState])

  useEffect(() => {
    if (Object.keys(editErrors).length) {
      const errorContent = []
      if (editErrors?.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'))
      if (editErrors?.price) errorContent.push(t('PRICE_REQUIRED', 'The price is required.'))
      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        })
      }
    }
  }, [editErrors])

  return (
    <SubOptionContainer>
      <LeftSubOptionContent>
        <SubOptionImage
          onClick={() => handleClickSubOptionImage(`suboption_image_${subOption.id}`)}
        >
          <ExamineClick
            onFiles={files => handleSubOptionFiles(files, subOption.id)}
            childId={`suboption_image_${subOption.id}`}
            accept='image/png, image/jpeg, image/jpg'
            disabled={optionState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleSubOptionFiles(dataTransfer.files, subOption.id)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={optionState.loading}
            >
              {
                (changesState?.result?.image && editSubOptionId === subOption.id)
                  ? (<img src={changesState?.result?.image} alt='sub option image' loading='lazy' />)
                  : (changesState?.changes?.image && editSubOptionId === subOption.id)
                    ? (<img src={changesState?.changes?.image} alt='sub option image' loading='lazy' />)
                    : subOption?.image && (<img src={subOption?.image} alt='sub option image' loading='lazy' />)
              }
              <UploadImageIconContainer>
                <UploadImageIcon small>
                  <BiImage />
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </SubOptionImage>
        <InputWrapper>
          <Input
            ref={nameRef}
            name='name'
            autoComplete='off'
            defaultValue={subOption.name}
            onChange={(e) => handleChangeInput(e, subOption.id)}
          />
        </InputWrapper>
      </LeftSubOptionContent>
      <RightSubOptionContent>
        <InputWrapper>
          <Input
            ref={priceRef}
            name='price'
            defaultValue={subOption?.price}
            onChange={(e) => handleChangeInput(e, subOption.id)}
            onKeyPress={(e) => {
              if (!/^[0-9.]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputWrapper>
        {(typeof settingChangeState?.changes?.with_half_option !== 'undefined' ? settingChangeState?.changes?.with_half_option : optionState?.option?.with_half_option) && (
          <InputWrapper>
            <Input
              name='half_price'
              defaultValue={subOption?.half_price}
              onChange={(e) => handleChangeInput(e, subOption.id)}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </InputWrapper>
        )}
        {(typeof settingChangeState?.changes?.allow_suboption_quantity !== 'undefined' ? settingChangeState?.changes?.allow_suboption_quantity : optionState?.option?.allow_suboption_quantity) && (
          <InputWrapper>
            <Input
              name='max'
              defaultValue={subOption?.max}
              onChange={(e) => handleChangeInput(e, subOption.id)}
              onKeyPress={(e) => {
                if (!/^[0-9.]$/.test(e.key)) {
                  e.preventDefault()
                }
              }}
            />
          </InputWrapper>
        )}
        <InputWrapper maxHeight disabled={optionState?.loading}>
          <div
            name='preselected'
            className={subOption?.preselected ? 'checked default' : 'default'}
          >
            <span onClick={(e) => handleChangeDefaultSuboption(subOption.id)}>
              {subOption?.preselected ? <CheckIcon /> : <UnCheckIcon />}
            </span>
          </div>
        </InputWrapper>
        <ActionsContainer>
          <EnableWrapper>
            <span>{t('ENABLE', 'Enable')}</span>
            <Switch
              defaultChecked={subOption?.enabled}
              onChange={enabled => handleChangeSubOptionEnable(enabled, subOption.id)}
            />
          </EnableWrapper>
          <ActionSelectorWrapper>
            <DropdownButton
              className='product_actions'
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => {
                  setSelectedSubOptionId(subOption?.id)
                  setOpenModal({ ...openModal, subOptionMetaFields: true })
                }}
              >
                {t('CUSTOM_FIELDS', 'Custom fields')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleDeteteClick(subOption.id)}>{t('DELETE', 'Delete')}</Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </ActionsContainer>
      </RightSubOptionContent>

      <Alert
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ ...alertState, open: false })}
        onAccept={() => setAlertState({ ...alertState, open: false })}
        closeOnBackdrop={false}
      />
      <Confirm
        width='600px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </SubOptionContainer>
  )
}
