import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 0px 20px;
  margin-top: 25px;
  > img {
    width: 100%;
    max-height: 650px;
    object-fit: cover;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    padding: 0px 40px;
    img {
      width: 40%;
    }
  }

  @media (min-width: 1200px) {
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
  padding: 20px 0px;
  margin-left: 20px;
  ${props => props.theme.rtl && css`
    margin-right: 20px;
    margin-left: 0px;
  `}

  > h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 7px;
    text-transform: capitalize;
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 30px;
  }

  @media (min-width: 576px) {
    margin-left: 45px;
    ${props => props.theme.rtl && css`
      margin-right: 45px;
      margin-left: 0px;
    `}
  }

  @media (min-width: 1440px) {
    > h2 {
      font-size: 36px;
    }
    > p {
      font-size: 18px;
    }
  }
`
