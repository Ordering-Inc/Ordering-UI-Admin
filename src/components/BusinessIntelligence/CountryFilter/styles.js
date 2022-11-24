import styled, { css } from 'styled-components'

export const Container = styled.div`
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0px;
    margin-bottom: 24px;
  }
`

export const SearchWrapper = styled.div`
  input {
    width: 100%;
  }
`

export const CountryListWrapper = styled.div`
  padding-top: 17px;
`

export const CountryItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  cursor: pointer;
  width: fit-content;

  span.name {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-left: 10px;
    user-select: none;
    ${props => props.theme.rtl && css`
      margin-right: 10px;
      margin-left: 0px;
    `}
  }

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.checked {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 100%;
  button {
    border-radius: 8px;
    height: 44px;
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
