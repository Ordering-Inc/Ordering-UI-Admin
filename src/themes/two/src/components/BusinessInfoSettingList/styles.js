import styled, { css } from 'styled-components'

export const SettingListConatiner = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  overflow-x: auto;
  @media (min-width: 1025px) {
    overflow-x: hidden;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #E9ECEF;
`

export const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;

  ${({ active }) => active && css`
    border-bottom: 3px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`
