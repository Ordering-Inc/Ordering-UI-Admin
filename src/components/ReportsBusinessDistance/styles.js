import styled, { css } from 'styled-components'

export const ReportsDistanceContainer = styled.div`
  padding: 35px 15px;
  width: 100%;

  @media (min-width: 700px) {
    padding: 35px;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme?.colors.headingColor};
  margin-top: 0;
  margin-bottom: 30px;
`

export const ButtonActionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const CalendarWrapper = styled.div`
  position: relative;

  > button {
    margin-top: 5px;
    padding: 7px 15px;
    color: ${props => props.theme?.colors.secundaryContrast};
    background: ${props => props.theme?.colors.secundary};
    border-radius: 7.6px;
    border: none;
    text-align: left;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    svg {
      font-size: 16px;
      margin-right: 12px;

      ${props => props.theme.rtl && css`
        margin-left: 12px;
        margin-right: 0;
      `}
    }
  }
`

export const BrandBusinessWrapper = styled(CalendarWrapper)`
  display: flex;

  > button {
    margin-right: 10px;
    margin-left: 0;

  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
  }
`

export const DistancePerBrandWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  padding: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
`

export const DistanceTitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    font-weight: 600;
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
  }

  svg {
    font-size: 16px;
    color: #212121;
    cursor: pointer;
  }

  ${({ active }) => !active && css`
    svg {
      cursor: not-allowed;
    }
  `}
`

export const DistanceTable = styled.table`
  width: 100%;
  min-width: 500px;
`

export const Thead = styled.thead`
  tr {
    th {
      font-weight: 500;
      font-size: 12px;
      padding: 8px 5px;

      &:not(:first-child) {
        text-align: center;
      }
    }

    &:nth-child(2) {
      th:nth-child(2) {
        text-align: left;
      }
    }
  }
`

export const Tbody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme?.colors.secundaryDarkContrast};

  tr {
    td {
      padding: 12px 5px;
      font-size: 12px;
      text-align: center;
      color: ${props => props.theme?.colors.lightGray};

      &:not(:first-child):not(:last-child) {
        border-left: 1px solid ${props => props.theme?.colors.secundaryDarkContrast};
        border-right: 1px solid ${props => props.theme?.colors.secundaryDarkContrast};
      }

      &:first-child, &:nth-child(2) {
        text-align: left;
        color: ${props => props.theme?.colors.headingColor};
      }
    }
  }
`

export const Tfoot = styled.tfoot`
  tr {
    td {
      font-weight: 500;
      font-size: 12px;
      padding: 12px 0;

      &:not(:first-child) {
        text-align: center;
      }
    }
  }
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const CustomerLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LegendItem = styled.div`
  margin-top: 20px;
  margin-right: 20px;

  ${props => props.theme?.rtl && css`
    margin-right: 0;
    margin-left: 20px;
  `}

  p {
    font-weight: 500;
    font-size: 17px;
    margin: 0;
  }
`

export const LegendContent = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 12px;
    height: 12px;
    min-width: 12px;
    min-height: 12px;
    border-radius: 1px;
    margin-right: 3px;
    background: red;

    ${props => props.theme.rtl && css`
      margin-right: 0;
      margin-left: 3px;
    `}
  }

  > span {
    font-size: 12px;
    color: ${props => props.theme?.colors.lightGray};
  }
`
