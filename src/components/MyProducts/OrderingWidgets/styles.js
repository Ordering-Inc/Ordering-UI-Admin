import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 25px 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  > h1 {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
    line-height: 32px;
  }

  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const Content = styled.div``

export const FormGroup = styled.div`
  margin-bottom: 30px;
  label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 11px;
  }
  input, textarea {
    width: 100%;
  }
  textarea {
    height: 200px;
  }
`

export const PopupContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 25px;
  }
`

export const InlineContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`
