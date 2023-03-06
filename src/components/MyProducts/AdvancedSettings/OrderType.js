import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../../styles'
import {
  FormControl
} from './styles'

export const OrderType = (props) => {
  const { path, typeValues, handleUpdateThemeValue } = props
  const [, t] = useLanguage()

  return (
    <>
      <FormControl>
        <label>{t('TITLE', 'Title')}</label>
        <Input
          placeholder={t('TITLE', 'Title')}
          defaultValue={typeValues?.title || ''}
          onChange={(e) => handleUpdateThemeValue(e.target.value, [path, 'title'].join('.'))}
        />
      </FormControl>
      <FormControl>
        <label>{t('DESCRIPTION', 'Description')}</label>
        <Input
          placeholder={t('DESCRIPTION', 'Description')}
          defaultValue={typeValues?.description || ''}
          onChange={(e) => handleUpdateThemeValue(e.target.value, [path, 'description'].join('.'))}
        />
      </FormControl>
      <FormControl>
        <label>{t('CALL_TO_ACTION', 'Call to action')}</label>
        <Input
          placeholder={t('CALL_TO_ACTION', 'Call to action')}
          defaultValue={typeValues?.call_to_action || ''}
          onChange={(e) => handleUpdateThemeValue(e.target.value, [path, 'call_to_action'].join('.'))}
        />
      </FormControl>
    </>
  )
}
