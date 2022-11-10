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
    margin-top: 27px;

  > h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 7px;
  }

  > p {
    margin: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const FreeBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    height: 44px;
    text-transform: capitalize;
    &:first-child {
      margin-bottom: 15px;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    button {
      width: 180px;
      &:first-child {
        margin-right: 15px;
        margin-bottom: 0px;
        ${props => props.theme.rtl && css`
          margin-right: 0px;
          margin-left: 15px;
        `}
      }
    }
  }

  @media (min-width: 1320px) {
    button {
      width: 260px;
    }
  }
`

export const BrandedBtnWrapper = styled.div`
  button {
    width: 100%;
    height: 44px;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    width: 260px;
  }
`
