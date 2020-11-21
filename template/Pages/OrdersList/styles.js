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

export const PageContent = styled.div`
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
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 300px;

  @media (max-width: 600px) {
    width: 95%;
    margin: 0px;
  }
`
export const OrdersInnerContent = styled.div`
  width: 92%;

  @media (max-width: 1400px) {
    width: 95%;
  }
`
