import styled, { css } from 'styled-components'

export const FreeProductsListContainer = styled.div`
  flex: 1;
  padding: 25px 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`
export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
    line-height: 32px;
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

export const ProductDetailsContainer = styled.div`
  padding: 25px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.headingColor};
    margin-top: 59px;
    margin-bottom: 43px;
    white-space: pre-wrap;
  }
`
export const DownloadLink = styled.a`
  img {
    width: 95px;
    height: 28px;
    object-fit: cover;
  }

  ${({ isSingle }) => isSingle && css`
    margin: 0 auto;
  `}
`
export const DownloadLinksContainer = styled.div`
  display: flex;

  > a {
    &:not(:first-child) {
      ${props => props.theme?.rtl ? css`
        margin-right: 24px;
      ` : css`
        margin-left: 24px;
      `}
    }
  }
`
export const ProductsRowListContainer = styled.div`
  margin-top: 15px;
  overflow: auto;
`
export const ProductRow = styled.div`
  min-width: 600px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 18px 0;
  ${({ isHeader }) => !isHeader && css`
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 35px;
    &:hover {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
    ${({ active }) => active && css`
      border: 1px solid ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.lightPrimary};
    `}
  `}
`
export const AppImageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 155px;
  width: 18%;

  > img {
    width: 105px;
    height: 90px;
    object-fit: contain;
    margin: 0 auto;
  }
`
export const AppDescriptionWarpper = styled.div`
  flex: 1;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    color: ${props => props.theme.colors.lightGray};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  ${({ isHeader }) => !isHeader && css`
    height: 72px;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}
`
export const AppDownloadLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 145px;
  padding: 0 24px;
  justify-content: center;

  > a {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  ${({ isHeader }) => !isHeader && css`
    height: 72px;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  `}

  @media (min-width: 992px) {
    width: 263px;
    flex-direction: row;
    align-items: center;
    justify-content: initial;
    > a {
      &:not(:first-child) {
        ${props => props.theme?.rtl ? css`
          margin-right: 23px;
        ` : css`
          margin-left: 23px;
        `}
      }
    }
  }
`
export const AppHeaderTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.headingColor};
  line-height: 18px;
`
