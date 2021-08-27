import styled from 'styled-components'

export const UsersListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }
`
