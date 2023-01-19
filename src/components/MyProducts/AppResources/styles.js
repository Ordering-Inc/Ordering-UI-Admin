import styled, { css } from 'styled-components'

export const Container = styled.div``

export const ImageGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 750px !important;
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 576px) {
    > div {
      margin-right: 20px;
      ${props => props.theme.rtl && css`
        margin-left: 20px;
        margin-right: 0;
      `}
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 50px 0px 30px 0;
  button {
    height: 44px;
  }
`
