import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding: 9px 0;

  > input {
    flex: 1;
    height: 100%;
    border: none;
    outline: unset;
    background: transparent;
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}

    &:focust {
      border: none;
    }
  }
`

export const BusinessBrandImage = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

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
  background: #dce3e640;
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  span {
    margin: 0;
  }

  svg {   
    width: 25px;
    height: 25px;
    color: #ADB5BD;
  }
`
