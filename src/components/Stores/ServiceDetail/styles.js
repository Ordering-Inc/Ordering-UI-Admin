import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow-x: hidden;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 30px;
  }

  ${({ maxLimit }) => maxLimit && css`
    max-width: 500px;
  `}

  @media (min-width: 1000px) {
    padding: 20px;
  }
`

export const FormInput = styled.form`
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

  ${({ isEdit }) => !isEdit && css`
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
  justify-content: flex-end;

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
  margin-top: 30px;
  position: sticky;
  top: 100%;
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

export const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: calc(50% - 10px);
  }
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
  span {
    text-transform: lowercase;
  }
`

export const SelectWrapper = styled.div`
  margin-top: 25px;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
    font-size: 14px;
  }

  > div {
    width: 100%;
    border: none;

    > div:first-child {
      background-color: ${props => props.theme.colors.secundary};
      height: 43px;
      border: none;
      border-radius: 7.6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${props => props.theme.colors.secundaryContrast};
    }
    .list {
      background-color: ${props => props.theme.colors.secundary};
      border: none;
      
      .search-bar-container {
        padding: 10px;
        input {
          background-color: transparent;
          height: 44px;
        }
      }

      .list-wrapper {
        > div {
          padding: 6px 10px;
          &:hover {
            background-color: #f2f5f7;
          }
        }
      }
    }
  }

  ${({ notAllow }) => notAllow && css`
    cursor: not-allowed;
    > div {
      pointer-events: none;
    }
  `}
`

export const TimeBlock = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.colors.gray};
  box-sizing: border-box;
  border-radius: 7.6px;
  width: fit-content;
  align-items: center;
  overflow: hidden;

  > span {
    color: ${props => props.theme?.colors.secundaryLight};
  }
  
  > select {
    height: 40px;
    padding: 0px 10px;
    border: none;
    outline: none;
    font-size: 14px;
    color: ${props => props.theme?.colors.secundaryLight};
    appearance: none;
  }
`

export const TimeContent = styled.div``

export const PropertyOptionWrapper = styled.div`
  margin-top: 35px;
`

export const PropertyOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  max-width: 250px;

  label {
    font-weight: 400;
    font-size: 14px;
    margin: 0px;
  }
`
