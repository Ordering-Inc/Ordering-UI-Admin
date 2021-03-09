import React, { useState, useEffect } from 'react'
import { MetaFields as MetaFieldsController, useLanguage } from 'ordering-components'
import { Alert } from '../Confirm'
import { SpinnerLoader } from '../SpinnerLoader'
import FaTrash from '@meronex/icons/fa/FaTrash'

import {
  WrapMetaFields,
  MetaTitle,
  MetaTable,
  RoundBorder,
  NoMetaField
} from './styles'

const MetaFieldsUI = (props) => {
  const {
    metaFieldsList,
    actionStatus,
    handleDeleteMetaField
  } = props
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (actionStatus.loading || actionStatus.error === null) return
    setAlertState({ open: true, content: actionStatus.error })
  }, [actionStatus])

  return (
    <>
      {metaFieldsList.loading ? (
        <SpinnerLoader primary />
      ) : (
        <WrapMetaFields>
          <MetaTitle>
            {t('CUSTOM_FEILDS', 'Custom Fields')}
          </MetaTitle>
          {metaFieldsList.metaFields.length > 0 ? (
            <MetaTable>
              <tbody>
                {metaFieldsList.metaFields.map(metaField => (
                  <tr key={metaField.id}>
                    <td>{metaField.value_type}</td>
                    <td>
                      <RoundBorder>{metaField.key}</RoundBorder>
                    </td>
                    <td>
                      <RoundBorder>{metaField.value}</RoundBorder>
                    </td>
                    <td>
                      <FaTrash onClick={() => handleDeleteMetaField(metaField.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </MetaTable>
          ) : (
            <NoMetaField>{t('NO_METAFIELD', 'No MetaField')}</NoMetaField>
          )}
        </WrapMetaFields>
      )}
      <Alert
        title={t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const MetaFields = (props) => {
  const MetaFieldsProps = {
    ...props,
    asDashboard: true,
    UIComponent: MetaFieldsUI
  }
  return <MetaFieldsController {...MetaFieldsProps} />
}
