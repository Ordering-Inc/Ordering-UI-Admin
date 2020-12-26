import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  display: flex;
  width: calc(100% - 140px);
  padding: 30px 20px;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    width: 100%;
    padding-right: 0px;
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }
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

export const MapAndOrderContent = styled.div`
  ${({ deliveryUI }) => deliveryUI && css`
    margin-top: 20px;
    height: calc(100% - 65px);
    background: #ccc;
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 1200px) {
      height: calc(100% - 120px);
    }

    @media (max-width: 576px) {
      height: calc(100vh - 65px);
    }
  `}
`
export const WrapperOrdersAndDriver = styled.div`
  ${({ deliveryUI }) => deliveryUI && css`
    width: 350px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
    position: absolute;
    background: #fff;
    right: 10px;
    top: 15px;
    height: calc(100% - 30px);
    overflow: hidden;

    @media (max-width: 576px) {
      position: fixed;
      z-index: 100;
      top: 75px;
      height: calc(100vh - 80px);
    }
  `}
`

export const WrapperTab = styled.div`
  position: fixed;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #F2F2F2;
`
export const Tab = styled.div`
  width: 50%;
  text-align: center;
  color: #C3C3C3;
  cursor: pointer;
  font-weight: 500;

  ${({ active }) => active && css`
    color: #1C202E;
  `}
`
export const OrderAndDriverListContainer = styled.div`
  ${({ deliveryUI }) => deliveryUI && css`
    margin-top: 56px;
    overflow: auto;
    height: calc(100% - 56px);
  `}
`
export const OrdersOpenButton = styled.button`
  display: block;
  position: absolute;
  right: 10px;
  top: 20px;
  border: none;
  outline: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.btnDarkBlue};
  }
`
export const OrdersCloseButton = styled.button`
  display: block;
  position: absolute;
  right: 10px;
  top: 20px;
  border: none;
  outline: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.btnDarkBlue};
  }

  @media (max-width: 576px) {
    position: fixed;
    z-index: 200;
    top: 80px;
  }
`
export const WrapperOrderlist = styled.div``
