import styled from 'styled-components'

export const OrdersListContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  @media print {
    display: none;
  }
`
export const OrdersContent = styled.div`

`
export const OrdersInnerContent = styled.div`
`
export const WrapperIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: #151824;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`
export const OrderNotification = styled.div`
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
export const WrapItemView = styled.div`
  width: 100%;
`
