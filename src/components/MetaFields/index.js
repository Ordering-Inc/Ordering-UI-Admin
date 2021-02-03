import React from 'react'
import { useLanguage } from 'ordering-components'
import { MetaFields as MetaFieldsController } from './MetaFieldsController'
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
  const { metaFieldsList } = props
  const [, t] = useLanguage()

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
                      <FaTrash />
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
