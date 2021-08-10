import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }

  @media (min-width: 800px) {
    ${props => props.theme?.rtl ? css`
      padding-left: 100px;
    ` : css`
      padding-right: 100px;
    `}
  }
`

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;

  h1 {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    color: ${props => props.theme.colors.headingColor};
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

export const WelcomeMsg = styled.h1`
  font-weight: bold;
  font-size: 32px;
  color: ${props => props.theme.colors.headingColor};
`

export const GuideMsg = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.headingColor};
  margin-bottom: 25px;
`

export const VideoAndReportsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 800px) {
    flex-direction: ${({ isRowDirection }) => isRowDirection ? 'row' : 'column'}
  }
`
export const VideoOnBoardingWrapper = styled.div`
  margin-right: 24px;
  ${props => props.theme?.rtl && css`
    margin-left: 24px;
    margin-right: 0;
  `}
  width: 100%;

  @media (min-width: 800px) {
    width: 53%;
    height: inherit;
  }
`

export const HideAndShowWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.headingColor};

  span {
    font-weight: 600;
    font-size: 16px;
    margin-right: 12px;
    ${props => props.theme?.rtl && css`
      margin-left: 12px;
      margin-right: 0;
    `}
  }

  svg {
    font-size: 16px;
    cursor: pointer;
  }
`

export const VideoOnBoardingContainer = styled.div`
  margin-top: 35px;
  height: 300px;

  @media (min-width: 800px) {
    height: calc(100% - 54px);
  }
`

export const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const FirstStoreToSellWrapper = styled.div`
  margin-top: 70px;

  .home-store-title {
    margin-bottom: 30px;
  }
`

export const FirstStoreToSellContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  @media (min-width: 800px) {
    > div {
      width: 45%;
    }
  }
`
