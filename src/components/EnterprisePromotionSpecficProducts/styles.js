import styled from 'styled-components'
export const Container = styled.div`
  padding: 15px 5px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 32px;
    margin: 0;
  }

  > button {
    height: 44px;
    margin-top: 36px;
  }
`
export const BusinessesContainer = styled.div`
  > p {
    font-size: 14px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 3px;
  }
  > div {
    position: relative;
    margin-top: 0;
    box-shadow: none;
    border: none;
    padding: 0;
    height: initial;

    .pagination-container {
      position: relative;
      margin-top: 20px;
      justify-content: flex-start;
    }
  }
`
