import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding: 15px;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme?.colors.lightPrimary};
    > input {
      border: 1px solid ${props => props.theme?.colors.lightGray};
    }
  }

  span {
    svg {
      color: #B1BCCC;
      font-size: 22px;
      &.fill {
        color: ${props => props.theme.colors.primary};
        font-size: 22px;
      }
    }
  }

  > div {
    margin: 0 10px;
  }

  > input {
    flex: 1;
    height: 100%;
    border: 1px solid transparent;
    outline: unset;
    background: transparent;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    transition: all 0.3s;
    border-radius: 3px;
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

export const CheckBoxWrapper = styled.span`
  cursor: pointer;
  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}
`

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
`
