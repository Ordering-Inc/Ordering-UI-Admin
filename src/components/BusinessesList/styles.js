import styled, { css } from 'styled-components'

export const BusinessListContainer = styled.div`
  max-height: calc(100vh - 330px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 300px);
  }
`

export const BusinessListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 950px;
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
    width: 35%;
  }

  th.action {
    width: 10%;
  }

  td.business-id {
    font-size: 13px;
    font-weight: 500;
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
  max-height: calc(100vh - 210px);
  overflow: auto;
`

export const AddNewButtonLink = styled.div`
  width: fit-content;
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
`

export const BusinessListBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
export const AddFirstStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0 20px 0;

  > img {
    width: 200px;
    margin-bottom: 12px;
  }

  > button {
    height: 44px;
  }

  @media (min-width: 768px) {
    > img {
      width: 370px;
    }
  }
`
