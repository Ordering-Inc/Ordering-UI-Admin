import styled, { css } from 'styled-components'

export const Container = styled.form`
  min-height: calc(100% - 160px);

  > button {
    position: sticky;
    top: 100%;
    height: 42px;
    margin: 30px 0 20px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  label {
    font-size: 14px;
  }

  div {
    font-size: 14px;
  }

  .select {
    padding: 11px 0;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
  .list {
    .options {
      > div {
        > div {
          padding: 7px 10px;
        }
      }
    }
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    margin: 0px;
    ${props => props.theme?.rtl ? css`
      padding-right: 10px;
    ` : css`
      padding-left: 10px;
    `}
  }
`
