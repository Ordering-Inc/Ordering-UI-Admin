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
export const ScheduleContentWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding: 20px 0 30px 0;

  button {
    height: 44px;
  }
`
