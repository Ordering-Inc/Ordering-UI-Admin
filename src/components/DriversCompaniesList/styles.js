import styled, { css } from 'styled-components'

export const DriversCompaniesContainer = styled.div`
  margin-top: 20px;
`

export const TableWrapper = styled.div`
  overflow: auto;
`

export const CompaniesTable = styled.table`
  width: calc(100% - 10px);
  min-width: 900px;
  color: ${props => props.theme.colors?.headingColor};

  td, th {
    padding: 10px 0;
    font-size: 12px;
    &:first-child {
      width: 30%;
    }

    &:nth-child(2),    
    &:nth-child(3),    
    &:nth-child(4) {
      width: 18%;
    }
  }

  thead {
    tr {
      border-bottom: solid 1px ${props => props.theme.colors.disabled};
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
    &.active {
      background-color: ${props => props.theme.colors.lightPrimary};
      td {
        border-top: 1px solid ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
      }
    }
  }
`

export const TimezoneWrapper = styled.div`
  font-size: 12px;
  ${({ isHeader }) => isHeader ? css`
    font-weight: 700;
  ` : css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
      padding-left: 10px;
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      margin-right: 20px;
      padding-right: 10px;
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
`

export const PriorityWrapper = styled(TimezoneWrapper)``

export const LimitWrapper = styled(TimezoneWrapper)``

export const CompanyNameContainer = styled(TimezoneWrapper)`
  display: flex;
  align-items: center;

  > p {
    font-size: 12px;
    margin: 0px;
  }
`

export const CheckBoxWrapper = styled.div`
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
  svg {
    font-size: 24px;
    color: #B1BCCC;
  }

  ${({ isChecked }) => isChecked && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}
  button {
    background: transparent !important;
    border: none;
    padding: 0px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  .show {
    button {
      background: ${props => props.theme.colors.secundary} !important;
      border-color: unset !important;
      box-shadow: none !important;
    }
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  > div {
    > div {
      border-radius: 8px;
      .dropdown-item {
        font-size: 12px;
        color: ${props => props.theme.colors.headingColor};
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`

export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  margin: 15px 0;
`

export const AddNewCompanyButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};
`
