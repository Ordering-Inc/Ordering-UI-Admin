import React, { useEffect, useState } from 'react'
import { useLanguage, ContentForm as ContentFormController } from 'ordering-components-admin'
import { Button } from '../../../styles'

import $ from 'jquery'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/dist/css/bootstrap.css'

import { Alert, Modal } from '../../Shared'
import { InsertLink } from '../../Settings/InsertLink'
import { InsertVideo } from '../../Settings/InsertVideo'
import { InsertImage } from '../../Settings/InsertImage'

import {
  PageContainer,
  Header,
  WrapperEditor,
  ButtonGroupWrapper
} from './styles'

const ContentFormUI = (props) => {
  const {
    formState,
    imageListState,
    insertImageState,
    handleInsertImage,
    handleDeleteImage,
    handleChangeFormState,
    handleSave,
    selectedImageUrl,
    setSelectedImageUrl,
    handleDelete,
    title,
    content
  } = props

  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(null)
  const [editorContext, setEditorContext] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [pageContent, setPageContent] = useState(null)

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

  const handleSubmit = () => {
    const element = document.querySelector('.note-codeview-keep')
    if (element && element.classList.contains('active')) {
      const editValue = document.querySelector('.note-codable').value
      handleSave(editValue)
      return
    }
    handleSave()
  }

  useEffect(() => {
    if (!formState?.error) return
    setAlertState({
      open: true,
      content: formState?.error
    })
  }, [formState?.error])

  useEffect(() => {
    if (!pageContent) return
    handleChangeFormState('body', pageContent)
  }, [pageContent])

  const onInit = (note) => {
    note.reset()
    const regex = /(\<\w*)((\s\/\>)|(.*\<\/\w*\>))/i
    if (content?.match(regex) !== null) {
      note.replace(content)
    } else {
      note.insertText(content)
    }
  }

  useEffect(() => {
    setPageContent(content)
  }, [content])

  return (
    <>
      <PageContainer>
        <Header>
          <h1>{title}</h1>
        </Header>
        <WrapperEditor>
          <ReactSummernote
            onInit={onInit}
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
            onChange={content => setPageContent(content)}
          />
        </WrapperEditor>
        <ButtonGroupWrapper>
          <Button
            borderRadius='8px'
            color='primary'
            disabled={Object.keys(formState.changes).length === 0}
            onClick={() => handleSubmit()}
          >
            {t('ACCEPT', 'Accept')}
          </Button>
          <Button
            borderRadius='8px'
            color='secundaryDark'
            onClick={() => handleDelete()}
          >
            {t('DELETE', 'Delete')}
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

export const ContentForm = (props) => {
  const contentFormProps = {
    ...props,
    UIComponent: ContentFormUI
  }
  return <ContentFormController {...contentFormProps} />
}
