import React from 'react'
import { LanguageSelector as LanguageSelectorController } from 'ordering-components-admin'
import { Globe2 } from 'react-bootstrap-icons'
import { Select } from '../../styles/Select'
import {
  SelectWrapper,
  LanguageItem,
  LanguageText
} from './styles'

const LanguageSelectorUI = (props) => {
  const {
    languagesState,
    currentLanguage,
    handleChangeLanguage,
    notReload,
    defaultLanguages,
    defaultCurrentLanguage
  } = props
  const _languages = languagesState?.languages?.map(language => {
    return {
      value: language?.code, content: language?.name
    }
  })
  _languages && _languages.sort((a, b) =>
    (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)
  )
  return (
    _languages && _languages.length > 1 ? (
      <SelectWrapper>
        <Globe2 />
        <Select
          optionInnerMaxHeight='60vh'
          options={languagesState?.loading ? defaultLanguages : _languages}
          defaultValue={languagesState?.loading ? defaultCurrentLanguage : currentLanguage}
          onChange={(languageId) => handleChangeLanguage(languageId, {key: 'enabled', value: true})}
          notReload={notReload}
          minWidth='200px'
        />
      </SelectWrapper>
    ) : (
      <>
        {_languages && _languages.length === 1 ? (
          <LanguageItem>
            <Globe2 />
            <LanguageText>{_languages[0]?.content}</LanguageText>
          </LanguageItem>
        ) : (
          null
        )}
      </>
    )
  )
}

export const LanguageSelector = (props) => {
  const DefaultChangeLanguage = () => { }
  const langProps = {
    ...props,
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage,
    defaultLanguages: [{
      content: 'English',
      showOnSelected: 'EN',
      value: 'en'
    }],
    defaultCurrentLanguage: 'en'
  }
  return (
    <LanguageSelectorController {...langProps} />
  )
}
