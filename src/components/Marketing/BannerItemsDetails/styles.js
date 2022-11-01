import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}

  h1 {
    font-size: 20px;
    margin: 0;
    font-weight: 700;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
`
