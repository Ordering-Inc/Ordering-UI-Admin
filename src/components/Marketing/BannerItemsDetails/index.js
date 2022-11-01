import React from 'react'
import { Switch } from '../../../styles'
import {
  Container,
  HeaderContainer
} from './styles'

export const BannerItemsDetails = (props) => {
  const {
    banner
  } = props

  return (
    <Container>
      <HeaderContainer>
        <h1>{banner?.name}</h1>
        <Switch
          defaultChecked
        />
      </HeaderContainer>
    </Container>
  )
}
