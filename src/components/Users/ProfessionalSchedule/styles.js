import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 30px 0px 20px 0px;
`

export const DateRangeWrapper = styled.div`
  > h1 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 6px;
  }
  > p {
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme.colors.lightGray};
    margin: 0px;
  }
`

export const RangeItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  cursor: pointer;

  > span {
    margin-right: 12px;
    ${props => props.theme.rtl && css`
      margin-left: 12px;
      margin-right: 0px;
    `}
    svg {
      color: ${props => props.theme.colors.secundaryLight};
      &.active {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  input {
    width: 74px;
    margin-right: 12px;
    ${props => props.theme.rtl && css`
      margin-left: 12px;
      margin-right: 0px;
    `}
  }

  > label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #000;
    }
  }
`

export const ScheduleWrapper = styled.div`
  margin-top: 35px;
  > h1 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 15px;
  }
`

export const SelectWrapper = styled.div`
  margin-bottom: 15px;

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
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
`

export const ScheduleContentWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;

  button {
    height: 44px;
  }
`
