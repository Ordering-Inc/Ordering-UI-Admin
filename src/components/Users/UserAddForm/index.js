import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  UserFormDetails as UserFormDetailsController
} from 'ordering-components-admin'
import { Input, Button } from '../../../styles'
import { Alert, InputPhoneNumber } from '../../Shared'
import { UserTypeSelector } from '../UserTypeSelector'
import parsePhoneNumber from 'libphonenumber-js'
import { sortInputFields, bytesConverter } from '../../../utils'
import Skeleton from 'react-loading-skeleton'
import BiImage from '@meronex/icons/bi/BiImage'

import {
  FormContainer,
  UserImage,
  Image,
  UploadImageIconContainer,
  UploadImageIcon,
  SkeletonWrapper,
  FormInput,
  ActionsForm,
  SkeletonForm,
  WrapperUserTypeSelector
} from './styles'

const UserAddFormUI = (props) => {
  const {
    formState,
    showField,
    cleanFormState,
    isRequiredField,
    validationFields,
    handleChangeInput,
    handleButtonAddClick,
    isCheckout,
    handleChangeUserType,
    handlechangeImage
  } = props
  const formMethods = useForm()
  const [, t] = useLanguage()

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const emailInput = useRef(null)
  const inputRef = useRef(null)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    cleanFormState && cleanFormState({ result: { error: false } })
  }

  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!isPhoneNumberValid && userPhoneNumber) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      })
      return
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      handleButtonAddClick()
    }
  }

  const handleClickImage = () => {
    inputRef.current.click()
  }

  const handleFiles = (files) => {
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
      handlechangeImage(files[0])
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value?.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value?.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value?.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if ((!formState?.loading && formState?.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState?.loading])

  useEffect(() => {
    cleanFormState && cleanFormState({ changes: { level: 3 } })
  }, [])

  useEffect(() => {
    if (!validationFields.loading && emailInput.current) {
      formMethods.setValue('email', formState?.result?.result
        ? formState?.result?.result?.email
        : formState?.changes?.email ?? '')
    }
  }, [validationFields, emailInput.current])

  useEffect(() => {
    formMethods.register('email', {
      required: isRequiredField('email')
        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
        : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
  }, [formMethods])

  return (
    <FormContainer>
      <FormInput
        onSubmit={formMethods.handleSubmit(onSubmit)}
        isCheckout={isCheckout}
        data-tour='tour_fill'
      >
        <h1>
          {t('USERS_REGISTER', 'New user')}
        </h1>
        <UserImage className='user-image'>
          <Image onClick={() => handleClickImage()} isImage={formState?.changes?.photo && !formState.result.error}>
            <ExamineClick onFiles={handleFiles} childRef={(e) => { inputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
              <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={formState.loading}>
                {
                  formState.loading
                    ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                    : formState?.changes?.photo && <img src={formState?.changes?.photo} alt='user image' loading='lazy' />
                }
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <BiImage />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </Image>
        </UserImage>
        {!validationFields?.loading ? (
          <>
            {sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
              showField && showField(field.code) && (
                <React.Fragment key={field.id}>
                  {field.code === 'email' ? (
                    <Input
                      key={field.id}
                      type={field.type}
                      name={field.code}
                      className='form'
                      placeholder={t(field.code.toUpperCase(), field?.name)}
                      defaultValue={
                      formState?.result?.result
                        ? formState?.result?.result[field.code]
                        : formState?.changes[field.code] ?? ''
                      }
                      onChange={handleChangeInputEmail}
                      ref={(e) => {
                        emailInput.current = e
                      }}
                      autoComplete='off'
                    />
                  ) : (
                    <Input
                      key={field.id}
                      type={field.type}
                      name={field.code}
                      className='form'
                      placeholder={t(field.code.toUpperCase(), field?.name)}
                      defaultValue={
                      formState?.result?.result
                        ? formState?.result?.result[field.code]
                        : formState?.changes[field.code] ?? ''
                      }
                      onChange={handleChangeInput}
                      ref={formMethods.register({
                        required: isRequiredField(field.code)
                          ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field?.name} is required`).replace('_attribute_', t(field?.name, field.code))
                          : null
                      })}
                      autoComplete='off'
                    />
                  )}

                </React.Fragment>
              )
            )}
            {!!showInputPhoneNumber && (
              <InputPhoneNumber
                value={userPhoneNumber}
                setValue={handleChangePhoneNumber}
                handleIsValid={setIsValidPhoneNumber}
              />
            )}
            {!isCheckout && (
              <Input
                type='password'
                name='password'
                className='form'
                placeholder={t('FRONT_VISUALS_PASSWORD', 'Password')}
                onChange={handleChangeInput}
                ref={formMethods.register({
                  required: isRequiredField('password')
                    ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                    : null,
                  minLength: {
                    value: 8,
                    message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                  }
                })}
              />
            )}
            {
            props.afterMidElements?.map((MidElement, i) => (
              <React.Fragment key={i}>
                {MidElement}
              </React.Fragment>))
            }
            {
             props.afterMidComponents?.map((MidComponent, i) => (
               <MidComponent key={i} {...props} />))
            }
            <WrapperUserTypeSelector>
              <UserTypeSelector
                isPrimary
                defaultUserType={formState?.changes?.level}
                handleChangeUserType={handleChangeUserType}
              />
            </WrapperUserTypeSelector>
            <ActionsForm>
              <Button
                color='primary'
                borderRadius='8px'
                type='submit'
                disabled={Object.keys(formState?.changes).length === 0 || formState.loading}
              >
                {formState.loading ? t('LOADING', 'Loading') : t('ADD', 'Add')}
              </Button>
            </ActionsForm>
          </>
        ) : (
          <SkeletonForm>
            {[...Array(6)].map((item, i) => (
              <Skeleton key={i} />
            ))}
          </SkeletonForm>
        )}
      </FormInput>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </FormContainer>
  )
}

export const UserAddForm = (props) => {
  const UserAddProps = {
    ...props,
    useSessionUser: false,
    useValidationFields: true,
    UIComponent: UserAddFormUI
  }
  return (
    <UserFormDetailsController {...UserAddProps} />
  )
}
