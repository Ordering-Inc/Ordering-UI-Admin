import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    display: flex;
    align-items: center;
    > h1 {
      font-size: 24px;
      margin: 0px;
      font-weight: 600;
      color: ${props => props.theme.colors.headingColor};
    }
  }

  input {
    background: #E9ECEF;
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const AddButton = styled.span`
  cursor: pointer;
  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`

export const WrapperSearchBar = styled.div`
`
