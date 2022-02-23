import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E9ECEF;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.theme?.colors.lightPrimary};

    .upload-icon {
      display: block;
    }

    .business-type-name {
      border: 1px solid ${props => props.theme.colors?.secundaryDarkContrast};
      background: white;
    }
  }

  > svg {
    font-size: 16px;
    cursor: pointer;
    color: ${props => props.theme.colors.secundaryLight};
    margin-left: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  }
`

export const BusinessTypeEditWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 0;
  flex: 1;

  > input {
    flex: 1;
    height: 100%;
    border: none;
    outline: unset;
    background: transparent;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    border: 1px solid transparent;
    transition: all 0.3s;

    &:focus {
      border: none;
    }
  }
`

export const BusinessTypeImage = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  margin: 0 10px;

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
  display: none;
  transition: display 0.3s linear;
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
  }
`

export const CheckBoxWrapper = styled.span`
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}

  ${({ isChecked }) => !isChecked && css`
    svg {
      color: #B1BCCC;
    }
  `}
`
