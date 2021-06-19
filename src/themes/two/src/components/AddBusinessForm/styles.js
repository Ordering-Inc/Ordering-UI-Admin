import styled, { css } from 'styled-components'

export const BusinessDetailsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BusinessName = styled.h1`
  color: ${props => props.theme.colors.headingColor};
  font-size: 24px;
  margin: 0px;
  font-weight: 600;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`

export const SupportButton = styled.span`
  cursor: pointer;
  ${props => props.theme?.rlt ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  svg {
    color: ${props => props.theme.colors.lightGray};
    font-size: 24px;
  }
`

export const CloseButton = styled.span`
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
  }
`

export const FormInput = styled.form`
  margin-top: 20px;
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ isEdit }) => !isEdit && css`
    pointer-event: none;
  `}

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
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
  background: rgba(0,0,0,0.2);
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
  color: #FFF;
  border: 1px dashed #fff;
  span {
    margin: 0;
  }

  svg {   
    ${({ small }) => small ? css`
      width: 25px;
      height: 25px;
    ` : css`
      width: 45px;
      height: 45px;
    `}
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const ActionsForm = styled.div`
  margin-top: 50px;
  > button {
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px
      ` : css`
        margin-right: 10px
      `}
    }
  }
`

export const LogoImage = styled.div`
  transform: translate3d(20px, -30px, 0px);
  height: 60px;
  width: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ isEdit }) => !isEdit && css`
    pointer-event: none;
  `}

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`
