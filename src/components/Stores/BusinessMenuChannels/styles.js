import styled, { css } from 'styled-components'

export const BusinessMenuChannelsContainer = styled.div`
  max-height: calc(100vh - 200px);
  overflow: auto;
  padding: 0 5px;
  margin-top: 27px;
  input:not([type='checkbox']),
  textarea {
    width: 100%;
  }
  > button {
    height: 40px;
    margin-top: 50px;
  }
`

export const TabOption = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};
  
  > svg {
    font-size: 20px;
    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const TabOptionName = styled.span`
  color: ${props => props.theme.colors.headingColor};
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`

export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 16px;
    ` : css`
      margin-right: 16px;
    `}
  }
`
