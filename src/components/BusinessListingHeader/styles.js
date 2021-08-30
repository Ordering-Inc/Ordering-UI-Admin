import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > h1 {
    font-size: 24px;
    margin: 0px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
    white-space: nowrap;
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

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }
`
