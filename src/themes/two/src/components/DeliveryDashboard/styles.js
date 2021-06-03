import styled, { css } from 'styled-components'

export const DeliveryDashboardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 0px;

  @media (min-width: 760px) {
    margin-top: 15px
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: calc(100vh - 95px);
  }
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
  overflow: hidden;
  margin-top: 20px;

  @media (min-width: 1024px) {
    width: 330px;
    max-width: 330px;
    margin-top: 0px;
  }

  @media (min-width: 1300px) {
    max-width: 500px;
    width: 500px;
  }
`

export const WrapperOrderlist = styled.div`
  padding: 15px;
  overflow-x: hidden;
  height: calc(100% - 135px);
`

export const WrapperDriversLocation = styled.div`
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  
  @media (min-width: 1024px) {
    margin-top: 0px;
    height: 100%;
    flex: 1;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`
