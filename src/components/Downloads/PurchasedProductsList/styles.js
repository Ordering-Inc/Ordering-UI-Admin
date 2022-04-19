import styled, { css } from 'styled-components'

export const ProductsListContainer = styled.div`
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

export const AppImageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 155px;

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
export const ProductsTableWrapper = styled.div`
  overflow: auto;
  margin-bottom: 30px;
`

export const ProductsTable = styled.table`
  min-width: 700px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 35px;
`
export const ProductTboday = styled.tbody`
  cursor: pointer;
  &:hover {
    td {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
  }

  tr {
    > td {
      padding: 16px 0;
      border-top: 1px solid ${props => props.theme.colors.borderColor};
      border-bottom: 1px solid ${props => props.theme.colors.borderColor};

      &:first-child {
        ${props => props.theme?.rtl ? css`
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          border-right: 1px solid ${props => props.theme.colors.borderColor};
        ` : css`
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          border-left: 1px solid ${props => props.theme.colors.borderColor};
        `}
      }
      &:last-child {
        ${props => props.theme?.rtl ? css`
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          border-left: 1px solid ${props => props.theme.colors.borderColor};
        ` : css`
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          border-right: 1px solid ${props => props.theme.colors.borderColor};
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
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    ${props => props.theme?.rtl ? css`
      margin-left: 6px;
    ` : css`
      margin-right: 6px;
    `}
  }

  ${({ isCenter }) => isCenter && css`
    justify-content: center;
  `}
`
export const ButtonWrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  `}

  button {
    white-space: nowrap;
  }
`
