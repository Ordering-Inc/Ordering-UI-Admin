import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;

  @media print {
    display: none;
  }
`

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 10px 0;

  h1 {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 20px;
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
`

export const VideoAndReportsWrapper = styled.div`
  display: flex;
  align-items: center;
`
