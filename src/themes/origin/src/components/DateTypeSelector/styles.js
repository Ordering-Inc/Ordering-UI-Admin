import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  input {
    border-radius: 20px;
    width: 140px;
    outline: none;
    padding: 3px 10px;
    border: 1px solid #F2F2F2;
  }
`
