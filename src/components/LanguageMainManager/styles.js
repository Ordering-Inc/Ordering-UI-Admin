import styled, { css } from 'styled-components'

export const MainManagerContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow: auto;
`

export const MainManagerTable = styled.table`
  width: 100%;
  min-width: 800px;
`

export const TableHeader = styled.thead`
  border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
  th {
    padding: 10px 0;
    font-size: 12px;
    font-weight: bold;
    width: 50%;
    &:first-child {
      ${props => props.theme?.rtl ? css`
        padding-left: 20px;
      ` : css`
        padding-right: 20px;
      `}
    }

    &:last-child {
      padding-left: 25px;
      ${props => props.theme?.rtl && css`
        padding-right: 25px;
        padding-left: 0;
      `}
    }
  }
`

export const TableBody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  td {
    padding: 7px 0;
    font-size: 12px;
    width: 50%;

    &:first-child {
      ${props => props.theme?.rtl ? css`
        padding-left: 20px;
      ` : css`
        padding-right: 20px;
      `}
    }


    > input {
      border: none;
      width: 100%;
      padding: 10px 0;
      outline: none;

      ${props => props.theme?.rtl ? css`
        padding-right: 25px;
        border-right: 1px solid ${props => props.theme?.colors.borderColor};
      ` : css`
        padding-left: 25px;
        border-left: 1px solid ${props => props.theme?.colors.borderColor};
      `}
    }
  }
`
