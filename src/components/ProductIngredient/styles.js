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
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
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
    font-size: 14px;
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
  font-size: 14px;
  padding: 12px 0;
  color: ${props => props.theme.colors.lightGray};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
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
