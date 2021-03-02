import styled from 'styled-components'

export const OrdersContainer = styled.div`
  width: 100%;
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
