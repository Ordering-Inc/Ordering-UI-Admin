import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const UserName = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
  }
  > label {
    margin-left: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 10px;
      margin-left: 0px;
    `}
  }
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -5px;
`

export const SavedPlaces = styled.div`
  text-align: center;
  height: calc(100% - 100px);
  margin-top: 25px;
  padding-bottom: 0px;
  overflow: auto;
  display: flex;
    
  > div:first-child {
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex: 1;

    > button{
      width: auto;
      align-self: center;
      position: absolute;
      bottom: 0px;

      ${props => props.theme?.rtl ? css`
        right: 0px;
      ` : css`
        left: 0px;
      `}
    }

    > ul {
      margin-top: 0px;
      max-height: calc(100% - 70px);
      overflow: auto;
    }
  }


  @media (min-width: 768px){
    ul{
      width: 100%;
    }
    >div {
      > button {
        width: 65%;
      }
    }
  }
`

export const PersonalizationWrapper = styled.div`
  height: calc(100% - 60px);
  > div {
    padding: 35px 0px 25px;
  }
`

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-left: 35px;
  ` : css`
    margin-right: 35px;
  `}
  button {
    background: transparent !important;
    border: none;
    padding: 0px 5px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
      font-size: 20px;
    }

    &:after {
      display: none;
    }

    &:hover {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
    }
  }

  .show {
    button {
      background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
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
        &:active {
          background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
        }
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`
export const ScheduleSection = styled.div`
  margin-top: 30px;
  overflow: auto;
`
export const DriverScheduleWraper = styled.div`
  display: flex;
  align-items: center;
`
export const DriverSchedule = styled.span`
  padding-right: 10px;
`
