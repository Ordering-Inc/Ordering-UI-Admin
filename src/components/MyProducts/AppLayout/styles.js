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
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 0;
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
  align-items: flex-start;
  justify-content: center;
  img {
    width: 100%;
    max-width: 430px;
  }
  ${({ isDriver }) => isDriver && css`
    img {
      max-width: 500px;
    }
  `}
`

export const DownloadLink = styled.a`
  text-decoration: underline;
`
export const ButtonWRapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 15px;
  button {
    height: 44px;
    width: 100%;
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    button {
      width: calc(50% - 10px);
    }
  }
`

export const DownLoadWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    &:last-child {
      margin: 0px 15px;
    }
  }
`
