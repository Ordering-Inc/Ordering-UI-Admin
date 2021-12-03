import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles'

import {
  Container
} from './styles'

export const EnterprisePromotionSpecficProducts = (props) => {
  const {
    promotionState,
    formState,
    handleChangeItem,
    onClickDone
  } = props
  const [, t] = useLanguage()

  return (
    <Container>
      <h1>{t('PRODUCTS_SPECIFIC', 'Product specific')}</h1>
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => onClickDone()}
      >
        {t('DONE', 'Done')}
      </Button>
    </Container>
  )
}
