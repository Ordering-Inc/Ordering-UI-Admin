import React, { useState, useEffect, useRef } from 'react'
import { ExamineClick, DragAndDrop, useLanguage } from 'ordering-components-admin'
import { Checkbox, Input, Switch } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'
import BiImage from '@meronex/icons/bi/BiImage'
import { useForm, Controller } from 'react-hook-form'
import { Alert } from '../../Shared'

import {
  OptionContainer,
  OptionImage,
  UploadImageIconContainer,
  UploadImageIcon,
  OptionInfoContainer,
  OptionContent,
  InputWrapper,
  RightOptionContent,
  ActionsContainer,
  EnableWrapper,
  OptionSettings,
  OptionSettingItem,
  CheckboxWrapper,
  SelectboxGroup
} from './styles'

export const ProductExtraOptionForm = (props) => {
  const {
    optionState,
    optionChangesState,
    isMaxError,
    handleOptionFiles,
    handleChangeOptionInput,
    handleChangeOptionEnable,
    handleOptionSetting,
    conditionalOptions,
    conditionalSubOptions,
    conditionalOptionId,
    conditionalSubOptionId,
    handleChangeConditionalOption,
    handleChangeConditionalSubOption,
    handleUpdateOption
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, errors, control } = useForm()

  const optionImageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [timer, setTimer] = useState(null)

  const handleClickImage = () => {
    optionImageInputRef.current.click()
  }

  const handleMaxValidate = () => {
    const max = optionChangesState?.changes?.max ?? optionState?.option?.max
    const min = optionChangesState?.changes?.min ?? optionState?.option?.min

    if (parseFloat(min) <= parseFloat(max)) return true
    else {
      return t('ERROR_MATCH_MAX_DEFAULT_SUBOPTIONS', 'Max default suboptions length is less than preselected suboptions')
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

  useEffect(() => {
    if (!Object.keys(optionChangesState?.changes || {}).length) return
    clearTimeout(timer)
    const _timer = setTimeout(() => {
      handleSubmit(handleUpdateOption)()
    }, 500)
    setTimer(_timer)
  }, [optionChangesState?.changes])

  return (
    <OptionContainer
      onSubmit={handleSubmit(handleUpdateOption)}
    >
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
            <Controller
              name='name'
              control={control}
              render={({ onChange, value }) => (
                <Input
                  name='name'
                  autoComplete='off'
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value)
                    handleChangeOptionInput(e, optionState.option?.id)
                  }}
                />
              )}
              defaultValue={optionState?.option.name}
              rules={{
                required: t('NAME_REQUIRED', 'The name is required.')
              }}
            />
          </InputWrapper>
          <RightOptionContent>
            <InputWrapper primary>
              <label>{t('MINIMUM', 'Minimum')}</label>
              <Controller
                name='min'
                control={control}
                render={({ onChange, value }) => (
                  <Input
                    name='min'
                    autoComplete='off'
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value)
                      handleChangeOptionInput(e, optionState.option?.id)
                    }}
                    onKeyPress={(e) => {
                      if (!/^[0-9.]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                  />
                )}
                defaultValue={optionState?.option?.min}
                rules={{
                  required: t('MIN_PURCHASED_REQUIRED', 'The min is required.'),
                  validate: handleMaxValidate
                }}
              />
            </InputWrapper>
            <InputWrapper primary isMaxError={isMaxError}>
              <label>{t('MAX', 'Max')}</label>
              <Controller
                name='max'
                control={control}
                render={({ onChange, value }) => (
                  <Input
                    name='max'
                    value={value}
                    autoComplete='off'
                    onChange={(e) => {
                      onChange(e.target.value)
                      handleChangeOptionInput(e, optionState.option?.id)
                    }}
                    onKeyPress={(e) => {
                      if (!/^[0-9.]$/.test(e.key)) {
                        e.preventDefault()
                      }
                    }}
                  />
                )}
                defaultValue={optionState?.option?.max}
                rules={{
                  required: t('MAX_PURCHASED_REQUIRED', 'The max is required.')
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

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </OptionContainer>
  )
}
