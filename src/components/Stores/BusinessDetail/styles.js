import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
`
export const InfoConatiner = styled.div`
  width: 100%;
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
