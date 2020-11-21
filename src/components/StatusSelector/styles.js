import styled, { css } from 'styled-components'

export const PlaceholderTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 5px 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`
