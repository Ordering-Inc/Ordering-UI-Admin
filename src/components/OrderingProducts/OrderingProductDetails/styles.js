import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 20px;
  max-width: 500px;
`

export const DetailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;

  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
    margin-right: 20px;

    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
  }
`
export const ActionSelectorWrapper = styled.div`
  .select {
    border: none;

    > div:first-child {
      padding: 5px;
      border-radius: 8px;
      svg {
        font-size: 20px;
      }
      &:hover {
        background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
      }
      &:active {
        background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
      }
    }
    .select-arrow {
      display: none;
    }
    .list {
      border: none;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
      .list-wrapper {
        > div {
          font-size: 14px;
          color: #E63757;
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
`
export const ContactUsContainer = styled.div`
  background-color: ${props => props.theme.colors.lightPrimary};
  border-radius: 8px;
  padding: 20px 28px;

  > p {
    font-size: 14px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 7px;
  }

  > button {
    background: transparent;
    height: 44px;
  }
`

export const FormContainer = styled.form`
  margin-top: 38px;
`

export const BusinessImg = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: #E9ECEF;
  border-radius: 7.6px;

  img,
  div {
    width: 100%;
    border-radius: 7.6px;
    height: 100%;
    overflow: hidden;
    position: relative;
  };

  img{
    object-fit: cover;
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
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
  span {
    margin: 0;
    color: #ADB5BD;
    ${({ small }) => small ? css`
      font-size: 8px;
    ` : css`
      font-size: 12px;
    `}
  }

  svg {
    color: #CED4DA;
    ${({ small }) => small ? css`
      width: 25px;
      height: 25px;
    ` : css`
      width: 32px;
      height: 32px;
    `}
  }
`

export const LogoImage = styled.div`
  ${props => props.theme?.rtl ? css`
    transform: translate3d(-30px,-45px,0px);
    ` : css`
    transform: translate3d(30px,-45px,0px);;
  `}
  height: 72px;
  width: 72px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;

  img,
  div {
    width: 100%;
    border-radius: 7.6px;
    height: 100%;
    overflow: hidden;
    position: relative;
  };

  img{
    object-fit: cover;
  }
`

export const FormGroup = styled.div`
`

export const FormControl = styled.div`
  margin-bottom: 20px;

  input, textarea {
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
  }

  textarea {
    width: 100%;
  }

  .select {
    width: 100%;
    background: #F8F9FA;
    color: #748194;
    border: none;

    > div:first-child {
      font-size: 14px;
      padding-top: 5px;
      padding-bottom: 5px;

      div:first-child {
        font-size: 14px;
        padding: 1px 0;
      }
    }
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
  margin-bottom: 10px;
`

export const SaveBtnWrapper = styled.div`
  padding: 20px 0;
  button {
    padding: 6px 20px;
  }
`
export const SocialShareImage = styled.div`
  height: 72px;
  width: 72px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;

  img,
  div {
    width: 100%;
    border-radius: 7.6px;
    height: 100%;
    overflow: hidden;
    position: relative;
  };

  img{
    object-fit: cover;
  }
`

export const LabelHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;

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

export const InfoWrapper = styled.div`
  margin-bottom: 10px;
  ${props => props.theme?.rtl ? css`
    margin-left: -8px;
    margin-right: 8px;
  ` : css`
    margin-right: -8px;
    margin-left: 8px;
  `}

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
  background: ${props => props.theme.colors.backgroundPage};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 300px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  left: 0px;
  ${props => props.theme.rtl && css`
    left: 0px;
    right: initial;
  `}

  @media (min-width: 576px) {
    min-width: 450px;
    padding: 12px 15px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }
`
export const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`

export const Info = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  padding: 3px 0;
`
