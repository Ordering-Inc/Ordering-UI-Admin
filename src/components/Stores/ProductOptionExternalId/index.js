import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Container, FormControl } from './styles'
import { Button, Input } from '../../../styles'

export const ProductOptionExternalId = (props) => {
  const { value, handleChange, handleUpdate } = props
  const [, t] = useLanguage()

  return (
    <Container>
      <FormControl>
        <label htmlFor='externalId'>{t('EXTERNAL_ID', 'External Id')}</label>
        <Input
          defaultValue={value || ''}
          placeholder={t('EXTERNAL_ID', 'External Id')}
          onChange={(e) => handleChange(e.target.value)}
        />
      </FormControl>
      <Button
        color='primary'
        borderRadius='8px'
        onClick={handleUpdate}
      >
        {t('UPDATE', 'Update')}
      </Button>
    </Container>
  )
}
