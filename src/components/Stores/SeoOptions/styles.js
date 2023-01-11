import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-height: calc(100% - 130px);
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
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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
export const SkipButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  ${props => props.theme?.rtl ? css`
    margin-left: 60px;
  ` : css`
    margin-right: 60px;
  `}

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
export const ActionButtons = styled.div`
  position: sticky;
  top: 100%;
  display: flex;
  align-items: center;
  margin-top: 50px;

  > button {
    height: 42px;
  }
`

export const UseSameInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    &:first-child {
      font-weight: 400;
      font-size: 14px;
      margin: 0px;
      margin-right: 10px;
      ${props => props.theme.rtl && css`
        margin-right: 0px;
        margin-left: 10px;
      `}
    }
    &:last-child {
      min-width: 25px;
    }
  }
`
