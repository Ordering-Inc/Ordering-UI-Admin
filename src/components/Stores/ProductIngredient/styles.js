import styled, { css } from 'styled-components'
export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`
export const IngredientContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  flex: 1;

  @media (min-width: 1000px) {
    padding: 20px;
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding-bottom: 20px;
  width: 100%;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }

  button {
    height: 42px;
    line-height: 16px;
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }
`
export const IngredientOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 0;
  font-size: 14px;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  span {
    flex: 1;
  }

  svg {
    margin: 0 5px;
    font-size: 13px;
    color: ${props => props.theme.colors.secundaryLight};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}
`
export const AddIngredientButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding: 12px 0;
  color: ${props => props.theme.colors.lightGray};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
