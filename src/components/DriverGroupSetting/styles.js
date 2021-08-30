import styled, { css } from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 18px;
  }
`

export const DriverGroupListContainer = styled.div`
  margin: 15px 0;
`

export const DriverGroupItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 0;
  cursor: pointer;

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`

export const CheckboxWrapper = styled.div`
  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
