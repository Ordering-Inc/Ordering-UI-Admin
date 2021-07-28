import styled, { css } from 'styled-components'

export const WrapMetaFields = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
`

export const MetaContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: ${props => props.theme.colors?.headingColor};

  .meta_type {
    width: 25%;
    font-size: 14px;
    margin-top: 10px;
  }
  .meta_key {
    width: 25%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .meta_value {
    flex: 1;
    word-break: break-all;
    display: flex;
    column-gap: 10px;
    > div {
      width: 100%;
    }
    svg {
      font-size: 16px;
      margin-top: 14px;
      color: ${props => props.theme.colors?.headingColor};
      cursor: pointer;
    }
  }

`
export const MetaAddContainer = styled(MetaContainer)`
  input {
    border: 1px solid #DEE2E6;
    border-radius: 8px;
    padding: 10px 15px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    width: 100%;
  }

  .meta_type {
    margin-top: 0px;
    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    div {
      color: ${props => props.theme.colors.secundaryContrast};
    }
    .select {
      background-color: ${props => props.theme.colors.secundary};
      border: none;
    }
    ${props => props.theme?.rtl ? css`
      .list {
        left: initial;
      }
    ` : css`
      .list {
        right: initial;
      }
    `}
  }

  button {
    svg {
      color: ${props => props.theme.colors.primary} !important;
    }
  }
`
export const RoundBorder = styled.div`
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 14px;
  color: ${props => props.theme.colors?.headingColor};
  overflow: hidden;
`
export const NoMetaField = styled.p`
  font-size: 14px;
`
export const MetaAddForm = styled.form`
  button[type='submit'] {
    outline: none;
    background: transparent;
    border: none;
    padding: 0px;
    height: fit-content
  }

  .select-input {
    width: 100%;

    svg {
      color: #000;
    }
  }
  
  .json_editor {
    width: 100%;
    height: 300px;
    > div {
      height: 100%;
    }
    .jsoneditor {
      border: 1px solid ${props => props.theme.colors.primary};
      > div.jsoneditor-menu {
        background-color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
      }
    }
    .jsoneditor-search {
      display: none;
    }
  }
`

export const SkeletonItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  span {
    border-radius: 8px;
  }
`

export const WrapperSpinnerLoader = styled.div`
  > div {
    position: absolute;
    top: 0px;
  }
`
