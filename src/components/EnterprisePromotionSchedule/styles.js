import styled from 'styled-components'

export const ScheduleContainer = styled.div`
  padding: 15px 5px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    padding-bottom: 32px;
    margin: 0;
  }

  > button {
    height: 44px;
    margin-top: 36px;
  }
`
