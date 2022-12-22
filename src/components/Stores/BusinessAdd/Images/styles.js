import styled, { css } from 'styled-components'

export const ImagesContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`

export const ImageFormGroup = styled.div`
  margin-top: 30px;
`

export const LogoImage = styled.div`
  height: 160px;
  width: 160px;
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

export const BackgroundImage = styled(LogoImage)`
  height: 190px;
  width: 100%;
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
