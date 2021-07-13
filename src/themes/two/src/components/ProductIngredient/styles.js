import styled, { css } from 'styled-components'

export const IngredientContainer = styled.div`
  height: 100%;
  overflow-x: hidden;

  @media (min-width: 1000px) {
    padding: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding-bottom: 30px;
  width: 100%;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
    font-weight: 600;
    margin: 0px;
  }

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const IngredientOption = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.headingColor};

  input {
    flex: 1;
    border: none;
    outline: none;
  }

  svg {
    font-size: 20px;
    cursor: pointer;
  }
`

export const AddIngredientButton = styled.div`
  cursor: pointer;
  padding: 12px 0;
  color: ${props => props.theme.colors.lightGray};
`

export const IngredientAddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #E9ECEF;
    padding: 12px 0;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: #B1BCCC;
    }
    &:-ms-input-placeholder {
      color: #B1BCCC;
    }
  }
`
