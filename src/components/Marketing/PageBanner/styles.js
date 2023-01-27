import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}

  > div {
    display: flex;
    align-items: center;
    position: relative;

    h1 {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      flex: 1;
    }
  }

  button {
    height: 44px;
  }
`
export const BannersHeader = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.disabled};
  padding-bottom: 9px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 33px;
`
export const BannersListWrapper = styled.div`
`
export const BannerItemWrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  ${({ active }) => active && css`
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`
export const BannerTitleConatiner = styled.div`
  font-size: 14px;
`
export const BannerActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    padding-right: 24px;
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    padding-left: 24px;
  `}
`
export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
  ${props => props.theme?.rtl ? css`
    margin-left: 50px;
  ` : css`
    margin-right: 50px;
  `}
`
export const AddNewBanner = styled.div`
  width: fit-content;
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  margin-top: 15px;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
export const InfoWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-left: -8px;
    margin-right: 8px;
  ` : css`
    margin-right: -8px;
    margin-left: 8px;
  `}

  > button {
    height: 25px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`

export const InfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  right: 0px;
  ${props => props.theme.rtl && css`
    left: 0px;
    right: initial;
  `}
  span {
    display: block;
    user-select: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 576px) {
    min-width: 250px;
    padding: 12px 15px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }
`
export const SearchBarWrapper = styled.div`
  margin-top: 33px;
  margin-bottom: 10px;
`
