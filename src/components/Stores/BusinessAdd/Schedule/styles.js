import styled from 'styled-components'

export const ScheduleContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 30px;
  }
  > div {
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  }
`
