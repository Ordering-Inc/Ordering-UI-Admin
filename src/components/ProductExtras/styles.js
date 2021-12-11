import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const ProductExtrasContainer = styled.div`
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
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }

`
export const ExtraOption = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CheckboxContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  input[type='text'] {
    flex: 1;
    color: ${props => props.theme.colors.headingColor};
    padding: 5px 10px;
    outline: none;
    border: none;
    font-size: 14px;
  }
`

export const MoreContainer = styled.div`
  display: flex;
  algin-items: center;
  svg {
    cursor: pointer;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const Details = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}
`

export const AddButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding: 12px 0;
  color: ${props => props.theme.colors.lightGray};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const ExtraAddContainer = styled.div`
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
