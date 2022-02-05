import React, { useEffect, useState } from 'react'
import { useLanguage, PageForm as PageFormController } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import { Button, Input, Switch } from '../../../styles'

import $ from 'jquery'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

import { Alert, Modal } from '../../Shared'
import { InsertLink } from '../InsertLink'
import { InsertVideo } from '../InsertVideo'
import { InsertImage } from '../InsertImage'

import {
  PageContainer,
  Header,
  InputGroup,
  InputWrapper,
  WrapperEditor,
  ButtonGroupWrapper
} from './styles'

const PageFormUI = (props) => {
  const {
    pageState,
    formState,
    imageListState,
    insertImageState,
    handleInsertImage,
    handleDeleteImage,
    handleChangeFormState,
    handleSavePage,
    selectedImageUrl,
    setSelectedImageUrl,
    handleCancel,
    isAddMode,
    handleAddPage
  } = props
  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(null)
  const [editorContext, setEditorContext] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const insertLink = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<i class="note-icon-link"/>',
      tooltip: 'link',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('link')
      }
    })
    return button.render()
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

  const insertVideo = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<i class="note-icon-video"/>',
      tooltip: 'video',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('video')
      }
    })
    return button.render()
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setEditorContext(null)
  }

  useEffect(() => {
    if (!formState?.error) return
    setAlertState({
      open: true,
      content: formState?.error
    })
  }, [formState?.error])

  return (
    <>
      <PageContainer>
        <Header>
          <h1>
            {isAddMode ? (
              t('ADD_PAGE', 'Add page')
            ) : (
              <>
                {
                  pageState.loading
                    ? <Skeleton width={100} />
                    : formState.changes?.name ?? pageState.page?.name ?? ''
                }
              </>
            )}
          </h1>
          {!isAddMode && (
            <>
              {pageState.loading ? (
                <Skeleton width={30} />
              ) : (
                <Switch
                  defaultChecked={pageState.page?.enabled}
                  onChange={enabled => handleChangeFormState('enabled', enabled)}
                />
              )}
            </>
          )}
        </Header>
        <InputGroup>
          <InputWrapper>
            <label>
              {t('NAME', 'Name')}
            </label>
            <Input
              defaultValue={pageState.page?.name}
              onChange={e => handleChangeFormState('name', e.target.value)}
              placeholder={t('NAME', 'Name')}
            />
          </InputWrapper>
          <InputWrapper>
            <label>
              {t('SLUG', 'Slug')}
            </label>
            <Input
              value={formState.changes?.slug ?? pageState.page?.slug ?? ''}
              onChange={e => handleChangeFormState('slug', e.target.value.replace(/\s/g, ''))}
              placeholder={t('Slug', 'Slug')}
            />
          </InputWrapper>
        </InputGroup>
        <WrapperEditor>
          <ReactSummernote
            value={pageState.page?.body}
            placeholder={t('START_NEW_PAGE')}
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
                ['insert', ['insertLink', 'insertImage', 'insertVideo']],
                ['codeview', ['codeview']]
              ],
              buttons: {
                insertLink: insertLink,
                insertImage: insertImage,
                insertVideo: insertVideo
              }
            }}
            onChange={content => handleChangeFormState('body', content)}
          />
        </WrapperEditor>
        <ButtonGroupWrapper>
          <Button
            borderRadius='8px'
            color='primary'
            disabled={Object.keys(formState.changes).length === 0}
            onClick={() => isAddMode ? handleAddPage() : handleSavePage()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
          <Button
            borderRadius='8px'
            color='secundaryDark'
            onClick={() => handleCancel()}
          >
            {t('CANCEL', 'Cancel')}
          </Button>
        </ButtonGroupWrapper>
      </PageContainer>
      <Modal
        width='60%'
        open={openModal === 'link'}
        onClose={() => setOpenModal(null)}
      >
        <InsertLink
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
        />
      </Modal>
      <Modal
        width='60%'
        open={openModal === 'video'}
        onClose={() => setOpenModal(null)}
      >
        <InsertVideo
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
        />
      </Modal>
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
      <Alert
        title={t('BUSINESS', 'Business')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const PageForm = (props) => {
  const pageFormProps = {
    ...props,
    UIComponent: PageFormUI
  }
  return <PageFormController {...pageFormProps} />
}
