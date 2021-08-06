import styled from 'styled-components'

export const DeliveriesContainer = styled.div`
  flex: 1;
  transition: all 0.5s;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media (min-width: 760px) {
    margin-top: 0px;
    padding: 20px;
  }

  @media print {
    display: none;
  }
`
export const OrdersContent = styled.div`
`
export const WrapItemView = styled.div`
  width: 100%;
`
