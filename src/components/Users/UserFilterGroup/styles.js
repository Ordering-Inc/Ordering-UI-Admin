import styled, { css } from 'styled-components'

export const Container = styled.div``

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    width: 100%;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    > div {
      width: 48%;
    }
  }
`

export const FormControl = styled.div`
  margin-bottom: 15px;
  > label {
    font-size: 14px;
    margin-bottom: 10px;
  }
  > input {
    width: 100%;
    height: 54px;
  }

  & > div:not(.range) {
    width: 100%;
    height: 54px;
    background-color: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;
    border-radius: 8px;
  }

  .full-select, .date-filter-container {
    > div:first-child {
      height: 100%;
      border-radius: 8px;
    }
    .list {
      left: 0px;
      right: auto;
    }
  }
`

export const RangeSelectWrapper = styled.div`
  display: flex;
  height: 54px;
  .select {
    height: 100%;
    > div:first-child {
      width: 75px;
      height: 100%;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: ${props => props.theme.colors.secundary};
      font-size: 14px;
      border-radius: 8px;
    }
    .list {
      left: 0px;
      right: auto;
    }
  }
  input {
    width: calc(100% - 65px);
    margin-left: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 0;
      margin-right: 15px;
    `}
  }
`

export const Option = styled.div`
  color: ${props => props.theme.colors.secundaryContrast};
  font-size: 14px;
  white-space: nowrap;
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  label {
    margin-bottom: 0px;
    font-size: 14px;
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
