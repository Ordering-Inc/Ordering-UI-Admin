import styled, { css } from 'styled-components'

export const SettingsSelectContainer = styled.div`
  margin-bottom: 20px;
`

export const SelectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
  }
`

export const SelectContent = styled.div`
  p {
    font-size: 14px;
    color: #748194;
  }

  .select {
    border: none;
    width: 100%;
    line-height: 26px;
    padding: 0;

    > div:first-child {
      padding: 8px 15px;
      border-radius: 7.6px;
      border: 1px solid ${props => props.theme.colors.borderColor};
      font-size: 14px;
    }

    .list {
      max-height: 300px;
      overflow: auto;
    }
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
  line-height: 2;
  font-weight: 500;
`

export const OptionsError = styled.span`
  font-size: 12px;
  color: #d83520;
`
export const InputWrapper = styled.div`
  height: 26px;

  > input {
    position: absolute;
    top: 0;
    height: 42px;
    width: calc(100% - 40px);
    border: none;
    ${props => props.theme?.rtl ? css`
      right: 0px;
    ` : css`
      left: 0px;
    `}
  }
`
