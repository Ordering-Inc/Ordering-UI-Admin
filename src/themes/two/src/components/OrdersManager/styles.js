import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  margin-top: 60px;
  ${({ isSelectedOrders }) => isSelectedOrders && css`
    margin-top: 0px;
    padding: 20px 0 0 0;
  `}
  @media print {
    display: none;
  }

  @media (min-width: 760px) {
    margin-top: 0px;
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

export const WrapItemView = styled.div`
  width: 100%;
`
