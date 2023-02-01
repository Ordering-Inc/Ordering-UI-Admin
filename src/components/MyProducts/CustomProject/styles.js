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
  margin-bottom: 40px;

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

export const ContentLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px 25px;

  @media (min-width: 576px) {
    padding: 38px 40px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  > h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  > h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 4px;
  }
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
  button {
    height: 44px;
    margin-top: 45px;
    width: fit-content;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`

export const ImageBlock = styled.div`
  width: 100%;
  display: flex;
  img {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
    justify-content: flex-end;
    img {
      max-width: 650px;
    }
  }
`
