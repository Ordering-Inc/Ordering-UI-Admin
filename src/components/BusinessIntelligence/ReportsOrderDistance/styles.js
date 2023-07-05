import styled, { css } from 'styled-components'

export const ReportsDistanceContainer = styled.div`
  padding: 25px 15px 70px 15px;
  width: 100%;
  overflow: auto;

  @media (min-width: 700px) {
    padding: 25px 35px 70px 35px;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme?.colors.headingColor};
  margin-top: 0;
  margin-bottom: 30px;
  margin-right: 35px;
  ${props => props.theme?.rtl && css`
    margin-right: 0;
    margin-left: 35px;
  `}
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
        margin-right: 0;
        margin-left: 12px;
      `}
    }
  }

  @media only screen and (min-width: 374px) and (max-width: 450px) {
    .ordering-calendar {
      right: calc((100vw - 364px) / 2);
    }
  }

  @media (max-width: 450px) {
    width: 100%;
    flex-wrap: wrap;
    > button {
      width: 100%;
      margin-left: 0 !important;
      margin-right: 0 !important;
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
  position: sticky;
  top: 0px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border-bottom: 1px solid ${props => props.theme?.colors.secundaryDarkContrast};

  tr {
    th {
      padding: 12px 5px;
      font-weight: 500;
      font-size: 12px;

      &:not(:first-child) {
        text-align: center;
      }

      &:not(:first-child):not(:last-child) {
        border-left: 1px solid ${props => props.theme?.colors.secundaryDarkContrast};
        border-right: 1px solid ${props => props.theme?.colors.secundaryDarkContrast};
      }
    }
    &:not(:first-child) {
      th {
        &:nth-child(even) {
          border-right: 1px solid transparent !important;
        }
        &:nth-child(odd) {
          border-left: 1px solid transparent !important;
        }
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

      &:nth-child(even) {
        border-right: 1px solid transparent !important;
      }
      &:nth-child(odd) {
        border-left: 1px solid transparent !important;
      }

      &:first-child {
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
  max-height: 350px;
`

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const AnalyticsTimeZoneWrapper = styled.div`
  width: 100%;
  button {
    margin-top: 5px;
    background: ${props => props.theme.colors.secundary};
    border-radius: 7.6px;
    padding: 7px 15px;
    font-size: 14px;
    color: ${props => props.theme.colors.secundaryContrast};
    border: none;
  }

  @media (min-width: 600px) {
    width: fit-content;
    margin-left: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  }
`

export const TimeZoneAndCalendar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    width: fit-content;
  }
`
