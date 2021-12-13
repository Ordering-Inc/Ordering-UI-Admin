import React, { useState, useEffect, useRef } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  ProductExtraOptionDetails as ProductExtraOptionDetailsController
} from 'ordering-components-admin'
import BiImage from '@meronex/icons/bi/BiImage'
import { Input } from '../../styles/Inputs'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { Checkbox } from '../../styles/Checkbox'
import { Select } from '../../styles/Select/FirstSelect'
import { Alert, Confirm } from '../Confirm'
import { bytesConverter } from '../../utils'
import { ProductExtraOptionMetaFields } from '../ProductExtraOptionMetaFields'
import { ProductExtraSubOptionMetaFields } from '../ProductExtraSubOptionMetaFields'
import { Modal } from '../Modal'
import { PlusCircle } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'

import {
  MainContainer,
  OptionContainer,
  OptionImage,
  UploadImageIconContainer,
  UploadImageIcon,
  OptionContent,
  InputWrapper,
  ActionsContainer,
  EnableWrapper,
  DropDownWrapper,
  OptionInfoContainer,
  RightOptionContent,
  OptionSettings,
  CheckboxWrapper,
  OptionSettingItem,
  Dvider,
  ModifierOptionsContainer,
  SubOptionContainer,
  SubOptionImage,
  LeftSubOptionContent,
  RightSubOptionContent,
  SelectboxGroup
} from './styles'

const ProductExtraOptionDetailsUI = (props) => {
  const {
    optionState,
    optionChangesState,
    editErrors,
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

    business,
    extra,

    handleAddOption
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const optionImageInputRef = useRef(null)
  const ActionIcon = <FiMoreVertical />
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openModal, setOpenModal] = useState({})
  const [selectedSubOptionId, setSelectedSubOptionId] = useState(null)

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

  const handleChangeSubOptionInput = (e, subOptionId) => {
    const regexp = /^[0-9.\b]+$/
    if (e.target.value === '' || regexp.test(e.target.value)) {
      handleChangeInput(e, subOptionId)
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
    <MainContainer>
      <h1>{t('PRODUCT_OPTION', 'Product option')}</h1>
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
                <label>{t('MIN', 'Min')}</label>
                <Input
                  name='min'
                  defaultValue={optionState?.option?.min}
                  onChange={(e) => handleChangeNumberInput(e, optionState.option, true)}
                />
              </InputWrapper>
              <InputWrapper primary>
                <label>{t('MAX', 'Max')}</label>
                <Input
                  name='max'
                  defaultValue={optionState?.option?.max}
                  onChange={(e) => handleChangeNumberInput(e, optionState.option, false)}
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
                <FiMoreVertical
                  onClick={() => setOpenModal({ ...openModal, option: true })}
                />
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
                  {conditionalOptions.length && (
                    <Select
                      options={conditionalOptions}
                      defaultValue={conditionalOptionId}
                      placeholder={t('SELECT_OPTION', 'Select option')}
                      onChange={val => handleChangeConditionalOption(val)}
                    />
                  )}
                  {conditionalOptionId && (
                    <Select
                      options={conditionalSubOptions}
                      defaultValue={conditionalSubOptionId}
                      placeholder={t('SELECT_CHOICE', 'Select choice')}
                      onChange={val => handleChangeConditionalSubOption(val)}
                    />
                  )}
                </SelectboxGroup>
              )}
            </OptionSettingItem>
          </OptionSettings>
        </OptionInfoContainer>
      </OptionContainer>
      <Dvider />
      <ModifierOptionsContainer>
        <h2>{t('MODIFIER_OPTIONS', 'Modifier options')}</h2>
        {optionState?.option?.suboptions?.map((subOption, index) => (
          <SubOptionContainer key={subOption.id}>
            <LeftSubOptionContent>
              <SubOptionImage
                primary={index === 0}
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
              <InputWrapper primary={index === 0}>
                <label>{t('NAME', 'Name')}</label>
                <Input
                  name='name'
                  autoComplete='off'
                  defaultValue={subOption.name}
                  onChange={(e) => handleChangeInput(e, subOption.id)}
                />
              </InputWrapper>
            </LeftSubOptionContent>
            <RightSubOptionContent>
              <InputWrapper primary={index === 0}>
                <label>{t('PRICE', 'Price')}</label>
                <Input
                  name='price'
                  value={
                    (editSubOptionId === subOption.id)
                      ? changesState?.changes?.price ?? subOption?.price
                      : subOption?.price
                  }
                  onChange={(e) => handleChangeSubOptionInput(e, subOption.id)}
                />
              </InputWrapper>
              {(typeof settingChangeState?.changes?.with_half_option !== 'undefined' ? settingChangeState?.changes?.with_half_option : optionState?.option?.with_half_option) && (
                <InputWrapper primary={index === 0}>
                  <label>{t('HALF_PRICE', 'Half price')}</label>
                  <Input
                    name='half_price'
                    value={
                      (editSubOptionId === subOption.id)
                        ? changesState?.changes?.half_price ?? subOption?.half_price
                        : subOption?.half_price ?? ''
                    }
                    onChange={(e) => handleChangeSubOptionInput(e, subOption.id)}
                  />
                </InputWrapper>
              )}
              {(typeof settingChangeState?.changes?.allow_suboption_quantity !== 'undefined' ? settingChangeState?.changes?.allow_suboption_quantity : optionState?.option?.allow_suboption_quantity) && (
                <InputWrapper primary={index === 0}>
                  <label>{t('MAX', 'Max')}</label>
                  <Input
                    name='max'
                    value={
                      (editSubOptionId === subOption.id)
                        ? changesState?.changes?.max ?? subOption?.max
                        : subOption?.max
                    }
                    onChange={(e) => handleChangeSubOptionInput(e, subOption.id)}
                  />
                </InputWrapper>
              )}
              <ActionsContainer primary={index === 0}>
                <EnableWrapper>
                  <span>{t('ENABLE', 'Enable')}</span>
                  <Switch
                    defaultChecked={subOption?.enabled}
                    onChange={enabled => handleChangeSubOptionEnable(enabled, subOption.id)}
                  />
                </EnableWrapper>
                <DropDownWrapper>
                  <DropdownButton
                    menuAlign={theme?.rtl ? 'left' : 'right'}
                    title={ActionIcon}
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
                </DropDownWrapper>
              </ActionsContainer>
            </RightSubOptionContent>
          </SubOptionContainer>
        ))}

        <SubOptionContainer className='add-product-option'>
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
            <InputWrapper>
              <label>{t('NAME', 'Name')}</label>
              <Input
                name='name'
                autoComplete='off'
                value={
                  ((editSubOptionId === null) && changesState?.changes?.name) || ''
                }
                onChange={(e) => handleChangeInput(e, null)}
              />
            </InputWrapper>
          </LeftSubOptionContent>
          <RightSubOptionContent>
            <InputWrapper>
              <label>{t('PRICE', 'Price')}</label>
              <Input
                name='price'
                value={
                  ((editSubOptionId === null) && changesState?.changes?.price) || ''
                }
                onChange={(e) => handleChangeSubOptionInput(e, null)}
              />
            </InputWrapper>
            {(typeof settingChangeState?.changes?.with_half_option !== 'undefined' ? settingChangeState?.changes?.with_half_option : optionState?.option?.with_half_option) && (
              <InputWrapper>
                <label>{t('HALF_PRICE', 'Half price')}</label>
                <Input
                  name='half_price'
                  value={
                    ((editSubOptionId === null) && changesState?.changes?.half_price) || ''
                  }
                  onChange={(e) => handleChangeSubOptionInput(e, null)}
                />
              </InputWrapper>
            )}
            {(typeof settingChangeState?.changes?.allow_suboption_quantity !== 'undefined' ? settingChangeState?.changes?.allow_suboption_quantity : optionState?.option?.allow_suboption_quantity) && (
              <InputWrapper>
                <label>{t('MAX', 'Max')}</label>
                <Input
                  name='max'
                  value={
                    ((editSubOptionId === null) && changesState?.changes?.max) || ''
                  }
                  onChange={(e) => handleChangeSubOptionInput(e, null)}
                />
              </InputWrapper>
            )}
            <ActionsContainer>
              <IconButton
                color='primary'
                onClick={() => handleAddOption()}
              >
                <PlusCircle />
              </IconButton>
            </ActionsContainer>
          </RightSubOptionContent>
        </SubOptionContainer>

      </ModifierOptionsContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ ...alertState, open: false })}
        onAccept={() => setAlertState({ ...alertState, open: false })}
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
      {openModal?.option && (
        <Modal
          width='70%'
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
