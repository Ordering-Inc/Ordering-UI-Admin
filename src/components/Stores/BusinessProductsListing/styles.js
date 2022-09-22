import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const CategoryProductsContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  width: calc(100% - 40px);

  @media print {
    display: none;
  }

  @media (min-width: 768px) {
    overflow: hidden;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background: ${props => props.theme.colors.lightPrimary};
    border: none;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-wrap: wrap;

  > button {
    height: 41px;
    width: 90px;
    white-space: nowrap;
    margin-top: 5px;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
    @media (min-width: 768px) {
      width: unset;
    }
  }

  input {
    background: ${props => props.theme.colors.secundary};
  }

  > .searchBar {
    min-width: 100px;
    margin-top: 5px;
  }
  > .importerGroup {
    margin-top: 5px;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}

    > button {
      width: 90px;
      > svg {
        display: none;
        @media (min-width: 768px) {
          display: inline;
        }
      }
      @media (min-width: 768px) {
        width: unset;
      }
    }
  }

  @keyframes spinner-content {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }

  > .loading {
    > svg {
      animation: spinner-content 1.85s linear infinite;
    }
  }
`

export const CategoryProductsContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  min-height: calc(100% - 150px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CategoryListContainer = styled.div`
  min-width: 260px;

  @media (max-width: 576px) {
    width:100%;
  }
`

export const ProductListContainer = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (min-width: 769px) {
    width: calc(100% - 260px);
  }
`

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 0 10px;

    ${props => props.theme?.rtl ? css`
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
    `}
  }
`

export const ActionIconList = styled.div`
  display: flex;
  align-items: center;
  button.batch-image-upload {
    border: 1px solid ${props => props.theme.colors.primary};
    background-color: transparent;
    color: ${props => darken(0.07, props.theme.colors.primary)};
    padding: 4px 15px;
    &:hover {
      background: ${props => props.theme.colors.lightPrimary};
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const ViewMethodButton = styled.span`
  margin-left: 12px;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};

  svg {
    font-size: 16px;
  }

  &.batch {
    svg {
      font-size: 18px;
    }
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
`

export const BusinessSelector = styled.div`
  position: relative;
  width: fit-content;
`
export const BusinessNameWrapper = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
  cursor: pointer;
  h1 {
    svg {
      font-size: 0.7em;
      transition: 0.2s ease-in-out;
    }
    svg.rotate-arrow {
      transform: rotate(180deg);
    }
  }
`
export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};

  span {
    &.business {
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
    }
  }

  svg {
    margin: 0 9px;
  }
`
export const ColumnsAllowWrapper = styled.div`
  position: relative;
  margin: 0 5px;
`
