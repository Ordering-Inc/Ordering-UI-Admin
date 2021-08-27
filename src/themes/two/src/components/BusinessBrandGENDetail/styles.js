import styled, { css } from 'styled-components'

export const BrandGeneralDetail = styled.div`
  margin-top: 30px;
  height: calc(100vh - 168px);
`

export const BrandLogo = styled.div`
  width: 100%;
  height: 200px;
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
    width: 240px;
    height: 240px;
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

export const CameraIconContainer = styled.span`
  position: absolute;
  top: 17px;
  right: 15px;
`

export const FormControl = styled.div`
  margin-bottom: 30px;
  margin-top: 45px;

  input {
    background: #FFFFFF;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
    width: 100%;
  }
`

export const Label = styled.label`
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
  margin-bottom: 10px;
`

export const SaveBtnWrapper = styled.div`
  position: sticky;
  top: 100%;
  button {
    padding: 6px 20px;
  }
`
