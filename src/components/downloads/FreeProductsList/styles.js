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
export const ViewMethodsConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`
export const ContentWrapper = styled.div`
`
export const ProductItemContainer = styled.div``

export const ProductItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  padding: 20px 10px;
  transition: all 0.3s;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;

  ${({ active }) => active && css`
    border: 1px solid ${props => props.theme.colors.primary} !important;
    background-color: ${props => props.theme.colors.lightPrimary};
  `}

  &:hover {
    background: ${props => props.theme.colors.lightPrimary};
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  background: ${props => props.theme.colors.secundary};
  border-radius: 7.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 10px;
  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}

  @media (min-width: 577px) {
    align-self: flex-start;
    margin-bottom: 0;
  }

  svg {
    font-size: 24px;
    color: ${props => props.theme?.colors.secundaryLight};
  }
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`

export const ProductItemContent = styled.div`
  width: 100%;
`

export const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProductTitle = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: ${props => props.theme.colors.headingColor};
  margin-bottom: 8px;
`

export const ProductItemDescription = styled.div`
  font-weight: normal;
  font-size: 12px;
  color: ${props => props.theme.colors.lightGray};

  @media (min-width: 577px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
  }
`
export const DownloadLink = styled.a`
  img {
    width: 95px;
    height: 28px;
    object-fit: cover;
  }
`
export const DownloadLinksContainer = styled.div`
  display: flex;

  > a {
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 24px;
      ` : css`
        margin-right: 24px;
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
    margin: 5px 0;
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
      &:first-child {
        ${props => props.theme?.rtl ? css`
          margin-left: 23px;
        ` : css`
          margin-right: 23px;
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
