import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 365px;

  > button {
    position: sticky;
    top: 100%;
    height: 42px;
    margin-top: 20px;
  }
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;

  input {
    border-radius: 20px;
    width: auto;
    min-width: 220px;
    outline: none;
    padding: 3px 10px;
    border: 1px solid #F2F2F2;
  }

  ${props => props.theme?.rtl ? css`
    span {
      margin-left: 10px;
    }
  ` : css`
    span {
      margin-right: 10px;
    }
  `}

  @media (min-width: 768px) {
    padding: 0;
  }
`
