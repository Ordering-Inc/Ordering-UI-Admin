import styled, { css } from 'styled-components'

export const IntegrationsContainer = styled.div`
  flex: 1;
  padding: 20px 10px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  ${props => props.theme?.rtl ? css`
    padding-right: 20px;
  ` : css`
    padding-left: 20px;
  `}

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
    line-height: 35px;
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

export const SettingListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SettingItemContainer = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.borderColor};
  }

  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(40% - 20px);
    max-width: 480px;
  }
`

export const IconWrapper = styled.div`
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 8px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
  }
`

export const SettingItemContent = styled.div`
  flex: 1;
  ${props => props.theme?.rtl ? css`
    margin-right: 13px;
  ` : css`
    margin-left: 13px;
  `}
  h5 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  p {
    color: ${props => props.theme.colors.lightGray};
    font-size: 12px;
    margin: 0px;
  }
`
