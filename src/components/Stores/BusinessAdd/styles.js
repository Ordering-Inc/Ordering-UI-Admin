import styled, { css } from 'styled-components'

export const AddNewBusinessContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin-bottom: 25px;

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

export const BoxLayout = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 25px 35px;
  margin-bottom: 35px;
  > div {
    width: 1000%;
    max-width: 558px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 30px;
  button {
    height: 44px;
    border-radius: 8px;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 30px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    button {
      width: 200px;
      &:first-child {
        margin-right: 30px;
        ${props => props.theme.rtl && css`
          margin-right: 0;
          margin-left: 30px;
        `}
      }
    }
  }
`
