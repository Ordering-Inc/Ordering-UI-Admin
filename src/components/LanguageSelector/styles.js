import styled, { css } from 'styled-components'

export const SelectWrapper = styled.div`
  position: relative;
  
  > svg {
    position: absolute;
    top: 7px;
    ${props => props.theme?.rtl ? css`
      right: 0.75rem;
    ` : css`
      left: 0.75rem;
    `}
    width: 20px;
    height: 20px;
  }

  .select {
    border: none;
    > div:first-child {
      justify-content: flex-start;
      font-size: 14px;
      font-weight: 500;
      ${props => props.theme?.rtl ? css`
        padding-right: 48px;
      ` : css`
        padding-left: 48px;
      `}

      > div:first-child {
        flex: unset;
      }
    }
  }
`
export const LanguageItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid transparent;
  svg {
    font-size: 20px;
  }
`

export const LanguageText = styled.span`
  font-size: 14px;
  margin-left: 15px;
  font-weight: 500;
  ${props => props.theme?.rtl && css`
    margin-right: 15px;
    margin-left: 0;
 `}
`
