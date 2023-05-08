import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 20px;
  width: 100%;
`

export const DetailHeder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}
  > div:first-child {
    flex: 1;
    display: flex;
    align-items: center;
    > span {
      font-weight: bold;
      font-size: 20px;
    }
    label {
      margin: 0 20px;
    }
  }
`

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`

export const ActionSelectorWrapper = styled.div`
  .select {
    border: none;

    > div:first-child {
      padding: 5px;
      border-radius: 8px;
      svg {
        font-size: 20px;
      }
      &:hover {
        background: ${props => darken(0.04, props.theme.colors.secundary)} !important;
      }
      &:active {
        background: ${props => darken(0.1, props.theme.colors.secundary)} !important;
      }
    }
    .select-arrow {
      display: none;
    }
    .list {
      .list-wrapper {
        > div {
          font-size: 14px;
          color: #E63757;
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
`

export const ActionButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding-bottom: 15px;
  button {
    border-radius: 8px;
    height: 44px;
  }
`

export const FormControl = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 9px;
  }
  input {
    width: 100%;
    height: 44px;
  }
`

export const SelectWrapper = styled.div`
  margin: 25px 0;

  label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 9px;
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
        max-height: 300px;
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
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
`

export const Logo = styled.img`
  width: 25px;
  height: 25px;
  min-width: 25px;
  border-radius: 8px;
  margin-right: 15px;
  ${props => props.theme.rtl && css`
    margin-left: 15px;
    margin-right: 0;
  `}
`
