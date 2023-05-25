import styled, { css } from 'styled-components'

export const Container = styled.div`
  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 25px;
  }
`

export const FormControl = styled.div`
  margin-bottom: 20px;

  > label {
    display: block;
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  input {
    width: 100%;
  }
`

export const TitleWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
  }
`

export const SelectWrapper = styled.div`
  > div {
    width: 100%;
    border: none;

    > div:first-child {
      background-color: ${props => props.theme.colors.secundary};
      height: 43px;
      border: none;
      border-radius: 7.6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${props => props.theme.colors.secundaryContrast};
    }
    .list {
      background-color: ${props => props.theme.colors.secundary};
      border: none;

      .list-wrapper {
        > div {
          padding: 6px 10px;
          &:hover {
            background-color: #f2f5f7;
          }
        }
      }
    }
  }
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  button {
    height: 44px;
    margin: 15px;
    border-radius: 8px;
  }
`

export const CheckBoxWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 15px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    user-select: none;
  }
`

export const CustomDomainInfo = styled.div`
  position: relative;

  > button {
    height: 21px;
    svg {
      width: 14px;
      height: 14px;
      color: ${props => props.theme.colors.primary};
    }
  }
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`

export const CustomDomainInfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
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
  right: -100px;
  ${props => props.theme.rtl && css`
    left: 0px;s
    right: initial;
  `}

  span {
    display: block;
  }

  a {
    color: ${props => props.theme.colors.primary};
    padding-left: 5px;
  }

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
