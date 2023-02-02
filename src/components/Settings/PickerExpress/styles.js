import styled, { css } from 'styled-components'

export const PickerExpressContainer = styled.div`
  padding: 26px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  position: relative;

  button.all-setting {
    height: 44px;
    user-select: none;
    margin-top: 36px;
    span {
      font-weight: 600;
      font-size: 14px;
    }
    svg {
      margin-left: 5px;
      transition: 0.2s linear;
      ${props => props.theme.rtl && css`
        margin-right: 5px;
        margin-left: 0px;
      `}
    }
    &:hover {
      svg {
        transform: translateX(3px);
      }
    }
  }

  @media (min-width: 768px) {
    padding: 26px 40px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  ${props => props.theme?.rtl ? css`
    margin-left: 35px;
  ` : css`
    margin-right: 35px;
  `}

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    text-transform: capitalize;
  }

  button {
    line-height: 12px;
    height: 16px;
    font-size: 10px;
    margin-left: 15px;
    padding: 2px 8px;
    border-radius: 50px;
    ${props => props.theme.rtl && css`
      margin-right: 15px;
      margin-left: 0px;
    `}
  }
`

export const ApiKeysListTable = styled.table`
  width: 100%;
  margin-top: 25px;

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    th {
      padding: 10px 0;
      &:last-child {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
  tr {
    width: 100%;
    th,
    td {
      font-size: 12px;
      word-break: break-all;

      &:last-child {
        width: 100px;
        > div {
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    td {
      padding-top: 9px;
      padding-bottom: 9px;

      &:last-child {
        > div {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`

export const DropdownButtonWrapper = styled.div`
  ${props => props?.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  `}
  padding: 5px 20px;
  button {
    background: transparent !important;
    border: none;
    padding: 0px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  .show {
    button {
      background: ${props => props.theme.colors.secundary} !important;
      border-color: unset !important;
      box-shadow: none !important;
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
      }
      .dropdown-item:last-child {
        color: #E63757;
      }
    }
  }
`
export const AddNewButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};
  margin: 20px 0;
  width: fit-content;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const AllSetting = styled.div`
  user-select: none;
  cursor: pointer;
  margin-top: 36px;
  cursor: pointer;
  span {
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
  }
  svg {
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    transition: 0.2s linear;
    ${props => props.theme.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
    `}
  }
  &:hover {
    svg {
      transform: translateX(3px);
    }
  }
`

export const Description = styled.p`
  margin-top: 40px;
  font-size: 14px;
  margin-bottom: 0px;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: initial;
  }
`

export const CategoryExtraContent = styled.div`
  position: relative;
  padding: 26px 26px 60px 26px;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}

  > button {
    z-index: 100;
    position: absolute;
    top: 25px;
    ${props => props.theme?.rtl ? css`
      left: 20px;
    ` : css`
      right: 20px;
    `}
  }
`

export const Container = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: -4px 0px 7px #ccc;

  ${({ isDriverOrders }) => isDriverOrders && css`
    position: absolute;
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  `}
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  height: calc(var(--vh, 1vh) * 100);
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  transition: 0.3s;

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const HeaderIcons = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  right: 20px;

  > button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
`

export const SettingListConatiner = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #E9ECEF;
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
    color: #909BA9;
  `}
`

export const Paragraph = styled.div`
  margin-top: 20px;
  h2{
    font-size: 16px;
  }
  p{
    white-space: pre-line;
    font-size: 12px;
    margin: 0;
  }
  span {
    font-size: 12px;
  }
  a {
    text-decoration: underline !important;
    cursor: pointer;
    font-size: 12px;
    color: ${props => props.theme.colors.primary} !important;
  }
  .bold {
    font-weight: 600;
  }
`

export const PurchaseWrapper = styled.div`
  button {
    border-radius: 5px;
  }
  margin-top: 15px;
`
