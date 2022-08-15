import React, { useState, useEffect } from 'react'
import { useLanguage, DragAndDrop, ExamineClick } from 'ordering-components-admin'
import { Circle as UnCheckIcon, ThreeDots, RecordCircleFill as CheckIcon } from 'react-bootstrap-icons'
import BiImage from '@meronex/icons/bi/BiImage'
import { Alert, Confirm, ImageCrop, Modal } from '../../Shared'
import { Input, Switch } from '../../../styles'
import { bytesConverter } from '../../../utils'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
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
  ActionSelectorWrapper,
  DragImageWrapper
} from './styles'

export const ProductExtraSuboption = (props) => {
  const {
    subOption,
    optionState,
    editSubOptionId,
    settingChangeState,
    changesState,
    setSelectedSubOptionId,
    openModal,
    setOpenModal,
    handleChangeDefaultSuboption,
    handleDeteteSubOption,
    handleUpdateSubOption,

    isLastSubOption,
    dragoverSubOptionId,
    isSubOptionsBottom,
    handleDragStart,
    hanldeDragOver,
    handleDrop,
    handleDragEnd
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { handleSubmit, errors, control } = useForm()
  const [timer, setTimer] = useState(null)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [formState, setFormState] = useState({ })

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
      const reader = new window.FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        setCropState({ name: 'image', data: reader.result, open: true, id: subOptionId })
      }
      reader.onerror = error => console.log(error)
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

  const handleChangePhoto = (croppedImg) => {
    setFormState({
      ...formState,
      image: croppedImg
    })
    setCropState({ name: null, data: null, open: false })
  }

  const onSubmit = () => {
    handleUpdateSubOption({
      id: subOption.id,
      ...formState
    })
  }

  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (!Object.keys(formState).length) return
    clearTimeout(timer)
    const _timer = setTimeout(() => {
      onSubmit()
    }, 500)
    setTimer(_timer)
  }, [formState])

  return (
    <SubOptionContainer
      onSubmit={handleSubmit(onSubmit)}
      isDragOver={dragoverSubOptionId === subOption.id}
      isBorderBottom={isSubOptionsBottom && isLastSubOption}
      onDragOver={e => hanldeDragOver(e, subOption, isLastSubOption)}
      onDrop={e => handleDrop(e, subOption)}
      onDragEnd={handleDragEnd}
      className='draggable-suboption'
    >
      <LeftSubOptionContent>
        <DragImageWrapper>
          <img
            src={theme.images.icons?.sixDots}
            alt='six dots'
            draggable
            onDragStart={e => handleDragStart(e, subOption)}
          />
        </DragImageWrapper>
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
          <Controller
            name='name'
            control={control}
            render={({ onChange, value }) => (
              <Input
                name='name'
                autoComplete='off'
                value={value}
                onChange={e => {
                  onChange(e.target.vaue)
                  handleChangeInput(e)
                }}
              />
            )}
            defaultValue={subOption.name}
            rules={{ required: t('NAME_REQUIRED', 'The name is required.') }}
          />
        </InputWrapper>
      </LeftSubOptionContent>
      <RightSubOptionContent>
        <InputWrapper>
          <Controller
            name='price'
            control={control}
            render={({ onChange, value }) => (
              <Input
                name='price'
                autoComplete='off'
                value={value}
                onChange={(e) => {
                  onChange(e.target.value)
                  handleChangeInput(e)
                }}
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
            )}
            defaultValue={subOption?.price}
            rules={{ required: t('PRICE_REQUIRED', 'The price is required.') }}
          />
        </InputWrapper>
        {(typeof settingChangeState?.changes?.with_half_option !== 'undefined' ? settingChangeState?.changes?.with_half_option : optionState?.option?.with_half_option) && (
          <InputWrapper>
            <Controller
              name='half_price'
              control={control}
              render={({ onChange, value }) => (
                <Input
                  name='half_price'
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value)
                    handleChangeInput(e)
                  }}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              )}
              defaultValue={subOption?.half_price}
            />
          </InputWrapper>
        )}
        {(typeof settingChangeState?.changes?.allow_suboption_quantity !== 'undefined' ? settingChangeState?.changes?.allow_suboption_quantity : optionState?.option?.allow_suboption_quantity) && (
          <InputWrapper>
            <Controller
              name='half_price'
              control={control}
              render={({ onChange, value }) => (
                <Input
                  name='max'
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value)
                    handleChangeInput(e)
                  }}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              )}
              defaultValue={subOption?.max}
            />
          </InputWrapper>
        )}
        <InputWrapper maxHeight disabled={optionState?.loading}>
          <div
            name='preselected'
            className={subOption?.preselected ? 'checked default' : 'default'}
          >
            <span className='radio' onClick={(e) => handleChangeDefaultSuboption(subOption.id)}>
              {subOption?.preselected ? <CheckIcon /> : <UnCheckIcon />}
            </span>
          </div>
        </InputWrapper>
        <ActionsContainer>
          <EnableWrapper>
            <span>{t('ENABLE', 'Enable')}</span>
            <Switch
              defaultChecked={subOption?.enabled}
              onChange={enabled => setFormState({ ...formState, enabled: enabled })}
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
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('IMAGE_CROP', 'Image crop')}
        open={cropState?.open}
        onClose={() => setCropState({ ...cropState, open: false })}
        className='ordering-img-crop'
      >
        <ImageCrop
          photo={cropState?.data}
          handleChangePhoto={handleChangePhoto}
        />
      </Modal>
    </SubOptionContainer>
  )
}
