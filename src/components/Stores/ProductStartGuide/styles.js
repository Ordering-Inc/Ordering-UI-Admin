import styled, { css } from 'styled-components'

export const Container = styled.div`
  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0;
  }
`

export const GuideItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  min-height: 78px;
  margin-top: 30px;
  border-radius: 7.6px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.borderColor};
  transition: all 0.3s linear;

  &:hover {
    border: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  svg {
    font-size: 24px;
    margin-right: 20px;
    ${props => props.theme.rtl && css`
      margin-right: 0px;
      margin-left: 20px;
    `}
  }
`

export const InfoWrapper = styled.div`
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin: 0%;
  }
  p {
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`
