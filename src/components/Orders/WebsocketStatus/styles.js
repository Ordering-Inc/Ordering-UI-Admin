import styled, { css } from 'styled-components'

export const Contatiner = styled.div`
  background: ${props => props.theme.colors.secundary};
  border-radius: 8px;
  min-height: 41px;
  padding: 0 15px;
  
  @media (min-width: 576px) {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
`

export const WebsocketStatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;

  ${props => props.theme?.rtl ? css`
    margin-right: 6px;
  ` : css`
    margin-left: 6px;
  `}

  ${({ status }) => status === 0 && css`
    background-color: #FF9922;
  `}
  ${({ status }) => status === 1 && css`
    background-color: #00D27A;
  `}
  ${({ status }) => status === 2 && css`
    background-color: #E63757;
  `}
`
export const DateWrapper = styled.div`
  font-size: 12px;
  text-align: center;
`
