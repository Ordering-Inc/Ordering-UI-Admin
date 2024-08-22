import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const SnoozeContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 3s ease-in;

  ${({ openCalendar }) => openCalendar && css`
    height: 362px;
  `}
`

export const SnoozeTitle = styled.div`
  display: flex;
  font-size: 16;
  font-weight: 700;
  margin-bottom: 30px;
`

export const SnoozeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;

  > div {
    margin: auto 0;
    > p {
      margin: 0;
    }
  }

  @media (min-width: 862px) {
    flex-direction: row;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;

  > button {
    margin-right: 20px;
  }
`

export const Button = styled.button`
  height: 44px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  border: 1px solid #CCC;
  border-radius: 8px;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ active }) => active && css`
    background: ${props => darken(0.07, props.theme.colors.primary)} !important;
    color: #FFF !important;
  `}
  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primary)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      &:active {
        color: ${props => props.theme.colors.primaryContrast};
        background: ${props => props.theme.colors.primary};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.primary)};
        color: #FFF;
      }
    `}
    ${({ circle }) => circle && css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
      border-color: ${props => props.theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => darken(0.07, props.theme.colors.primary)};
        background: ${props => darken(0.07, props.theme.colors.primary)};
      }
    `}
    ${({ circle, outline }) => circle && outline && css`
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
      }
    `}
  `}
`

export const ButtonOptions = styled.button`
  min-width: 65px;
  height: 44px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.headingColor};
  border-color: ${props => props.theme.colors.headingColor};
  border: 1px solid ${props => props.theme.colors.headingColor};
  border-radius: 8px;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;


  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    color: ${props => darken(0.07, props.theme.colors.primary)} !important;
    border-color: ${props => props.theme.colors.primary};
  }
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary} !important;
    border-color: ${props => props.theme.colors.primary};
    border-width: 2px;
  `}
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.headingColor};
  border-color: ${props => props.theme.colors.headingColor};
  border: 1px solid ${props => props.theme.colors.headingColor};
  border-radius: 8px;
  line-height: 30px;

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary} !important;
    border-color: ${props => props.theme.colors.primary} !important;
    border-width: 2px;

    input {
      color: ${props => props.theme.colors.primary} !important;
    }
  `}

  input {
    width: auto;
    min-width: 220px;
    border: 0px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .2s ease-in;
  }

  ${props => props.theme?.rtl ? css`
    span {
      margin-left: 10px;
    }
  ` : css`
    span {
      margin-right: 10px;
    }
  `}

  .react-datepicker-popper {
    @media (min-width: 820px) {
      transform: translate3d(-20px, 114px, 0px) !important;
      right: 0px;
      left: unset !important;
    }
  }
  .react-datepicker__triangle {
    display: none;
  }
`

export const IconContainer = styled.div`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  margin-left: 10px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: ${({ hasSnooze }) => hasSnooze ? 'space-between' : 'flex-start'};

  ${({ hideButtons }) => hideButtons && css`
    justify-content: flex-end;
  `}
`
