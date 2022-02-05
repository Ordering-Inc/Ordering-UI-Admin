import styled, { css } from 'styled-components'

export const LogisticsContainer = styled.div`
  padding: 20px 0;
  min-height: calc(100% - 120px);

  > button {
    position: sticky;
    top: 100%;
    height: 42px;
    margin: 30px 0 20px;
  }
`

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

export const LogisticsConfigsContainer = styled.div`
  margin-top: 80px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  margin-bottom: 50px;
  overflow: hidden;
  > div:last-child {
    border-bottom: none;
  }
`

export const LogisticsConfigItem = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  span {
    font-size: 14px;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
  
  svg {
    font-size: 20px;
  }
`
