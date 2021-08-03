import styled from 'styled-components'

export const UsersListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  margin-top: 60px;

  @media print {
    display: none;
  }

  @media (min-width: 760px) {
    margin-top: 0px;
  }
`
