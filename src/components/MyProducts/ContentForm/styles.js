import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0px;

    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}
  }
`

export const WrapperEditor = styled.div`
  margin-top: 40px;

  .note-editor {
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.borderColor};

    .note-toolbar {
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    }

    .note-btn {
      &:hover,
      &:focus {
        background-color: ${props => props.theme.colors.secundaryDarkContrast};
        box-shadow: none;
      }
    }

    .note-dropdown-menu {
      a {
        color: #000;
      }

      h1 {
        font-size: 36px;
      }
    }
  }
`

export const ButtonGroupWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  > button {
    height: 44px;
    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-right: 14px;
      ` : css`
        margin-left: 14px;
      `}
    }
  }
`
