import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;

  ${({ deliveryAndMessageUI }) => deliveryAndMessageUI && css`
    width: 100%;
  `}

  @media (max-width: 1400px) {
    width: 100%;
    padding-right: 0px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }

  transition: all 0.5s;
`
export const OrdersContent = styled.div`
  width: calc(100% - 100px);
  margin-left: 100px;
  display: flex;
  justify-content: center;
  min-width: 300px;

  @media (max-width: 992px) {
    width: calc(100% - 42px);
    margin-left: 42px;
  }

  @media (max-width: 600px) {
    width: 95%;
    margin: 0px auto;
  }

  ${({ messageUI }) => messageUI && css`
    margin-left: 0px;
    width: 100%;
    @media (max-width: 992px) {
      width: 100%;
      margin-left: 0px;
    }
  `}
`
export const OrdersInnerContent = styled.div`
  width: 92%;

  @media (max-width: 1400px) {
    width: 95%;
  }
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
  height: calc(100% - 50px);

  @media (max-width: 1200px) {
    height: calc(100% - 90px);
  }
`
