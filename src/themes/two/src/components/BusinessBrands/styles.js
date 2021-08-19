import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const BusinessBrand = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding: 15px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    margin: 0 10px;
  }

  ${({ isChecked }) => !isChecked && css`
    > svg {
      color: #B1BCCC;
      font-size: 22px;
    }
  `}

  svg.fill {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}
`

export const AddNewBusinessBrandContainer = styled.div`
`

export const AddNewBusinessBrandTitle = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  padding: 15px;
`
