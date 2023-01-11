import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const BusinessDetailsContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`

export const ContentWrapper = styled.div`
  margin-top: 23px;
`

export const FormControl = styled.div`
  margin-bottom: 23px;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
  }
  input {
    width: 100%;
    height: 44px;
  }
  .input-autocomplete {
    width: 100%;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    border: 1px solid ${props => props.theme.colors.borderColor};
    border-radius: 8px;
    font-size: 14px;
    padding: 10px 15px;
    outline: none;
    ::placeholder {
      color: ${props => props.theme.colors.secundaryLight};
    }

    &:-ms-input-placeholder {
      color: ${props => props.theme.colors.secundaryLight};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.colors.secundaryLight};
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }

  ${({ noBottom }) => noBottom && css`
    margin-bottom: 0px;
  `}
`

export const GoogleMapContainer = styled.div`
  margin-bottom: 23px;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 12px;
    margin-bottom: 9px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    color: ${props => props.theme.colors.lightGray};
    word-break: break-all;
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 30px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    height: 200px;
  }
`

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > div {
    width: 100%;
  }

  @media (min-width: 576px) {
    flex-direction: row;
    > div {
      width: 48%;
    }
  }
`
