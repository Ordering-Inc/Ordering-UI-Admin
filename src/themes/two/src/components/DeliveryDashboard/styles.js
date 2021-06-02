import styled, { css } from 'styled-components'

export const DeliveryDashboardContainer = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  margin-top: 15px;
`

export const FiterContainer = styled.div`
  position: sticky;
  top: 0px;
  background: #FFF;
  z-index: 100;
`

export const OrdersContainer = styled.div`
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  height: 100%;
  max-width: 500px;
  width: 500px;
`

export const WrapperOrderlist = styled.div`
  padding: 15px;
  overflow-x: hidden;
  height: calc(100% - 135px);
`

export const WrapperDriversLocation = styled.div`
  height: 100%;
  flex: 1;
  border-radius: 8px;
  overflow: hidden;

  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
`
