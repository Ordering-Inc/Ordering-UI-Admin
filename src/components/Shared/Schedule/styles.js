import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
`

export const TimeScheduleItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  > div {
    display: flex;
    align-items: center;
    h4 {
      font-size: 14px;
      font-weight: 600;
      margin: 0px;
      padding: 0 16px;
    }

    &:first-child {
      width: 90px;
    }

    &:nth-child(2) {
      flex-direction: column;
      flex: 1;
      margin: 0 10px;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
  
        svg {
          font-size: 20px;
          cursor: pointer;
  
          ${props => props.theme?.rtl ? css`
            margin-right: 16px;
          ` : css`
            margin-left: 16px;
          `}
        }
      }
      > p {
        margin: 6px 0;
      }
    }

    &:nth-child(3) {
      > span {
        svg {
          cursor: pointer;
          font-size: 20px;
          color: ${props => props.theme.colors.primary};
          ${props => props.theme?.rtl ? css`
            margin-left: 10px;
          ` : css`
            margin-right: 10px;
          `}
        }
      }
    }
  }
`

export const SelectWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  width: 90px;
  .select {
    border: none;
    svg {
      display: none;
    }
    .list {
      width: 100%;
      > div {
        > div {
          min-width: initial;
        }
      }
    }
  }
`

export const Option = styled.div`
  white-space: nowrap;
`

export const SplitLine = styled.div`
  height: 1px;
  width: 8px;
  margin: 0 8px;
  background-color: ${props => props.theme.colors.disabled};
`
export const IconWrapper = styled.span`
  ${({ isHide }) => isHide ? css`
    opacity: 0;
    pointer-events: none;
  ` : css`
    opacity: 1;
  `}
`

export const AddScheduleIconWrapper = styled.div`
  svg {
    color: ${props => props.theme.colors.primary};
  }
`
