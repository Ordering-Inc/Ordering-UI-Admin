import styled, { css } from 'styled-components'

export const WebhooksContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.headingColor};
  margin-bottom: 30px;
`

export const UrlInputWrapper = styled.div`
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;

  input {
    width: 100%;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    padding: 6px 10px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
  }

  ${({ inActive }) => inActive && css`
    pointer-events: none;
    > input {
      cursor: not-allowed;
    }
  `}
`

export const WebhookAddForm = styled.form``

export const WebhookAddContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 13px;
`

export const HookSelectWrapper = styled.div`
  width: 40%;

  ${({ inActive }) => inActive && css`
    pointer-events: none;
    > div {
      cursor: not-allowed;
    }
  `}
`

export const DelaySelectWrapper = styled.div`
  width: 30%;
`
