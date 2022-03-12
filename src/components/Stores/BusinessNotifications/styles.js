import styled from 'styled-components'

export const BusinessNotificationsContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.headingColor};
  margin-top: 5px;
  margin-bottom: 40px;
`
