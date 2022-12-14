import styled, { css } from 'styled-components'

export const PhotosContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 25px;
  }
`

export const ContentWrapper = styled.div``

export const UploadImageContainer = styled.div`
  height: 160px;
  max-width: 415px;
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

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

export const GalleryList = styled.div`
  width: 100%;
  margin-top: 25px;
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
  background: ${props => props.theme.colors.danger};
  border-radius: 100%;
  padding: 3px;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.white};
  }
`
