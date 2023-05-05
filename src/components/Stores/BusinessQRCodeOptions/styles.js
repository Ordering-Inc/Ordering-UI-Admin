import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`

export const PublishingContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  flex: 1;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
  }
  @media (min-width: 576px) {
    padding: 20px;
  }
`

export const PublishingListWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  margin: 20px 0;
`

export const PublishingOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 18px;
  ${({ active }) => active && css`
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.backgroundInfo};
  `}
`

export const PublishingOption = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};
  
  > svg {
    font-size: 20px;
    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const PublishingName = styled.span`
  color: ${props => props.theme.colors.headingColor};
  font-size: 14px;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`
