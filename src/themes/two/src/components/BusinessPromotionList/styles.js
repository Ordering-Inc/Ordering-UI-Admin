import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const BusinessPromotionsContainer = styled.div`
  flex: 1;
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    margin: 0px;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 700;
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

export const PromotionsTable = styled.table`
  width: 100%;
  
  th {
    font-size: 12px;
  }
  th, td {
    padding: 10px 0;
  }

  thead {
    border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};
  }

  tbody {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`

export const PromotionItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 12px;
  max-width: 150px;

  img {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    ${props => props.theme?.rtl ? css`
      margin-left: 5px;
    ` : css`
      margin-right: 5px;
    `}
  }
  ${props => props.theme?.rtl ? css`
    padding-left: 8px;
    margin-left: 8px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    padding-right: 8px;
    margin-right: 8px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  `}

  > div {
    p {
      margin: 0px;
      white-space: nowrap;
    }
  }

  > span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 12px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const DropdownWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 20px;
  ` : css`
    margin-left: 20px;
  `}
  button {
    background: ${props => props.theme.colors.secundary} !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
      font-size: 14px;
    }

    &:after {
      display: none;
    }
  }

  > div {
    border: 1px solid ${props => props.theme.colors.borderColor};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    > div {
      a:last-child {
        color: #E63757;
      }
    }

    .dropdown-item {
      font-size: 12px;
    }
  }
`

export const AddNewPromotionText = styled.div`
  cursor: pointer;
  width: fit-content;
  margin: 15px 0;
  color: ${props => props.theme.colors.lightGray};
  font-size: 12px;
`

export const PromotionEditFormContainer = styled.div`
  flex: 1;
  position: relative;

  @media (min-width: 576px) {
    padding: 20px;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  }
`

export const EditHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditTitleHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;

    ${props => props.theme?.rtl ? css`
      padding-left: 15px;
    ` : css`
      padding-right: 15px;
    `}
  }
`

export const CloseButtonWrapper = styled.div`
  position: absolute;

  ${props => props.theme?.rtl ? css`
    left: 20px;
  ` : css`
    right: 20px;
  `}
`

export const OptionTabsContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  overflow-x: auto;
  margin-bottom: 20px;

  @media (min-width: 1025px) {
    overflow-x: hidden;
  }
`

export const InnerTabsContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  padding: 10px 0;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
`
