import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const MenuContainer = styled.div`
  ${({ isHide }) => isHide ? css`
    width: 0px;
    overflow: hidden;
    flex: initial;
  ` : css`
    flex: 1;
  `}
  transition: 0.3s;
  @media (min-width: 576px) {
    ${({ isHide }) => isHide ? css`
      padding: 0;
    ` : css`
      padding: 20px;
    `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  button {
    height: 42px;
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.headingColor};
  margin: 0px;
`

export const MeunItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ isBorderTop }) => isBorderTop && css`
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  `}

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  > svg {
    color: ${props => props.theme.colors.secundaryLight};
    margin: 0 3px;
    font-size: 13px;
  }

  ${({ isDisabledFeature }) => isDisabledFeature && css`
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        background-color: ${props => props.theme.colors.white};
      }
  `}
`

export const MenuName = styled.span`
  flex: 1;
  font-size: 14px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
`
export const AddMenuButton = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  margin: 15px 0;
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
`
export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 10px;
`
export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 14px;
  white-space: nowrap;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 2px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors?.lightGray};
  `}

  ${({ disabledFeature }) => disabledFeature && css`
    cursor: not-allowed;
  `}
`

export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
  ${({ isDisabledFeature }) => isDisabledFeature && css`
      cursor: not-allowed;
      > div {
        pointer-events: none;
        opacity: 0.4;
      }
  `}
`
export const SelectButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button {
    font-size: 12px;

    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 16px;
      ` : css`
        margin-right: 16px;
      `}
    }
  }
`
