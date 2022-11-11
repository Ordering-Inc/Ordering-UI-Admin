import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 25px 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
  min-height: 100vh;
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;

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

export const ContentWrapper = styled.div`
  height: calc(100% - 32px);
  display: flex;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  button {
    width: 100%;
    height: 44px;
    text-transform: capitalize;
  }

  @media(min-width: 576px) {
    button {
      width: 260px;
    }
  }
`
