import styled from 'styled-components'

export const WrapMetaFields = styled.div`
  padding: 10px;
  box-sizing: border-box;
`
export const MetaTitle = styled.p`
  font-size: 18px;
  font-weight: 600;  
`
export const MetaTable = styled.table`
  width: 100%;

  tr {
    td {
      vertical-align: baseline;
      padding: 5px 0;
      
      &:nth-child(3) {
        word-break: break-all;
      }
      svg {
        color: darkRed;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 576px) {
    tr {
      td {
        &:first-child {
          min-width: 100px;
        }
      }
    }
  }
`
export const RoundBorder = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 0 15px;
`
export const NoMetaField = styled.p`
  font-size: 14px;
`
