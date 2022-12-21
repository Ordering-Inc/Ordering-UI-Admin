import styled, { css } from 'styled-components'

export const ReceiveOrdersContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`

export const ContentWrapper = styled.div`
  margin-top: 23px;
`

export const FormControl = styled.div`
  margin-bottom: 23px;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
  }
  input {
    width: 100%;
    height: 44px;
  }
`

export const DownloadWrapper = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
  }
`

export const DownloadIconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    display: flex;
    width: 100%;
    margin-top: 15px;
    display: flex;

    img {
      height: 57px;
    }
  }

  @media (min-width: 576px) {
    flex-direction: row;
    a {
      margin-top: 0px;
      width: auto;
      &:first-child {
      margin-right: 25px;
      ${props => props.theme.rtl && css`
        margin-right: 0;
        margin-left: 25px;
      `}
    }
    }
  }
`
