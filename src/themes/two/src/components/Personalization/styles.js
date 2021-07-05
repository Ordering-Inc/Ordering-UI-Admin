import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 30px;
    width: 100%;
  }

  p {
    color: ${props => props.theme.colors.headingColor};
  }

  img {
    width: 300px;
  }
`
