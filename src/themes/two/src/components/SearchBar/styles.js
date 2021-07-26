import styled, { css } from 'styled-components'

export const OrdersSearch = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 11px;
    ${props => props.theme?.rtl ? css`
      right: 15px;
    ` : css`
      left: 15px;
    `}
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};
  }

  input {
    width: 250px;
    border: 1px solid #1C202E;
    border-radius: 22px;
    outline: none;
    padding: 10px 8px;
    padding-left: 40px;
    font-size: 15px;

    &::placeholder {
      color: #909BA9;
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
