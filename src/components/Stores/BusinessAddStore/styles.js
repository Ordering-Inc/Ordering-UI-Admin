import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin: 0;
  }
`

export const FormControl = styled.div`
  margin-top: 50px;
  input {
    width: 100%;
    height: 44px;
  }
  > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .input-autocomplete {
    width: 100%;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 8px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
    ::placeholder {
      color: ${props => props.theme.colors.secundaryLight};
    }

    &:-ms-input-placeholder {
      color: ${props => props.theme.colors.secundaryLight};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.colors.secundaryLight};
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 55px;
  > span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  button {
    border-radius: 8px;
    height: 44px;
    position: relative;
    width: 100%;
    margin-top: 15px;
    svg {
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 21px;
    }
  }
  @media (min-width: 576px) {
    flex-direction: row;
    > button {
      width: 50%;
      margin-top: 0px;
    }
  }
`

export const InfoWrapper = styled.div`
  position: relative;

  > button {
    height: 21px;
    svg {
      width: 13px;
      height: 13px;
      color: ${props => props.theme.colors.headingColor};
    }
  }
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`

export const InfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.backgroundInfo};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  right: 0px;
  ${props => props.theme.rtl && css`
    left: 0px;
    right: initial;
  `}

  @media (min-width: 576px) {
    min-width: 350px;
    padding: 10px 16px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }
`
