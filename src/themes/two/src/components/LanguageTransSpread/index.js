import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { LanguageTransSpread as LanguageTransSpreadController } from './naked'
import {
  TransSpreadContainer
} from './styles'
import { SpreadSheetEditor } from '../SpreadSheetEditor'
import Skeleton from 'react-loading-skeleton'

const LanguageTransSpreadUI = (props) => {
  const {
    translationList
  } = props
  const [, t] = useLanguage()

  const spreadSheetHeaderItems = [
    { title: t('KEY', 'Key'), code: 'key', readOnly: true, type: 'text' },
    { title: t('TEXT', 'Text'), code: 'text', readOnly: false, type: 'text' }
  ]

  return (
    <TransSpreadContainer>
      {
        translationList?.loading ? (
          <Skeleton height={200} />
        ) : (
          <SpreadSheetEditor
            headerItems={spreadSheetHeaderItems}
            hotTableData={translationList?.translations}
          />
        )
      }

    </TransSpreadContainer>
  )
}

export const LanguageTransSpread = (props) => {
  const languageTransSpreadProps = {
    ...props,
    UIComponent: LanguageTransSpreadUI
  }
  return <LanguageTransSpreadController {...languageTransSpreadProps} />
}
