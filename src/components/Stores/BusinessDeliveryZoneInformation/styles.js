import styled, { css } from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 130px);

  > button {
    width: fit-content;
    position: sticky;
    top: 100%;
    margin-top: 30px;
    height: 42px;
  }
`
export const TypeSelectWrapper = styled.div`
  .select {
    background: ${props => props.theme.colors.secundary};
    width: 100%;
    border: none;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }
`
export const WrapperMap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 29px 0 20px 0;
  position: relative;
  > div {
    position: relative !important; 
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }

  > button {
    position: absolute;
    font-size: 14px;
    padding: 0 5px;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    top: 10px;
    z-index: 10;
    border: none;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px;
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      right: 10px;
    ` : css`
      left: 10px;
    `}
    &:hover {
      background: #eee;
    }
  }
`

export const ErrorText = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  text-align: center;
  margin: 20px 0;
`
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 14px;
    margin-bottom: 9px;
  }
  input {
    width: 100%;
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 29px;

  > div {
    width: 45%;
  }
`
export const KmlButtonWrapper = styled.div`
  margin: 20px 0px;
`
