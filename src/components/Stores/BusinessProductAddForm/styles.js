import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  overflow: auto;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 50px;
  }
`

export const ProductImage = styled.div`
  width: 200px;
  height: 200px;
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
    text-align: center;
    font-size: 14px;
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
  margin-top: 24px;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
    font-size: 14px;
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const ActionsForm = styled.div`
  margin: 30px 0;
  position: sticky;
  top: 100%;
  display: flex;
  align-items: center;
  > button {
    height: 42px;
  }
`
export const SkipButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  ${props => props.theme?.rtl ? css`
    margin-left: 60px;
  ` : css`
    margin-right: 60px;
  `}

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
