import styled, { css } from 'styled-components'

export const BasicSettingsContainer = styled.div`
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

export const ContentWrapper = styled.div``

export const SettingItemWrapper = styled.div``

export const SettingsListWrapper = styled.div`
  padding: 25px;
  width: 100%;
`

export const WrapperNoneConfigs = styled.div`
  overflow: auto;
`

export const InnerNoneConfigsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  img {
    width: 250px;
  }

  p {
    font-size: 16px;
    margin: 0px 0 40px 0;
  }

  button {
    height: 44px;
  }

  ${({ small }) => small && css`
    img {
      width: 150px;
    }
  `}

  @media (min-width: 768px) {
    img {
      width: 305px;
    }
    ${({ small }) => small && css`
      img {
        width: 250px;
      }
    `}
  }
`

export const WrapperOrderListContent = styled.div`
  ${({ maxHeight }) => maxHeight && css`
    height: 100%;
  `}
`

export const InfoWrapper = styled.div`
  position: relative;
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
    /* display: block; */
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
    min-width: 330px;
    padding: 12px 15px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }
`
