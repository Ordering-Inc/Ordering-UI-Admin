import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding-top: 30px;
`
export const HistoriesWrapper = styled.div`
  position: relative;
  ${({ isLoading }) => !isLoading && css`
    &:before {
      content: "";
      background: ${props => props.theme.colors.borderColor};
      position: absolute;
      width: 2px;
      top: 7px;
      height: calc(100% - 37px);
      ${props => props.theme?.rtl ? css`
        right: 2px;
      ` : css`
        left: 2px;
      `}
    }
  `}
`
export const HistoryItem = styled.div`
  margin-bottom: 45px;
`
export const TransactionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  position: relative;
  svg {
    color: ${props => props.theme.colors.lightGray};
    font-size: 6px;
    position: absolute;
  }
  .date {
    color: ${props => props.theme.colors.lightGray};
    margin: 0 15px;
  }
`
export const Transaction = styled.div`
  margin-bottom: 5px;
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
`
export const TransactionDescription = styled.p`
  color: ${props => props.theme.colors.lightGray};
  font-size: 12px;
  margin: 0;
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
`
export const Amount = styled.span`
  font-weight: 500;
  ${({ negative }) => !negative && css`
    color: ${props => props.theme.colors.primary};
  `}
`
