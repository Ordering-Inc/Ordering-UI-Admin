import styled, { css } from 'styled-components'

export const DropdownOptionsContainer = styled.div`
`

export const DropdownOptionWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;

  ${({ isHeader }) => isHeader ? css`
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
    > div {
      font-weight: 700;
    }
  ` : css`
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.borderColor};
    }
  `}

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}
`

export const DropdownOptionName = styled.div`
  font-size: 12px;
  width: 30%;
  display: flex;
  align-items: center;
`

export const CityName = styled.div`
  width: 30%;
  font-size: 12px;
  box-sizing: border-box;

  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}

  div {
    border: none;
    padding: 0px;
    pointer-events: none;
    svg {
      display: none;
    }
  }
`

export const CountryName = styled.div`
  font-size: 12px;
  width: 20%;
  box-sizing: border-box;
  div {
    border: none;
    padding: 0px;
    pointer-events: none;
    svg {
      display: none;
    }
  }

  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    height: 40px;
    display: flex;
    align-items: center;
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
`

export const ActionsContainer = styled.div`
  font-size: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  box-sizing: border-box;

  ${props => props.theme.colors.rtl ? css`
    padding-right: 15px;
  ` : css`
    padding-left: 15px;
  `}

  ${({ isHeader }) => !isHeader && css`
    ${props => props.theme.colors.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}
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

export const CheckboxWrapper = styled.div`
  display: flex;
  cursor: pointer;

  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.secundaryLight};
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`

export const PagesBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  margin: 15px 0;
`

export const AddNewPageButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
`
