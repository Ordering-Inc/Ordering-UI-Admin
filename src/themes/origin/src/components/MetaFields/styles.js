import styled from 'styled-components'

export const WrapMetaFields = styled.div`
  padding: 10px;
  box-sizing: border-box;
`
export const MetaTitle = styled.p`
  font-size: 18px;
  font-weight: 600;  
`
export const MetaContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  .meta_type {
    width: 20%;
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
      font-size: 24px;
      color: darkRed;
      cursor: pointer;
    }
  }

`
export const MetaAddContainer = styled(MetaContainer)`
  input {
    border: 1px solid #c2c2c2;
    border-radius: 20px;
    padding: 5px 15px;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
  }
`
export const RoundBorder = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  padding: 5px 15px;
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
      border: 1px solid #182964;
      > div.jsoneditor-menu {
        background-color: #182964;
        border-bottom: 1px solid #182964;
      }
    }
    .jsoneditor-search {
      display: none;
    }
  }
`
