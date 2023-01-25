import styled, { css } from 'styled-components'

export const SettingsContainer = styled.div`
  margin-top: 60px;
  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
    margin-top: 0;
    text-align: center;
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
  > p {
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
`

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.lightGray};
  padding-bottom: 14px;
  transition: all 0.2s ease-out;
  :not(:last-child) {
    margin-right: 32px;
  }
  ${({ active }) => active && css`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    padding-bottom: 13px;
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 1px solid ${props => props.theme.colors.headingColor};
  `}
`
