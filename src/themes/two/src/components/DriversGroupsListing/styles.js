import styled, { css } from 'styled-components'

export const DriversGroupsListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const HeaderLeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 20px;
    margin: 0px;
    font-weight: 700;
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

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > *:not(:last-child) {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  button {
    height: 41px;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`
