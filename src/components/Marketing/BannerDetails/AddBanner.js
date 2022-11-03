import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input } from '../../../styles'
import {
  AddBannerContainer,
  FormController
} from './styles'

export const AddBanner = (props) => {
  const {
    changesState,
    handleChangeItem,
    handleAddBanner,
    defaultPosition
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    handleChangeItem({ position: defaultPosition })
  }, [])

  return (
    <AddBannerContainer>
      <FormController>
        <label>{t('NAME', 'Name')}</label>
        <Input
          defaultValue={changesState.changes?.name || ''}
          onChange={e => handleChangeItem({ name: e.target.value })}
        />
      </FormController>
      <Button
        color='primary'
        borderRadius='8px'
        disabled={Object.keys(changesState.changes).length === 0 || changesState.loading}
        onClick={() => handleAddBanner()}
      >
        {t('ADD', 'Add')}
      </Button>
    </AddBannerContainer>
  )
}
