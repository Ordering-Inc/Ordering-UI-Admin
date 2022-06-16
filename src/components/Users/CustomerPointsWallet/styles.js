import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: 100%;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 7px;
  }
`

export const PointsWalletContainer = styled.div`
  width: 100%;
  padding-top: 30px;
`

export const PointsWrapper = styled.div`
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 0px;
  }
  p {
    margin: 0px;
    font-size: 14px;
    line-height: 24px;
  }
`

export const EqualWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 0px 30px;
`

export const LevelWrapper = styled.div`
  margin-top: 50px;
  > h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 25px;
    margin-top: 0px;
  }
  img {
    object-fit: cover;
    max-width: 350px;
    width: 100%;
  }
`
export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  > div {
    &:not(:last-child) {
      ${props => props.theme?.rtl ? css`
        margin-left: 32px;
      ` : css`
        margin-right: 32px;
      `}
    }
  }
`
export const Tab = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  padding: 13px 0;
  position: relative;

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
    &:after {
      content: "";
      background: ${props => props.theme.colors.headingColor};
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: -1px;
      ${props => props.theme?.rtl ? css`
        right: 0px;
      ` : css`
        left: 0px;
      `}
    }
  `}
`

export const LoyaltyLevel = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 25px;
  }
`

export const LoyaltyLevelContent = styled.div`
  width: 100%;
  max-width: 359px;

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    color: ${props => props.theme.colors.primary};
    margin-top: 15px;
    text-align: center;
  }
`
