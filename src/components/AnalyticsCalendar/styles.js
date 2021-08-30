import styled from 'styled-components'

export const AnalyticsCalendarContainer = styled.div`
  padding-top: 15px;
  background: #FFFFFF;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  top: 100%;
  right: -50px;
  width: 300px;
  margin-top: 18px;

  @media (min-width: 576px) {
    right: 0;
  }

  .DateRangePicker__PaginationArrow: hover {
    background: none;
    > div {
      transition: all 0.3s;
      transform: scale(1.1);
    }
    .DateRangePicker__PaginationArrowIcon--previous {
      border-right: 8px solid ${props => props.theme?.colors.headingColor};
    }
    .DateRangePicker__PaginationArrowIcon--next {
      border-left: 8px solid ${props => props.theme?.colors.headingColor};
    }
  }

  .DateRangePicker__MonthHeader {
    color: #748194;
  }

  table {
    border-collapse: collapse;
    border: none;

    thead {
      th {
        border: none;
      }
    }

    tbody {
      td {
        color: ${props => props.theme.colors.headingColor};
        .DateRangePicker__CalendarHighlight {
          border: 1px solid ${props => props.theme?.colors.primary};
        }
      }
    }

    .DateRangePicker__Date {
      border: none;
    }

    .DateRangePicker__CalendarSelection {
      background: #E9F2FE;
      color: ${props => props.theme.colors.headingColor};
      border: none;
    }

    .DateRangePicker__Date--weekend {
      background-color: #FFFFFF;
    }

    .DateRangePicker__WeekdayHeading abbr[title] {
      color: #909BA9;
    }
  }
`
