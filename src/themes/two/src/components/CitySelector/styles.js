import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  font-size: 14px;

  ${({ isDefault }) => isDefault ? css`
    padding: 5px 15px;
  ` : css`
    padding: 10px 15px;
  `}

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`

export const PlaceholderTitle = styled(Option)`
  color: ${props => props.theme.colors.secundaryContrast};
  font-size: 14px;

  ${({ isDefault }) => isDefault ? css`
    padding: 5px 15px;
    ` : css`
    padding: 10px 15px;
  `}
`
