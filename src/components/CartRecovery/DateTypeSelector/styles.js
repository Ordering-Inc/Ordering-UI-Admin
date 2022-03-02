import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const PlaceholderTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 15px 10px;
  border-radius: 7.6px;
  cursor: pointer;
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.lightGray};
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`

export const AnalyticsCalendarContainer = styled.div`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  position: absolute;
  margin-top: 18px;
  overflow: hidden;

  ${props => props.theme?.rtl ? css`
    left: 0px;
  ` : css`
    right: 0px;
  `}
  .rdrDateRangeWrapper {
    .rdrDateDisplayWrapper {
      background-color: transparent;
    }
    .rdrDateDisplayItem {
      border: 1px solid ${props => props.theme.colors.borderColor};
      box-shadow: none;
    }
    button {
      .rdrStartEdge,
      .rdrEndEdge,
      .rdrInRange {
        color: ${props => props.theme.colors.lightPrimary} !important;
      }
    }
    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
      color: ${props => props.theme.colors.headingColor};
    }
  }  
`
