import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const BusinessType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding: 15px;

  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}

  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    margin: 0 10px;
  }

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const AddNewBusinessTypeContainer = styled.div`
`

export const AddNewBusinessTypeTitle = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  padding: 15px;
`
