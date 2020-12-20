import styled, { css } from 'styled-components'

export const PlaceholderTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;

  img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  column-gap: 20px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`

export const OptionType = styled.div`
`
export const OptionValue = styled.div`
`
