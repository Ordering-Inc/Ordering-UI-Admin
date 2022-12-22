import React, { useState, useEffect, useMemo } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, CampaignEmail as CampaignEmailController } from 'ordering-components-admin'
import { Input, Button } from '../../../styles'
import $ from 'jquery'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/dist/css/bootstrap.css'
import { Alert, Modal } from '../../Shared'
import { InsertImage } from '../../Settings/InsertImage'
import { InsertLink } from '../../Settings/InsertLink'
import { SettingsList } from '../../Settings/SettingsList'
import {
  Container,
  InputWrapper,
  EmailPreviewWrapper,
  EmailPreviewHeader,
  PointGroup,
  EmailPreviewContent,
  ButtonWrapper,
  WrapperEditor,
  Preview,
  Description,
  BottomSpace
} from './styles'

const CampaignEmailUI = (props) => {
  const {
    isAddMode,
    contactState,
    handleChangeData,
    handleUpdateContact,
    handleAddCampaign,
    formState,
    handleChangeContact,
    imageListState,
    insertImageState,
    handleInsertImage,
    handleDeleteImage,
    selectedImageUrl,
    setSelectedImageUrl,
    categoryList
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [openModal, setOpenModal] = useState(null)
  const [editorContext, setEditorContext] = useState(null)
  const [emailBody, setEmailBody] = useState(null)
  const [category, setCategory] = useState()

  const generalList = [
    'email_smtp_use_default',
    'email_smtp_host',
    'email_smtp_username',
    'email_smtp_password',
    'email_smtp_encryption',
    'email_smtp_port'
  ]

  const isEnableConfig = useMemo(() => {
    return category?.configs?.filter(config => generalList.includes(config.key)).every(config => !!config?.value)
  }, [category])

  const handleCloseModal = () => {
    setOpenModal(false)
    setEditorContext(null)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleSaveEmail = () => {
    if (!contactState?.changes?.contact_data?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!contactState?.changes?.contact_data?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }

    if (isAddMode) {
      if (formState?.changes?.conditions?.length > 0) {
        for (const item of formState?.changes?.conditions) {
          if (item?.date_condition === '=' || item?.date_condition === '>') {
            setAlertState({
              open: true,
              content: t('REQUIRED_BEFORE_OR_RANGE_OPTION_WHEN_FIXED', 'when audience type is Fixed, date condition is required Before or Date range option')
            })
            return
          }
          if (item?.condition === '=') {
            setAlertState({
              open: true,
              content: t('REQUIRED_MORE_OR_LESS_OPTION_WHEN_FIXED', 'when audience type is Fixed, order condition is required More or Less option')
            })
            return
          }
        }
      }
      handleAddCampaign()
    } else {
      handleUpdateContact()
    }
  }

  const handleRestoreEditor = () => editorContext.invoke('restoreRange')

  const insertImage = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<i class="note-icon-picture"/>',
      tooltip: 'picture',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('image')
      }
    })
    return button.render()
  }

  const insertLink = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<button style="background: #2C7BE5; border: none; font-size: 12px; color: white;">BUTTON</button>',
      tooltip: 'link-button',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('link')
      }
    })
    return button.render()
  }

  useEffect(() => {
    if (!emailBody) return
    handleChangeContact('body', emailBody)
  }, [emailBody])

  useEffect(() => {
    if (categoryList?.categories?.length > 0) {
      const selectedCategory = categoryList?.categories.find(item => item.key === 'email_configs')
      const configs = selectedCategory?.configs.filter(config => generalList.includes(config.key))
      setCategory({ ...selectedCategory, configs: configs })
    }
  }, [categoryList])

  return (
    <>
      {isEnableConfig ? (
        <>
          <Container>
            <InputWrapper>
              <label>{t('TITLE', 'Title')}</label>
              <Input
                name='title'
                placeholder={t('TITLE', 'Title')}
                value={contactState?.changes?.contact_data?.title || ''}
                onChange={handleChangeData}
              />
            </InputWrapper>
            <InputWrapper>
              <label>{t('MESSAGES', 'Messages')}</label>
              <WrapperEditor>
                <ReactSummernote
                  value={contactState?.changes?.contact_data?.body ?? '<p><br></p>'}
                  placeholder={t('EMAIL_CONTENT', 'Email content')}
                  onInit={({ summernote }) => summernote('code', (contactState?.changes?.contact_data?.body ?? '<p><br></p>'))}
                  options={{
                    height: 350,
                    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
                    toolbar: [
                      ['style', ['style']],
                      ['font', ['bold', 'italic', 'underline', 'clear']],
                      ['fontsize', ['fontsize']],
                      ['color', ['color']],
                      ['para', ['ul', 'paragraph']],
                      ['table', ['table']],
                      ['insert', ['insertLink', 'insertImage']],
                      ['codeview', ['codeview']]
                    ],
                    buttons: {
                      insertLink: insertLink,
                      insertImage: insertImage
                    },
                    popover: {
                      link: [
                        ['link', ['linkDialogShow']]
                      ]
                    }
                  }}
                  onChange={content => setEmailBody(content)}
                />
              </WrapperEditor>
            </InputWrapper>
            <EmailPreviewWrapper>
              <EmailPreviewHeader>
                <PointGroup>
                  <div />
                  <div />
                  <div />
                </PointGroup>
              </EmailPreviewHeader>
              <EmailPreviewContent>
                <h2>{contactState?.changes?.contact_data?.title || ''}</h2>
                <Preview
                  dangerouslySetInnerHTML={{ __html: contactState?.changes?.contact_data?.body || '' }}
                />
                {/* <p>{contactState?.changes?.contact_data?.body || ''}</p> */}
              </EmailPreviewContent>
            </EmailPreviewWrapper>
          </Container>
          <ButtonWrapper>
            <Button
              color='primary'
              onClick={handleSaveEmail}
              disabled={contactState.loading}
            >
              {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
            </Button>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Description>
            <span>
              {t('SMTP_SETTINGS_LINK_DESC', 'You need to complete SMTP configuration first')}
            </span>
          </Description>
          {categoryList?.loading && (
            <>
              {[...Array(5).keys()].map(i => (
                <p key={i}>
                  <Skeleton height={20} />
                </p>
              ))}
            </>
          )}
          {!categoryList?.loading && category && (
            <SettingsList
              {...props}
              category={category}
              isCampaign
            />
          )}
          <BottomSpace />
        </>
      )}
      <Modal
        width='60%'
        open={openModal === 'image'}
        onClose={() => setOpenModal(null)}
      >
        <InsertImage
          imageListState={imageListState}
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
          insertImageState={insertImageState}
          handleInsertImage={handleInsertImage}
          handleDeleteImage={handleDeleteImage}
          selectedImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
        />
      </Modal>
      <Modal
        width='60%'
        open={openModal === 'link'}
        onClose={() => setOpenModal(null)}
      >
        <InsertLink
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
          isLinkButton
        />
      </Modal>
      <Alert
        title={t('CAMPAIGN', 'Campaign')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const CampaignEmail = (props) => {
  const campaignEmailProps = {
    ...props,
    UIComponent: CampaignEmailUI
  }
  return <CampaignEmailController {...campaignEmailProps} />
}
