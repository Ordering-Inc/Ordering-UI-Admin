import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const BusinessPromotionsContainer = styled.div`
  flex: 1;
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    margin: 0px;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 700;
  }
  button {
    height: 42px;
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }
`

export const PromotionsTable = styled.table`
  width: 100%;
  
  th {
    font-size: 12px;
  }
  th, td {
    padding: 10px 0;
  }

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
  }
`
export const PromotionTbody = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
`
export const PromotionNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 12px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    margin: 0 15px;
  }

  > span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    flex: 1;
  }
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  `}
`

export const PromotionTypeItem = styled.div`
  font-size: 12px;
  height: 40px;
  display: flex;
  align-items: center;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  `}
`
export const PromotionDateItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  > div {
    p {
      margin: 0px;
      white-space: nowrap;
    }
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  > svg {
    font-size: 13px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const AddNewPromotionText = styled.div`
  cursor: pointer;
  width: fit-content;
  margin: 15px 0;
  color: ${props => props.theme.colors.lightGray};
  font-size: 12px;
`

export const PromotionEditFormContainer = styled.div`
  flex: 1;
  position: relative;
  transition: 0.3s;
  overflow: auto;

  @media (min-width: 576px) {
    padding: 25px 20px;
  }

  @media (min-width: 1000px) {
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  }
`

export const EditHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 3px;
`

export const EditTitleHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;

    ${props => props.theme?.rtl ? css`
      padding-left: 15px;
    ` : css`
      padding-right: 15px;
    `}
  }
`

export const CloseButtonWrapper = styled.div`
  position: absolute;

  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
`

export const OptionTabsContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  overflow-x: auto;
  margin-bottom: 20px;

  @media (min-width: 1025px) {
    overflow-x: hidden;
  }
`

export const InnerTabsContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  padding: 10px 0;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
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
