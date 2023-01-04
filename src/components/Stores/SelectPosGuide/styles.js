import styled, { css } from 'styled-components'

export const Container = styled.div`
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 35px;
    &.other {
      text-align: left;
    }
  }
`

export const SelectPosWrapper = styled.div`
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
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
  img {
    margin-right: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 15px;
      margin-right: 0;
    `}
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  button {
    width: 100%;
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

  ${({ hasOther }) => hasOther && css`
    margin-top: 15px;
  `}
`

export const CheckMateAndDeliverectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  width: calc(100% + 24px);
  max-height: 68vh;
  overflow: auto;
  > div {
    margin: 6px 12px;
    width: calc(33.33% - 24px);
  }
`

export const PosItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  min-height: 78px;
  cursor: pointer;
  ${({ active }) => active && css`
    border: 1px solid ${props => props.theme.colors.primary};
  `}
  img {
    margin-right: 5px;
    ${props => props.theme.rtl && css`
      margin-left: 5px;
      margin-right: 0;
    `}
  }
  > div {
    h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      margin: 0;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      margin: 0;
    }
  }
`
