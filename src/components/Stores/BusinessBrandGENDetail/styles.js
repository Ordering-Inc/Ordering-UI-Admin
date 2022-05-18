import styled, { css } from 'styled-components'

export const BrandGeneralDetail = styled.div`
  margin-top: 30px;
  min-height: calc(100vh - 168px);
`

export const BrandLogo = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  background: #E9ECEF;
  border-radius: 7.6px;
  margin-bottom: 45px;

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

  input {
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
    width: 100%;
    &:disabled {
      background: ${props => props.theme.colors.secundary};
    }
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
  margin-top: 20px;
  padding-bottom: 20px;
  button {
    padding: 6px 20px;
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > span {
    font-size: 16px;
    font-weight: 600;

    ${props => props.theme?.rtl ? css`
      margin-left: 20px;
    ` : css`
      margin-right: 20px;
    `}
  }
`

export const ColorShapeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ColorWrapper = styled.div`
  margin-top: 5px;

  > label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 7px;
  }
`

export const ShapeWrapper = styled(ColorWrapper)`
  > label {
    font-weight: 400;
    font-size: 14px;
  }
`

export const ShapeContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ShapeBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  > div {
    width: 76px;
    height: 36px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 15px;
    transition: all 0.3s linear;
  }

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    transition: all 0.3s linear;
  }

  ${({ shapeRect }) => shapeRect && css`
     > div {
       border-radius: 7.6px;
     }
    margin: 0px 20px;
  `}

  ${({ round }) => round && css`
     > div {
       border-radius: 50px;
     }
  `}

  ${({ active }) => active && css`
    > div {
      border: 1px solid ${props => props.theme.colors.primary};
    }

    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
