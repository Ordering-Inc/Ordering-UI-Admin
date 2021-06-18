import styled from 'styled-components'

export const OrderBillContainer = styled.div`
  color: #191919;
  padding: 20px 0;
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
    border-top: 1px solid #BFBFBF;
    margin-top: 15px;
    tr {
      font-size: 16px;
      td {
        font-weight: bold;
        padding-top: 10px;
      }
    }
  }
`
