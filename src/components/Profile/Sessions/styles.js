import styled, { css } from 'styled-components'

export const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.secundaryDarkContrast};
  border-radius: 8px;
  padding: 18px 24px;

  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  }
`

export const NoSessionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    height: 44px;
    border-radius: 8px;
  }
`

export const NoMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

export const SessionItem = styled.div`
  display: flex;
  padding: 18px 0px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  
  > p.current {
    flex: 1;
    font-weight: 700;
    font-size: 14px;
    margin: 0 15px;
  }
`

export const MoreInfoWrapper = styled.div`
  span {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primary};
    height: 24px;
    padding: 0px;
    border-radius: 0px;
    margin-top: 18px;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 14px;
    svg {
      margin-left: 10px;
      ${props => props.theme.rtl && css`
        margin-right: 10px;
        margin-left: 0px;
      `}
    }
  }
`

export const SessionsWrapper = styled.div``

export const DurationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 14px;
  }
  > span {
    display: none;
    margin: 0 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    > span {
      display: block;
    }
  }
`

export const SeessionDelete = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 3px;
  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
  }
  &:hover {
    background-color: ${props => props.theme.colors.secundary};
  }
`
