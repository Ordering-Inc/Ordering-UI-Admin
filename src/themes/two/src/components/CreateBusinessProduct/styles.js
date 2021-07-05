
import styled, { css } from 'styled-components'

export const CreateBusinessProductContainer = styled.tbody`
  border-bottom: 1px solid #E9ECEF;
  cursor: pointer;
  transition: all 0.3s;

  .business {
    ${props => props.theme?.rtl ? css`
      padding-left: 20px;
    ` : css`
      padding-right: 20px;
    `}

    > div {
      ${props => props.theme?.rtl ? css`
      border-left: 1px solid #E9ECEF;
    ` : css`
      border-right: 1px solid #E9ECEF;
    `}
    }
  }
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
`
export const ProductTypeImage = styled.div`
  min-height: 38px;
  min-width: 38px;
  height: 38px;
  width: 38px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${props => props.theme?.rtl ? css`
  maring-left: 10px;
  ` : css`
    margin-right: 10px;
  `}

  ${({ disabled }) => disabled && css`
    pointer-events: none;
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
  background: rgba(0,0,0,0.2);
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;

  svg {
    width: 16px;
    height: 14px;
  }
`

export const ProductInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.colors?.headingColor};
`

export const GeneralInfo = styled.div``
