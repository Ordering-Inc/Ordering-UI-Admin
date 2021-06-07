import styled from 'styled-components'

export const OrdersSearch = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 13px;
    left: 14px;
  }

  input {
    width: 250px;
    border: 1px solid #1C202E;
    border-radius: 22px;
    outline: none;
    padding: 8px;
    padding-left: 40px;
    font-size: 15px;

    &::placeholder {
      color: #182964;
    }
  }

  @media (max-width: 1200px) {
    flex: 1;

    input {
      width: 100%;
      box-sizing: border-box;
    }
  }
`
