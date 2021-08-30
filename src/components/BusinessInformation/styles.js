import styled from 'styled-components'

export const InfoConatiner = styled.div`
  height: 100%;
  overflow-x: hidden;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
  }
  @media (min-width: 1000px) {
    padding: 20px;
  }
`
