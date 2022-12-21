import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0;
  }
`

export const SelectWrapper = styled.div`
  margin-top: 30px;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
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
        max-height: 200px;
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
  img {
    width: 24px;
    height: 24px;
    border-radius: 7px;
    margin-right: 10px;
  }
  svg {
    font-size: 24px;
    border-radius: 7px;
    margin-right: 10px;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }
  button {
    min-width: 300px;
    border-radius: 8px;
    height: 44px;
    position: relative;
    svg {
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 21px;
    }
  }
`

export const SearchWrapper = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
  }
  input {
    width: 100%;
    height: 44px;
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
      color: ${props => props.theme.colors.secundaryLight};
    }

    &:-ms-input-placeholder {
      color: ${props => props.theme.colors.secundaryLight};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.colors.secundaryLight};
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }
`

export const EmptyData = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 30px;
`
