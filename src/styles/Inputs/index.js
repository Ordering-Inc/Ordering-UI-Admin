import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { Button } from '../Buttons'

export const Input = styled.input`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.headingColor};
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 15px;
  outline: none;

  &:focus {
    border-color: ${() => darken(0.07, '#CCC')};
  }

  ${({ w }) => w && css`
    width: 20%;
  `}

  &::placeholder,
  &::-webkit-input-placeholder {
    color: #B1BCCC;
  }
  &:-ms-input-placeholder {
    color: #B1BCCC;
  }

  &:read-only {
    background-color: #F8F9FA;
    cursor: not-allowed;
    border-color: #DEE2E6;
  }
`

export const InputGroup = styled.div`
  display: flex;

  & > ${Input}:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    padding-left: 0;
  }

  & > ${Input}:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
    padding-right: 0;
  }

`

export const InputGroupLeft = styled.div`
  border-radius: 34px 0 0 34px;
  line-height: 34px;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 14px;
  border-width: 1px;
  height: 34px;
  border-style: solid;
  border-right-width: 0;
  ${props => props.theme?.rtl && css`
        border-left-width: 0;
        border-right-width: initial;
    `}

  & ${Button} {
    margin-left: -7px;
    ${props => props.theme?.rtl && css`
        margin-right: -7px;
        margin-left: 0;
    `}
  }
`

export const InputGroupRight = styled(InputGroupLeft)`
  border-radius: 0 34px 34px 0;
  line-height: 34px;
  border-right-width: 1px;
  border-left-width: 0;

  ${props => props.theme?.rtl && css`
        border-left-width: 1px;
        border-right-width: 0;
    `}

  & ${Button} {
    margin-left: 0;
    margin-right: -7px;
    ${props => props.theme?.rtl && css`
        margin-left: -7px;
        margin-right: 0;
    `}
  }
`

export const InputPrimary = styled(Input)`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};

  &:focus {
    border-color: ${props => darken(0.1, props.theme.colors.primary)};
  }
`

export const InputSecundary = styled(Input)`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.secundary};
  border-color: ${props => props.theme.colors.secundary};

  &:focus {
    border-color: ${props => darken(0.1, props.theme.colors.secundary)};
  }
`
export const InputGroupPrimary = styled(InputGroup)`
  & > ${InputGroupLeft} {
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
`

export const TextArea = styled.textarea`
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  color: ${props => props.theme.colors.headingColor};
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 15px;
  outline: none;
  resize: none;
  &:focus {
    border-color: ${() => darken(0.07, '#CCC')};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #B1BCCC;
  }
  &:-ms-input-placeholder {
    color: #B1BCCC;
  }
  &:read-only {
    background-color: #F8F9FA;
    cursor: not-allowed;
    border-color: #DEE2E6;
  }
`
