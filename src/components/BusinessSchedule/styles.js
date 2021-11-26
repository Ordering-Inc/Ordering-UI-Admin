import styled from 'styled-components'

export const ScheduleContainer = styled.div`
  > button {
    height: 44px;
  }
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
