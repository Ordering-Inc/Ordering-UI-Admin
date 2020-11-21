import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  min-width: 100px;
  color: #333;
  cursor: pointer;
  ${({ optionBottomBorder }) => optionBottomBorder && css`
      border-bottom: 1px solid #D8D8D8;
  `}

  &:hover {
    background-color: ${darken(0.03, '#fafafa')};
  }

  ${props => props.selected && css`
    background-color: ${darken(0.07, '#fafafa')};
  
    &:hover {
      background-color: ${darken(0.07, '#fafafa')};
    }
  `}

  svg {
    vertical-align: text-top;
  }

  ${({ withIcons }) => withIcons && css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 3px;
        ${props => props.theme?.rtl && css`
          margin-left: 3px;
          margin-right: 0px;
       `}
      }
  `}

  ${({ color }) => color === 'primary' && css`
    color: #C3C3C3;
  `}
`

export const Options = styled.div`
  position: absolute;
  min-width: 100%;
  background-color: #fff;
  margin-top: 7px;
  z-index: 10000;
  border-width: 1px;
  border-style: solid;
  border-color: #1C202E;
  border-radius: 10px;
  overflow: hidden;

  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
    ${props => props.theme?.rtl && css`
        margin-right: -1px;
        margin-left: 0px;
        right: 0;
        left: initial
    `}
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    ${props => props.theme?.rtl && css`
        margin-left: -1px;
        margin-right: 0px;
        left: 0;
        right: initial;
    `}
  `}
`

export const OptionsInner = styled.div`
  overflow: auto;
  margin: ${({ optionInnerMargin }) => optionInnerMargin};
  max-height: ${({ optionInnerMaxHeight }) => optionInnerMaxHeight};
`
export const Selected = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;

  @media (max-width: 380px) {
    padding-left: 9px;
    padding-right: 9px;
    font-size: 13px;
  }
`

export const Select = styled.div`
  display: inline-block;
  border-radius: 34px;
  line-height: 34px;
  border-width: 1px;
  border-style: solid;
  border-color: #1C202E;
  color: #1C202E;
  position: relative;

  ${props => props.open && css`
    background-color: ${darken(0.07, '#CCC')};
  `}

  ${({ type }) => type === 'primary' && css`
    background: ${props => props.theme.colors.btnPrimary};
    color: ${props => props.theme.colors.btnPrimaryContrast};
    border-color: ${props => props.theme.colors.btnPrimary};
    border-radius: 6px;
  `}
`

export const Chevron = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: -5px;
  ${props => props.theme?.rtl && css`
        margin-right: 5px;
        margin-left: -5px;
    `}
`

export const Header = styled.div`
  flex: 1;
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;

  ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
  `}

  img {
    width: 100%;
    height: 100%;
  }
`
