import styled from 'styled-components'
export const DeliveryDashboardContainer = styled.div`
  display: flex;
  width: calc(100% - 60px);
  margin-left: 60px;
  min-height: calc(100vh - 65px);

  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`
