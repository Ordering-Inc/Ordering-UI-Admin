import styled, { css } from 'styled-components'
export const DeliveryDashboardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
`
export const DeliveryDashboardContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;  
`
export const DeliveryDashboardInnerContent = styled.div`
  width: 92%;
  height: 100%;

  @media (max-width: 576px) {
    width: 100%;
  }
`
export const MapAndOrderContent = styled.div`
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
`
export const WrapperOrdersAndDriver = styled.div`
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
  margin-top: 56px;
  overflow: auto;
  height: calc(100% - 56px);
`
export const OrdersOpenButton = styled.button`
  display: none;
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

  @media (max-width: 1200px) {
    display: block;
  }
`
export const OrdersCloseButton = styled.button`
  display: none;
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

  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: 576px) {
    position: fixed;
    z-index: 200;
    top: 80px;
  }
`
