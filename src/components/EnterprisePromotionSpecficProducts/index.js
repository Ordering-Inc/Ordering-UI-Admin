import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles'
import { BusinessSelectHeader } from '../BusinessSelectHeader'

import {
  Container,
  BusinessesContainer
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
      <BusinessesContainer>
        <p>{t('FRONT_VISUALS_RESTAURANTS', 'Businesses')}</p>
        <BusinessSelectHeader
          defaultPageSize={10}
        />
      </BusinessesContainer>
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
