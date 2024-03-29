import styled, { css } from 'styled-components'

export const FilterGroupListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 20px;
  > h1 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  & > div {
    width: 48%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 30px;
  }
`
export const WrapperRow = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    width: 100%;
    height: 57px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;
    border-radius: 8px;
    > div:first-child {
      height: 100%;
    }
  }

  .order-status-multi-select {
    p {
      padding: 0;
      color: ${props => props.theme.colors.headingColor} !important;
    }
  }

  .date-filter-container {
    z-index: 100;
  }

  > input {
    width: 100%;
    height: 57px;
    margin-bottom: 20px;
    padding: 10px 25px;
    box-sizing: border-box;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    & > div {
      width: 48%;
    }

    > input {
      width: 48%;
    }
  }
`

export const MultiSelectContainer = styled.div`
  > div {
    width: 100%;
    border: none;

    > div:first-child {
      height: 54px;
      > div:first-child {
        padding: 5px;
        border: none;
      }
    }

    > div:not(:first-child) {
      > div {
        > div {
          > div {
            border: none;
          }
        }
      }
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  button {
    padding-top: 5px;
    padding-bottom: 5px;

    &:last-child {
      ${props => props.theme?.rtl ? css`
        margin-right: 20px;
      ` : css`
        margin-left: 20px;
      `}
    }
  }
`

export const AddInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent !important;
  input {
    flex: 1;
    height: 57px;
  }
  button {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}
  }
`

export const AddMetaFiled = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  width: 100%;
`

export const SelectWrapper = styled.div`
    > div {
    width: 100%;
    border: none;
    height: 100%;

    > div:first-child {
      height: 100%;
      background-color: ${props => props.theme.colors.secundary};
      border: none;
      border-radius: 7.6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      padding-left: 20px;
    }
    .list {
      background-color: ${props => props.theme.colors.secundary};
      border: none;
      
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
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
  display: flex;
  align-items: center;
  padding: 5px;
`
export const WarningMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 100;
  bottom: 40px;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 0px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;

  right: 0px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.warning};
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0 10px;
    flex: 1;
  }

  a {
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    padding: 0px 20px;
    font-size: 14px;
    line-height: 24px;
    ${({ isLateralBar }) => isLateralBar ? css`
      right: 0px;
    ` : css`
      right: 0px;
    `}
    ${({ isLateralBar }) => isLateralBar ? css`
      bottom: -25px;
    ` : css`
      bottom: -20px;
    `}
    ${props => props.theme?.rtl && css`
      left: 0px;
      right: initial;
    `}

    span {
      white-space: nowrap;
    }
  }
`
