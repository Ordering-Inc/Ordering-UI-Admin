import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  padding: 3px 0;
  text-transform: capitalize;

  img {
    width: 19px;
    height: 19px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
  }
`

export const DeadlineOk = styled.div`
  color: ${props => props.theme.colors.deadlineOk};
`
export const DeadlineRisk = styled.div`
  color: ${props => props.theme.colors.deadlineRisk};
`
export const DeadlineDelayed = styled.div`
  color: ${props => props.theme.colors.deadlineDelayed};
`
