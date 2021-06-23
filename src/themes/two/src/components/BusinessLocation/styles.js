import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  min-height: calc(100% - 130px);
  > button {
    position: sticky;
    top: 100%;
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 150px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  > div {
    width: 48%;
  }
`

export const WrapperCitySelector = styled.div`
  > p {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 5px;
  }
  > div {
    background: #F8F9FA;
    border: none;
  }
`

export const WrapperTimezone = styled.div`
  p {
    &:first-child {
      color: ${props => props.theme.colors.headingColor};
      margin-bottom: 5px;
    }
    &:last-child {
      margin: 0;
      padding: 10px 0;
    }
  }
`

export const WrapperGoogleAutoCompleteInput = styled.div`
  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 5px;
  }
  .input-autocomplete {
    width: 100%;
    background: #FFF;
    border: 1px solid #DBDCDB;
    border-radius: 8px;
    font-size: 16px;
    padding: 7px 15px;
    outline: none;
    ::placeholder {
      color: #DBDCDB;
    }

    &:-ms-input-placeholder {
      color: #DBDCDB;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: #DBDCDB;
    }
    &:focus {
      border-color: ${() => darken(0.07, '#CCC')};
    }
  }
`

export const WrapperAddressnotes = styled.div`
  margin-top: 25px;
  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 5px;
  }

  textarea {
    width: 100%;
  }
`
