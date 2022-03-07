import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 100px);
  overflow: auto;
  padding-bottom: 20px;
  padding: 0 5px;
  > button {
    height: 44px;
    margin: 40px 0;
    display: block;
  }
`

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  overflow-x: hidden;
  margin: 20px 0;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const UserImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 768px){
    width: auto;
  }
`

export const Image = styled.div`
  position: relative;
  width: 216px;
  height: 216px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ isImage, theme }) => isImage ? '#FFF' : `${theme.colors.backgroundPage}`};
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  border: 1px solid ${props => props.theme.colors.borderColor};
  img,
  div:first-child {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    border: none;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      height: 100%;
    }
  };

  img{
    object-fit: cover;
  }
`

export const Camera = styled.div`
  position: absolute;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  border-radius: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 7px;
  ${props => props.theme?.rtl ? css`
    left: 7px;
  ` : css`
    right: 7px;
  `}
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 0;
  }

  svg {
    width: 120px;
    height: 120px;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const WrapperForm = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: 100%;
  }
`
