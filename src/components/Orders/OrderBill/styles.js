import styled, { css } from 'styled-components'

export const OrderBillContainer = styled.div`
  color: ${props => props.theme.colors.headingColor};
  padding: 15px 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 100%;
    font-size: 15px;
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }

  table.total {
  border-top: 1px solid #E9ECEF;
    margin-top: 15px;
    tr {
      font-size: 16px;
      td {
        font-weight: bold;
        padding-top: 10px;
      }
    }
  }
  table.comments {
    margin-top: 20px;
    align-items: center;
  }
`
