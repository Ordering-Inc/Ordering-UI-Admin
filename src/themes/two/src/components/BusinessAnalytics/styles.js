import styled, { css } from 'styled-components'

export const BusinessAnalyticsContainer = styled.div`
  width: 100%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  padding: 20px;
`

export const BusinessAnalyticsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const BusinessFilterCalendar = styled.div`
  display: flex;
  align-items: center;
`

export const BusinessFilterWrapper = styled.div`
  button {
    background: #F8F9FA;
    border-radius: 7.6px;
    padding: 10px 16px;
    font-size: 14px;
    color: #748194;
    border: none;
  }
`

export const BusinessCalendarWrapper = styled(BusinessFilterWrapper)`
  position: relative;
  margin-left: 25px;
  ${props => props.theme.rtl && css`
    margin-right: 25px;
    margin-left: 0;
  `}

  button {
    svg {
      font-size: 16px;
      margin-right: 12px;
      ${props => props.theme.rtl && css`
        margin-right: 12px;
        margin-left: 0;
      `}
    }
  }
`
export const CalendarContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
`

export const AnalyticsChartWrapper = styled.div`
  > div {
    margin-top: 35px;
  }
`
