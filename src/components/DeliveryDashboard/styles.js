import styled, { css } from 'styled-components'

export const DeliveryDashboardContainer = styled.div`
  margin-top: 20px;
  height: calc(100% - 20px);
  background: #FAFAFA;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: calc(100% - 30px);
  }

  @media (max-width: 576px) {
    height: calc(100vh - 65px);
  }
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
  position: absolute;
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
export const WrapperQuickShow = styled.div`
  display: flex;
  margin-top: 56px;
  padding: 5px 20px;
  justify-content: flex-end;
  column-gap: 10px;

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`
export const OrderAndDriverListContainer = styled.div`
  overflow: auto;
  height: calc(100% - 91px);
`
export const WrapperOrderlist = styled.div`
`
