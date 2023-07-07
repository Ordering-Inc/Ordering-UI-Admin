import styled, { css } from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 25px 20px;
  overflow: auto;

  > h2 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 20px;

    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 4px;
  }
`

export const FormControl = styled.div`
  margin-top: 20px;
  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
    span {
      font-size: 12px;
      color: ${props => props.theme.colors.primary};
    }
  }
  input {
    width: 100%;
  }
`

export const ToggleOptions = styled.div`
  margin-top: 30px;
`

export const RaidoButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;

  svg {
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    font-size: 16px;
    min-width: 16px;
    margin-right: 12px;
    ${props => props.theme.rtl && css`
      margin-left: 13px;
      margin-right: 0px;
    `}
  }
  span {
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  button {
    border-radius: 8px;
    height: 44px;
  }
`
