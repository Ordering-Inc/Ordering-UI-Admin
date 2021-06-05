import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  p {
    text-align: center;
    font-size: 20px;
    margin: 0px;

    span {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
    }
  }
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      transform: scale(2);
    }
  
    to {
      transform: scale(1);
    }
  }
`
