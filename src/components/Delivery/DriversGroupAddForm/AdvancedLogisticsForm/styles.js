import styled, { css } from 'styled-components'

export const LogisticsContainer = styled.div``

export const OrderStatusWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  display: flex;
  align-items: center;
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

export const RadioButton = styled.div`
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
export const SubSectionContainer = styled.div`
  margin: 45px 0;
  > div {
    padding: 0;
    h1 {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
  }
`
