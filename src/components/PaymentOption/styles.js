import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 20px;
    position: sticky;
    top: 100%;
    width: fit-content;
    height: 42px;
    margin-bottom: 20px;
  }

  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E9ECEF;
    ` : css`
      border-left: 1px solid #E9ECEF;
    `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
  }
`

export const CloseButton = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    > svg {
      cursor: pointer;
      font-size: 24px;
      color: ${props => props.theme.colors.headingColor};
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`
export const TabOption = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};
  
  > svg {
    font-size: 20px;
    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const TabOptionName = styled.span`
  color: ${props => props.theme.colors.headingColor};
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`
