import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
  @media (min-width: 1000px) {
    padding: 20px;
  }
`

export const ScheduleSection = styled.div`
  border-top: 1px solid #E9ECEF;
  margin-top: 30px;
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.headingColor};
`

export const ScheduleBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #E9ECEF;
`

export const CheckBoxWrapper = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}

  svg {
    font-size: 20px;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  width: 20%;

  h4 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 18px;
    font-weight: 600;
    ${props => props.theme?.rtl ? css`
      margin: 0 10px 0 0;
    ` : css`
      margin: 0 0 0 10px;
    `}
  }
`

export const TimeSectionContainer = styled.div`
  flex: 1;
  text-align: center;
  > p {
    margin: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const TimeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  color: ${props => props.theme.colors.lightGray};
`

export const TimeSelect = styled.select`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  color: ${props => props.theme.colors.lightGray};
`

export const TimeSelectContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 7px;
  padding: 5px 15px;
`

export const DeleteButton = styled.div`
  ${({ disabled }) => disabled ? css`
    pointer-events: none;
    opacity: 0.3;
  ` : css`
    cursor: pointer;
  `}
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
  svg {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const AddButton = styled.div`
  ${({ disabled }) => disabled ? css`
    pointer-events: none;
    opacity: 0.6;
  ` : css`
    cursor: pointer;
  `}
  ${props => props.theme?.rtl ? css`
    margin-right: 15px;
  ` : css`
    margin-left: 15px;
  `}
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
  }
`

export const ScheduleActionBlock = styled.div`
  display: flex;
`

export const AddScheduleButton = styled.div`
  ${({ disabled }) => disabled ? css`
    pointer-events: none;
    opacity: 0.6;
  ` : css`
    cursor: pointer;
  `}
  ${props => props.theme?.rtl ? css`
    margin-left: 5px;
  ` : css`
    margin-right: 5px;
  `}

  svg {
    color: ${props => props.theme.colors.primary};
  }
`
