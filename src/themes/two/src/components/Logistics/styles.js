import styled, { css } from 'styled-components'

export const WraaperLogs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  border-radius: 97px;
`
export const BubbleConsole = styled.div`
  border-radius: 50px;
  padding: 15px 25px;
  max-width: 40%;
  margin-bottom: 15px;
  background: #EFEFEF;
  text-align: center;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  @media (min-width: 1024px){
    max-width: 30%
  }
`
export const TimeofSent = styled.p`
  position: relative;
  text-align: right;
  font-size: 0.8em;
  margin-block-start: 0.2em;
  margin-block-end: initial;

  ${props => props.theme?.rtl && css`
    text-align: left;
  `}
`
export const Reason = styled.p`
  text-align: center;
  margin: 0px;
`
export const SkeletonHitory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 20px;

  span {
    border-radius: 5px;
  }

  @media (max-width: 576px) {
    span {
      width: 250px !important;
    }
  }
`
