import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  ProductExtraOptionDetails as ProductExtraOptionDetailsController
} from 'ordering-components-admin'
import BiImage from '@meronex/icons/bi/BiImage'
import { Checkbox, IconButton, Input, Switch } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { bytesConverter } from '../../../utils'
import { Alert, Confirm, Modal } from '../../Shared'

import { ProductExtraOptionMetaFields } from '../ProductExtraOptionMetaFields'
import { ProductExtraSubOptionMetaFields } from '../ProductExtraSubOptionMetaFields'
import {
  PlusCircle,
  ThreeDots
} from 'react-bootstrap-icons'
import { useForm } from 'react-hook-form'
import { ProductExtraSuboption } from '../ProductExtraSuboption'

import {
  MainContainer,
  Header,
  ActionSelectorWrapper,
  OptionContainer,
  OptionImage,
  UploadImageIconContainer,
  UploadImageIcon,
  OptionContent,
  InputWrapper,
  ActionsContainer,
  EnableWrapper,
  OptionInfoContainer,
  RightOptionContent,
  OptionSettings,
  CheckboxWrapper,
  OptionSettingItem,
  Dvider,
  ModifierOptionsContainer,
  SubOptionImage,
  LeftSubOptionContent,
  RightSubOptionContent,
  SelectboxGroup,
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
    handleChangeNumberInput,
    handleChangeOptionEnable,
    changesState,
    editSubOptionId,
    handleChangeInput,
    handleChangeSubOptionImage,
    handleChangeSubOptionEnable,
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

    business,
    extra,
    handleAddOption,
    handleDeteteOption,
    isMaxError
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const optionImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openModal, setOpenModal] = useState({})
  const [selectedSubOptionId, setSelectedSubOptionId] = useState(null)
  const { handleSubmit, register, errors } = useForm()
  const [isAddForm, setIsAddForm] = useState(false)

  const handleClickImage = () => {
    optionImageInputRef.current.click()
  }

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

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  const closeAddForm = (e) => {
    const outsideDropdown = !e.target.closest('.add-product-option') && !e.target.closest('.add-option-btn')
    if (outsideDropdown && Object.keys(changesState?.changes).length === 0) setIsAddForm(false)
  }

  useEffect(() => {
    document.addEventListener('click', closeAddForm)
    return () => document.removeEventListener('click', closeAddForm)
  }, [changesState])

  useEffect(() => {
    if (Object.keys(changesState?.changes).length === 0) setIsAddForm(false)
  }, [changesState?.changes])

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
              onClick={() => handleDeleteOption()}
            >
              {t('DELETE', 'Delete')}
            </Dropdown.Item>
          </DropdownButton>
        </ActionSelectorWrapper>
      </Header>

      <OptionContainer>
        <OptionImage
          onClick={() => handleClickImage()}
        >
          <ExamineClick
            onFiles={files => handleOptionFiles(files, optionState?.option.id)}
            childRef={(e) => { optionImageInputRef.current = e }}
            accept='image/png, image/jpeg, image/jpg'
            disabled={optionState.loading}
          >
            <DragAndDrop
              onDrop={dataTransfer => handleOptionFiles(dataTransfer.files, optionState?.option.id)}
              accept='image/png, image/jpeg, image/jpg'
              disabled={optionState.loading}
            >
              {
                optionChangesState?.result?.image
                  ? (<img src={optionChangesState?.result?.image} alt='sub option image' loading='lazy' />)
                  : optionChangesState?.changes?.image
                    ? (<img src={optionChangesState?.changes?.image} alt='product image' loading='lazy' />)
                    : optionState?.option?.image && (<img src={optionState?.option?.image} alt='product image' loading='lazy' />)
              }
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </OptionImage>
        <OptionInfoContainer>
          <OptionContent>
            <InputWrapper primary>
              <label>{t('OPTION_NAME', 'Option name')}</label>
              <Input
                name='name'
                autoComplete='off'
                defaultValue={optionState?.option.name}
                onChange={(e) => handleChangeOptionInput(e, optionState.option?.id)}
              />
            </InputWrapper>
            <RightOptionContent>
              <InputWrapper primary>
                <label>{t('MINIMUM', 'Minimum')}</label>
                <Input
                  name='min'
                  defaultValue={optionState?.option?.min}
                  onChange={(e) => handleChangeNumberInput(e, optionState.option, true)}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </InputWrapper>
              <InputWrapper primary isMaxError={isMaxError}>
                <label>{t('MAX', 'Max')}</label>
                <Input
                  name='max'
                  defaultValue={optionState?.option?.max}
                  onChange={(e) => handleChangeNumberInput(e, optionState.option, false)}
                  onKeyPress={(e) => {
                    if (!/^[0-9.]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
              </InputWrapper>
              <ActionsContainer top>
                <EnableWrapper>
                  <span>{t('ENABLE', 'Enable')}</span>
                  <Switch
                    defaultChecked={optionState.option?.enabled}
                    onChange={enabled => handleChangeOptionEnable(enabled, optionState.option?.id)}
                  />
                </EnableWrapper>
              </ActionsContainer>
            </RightOptionContent>
          </OptionContent>
          <OptionSettings>
            <OptionSettingItem>
              <CheckboxWrapper>
                <Checkbox
                  id='with_half_option'
                  defaultChecked={optionState?.option?.with_half_option || false}
                  onClick={(e) => handleOptionSetting('with_half_option', e.target.checked)}
                />
                <label htmlFor='with_half_option'>{t('WITH_HALF_PRICE', 'Allow half option & price')}</label>
              </CheckboxWrapper>
            </OptionSettingItem>
            <OptionSettingItem>
              <CheckboxWrapper>
                <Checkbox
                  id='allow_suboption_quantity'
                  defaultChecked={optionState?.option?.allow_suboption_quantity || false}
                  onClick={(e) => handleOptionSetting('allow_suboption_quantity', e.target.checked)}
                />
                <label htmlFor='allow_suboption_quantity'>{t('SUBOPTION_QUANTITY', 'Allow suboptions quantity')}</label>
              </CheckboxWrapper>
              {optionState?.option?.allow_suboption_quantity && (
                <CheckboxWrapper>
                  <Checkbox
                    id='limit_suboptions_by_max'
                    defaultChecked={optionState?.option?.limit_suboptions_by_max || false}
                    onClick={(e) => handleOptionSetting('limit_suboptions_by_max', e.target.checked)}
                  />
                  <label htmlFor='limit_suboptions_by_max'>{t('LIMIT_SUBOPTIONS_BY_MAX', 'Limit suboptions by maximum option')}</label>
                </CheckboxWrapper>
              )}
            </OptionSettingItem>
            {conditionalOptions?.length > 0 && (
              <OptionSettingItem>
                <CheckboxWrapper>
                  <Checkbox
                    id='conditioned'
                    defaultChecked={optionState?.option?.conditioned || false}
                    onClick={(e) => handleOptionSetting('conditioned', e.target.checked)}
                  />
                  <label htmlFor='conditioned'>{t('CONDITIONAL', 'Conditional')}</label>
                </CheckboxWrapper>
                {optionState?.option?.conditioned && (
                  <SelectboxGroup>
                    {conditionalOptions.length > 0 && (
                      <Select
                        options={conditionalOptions}
                        defaultValue={conditionalOptionId}
                        placeholder={t('SELECT_OPTION', 'Select option')}
                        onChange={val => handleChangeConditionalOption(val)}
                      />
                    )}
                    {conditionalOptionId && (
                      conditionalSubOptions.length > 0 ? (
                        <Select
                          options={conditionalSubOptions}
                          defaultValue={conditionalSubOptionId}
                          placeholder={t('SELECT_CHOICE', 'Select choice')}
                          onChange={val => handleChangeConditionalSubOption(val)}
                        />
                      ) : (
                        <p>{t('NO_CHOICES_AVAILABLE', 'No choices available')}</p>
                      )
                    )}
                  </SelectboxGroup>
                )}
              </OptionSettingItem>
            )}
          </OptionSettings>
        </OptionInfoContainer>
      </OptionContainer>
      <Dvider />
      <ModifierOptionsContainer>
        <h2>{t('MODIFIER_OPTIONS', 'Modifier options')}</h2>
        <SubOptionContainer>
          <LeftSubOptionContent>
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
        {optionState?.option?.suboptions?.map(subOption => (
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
            handleChangeInput={handleChangeInput}
            handleChangeSubOptionImage={handleChangeSubOptionImage}
            handleChangeDefaultSuboption={handleChangeDefaultSuboption}
            handleChangeSubOptionEnable={handleChangeSubOptionEnable}
            handleDeteteSubOption={handleDeteteSubOption}
            handleUpdateSubOption={handleUpdateSubOption}
          />
        ))}

        {isAddForm && (
          <AdddSubOptionForm onSubmit={handleSubmit(handleAddOption)} className='add-product-option'>
            <LeftSubOptionContent>
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
              <InputWrapper primary={optionState?.option?.suboptions?.length === 0}>
                <Input
                  name='name'
                  autoComplete='off'
                  placeholder={t('NAME', 'Name')}
                  defaultValue={
                    ((editSubOptionId === null) && changesState?.changes?.name) || ''
                  }
                  onChange={(e) => handleChangeInput(e, null)}
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
                  onChange={(e) => handleChangeInput(e, null)}
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
                    onChange={(e) => handleChangeInput(e, null)}
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
                    onChange={(e) => handleChangeInput(e, null)}
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
