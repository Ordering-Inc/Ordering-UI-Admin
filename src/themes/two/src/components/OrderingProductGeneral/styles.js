import styled, { css } from 'styled-components'

export const GeneralContainer = styled.div`
  margin-top: 25px;
`

export const BusinessImg = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: #E9ECEF;
  border-radius: 7.6px;

  ${({ isEdit }) => !isEdit && css`
    pointer-event: none;
  `}

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
    transform: translate3d(-23px,-15px,0px);
    ` : css`
    transform: translate3d(22px,-15px,0px);
  `}
  height: 72px;
  width: 72px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: #E9ECEF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;

  ${({ isEdit }) => !isEdit && css`
    pointer-event: none;
  `}

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

export const SmallLogoImage = styled.div`
  transform: translate3d(45px,0px,0px);
  ${props => props.theme?.rtl ? css`
    transform: translate3d(-45px,0px,0px);
  ` : css`
    transform: translate3d(45px,0px,0px);
  `}
  height: 24px;
  width: 24px;
  overflow: hidden;
  background: #E9ECEF;
  border-radius: 7.6px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const FormGroup = styled.div`
  margin-top: 20px;
`

export const FormControl = styled.div`
  margin-bottom: 30px;

  input, textarea {
    background: #FFFFFF;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
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

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
  line-height: 2;
  font-weight: 500;
`

export const SocialImage = styled(BusinessImg)`
  height: 150px;

  @media (min-width: 768px) {
    height: 140px;
  }
`

export const CameraIconContainer = styled.span`
  position: absolute;
  top: 17px;
  right: 15px;
`

export const SaveBtnWrapper = styled.div`
  padding-bottom: 20px;
  button {
    padding: 6px 20px;
  }
`
