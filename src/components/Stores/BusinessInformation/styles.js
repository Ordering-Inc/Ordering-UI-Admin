import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  margin-top: 20px;
  min-height: calc(100vh - 150px);
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
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
    font-size: 14px;
    position: relative;
    > span {
      position: absolute;
      right: 0px;
      font-size: 12px;
      line-height: 18px;
      color: #03459E;
      top: 3px;
      ${props => props.theme?.rtl && css`
        left: 0px;
        right: initial;
      `}
    }
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const ActionsForm = styled.div`
  position: sticky;
  top: 100%;
  margin-top: 15px;
  > button {
    height: 35px;
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

export const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 35px;
  > div {
    width: 100%;
  }
  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    > div {
      width: 48%;
    }
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120px;
  width: 100%;
  margin-bottom: 15px;
  > span {
    font-size: 14px;
  }
`
