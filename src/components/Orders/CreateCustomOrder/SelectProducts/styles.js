import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 50px;
`
export const SelectOption = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 9px 16px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.secundary};
  }
  span {
    font-size: 14px;
    &.name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 180px;
    }
  }
`

export const WrapperImage = styled.div`
  position: relative;
  max-width: 38px;
  max-height: 38px;
  height: 38px;
  width: 38px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  ${props => props.theme?.rtl ? css`
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}

  svg {
    width: 100%;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`
export const CartProductsConatiner = styled.div`
  margin-top: 25px;
`
export const CartProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 5px;

  > div {
    &:first-child {
      cursor: initial;
      &:hover {
        background-color: ${props => props.theme.colors.backgroundPage};
      }
    }
  }
`
export const ProductQuantityActionsContainer = styled.div`
  display: flex;
  align-items: center;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
    padding: 5px;
    width: 45px;
    text-align: center;
    border: none;
  }

  ${props => props.theme?.rtl ? css`
    margin-left: 16px;
  ` : css`
    margin-right: 16px;
  `}
`
export const ProductEditDeleteActions = styled.div`
  display: flex;
  align-items: center;

  button {
    > svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const SelectWrapper = styled.div`
  margin-top: 11px;

  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;

    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .list {
      max-width: 100%;
    }
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 7.6px;
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
  > span {
    max-width: 200px;
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    > span {
      max-width: 560px;
    }
  }
`
