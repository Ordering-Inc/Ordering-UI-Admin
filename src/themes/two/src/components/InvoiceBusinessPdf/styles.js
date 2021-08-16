import styled from 'styled-components'

export const PdfContainer = styled.div``

export const PdfInvoice = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: #333;

  table {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    border-collapse: collapse;

    thead {
      tr {
        color: #fff;
        font-weight: bold;

        &: first-child {
          border: 1px solid #222434;
          background-color: #222434;
        }

        &: last-child {
          border: 1px solid #393d57;
          background-color: #393d57;
        }
      }

      th {
        text-align: center;
        font-size: 16px;
      }
    }

    tr {
      
      .number {
        text-align: right;
      }

      td {
        padding: 3px 10px;
      }
    }

    tbody {
      tr {
        td {
          border: 1px solid #ccc;
          color: #333;
          font-size: 15px;
        }
      }
    }

    tfoot {
      tr {
        border: 1px solid #ccc;
        background-color: #ddd;

        td {
          font-size: 15px;
          border: 1px solid #ccc;

          &: first-child {
            text-align: right;
          }
        }
      }
    }
  }

  .notes {
    padding: 10px;
    white-space: normal;
    font-size: 14px;
    background-color: #eee;
  }
`
