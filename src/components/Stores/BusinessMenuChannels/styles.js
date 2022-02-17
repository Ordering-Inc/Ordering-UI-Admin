import styled, { css } from 'styled-components'

export const BusinessMenuChannelsContainer = styled.div`
  max-height: calc(100vh - 200px);
  overflow: auto;
  padding: 0 5px;
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
