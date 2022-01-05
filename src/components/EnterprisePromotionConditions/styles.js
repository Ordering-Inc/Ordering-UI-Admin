import styled, { css } from 'styled-components'

export const ConditionsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  
  > button {
    height: 44px;
    margin: 30px 0;
  }
`
export const Header = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`
export const ConditionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 0;

  > div {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      ${props => props.theme?.rtl ? css`
        margin-right: 20px;
      ` : css`
        margin-left: 20px;
      `}
    }
  }
`
export const EditButton = styled.span`
  cursor: pointer;
  border-radius: 8px;
  padding: 2px 7px;
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    background-color: #1507260a;
  }
  &:active {
    background-color: #1507261a;
  }
`
export const CheckboxWrapper = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #FFF;
    font-size: 16px;
  }

  ${({ active }) => active ? css`
    cursor: pointer;
    background: ${props => props.theme.colors.primary};
  ` : css`
    cursor: not-allowed;
    border: 1px solid #B1BCCC;
  `}
`
