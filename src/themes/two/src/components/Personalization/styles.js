import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${props => props.theme.colors.headingColor};
  }

  img {
    width: 300px;
  }
`
