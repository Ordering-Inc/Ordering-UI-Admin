import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  width: 0;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const ActionBlock = styled.div`
  > svg {
    cursor: pointer;
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
  }
`

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #CCC;
  overflow-x: auto;
  @media (min-width: 1025px) {
    overflow-x: hidden;
  }
`

export const TabInnerContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`

export const BusinessMenuBasicContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FieldName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.headingColor};
  padding: 30px 0 10px;
  margin: 0;
  ${({ isBorderBottom }) => isBorderBottom && css`
    border-bottom: 1px solid #E9ECEF;
  `}
`

export const OrderType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;

  svg {
    font-size: 20px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  }

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const BusinessScheduleWrapper = styled.div`
  > div {
    padding: 0px;

    h1 {
      font-size: 18px;
      margin-top: 30px;
    }

    > div {
      margin-top: 0px;
    }
  }
`

export const CategoryProductsContainer = styled.div`
  border-bottom: 1px solid #E9ECEF;
`

export const CheckBoxWrapper = styled.div`
  svg {
    font-size: 20px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  }
`

export const BusinessCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  > svg {
    transition: transform 0.6s ease;
    color: #212121;
    cursor: pointer;
  }
  ${({ active }) => active && css`
    > svg {
      transform: rotate(180deg);
    }
  `}
`

export const CheckboxContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
  span.bold {
    font-weight: 600;
  }
`

export const ProductContainer = styled.div`
  padding: 7px 0;
  ${props => props.theme?.rtl ? css`
    margin: 0 20px 0 0;
  ` : css`
    margin: 0 0 0 20px;
  `}
`
