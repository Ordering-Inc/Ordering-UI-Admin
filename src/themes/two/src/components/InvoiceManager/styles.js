import styled, { css } from 'styled-components'

export const InvoiceManagerContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: auto;
`

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;

  h1 {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    color: ${props => props.theme.colors.headingColor};
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

export const InvoiceListContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`

export const InvoiceItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 15px;
  padding: 10px;
  border-radius: 7.6px;
  width: 100%;
  transition: background 0.3s;

  &: hover {
    background: ${props => props.theme?.colors.lightPrimary};
  }

  @media (min-width: 768px) {
    width: 45%;
    ${props => props.theme?.rtl ? css`
    margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  background: #F8F9FA;
  border-radius: 7.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}

  svg {
    font-size: 24px;
    color: ${props => props.theme?.colors.secundaryLight};
  }
`

export const InvoiceListDetailsWrapper = styled.div`
  h2 {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    color: ${props => props.theme?.colors.lightGray};
    margin: 0;
  }
`
