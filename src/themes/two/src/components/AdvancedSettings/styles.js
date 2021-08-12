import styled, { css } from 'styled-components'

export const AdvancedSettingsContainer = styled.div`
  flex: 1;
  padding: 25px 15px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const SettingHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

  > h1 {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
    line-height: 32px;
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const ContentWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`

export const SettingItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin: 30px 0;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
  }

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.33%;
  }
`

export const IconWrapper = styled.div`
  border-radius: 8px;
  padding: 20px;
  background-color: ${props => props.theme.colors.secundary};

  ${props => props.theme?.rtl ? css`
    margin-left: 16px;
  ` : css`
    margin-right: 16px;
  `}
  > svg {
    font-size: 24px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const SettingItemContent = styled.div`
  h5 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
    margin: 0px;
  }
`
