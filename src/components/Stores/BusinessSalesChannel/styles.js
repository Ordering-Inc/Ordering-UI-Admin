import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const SalesContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  flex: 1;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 45px;
  }
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const SocialBlock = styled.div`
  margin-bottom: 48px;
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
  button {
    height: 44px;
    border-radius: 8px;
    margin-top: 12px;
  }
`

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-right: 18px;
    ${props => props.theme.rtl && css`
      margin-left: 18px;
      margin-right: 0;
    `}
  }

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`

export const ConnectingContainer = styled.div`
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 40px;
  }

  > button {
    height: 44px;
    border-radius: 8px;
  }
`
