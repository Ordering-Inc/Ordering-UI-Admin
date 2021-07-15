import styled, { css } from 'styled-components'

export const SettingItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 15px 0;
  padding: 20px 10px;
  transition: all 0.3s;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid transparent;

  ${({ active }) => active && css`
    border: 1px solid #2C7BE5 !important;
  `}

  &:hover {
    background: #E9F2FE;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;

  img {
    width: 24px;
    height: 24px;
  }
  svg {
    font-size: 24px;
    color: #B1BCCC;
  }
`

export const SettingItemContent = styled.div`
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #344050;
  margin-right: 14px;
`

export const SettingItemDescription = styled.div`
  font-weight: normal;
  font-size: 12px;
  color: #909BA9;
`
