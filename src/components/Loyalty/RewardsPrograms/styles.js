import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 25px 10px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;

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

export const LoyaltyListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LoyaltyItemWrapper = styled.div`
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

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const LoyaltyItemContent = styled.div`
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
