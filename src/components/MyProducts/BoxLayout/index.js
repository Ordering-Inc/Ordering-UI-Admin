import React from 'react'
import {
  Container,
  InfoWrapper
} from './styles'

export const BoxLayout = (props) => {
  const {
    photo,
    title,
    description,
    children
  } = props

  return (
    <Container>
      <img src={photo} alt='' />
      <InfoWrapper>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </InfoWrapper>
    </Container>
  )
}
