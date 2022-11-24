import styled, { css } from 'styled-components'

export const AnalyticsTimeZoneContainer = styled.div`
  position: relative;

  > button {
    background: #F8F9FA;
    border-radius: 7.6px;
    padding: 7px 12px;
    font-size: 14px;
    color: ${props => props.theme.colors.secundaryContrast};
    border: none;
    width: 100%;
  }
`

export const TimeZoneSelectWrapper = styled.div`
  position: absolute;
  width: 300px;
  top: 100%;
  right: 0;
  padding: 25px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border: 1px solid ${props => props.theme.colors.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  z-index: 100;
  margin-top: 18px;
`
export const TimeZoneSearchWrapper = styled.div`
  position: relative;
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;

  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const TimeZoneSearchInput = styled.input`
  border: 1px solid #DEE2E6;
  box-sizing: border-box;
  border-radius: 7.6px;
  font-size: 13px;
  padding: 8px 30px 8px 14px;
  width: 100%;
  outline: none;

  ${props => props.theme?.rtl && css`
    padding: 8px 14px 8px 30px;
  `}
`

export const TimeZoneListContainer = styled.div`
  margin-top: 10px;
  max-height: 350px;
  overflow: auto;
`

export const TimezoneListItem = styled.div`
  padding: 10px 3px;
  border-bottom: 1px solid #E9ECEF;
  font-size: 13px;
  color: ${props => props.theme?.colors.headingColor};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #E9ECEF;
  }
`
