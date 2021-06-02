import styled from 'styled-components'

export const DeliveriesContainer = styled.div`
  width: 100%;
  transition: all 0.5s;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media (min-width: 760px) {
    margin-top: 0px;
    padding: 20px;
  }
`
export const OrdersContent = styled.div`
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
      color: #182964;
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
