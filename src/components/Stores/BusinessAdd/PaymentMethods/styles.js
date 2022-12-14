import styled, { css } from 'styled-components'

export const Container = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 25px;
  }
`

export const ContentWrapper = styled.div`
  overflow: auto;
  max-height: 500px;
`

export const PaymethodItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  ${({ isBorderTop }) => isBorderTop && css`
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  `}

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};

    &.enabled {
      color: ${props => props.theme.colors.primary};
    }
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-left: 20px;
    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 20px;
    `}
  }
`
