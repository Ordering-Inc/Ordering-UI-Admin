import styled, { css } from 'styled-components'

export const FormContainer = styled.div``

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  label {
    font-size: 14px;
  }

  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
    font-size: 14px;

    ${({ isTimezone }) => isTimezone && css`
      > div:first-child {
        > div {
          overflow: hidden;
        }
      }
      .list-wrapper {
        font-size: 12px;
      }
    `}
  }
`
