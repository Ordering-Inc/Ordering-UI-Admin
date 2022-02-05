import React, { useEffect, useState } from 'react'
import { useLanguage, LanguageTransSpread as LanguageTransSpreadController } from 'ordering-components-admin'
import {
  TransSpreadContainer
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { Alert, SpreadSheetEditor } from '../../Shared'

const LanguageTransSpreadUI = (props) => {
  const {
    translationList,
    creationFormState,
    handleItemChange,
    handleAfterSectionEnd,
    handleoutsideClickDeselects,
    searchValue
  } = props

  const [, t] = useLanguage()
  const [hotTableData, setHotTableData] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const spreadSheetHeaderItems = [
    { title: t('KEY', 'Key'), code: 'key', readOnly: true, type: 'text' },
    { title: t('TEXT', 'Text'), code: 'text', readOnly: false, type: 'text' }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (translationList?.loading) return
    let translations = []
    if (searchValue) {
      translations = translationList?.translations?.filter(translation => (translation.key?.toLowerCase().includes(searchValue.toLowerCase()) || translation.text.toLowerCase().includes(searchValue.toLowerCase())))
    } else {
      translations = [...translationList?.translations]
    }
    setHotTableData(translations)
  }, [translationList, searchValue])

  useEffect(() => {
    if (creationFormState?.result?.error) {
      setAlertState({
        open: true,
        content: creationFormState?.result?.result
      })
    }
  }, [creationFormState?.result])

  return (
    <>
      <TransSpreadContainer>
        {
          (translationList?.loading && !creationFormState?.result) ? (
            <Skeleton height={200} />
          ) : (
            <SpreadSheetEditor
              headerItems={spreadSheetHeaderItems}
              hotTableData={hotTableData}
              handleItemChange={handleItemChange}
              handleAfterSectionEnd={handleAfterSectionEnd}
              handleoutsideClickDeselects={handleoutsideClickDeselects}
            />
          )
        }
      </TransSpreadContainer>
      <Alert
        title={t('TRANSLATIONS', 'Translations')}
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

export const LanguageTransSpread = (props) => {
  const languageTransSpreadProps = {
    ...props,
    UIComponent: LanguageTransSpreadUI
  }
  return <LanguageTransSpreadController {...languageTransSpreadProps} />
}
