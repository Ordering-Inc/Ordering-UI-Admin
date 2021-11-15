import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
  > button {
    margin: 30px 0 20px;
    height: 44px;
  }
`

export const ScheduleInnerContainer = styled.div`
`

export const SectionContainer = styled.div`
  margin-bottom: 25px;
  padding-top: 10px;
`

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 6px;
`

export const SubDescription = styled.p`
  ${({ isGray }) => isGray && css`
   color: ${props => props.theme.colors.lightGray};
  `}
  font-size: 14px;
  margin: 0px;
`

export const DateRangeItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  ${props => props.theme?.rtl ? css`
    p {
      padding-right: 10px;
    }
    input {
      margin-right: 10px;
    }
  ` : css`
    p {
      padding-left: 10px;
    }
    input {
      margin-left: 10px;
    }
  `}
`

export const RadioButtonWrapper = styled.div`
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors.secundaryLight};
    font-size: 18px;
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
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
    .select {
      svg {
        display: none;
      }
      .list {
        width: 100%;
      }
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

export const Option = styled.div`
`

export const SplitLine = styled.div`
  height: 1px;
  width: 8px;
  margin: 0 8px;
  background-color: ${props => props.theme.colors.disabled};
`
export const ScheduleTypeContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding-bottom: 19px;
  margin-top: 30px;
  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    > div:first-child {
      padding: 4px 15px;
    }
  }
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
