import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
  > button {
    height: 44px;
    margin-top: 50px;
  }
  @media (min-width: 1000px) {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
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
export const BottomActionContainer = styled.div`
  margin-top: 20px;
  > div {
    display: flex;
    align-items: center;
    > button {
      height: 44px;
    }
  }
  @media (min-width: 1000px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
export const SkipButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  ${props => props.theme?.rtl ? css`
    margin-left: 60px;
  ` : css`
    margin-right: 60px;
  `}
`
