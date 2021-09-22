import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const MenuContainer = styled.div`
  flex: 1;
  
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  button {
    height: 42px;
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.headingColor};
  margin: 0px;
`

export const MeunItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;
`

export const MenuName = styled.span`
  flex: 1;
  color: ${props => props.theme.colors.headingColor};
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionsWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 35px;
  ` : css`
    margin-left: 35px;
  `}
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  > div {
    border: 1px solid #E9ECEF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    .dropdown-item {
      font-size: 14px;
    }
    > div {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      a:last-child {
        color: #E63757;
      }
    }
  }
`

export const AddMenuButton = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  margin: 15px 0;
  display: inline-block;
  text-decoration: none;
`
