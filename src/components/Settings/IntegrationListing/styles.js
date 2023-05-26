import styled, { css } from 'styled-components'

export const IntegrationsContainer = styled.div`
  flex: 1;
  padding: 20px 10px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  ${props => props.theme?.rtl ? css`
    padding-right: 20px;
  ` : css`
    padding-left: 20px;
  `}

  h1 {
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    line-height: 35px;
    text-align: center;
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

export const CategorGroup = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const CategorySection = styled.div`
 h2 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  margin-left: 20px;
 }
`

export const SettingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 35px;
`

export const SpecialPartnerWrapper = styled.div`
  margin-top: 14px;
  margin-left: 20px;
  button {
    height: 44px;
    border-radius: 8px;
  }
`

export const SettingItemContainer = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
  }

  @media (min-width: 576px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 992px) {
    width: calc(33% - 20px);
  }
`

export const IconWrapper = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 8px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.secundaryLight};
  }
  img{
    width: 100%;
    max-width: 90%;
  }
  ${({ fullWidth }) => fullWidth && css`
    img {
      max-width: 100%;
    }
  `}
`

export const SettingItemContent = styled.div`
  flex: 1;
  ${props => props.theme?.rtl ? css`
    margin-right: 13px;
  ` : css`
    margin-left: 13px;
  `}
  h5 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  p {
    color: ${props => props.theme.colors.lightGray};
    font-size: 12px;
    margin: 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`

export const CloseButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    height: 44px;
    border-radius: 8px;
    width: 100%;
  }
`

export const HubspotFormWrapper = styled.div`
  min-height: 445px;
  position: relative;
`

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 14px;
  color: ${props => props.theme.colors.lightGray};
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 16px;
    ${props => props.theme.rtl && css`
      margin-right: 0;
      margin-left: 16px;
    `}
  }
  ${({ active }) => active && css`
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 1px solid ${props => props.theme.colors.headingColor};
  `}

  @media (min-width: 1024px) {
    &:not(:last-child) {
      margin-right: 32px;
      ${props => props.theme.rtl && css`
        margin-right: 0;
        margin-left: 32px;
      `}
    }
  }
`
