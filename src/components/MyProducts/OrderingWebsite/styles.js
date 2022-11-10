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

export const WebsiteWrapper = styled.div`
  margin-top: 30px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    margin-top: 20px;
    max-height: 600px;
    object-fit: cover;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 40px;

    img {
      margin-top: 0px;
      width: 42%;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 35%;
    }
    margin-right: 50px;
    ${props => props.theme.rtl && css`
      margin-left: 50px;
      margin-right: 0px;
    `}
  }
`

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 7px;
    text-transform: capitalize;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }

  @media (min-width: 769px) {
    margin-right: 40px;
    ${props => props.theme.rtl && css`
      margin-left: 40px;
      margin-right: 0px;
    `}
  }
`
