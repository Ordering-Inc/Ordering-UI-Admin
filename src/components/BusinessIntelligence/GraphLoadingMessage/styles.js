import styled from 'styled-components'

export const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  margin-top: 10px;

  @keyframes spinner-content {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }

  svg {
    margin: 0 5px;
    animation: spinner-content 1.85s linear infinite;
  }
`
