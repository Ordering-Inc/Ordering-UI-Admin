import React, { useState, useRef, useEffect } from 'react'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick,
  useUtils,
  ProductTagDetails as ProductTagDetailsController
} from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Image as ImageIcon, ThreeDots } from 'react-bootstrap-icons'
import { Alert, Confirm } from '../../Shared'
import { bytesConverter } from '../../../utils'
import { Button, Input } from '../../../styles'

import {
  DetailsContainer,
  Header,
  FormInput,
  ProductTagImage,
  UploadImageIconContainer,
  UploadImageIcon,
  FormController,
  ActionSelectorWrapper
} from './styles'

const ProductTagDetailsUI = (props) => {
  const {
    tagState,
    formState,
    handlechangeImage,
    handleChangeInput,
    handleUpdateProductTag,
    handleDeleteProductTag,
    handleAddProductTag
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const formMethods = useForm()
  const tagImageRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const onSubmit = () => {
    if (tagState.tag) {
      handleUpdateProductTag()
    } else {
      handleAddProductTag()
    }
  }

  const handleClickImage = () => {
    tagImageRef.current.click()
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
  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT_TAG', 'Are you sure that you want to delete this product tag?'),
      handleOnAccept: () => {
        handleDeleteProductTag()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (!formState.error) return
    setAlertState({
      open: true,
      content: formState.error
    })
  }, [formState.error])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map((error) => error.message)
      })
    }
  }, [formMethods.errors])

  return (
    <>
      <DetailsContainer>
        <Header>
          <h1>
            {
              tagState.tag
                ? formState.changes?.name ?? tagState.tag?.name ?? ''
                : t('ADD_NEW_LABEL', 'Add new label')
            }
          </h1>
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => handleDeleteClick()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </Header>

        <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
          <ProductTagImage
            onClick={() => handleClickImage()}
          >
            <ExamineClick
              onFiles={files => handleFiles(files)}
              childRef={(e) => { tagImageRef.current = e }}
              accept='image/png, image/jpeg, image/jpg'
              disabled={formState.loading}
            >
              <DragAndDrop
                onDrop={dataTransfer => handleFiles(dataTransfer.files)}
                accept='image/png, image/jpeg, image/jpg'
                disabled={formState.loading}
              >
                {
                  (!formState.changes?.image || formState.error)
                    ? tagState.tag?.image && (<img src={optimizeImage(tagState.tag?.image, 'h_200,c_limit')} alt='tag image' loading='lazy' />)
                    : formState?.changes?.image && (<img src={formState?.changes?.image} alt='tag image' loading='lazy' />)
                }
                <UploadImageIconContainer>
                  <UploadImageIcon>
                    <ImageIcon />
                  </UploadImageIcon>
                </UploadImageIconContainer>
              </DragAndDrop>
            </ExamineClick>
          </ProductTagImage>

          <FormController>
            <label>{t('NAME', 'Name')}</label>
            <Input
              name='name'
              placeholder={t('NAME', 'Name')}
              value={formState.changes?.name ?? tagState.tag?.name ?? ''}
              onChange={e => handleChangeInput(e)}
              ref={formMethods.register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Name is required'
                ).replace('_attribute_', t('NAME', 'Name'))
              })}
              autoComplete='off'
            />
          </FormController>

          <Button
            borderRadius='8px'
            color='primary'
            type='submit'
            disabled={formState.loading || Object.keys(formState.changes).length === 0}
          >
            {t('SAVE', 'Save')}
          </Button>
        </FormInput>
      </DetailsContainer>

      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ProductTagDetails = (props) => {
  const tagDetailsProps = {
    ...props,
    UIComponent: ProductTagDetailsUI
  }
  return <ProductTagDetailsController {...tagDetailsProps} />
}
