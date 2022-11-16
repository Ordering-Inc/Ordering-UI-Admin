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
  padding: 20px 0;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  > p {
    font-size: 14px;
    margin: 8px 0;
  }
  @media (min-width: 1024px) {
    > h1 {
      font-size: 32px;
      line-height: 48px;
    }
    > p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const AppInfoContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 45px 25px;

  h2 {
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 32px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
  @media (min-width: 1024px) {
    width: calc(50% - 23px);
    h2 {
      font-size: 32px;
      line-height: 48px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`
export const ImageWrapper = styled.div`
  flex: 1;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 430px;
  }
`
export const AppStoreLinksWrapper = styled.div`
  margin-top: 33px;
  display: flex;
  > a {
    &:not(:first-child) {
      ${props => props.theme?.rtl ? css`
        margin-right: 24px;
      ` : css`
        margin-left: 24px;
      `}
    }
  }
`
export const DownloadLink = styled.a`
  flex: 1;
  img {
    width: 100%;
    object-fit: cover;
  }

  ${({ isSingle }) => isSingle ? css`
    margin: 0 auto;
    text-decoration: underline;
  ` : css`
    max-width: 200px;
  `}
`
export const ButtonWRapper = styled.div`
  margin-top: 31px;
  button {
    height: 44px;
    min-width: 250px;
  }
`
