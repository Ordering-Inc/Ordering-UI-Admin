import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-height: calc(100% - 130px);
  > button {
    position: sticky;
    top: 100%;
  }
`
export const WrapperShortDescription = styled.div`
  label {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin-bottom: 5px;
  }
  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
    width: 100%;
  }
`
export const WrapperDescription = styled(WrapperShortDescription)`
  margin-top: 35px;
`
export const WrapperImage = styled(WrapperShortDescription)`
  margin-top: 35px;
  padding-bottom: 52px;
`
export const SEOImage = styled.div`
  width: 200px;
  height: 200px;
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
  background-color: ${props => props.theme.colors.borderColor};
  ${({ isImage }) => isImage && css`
    opacity: 0.2;
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
  color: #ADB5BD;
  span {
    margin: 0;
  }

  svg {
    color: #CED4DA;
    ${({ small }) => small ? css`
      width: 25px;
      height: 25px;
    ` : css`
      width: 40px;
      height: 35px;
    `}
  }
`
export const CameraWrapper = styled.span`
  background-color: #FFF;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  position: absolute;
  ${props => props.theme?.rtl ? css`
    left: 8px;
  ` : css`
    right: 8px;
  `}
  svg {
    font-size: 18px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
`
