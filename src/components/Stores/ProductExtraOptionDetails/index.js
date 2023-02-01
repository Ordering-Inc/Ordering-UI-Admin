import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  ProductExtraOptionDetails as ProductExtraOptionDetailsController
} from 'ordering-components-admin'
import BiImage from '@meronex/icons/bi/BiImage'
import { IconButton, Input } from '../../../styles'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm, Modal, ImageCrop } from '../../Shared'

import { ProductExtraOptionMetaFields } from '../ProductExtraOptionMetaFields'
import { ProductExtraSubOptionMetaFields } from '../ProductExtraSubOptionMetaFields'
import {
  PlusCircle,
  ThreeDots
} from 'react-bootstrap-icons'
import { useForm, Controller } from 'react-hook-form'
import { ProductExtraSuboption } from '../ProductExtraSuboption'
import { ProductExtraOptionForm } from '../ProductExtraOptionForm'
import { ProductOptionExternalId } from '../ProductOptionExternalId'

import {
  MainContainer,
  Header,
  ActionSelectorWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  InputWrapper,
  ActionsContainer,
  Dvider,
  ModifierOptionsContainer,
  SubOptionImage,
  LeftSubOptionContent,
  RightSubOptionContent,
  AdddSubOptionForm,
  AddNewOptionButton,
  SubOptionContainer
} from './styles'

const ProductExtraOptionDetailsUI = (props) => {
  const {
    optionState,
    optionChangesState,
    handleOptionFiles,
    handleChangeOptionInput,
    handleChangeOptionEnable,
    changesState,
    editSubOptionId,
    handleChangeSubOptionImage,
    handleDeteteSubOption,
    handleOptionSetting,
    settingChangeState,
    conditionalOptions,
    conditionalSubOptions,
    conditionalOptionId,
    conditionalSubOptionId,
    handleChangeConditionalOption,
    handleChangeConditionalSubOption,
    handleChangeDefaultSuboption,
    handleUpdateSubOption,
    handleUpdateOption,
    business,
    extra,
    handleAddOption,
    handleDeteteOption,
    isMaxError,
    handleChangeItem,
    isAddForm,
    setIsAddForm,

    dragoverSubOptionId,
    isSubOptionsBottom,
    handleDragStart,
    hanldeDragOver,
    handleDrop,
    handleDragEnd
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openModal, setOpenModal] = useState({})
  const [selectedSubOptionId, setSelectedSubOptionId] = useState(null)
  const { handleSubmit, register, errors, control, setValue } = useForm()
  const [cropState, setCropState] = useState({ name: null, data: null, open: false })
  const [externalId, setExternalId] = useState()

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
        if (!subOptionId) {
          setValue('image', reader.result)
        }
      }
      reader.onerror = error => console.log(error)

      if (subOptionId) {
        handleChangeSubOptionImage(files[0], subOptionId)
      }
    }
  }

  const handleChangePhoto = (croppedImg) => {
    handleChangeItem({ [cropState?.name]: croppedImg }, cropState?.id)
    setCropState({ name: null, data: null, open: false })
  }

  const handleDeleteOption = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OPTION', 'Are you sure that you want to delete this option?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeteteOption()
      }
    })
  }

  const handleEnterAddSuboption = (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      handleSubmit(handleAddOption)()
    }
  }

  const handleUpdateExternalId = () => {
    handleUpdateOption({ external_id: externalId })
    setOpenModal({ ...openModal, externalId: false })
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
    setExternalId(optionState?.option?.external_id)
  }, [optionState?.option?.external_id])

  return (
    <MainContainer>
      <Header>
        <h1>{t('PRODUCT_OPTION', 'Product option')}</h1>
        <ActionSelectorWrapper>
          <DropdownButton
            className='product_actions'
            menuAlign={theme?.rtl ? 'left' : 'right'}
            title={<ThreeDots />}
            id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
          >
            <Dropdown.Item
              onClick={() => setOpenModal({ ...openModal, option: true })}
            >
              {t('CUSTOM_FIELDS', 'Custom Fields')}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setOpenModal({ ...openModal, externalId: true })}
            >
              {t('EXTERNAL_ID', 'External ID')}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleDeleteOption()}
            >
              {t('DELETE', 'Delete')}
            </Dropdown.Item>
          </DropdownButton>
        </ActionSelectorWrapper>
      </Header>

      <ProductExtraOptionForm
        optionState={optionState}
        optionChangesState={optionChangesState}
        isMaxError={isMaxError}
        handleOptionFiles={handleOptionFiles}
        handleChangeOptionInput={handleChangeOptionInput}
        handleChangeOptionEnable={handleChangeOptionEnable}
        handleOptionSetting={handleOptionSetting}
        conditionalOptions={conditionalOptions}
        conditionalSubOptions={conditionalSubOptions}
        conditionalOptionId={conditionalOptionId}
        conditionalSubOptionId={conditionalSubOptionId}
        handleChangeConditionalOption={handleChangeConditionalOption}
        handleChangeConditionalSubOption={handleChangeConditionalSubOption}
        handleUpdateOption={handleUpdateOption}
      />

      <Dvider />
      <ModifierOptionsContainer>
        <h2>{t('MODIFIER_OPTIONS', 'Modifier options')}</h2>
        <SubOptionContainer>
          <LeftSubOptionContent header>
            <SubOptionImage />
            <InputWrapper header>
              <label>{t('NAME', 'Name')}</label>
              <Input />
            </InputWrapper>
          </LeftSubOptionContent>
          <RightSubOptionContent>
            <InputWrapper header>
              <label>{t('PRICE', 'Price')}</label>
              <Input />
            </InputWrapper>
            {(typeof settingChangeState?.changes?.with_half_option !== 'undefined' ? settingChangeState?.changes?.with_half_option : optionState?.option?.with_half_option) && (
              <InputWrapper header>
                <label>{t('HALF_PRICE', 'Half price')}</label>
                <Input />
              </InputWrapper>
            )}
            {(typeof settingChangeState?.changes?.allow_suboption_quantity !== 'undefined' ? settingChangeState?.changes?.allow_suboption_quantity : optionState?.option?.allow_suboption_quantity) && (
              <InputWrapper header>
                <label>{t('MAX', 'Max')}</label>
                <Input />
              </InputWrapper>
            )}
            <InputWrapper header>
              <label>{t('PRESELECT', 'Preselect')}</label>
            </InputWrapper>
            <ActionsContainer header />
          </RightSubOptionContent>
        </SubOptionContainer>
        {optionState?.option?.suboptions?.sort((a, b) => a.rank - b.rank).map((subOption, index) => {
          const isLastSubOption = index === optionState?.option?.suboptions.length - 1
          return (
            <ProductExtraSuboption
              key={subOption.id}
              subOption={subOption}
              optionState={optionState}
              editSubOptionId={editSubOptionId}
              settingChangeState={settingChangeState}
              changesState={changesState}
              setSelectedSubOptionId={setSelectedSubOptionId}
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleChangeDefaultSuboption={handleChangeDefaultSuboption}
              handleDeteteSubOption={handleDeteteSubOption}
              handleUpdateSubOption={handleUpdateSubOption}
              isLastSubOption={isLastSubOption}
              dragoverSubOptionId={dragoverSubOptionId}
              isSubOptionsBottom={isSubOptionsBottom}
              handleDragStart={handleDragStart}
              hanldeDragOver={hanldeDragOver}
              handleDrop={handleDrop}
              handleDragEnd={handleDragEnd}
            />
          )
        })}

        {isAddForm && (
          <AdddSubOptionForm onSubmit={handleSubmit(handleAddOption)}>
            <LeftSubOptionContent header>
              <Controller
                name='image'
                control={control}
                render={() => (
                  <SubOptionImage
                    onClick={() => handleClickSubOptionImage('add_suboption_image')}
                  >
                    <ExamineClick
                      onFiles={files => handleSubOptionFiles(files, null)}
                      childId='add_suboption_image'
                      accept='image/png, image/jpeg, image/jpg'
                      disabled={optionState.loading}
                    >
                      <DragAndDrop
                        onDrop={dataTransfer => handleSubOptionFiles(dataTransfer.files, 'add_suboption_image')}
                        accept='image/png, image/jpeg, image/jpg'
                        disabled={optionState.loading}
                      >
                        {
                          (changesState?.result?.image && editSubOptionId === null)
                            ? (<img src={changesState?.result?.image} alt='sub option image' loading='lazy' />)
                            : (changesState?.changes?.image && editSubOptionId === null) && (<img src={changesState?.changes?.image} alt='sub option image' loading='lazy' />)
                        }
                        <UploadImageIconContainer>
                          <UploadImageIcon small>
                            <BiImage />
                          </UploadImageIcon>
                        </UploadImageIconContainer>
                      </DragAndDrop>
                    </ExamineClick>
                  </SubOptionImage>
                )}
                defaultValue=''
              />
              <InputWrapper primary={optionState?.option?.suboptions?.length === 0}>
                <Input
                  name='name'
                  autoComplete='off'
                  placeholder={t('NAME', 'Name')}
                  defaultValue={
                    ((editSubOptionId === null) && changesState?.changes?.name) || ''
                  }
                  ref={register({
                    required: t('NAME_REQUIRED', 'The name is required.')
                  })}
                />
              </InputWrapper>
            </LeftSubOptionContent>
            <RightSubOptionContent>
              <InputWrapper primary={optionState?.option?.suboptions?.length === 0}>
                <Input
                  name='price'
                  placeholder={t('PRICE', 'Price')}
                  defaultValue={
                    ((editSubOptionId === null) && changesState?.changes?.price) || ''
                  }
                  ref={register()}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                    handleEnterAddSuboption(e)
                  }}
                />
              </InputWrapper>
              {(typeof settingChangeState?.changes?.with_half_option !== 'undefined' ? settingChangeState?.changes?.with_half_option : optionState?.option?.with_half_option) && (
                <InputWrapper primary={optionState?.option?.suboptions?.length === 0}>
                  <Input
                    name='half_price'
                    placeholder={t('HALF_PRICE', 'Half price')}
                    defaultValue={
                      ((editSubOptionId === null) && changesState?.changes?.half_price) || ''
                    }
                    ref={register()}
                    onKeyPress={(e) => {
                      if (!/^[0-9.]$/.test(e.key)) {
                        e.preventDefault()
                      }
                      handleEnterAddSuboption(e)
                    }}
                  />
                </InputWrapper>
              )}
              {(typeof settingChangeState?.changes?.allow_suboption_quantity !== 'undefined' ? settingChangeState?.changes?.allow_suboption_quantity : optionState?.option?.allow_suboption_quantity) && (
                <InputWrapper primary={optionState?.option?.suboptions?.length === 0}>
                  <Input
                    name='max'
                    placeholder={t('MAX', 'Max')}
                    defaultValue={
                      ((editSubOptionId === null) && changesState?.changes?.max) || ''
                    }
                    ref={register()}
                    onKeyPress={(e) => {
                      if (!/^[0-9.]$/.test(e.key)) {
                        e.preventDefault()
                      }
                      handleEnterAddSuboption(e)
                    }}
                  />
                </InputWrapper>
              )}
              <InputWrapper maxHeight>
                <div
                  name='preselected'
                  className='default'
                />
              </InputWrapper>
              <ActionsContainer>
                <IconButton
                  color='primary'
                  type='submit'
                >
                  <PlusCircle />
                </IconButton>
              </ActionsContainer>
            </RightSubOptionContent>
          </AdddSubOptionForm>
        )}
        {!isAddForm && (
          <AddNewOptionButton>
            <span
              className='add-option-btn'
              onClick={() => setIsAddForm(true)}
            >
              {t('ADD_SUBOPTION', 'Add suboption')}
            </span>
          </AddNewOptionButton>
        )}
      </ModifierOptionsContainer>
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
      {openModal?.option && (
        <Modal
          width='70%'
          overflow='initial'
          padding='0px'
          open={openModal?.option}
          onClose={() => setOpenModal({ ...openModal, option: false })}
        >
          <ProductExtraOptionMetaFields
            businessId={business.id}
            extraId={extra.id}
            optionId={optionState.option.id}
          />
        </Modal>
      )}
      {openModal?.subOptionMetaFields && selectedSubOptionId && (
        <Modal
          width='70%'
          open={openModal?.subOptionMetaFields}
          onClose={() => {
            setSelectedSubOptionId(null)
            setOpenModal({ ...openModal, option: false })
          }}
        >
          <ProductExtraSubOptionMetaFields
            businessId={business.id}
            extraId={extra.id}
            optionId={optionState.option.id}
            subOptionId={selectedSubOptionId}
          />
        </Modal>
      )}
      <Modal
        width='70%'
        title={t('PRODUCT_SUBOPTION', 'Product suboption')}
        open={openModal?.externalId}
        onClose={() => setOpenModal({ ...openModal, externalId: false })}
      >
        <ProductOptionExternalId
          value={externalId}
          handleChange={setExternalId}
          handleUpdate={handleUpdateExternalId}
        />
      </Modal>
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
    </MainContainer>
  )
}

export const ProductExtraOptionDetails = (props) => {
  const productExtraOptionProps = {
    ...props,
    UIComponent: ProductExtraOptionDetailsUI
  }
  return <ProductExtraOptionDetailsController {...productExtraOptionProps} />
}
