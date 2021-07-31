import styled, { css } from 'styled-components'

export const MessagesListingContainer = styled.div`
  width: 100%;
  transition: all 0.5s;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media (min-width: 760px) {
    margin-top: 0px;
    padding: 24px;
  }

  @media print {
    display: none;
  }
`

export const MessagesContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 0px;

  @media (min-width: 760px) {
    margin-top: 15px
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    height: calc(100vh - 105px);
  }
`

export const OrdersContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  height: 100%;
  margin-top: 20px;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 330px;
    max-width: 330px;
    margin-top: 0px;
  }

  @media (min-width: 1300px) {
    max-width: 500px;
    width: 500px;
  }
`

export const FilterContainer = styled.div`
  position: sticky;
  top: 0px;
  background: #FFF;
  padding: 0 12px;
  z-index: 100;
`

export const MessagesOptionTabs = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  overflow-x: auto;
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

export const OrdersOrderByOptionContainer = styled.div`
  padding: 15px 0 35px;
  display: flex;
  overflow-x: auto;

  button {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    font-size: 14px;
    white-space: nowrap;

    svg {
      font-size: 20px;

      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }
`

export const MessageContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  
  @media (min-width: 1024px) {
    margin-top: 0px;
    height: 100%;
    flex: 1;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`
