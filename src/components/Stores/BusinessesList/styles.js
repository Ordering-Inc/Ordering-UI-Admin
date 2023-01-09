import styled, { css } from 'styled-components'

export const BusinessListContainer = styled.div`
  max-height: calc(100vh - 330px);
  overflow: auto;

  @media (min-width: 768px) {
    max-height: calc(100vh - 320px);
  }
`

export const BusinessListTable = styled.table`
  width: calc(100% - 10px);
  min-width: 650px;
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
        background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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

export const CheckBoxWrapper = styled.div`
  cursor: pointer;
  display: flex;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
  }

  ${({ isChecked }) => isChecked && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}
`

export const BusinessIdWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > label {
    margin-left: 5px;
    ${props => props.theme.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
    `}
  }
`

export const FeaturedWrapper = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 5px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 5px;
    `}
  }
`
