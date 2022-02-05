import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const BusinessImagesContainer = styled.div`
  width: 100%;
`

export const Tab = styled.div`
  position: relative;
  width: 300px;
  height: 160px;
  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
  }
`

export const DeleteButton = styled.span`
  cursor: pointer;
  background: #C10000;
  border-radius: 100%;
  padding: 5px;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
    color: #FFF;
  }
`

export const BusinessNewImage = styled.div`
  width: 300px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  margin-bottom: 20px;

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
