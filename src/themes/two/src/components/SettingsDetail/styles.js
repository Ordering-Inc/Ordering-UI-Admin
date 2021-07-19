import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: -4px 0px 7px #ccc;

  ${({ isDriverOrders }) => isDriverOrders && css`
    position: absolute;
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  `}
  background: #FFF;
  height: 100vh;
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  transition: 0.3s;

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const DescriptionContent = styled.div`
  padding: 26px 40px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const HeaderIcons = styled.div`
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #344050;

    &:first-child {
      color: #B1BCCC;
      margin-right: 20px;
    }
  }
`

export const Content = styled.div`
  margin-top: 28px;
`
export const CategoryName = styled.div`
  p {
    font-weight: bold;
    font-size: 20px;
    color: #344050;
    margin-bottom: 6px;
  }
`

export const CategoryDescriptionExtraContent = styled.div`
  position: relative;
  padding: 26px;
  box-sizing: border-box;
  width: 100%;

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}

  > button {
    z-index: 100;
    position: absolute;
    top: 20px;
    ${props => props.theme?.rtl ? css`
      left: 20px;
    ` : css`
      right: 20px;
    `}
    svg {
      width: 24px;
      height: 24px;
      color: #344050;
    }
  }
`

export const Description = styled.p`
  margin-top: 40px;
  font-size: 14px;
  color: #344050;
  margin-bottom: 0px;
`

export const VideoContainer = styled.div`
  position: relative;
  margin-top: 48px;
  height: 300px;
  background: #E9ECEF;
  border-radius: 7.6px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  video {
    object-fit: cover;
    height: 100%;
    background: #E9ECEF;
  }

  svg {
    top: 45%;
    left: 45%;
    position: absolute;
    color: #748194;
    font-size: 34px;
  }
`

export const AllSetting = styled.div`
  user-select: none;
  cursor: pointer;
  margin-top: 36px;
  span {
    font-weight: 600;
    font-size: 14px;
    color: #03459E;
  }
  svg {
    color: #03459E;
  }
`

export const MoreInfo = styled.span`
  cursor: pointer;
  user-selected: none;
  color: ${props => props.theme.colors?.primary};
  text-decoration: underline;
  margin-top: 40px;
  font-size: 14px;
`

export const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 35px;
`

export const SubCategoryWrapper = styled.div`
  margin-top: 25px;
`
export const SkeletonWrapper = styled.div`
  margin-top: 25px;
`
