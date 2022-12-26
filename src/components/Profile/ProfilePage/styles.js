import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`
export const UserInfoContainer = styled.div`
  padding-top: 30px;
  display: flex;
  margin-bottom: 40px;
`
export const UserImage = styled.div`
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  width: 216px;
  height: 216px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  svg {
    width: 80%;
    height: 80%;
  }
`
export const UserInfoWrapper = styled.div`
  margin: 0 26px;
  p {
    &.name {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
    }
    &.email {
      font-size: 14px;
      line-height: 24px;
      margin: 12px 0;
    }
    &.phone {
      font-size: 14px;
      line-height: 24px;
      margin: 0;
    }
  }
`
export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;

  button {
    height: 44px;
  }
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

  @media (min-width: 576px) {
    min-width: 350px;
    padding: 12px 15px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }

  @media (min-width: 993px) {
    min-width: 535px;
  }
`
