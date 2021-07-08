import styled from 'styled-components'

export const SpreadSheetContainer = styled.div`
  .wtHider {
    width: 100% !important;
    .wtSpreader {
      width: 100% !important;
    }
  }

  .wtHolder {
    width: 100% !important;
    height: 100% !important;
  }

  table {
    width: 100% !important;

    td {
      padding: 15px;
      text-align: left !important;
      font-size: 13px;
      color: ${props => props.theme.colors.headingColor} !important;
      border: none !important;
      border-bottom: 1px solid #E9ECEF !important;
    }
    th {
      text-align: left;
      background: #FFF;
      border: none !important;
      border-bottom: 1px solid #B1BCCC !important;
      > div {
        padding: 15px !important;
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.colors.headingColor} !important;
      }
    }
  }

  #hot-display-license-info {
    display: none;
  }
`
