import styled, { css } from 'styled-components'

export const SupportContainer = styled.div`
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

export const HeaderContentWrapper = styled.div`
  margin-top: 50px;

  h1 {
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme?.colors.headingColor};
    margin-top: 0;
    margin-bottom: 5px;
    text-align: center;
    
    span {
      color: ${props => props.theme?.colors.primary};
    }
  }

  p {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    margin: 0;
  }

  @media (min-width: 769px) {
    margin-top: 150px;
  }
`

export const SupportList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 769px) {
    margin-top: 65px;
    flex-direction: row;
  }
`

export const SupportContent = styled.div`
  width: 100%;
  margin-top: 35px;
  color: ${props => props.theme?.colors.headingColor};
  padding: 0;

  h3 {
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;

    span {
      text-transform: capitalize;
      text-decoration: underline;
    }
  }

  p {
    text-align: center;
    font-size: 14px;
    margin: 0;
  }

  @media (min-width: 769px) {
    width: 50%;
    padding: 0 10px;
  }
`

export const ActionBtnWrapper = styled.div`
  text-align: center;
  margin-top: 25px;

  button {
    min-width: 100%;
    height: 44px;

    @media (min-width: 576px) {
      min-width: 290px;
    }
  }

  @media (min-width: 769px) {
    margin-top: 45px;
  }
`
