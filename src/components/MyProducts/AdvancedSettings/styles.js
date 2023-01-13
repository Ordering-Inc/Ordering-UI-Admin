import styled, { css } from 'styled-components'

export const Container = styled.div``

export const BoxLayout = styled.div`
  margin-top: 30px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 25px 30px;
  > div {
    max-width: 653px;
  }
  h1, h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  > h1 {
    margin-bottom: 30px;
  }
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`

export const HomePageWrapper = styled.div``

export const FormControlWithCheck = styled.div`
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 17px;
  }
`

export const HideCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 15px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    user-select: none;
  }
  ${({ isBottom }) => isBottom && css`
    margin-bottom: 25px;
  `}
`

export const ShadowWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const InnerShadowWrapper = styled.div``

export const DropShadowWrapper = styled.div`
  margin-top: 15px;
  /* @media (min-width: 576px) {
    margin-top: 0;
    margin-left: 35px;
    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 35px;
    `}
  } */
`

export const ShadowInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 7px;
    ${props => props.theme.rtl && css`
      margin-left: 7px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`

export const InnerShadow = styled.div`
  width: 27px;
  height: 18px;
  background: ${props => props.theme.colors.gray};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 1px;
  margin-right: 13px;
  ${props => props.theme.rtl && css`
    margin-right: 0px;
    margin-left: 13px;
  `}
`

export const DropShadow = styled.div`
  width: 27px;
  height: 18px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 1px;
  margin-right: 13px;
  ${props => props.theme.rtl && css`
    margin-right: 0px;
    margin-left: 13px;
  `}
`

export const ShadowInputGroup = styled.div`
  display: flex;
  margin-top: 13px;
`

export const ShadowInputControl = styled.div`
  display: flex;
  margin-right: 15px;
  ${props => props.theme.rtl && css`
    margin-right: 0px;
    margin-left: 15px;
  `}
  span {
    font-weight: 400;
    font-size: 12px;
    margin-right: 5px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 5px;
    `}
  }
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    width: 29px;
    font-size: 12px;
    text-align: center;
  }
`

export const HeadingWrapper = styled.div`
  margin-bottom: 40px;
`

export const BodyWrapper = styled.div``

export const FormControl = styled.div`
  margin-bottom: 25px;
  > label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 44px;
  }
`

export const SelectWrapper = styled.div`
  > div {
    width: 100%;
    border: none;

    > div:first-child {
      background-color: ${props => props.theme.colors.secundary};
      height: 43px;
      border: none;
      border-radius: 7.6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${props => props.theme.colors.secundaryContrast};
    }
    .list {
      background-color: ${props => props.theme.colors.secundary};
      border: none;

      .list-wrapper {
        > div {
          padding: 6px 10px;
          &:hover {
            background-color: #f2f5f7;
          }
        }
      }
    }
  }
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
`

export const FontWeightListWrapper = styled.div`
  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`

export const FontWeightItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 20px;
    ${props => props.theme.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const ImageBoxContainer = styled.div`
  width: 161px;
  height: 161px;
  ${({ isBig }) => isBig && css`
    width: 100%;
    height: 190px;
  `}
  background: ${props => props.theme.colors.borderColor};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: contain;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: ${props => props.theme.colors.secundaryDarkContrast};
  ${({ bgimage }) => bgimage && css`
    background: transparent;
    svg, span {
      color: ${props => props.theme.colors.white};
    }
    border: 1px dashed ${props => props.theme.colors.secundaryDarkContrast};
  `}
  ${({ small }) => small ? css`
    padding: 4px;
  ` : css`
    padding: 8px;
  `}
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.disabled};
  span {
    margin-top: 14px;
    font-size: 14px;
  }

  svg {   
    width: 52px;
    height: 45px;
  }
`

export const ImgInfoWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  h4 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    margin: 0px;
  }
  p {
    font-size: 12px;
    line-height: 18px;
    margin-top: 2px;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
`

export const HomeImageFullScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  cursor: pointer;
  width: fit-content;
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 20px;
    ${props => props.theme.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    > div:first-child {
      margin-right: 30px;
    }
  }
`

export const SocialShareContainer = styled.div``

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 50px 0px 30px 0;
  button {
    height: 44px;
  }
`
