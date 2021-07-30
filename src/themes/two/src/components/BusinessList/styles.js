import styled, { css } from 'styled-components'

export const BusinessListContainer = styled.div`
  max-height: calc(100vh - 400px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 300px);
  }
`

export const BusinessListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};
  transition: all 0.3s;

  td, th {
    padding: 10px 0;
  }

  th {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
  }

  th.business,
  td.business {
    width: 30%;
  }

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.disabled};
    tr {
      th {
        position: sticky;
        top: 0px;
        z-index: 100;
        background: #FFF;
      }
    }
  }
`

export const WrapperPagination = styled.div`
  margin-top: 20px;
`

export const BusinessCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  ${props => props.theme?.rtl ? css`
    transform: translateX(10px);
  ` : css`
    transform: translateX(-10px);
  `}
`

export const AddNewButtonLink = styled.div`
  width: fit-content;
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  margin-top: 15px;
`
