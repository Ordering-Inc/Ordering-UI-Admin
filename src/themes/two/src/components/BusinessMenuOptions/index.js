import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import MdcShareVariantOutline from '@meronex/icons/mdc/MdcShareVariantOutline'
import { Button } from '../../styles/Buttons'

import {
  Container,
  Header,
  ActionBlock
} from './styles'

export const BusinessMenuOptions = (props) => {
  const {
    onClose
  } = props
  const [, t] = useLanguage()

  return (
    <Container>
      <Header>
        <h1>{t('MENU_NAME', 'Menu name')}</h1>
        <ActionBlock>
          <Button
            color='secundary'
            borderRadius='5px'
          >
            <MdcShareVariantOutline />
          </Button>
          <MdcClose
            onClick={() => onClose()}
          />
        </ActionBlock>
      </Header>
    </Container>
  )
}
