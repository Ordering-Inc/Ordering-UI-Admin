import styled from 'styled-components'

export const AnalyticsCalendarContainer = styled.div`
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
  }
`
