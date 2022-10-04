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
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  height: calc(var(--vh, 1vh) * 100);
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
  padding: 26px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  position: relative;

  @media (min-width: 768px) {
    padding: 26px 40px;
  }
`

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const HeaderIcons = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  right: 20px;

  > button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
`

export const Content = styled.div``

export const CategoryName = styled.div`
  p {
    font-weight: bold;
    font-size: 20px;
    color: #344050;
    margin-bottom: 6px;
  }
`

export const CategoryExtraContent = styled.div`
  position: relative;
  padding: 26px 26px 60px 26px;
  box-sizing: border-box;
  width: 100%;
  overflow: auto;

  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}

  > button {
    z-index: 100;
    position: absolute;
    top: 25px;
    ${props => props.theme?.rtl ? css`
      left: 20px;
    ` : css`
      right: 20px;
    `}
  }
`

export const Description = styled.p`
  margin-top: 40px;
  font-size: 14px;
  margin-bottom: 0px;
  text-align: justify;

  @media (min-width: 768px) {
    text-align: initial;
  }
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
  cursor: pointer;
  span {
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
  }
  svg {
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    transition: 0.2s linear;
    ${props => props.theme.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
    `}
  }
  &:hover {
    svg {
      transform: translateX(3px);
    }
  }
`

export const MoreInfo = styled.span`
  cursor: pointer;
  user-select: none;
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
`

export const SkeletonWrapper = styled.div``
