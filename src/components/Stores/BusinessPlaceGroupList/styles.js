import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const PlaceContainer = styled.div`
  ${({ isHide }) => isHide ? css`
    width: 0px;
    overflow: hidden;
    flex: initial;
  ` : css`
    flex: 1;
  `}
  transition: 0.3s;
  @media (min-width: 576px) {
    ${({ isHide }) => isHide ? css`
      padding: 0;
    ` : css`
      padding: 20px;
    `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 18px;
  }

  button {
    margin-bottom: 18px;
    height: 44px;
    margin-right: 40px;

    ${props => props.theme.rtl && css`
      margin-left: 40px;
      margin-right: 0px;
    `}
  }
`

export const Content = styled.div``

export const AddBtn = styled.span`
  font-weight: 400;
  font-size: 14px;
  display: block;
  margin: 10px 0px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.lightGray};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.secundaryLight};

  label {
    font-weight: 700;
  }
`

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;

  .check-box {
    cursor: pointer !important;
  }

  span {
    svg {
      cursor: pointer !important;
      font-size: 16px;
      color: ${props => props.theme.colors.secundaryLight};

      &.active {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  > label {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 20px;
    ${props => props.theme.rtl && css`
      margin-right: 20px;
      margin-left: 0px;
    `}
  }
`

export const PlaceItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  border-top: 1px solid transparent;
  justify-content: space-between;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secundary};
  }

  ${({ active }) => active && css`
    background: ${props => props.theme.colors.backgroundInfo};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  ${({ notAllow }) => notAllow && css`
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
  `}

  > svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`
