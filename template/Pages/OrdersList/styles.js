import styled from 'styled-components'
export const OrdersListContainer = styled.div`
  display: flex;
  width: calc(100% - 60px);
  margin-left: 60px;
  min-height: calc(100vh - 65px);

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`
