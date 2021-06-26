import styled from 'styled-components'

export const SettingItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 35px 0;

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
  font-size: 12px;
  color: #344050;
  margin-right: 14px;
`

export const NewItem = styled.p`
  font-size: 10px;
  color: #2C7BE5;
`

export const SettingItemDescription = styled.div`
  font-weight: normal;
  font-size: 10px;
  color: #909BA9;
`
export const NewField = styled.span`
  background: #E9F2FE;
  border-radius: 50px;
  padding: 2px 8px;
  font-size: 10px;
  color: #2C7BE5;
  margin-left: 12px;
`