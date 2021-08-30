import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Checkbox } from '../../styles/Checkbox'

import {
  InsertLinkContainer,
  WrapperInput,
  CheckboxWrapper
} from './styles'

export const InsertLink = (props) => {
  const {
    editorContext,
    onClose,
    handleRestoreEditor
  } = props
  const [, t] = useLanguage()
  const [changesState, setChangesState] = useState({})

  const handleChangeInput = (e) => {
    setChangesState({
      ...changesState,
      [e.target.name]: e.target.value
    })
  }

  const handleInsertClick = () => {
    handleRestoreEditor()
    editorContext.invoke('editor.createLink', {
      text: changesState?.text || '',
      url: changesState?.url || '',
      isNewWindow: changesState?.isNewWindow ?? true
    })
    onClose()
  }
  return (
    <InsertLinkContainer>
      <h1>{t('INSERT_LINK', 'Insert link')}</h1>
      <WrapperInput>
        <label>{t('LINK_TEXT', 'Text to display')}</label>
        <Input
          name='text'
          onChange={e => handleChangeInput(e)}
        />
      </WrapperInput>
      <WrapperInput>
        <label>{t('LINK_URL', 'Url')}</label>
        <Input
          name='url'
          onChange={e => handleChangeInput(e)}
        />
      </WrapperInput>
      <CheckboxWrapper>
        <Checkbox
          defaultChecked
          onClick={e => setChangesState({ ...changesState, isNewWindow: e.target.checked })}
        />
        <span>{t('IS_NEW_WINDOW', 'Open in a new window')}</span>
      </CheckboxWrapper>
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => handleInsertClick()}
      >
        {t('INSERT', 'Insert')}
      </Button>
    </InsertLinkContainer>
  )
}
