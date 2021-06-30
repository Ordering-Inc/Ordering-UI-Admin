import styled, { css } from 'styled-components'

export const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const FieldName = styled.p`
  color: ${props => props.theme.colors.headingColor};
  padding-top: 20px;
`

export const TypeSelectWrapper = styled.div`
  > div {
    background: #F8F9FA;
    min-width: 50%;
    border: 1px solid ${props => props.theme.colors.lightGray};
    div {
      color: ${props => props.theme.colors.headingColor};
    }
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  margin: 20px 0;
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
    background: #FFF;
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
