import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const BusinessDetailsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 20px 20px 20px;
  position: relative;
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BusinessName = styled.h1`
  color: ${props => props.theme.colors.headingColor};
  font-size: 20px;
  margin: 0px;
  font-weight: 700;

  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const FormInput = styled.form`
  margin-top: 20px;
  height: calc(100% - 60px);
`

export const FormInputInnerContainer = styled.div`
  height: calc(100% - 60px);
  padding: 0 5px;
  overflow: auto;
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ disabled }) => !disabled && css`
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

  @media (min-width: 768px) {
    height: 180px;
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
  color: #FFF;
  border: 1px dashed #fff;
  span {
    margin: 0;
  }

  svg {   
    ${({ small }) => small ? css`
      width: 25px;
      height: 25px;
    ` : css`
      width: 45px;
      height: 45px;
    `}
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin-bottom: 12px;
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
  }

  .select {
    font-size: 14px;
  }

  .input-autocomplete {
    width: 100%;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 8px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
    ::placeholder {
      color: #B1BCCC;
    }

    &:-ms-input-placeholder {
      color: #B1BCCC;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #B1BCCC;
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }
`

export const ActionsForm = styled.div`
  padding-top: 20px;
  > button {
    height: 42px;
    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
`

export const LogoImage = styled.div`
  transform: translate3d(20px, -30px, 0px);
  height: 60px;
  width: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ disabled }) => !disabled && css`
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

export const WrapperMap = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    height: 200px;
  }
`
