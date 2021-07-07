import styled, { css } from 'styled-components'

export const ProductExtrasContainer = styled.div`
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
  color: ${props => props.theme.colors.primary};
  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}
`

export const AddButton = styled.div`
  cursor: pointer;
  padding: 12px 0;
  color: ${props => props.theme.colors.lightGray};
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
